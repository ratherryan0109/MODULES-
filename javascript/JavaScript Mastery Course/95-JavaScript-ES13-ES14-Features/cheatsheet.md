# JavaScript ES13/ES14 Features - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript ES13/ES14 Features - key patterns
const class_fields__public__private___ = "Class fields (public, private #)";
const result = class_fields__public__private___.toUpperCase();
console.log(result); // "CLASS FIELDS (PUBLIC, PRIVATE #)"
```

### Key Concepts

- **Class fields (public, private #)**: Core concept in javascript es13/es14 features
- **Private methods (#method)**: Core concept in javascript es13/es14 features
- **Static initialization blocks**: Core concept in javascript es13/es14 features
- **Top-level await**: Core concept in javascript es13/es14 features
- **Array findLast and findLastIndex**: Core concept in javascript es13/es14 features
- **Hashbang/Shebang grammar**: Core concept in javascript es13/es14 features
- **Error cause property**: Core concept in javascript es13/es14 features
- **Array grouping**: Core concept in javascript es13/es14 features

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript ES13/ES14 Features"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript ES13/ES14 Features"` |
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
- Class fields (public, private #)
- Private methods (#method)
- Static initialization blocks
- Top-level await
- Array findLast and findLastIndex
- Hashbang/Shebang grammar
- Error cause property
- Array grouping
