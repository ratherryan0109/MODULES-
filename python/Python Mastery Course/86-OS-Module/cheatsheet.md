# OS Module — Cheatsheet

## Quick Reference

```python
# OS Module — Quick Reference
# Core syntax and common patterns

# Basic os.environ for environment variables
def basic_os_environ_for_environment_variables():
    pass

# os.getcwd() and os.chdir() pattern
def advanced_os_environ_for_environment_variables():
    return "result"
```

## Key Concepts

- **os.environ for environment variables**
- **os.getcwd() and os.chdir()**
- **os.listdir() and os.scandir()**
- **os.system() and subprocess**
- **os.walk() for recursive traversal**
- **os.path module operations**
- **os.rename() and os.replace()**
- **os.stat() for file metadata**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(os_environ_for_environment_variables_value)` | `process(os_environ_for_environment_variables_value)` |
| With type check | `isinstance(value, type)` | `isinstance(x, int)` |
| Error handling | `try/except` | `try: ... except ValueError: ...` |
| Type hinting | `def func() -> Type` | `def process() -> None:` |
| Documentation | `"""Docstring"""` | `"""Function docs."""` |
| Testing | `assert` | `assert result == expected` |

## Best Practices

1. Follow PEP 8 consistently
2. Use type hints for function signatures
3. Write docstrings for all public APIs
4. Prefer list comprehensions over map/filter
5. Use context managers (with) for resources
6. Handle exceptions specifically, not broadly
7. Use pathlib over os.path for paths
8. Write tests before or alongside code

## Common Mistakes

- Mutable default arguments (use None sentinel)
- Modifying list while iterating
- Catching bare exceptions
- Confusing == and is for comparisons
- Forgetting to close files (use context managers)
- Using time.time() for performance (use timeit)

## Related Topics

- os.environ for environment variables
- os.getcwd() and os.chdir()
- os.listdir() and os.scandir()
- os.system() and subprocess
- os.walk() for recursive traversal
- os.path module operations
- os.rename() and os.replace()
- os.stat() for file metadata