# JavaScript ES9/ES10 Features - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript ES9/ES10 Features - key patterns
const rest_spread_for_objects = "Rest/spread for objects";
const result = rest_spread_for_objects.toUpperCase();
console.log(result); // "REST/SPREAD FOR OBJECTS"
```

### Key Concepts

- **Rest/spread for objects**: Core concept in javascript es9/es10 features
- **Async iteration (for await...of)**: Core concept in javascript es9/es10 features
- **Promise.prototype.finally**: Core concept in javascript es9/es10 features
- **Array flat and flatMap**: Core concept in javascript es9/es10 features
- **Object.fromEntries**: Core concept in javascript es9/es10 features
- **String trimStart and trimEnd**: Core concept in javascript es9/es10 features
- **Symbol.description**: Core concept in javascript es9/es10 features
- **Optional catch binding**: Core concept in javascript es9/es10 features

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript ES9/ES10 Features"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript ES9/ES10 Features"` |
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
- Rest/spread for objects
- Async iteration (for await...of)
- Promise.prototype.finally
- Array flat and flatMap
- Object.fromEntries
- String trimStart and trimEnd
- Symbol.description
- Optional catch binding
