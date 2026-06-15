# Django Views — Cheatsheet

## Quick Reference

```python
# Django Views — Quick Reference
# Core syntax and common patterns

# Basic Function-based views (FBVs)
def basic_function_based_views_fbvs():
    pass

# HttpRequest and HttpResponse pattern
def advanced_function_based_views_fbvs():
    return "result"
```

## Key Concepts

- **Function-based views (FBVs)**
- **HttpRequest and HttpResponse**
- **Class-based views (CBVs)**
- **Generic views (ListView, DetailView)**
- **View decorators (@login_required, @csrf_exempt)**
- **Request methods (GET, POST)**
- **JSON response (JsonResponse)**
- **View mixins for reuse**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(function_based_views_fbvs_value)` | `process(function_based_views_fbvs_value)` |
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

- Function-based views (FBVs)
- HttpRequest and HttpResponse
- Class-based views (CBVs)
- Generic views (ListView, DetailView)
- View decorators (@login_required, @csrf_exempt)
- Request methods (GET, POST)
- JSON response (JsonResponse)
- View mixins for reuse