# JavaScript Whiteboard App - Mini Project

## Project Overview
Build a practical application that demonstrates your understanding of JavaScript Whiteboard App.
This project will help you apply the following concepts in a real-world scenario:

- Canvas drawing tools
- Shape tools (rectangle, circle, line)
- Color picker and brush size
- Sticky notes
- Undo/redo system

## Learning Objectives
By completing this project, you will:
1. Apply canvas drawing tools in a practical context
2. Implement javascript whiteboard app following best practices
3. Handle errors and edge cases effectively
4. Write clean, maintainable code with proper structure
5. Test your implementation thoroughly

## Requirements
### Functional Requirements
- Implement Canvas drawing tools and Shape tools (rectangle, circle, line) and Color picker and brush size
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
 * JavaScriptWhiteboardApp - JavaScript Whiteboard App
 * A practical implementation demonstrating javascript whiteboard app
 */
class JavaScriptWhiteboardApp {
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
const project = new JavaScriptWhiteboardApp();
try {
  project.add("Canvas drawing tools");
  project.add("Shape tools (rectangle, circle, line)");
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
1. Implement the canvas drawing tools functionality
2. Add Shape tools (rectangle, circle, line) capabilities
3. Include proper validation and error handling

### Step 3: Testing
1. Test with valid inputs
2. Test edge cases and error conditions
3. Verify the output is correct

## Expected Output
When you run the starter code, you should see output similar to:

```
Processed: [
  { original: "Canvas drawing tools", processed: "CANVAS DRAWING TOOLS", timestamp: ... },
  { original: "Shape tools (rectangle, circle, line)", processed: "SHAPE TOOLS (RECTANGLE, CIRCLE, LINE)", timestamp: ... }
]
History: [
  { action: "add", item: "Canvas drawing tools", timestamp: ... },
  { action: "add", item: "Shape tools (rectangle, circle, line)", timestamp: ... }
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
