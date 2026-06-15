# JavaScript DOM Traversal - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript DOM Traversal - key patterns
const parentnode_vs_parentelement = "parentNode vs parentElement";
const result = parentnode_vs_parentelement.toUpperCase();
console.log(result); // "PARENTNODE VS PARENTELEMENT"
```

### Key Concepts

- **parentNode vs parentElement**: Core concept in javascript dom traversal
- **childNodes vs children**: Core concept in javascript dom traversal
- **firstChild vs firstElementChild**: Core concept in javascript dom traversal
- **lastChild vs lastElementChild**: Core concept in javascript dom traversal
- **nextSibling vs nextElementSibling**: Core concept in javascript dom traversal
- **previousSibling vs previousElementSibling**: Core concept in javascript dom traversal
- **Node types (element, text, comment)**: Core concept in javascript dom traversal
- **Traversing node lists**: Core concept in javascript dom traversal

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript DOM Traversal"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript DOM Traversal"` |
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
- parentNode vs parentElement
- childNodes vs children
- firstChild vs firstElementChild
- lastChild vs lastElementChild
- nextSibling vs nextElementSibling
- previousSibling vs previousElementSibling
- Node types (element, text, comment)
- Traversing node lists
