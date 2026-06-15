import asyncio
import json
import logging

from fastapi import APIRouter, WebSocket, WebSocketDisconnect, Request

from platform.config import config
from platform.queue.redis_queue import ExecutionQueue

logger = logging.getLogger(__name__)
router = APIRouter()


class ConnectionManager:
    def __init__(self):
        self._connections: dict[str, set[WebSocket]] = {}
        self._pubsub_tasks: dict[str, asyncio.Task] = {}
        self._input_futures: dict[str, asyncio.Future] = {}

    async def subscribe(self, job_id: str, websocket: WebSocket, queue: ExecutionQueue):
        if job_id not in self._connections:
            self._connections[job_id] = set()
        self._connections[job_id].add(websocket)

        if job_id not in self._pubsub_tasks:
            task = asyncio.create_task(
                self._forward_pubsub(job_id, queue)
            )
            self._pubsub_tasks[job_id] = task

    def disconnect(self, job_id: str, websocket: WebSocket):
        if job_id in self._connections:
            self._connections[job_id].discard(websocket)
            if not self._connections[job_id]:
                del self._connections[job_id]
                if job_id in self._pubsub_tasks:
                    self._pubsub_tasks[job_id].cancel()
                    del self._pubsub_tasks[job_id]

    async def _forward_pubsub(self, job_id: str, queue: ExecutionQueue):
        channel = f'job:{job_id}:output'
        pubsub = await queue.subscribe(channel)
        try:
            async for message in pubsub.listen():
                if message['type'] != 'message':
                    continue
                data = message['data']
                if isinstance(data, bytes):
                    data = data.decode('utf-8')
                disconnected = set()
                for ws in self._connections.get(job_id, set()):
                    try:
                        await ws.send_text(data)
                    except Exception:
                        disconnected.add(ws)
                for ws in disconnected:
                    self._connections[job_id].discard(ws)

                msg = json.loads(data)
                if msg.get('type') == 'input_request':
                    fut = asyncio.get_event_loop().create_future()
                    self._input_futures[job_id] = fut
                    try:
                        response = await asyncio.wait_for(fut, timeout=config.MAX_TIMEOUT)
                        await queue.publish(f'job:{job_id}:input', json.dumps({
                            'type': 'input_response',
                            'value': response,
                        }))
                    except asyncio.TimeoutError:
                        await queue.publish(f'job:{job_id}:input', json.dumps({
                            'type': 'input_timeout',
                        }))
                    finally:
                        self._input_futures.pop(job_id, None)

                if msg.get('type') in ('job_done', 'job_failed'):
                    break
        except asyncio.CancelledError:
            pass
        finally:
            await queue.unsubscribe(channel, pubsub)

    async def handle_input_response(self, job_id: str, value: str):
        fut = self._input_futures.get(job_id)
        if fut and not fut.done():
            fut.set_result(value)

    async def publish_to_all(self, job_id: str, message: str):
        for ws in self._connections.get(job_id, set()):
            try:
                await ws.send_text(message)
            except Exception:
                pass


manager = ConnectionManager()


@router.websocket('/ws')
async def websocket_endpoint(websocket: WebSocket, request: Request):
    await websocket.accept()
    queue: ExecutionQueue = request.app.state.queue

    subscribed_jobs: set[str] = set()
    heartbeat_task = None

    async def heartbeat():
        try:
            while True:
                await asyncio.sleep(30)
                try:
                    await websocket.send_json({'type': 'ping'})
                except Exception:
                    break
        except asyncio.CancelledError:
            pass

    heartbeat_task = asyncio.create_task(heartbeat())

    try:
        while True:
            raw = await websocket.receive_text()
            try:
                data = json.loads(raw)
            except json.JSONDecodeError:
                await websocket.send_json({'type': 'error', 'message': 'Invalid JSON'})
                continue

            msg_type = data.get('type')

            if msg_type == 'pong':
                continue

            if msg_type == 'subscribe':
                job_id = data.get('job_id')
                if job_id:
                    if job_id not in subscribed_jobs:
                        await manager.subscribe(job_id, websocket, queue)
                        subscribed_jobs.add(job_id)
                    await websocket.send_json({'type': 'subscribed', 'job_id': job_id})

            elif msg_type == 'input_response':
                await manager.handle_input_response(
                    data.get('job_id', ''),
                    data.get('value', ''),
                )

            elif msg_type == 'unsubscribe':
                job_id = data.get('job_id')
                if job_id and job_id in subscribed_jobs:
                    manager.disconnect(job_id, websocket)
                    subscribed_jobs.discard(job_id)

            else:
                await websocket.send_json({
                    'type': 'error',
                    'message': f'Unknown message type: {msg_type}',
                })

    except WebSocketDisconnect:
        pass
    except Exception as e:
        logger.error(f'WebSocket error: {e}')
    finally:
        if heartbeat_task:
            heartbeat_task.cancel()
        for job_id in list(subscribed_jobs):
            manager.disconnect(job_id, websocket)
