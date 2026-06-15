# Magic Methods — Cheatsheet

## Quick Reference

```python
# Magic Methods — Quick Reference
# Core syntax and common patterns

# Basic __str__ and __repr__ string representation
def basic_str_and_repr_string_representation():
    pass

# __len__ and __bool__ protocol pattern
def advanced_str_and_repr_string_representation():
    return "result"
```

## Key Concepts

- **__str__ and __repr__ string representation**
- **__len__ and __bool__ protocol**
- **__eq__, __lt__, __hash__ for comparisons**
- **__add__, __sub__ for operators**
- **__call__ for callable objects**
- **__enter__ and __exit__ for context managers**
- **__getitem__ and __setitem__ for indexing**
- **__iter__ and __next__ for iteration**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(str_and_repr_string_representation_value)` | `process(str_and_repr_string_representation_value)` |
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

- __str__ and __repr__ string representation
- __len__ and __bool__ protocol
- __eq__, __lt__, __hash__ for comparisons
- __add__, __sub__ for operators
- __call__ for callable objects
- __enter__ and __exit__ for context managers
- __getitem__ and __setitem__ for indexing
- __iter__ and __next__ for iteration