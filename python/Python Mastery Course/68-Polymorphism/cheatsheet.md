# Polymorphism — Cheatsheet

## Quick Reference

```python
# Polymorphism — Quick Reference
# Core syntax and common patterns

# Basic Duck typing philosophy
def basic_duck_typing_philosophy():
    pass

# Method overriding polymorphism pattern
def advanced_duck_typing_philosophy():
    return "result"
```

## Key Concepts

- **Duck typing philosophy**
- **Method overriding polymorphism**
- **Operator overloading (__add__, __str__)**
- **Protocols (__len__, __iter__, __call__)**
- **Abstract methods (@abstractmethod)**
- **Dynamic dispatch**
- **Polymorphism with isinstance checks**
- **Strategy pattern with polymorphism**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(duck_typing_philosophy_value)` | `process(duck_typing_philosophy_value)` |
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

- Duck typing philosophy
- Method overriding polymorphism
- Operator overloading (__add__, __str__)
- Protocols (__len__, __iter__, __call__)
- Abstract methods (@abstractmethod)
- Dynamic dispatch
- Polymorphism with isinstance checks
- Strategy pattern with polymorphism