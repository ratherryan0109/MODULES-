# K-Means Clustering — Cheatsheet

## Quick Reference

```python
# K-Means Clustering — Quick Reference
# Core syntax and common patterns

# Basic K-Means algorithm (centroids, iterations)
def basic_k_means_algorithm_centroids_iterations():
    pass

# Number of clusters (K selection) pattern
def advanced_k_means_algorithm_centroids_iterations():
    return "result"
```

## Key Concepts

- **K-Means algorithm (centroids, iterations)**
- **Number of clusters (K selection)**
- **Elbow method for K**
- **Silhouette score**
- **KMeans in sklearn**
- **Centroid initialization (k-means++)**
- **Limitations of K-Means**
- **Cluster visualization**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(k_means_algorithm_centroids_iterations_value)` | `process(k_means_algorithm_centroids_iterations_value)` |
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

- K-Means algorithm (centroids, iterations)
- Number of clusters (K selection)
- Elbow method for K
- Silhouette score
- KMeans in sklearn
- Centroid initialization (k-means++)
- Limitations of K-Means
- Cluster visualization