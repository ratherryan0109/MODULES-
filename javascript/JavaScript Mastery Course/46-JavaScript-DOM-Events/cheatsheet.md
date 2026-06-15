# JavaScript DOM Events - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript DOM Events - key patterns
const addeventlistener = "addEventListener";
const result = addeventlistener.toUpperCase();
console.log(result); // "ADDEVENTLISTENER"
```

### Key Concepts

- **addEventListener**: Core concept in javascript dom events
- **removeEventListener**: Core concept in javascript dom events
- **Event object properties**: Core concept in javascript dom events
- **Event phases (capture, target, bubble)**: Core concept in javascript dom events
- **Event delegation**: Core concept in javascript dom events
- **Custom events (CustomEvent)**: Core concept in javascript dom events
- **Event preventDefault**: Core concept in javascript dom events
- **Event stopPropagation**: Core concept in javascript dom events

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript DOM Events"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript DOM Events"` |
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
- addEventListener
- removeEventListener
- Event object properties
- Event phases (capture, target, bubble)
- Event delegation
- Custom events (CustomEvent)
- Event preventDefault
- Event stopPropagation
