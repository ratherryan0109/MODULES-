# Python Dictionary Methods — Cheatsheet

## Quick Reference

```python
# Python Dictionary Methods — Quick Reference
# Core syntax and common patterns

# Basic .get() with default values
def basic_get_with_default_values():
    pass

# .setdefault() for initialization pattern
def advanced_get_with_default_values():
    return "result"
```

## Key Concepts

- **.get() with default values**
- **.setdefault() for initialization**
- **.update() merging dictionaries**
- **.pop() and .popitem() removal**
- **.keys(), .values(), .items() views**
- **.fromkeys() for default dicts**
- **defaultdict from collections**
- **ChainMap for multiple dicts**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(get_with_default_values_value)` | `process(get_with_default_values_value)` |
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

- .get() with default values
- .setdefault() for initialization
- .update() merging dictionaries
- .pop() and .popitem() removal
- .keys(), .values(), .items() views
- .fromkeys() for default dicts
- defaultdict from collections
- ChainMap for multiple dicts