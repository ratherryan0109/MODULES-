# MongoDB Insert — Cheatsheet

## Quick Reference

```python
# MongoDB Insert — Quick Reference
# Core syntax and common patterns

# Basic insert_one() for single document
def basic_insert_one_for_single_document():
    pass

# insert_many() for bulk inserts pattern
def advanced_insert_one_for_single_document():
    return "result"
```

## Key Concepts

- **insert_one() for single document**
- **insert_many() for bulk inserts**
- **Document structure (dict)**
- **_id field and ObjectId**
- **Insert with custom _id**
- **Handling duplicate key errors**
- **Ordered vs unordered inserts**
- **Insert result (inserted_id)**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(insert_one_for_single_document_value)` | `process(insert_one_for_single_document_value)` |
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

- insert_one() for single document
- insert_many() for bulk inserts
- Document structure (dict)
- _id field and ObjectId
- Insert with custom _id
- Handling duplicate key errors
- Ordered vs unordered inserts
- Insert result (inserted_id)