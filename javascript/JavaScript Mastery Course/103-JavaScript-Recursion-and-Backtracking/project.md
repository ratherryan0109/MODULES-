# JavaScript Recursion and Backtracking - Mini Project

## Project Overview
Build a practical application that demonstrates your understanding of JavaScript Recursion and Backtracking.
This project will help you apply the following concepts in a real-world scenario:

- Recursion patterns
- Recursive backtracking
- N-Queens problem
- Permutations generation
- Subsets and combinations

## Learning Objectives
By completing this project, you will:
1. Apply recursion patterns in a practical context
2. Implement javascript recursion and backtracking following best practices
3. Handle errors and edge cases effectively
4. Write clean, maintainable code with proper structure
5. Test your implementation thoroughly

## Requirements
### Functional Requirements
- Implement Recursion patterns and Recursive backtracking and N-Queens problem
- Handle user input and validate data
- Return meaningful results or feedback
- Manage errors gracefully with try/catch

### Technical Requirements
- Use modern ES6+ syntax (const, let, arrow functions)
- Include proper error handling for edge cases
- Add JSDoc comments for all functions
- Achieve at least basic test coverage

## Starter Code
```javascript
/**
 * JavaScriptRecursionandBacktracking - JavaScript Recursion and Backtracking
 * A practical implementation demonstrating javascript recursion and backtracking
 */
class JavaScriptRecursionandBacktracking {
  constructor(options = {}) {
    this.options = options;
    this.data = [];
    this.history = [];
  }

  /**
   * Add an item with validation
   * @param {*} item - The item to add
   * @returns {boolean} Success status
   */
  add(item) {
    if (item == null) {
      throw new Error("Item cannot be null or undefined");
    }
    this.data.push(item);
    this.history.push({ action: "add", item, timestamp: Date.now() });
    return true;
  }

  /**
   * Process all stored items
   * @returns {Array} Processed items
   */
  process() {
    return this.data.map(item => ({
      original: item,
      processed: String(item).toUpperCase(),
      timestamp: Date.now()
    }));
  }

  /**
   * Get operation history
   * @returns {Array} History entries
   */
  getHistory() {
    return [...this.history];
  }

  /**
   * Clear all data
   */
  clear() {
    this.data = [];
    this.history.push({ action: "clear", timestamp: Date.now() });
  }
}

// Test your implementation
const project = new JavaScriptRecursionandBacktracking();
try {
  project.add("Recursion patterns");
  project.add("Recursive backtracking");
  console.log("Processed:", project.process());
  console.log("History:", project.getHistory());
} catch (error) {
  console.error("Error:", error.message);
}
```

## Step-by-Step Guide

### Step 1: Project Setup
1. Create a new file for your project
2. Set up the class structure with constructor
3. Initialize any required properties

### Step 2: Core Implementation
1. Implement the recursion patterns functionality
2. Add Recursive backtracking capabilities
3. Include proper validation and error handling

### Step 3: Testing
1. Test with valid inputs
2. Test edge cases and error conditions
3. Verify the output is correct

## Expected Output
When you run the starter code, you should see output similar to:

```
Processed: [
  { original: "Recursion patterns", processed: "RECURSION PATTERNS", timestamp: ... },
  { original: "Recursive backtracking", processed: "RECURSIVE BACKTRACKING", timestamp: ... }
]
History: [
  { action: "add", item: "Recursion patterns", timestamp: ... },
  { action: "add", item: "Recursive backtracking", timestamp: ... }
]
```

## Bonus Challenges
1. Add persistence using localStorage or a file
2. Implement search/filter functionality
3. Add undo/redo support
4. Create a simple UI to interact with your project
5. Add unit tests using a testing framework
6. Optimize for large datasets

## Submission Checklist
- [ ] All functional requirements are implemented
- [ ] Error handling is comprehensive
- [ ] Code is clean and well-commented
- [ ] Edge cases are handled
- [ ] Bonus challenges attempted (optional)
- [ ] Tested with various inputs
