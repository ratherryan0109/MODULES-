# Web Scraper Project — Cheatsheet

## Quick Reference

```python
# Web Scraper Project — Quick Reference
# Core syntax and common patterns

# Basic HTTP requests for web pages
def basic_http_requests_for_web_pages():
    pass

# BeautifulSoup HTML parsing pattern
def advanced_http_requests_for_web_pages():
    return "result"
```

## Key Concepts

- **HTTP requests for web pages**
- **BeautifulSoup HTML parsing**
- **CSS selector extraction**
- **Data cleaning and structuring**
- **CSV/JSON data export**
- **Respecting robots.txt**
- **Rate limiting and delays**
- **Error handling for failed requests**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(http_requests_for_web_pages_value)` | `process(http_requests_for_web_pages_value)` |
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

- HTTP requests for web pages
- BeautifulSoup HTML parsing
- CSS selector extraction
- Data cleaning and structuring
- CSV/JSON data export
- Respecting robots.txt
- Rate limiting and delays
- Error handling for failed requests