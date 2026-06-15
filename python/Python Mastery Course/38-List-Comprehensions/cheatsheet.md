# List Comprehensions — Cheatsheet

## Quick Reference

```python
# List Comprehensions — Quick Reference
# Core syntax and common patterns

# Basic Basic list comprehension [expr for x in iter]
def basic_basic_list_comprehension_expr_for_x_in_iter():
    pass

# Filtering with if clause pattern
def advanced_basic_list_comprehension_expr_for_x_in_iter():
    return "result"
```

## Key Concepts

- **Basic list comprehension [expr for x in iter]**
- **Filtering with if clause**
- **Nested comprehensions (flattening)**
- **Dict and set comprehensions**
- **Generator expressions (memory efficient)**
- **Conditional expressions in comprehensions**
- **Comprehension vs map/filter readability**
- **Performance of comprehensions vs loops**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(basic_list_comprehension_expr_for_x_in_iter_value)` | `process(basic_list_comprehension_expr_for_x_in_iter_value)` |
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

- Basic list comprehension [expr for x in iter]
- Filtering with if clause
- Nested comprehensions (flattening)
- Dict and set comprehensions
- Generator expressions (memory efficient)
- Conditional expressions in comprehensions
- Comprehension vs map/filter readability
- Performance of comprehensions vs loops