import logging
import time

import docker

from platform.config import config
from platform.docker.limits import get_container_kwargs
from platform.docker.image_builder import build_custom_image, get_execution_image

logger = logging.getLogger(__name__)


class ContainerPool:
    def __init__(self, pool_size=2):
        self._pool_size = pool_size
        self._pool: list = []
        self._client = None
        self._available = False

    def initialize(self):
        try:
            self._client = docker.from_env()
            self._client.ping()
            self._available = True
            build_custom_image(self._client)
            self._warm_pool()
        except Exception as e:
            logger.warning(f'Docker not available: {e}')
            self._available = False

    @property
    def available(self):
        return self._available

    def _warm_pool(self):
        if not self._available:
            return
        image = get_execution_image(self._client)
        for _ in range(self._pool_size):
            try:
                kwargs = get_container_kwargs()
                kwargs['image'] = image
                kwargs['command'] = ['python', '-c', 'import sys; sys.stdin.read()']
                container = self._client.containers.create(**kwargs)
                container.start()
                self._pool.append(container)
                logger.info(f'Warm container {container.id[:12]} started')
            except Exception as e:
                logger.error(f'Failed to create warm container: {e}')

    def acquire(self):
        if not self._available:
            return None
        attempts = 0
        while attempts < 3:
            if self._pool:
                container = self._pool.pop(0)
                try:
                    container.reload()
                    if container.status == 'running':
                        return container
                    container.remove(force=True)
                except Exception:
                    pass
            image = get_execution_image(self._client)
            try:
                kwargs = get_container_kwargs()
                kwargs['image'] = image
                kwargs['command'] = ['python', '-c', 'import sys; sys.stdin.read()']
                container = self._client.containers.create(**kwargs)
                container.start()
                return container
            except Exception as e:
                logger.error(f'Failed to acquire container: {e}')
                attempts += 1
                time.sleep(1)
        return None

    def release(self, container):
        try:
            container.remove(force=True, v=True)
        except Exception:
            pass

    def refill(self):
        if not self._available:
            return
        while len(self._pool) < self._pool_size:
            try:
                image = get_execution_image(self._client)
                kwargs = get_container_kwargs()
                kwargs['image'] = image
                kwargs['command'] = ['python', '-c', 'import sys; sys.stdin.read()']
                container = self._client.containers.create(**kwargs)
                container.start()
                self._pool.append(container)
            except Exception:
                break

    def shutdown(self):
        for c in self._pool:
            try:
                c.remove(force=True)
            except Exception:
                pass
        self._pool.clear()
        if self._client:
            self._client.close()


pool = ContainerPool()
