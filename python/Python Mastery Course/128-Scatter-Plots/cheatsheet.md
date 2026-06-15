# Scatter Plots — Cheatsheet

## Quick Reference

```python
# Scatter Plots — Quick Reference
# Core syntax and common patterns

# Basic plt.scatter(x, y)
def basic_plt_scatter_x_y():
    pass

# Marker size variation (s parameter) pattern
def advanced_plt_scatter_x_y():
    return "result"
```

## Key Concepts

- **plt.scatter(x, y)**
- **Marker size variation (s parameter)**
- **Color mapping (c and cmap)**
- **Transparency (alpha)**
- **Scatter with colorbar**
- **Adding trend line (np.polyfit)**
- **Categorical scatter (strip plot)**
- **3D scatter plots**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(plt_scatter_x_y_value)` | `process(plt_scatter_x_y_value)` |
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

- plt.scatter(x, y)
- Marker size variation (s parameter)
- Color mapping (c and cmap)
- Transparency (alpha)
- Scatter with colorbar
- Adding trend line (np.polyfit)
- Categorical scatter (strip plot)
- 3D scatter plots