# JavaScript Server-Sent Events - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript Server-Sent Events - key patterns
const eventsource_api = "EventSource API";
const result = eventsource_api.toUpperCase();
console.log(result); // "EVENTSOURCE API"
```

### Key Concepts

- **EventSource API**: Core concept in javascript server-sent events
- **Server-sent event format**: Core concept in javascript server-sent events
- **Automatic reconnection**: Core concept in javascript server-sent events
- **Event types (named events)**: Core concept in javascript server-sent events
- **SSE vs WebSocket comparison**: Core concept in javascript server-sent events
- **SSE with Express**: Core concept in javascript server-sent events
- **SSE use cases (notifications, feeds)**: Core concept in javascript server-sent events
- **Event stream parsing**: Core concept in javascript server-sent events

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript Server-Sent Events"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript Server-Sent Events"` |
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
- EventSource API
- Server-sent event format
- Automatic reconnection
- Event types (named events)
- SSE vs WebSocket comparison
- SSE with Express
- SSE use cases (notifications, feeds)
- Event stream parsing
