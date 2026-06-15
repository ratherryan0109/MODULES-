# Python Tuple Methods — Cheatsheet

## Quick Reference

```python
# Python Tuple Methods — Quick Reference
# Core syntax and common patterns

# Basic count() method
def basic_count_method():
    pass

# index() method with start/end pattern
def advanced_count_method():
    return "result"
```

## Key Concepts

- **count() method**
- **index() method with start/end**
- **Tuple concatenation (+)**
- **Tuple repetition (*)**
- **Membership testing (in)**
- **min(), max(), sum() on tuples**
- **sorted() returning a list**
- **Comparison of tuples (element-wise)**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(count_method_value)` | `process(count_method_value)` |
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

- count() method
- index() method with start/end
- Tuple concatenation (+)
- Tuple repetition (*)
- Membership testing (in)
- min(), max(), sum() on tuples
- sorted() returning a list
- Comparison of tuples (element-wise)