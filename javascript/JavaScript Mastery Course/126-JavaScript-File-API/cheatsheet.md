# JavaScript File API - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript File API - key patterns
const file_object_and_filelist = "File object and FileList";
const result = file_object_and_filelist.toUpperCase();
console.log(result); // "FILE OBJECT AND FILELIST"
```

### Key Concepts

- **File object and FileList**: Core concept in javascript file api
- **FileReader methods (readAsText, readAsDataURL)**: Core concept in javascript file api
- **Drag and drop file handling**: Core concept in javascript file api
- **File upload with XMLHttpRequest**: Core concept in javascript file api
- **File upload with Fetch**: Core concept in javascript file api
- **Progress events**: Core concept in javascript file api
- **File type validation**: Core concept in javascript file api
- **Client-side image preview**: Core concept in javascript file api

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript File API"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript File API"` |
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
- File object and FileList
- FileReader methods (readAsText, readAsDataURL)
- Drag and drop file handling
- File upload with XMLHttpRequest
- File upload with Fetch
- Progress events
- File type validation
- Client-side image preview
