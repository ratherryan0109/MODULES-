# JavaScript Web Workers - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript Web Workers - key patterns
const web_worker_creation = "Web Worker creation";
const result = web_worker_creation.toUpperCase();
console.log(result); // "WEB WORKER CREATION"
```

### Key Concepts

- **Web Worker creation**: Core concept in javascript web workers
- **postMessage communication**: Core concept in javascript web workers
- **onmessage event handler**: Core concept in javascript web workers
- **Worker termination**: Core concept in javascript web workers
- **Dedicated vs Shared Workers**: Core concept in javascript web workers
- **Service Workers introduction**: Core concept in javascript web workers
- **Transferable objects**: Core concept in javascript web workers
- **Worker limitations**: Core concept in javascript web workers

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript Web Workers"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript Web Workers"` |
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
- Web Worker creation
- postMessage communication
- onmessage event handler
- Worker termination
- Dedicated vs Shared Workers
- Service Workers introduction
- Transferable objects
- Worker limitations
