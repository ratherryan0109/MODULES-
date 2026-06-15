# Python range() Function — Cheatsheet

## Quick Reference

```python
# Python range() Function — Quick Reference
# Core syntax and common patterns

# Basic range(stop) single argument
def basic_range_stop_single_argument():
    pass

# range(start, stop) two arguments pattern
def advanced_range_stop_single_argument():
    return "result"
```

## Key Concepts

- **range(stop) single argument**
- **range(start, stop) two arguments**
- **range(start, stop, step) three arguments**
- **Negative step values**
- **range memory efficiency (lazy)**
- **Converting range to list**
- **range vs xrange (Python 2 legacy)**
- **range with len() for index iteration**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(range_stop_single_argument_value)` | `process(range_stop_single_argument_value)` |
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

- range(stop) single argument
- range(start, stop) two arguments
- range(start, stop, step) three arguments
- Negative step values
- range memory efficiency (lazy)
- Converting range to list
- range vs xrange (Python 2 legacy)
- range with len() for index iteration