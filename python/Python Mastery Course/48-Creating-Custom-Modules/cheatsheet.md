# Creating Custom Modules — Cheatsheet

## Quick Reference

```python
# Creating Custom Modules — Quick Reference
# Core syntax and common patterns

# Basic Module file structure (.py files)
def basic_module_file_structure_py_files():
    pass

# __init__.py package initialization pattern
def advanced_module_file_structure_py_files():
    return "result"
```

## Key Concepts

- **Module file structure (.py files)**
- **__init__.py package initialization**
- **Relative imports (from . import)**
- **__all__ for export control**
- **Namespace packages (PEP 420)**
- **Creating installable packages (setup.py)**
- **pyproject.toml modern packaging**
- **Publishing to PyPI (twine)**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(module_file_structure_py_files_value)` | `process(module_file_structure_py_files_value)` |
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

- Module file structure (.py files)
- __init__.py package initialization
- Relative imports (from . import)
- __all__ for export control
- Namespace packages (PEP 420)
- Creating installable packages (setup.py)
- pyproject.toml modern packaging
- Publishing to PyPI (twine)