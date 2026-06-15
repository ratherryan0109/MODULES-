# JavaScript Strict Mode - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript Strict Mode - key patterns
const _use_strict__directive = ""use strict" directive";
const result = _use_strict__directive.toUpperCase();
console.log(result); // ""USE STRICT" DIRECTIVE"
```

### Key Concepts

- **"use strict" directive**: Core concept in javascript strict mode
- **Strict mode changes**: Core concept in javascript strict mode
- **Eliminating this coercion**: Core concept in javascript strict mode
- **No undeclared variables**: Core concept in javascript strict mode
- **Duplicate parameter errors**: Core concept in javascript strict mode
- **Deleting variables/undeletables**: Core concept in javascript strict mode
- **Restricted future keywords**: Core concept in javascript strict mode
- **Strict mode in modules**: Core concept in javascript strict mode

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript Strict Mode"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript Strict Mode"` |
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
- "use strict" directive
- Strict mode changes
- Eliminating this coercion
- No undeclared variables
- Duplicate parameter errors
- Deleting variables/undeletables
- Restricted future keywords
- Strict mode in modules
