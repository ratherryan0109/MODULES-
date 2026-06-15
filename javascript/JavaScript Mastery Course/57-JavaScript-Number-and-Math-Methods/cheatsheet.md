# JavaScript Number and Math Methods - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript Number and Math Methods - key patterns
const number_isnan_vs_global_isnan = "Number.isNaN vs global isNaN";
const result = number_isnan_vs_global_isnan.toUpperCase();
console.log(result); // "NUMBER.ISNAN VS GLOBAL ISNAN"
```

### Key Concepts

- **Number.isNaN vs global isNaN**: Core concept in javascript number and math methods
- **Number.isFinite vs global isFinite**: Core concept in javascript number and math methods
- **Number.parseInt and parseFloat**: Core concept in javascript number and math methods
- **Number.isInteger and isSafeInteger**: Core concept in javascript number and math methods
- **Number.EPSILON precision**: Core concept in javascript number and math methods
- **Math.trunc, sign, cbrt, hypot**: Core concept in javascript number and math methods
- **Math.clz32, imul, fround**: Core concept in javascript number and math methods
- **Exponentiation operator (**)**: Core concept in javascript number and math methods

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript Number and Math Methods"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript Number and Math Methods"` |
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
- Number.isNaN vs global isNaN
- Number.isFinite vs global isFinite
- Number.parseInt and parseFloat
- Number.isInteger and isSafeInteger
- Number.EPSILON precision
- Math.trunc, sign, cbrt, hypot
- Math.clz32, imul, fround
- Exponentiation operator (**)
