# Mini Project: Employee Directory Dashboard

## Overview

Build a fully styled, responsive employee directory table that includes sorting, column highlighting, and zebra striping. This project applies all major table styling concepts covered in this module.

## Requirements

1. **Table Structure**: Include columns for Employee ID, Full Name, Department, Position, Salary, Start Date, and Status
2. **Styling**:
   - Collapsed borders with a clean border design
   - Distinct header row with gradient background
   - Zebra striping on body rows
   - Hover effect on rows
   - Status column with color-coded badges (Active, On Leave, Terminated)
3. **Fixed layout** with explicit column widths
4. **Sticky header** that stays visible when scrolling long tables
5. **Responsive**:
   - Horizontal scroll wrapper for all screen sizes
   - At 768px and below, convert to card layout using `data-label` attributes
6. **Sorting**: Click column headers to sort rows (using JavaScript)
7. **Column highlighting**: Hovering a header highlights that entire column

## Steps

### Step 1: HTML Structure
Create a wrapper `<div class="table-wrapper">` containing the table. Use `<thead>`, `<tbody>`, semantic structure. Add `data-label` attributes to each `<td>`.

### Step 2: Base CSS
Set `border-collapse: collapse`, `table-layout: fixed`, width, and font. Define column widths using `<colgroup>` or classes.

### Step 3: Header Styling
Apply a gradient background (`#1a1a2e` to `#16213e`), white text with accent color, uppercase text, letter-spacing, and sticky positioning.

### Step 4: Body Styling
Add zebra striping with `nth-child(odd/even)`. Apply hover effect with a light blue highlight.

### Step 5: Status Badges
Create CSS classes `.active`, `.on-leave`, `.terminated` with appropriate colors (green, orange, red).

### Step 6: Column Widths
Set widths: ID 8%, Name 22%, Department 15%, Position 20%, Salary 12%, Start Date 13%, Status 10%.

### Step 7: Responsive
Wrap table in `overflow-x: auto`. At 768px, use card layout hiding thead and showing `::before` with `data-label`.

### Step 8: JavaScript Sorting
Add click handlers on `<th>` elements. Parse cell values, sort rows accordingly, and append back to tbody.

### Step 9: Column Highlighting
On th hover, add a CSS class to all matching td cells in that column index.

## Starter Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Employee Directory</title>
  <style>
    /* Add your styles here */
  </style>
</head>
<body>
  <h1>Employee Directory</h1>
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Full Name</th>
          <th>Department</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Start Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <!-- Add employee data rows -->
      </tbody>
    </table>
  </div>
  <script>
    // Add sorting and highlighting logic
  </script>
</body>
</html>
```

## Sample Data

| ID | Name | Dept | Position | Salary | Start Date | Status |
|----|------|------|----------|--------|------------|--------|
| 101 | Alice Johnson | Engineering | Senior Developer | $105,000 | 2021-03-15 | Active |
| 102 | Bob Smith | Marketing | Marketing Lead | $82,000 | 2020-07-22 | Active |
| 103 | Carol Davis | Design | UI/UX Designer | $78,000 | 2022-01-10 | On Leave |
| 104 | Dan Wilson | Sales | Account Manager | $92,000 | 2019-11-05 | Active |
| 105 | Eve Martinez | Engineering | Developer | $70,000 | 2023-06-01 | Active |
| 106 | Frank Lee | HR | HR Specialist | $65,000 | 2021-09-12 | Terminated |
| 107 | Grace Kim | Finance | Analyst | $88,000 | 2020-04-18 | Active |
| 108 | Henry Brown | Engineering | DevOps Engineer | $95,000 | 2022-08-25 | Active |
| 109 | Irene Chen | Design | Graphic Designer | $60,000 | 2023-02-14 | On Leave |
| 110 | Jack Taylor | Sales | Sales Rep | $55,000 | 2024-01-08 | Active |

## Evaluation Criteria

- Clean, well-structured HTML with semantic table elements
- CSS uses all core table styling properties correctly
- Responsive design works on mobile (card layout appears)
- Sorting works correctly for all column types (text, numbers, dates)
- Column highlighting triggers on header hover
- Code is clean, organized, and follows best practices
