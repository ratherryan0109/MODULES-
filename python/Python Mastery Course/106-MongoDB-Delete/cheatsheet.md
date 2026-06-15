# MongoDB Delete — Cheatsheet

## Quick Reference

```python
# MongoDB Delete — Quick Reference
# Core syntax and common patterns

# Basic delete_one() for single document
def basic_delete_one_for_single_document():
    pass

# delete_many() with filters pattern
def advanced_delete_one_for_single_document():
    return "result"
```

## Key Concepts

- **delete_one() for single document**
- **delete_many() with filters**
- **Deleting all documents**
- **find_one_and_delete()**
- **drop() for collection removal**
- **Soft delete pattern**
- **Delete with journal guarantee**
- **Atomic delete patterns**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(delete_one_for_single_document_value)` | `process(delete_one_for_single_document_value)` |
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

- delete_one() for single document
- delete_many() with filters
- Deleting all documents
- find_one_and_delete()
- drop() for collection removal
- Soft delete pattern
- Delete with journal guarantee
- Atomic delete patterns