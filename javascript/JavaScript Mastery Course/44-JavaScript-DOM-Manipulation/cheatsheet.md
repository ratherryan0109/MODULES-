# JavaScript DOM Manipulation - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript DOM Manipulation - key patterns
const createelement = "createElement";
const result = createelement.toUpperCase();
console.log(result); // "CREATEELEMENT"
```

### Key Concepts

- **createElement**: Core concept in javascript dom manipulation
- **createTextNode**: Core concept in javascript dom manipulation
- **appendChild**: Core concept in javascript dom manipulation
- **insertBefore**: Core concept in javascript dom manipulation
- **append, prepend, after, before**: Core concept in javascript dom manipulation
- **removeChild, remove**: Core concept in javascript dom manipulation
- **replaceChild, replaceWith**: Core concept in javascript dom manipulation
- **innerHTML vs textContent**: Core concept in javascript dom manipulation

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript DOM Manipulation"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript DOM Manipulation"` |
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
- createElement
- createTextNode
- appendChild
- insertBefore
- append, prepend, after, before
- removeChild, remove
- replaceChild, replaceWith
- innerHTML vs textContent
