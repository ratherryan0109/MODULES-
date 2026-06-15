# MongoDB Find — Cheatsheet

## Quick Reference

```python
# MongoDB Find — Quick Reference
# Core syntax and common patterns

# Basic find() and find_one() methods
def basic_find_and_find_one_methods():
    pass

# Query filter documents pattern
def advanced_find_and_find_one_methods():
    return "result"
```

## Key Concepts

- **find() and find_one() methods**
- **Query filter documents**
- **Projection for field selection**
- **Cursor iteration and methods**
- **count_documents() for counts**
- **Sorting results (sort())**
- **Skip and limit for pagination**
- **Distinct values**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(find_and_find_one_methods_value)` | `process(find_and_find_one_methods_value)` |
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

- find() and find_one() methods
- Query filter documents
- Projection for field selection
- Cursor iteration and methods
- count_documents() for counts
- Sorting results (sort())
- Skip and limit for pagination
- Distinct values