# Working with Directories — Cheatsheet

## Quick Reference

```python
# Working with Directories — Quick Reference
# Core syntax and common patterns

# Basic os.listdir() and os.scandir()
def basic_os_listdir_and_os_scandir():
    pass

# pathlib.iterdir() and glob() pattern
def advanced_os_listdir_and_os_scandir():
    return "result"
```

## Key Concepts

- **os.listdir() and os.scandir()**
- **pathlib.iterdir() and glob()**
- **Creating directories (mkdir, makedirs)**
- **Directory tree traversal (os.walk)**
- **Filtering files by extension**
- **Directory copying and moving**
- **Directory size calculation**
- **Temporary directories (tempfile.TemporaryDirectory)**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(os_listdir_and_os_scandir_value)` | `process(os_listdir_and_os_scandir_value)` |
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

- os.listdir() and os.scandir()
- pathlib.iterdir() and glob()
- Creating directories (mkdir, makedirs)
- Directory tree traversal (os.walk)
- Filtering files by extension
- Directory copying and moving
- Directory size calculation
- Temporary directories (tempfile.TemporaryDirectory)