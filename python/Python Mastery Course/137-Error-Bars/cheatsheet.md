# Error Bars — Cheatsheet

## Quick Reference

```python
# Error Bars — Quick Reference
# Core syntax and common patterns

# Basic plt.errorbar(x, y, yerr, xerr)
def basic_plt_errorbar_x_y_yerr_xerr():
    pass

# Error bar styles (capsize, capthick) pattern
def advanced_plt_errorbar_x_y_yerr_xerr():
    return "result"
```

## Key Concepts

- **plt.errorbar(x, y, yerr, xerr)**
- **Error bar styles (capsize, capthick)**
- **Asymmetric error bars**
- **Error bar on bar charts**
- **Constant vs varying error**
- **Confidence interval visualization**
- **Error bar color and width**
- **Error bar direction**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(plt_errorbar_x_y_yerr_xerr_value)` | `process(plt_errorbar_x_y_yerr_xerr_value)` |
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

- plt.errorbar(x, y, yerr, xerr)
- Error bar styles (capsize, capthick)
- Asymmetric error bars
- Error bar on bar charts
- Constant vs varying error
- Confidence interval visualization
- Error bar color and width
- Error bar direction