# Radix Sort — Cheatsheet

## Quick Reference

```python
# Radix Sort — Quick Reference
# Core syntax and common patterns

# Basic Radix sort algorithm
def basic_radix_sort_algorithm():
    pass

# LSD vs MSD radix sort pattern
def advanced_radix_sort_algorithm():
    return "result"
```

## Key Concepts

- **Radix sort algorithm**
- **LSD vs MSD radix sort**
- **Digit extraction (by base)**
- **Stable digit-based sorting**
- **O(d × (n + k)) complexity**
- **Base choice and performance**
- **Radix sort for strings**
- **Radix sort vs counting sort**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(radix_sort_algorithm_value)` | `process(radix_sort_algorithm_value)` |
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

- Radix sort algorithm
- LSD vs MSD radix sort
- Digit extraction (by base)
- Stable digit-based sorting
- O(d × (n + k)) complexity
- Base choice and performance
- Radix sort for strings
- Radix sort vs counting sort