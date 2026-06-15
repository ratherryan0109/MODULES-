# Grid Search — Cheatsheet

## Quick Reference

```python
# Grid Search — Quick Reference
# Core syntax and common patterns

# Basic GridSearchCV for exhaustive search
def basic_gridsearchcv_for_exhaustive_search():
    pass

# Hyperparameter grid definition pattern
def advanced_gridsearchcv_for_exhaustive_search():
    return "result"
```

## Key Concepts

- **GridSearchCV for exhaustive search**
- **Hyperparameter grid definition**
- **RandomizedSearchCV for large spaces**
- **Cross-validation in grid search**
- **Best parameters (best_params_)**
- **Refitting best model (refit=True)**
- **Custom scoring metrics**
- **Grid search vs random search**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(gridsearchcv_for_exhaustive_search_value)` | `process(gridsearchcv_for_exhaustive_search_value)` |
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

- GridSearchCV for exhaustive search
- Hyperparameter grid definition
- RandomizedSearchCV for large spaces
- Cross-validation in grid search
- Best parameters (best_params_)
- Refitting best model (refit=True)
- Custom scoring metrics
- Grid search vs random search