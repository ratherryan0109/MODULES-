import os
import shutil

from platform.config import config


def get_cache_dir() -> str:
    return config.pip_cache_path()


def get_cache_size() -> str:
    path = get_cache_dir()
    if not os.path.isdir(path):
        return '0 B'
    total = 0
    for dirpath, dirnames, filenames in os.walk(path):
        for f in filenames:
            fp = os.path.join(dirpath, f)
            try:
                total += os.path.getsize(fp)
            except OSError:
                pass
    for unit in ('B', 'KB', 'MB', 'GB'):
        if total < 1024:
            return f'{total:.1f} {unit}'
        total /= 1024
    return f'{total:.1f} TB'


def clear_cache():
    path = get_cache_dir()
    if os.path.isdir(path):
        for entry in os.listdir(path):
            entry_path = os.path.join(path, entry)
            try:
                if os.path.isfile(entry_path) or os.path.islink(entry_path):
                    os.unlink(entry_path)
                elif os.path.isdir(entry_path):
                    shutil.rmtree(entry_path)
            except Exception:
                pass


def warm_cache(packages: list[str] | None = None):
    import subprocess
    import sys
    if packages is None:
        packages = ['numpy', 'pandas', 'matplotlib', 'requests', 'pillow']
    cache_dir = get_cache_dir()
    for pkg in packages:
        try:
            subprocess.run(
                [sys.executable, '-m', 'pip', 'download',
                 '--cache-dir', cache_dir, '--no-deps',
                 pkg, '-d', cache_dir],
                capture_output=True, timeout=120,
            )
        except Exception:
            pass


def get_cache_stats() -> dict:
    return {
        'cache_dir': get_cache_dir(),
        'size': get_cache_size(),
        'exists': os.path.isdir(get_cache_dir()),
    }
