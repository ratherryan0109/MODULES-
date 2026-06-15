import asyncio
import json
import logging
import os
import signal
import sys

from platform.config import config
from platform.queue.redis_queue import ExecutionQueue
from platform.docker.runner import runner

logging.basicConfig(
    level=getattr(logging, config.LOG_LEVEL.upper(), logging.INFO),
    format='%(asctime)s [WORKER] %(levelname)s %(message)s',
)
logger = logging.getLogger(__name__)


async def process_execution(queue: ExecutionQueue, job_id: str, code: str, packages: list[str]):
    logger.info(f'Processing execution job {job_id}')

    async def publish(msg: str):
        await queue.publish(f'job:{job_id}:output', msg)

    await queue.set_status(job_id, 'running')
    await publish(json.dumps({'type': 'job_started', 'job_id': job_id}))

    if packages:
        await queue.set_status(job_id, 'installing')
        await publish(json.dumps({
            'type': 'install_start', 'packages': packages, 'job_id': job_id,
        }))

        from platform.packages.installer import install_packages
        success = await install_packages(packages, job_id, publish)

        if not success:
            await queue.set_status(job_id, 'failed')
            await publish(json.dumps({
                'type': 'job_failed', 'job_id': job_id,
                'error': f'Failed to install packages: {", ".join(packages)}',
            }))
            return

        await publish(json.dumps({
            'type': 'install_done', 'packages': packages, 'job_id': job_id,
        }))

    await queue.set_status(job_id, 'running')
    result = await runner.run_code(job_id, code, packages, publish)

    status = 'completed' if result.get('return_code', -1) == 0 else 'failed'
    await queue.set_status(job_id, status)


async def process_install(queue: ExecutionQueue, job_id: str, packages: list[str]):
    logger.info(f'Processing install job {job_id}: {packages}')

    async def publish(msg: str):
        await queue.publish(f'job:{job_id}:output', msg)

    await queue.set_status(job_id, 'installing')
    await publish(json.dumps({
        'type': 'install_start', 'packages': packages, 'job_id': job_id,
    }))

    from platform.packages.installer import install_packages
    success = await install_packages(packages, job_id, publish)

    if success:
        await queue.set_status(job_id, 'completed')
        await publish(json.dumps({
            'type': 'install_done', 'packages': packages, 'job_id': job_id,
        }))
    else:
        await queue.set_status(job_id, 'failed')
        await publish(json.dumps({
            'type': 'install_failed', 'packages': packages, 'job_id': job_id,
        }))


async def worker_loop():
    queue = ExecutionQueue()
    await queue.connect()
    logger.info('Worker started, waiting for jobs...')

    semaphore = asyncio.Semaphore(config.MAX_CONCURRENT)

    async def handle_job(queue_type: str, payload: str):
        async with semaphore:
            try:
                data = json.loads(payload)
                if queue_type == 'execution':
                    await process_execution(
                        queue, data['job_id'], data['code'], data.get('packages', []),
                    )
                elif queue_type == 'install':
                    await process_install(queue, data['job_id'], data['packages'])
            except Exception as e:
                logger.error(f'Job error: {e}')

    tasks = set()

    try:
        while True:
            result = await queue.dequeue(timeout=1)
            if result:
                queue_type, payload = result
                if isinstance(payload, bytes):
                    payload = payload.decode('utf-8')
                task = asyncio.create_task(handle_job(queue_type, payload))
                tasks.add(task)
                task.add_done_callback(tasks.discard)
    except asyncio.CancelledError:
        logger.info('Worker shutting down...')
        for task in tasks:
            task.cancel()
        await asyncio.gather(*tasks, return_exceptions=True)
        await queue.disconnect()


def main():
    try:
        asyncio.run(worker_loop())
    except KeyboardInterrupt:
        logger.info('Worker stopped by user')


if __name__ == '__main__':
    main()
