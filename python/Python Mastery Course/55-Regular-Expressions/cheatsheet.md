# Regular Expressions — Cheatsheet

## Quick Reference

```python
# Regular Expressions — Quick Reference
# Core syntax and common patterns

# Basic re.match() vs re.search() vs re.fullmatch()
def basic_re_match_vs_re_search_vs_re_fullmatch():
    pass

# re.findall() and re.finditer() pattern
def advanced_re_match_vs_re_search_vs_re_fullmatch():
    return "result"
```

## Key Concepts

- **re.match() vs re.search() vs re.fullmatch()**
- **re.findall() and re.finditer()**
- **re.sub() for search and replace**
- **re.split() advanced splitting**
- **Character classes and quantifiers**
- **Groups and backreferences**
- **Lookahead and lookbehind assertions**
- **Compiled regex patterns (re.compile())**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(re_match_vs_re_search_vs_re_fullmatch_value)` | `process(re_match_vs_re_search_vs_re_fullmatch_value)` |
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

- re.match() vs re.search() vs re.fullmatch()
- re.findall() and re.finditer()
- re.sub() for search and replace
- re.split() advanced splitting
- Character classes and quantifiers
- Groups and backreferences
- Lookahead and lookbehind assertions
- Compiled regex patterns (re.compile())