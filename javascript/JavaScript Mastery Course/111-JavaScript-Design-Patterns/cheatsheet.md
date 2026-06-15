# JavaScript Design Patterns - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript Design Patterns - key patterns
const singleton_pattern = "Singleton pattern";
const result = singleton_pattern.toUpperCase();
console.log(result); // "SINGLETON PATTERN"
```

### Key Concepts

- **Singleton pattern**: Core concept in javascript design patterns
- **Observer pattern**: Core concept in javascript design patterns
- **Factory pattern**: Core concept in javascript design patterns
- **Module pattern**: Core concept in javascript design patterns
- **Decorator pattern**: Core concept in javascript design patterns
- **Strategy pattern**: Core concept in javascript design patterns
- **MVC pattern**: Core concept in javascript design patterns
- **Revealing module pattern**: Core concept in javascript design patterns

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript Design Patterns"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript Design Patterns"` |
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
- Singleton pattern
- Observer pattern
- Factory pattern
- Module pattern
- Decorator pattern
- Strategy pattern
- MVC pattern
- Revealing module pattern
