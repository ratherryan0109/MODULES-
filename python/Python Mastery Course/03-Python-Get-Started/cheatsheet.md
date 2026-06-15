# Python Get Started — Cheatsheet

## Quick Reference

```python
# Python Get Started — Quick Reference
# Core syntax and common patterns

# Basic Hello World program
def basic_hello_world_program():
    pass

# Running Python files (.py extension) pattern
def advanced_hello_world_program():
    return "result"
```

## Key Concepts

- **Hello World program**
- **Running Python files (.py extension)**
- **Python interpreter in detail**
- **Interactive mode (REPL)**
- **Basic program structure**
- **Indentation and code blocks**
- **Using print() for output**
- **Getting help with help() and dir()**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(hello_world_program_value)` | `process(hello_world_program_value)` |
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

- Hello World program
- Running Python files (.py extension)
- Python interpreter in detail
- Interactive mode (REPL)
- Basic program structure
- Indentation and code blocks
- Using print() for output
- Getting help with help() and dir()