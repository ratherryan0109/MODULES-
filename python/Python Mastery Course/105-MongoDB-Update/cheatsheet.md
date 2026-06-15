# MongoDB Update — Cheatsheet

## Quick Reference

```python
# MongoDB Update — Quick Reference
# Core syntax and common patterns

# Basic update_one() for single document
def basic_update_one_for_single_document():
    pass

# update_many() for multiple pattern
def advanced_update_one_for_single_document():
    return "result"
```

## Key Concepts

- **update_one() for single document**
- **update_many() for multiple**
- **$set and $unset operators**
- **$inc and $mul numeric operators**
- **$push and $pull for arrays**
- **$rename field operator**
- **Upsert option (insert if not found)**
- **Update with filters**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(update_one_for_single_document_value)` | `process(update_one_for_single_document_value)` |
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

- update_one() for single document
- update_many() for multiple
- $set and $unset operators
- $inc and $mul numeric operators
- $push and $pull for arrays
- $rename field operator
- Upsert option (insert if not found)
- Update with filters