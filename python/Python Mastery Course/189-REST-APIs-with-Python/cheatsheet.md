# REST APIs with Python — Cheatsheet

## Quick Reference

```python
# REST APIs with Python — Quick Reference
# Core syntax and common patterns

# Basic REST API design principles
def basic_rest_api_design_principles():
    pass

# Django REST Framework setup pattern
def advanced_rest_api_design_principles():
    return "result"
```

## Key Concepts

- **REST API design principles**
- **Django REST Framework setup**
- **Serializers (ModelSerializer)**
- **APIViews and ViewSets**
- **Routers for URL generation**
- **Authentication (Token, JWT)**
- **Permissions (IsAuthenticated)**
- **API documentation (Swagger/OpenAPI)**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(rest_api_design_principles_value)` | `process(rest_api_design_principles_value)` |
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

- REST API design principles
- Django REST Framework setup
- Serializers (ModelSerializer)
- APIViews and ViewSets
- Routers for URL generation
- Authentication (Token, JWT)
- Permissions (IsAuthenticated)
- API documentation (Swagger/OpenAPI)