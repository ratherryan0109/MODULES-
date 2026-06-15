import asyncio
import json
import logging

try:
    import redis.asyncio as aioredis
    HAS_REDIS = True
except ImportError:
    HAS_REDIS = False

from platform.config import config

logger = logging.getLogger(__name__)


class ExecutionQueue:
    def __init__(self):
        self._redis = None
        self._pubsub = None
        self.connected = False
        self._in_memory_queue: asyncio.Queue = asyncio.Queue()
        self._in_memory_pubsub: dict[str, list[asyncio.Queue]] = {}

    async def connect(self):
        if not HAS_REDIS:
            logger.warning('Redis not installed, using in-memory queue')
            self.connected = True
            return
        try:
            self._redis = aioredis.from_url(
                config.REDIS_URL,
                decode_responses=True,
                socket_connect_timeout=5,
                socket_timeout=5,
            )
            await self._redis.ping()
            self.connected = True
            logger.info(f'Connected to Redis at {config.REDIS_URL}')
        except Exception as e:
            logger.warning(f'Redis connection failed ({e}), using in-memory queue')
            self._redis = None
            self.connected = True

    async def disconnect(self):
        if self._redis:
            await self._redis.aclose()
            self._redis = None
            self.connected = False

    async def enqueue(self, job_id: str, code: str, packages: list[str]):
        payload = json.dumps({'job_id': job_id, 'code': code, 'packages': packages})
        if self._redis:
            await self._redis.rpush('queue:execution', payload)
            await self._redis.set(f'job:{job_id}:status', 'queued')
        else:
            await self._in_memory_queue.put(('execution', payload))

    async def enqueue_install(self, packages: list[str], job_id: str):
        payload = json.dumps({'job_id': job_id, 'packages': packages})
        if self._redis:
            await self._redis.rpush('queue:install', payload)
            await self._redis.set(f'job:{job_id}:status', 'queued')
        else:
            await self._in_memory_queue.put(('install', payload))

    async def dequeue(self, timeout=1):
        if self._redis:
            result = await self._redis.blpop(
                ['queue:execution', 'queue:install'], timeout=timeout
            )
            if result:
                queue_name, payload = result
                return ('install' if 'install' in queue_name else 'execution', payload)
            return None
        try:
            return await asyncio.wait_for(
                self._in_memory_queue.get(), timeout=timeout
            )
        except asyncio.TimeoutError:
            return None

    async def set_status(self, job_id: str, status: str):
        if self._redis:
            await self._redis.set(f'job:{job_id}:status', status)

    async def get_status(self, job_id: str) -> str | None:
        if self._redis:
            return await self._redis.get(f'job:{job_id}:status')
        return None

    async def publish(self, channel: str, message: str):
        if self._redis:
            await self._redis.publish(channel, message)
        else:
            queues = self._in_memory_pubsub.get(channel, [])
            for q in queues:
                await q.put({'type': 'message', 'data': message, 'channel': channel})

    async def subscribe(self, channel: str):
        if self._redis:
            pubsub = self._redis.pubsub()
            await pubsub.subscribe(channel)
            return pubsub
        q: asyncio.Queue = asyncio.Queue()
        if channel not in self._in_memory_pubsub:
            self._in_memory_pubsub[channel] = []
        self._in_memory_pubsub[channel].append(q)
        return q

    async def unsubscribe(self, channel: str, pubsub):
        if self._redis:
            await pubsub.unsubscribe(channel)
            await pubsub.aclose()
        else:
            queues = self._in_memory_pubsub.get(channel, [])
            if pubsub in queues:
                queues.remove(pubsub)
            if not queues:
                self._in_memory_pubsub.pop(channel, None)

    async def get_queue_depth(self) -> int:
        if self._redis:
            exec_depth = await self._redis.llen('queue:execution')
            inst_depth = await self._redis.llen('queue:install')
            return (exec_depth or 0) + (inst_depth or 0)
        return self._in_memory_queue.qsize()
