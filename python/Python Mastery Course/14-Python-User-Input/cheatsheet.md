# Python User Input — Cheatsheet

## Quick Reference

```python
# Python User Input — Quick Reference
# Core syntax and common patterns

# Basic input() function
def basic_input_function():
    pass

# String to number conversion pattern
def advanced_input_function():
    return "result"
```

## Key Concepts

- **input() function**
- **String to number conversion**
- **Input validation patterns**
- **Looping until valid input**
- **Reading multiple values**
- **Password input (getpass module)**
- **Command-line arguments (sys.argv)**
- **argparse for advanced CLI arguments**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(input_function_value)` | `process(input_function_value)` |
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

- input() function
- String to number conversion
- Input validation patterns
- Looping until valid input
- Reading multiple values
- Password input (getpass module)
- Command-line arguments (sys.argv)
- argparse for advanced CLI arguments