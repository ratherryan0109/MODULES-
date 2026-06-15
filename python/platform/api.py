import json
import uuid
import time

from fastapi import APIRouter, Request, HTTPException
from pydantic import BaseModel

from platform.config import config
from platform.packages.detector import detect_imports, check_installed
from platform.queue.redis_queue import ExecutionQueue

router = APIRouter()


class RunRequest(BaseModel):
    code: str
    packages: list[str] | None = None


class DetectRequest(BaseModel):
    code: str


class InstallRequest(BaseModel):
    packages: list[str]


@router.get('/status')
async def get_status(request: Request):
    queue: ExecutionQueue = request.app.state.queue
    depth = await queue.get_queue_depth() if queue.connected else 0
    return {
        'ok': True,
        'mode': 'online',
        'docker': config.docker_available,
        'queue_depth': depth,
    }


@router.post('/detect')
async def detect_packages(body: DetectRequest, request: Request):
    try:
        result = detect_imports(body.code)
        installed = check_installed(result['missing'])
        return {
            'stdlib': result['stdlib'],
            'missing': [p for p in result['missing'] if p not in installed],
            'installed': installed,
        }
    except SyntaxError as e:
        return {'error': f'Syntax error: {e}', 'stdlib': [], 'missing': [], 'installed': []}
    except Exception as e:
        return {'error': str(e), 'stdlib': [], 'missing': [], 'installed': []}


@router.post('/install')
async def install_packages(body: InstallRequest, request: Request):
    if not body.packages:
        raise HTTPException(status_code=400, detail='No packages specified')
    queue: ExecutionQueue = request.app.state.queue
    job_id = str(uuid.uuid4())
    await queue.enqueue_install(body.packages, job_id)
    return {'job_id': job_id, 'packages': body.packages, 'status': 'queued'}


@router.post('/run')
async def enqueue_run(body: RunRequest, request: Request):
    if not body.code.strip():
        raise HTTPException(status_code=400, detail='No code provided')

    detection = detect_imports(body.code)
    missing = [p for p in detection['missing'] if p not in check_installed(detection['missing'])]

    queue: ExecutionQueue = request.app.state.queue
    job_id = str(uuid.uuid4())
    await queue.enqueue(job_id, body.code, missing)
    return {
        'job_id': job_id,
        'packages_missing': missing,
        'status': 'queued',
    }


@router.get('/queue/depth')
async def queue_depth(request: Request):
    queue: ExecutionQueue = request.app.state.queue
    depth = await queue.get_queue_depth() if queue.connected else 0
    return {'depth': depth}


@router.get('/packages/cache/stats')
async def cache_stats():
    from platform.packages.cache import get_cache_stats
    return get_cache_stats()
