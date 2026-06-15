# Logging — Cheatsheet

## Quick Reference

```python
# Logging — Quick Reference
# Core syntax and common patterns

# Basic logging module overview
def basic_logging_module_overview():
    pass

# Log levels (DEBUG, INFO, WARNING, ERROR, CRITICAL) pattern
def advanced_logging_module_overview():
    return "result"
```

## Key Concepts

- **logging module overview**
- **Log levels (DEBUG, INFO, WARNING, ERROR, CRITICAL)**
- **Handlers (StreamHandler, FileHandler)**
- **Formatters and log format**
- **Logger hierarchy (root, named loggers)**
- **Configuration (basicConfig, dictConfig)**
- **Log rotation (RotatingFileHandler)**
- **Structured logging (JSON)**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(logging_module_overview_value)` | `process(logging_module_overview_value)` |
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

- logging module overview
- Log levels (DEBUG, INFO, WARNING, ERROR, CRITICAL)
- Handlers (StreamHandler, FileHandler)
- Formatters and log format
- Logger hierarchy (root, named loggers)
- Configuration (basicConfig, dictConfig)
- Log rotation (RotatingFileHandler)
- Structured logging (JSON)