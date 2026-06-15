# Performance Optimization — Cheatsheet

## Quick Reference

```python
# Performance Optimization — Quick Reference
# Core syntax and common patterns

# Basic cProfile for CPU profiling
def basic_cprofile_for_cpu_profiling():
    pass

# timeit module for micro-benchmarks pattern
def advanced_cprofile_for_cpu_profiling():
    return "result"
```

## Key Concepts

- **cProfile for CPU profiling**
- **timeit module for micro-benchmarks**
- **Memory profiling (memory_profiler)**
- **Choosing efficient data structures**
- **Generator vs list memory**
- **Caching with functools.lru_cache**
- **NumPy vectorization for speed**
- **Cython and PyPy as alternatives**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(cprofile_for_cpu_profiling_value)` | `process(cprofile_for_cpu_profiling_value)` |
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

- cProfile for CPU profiling
- timeit module for micro-benchmarks
- Memory profiling (memory_profiler)
- Choosing efficient data structures
- Generator vs list memory
- Caching with functools.lru_cache
- NumPy vectorization for speed
- Cython and PyPy as alternatives