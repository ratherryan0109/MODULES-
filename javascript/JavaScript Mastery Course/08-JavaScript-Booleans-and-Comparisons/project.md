# JavaScript Booleans and Comparisons - Mini Project

## Project Overview
Build a practical application that demonstrates your understanding of JavaScript Booleans and Comparisons.
This project will help you apply the following concepts in a real-world scenario:

- Boolean primitive and object
- Truthy and falsy values
- Equality (== vs ===)
- Relational operators
- Conditional logic

## Learning Objectives
By completing this project, you will:
1. Apply boolean primitive and object in a practical context
2. Implement javascript booleans and comparisons following best practices
3. Handle errors and edge cases effectively
4. Write clean, maintainable code with proper structure
5. Test your implementation thoroughly

## Requirements
### Functional Requirements
- Implement Boolean primitive and object and Truthy and falsy values and Equality (== vs ===)
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
 * JavaScriptBooleansandComparisons - JavaScript Booleans and Comparisons
 * A practical implementation demonstrating javascript booleans and comparisons
 */
class JavaScriptBooleansandComparisons {
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
const project = new JavaScriptBooleansandComparisons();
try {
  project.add("Boolean primitive and object");
  project.add("Truthy and falsy values");
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
1. Implement the boolean primitive and object functionality
2. Add Truthy and falsy values capabilities
3. Include proper validation and error handling

### Step 3: Testing
1. Test with valid inputs
2. Test edge cases and error conditions
3. Verify the output is correct

## Expected Output
When you run the starter code, you should see output similar to:

```
Processed: [
  { original: "Boolean primitive and object", processed: "BOOLEAN PRIMITIVE AND OBJECT", timestamp: ... },
  { original: "Truthy and falsy values", processed: "TRUTHY AND FALSY VALUES", timestamp: ... }
]
History: [
  { action: "add", item: "Boolean primitive and object", timestamp: ... },
  { action: "add", item: "Truthy and falsy values", timestamp: ... }
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
