# JavaScript ES11/ES12 Features - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript ES11/ES12 Features - key patterns
const optional_chaining_____ = "Optional chaining (?.)";
const result = optional_chaining_____.toUpperCase();
console.log(result); // "OPTIONAL CHAINING (?.)"
```

### Key Concepts

- **Optional chaining (?.)**: Core concept in javascript es11/es12 features
- **Nullish coalescing (??)**: Core concept in javascript es11/es12 features
- **Promise.allSettled**: Core concept in javascript es11/es12 features
- **Logical assignment (&&=, ||=, ??=)**: Core concept in javascript es11/es12 features
- **Numeric separators (_)**: Core concept in javascript es11/es12 features
- **String.prototype.replaceAll**: Core concept in javascript es11/es12 features
- **WeakRef and FinalizationRegistry**: Core concept in javascript es11/es12 features
- **Promise.any**: Core concept in javascript es11/es12 features

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript ES11/ES12 Features"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript ES11/ES12 Features"` |
| Iterate | `arr.method()` | `[1,2,3].map(n => n * 2)` |

### Best Practices
1. Use `const` by default, `let` when reassignment is needed
2. Handle edge cases and validate inputs
3. Write pure functions when possible
4. Use meaningful, descriptive names
5. Keep functions small and focused
6. Test with different inputs and edge cases
7. Use early returns to reduce nesting
8. Prefer array methods over manual loops

### Common Mistakes
- Misunderstanding mutable vs immutable operations
- Forgetting to handle edge cases
- Overcomplicating simple logic
- Not using strict equality (===)
- Mutating state unexpectedly

### Related Topics
- Optional chaining (?.)
- Nullish coalescing (??)
- Promise.allSettled
- Logical assignment (&&=, ||=, ??=)
- Numeric separators (_)
- String.prototype.replaceAll
- WeakRef and FinalizationRegistry
- Promise.any
