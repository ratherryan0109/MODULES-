# Style Sheets — Cheatsheet

## Quick Reference

```python
# Style Sheets — Quick Reference
# Core syntax and common patterns

# Basic plt.style.use() available styles
def basic_plt_style_use_available_styles():
    pass

# Built-in styles (ggplot, seaborn, fivethirtyeight) pattern
def advanced_plt_style_use_available_styles():
    return "result"
```

## Key Concepts

- **plt.style.use() available styles**
- **Built-in styles (ggplot, seaborn, fivethirtyeight)**
- **Default style (default, classic)**
- **Custom rcParams configuration**
- **Creating custom style sheets (.mplstyle)**
- **Temporary style context**
- **Font settings in styles**
- **Style for publication vs screen**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(plt_style_use_available_styles_value)` | `process(plt_style_use_available_styles_value)` |
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

- plt.style.use() available styles
- Built-in styles (ggplot, seaborn, fivethirtyeight)
- Default style (default, classic)
- Custom rcParams configuration
- Creating custom style sheets (.mplstyle)
- Temporary style context
- Font settings in styles
- Style for publication vs screen