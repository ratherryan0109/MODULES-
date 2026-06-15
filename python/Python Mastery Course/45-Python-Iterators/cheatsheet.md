# Python Iterators — Cheatsheet

## Quick Reference

```python
# Python Iterators — Quick Reference
# Core syntax and common patterns

# Basic Iterator protocol (__iter__, __next__)
def basic_iterator_protocol_iter_next():
    pass

# Iterable vs iterator distinction pattern
def advanced_iterator_protocol_iter_next():
    return "result"
```

## Key Concepts

- **Iterator protocol (__iter__, __next__)**
- **Iterable vs iterator distinction**
- **Building custom iterators**
- **StopIteration exception handling**
- **Lazy evaluation with iterators**
- **itertools module overview**
- **Generator functions (yield)**
- **for loop internals**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(iterator_protocol_iter_next_value)` | `process(iterator_protocol_iter_next_value)` |
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

- Iterator protocol (__iter__, __next__)
- Iterable vs iterator distinction
- Building custom iterators
- StopIteration exception handling
- Lazy evaluation with iterators
- itertools module overview
- Generator functions (yield)
- for loop internals