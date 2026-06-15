# Figure Customization — Cheatsheet

## Quick Reference

```python
# Figure Customization — Quick Reference
# Core syntax and common patterns

# Basic Figure and axes background
def basic_figure_and_axes_background():
    pass

# Spine visibility and position pattern
def advanced_figure_and_axes_background():
    return "result"
```

## Key Concepts

- **Figure and axes background**
- **Spine visibility and position**
- **Tick customization (tick_params)**
- **Tick locators and formatters**
- **Figure padding (subplots_adjust)**
- **Axes aspect ratio (set_aspect)**
- **Figure border and frame**
- **Custom figure sizes and DPI**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(figure_and_axes_background_value)` | `process(figure_and_axes_background_value)` |
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

- Figure and axes background
- Spine visibility and position
- Tick customization (tick_params)
- Tick locators and formatters
- Figure padding (subplots_adjust)
- Axes aspect ratio (set_aspect)
- Figure border and frame
- Custom figure sizes and DPI