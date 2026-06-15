# Figure and Axes — Cheatsheet

## Quick Reference

```python
# Figure and Axes — Quick Reference
# Core syntax and common patterns

# Basic Figure object (fig = plt.figure())
def basic_figure_object_fig_plt_figure():
    pass

# Axes object (ax = fig.add_subplot()) pattern
def advanced_figure_object_fig_plt_figure():
    return "result"
```

## Key Concepts

- **Figure object (fig = plt.figure())**
- **Axes object (ax = fig.add_subplot())**
- **Adding axes (fig.add_axes([l,b,w,h]))**
- **Figure size and DPI**
- **Figure layout (constrained, tight)**
- **Multiple axes in one figure**
- **Shared axes (sharex, sharey)**
- **Removing axes spines**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(figure_object_fig_plt_figure_value)` | `process(figure_object_fig_plt_figure_value)` |
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

- Figure object (fig = plt.figure())
- Axes object (ax = fig.add_subplot())
- Adding axes (fig.add_axes([l,b,w,h]))
- Figure size and DPI
- Figure layout (constrained, tight)
- Multiple axes in one figure
- Shared axes (sharex, sharey)
- Removing axes spines