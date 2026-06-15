# Matplotlib Pyplot — Mini Project

## Project Overview
Build a practical Python application that demonstrates matplotlib pyplot.
This project reinforces the following concepts:
- plt.plot() for line charts
- plt.scatter() for scatter plots
- plt.bar() and plt.barh() for bars
- plt.hist() for histograms
- plt.pie() for pie charts
- plt.figure() and plt.subplot()
- plt.xlabel(), plt.ylabel(), plt.title()
- plt.show() and plt.savefig()

## Learning Objectives
By completing this project, you will:
1. Apply theoretical knowledge of Python concepts to a real-world problem
2. Practice writing clean, well-documented, and type-hinted Python code
3. Implement proper error handling and input validation
4. Test your implementation with various inputs and edge cases
5. Build a portfolio-worthy Python application from scratch

## Requirements

### Functional Requirements
- Accept user input or file input for processing
- Apply the core concepts of the module correctly
- Display results in a clear, readable format
- Handle edge cases and invalid input gracefully

### Technical Requirements
- Use type hints for all function signatures (PEP 484)
- Include docstrings for all functions and classes (PEP 257)
- Follow PEP 8 style guidelines
- Include at least one unit test

## Starter Code

```python
from typing import List, Optional
import logging

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")

class MatplotlibPyplotProcessor:
    """Process and manage matplotlib pyplot data."""

    def __init__(self, name: str = "default"):
        """Initialize the processor with a name."""
        self.name = name
        self.history: List[str] = []

    def process(self, data: List[int]) -> List[int]:
        """Process input data using plt.plot() for line charts."""
        result = [x * 2 for x in data]
        self.history.append(f"Processed {len(data)} items")
        return result

    def get_history(self) -> List[str]:
        """Return processing history."""
        return self.history

    def clear_history(self) -> None:
        """Clear processing history."""
        self.history.clear()

def main() -> None:
    """Main entry point for the application."""
    processor = MatplotlibPyplotProcessor("demo")
    sample_data = [1, 2, 3, 4, 5]
    result = processor.process(sample_data)
    print(f"Result: {result}")
    print(f"History: {processor.get_history()}")

if __name__ == "__main__":
    main()
```

## Step-by-Step Guide

### Step 1: Setup and Planning
- Review the module concepts and identify the core pattern
- Plan your class structure and method signatures
- Set up virtual environment and install dependencies if needed

### Step 2: Core Implementation
- Implement the main processing logic
- Add proper error handling and input validation
- Include logging for debugging

### Step 3: Testing and Validation
- Test with normal inputs
- Test with edge cases (empty, invalid, boundary)
- Add unit tests with pytest

## Expected Output

```
Result: [2, 4, 6, 8, 10]
History: ["Processed 5 items"]
```

## Bonus Challenges

1. Add file input/output support (read from CSV, write results)
2. Implement parallel processing for large datasets
3. Add a command-line interface using argparse
4. Create a simple GUI using tkinter
5. Implement caching for repeated operations
6. Add performance benchmarks and comparison

## Submission Checklist

- [ ] Code follows PEP 8 style guide
- [ ] All functions have type hints and docstrings
- [ ] Error handling covers edge cases
- [ ] At least one unit test is included
- [ ] README with setup instructions
- [ ] requirements.txt if external packages used