# Django Authentication — Cheatsheet

## Quick Reference

```python
# Django Authentication — Quick Reference
# Core syntax and common patterns

# Basic Django User model
def basic_django_user_model():
    pass

# Registration (UserCreationForm) pattern
def advanced_django_user_model():
    return "result"
```

## Key Concepts

- **Django User model**
- **Registration (UserCreationForm)**
- **Login and logout views**
- **Authentication decorators (@login_required)**
- **Password management**
- **Permissions and authorization**
- **Group-based access control**
- **Custom user model (AbstractUser)**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(django_user_model_value)` | `process(django_user_model_value)` |
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

- Django User model
- Registration (UserCreationForm)
- Login and logout views
- Authentication decorators (@login_required)
- Password management
- Permissions and authorization
- Group-based access control
- Custom user model (AbstractUser)