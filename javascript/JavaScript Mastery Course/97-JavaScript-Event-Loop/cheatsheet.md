# JavaScript Event Loop - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript Event Loop - key patterns
const call_stack = "Call stack";
const result = call_stack.toUpperCase();
console.log(result); // "CALL STACK"
```

### Key Concepts

- **Call stack**: Core concept in javascript event loop
- **Task queue (macrotasks)**: Core concept in javascript event loop
- **Microtask queue**: Core concept in javascript event loop
- **Event loop phases**: Core concept in javascript event loop
- **setTimeout vs Promise timing**: Core concept in javascript event loop
- **requestAnimationFrame timing**: Core concept in javascript event loop
- **Rendering pipeline**: Core concept in javascript event loop
- **Blocking the event loop**: Core concept in javascript event loop

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript Event Loop"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript Event Loop"` |
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
- Call stack
- Task queue (macrotasks)
- Microtask queue
- Event loop phases
- setTimeout vs Promise timing
- requestAnimationFrame timing
- Rendering pipeline
- Blocking the event loop
