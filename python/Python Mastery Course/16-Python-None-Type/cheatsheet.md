# Python None Type — Cheatsheet

## Quick Reference

```python
# Python None Type — Quick Reference
# Core syntax and common patterns

# Basic None singleton object
def basic_none_singleton_object():
    pass

# NoneType class pattern
def advanced_none_singleton_object():
    return "result"
```

## Key Concepts

- **None singleton object**
- **NoneType class**
- **Checking for None (is None)**
- **Functions returning None implicitly**
- **None as default parameter sentinel**
- **Optional type hints (Optional[str])**
- **None vs other falsy values**
- **Sentinel values beyond None**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(none_singleton_object_value)` | `process(none_singleton_object_value)` |
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

- None singleton object
- NoneType class
- Checking for None (is None)
- Functions returning None implicitly
- None as default parameter sentinel
- Optional type hints (Optional[str])
- None vs other falsy values
- Sentinel values beyond None