# MongoDB Limit — Cheatsheet

## Quick Reference

```python
# MongoDB Limit — Quick Reference
# Core syntax and common patterns

# Basic limit() for result cap
def basic_limit_for_result_cap():
    pass

# skip() for offset pattern
def advanced_limit_for_result_cap():
    return "result"
```

## Key Concepts

- **limit() for result cap**
- **skip() for offset**
- **Limit and skip pagination**
- **Comparison with SQL LIMIT/OFFSET**
- **Cursors and batch size**
- **limit() performance benefits**
- **Pagination best practices**
- **ObjectId-based pagination**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(limit_for_result_cap_value)` | `process(limit_for_result_cap_value)` |
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

- limit() for result cap
- skip() for offset
- Limit and skip pagination
- Comparison with SQL LIMIT/OFFSET
- Cursors and batch size
- limit() performance benefits
- Pagination best practices
- ObjectId-based pagination