# Class Methods — Cheatsheet

## Quick Reference

```python
# Class Methods — Quick Reference
# Core syntax and common patterns

# Basic @classmethod decorator
def basic_classmethod_decorator():
    pass

# cls parameter in classmethods pattern
def advanced_classmethod_decorator():
    return "result"
```

## Key Concepts

- **@classmethod decorator**
- **cls parameter in classmethods**
- **Factory method pattern**
- **@staticmethod decorator**
- **Staticmethod vs module-level function**
- **When to use classmethod vs staticmethod**
- **Inheritance of classmethods**
- **classmethod for alternative constructors**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(classmethod_decorator_value)` | `process(classmethod_decorator_value)` |
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

- @classmethod decorator
- cls parameter in classmethods
- Factory method pattern
- @staticmethod decorator
- Staticmethod vs module-level function
- When to use classmethod vs staticmethod
- Inheritance of classmethods
- classmethod for alternative constructors