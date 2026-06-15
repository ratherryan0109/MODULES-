# Inheritance — Cheatsheet

## Quick Reference

```python
# Inheritance — Quick Reference
# Core syntax and common patterns

# Basic Single inheritance syntax
def basic_single_inheritance_syntax():
    pass

# Method overriding pattern
def advanced_single_inheritance_syntax():
    return "result"
```

## Key Concepts

- **Single inheritance syntax**
- **Method overriding**
- **super() function**
- **Multiple inheritance (diamond problem)**
- **Method Resolution Order (MRO)**
- **Mixin pattern with multiple inheritance**
- **Abstract base classes (ABC)**
- **isinstance() and issubclass()**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(single_inheritance_syntax_value)` | `process(single_inheritance_syntax_value)` |
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

- Single inheritance syntax
- Method overriding
- super() function
- Multiple inheritance (diamond problem)
- Method Resolution Order (MRO)
- Mixin pattern with multiple inheritance
- Abstract base classes (ABC)
- isinstance() and issubclass()