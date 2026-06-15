# Markers — Cheatsheet

## Quick Reference

```python
# Markers — Quick Reference
# Core syntax and common patterns

# Basic Marker styles (o, s, ^, D, *, x)
def basic_marker_styles_o_s_d_x():
    pass

# Marker size (markersize or s) pattern
def advanced_marker_styles_o_s_d_x():
    return "result"
```

## Key Concepts

- **Marker styles (o, s, ^, D, *, x)**
- **Marker size (markersize or s)**
- **Marker color (markerfacecolor, markeredgecolor)**
- **Marker edge width**
- **Filled vs unfilled markers**
- **Custom marker symbols**
- **Marker z-order control**
- **Marker for specific data points**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(marker_styles_o_s_d_x_value)` | `process(marker_styles_o_s_d_x_value)` |
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

- Marker styles (o, s, ^, D, *, x)
- Marker size (markersize or s)
- Marker color (markerfacecolor, markeredgecolor)
- Marker edge width
- Filled vs unfilled markers
- Custom marker symbols
- Marker z-order control
- Marker for specific data points