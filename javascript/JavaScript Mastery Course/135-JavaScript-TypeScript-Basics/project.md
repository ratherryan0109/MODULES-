# JavaScript TypeScript Basics - Mini Project

## Project Overview
Build a practical application that demonstrates your understanding of JavaScript TypeScript Basics.
This project will help you apply the following concepts in a real-world scenario:

- TypeScript setup (tsconfig.json)
- Basic types (string, number, boolean, array)
- Interfaces and type aliases
- Generics
- Enums and unions

## Learning Objectives
By completing this project, you will:
1. Apply typescript setup (tsconfig.json) in a practical context
2. Implement javascript typescript basics following best practices
3. Handle errors and edge cases effectively
4. Write clean, maintainable code with proper structure
5. Test your implementation thoroughly

## Requirements
### Functional Requirements
- Implement TypeScript setup (tsconfig.json) and Basic types (string, number, boolean, array) and Interfaces and type aliases
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
 * JavaScriptTypeScriptBasics - JavaScript TypeScript Basics
 * A practical implementation demonstrating javascript typescript basics
 */
class JavaScriptTypeScriptBasics {
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
const project = new JavaScriptTypeScriptBasics();
try {
  project.add("TypeScript setup (tsconfig.json)");
  project.add("Basic types (string, number, boolean, array)");
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
1. Implement the typescript setup (tsconfig.json) functionality
2. Add Basic types (string, number, boolean, array) capabilities
3. Include proper validation and error handling

### Step 3: Testing
1. Test with valid inputs
2. Test edge cases and error conditions
3. Verify the output is correct

## Expected Output
When you run the starter code, you should see output similar to:

```
Processed: [
  { original: "TypeScript setup (tsconfig.json)", processed: "TYPESCRIPT SETUP (TSCONFIG.JSON)", timestamp: ... },
  { original: "Basic types (string, number, boolean, array)", processed: "BASIC TYPES (STRING, NUMBER, BOOLEAN, ARRAY)", timestamp: ... }
]
History: [
  { action: "add", item: "TypeScript setup (tsconfig.json)", timestamp: ... },
  { action: "add", item: "Basic types (string, number, boolean, array)", timestamp: ... }
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
