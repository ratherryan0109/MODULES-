# Mini Project: Monthly Budget Tracker

## Objective
Create a fully functional monthly budget tracker using HTML tables. The table will track income and expenses across multiple categories and calculate totals, with professional CSS styling and accessibility features.

## Requirements

### HTML Structure
- A main heading: "Monthly Budget Tracker - [Month] 2025"
- A `<table>` with proper semantic structure (`<thead>`, `<tbody>`, `<tfoot>`)
- A `<caption>` describing the table
- Columns: Category, Budgeted, Actual, Difference, Status
- At least 8 categories across two groups: **Income** (e.g., Salary, Freelance, Investments) and **Expenses** (e.g., Rent, Utilities, Groceries, Transport, Entertainment, Insurance)
- A total row in `<tfoot>` for each column with calculated sums
- Use `colgroup` and `col` for column widths
- Use `scope` attributes on all `<th>` elements
- Use a category header row (with `colspan`) to group Income vs Expenses

### Styling
- Clean, modern design with a color scheme (greens for positive, reds for negative)
- Sticky header row
- Alternating row colors for body rows
- Hover effect on rows
- Column-based styling via colgroup
- Responsive — wrap in a scrollable container
- Format currency values with a dollar sign prefix

### Data
Use realistic monthly budget values:
- Salary: $5,000 budgeted
- Freelance: $1,000 budgeted
- Investments: $300 budgeted
- Rent: $1,500 budgeted
- Utilities: $300 budgeted
- Groceries: $600 budgeted
- Transport: $200 budgeted
- Entertainment: $150 budgeted
- Insurance: $400 budgeted

The "Actual" column should contain slightly different values to show variance. The "Difference" column should be calculated (Actual - Budgeted). The "Status" column should show "Over Budget" (red) or "Under Budget" (green).

## Steps

1. Create the HTML document with proper structure and meta tags
2. Add the table with `<caption>`, `<colgroup>`, `<thead>`, `<tbody>`, `<tfoot>`
3. Create the Income category header with `colspan="5"`
4. Add income rows with Budgeted, Actual, Difference, and Status cells
5. Create the Expenses category header with `colspan="5"`
6. Add expense rows
7. Add total rows in `<tfoot>` for each category group
8. Add a grand total row
9. Write CSS: borders, sticky header, alternating rows, hover, color coding
10. Add `scope` attributes for accessibility
11. Wrap table in responsive container
12. Validate HTML and test

## Example Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Monthly Budget Tracker</title>
  <style>
    /* your styles */
  </style>
</head>
<body>
  <h1>Monthly Budget Tracker - June 2025</h1>
  <div class="table-container">
    <table>
      <caption>June 2025 Budget Overview</caption>
      <colgroup>
        <col style="width: 30%">
        <col style="width: 17%">
        <col style="width: 17%">
        <col style="width: 18%">
        <col style="width: 18%">
      </colgroup>
      <thead>
        <tr>
          <th scope="col">Category</th>
          <th scope="col">Budgeted</th>
          <th scope="col">Actual</th>
          <th scope="col">Difference</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <!-- Income and Expense rows -->
      </tbody>
      <tfoot>
        <!-- Total rows -->
      </tfoot>
    </table>
  </div>
</body>
</html>
```

## Expected Output

A professional budget table with:
- Categories grouped: Income (green tint) and Expenses (red tint)
- Proper currency formatting
- Status indicators: "Under Budget" or "Over Budget"
- Totals calculated at the bottom
- Smooth hover interactions
- Responsive horizontal scrolling on mobile

## Bonus Challenges

- Add a JavaScript function that lets users edit "Actual" values and auto-updates differences/status
- Add a progress bar inside each row showing percentage of budget used
- Add a print stylesheet for paper printing
- Add a chart visualization using Canvas or SVG alongside the table
- Add a dark mode toggle
