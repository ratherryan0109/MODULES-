# Feature Scaling — Cheatsheet

## Quick Reference

```python
# Feature Scaling — Quick Reference
# Core syntax and common patterns

# Basic StandardScaler (z-score)
def basic_standardscaler_z_score():
    pass

# MinMaxScaler (0-1 range) pattern
def advanced_standardscaler_z_score():
    return "result"
```

## Key Concepts

- **StandardScaler (z-score)**
- **MinMaxScaler (0-1 range)**
- **RobustScaler (IQR-based)**
- **Normalizer (unit norm)**
- **Fitting and transforming pipeline**
- **When scaling is necessary**
- **Scaling vs normalization**
- **Inverse transform for interpretation**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(standardscaler_z_score_value)` | `process(standardscaler_z_score_value)` |
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

- StandardScaler (z-score)
- MinMaxScaler (0-1 range)
- RobustScaler (IQR-based)
- Normalizer (unit norm)
- Fitting and transforming pipeline
- When scaling is necessary
- Scaling vs normalization
- Inverse transform for interpretation