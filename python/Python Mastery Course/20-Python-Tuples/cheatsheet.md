# Python Tuples — Cheatsheet

## Quick Reference

```python
# Python Tuples — Quick Reference
# Core syntax and common patterns

# Basic Tuple creation ((1, 2), tuple())
def basic_tuple_creation_1_2_tuple():
    pass

# Tuple immutability and hashability pattern
def advanced_tuple_creation_1_2_tuple():
    return "result"
```

## Key Concepts

- **Tuple creation ((1, 2), tuple())**
- **Tuple immutability and hashability**
- **Tuple unpacking (a, b = (1, 2))**
- **Nested tuples and access**
- **Single-element tuples (1,)**
- **Tuple methods (count, index)**
- **collections.namedtuple**
- **Tuples as dictionary keys**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(tuple_creation_1_2_tuple_value)` | `process(tuple_creation_1_2_tuple_value)` |
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

- Tuple creation ((1, 2), tuple())
- Tuple immutability and hashability
- Tuple unpacking (a, b = (1, 2))
- Nested tuples and access
- Single-element tuples (1,)
- Tuple methods (count, index)
- collections.namedtuple
- Tuples as dictionary keys