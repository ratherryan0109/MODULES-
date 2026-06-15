# Writing Binary Files — Cheatsheet

## Quick Reference

```python
# Writing Binary Files — Quick Reference
# Core syntax and common patterns

# Basic write() with bytes objects
def basic_write_with_bytes_objects():
    pass

# struct.pack() for binary serialization pattern
def advanced_write_with_bytes_objects():
    return "result"
```

## Key Concepts

- **write() with bytes objects**
- **struct.pack() for binary serialization**
- **Writing multi-field records**
- **Writing file headers**
- **Padding and alignment**
- **Endianness control (>, <)**
- **Writing large binary arrays**
- **Image format writing basics**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(write_with_bytes_objects_value)` | `process(write_with_bytes_objects_value)` |
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

- write() with bytes objects
- struct.pack() for binary serialization
- Writing multi-field records
- Writing file headers
- Padding and alignment
- Endianness control (>, <)
- Writing large binary arrays
- Image format writing basics