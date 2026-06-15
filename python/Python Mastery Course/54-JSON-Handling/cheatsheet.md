# JSON Handling — Cheatsheet

## Quick Reference

```python
# JSON Handling — Quick Reference
# Core syntax and common patterns

# Basic json.dumps() serialization
def basic_json_dumps_serialization():
    pass

# json.loads() deserialization pattern
def advanced_json_dumps_serialization():
    return "result"
```

## Key Concepts

- **json.dumps() serialization**
- **json.loads() deserialization**
- **Reading/writing JSON files**
- **Pretty printing JSON (indent)**
- **Custom JSONEncoder subclasses**
- **default parameter for non-serializable**
- **JSON vs pickle comparison**
- **json.tool command line**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(json_dumps_serialization_value)` | `process(json_dumps_serialization_value)` |
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

- json.dumps() serialization
- json.loads() deserialization
- Reading/writing JSON files
- Pretty printing JSON (indent)
- Custom JSONEncoder subclasses
- default parameter for non-serializable
- JSON vs pickle comparison
- json.tool command line