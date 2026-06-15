# Python List Methods — Cheatsheet

## Quick Reference

```python
# Python List Methods — Quick Reference
# Core syntax and common patterns

# Basic append() and extend() differences
def basic_append_and_extend_differences():
    pass

# insert() at any position pattern
def advanced_append_and_extend_differences():
    return "result"
```

## Key Concepts

- **append() and extend() differences**
- **insert() at any position**
- **remove() by value vs pop() by index**
- **sort() and sorted() with key functions**
- **reverse() and reversed()**
- **index() and count() searches**
- **copy() for shallow copies**
- **Method chaining limitations with lists**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(append_and_extend_differences_value)` | `process(append_and_extend_differences_value)` |
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

- append() and extend() differences
- insert() at any position
- remove() by value vs pop() by index
- sort() and sorted() with key functions
- reverse() and reversed()
- index() and count() searches
- copy() for shallow copies
- Method chaining limitations with lists