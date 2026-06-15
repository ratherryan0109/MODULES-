# JSON Files — Cheatsheet

## Quick Reference

```python
# JSON Files — Quick Reference
# Core syntax and common patterns

# Basic json.load() reading from files
def basic_json_load_reading_from_files():
    pass

# json.dump() writing to files pattern
def advanced_json_load_reading_from_files():
    return "result"
```

## Key Concepts

- **json.load() reading from files**
- **json.dump() writing to files**
- **Pretty printing (indent, sort_keys)**
- **Serializing custom objects**
- **Deserializing with object_hook**
- **Handling datetime in JSON**
- **JSON lines format (jsonlines)**
- **Large JSON file streaming**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(json_load_reading_from_files_value)` | `process(json_load_reading_from_files_value)` |
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

- json.load() reading from files
- json.dump() writing to files
- Pretty printing (indent, sort_keys)
- Serializing custom objects
- Deserializing with object_hook
- Handling datetime in JSON
- JSON lines format (jsonlines)
- Large JSON file streaming