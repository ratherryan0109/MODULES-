# Python Operators — Cheatsheet

## Quick Reference

```python
# Python Operators — Quick Reference
# Core syntax and common patterns

# Basic Arithmetic operators (+, -, *, /, //, %, **)
def basic_arithmetic_operators():
    pass

# Assignment operators (=, +=, -=, *=) pattern
def advanced_arithmetic_operators():
    return "result"
```

## Key Concepts

- **Arithmetic operators (+, -, *, /, //, %, **)**
- **Assignment operators (=, +=, -=, *=)**
- **Comparison operators (==, !=, >, <, >=, <=)**
- **Logical operators (and, or, not)**
- **Bitwise operators (&, |, ^, ~, <<, >>)**
- **Identity operators (is, is not)**
- **Membership operators (in, not in)**
- **Operator precedence and associativity**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(arithmetic_operators_value)` | `process(arithmetic_operators_value)` |
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

- Arithmetic operators (+, -, *, /, //, %, **)
- Assignment operators (=, +=, -=, *=)
- Comparison operators (==, !=, >, <, >=, <=)
- Logical operators (and, or, not)
- Bitwise operators (&, |, ^, ~, <<, >>)
- Identity operators (is, is not)
- Membership operators (in, not in)
- Operator precedence and associativity