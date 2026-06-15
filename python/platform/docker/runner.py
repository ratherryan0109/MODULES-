import asyncio
import json
import logging
import os
import tempfile
import time
import uuid

from platform.config import config
from platform.docker.limits import get_container_kwargs, get_exec_timeout, get_max_output_bytes
from platform.docker.container_manager import pool

logger = logging.getLogger(__name__)


class DockerRunner:
    def __init__(self):
        self._subprocess_fallback = not pool.available

    async def run_code(self, job_id: str, code: str, packages: list[str],
                       publish_fn) -> dict:
        if self._subprocess_fallback:
            return await self._run_subprocess(job_id, code, publish_fn)
        return await self._run_docker(job_id, code, packages, publish_fn)

    async def _run_docker(self, job_id: str, code: str, packages: list[str],
                          publish_fn) -> dict:
        container = pool.acquire()
        if not container:
            await publish_fn(json.dumps({
                'type': 'job_failed',
                'error': 'Failed to acquire execution container',
            }))
            return {'return_code': -1, 'error': 'No container available', 'time': 0, 'output': ''}

        tmp_dir = tempfile.mkdtemp(prefix='pyexec_')
        script_path = os.path.join(tmp_dir, 'script.py')
        try:
            with open(script_path, 'w', encoding='utf-8') as f:
                f.write(code)

            host_tmp = tmp_dir
            container_tmp = '/mnt/script'

            container.put_archive(
                container_tmp,
                self._create_tar(script_path, 'script.py'),
            )

            exec_result = container.exec_run(
                ['python', '-u', f'{container_tmp}/script.py'],
                stdin=True,
                socket=True,
                demux=False,
            )

            sock = exec_result.output
            output_lines = []
            error_lines = []
            start_time = time.time()
            output_size = 0
            max_output = get_max_output_bytes()
            timeout = get_exec_timeout()
            input_waiting = False

            async def read_socket():
                nonlocal output_size, input_waiting
                loop = asyncio.get_event_loop()
                buf = b''
                deadline = time.time() + timeout

                while time.time() < deadline:
                    try:
                        data = await loop.run_in_executor(
                            None, lambda: sock._sock.recv(4096)
                        )
                    except Exception:
                        break

                    if not data:
                        break

                    buf += data
                    output_size += len(data)

                    while b'\n' in buf:
                        line, buf = buf.split(b'\n', 1)
                        try:
                            text = line.decode('utf-8', errors='replace')
                        except Exception:
                            text = repr(line)

                        if text.startswith('\x1b['):
                            error_lines.append(text)
                            await publish_fn(json.dumps({
                                'type': 'stderr', 'text': text, 'job_id': job_id,
                            }))
                        else:
                            output_lines.append(text)
                            await publish_fn(json.dumps({
                                'type': 'stdout', 'text': text + '\n', 'job_id': job_id,
                            }))

                        if output_size > max_output:
                            await publish_fn(json.dumps({
                                'type': 'stderr', 'text': 'Output truncated (exceeded limit)\n',
                                'job_id': job_id,
                            }))
                            sock.close()
                            break

                    input_waiting = False

                if buf:
                    text = buf.decode('utf-8', errors='replace')
                    output_lines.append(text)
                    await publish_fn(json.dumps({
                        'type': 'stdout', 'text': text, 'job_id': job_id,
                    }))

            await read_socket()

            elapsed = round(time.time() - start_time, 3)
            exit_code = exec_result.exit_code if hasattr(exec_result, 'exit_code') else 0

            if time.time() - start_time >= timeout:
                await publish_fn(json.dumps({
                    'type': 'job_failed', 'job_id': job_id,
                    'error': 'Execution timed out',
                    'time': elapsed,
                }))
                return {
                    'return_code': -1, 'output': ''.join(output_lines),
                    'error': 'Execution timed out', 'time': elapsed,
                }

            await publish_fn(json.dumps({
                'type': 'job_done', 'job_id': job_id,
                'return_code': exit_code, 'time': elapsed,
            }))

            return {
                'return_code': exit_code,
                'output': ''.join(output_lines),
                'error': '\n'.join(error_lines) if error_lines else '',
                'time': elapsed,
            }

        except Exception as e:
            elapsed = round(time.time() - start_time, 3)
            await publish_fn(json.dumps({
                'type': 'job_failed', 'job_id': job_id,
                'error': str(e), 'time': elapsed,
            }))
            return {'return_code': -1, 'output': '', 'error': str(e), 'time': elapsed}

        finally:
            pool.release(container)
            pool.refill()
            try:
                import shutil
                shutil.rmtree(tmp_dir, ignore_errors=True)
            except Exception:
                pass

    async def _run_subprocess(self, job_id: str, code: str,
                              publish_fn) -> dict:
        import subprocess
        import tempfile as tf

        tmp = None
        start_time = time.time()
        try:
            with tf.NamedTemporaryFile(mode='w', suffix='.py',
                                       delete=False, encoding='utf-8') as f:
                f.write(code)
                tmp = f.name

            await publish_fn(json.dumps({
                'type': 'job_started', 'job_id': job_id,
            }))

            proc = await asyncio.create_subprocess_exec(
                sys.executable, tmp,
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE,
                env={**os.environ,
                     'PYTHONDONTWRITEBYTECODE': '1',
                     'PYTHONUNBUFFERED': '1'},
            )

            stdout_lines = []
            stderr_lines = []

            async def read_stream(stream, label, lines_list):
                while True:
                    line = await stream.readline()
                    if not line:
                        break
                    text = line.decode('utf-8', errors='replace').rstrip('\n')
                    lines_list.append(text)
                    msg_type = 'stderr' if label == 'stderr' else 'stdout'
                    await publish_fn(json.dumps({
                        'type': msg_type, 'text': text + '\n', 'job_id': job_id,
                    }))

            await asyncio.gather(
                read_stream(proc.stdout, 'stdout', stdout_lines),
                read_stream(proc.stderr, 'stderr', stderr_lines),
            )

            await proc.wait()
            elapsed = round(time.time() - start_time, 3)

            await publish_fn(json.dumps({
                'type': 'job_done', 'job_id': job_id,
                'return_code': proc.returncode, 'time': elapsed,
            }))

            return {
                'return_code': proc.returncode,
                'output': '\n'.join(stdout_lines),
                'error': '\n'.join(stderr_lines) if proc.returncode != 0 else '',
                'time': elapsed,
            }

        except Exception as e:
            elapsed = round(time.time() - start_time, 3)
            await publish_fn(json.dumps({
                'type': 'job_failed', 'job_id': job_id,
                'error': str(e), 'time': elapsed,
            }))
            return {'return_code': -1, 'output': '', 'error': str(e), 'time': elapsed}

        finally:
            if tmp:
                try:
                    os.unlink(tmp)
                except Exception:
                    pass

    def _create_tar(self, file_path, arcname):
        import io
        import tarfile
        buf = io.BytesIO()
        with tarfile.open(fileobj=buf, mode='w') as tar:
            tar.add(file_path, arcname=arcname)
        return buf.getvalue()


import sys

runner = DockerRunner()
