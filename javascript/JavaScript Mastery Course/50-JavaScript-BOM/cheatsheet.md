# JavaScript BOM (Browser Object Model) - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript BOM (Browser Object Model) - key patterns
const window_object = "window object";
const result = window_object.toUpperCase();
console.log(result); // "WINDOW OBJECT"
```

### Key Concepts

- **window object**: Core concept in javascript bom (browser object model)
- **navigator object (userAgent, geolocation)**: Core concept in javascript bom (browser object model)
- **screen object**: Core concept in javascript bom (browser object model)
- **location object**: Core concept in javascript bom (browser object model)
- **history object (back, forward, pushState)**: Core concept in javascript bom (browser object model)
- **setTimeout and setInterval**: Core concept in javascript bom (browser object model)
- **requestAnimationFrame**: Core concept in javascript bom (browser object model)
- **Window dimensions and scrolling**: Core concept in javascript bom (browser object model)

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript BOM (Browser Object Model)"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript BOM (Browser Object Model)"` |
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
- window object
- navigator object (userAgent, geolocation)
- screen object
- location object
- history object (back, forward, pushState)
- setTimeout and setInterval
- requestAnimationFrame
- Window dimensions and scrolling
