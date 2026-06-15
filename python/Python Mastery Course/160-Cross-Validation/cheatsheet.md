# Cross Validation — Cheatsheet

## Quick Reference

```python
# Cross Validation — Quick Reference
# Core syntax and common patterns

# Basic K-Fold cross-validation
def basic_k_fold_cross_validation():
    pass

# Stratified K-Fold for classification pattern
def advanced_k_fold_cross_validation():
    return "result"
```

## Key Concepts

- **K-Fold cross-validation**
- **Stratified K-Fold for classification**
- **cross_val_score() function**
- **cross_validate() for multiple metrics**
- **Leave-One-Out (LOOCV)**
- **Group K-Fold**
- **Time Series cross-validation**
- **Cross-validation vs train/test split**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(k_fold_cross_validation_value)` | `process(k_fold_cross_validation_value)` |
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

- K-Fold cross-validation
- Stratified K-Fold for classification
- cross_val_score() function
- cross_validate() for multiple metrics
- Leave-One-Out (LOOCV)
- Group K-Fold
- Time Series cross-validation
- Cross-validation vs train/test split