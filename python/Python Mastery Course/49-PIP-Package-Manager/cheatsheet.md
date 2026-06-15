# PIP Package Manager — Cheatsheet

## Quick Reference

```python
# PIP Package Manager — Quick Reference
# Core syntax and common patterns

# Basic pip install and uninstall
def basic_pip_install_and_uninstall():
    pass

# Version specifiers (==, >=, ~=, *) pattern
def advanced_pip_install_and_uninstall():
    return "result"
```

## Key Concepts

- **pip install and uninstall**
- **Version specifiers (==, >=, ~=, *)**
- **requirements.txt format**
- **pip freeze for reproducibility**
- **Installing from GitHub/URLs**
- **pip list and pip show**
- **pip cache management**
- **pip vs pipenv vs poetry**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(pip_install_and_uninstall_value)` | `process(pip_install_and_uninstall_value)` |
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

- pip install and uninstall
- Version specifiers (==, >=, ~=, *)
- requirements.txt format
- pip freeze for reproducibility
- Installing from GitHub/URLs
- pip list and pip show
- pip cache management
- pip vs pipenv vs poetry