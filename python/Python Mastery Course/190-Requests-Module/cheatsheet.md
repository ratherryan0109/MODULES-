# Requests Module — Cheatsheet

## Quick Reference

```python
# Requests Module — Quick Reference
# Core syntax and common patterns

# Basic requests.get() and requests.post()
def basic_requests_get_and_requests_post():
    pass

# URL parameters (params dict) pattern
def advanced_requests_get_and_requests_post():
    return "result"
```

## Key Concepts

- **requests.get() and requests.post()**
- **URL parameters (params dict)**
- **Request headers and custom headers**
- **Response object (status_code, text, json())**
- **Handling JSON responses**
- **Session objects for connection reuse**
- **Timeout and error handling**
- **Authentication (Basic, Bearer)**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(requests_get_and_requests_post_value)` | `process(requests_get_and_requests_post_value)` |
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

- requests.get() and requests.post()
- URL parameters (params dict)
- Request headers and custom headers
- Response object (status_code, text, json())
- Handling JSON responses
- Session objects for connection reuse
- Timeout and error handling
- Authentication (Basic, Bearer)