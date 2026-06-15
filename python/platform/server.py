import os
import sys
import asyncio
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from platform.config import config
from platform.api import router as api_router
from platform.ws_manager import router as ws_router
from platform.queue.redis_queue import ExecutionQueue


@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.queue = ExecutionQueue()
    await app.state.queue.connect()
    os.makedirs(config.pip_cache_path(), exist_ok=True)
    yield
    await app.state.queue.disconnect()


app = FastAPI(
    title='Python Execution Platform',
    version='1.0.0',
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

app.include_router(api_router, prefix='/api/python')
app.include_router(ws_router, prefix='/api/python')

STATIC_DIRS = [
    ('', os.path.join(config.PROJECT_ROOT, '')),
]

for mount_path, dir_path in STATIC_DIRS:
    if os.path.isdir(dir_path):
        app.mount(mount_path or '/',
            StaticFiles(directory=dir_path, html=True),
            name=f'static_{mount_path.replace("/", "_") or "root"}')


def start_server(port=None):
    port = port or config.PORT
    host = os.environ.get('HOST', '0.0.0.0')
    reload_enabled = os.environ.get('RELOAD', 'false').lower() == 'true'
    print(f'  {"=" * 50}')
    print(f'     Python Mastery Course — Execution Platform')
    print(f'  {"=" * 50}')
    print(f'     SPA + API: http://localhost:{port}')
    print(f'     WebSocket: ws://localhost:{port}/api/python/ws')
    print(f'     Docker:    {"Available" if config.docker_available else "Not available (offline fallback)"} ')
    print(f'     Redis:     {config.REDIS_URL}')
    print(f'     Press Ctrl+C to stop')
    print(f'  {"=" * 50}')
    print()
    uvicorn.run(
        'platform.server:app',
        host=host,
        port=port,
        reload=reload_enabled,
        log_level=config.LOG_LEVEL,
    )


if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else config.PORT
    start_server(port)
