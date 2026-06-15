# AUC ROC Curve — Cheatsheet

## Quick Reference

```python
# AUC ROC Curve — Quick Reference
# Core syntax and common patterns

# Basic ROC curve (TPR vs FPR)
def basic_roc_curve_tpr_vs_fpr():
    pass

# AUC (Area Under Curve) score pattern
def advanced_roc_curve_tpr_vs_fpr():
    return "result"
```

## Key Concepts

- **ROC curve (TPR vs FPR)**
- **AUC (Area Under Curve) score**
- **roc_curve() and roc_auc_score()**
- **Threshold selection for optimal point**
- **ROC for model comparison**
- **Multi-class ROC (One-vs-Rest)**
- **ROC vs Precision-Recall curves**
- **sklearn.metrics ROC functions**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(roc_curve_tpr_vs_fpr_value)` | `process(roc_curve_tpr_vs_fpr_value)` |
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

- ROC curve (TPR vs FPR)
- AUC (Area Under Curve) score
- roc_curve() and roc_auc_score()
- Threshold selection for optimal point
- ROC for model comparison
- Multi-class ROC (One-vs-Rest)
- ROC vs Precision-Recall curves
- sklearn.metrics ROC functions