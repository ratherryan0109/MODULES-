# JavaScript Modules (ES6) - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript Modules (ES6) - key patterns
const named_exports = "Named exports";
const result = named_exports.toUpperCase();
console.log(result); // "NAMED EXPORTS"
```

### Key Concepts

- **Named exports**: Core concept in javascript modules (es6)
- **Default exports**: Core concept in javascript modules (es6)
- **Named imports**: Core concept in javascript modules (es6)
- **Namespace imports**: Core concept in javascript modules (es6)
- **Re-exporting**: Core concept in javascript modules (es6)
- **Module scope**: Core concept in javascript modules (es6)
- **Dynamic import()**: Core concept in javascript modules (es6)
- **Tree shaking**: Core concept in javascript modules (es6)

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript Modules (ES6)"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript Modules (ES6)"` |
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
- Named exports
- Default exports
- Named imports
- Namespace imports
- Re-exporting
- Module scope
- Dynamic import()
- Tree shaking
