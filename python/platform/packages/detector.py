import ast
import sys
import subprocess
import json
from functools import lru_cache

from platform.config import config


@lru_cache(maxsize=1)
def _get_stdlib_set():
    if hasattr(sys, 'stdlib_module_names'):
        return frozenset(sys.stdlib_module_names)
    return config.STD_MODULE_NAMES


def _extract_module_name(node) -> str | None:
    if isinstance(node, ast.Import):
        for alias in node.names:
            return alias.name.split('.')[0]
    elif isinstance(node, ast.ImportFrom):
        if node.module:
            return node.module.split('.')[0]
    return None


def detect_imports(code: str) -> dict:
    tree = ast.parse(code)
    imports = set()
    for node in ast.walk(tree):
        if isinstance(node, (ast.Import, ast.ImportFrom)):
            name = _extract_module_name(node)
            if name:
                imports.add(name)

    stdlib_set = _get_stdlib_set()
    stdlib = sorted(name for name in imports if name in stdlib_set)
    unknown = sorted(name for name in imports if name not in stdlib_set)

    return {
        'stdlib': stdlib,
        'missing': unknown,
        'all': sorted(imports),
    }


@lru_cache(maxsize=1)
def _get_installed_packages():
    try:
        result = subprocess.run(
            [sys.executable, '-m', 'pip', 'list', '--format=json'],
            capture_output=True, text=True, timeout=10,
        )
        if result.returncode == 0:
            packages = json.loads(result.stdout)
            return {pkg['name'].lower() for pkg in packages}
    except Exception:
        pass
    return set()


def check_installed(package_names: list[str]) -> list[str]:
    if not package_names:
        return []
    installed = _get_installed_packages()
    return [pkg for pkg in package_names if pkg.lower() in installed]


def invalidate_cache():
    _get_installed_packages.cache_clear()
