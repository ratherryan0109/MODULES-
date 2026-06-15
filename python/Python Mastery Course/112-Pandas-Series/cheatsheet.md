# Pandas Series — Cheatsheet

## Quick Reference

```python
# Pandas Series — Quick Reference
# Core syntax and common patterns

# Basic Series creation from lists and dicts
def basic_series_creation_from_lists_and_dicts():
    pass

# Index labels and default index pattern
def advanced_series_creation_from_lists_and_dicts():
    return "result"
```

## Key Concepts

- **Series creation from lists and dicts**
- **Index labels and default index**
- **Series attributes (values, index, dtype)**
- **Indexing with .loc and .iloc**
- **Vectorized Series operations**
- **Alignment on index labels**
- **Handling NaN in Series**
- **Series methods (value_counts, map, apply)**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(series_creation_from_lists_and_dicts_value)` | `process(series_creation_from_lists_and_dicts_value)` |
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

- Series creation from lists and dicts
- Index labels and default index
- Series attributes (values, index, dtype)
- Indexing with .loc and .iloc
- Vectorized Series operations
- Alignment on index labels
- Handling NaN in Series
- Series methods (value_counts, map, apply)