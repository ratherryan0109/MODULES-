# Python Data Types — Cheatsheet

## Quick Reference

```python
# Python Data Types — Quick Reference
# Core syntax and common patterns

# Basic Numeric types (int, float, complex)
def basic_numeric_types_int_float_complex():
    pass

# Boolean type (True, False) pattern
def advanced_numeric_types_int_float_complex():
    return "result"
```

## Key Concepts

- **Numeric types (int, float, complex)**
- **Boolean type (True, False)**
- **String type and immutability**
- **NoneType and None**
- **type() and isinstance() functions**
- **Mutable vs immutable types**
- **Type conversion and coercion**
- **Abstract base classes (numbers, collections.abc)**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(numeric_types_int_float_complex_value)` | `process(numeric_types_int_float_complex_value)` |
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

- Numeric types (int, float, complex)
- Boolean type (True, False)
- String type and immutability
- NoneType and None
- type() and isinstance() functions
- Mutable vs immutable types
- Type conversion and coercion
- Abstract base classes (numbers, collections.abc)