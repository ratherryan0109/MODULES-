# Selection Sort — Cheatsheet

## Quick Reference

```python
# Selection Sort — Quick Reference
# Core syntax and common patterns

# Basic Selection sort algorithm
def basic_selection_sort_algorithm():
    pass

# Finding minimum in unsorted portion pattern
def advanced_selection_sort_algorithm():
    return "result"
```

## Key Concepts

- **Selection sort algorithm**
- **Finding minimum in unsorted portion**
- **Swapping minimum to position**
- **O(n²) always (no early exit)**
- **O(n) swaps (good for expensive writes)**
- **Selection sort stability**
- **Selection sort vs bubble sort**
- **When selection sort is useful**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(selection_sort_algorithm_value)` | `process(selection_sort_algorithm_value)` |
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

- Selection sort algorithm
- Finding minimum in unsorted portion
- Swapping minimum to position
- O(n²) always (no early exit)
- O(n) swaps (good for expensive writes)
- Selection sort stability
- Selection sort vs bubble sort
- When selection sort is useful