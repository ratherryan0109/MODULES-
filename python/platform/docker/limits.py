from platform.config import config


def get_container_kwargs(**overrides):
    kwargs = {
        'network_mode': 'none',
        'read_only': True,
        'mem_limit': overrides.get('mem_limit', config.MAX_MEMORY),
        'cpu_quota': int(overrides.get('cpu', config.CONTAINER_CPU) * 100000),
        'cpu_period': 100000,
        'pids_limit': overrides.get('pids_limit', config.CONTAINER_PIDS_LIMIT),
        'security_opt': ['no-new-privileges:true'],
        'cap_drop': ['ALL'],
        'tmp': {'/tmp': 'rw,noexec,nosuid,size=10m'},
        'working_dir': '/tmp',
        'stdin_open': True,
        'detach': True,
        'environment': {
            'PYTHONDONTWRITEBYTECODE': '1',
            'PYTHONUNBUFFERED': '1',
            'PYTHONIOENCODING': 'utf-8',
        },
        'auto_remove': True,
    }
    return kwargs


def get_exec_timeout():
    return config.MAX_TIMEOUT


def get_max_output_bytes():
    return config.MAX_OUTPUT
