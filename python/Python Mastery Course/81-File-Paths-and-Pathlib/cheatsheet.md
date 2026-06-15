# File Paths and pathlib — Cheatsheet

## Quick Reference

```python
# File Paths and pathlib — Quick Reference
# Core syntax and common patterns

# Basic pathlib.Path class
def basic_pathlib_path_class():
    pass

# PurePath vs Path pattern
def advanced_pathlib_path_class():
    return "result"
```

## Key Concepts

- **pathlib.Path class**
- **PurePath vs Path**
- **Path operations (/ join, parent, name)**
- **Absolute vs relative paths**
- **CWD and home directory**
- **Path globbing and iteration**
- **Path read/write shortcuts**
- **Pathlib vs os.path comparison**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(pathlib_path_class_value)` | `process(pathlib_path_class_value)` |
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

- pathlib.Path class
- PurePath vs Path
- Path operations (/ join, parent, name)
- Absolute vs relative paths
- CWD and home directory
- Path globbing and iteration
- Path read/write shortcuts
- Pathlib vs os.path comparison