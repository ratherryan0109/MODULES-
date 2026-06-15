# Python Try Except — Cheatsheet

## Quick Reference

```python
# Python Try Except — Quick Reference
# Core syntax and common patterns

# Basic try block syntax
def basic_try_block_syntax():
    pass

# except clause catching pattern
def advanced_try_block_syntax():
    return "result"
```

## Key Concepts

- **try block syntax**
- **except clause catching**
- **Catching specific exception types**
- **Multiple except clauses**
- **Accessing exception objects (as e)**
- **Bare except (anti-pattern)**
- **Exception hierarchy (BaseException)**
- **try with else clause**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(try_block_syntax_value)` | `process(try_block_syntax_value)` |
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

- try block syntax
- except clause catching
- Catching specific exception types
- Multiple except clauses
- Accessing exception objects (as e)
- Bare except (anti-pattern)
- Exception hierarchy (BaseException)
- try with else clause