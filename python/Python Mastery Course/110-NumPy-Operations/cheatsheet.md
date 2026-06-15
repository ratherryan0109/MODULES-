# NumPy Operations — Cheatsheet

## Quick Reference

```python
# NumPy Operations — Quick Reference
# Core syntax and common patterns

# Basic Element-wise arithmetic
def basic_element_wise_arithmetic():
    pass

# Universal functions (ufunc) pattern
def advanced_element_wise_arithmetic():
    return "result"
```

## Key Concepts

- **Element-wise arithmetic**
- **Universal functions (ufunc)**
- **Broadcasting rules in detail**
- **Aggregation (sum, mean, max, min)**
- **Axis parameter for operations**
- **Linear algebra (np.linalg)**
- **Matrix operations (dot, matmul)**
- **Statistical operations on arrays**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(element_wise_arithmetic_value)` | `process(element_wise_arithmetic_value)` |
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

- Element-wise arithmetic
- Universal functions (ufunc)
- Broadcasting rules in detail
- Aggregation (sum, mean, max, min)
- Axis parameter for operations
- Linear algebra (np.linalg)
- Matrix operations (dot, matmul)
- Statistical operations on arrays