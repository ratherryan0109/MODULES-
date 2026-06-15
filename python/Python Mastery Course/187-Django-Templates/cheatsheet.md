# Django Templates — Cheatsheet

## Quick Reference

```python
# Django Templates — Quick Reference
# Core syntax and common patterns

# Basic Django template language (DTL)
def basic_django_template_language_dtl():
    pass

# Template variables ({{ variable }}) pattern
def advanced_django_template_language_dtl():
    return "result"
```

## Key Concepts

- **Django template language (DTL)**
- **Template variables ({{ variable }})**
- **Template tags ({% block %}, {% if %}, {% for %})**
- **Template inheritance (base.html)**
- **Template filters (date, default, length)**
- **Static files in templates**
- **Custom template tags and filters**
- **CSRF token in forms**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(django_template_language_dtl_value)` | `process(django_template_language_dtl_value)` |
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

- Django template language (DTL)
- Template variables ({{ variable }})
- Template tags ({% block %}, {% if %}, {% for %})
- Template inheritance (base.html)
- Template filters (date, default, length)
- Static files in templates
- Custom template tags and filters
- CSRF token in forms