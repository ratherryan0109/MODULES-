# Python Numbers — Cheatsheet

## Quick Reference

```python
# Python Numbers — Quick Reference
# Core syntax and common patterns

# Basic int type (unbounded precision)
def basic_int_type_unbounded_precision():
    pass

# float type (IEEE 754) pattern
def advanced_int_type_unbounded_precision():
    return "result"
```

## Key Concepts

- **int type (unbounded precision)**
- **float type (IEEE 754)**
- **complex numbers (real + imag j)**
- **Arithmetic operators (+, -, *, /, //, %, **)**
- **Division: true vs floor (/, //)**
- **round(), int(), float() conversions**
- **Decimal module for exact precision**
- **Fractions module (from fractions import Fraction)**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(int_type_unbounded_precision_value)` | `process(int_type_unbounded_precision_value)` |
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

- int type (unbounded precision)
- float type (IEEE 754)
- complex numbers (real + imag j)
- Arithmetic operators (+, -, *, /, //, %, **)
- Division: true vs floor (/, //)
- round(), int(), float() conversions
- Decimal module for exact precision
- Fractions module (from fractions import Fraction)