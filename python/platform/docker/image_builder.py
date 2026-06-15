import logging
import os
import tempfile

from platform.config import config

logger = logging.getLogger(__name__)

CUSTOM_IMAGE_TAG = 'course-python:latest'

DOCKERFILE_CONTENT = '''FROM {base_image}
RUN pip install --no-cache-dir \\
    numpy \\
    pandas \\
    matplotlib \\
    scipy \\
    requests \\
    httpx \\
    aiohttp \\
    pillow

RUN python -c "import numpy; import pandas; import matplotlib; import requests"
'''


def build_custom_image(docker_client):
    try:
        docker_client.images.get(CUSTOM_IMAGE_TAG)
        logger.info(f'Custom image {CUSTOM_IMAGE_TAG} already exists')
        return True
    except Exception:
        pass

    with tempfile.TemporaryDirectory() as tmpdir:
        dockerfile_path = os.path.join(tmpdir, 'Dockerfile')
        with open(dockerfile_path, 'w') as f:
            f.write(DOCKERFILE_CONTENT.format(base_image=config.CONTAINER_IMAGE))

        logger.info(f'Building custom image {CUSTOM_IMAGE_TAG}...')
        try:
            image, logs = docker_client.images.build(
                path=tmpdir,
                tag=CUSTOM_IMAGE_TAG,
                rm=True,
                forcerm=True,
            )
            logger.info(f'Built image: {image.id[:12]}')
            return True
        except Exception as e:
            logger.error(f'Failed to build custom image: {e}')
            return False


def get_execution_image(docker_client):
    try:
        docker_client.images.get(CUSTOM_IMAGE_TAG)
        return CUSTOM_IMAGE_TAG
    except Exception:
        return config.CONTAINER_IMAGE
