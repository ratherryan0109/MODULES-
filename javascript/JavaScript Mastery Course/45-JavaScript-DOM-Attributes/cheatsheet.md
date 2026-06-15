# JavaScript DOM Attributes - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript DOM Attributes - key patterns
const getattribute_setattribute = "getAttribute/setAttribute";
const result = getattribute_setattribute.toUpperCase();
console.log(result); // "GETATTRIBUTE/SETATTRIBUTE"
```

### Key Concepts

- **getAttribute/setAttribute**: Core concept in javascript dom attributes
- **removeAttribute**: Core concept in javascript dom attributes
- **hasAttribute**: Core concept in javascript dom attributes
- **dataset and data-* attributes**: Core concept in javascript dom attributes
- **classList API (add, remove, toggle, contains)**: Core concept in javascript dom attributes
- **style property manipulation**: Core concept in javascript dom attributes
- **getComputedStyle**: Core concept in javascript dom attributes
- **Custom attribute conventions**: Core concept in javascript dom attributes

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript DOM Attributes"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript DOM Attributes"` |
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
- getAttribute/setAttribute
- removeAttribute
- hasAttribute
- dataset and data-* attributes
- classList API (add, remove, toggle, contains)
- style property manipulation
- getComputedStyle
- Custom attribute conventions
