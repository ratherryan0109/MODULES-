import os
import sys

class Config:
    PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))

    PORT = int(os.environ.get('PORT', '8000'))
    REDIS_URL = os.environ.get('REDIS_URL', 'redis://localhost:6379/0')

    MAX_CONCURRENT = int(os.environ.get('MAX_CONCURRENT', '4'))
    MAX_TIMEOUT = int(os.environ.get('MAX_TIMEOUT', '30'))
    MAX_OUTPUT = int(os.environ.get('MAX_OUTPUT', '1048576'))
    MAX_MEMORY = int(os.environ.get('MAX_MEMORY', str(512 * 1024 * 1024)))

    CONTAINER_CPU = float(os.environ.get('CONTAINER_CPU', '0.5'))
    CONTAINER_PIDS_LIMIT = int(os.environ.get('CONTAINER_PIDS_LIMIT', '100'))
    CONTAINER_IMAGE = os.environ.get('CONTAINER_IMAGE', 'python:3.13-slim')

    PIP_CACHE_DIR = os.environ.get('PIP_CACHE_DIR',
        os.path.join(PROJECT_ROOT, '.pip-cache'))

    LOG_LEVEL = os.environ.get('LOG_LEVEL', 'info')

    STD_MODULE_NAMES = frozenset({
        'abc', 'aifc', 'argparse', 'array', 'ast', 'asynchat', 'asyncio',
        'asyncore', 'atexit', 'audioop', 'base64', 'bdb', 'binascii',
        'binhex', 'bisect', 'builtins', 'bz2', 'calendar', 'cgi', 'cgitb',
        'chunk', 'cmath', 'cmd', 'code', 'codecs', 'codeop', 'collections',
        'colorsys', 'compileall', 'concurrent', 'configparser', 'contextlib',
        'contextvars', 'copy', 'copyreg', 'cProfile', 'crypt', 'csv', 'ctypes',
        'curses', 'dataclasses', 'datetime', 'dbm', 'decimal', 'difflib',
        'dis', 'distutils', 'doctest', 'email', 'encodings', 'enum', 'errno',
        'faulthandler', 'fcntl', 'filecmp', 'fileinput', 'fnmatch', 'fractions',
        'ftplib', 'functools', 'gc', 'getopt', 'getpass', 'gettext', 'glob',
        'graphlib', 'grp', 'gzip', 'hashlib', 'heapq', 'hmac', 'html', 'http',
        'idlelib', 'imaplib', 'imghdr', 'imp', 'importlib', 'inspect', 'io',
        'ipaddress', 'itertools', 'json', 'keyword', 'lib2to3', 'linecache',
        'locale', 'logging', 'lzma', 'mailbox', 'mailcap', 'marshal', 'math',
        'mimetypes', 'mmap', 'modulefinder', 'multiprocessing', 'netrc', 'nis',
        'nntplib', 'numbers', 'operator', 'optparse', 'os', 'ossaudiodev',
        'pathlib', 'pdb', 'pickle', 'pickletools', 'pipes', 'pkgutil',
        'platform', 'plistlib', 'poplib', 'posix', 'posixpath', 'pprint',
        'profile', 'pstats', 'pty', 'pwd', 'py_compile', 'pyclbr',
        'pydoc', 'queue', 'quopri', 'random', 're', 'readline', 'reprlib',
        'resource', 'rlcompleter', 'runpy', 'sched', 'secrets', 'select',
        'selectors', 'shelve', 'shlex', 'shutil', 'signal', 'site', 'smtpd',
        'smtplib', 'sndhdr', 'socket', 'socketserver', 'sqlite3', 'ssl',
        'stat', 'statistics', 'string', 'stringprep', 'struct', 'subprocess',
        'sunau', 'symtable', 'sys', 'sysconfig', 'syslog', 'tabnanny',
        'tarfile', 'telnetlib', 'tempfile', 'termios', 'test', 'textwrap',
        'threading', 'time', 'timeit', 'tkinter', 'token', 'tokenize',
        'tomllib', 'trace', 'traceback', 'tracemalloc', 'tty', 'turtle',
        'turtledemo', 'types', 'typing', 'unicodedata', 'unittest', 'urllib',
        'uu', 'uuid', 'venv', 'warnings', 'wave', 'weakref', 'webbrowser',
        'winreg', 'winsound', 'wsgiref', 'xdrlib', 'xml', 'xmlrpc', 'zipapp',
        'zipfile', 'zipimport', 'zlib',
    })

    @property
    def docker_available(self):
        try:
            import docker
            client = docker.from_env()
            client.ping()
            client.close()
            return True
        except Exception:
            return False

    def pip_cache_path(self):
        os.makedirs(self.PIP_CACHE_DIR, exist_ok=True)
        return self.PIP_CACHE_DIR


config = Config()
