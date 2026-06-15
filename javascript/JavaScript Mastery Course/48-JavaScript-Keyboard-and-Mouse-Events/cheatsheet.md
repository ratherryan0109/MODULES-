# JavaScript Keyboard and Mouse Events - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript Keyboard and Mouse Events - key patterns
const keydown__keypress__keyup = "keydown, keypress, keyup";
const result = keydown__keypress__keyup.toUpperCase();
console.log(result); // "KEYDOWN, KEYPRESS, KEYUP"
```

### Key Concepts

- **keydown, keypress, keyup**: Core concept in javascript keyboard and mouse events
- **event.key vs event.code**: Core concept in javascript keyboard and mouse events
- **Mouse events (click, dblclick, mousedown, mouseup)**: Core concept in javascript keyboard and mouse events
- **Mouse coordinates (client, page, screen)**: Core concept in javascript keyboard and mouse events
- **Mouseenter vs mouseover**: Core concept in javascript keyboard and mouse events
- **Drag and drop basics**: Core concept in javascript keyboard and mouse events
- **Context menu events**: Core concept in javascript keyboard and mouse events
- **Wheel events**: Core concept in javascript keyboard and mouse events

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript Keyboard and Mouse Events"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript Keyboard and Mouse Events"` |
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
- keydown, keypress, keyup
- event.key vs event.code
- Mouse events (click, dblclick, mousedown, mouseup)
- Mouse coordinates (client, page, screen)
- Mouseenter vs mouseover
- Drag and drop basics
- Context menu events
- Wheel events
