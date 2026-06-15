# Nested Data Structures — Cheatsheet

## Quick Reference

```python
# Nested Data Structures — Quick Reference
# Core syntax and common patterns

# Basic Lists of dictionaries
def basic_lists_of_dictionaries():
    pass

# Dictionaries of lists pattern
def advanced_lists_of_dictionaries():
    return "result"
```

## Key Concepts

- **Lists of dictionaries**
- **Dictionaries of lists**
- **Nested dict access patterns**
- **Deep copying nested structures**
- **JSON serialization of nested data**
- **Tree structures with nested dicts**
- **Safe access with .get() recursion**
- **Flattening nested structures**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(lists_of_dictionaries_value)` | `process(lists_of_dictionaries_value)` |
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

- Lists of dictionaries
- Dictionaries of lists
- Nested dict access patterns
- Deep copying nested structures
- JSON serialization of nested data
- Tree structures with nested dicts
- Safe access with .get() recursion
- Flattening nested structures