import asyncio
import json
import logging
import os
import subprocess
import sys

from platform.config import config
from platform.packages.cache import get_cache_dir

logger = logging.getLogger(__name__)


async def install_packages(packages: list[str], job_id: str, publish_fn) -> bool:
    if not packages:
        return True

    cache_dir = get_cache_dir()
    logger.info(f'Installing packages: {packages}')

    all_success = True

    for pkg in packages:
        await publish_fn(json.dumps({
            'type': 'install_progress',
            'package': pkg,
            'status': 'installing',
            'message': f'Installing {pkg}...',
            'job_id': job_id,
        }))

        try:
            proc = await asyncio.create_subprocess_exec(
                sys.executable, '-m', 'pip', 'install',
                '--cache-dir', cache_dir,
                pkg,
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.STDOUT,
            )

            while True:
                line = await proc.stdout.readline()
                if not line:
                    break
                text = line.decode('utf-8', errors='replace').rstrip('\n')
                await publish_fn(json.dumps({
                    'type': 'install_progress',
                    'package': pkg,
                    'status': 'downloading',
                    'message': text,
                    'job_id': job_id,
                }))

            await proc.wait()

            if proc.returncode == 0:
                await publish_fn(json.dumps({
                    'type': 'install_progress',
                    'package': pkg,
                    'status': 'done',
                    'message': f'{pkg} installed successfully',
                    'job_id': job_id,
                }))
            else:
                all_success = False
                await publish_fn(json.dumps({
                    'type': 'install_progress',
                    'package': pkg,
                    'status': 'failed',
                    'message': f'Failed to install {pkg}',
                    'job_id': job_id,
                }))

        except Exception as e:
            all_success = False
            await publish_fn(json.dumps({
                'type': 'install_progress',
                'package': pkg,
                'status': 'error',
                'message': str(e),
                'job_id': job_id,
            }))

    if all_success:
        from platform.packages.detector import invalidate_cache
        invalidate_cache()

    return all_success


async def install_packages_docker(packages: list[str], job_id: str, publish_fn) -> bool:
    import docker
    cache_dir = get_cache_dir()

    try:
        client = docker.from_env()
        client.ping()
    except Exception:
        logger.warning('Docker not available, using subprocess install')
        return await install_packages(packages, job_id, publish_fn)

    all_success = True
    for pkg in packages:
        await publish_fn(json.dumps({
            'type': 'install_progress',
            'package': pkg,
            'status': 'installing',
            'message': f'Installing {pkg} in container...',
            'job_id': job_id,
        }))

        try:
            container = client.containers.run(
                config.CONTAINER_IMAGE,
                ['pip', 'install', '--cache-dir', '/root/.cache/pip', pkg],
                network_mode='none',
                read_only=False,
                volumes={cache_dir: {'bind': '/root/.cache/pip', 'mode': 'rw'}},
                detach=True,
                mem_limit='256m',
                cpu_quota=50000,
                cpu_period=100000,
            )

            for line in container.logs(stream=True, stdout=True, stderr=True):
                text = line.decode('utf-8', errors='replace').rstrip('\n')
                await publish_fn(json.dumps({
                    'type': 'install_progress',
                    'package': pkg,
                    'status': 'downloading',
                    'message': text,
                    'job_id': job_id,
                }))

            result = container.wait()
            container.remove()

            if result.get('StatusCode', -1) == 0:
                await publish_fn(json.dumps({
                    'type': 'install_progress',
                    'package': pkg,
                    'status': 'done',
                    'message': f'{pkg} installed successfully',
                    'job_id': job_id,
                }))
            else:
                all_success = False
                await publish_fn(json.dumps({
                    'type': 'install_progress',
                    'package': pkg,
                    'status': 'failed',
                    'message': f'Failed to install {pkg}',
                    'job_id': job_id,
                }))

        except Exception as e:
            all_success = False
            await publish_fn(json.dumps({
                'type': 'install_progress',
                'package': pkg,
                'status': 'error',
                'message': str(e),
                'job_id': job_id,
            }))

    if all_success:
        from platform.packages.detector import invalidate_cache
        invalidate_cache()

    return all_success
