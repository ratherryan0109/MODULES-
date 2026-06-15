# Matplotlib Pyplot — Cheatsheet

## Quick Reference

```python
# Matplotlib Pyplot — Quick Reference
# Core syntax and common patterns

# Basic plt.plot() for line charts
def basic_plt_plot_for_line_charts():
    pass

# plt.scatter() for scatter plots pattern
def advanced_plt_plot_for_line_charts():
    return "result"
```

## Key Concepts

- **plt.plot() for line charts**
- **plt.scatter() for scatter plots**
- **plt.bar() and plt.barh() for bars**
- **plt.hist() for histograms**
- **plt.pie() for pie charts**
- **plt.figure() and plt.subplot()**
- **plt.xlabel(), plt.ylabel(), plt.title()**
- **plt.show() and plt.savefig()**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(plt_plot_for_line_charts_value)` | `process(plt_plot_for_line_charts_value)` |
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

- plt.plot() for line charts
- plt.scatter() for scatter plots
- plt.bar() and plt.barh() for bars
- plt.hist() for histograms
- plt.pie() for pie charts
- plt.figure() and plt.subplot()
- plt.xlabel(), plt.ylabel(), plt.title()
- plt.show() and plt.savefig()