# Python Dictionaries — Cheatsheet

## Quick Reference

```python
# Python Dictionaries — Quick Reference
# Core syntax and common patterns

# Basic Dict creation ({key: val}, dict())
def basic_dict_creation_key_val_dict():
    pass

# Key-value access and .get() pattern
def advanced_dict_creation_key_val_dict():
    return "result"
```

## Key Concepts

- **Dict creation ({key: val}, dict())**
- **Key-value access and .get()**
- **Dict mutability and modification**
- **Dict iteration (keys, values, items)**
- **Nested dictionaries**
- **Dictionary comprehensions**
- **Merging dicts (| and ** unpacking)**
- **OrderedDict vs regular dict (Python 3.7+)**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(dict_creation_key_val_dict_value)` | `process(dict_creation_key_val_dict_value)` |
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

- Dict creation ({key: val}, dict())
- Key-value access and .get()
- Dict mutability and modification
- Dict iteration (keys, values, items)
- Nested dictionaries
- Dictionary comprehensions
- Merging dicts (| and ** unpacking)
- OrderedDict vs regular dict (Python 3.7+)