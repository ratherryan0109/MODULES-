# Multiple Lines — Cheatsheet

## Quick Reference

```python
# Multiple Lines — Quick Reference
# Core syntax and common patterns

# Basic Multiple plt.plot() calls
def basic_multiple_plt_plot_calls():
    pass

# Plotting from list of series pattern
def advanced_multiple_plt_plot_calls():
    return "result"
```

## Key Concepts

- **Multiple plt.plot() calls**
- **Plotting from list of series**
- **Line colors for distinction**
- **Automatic color cycling**
- **Color cycling customization (prop_cycle)**
- **Line styles for black-and-white**
- **Overlapping line handling**
- **Secondary y-axis (twinx())**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(multiple_plt_plot_calls_value)` | `process(multiple_plt_plot_calls_value)` |
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

- Multiple plt.plot() calls
- Plotting from list of series
- Line colors for distinction
- Automatic color cycling
- Color cycling customization (prop_cycle)
- Line styles for black-and-white
- Overlapping line handling
- Secondary y-axis (twinx())