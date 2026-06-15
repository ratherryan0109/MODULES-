# JavaScript Callback to Promise to Async - Mini Project

## Project Overview
Build a practical application that demonstrates your understanding of JavaScript Callback to Promise to Async.
This project will help you apply the following concepts in a real-world scenario:

- Callback hell problem
- Promise conversion pattern
- Promisification of callbacks
- Async/await as syntactic sugar
- Reading async code

## Learning Objectives
By completing this project, you will:
1. Apply callback hell problem in a practical context
2. Implement javascript callback to promise to async following best practices
3. Handle errors and edge cases effectively
4. Write clean, maintainable code with proper structure
5. Test your implementation thoroughly

## Requirements
### Functional Requirements
- Implement Callback hell problem and Promise conversion pattern and Promisification of callbacks
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
 * JavaScriptCallbacktoPromisetoAsync - JavaScript Callback to Promise to Async
 * A practical implementation demonstrating javascript callback to promise to async
 */
class JavaScriptCallbacktoPromisetoAsync {
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
const project = new JavaScriptCallbacktoPromisetoAsync();
try {
  project.add("Callback hell problem");
  project.add("Promise conversion pattern");
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
1. Implement the callback hell problem functionality
2. Add Promise conversion pattern capabilities
3. Include proper validation and error handling

### Step 3: Testing
1. Test with valid inputs
2. Test edge cases and error conditions
3. Verify the output is correct

## Expected Output
When you run the starter code, you should see output similar to:

```
Processed: [
  { original: "Callback hell problem", processed: "CALLBACK HELL PROBLEM", timestamp: ... },
  { original: "Promise conversion pattern", processed: "PROMISE CONVERSION PATTERN", timestamp: ... }
]
History: [
  { action: "add", item: "Callback hell problem", timestamp: ... },
  { action: "add", item: "Promise conversion pattern", timestamp: ... }
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
