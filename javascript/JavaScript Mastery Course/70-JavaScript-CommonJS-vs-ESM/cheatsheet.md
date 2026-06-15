# JavaScript CommonJS vs ESM - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript CommonJS vs ESM - key patterns
const require___syntax = "require() syntax";
const result = require___syntax.toUpperCase();
console.log(result); // "REQUIRE() SYNTAX"
```

### Key Concepts

- **require() syntax**: Core concept in javascript commonjs vs esm
- **module.exports**: Core concept in javascript commonjs vs esm
- **import/export ES modules**: Core concept in javascript commonjs vs esm
- **Synchronous vs asynchronous**: Core concept in javascript commonjs vs esm
- **Static vs dynamic imports**: Core concept in javascript commonjs vs esm
- **Circular dependency handling**: Core concept in javascript commonjs vs esm
- **Package.json type field**: Core concept in javascript commonjs vs esm
- **.mjs and .cjs extensions**: Core concept in javascript commonjs vs esm

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript CommonJS vs ESM"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript CommonJS vs ESM"` |
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
- require() syntax
- module.exports
- import/export ES modules
- Synchronous vs asynchronous
- Static vs dynamic imports
- Circular dependency handling
- Package.json type field
- .mjs and .cjs extensions
