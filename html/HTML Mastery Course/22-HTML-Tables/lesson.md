# Lesson 22: HTML Tables

## Introduction

HTML tables are used to organize and display data in a structured grid format consisting of rows and columns. From simple data grids to complex scheduling layouts, tables are fundamental for presenting tabular information on the web. Modern HTML tables also support accessibility features and advanced styling capabilities.

## Learning Objectives

By the end of this lesson, you will be able to:
1. Create basic HTML tables using `<table>`, `<tr>`, `<td>`, and `<th>` elements
2. Structure tables with semantic elements: `<thead>`, `<tbody>`, `<tfoot>`
3. Use colspan and rowspan attributes to merge cells
4. Apply different caption and header scoping techniques
5. Style tables with CSS for appearance and responsiveness
6. Make tables accessible with proper markup and ARIA attributes
7. Understand when to use tables versus CSS layout techniques

## Theory

### What is an HTML Table?

An HTML table is a structured set of data arranged in rows and columns. Tables are defined using the `<table>` element, with rows created by `<tr>` (table row), and cells by `<td>` (table data) or `<th>` (table header).

### Core Table Elements

| Element | Purpose |
|---------|---------|
| `<table>` | Container for the entire table |
| `<tr>` | Defines a row of cells |
| `<td>` | Standard data cell |
| `<th>` | Header cell (bold, centered by default) |
| `<caption>` | Title/summary of the table |
| `<thead>` | Groups header rows |
| `<tbody>` | Groups body rows |
| `<tfoot>` | Groups footer rows |
| `<colgroup>` | Defines column groups |
| `<col>` | Defines column properties |

### Table Structure Hierarchy

```
<table>
  <caption>Table Title</caption>
  <colgroup>
    <col span="2" style="background: #f0f0f0">
  </colgroup>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer 1</td>
      <td>Footer 2</td>
    </tr>
  </tfoot>
</table>
```

## Syntax

### Minimal Table
```html
<table>
  <tr>
    <td>Cell 1</td>
    <td>Cell 2</td>
  </tr>
</table>
```

### Full Semantic Table
```html
<table>
  <caption>Monthly Savings</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$200</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$200</td>
    </tr>
  </tfoot>
</table>
```

## Examples

### Example 1: Basic Table

```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>28</td>
    <td>New York</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>34</td>
    <td>London</td>
  </tr>
</table>
```

### Example 2: Table with Caption and Scope

```html
<table>
  <caption>Employee Directory</caption>
  <tr>
    <th scope="col">Name</th>
    <th scope="col">Department</th>
    <th scope="col">Role</th>
  </tr>
  <tr>
    <td>Sarah Johnson</td>
    <td>Engineering</td>
    <td>Senior Developer</td>
  </tr>
  <tr>
    <td>Mike Chen</td>
    <td>Design</td>
    <td>UI Designer</td>
  </tr>
</table>
```

### Example 3: Colspan and Rowspan

```html
<table>
  <tr>
    <th>Name</th>
    <th colspan="2">Contact</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>alice@email.com</td>
    <td>+1-555-0101</td>
  </tr>
</table>
```

### Example 4: Column Groups

```html
<table>
  <colgroup>
    <col style="background: #ffcccc">
    <col span="2" style="background: #ccffcc">
  </colgroup>
  <tr>
    <th>Item</th>
    <th>Price</th>
    <th>Stock</th>
  </tr>
  <tr>
    <td>Laptop</td>
    <td>$999</td>
    <td>15</td>
  </tr>
</table>
```

### Example 5: Styled Table with CSS

```html
<style>
  table { border-collapse: collapse; width: 100%; }
  th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
  th { background-color: #4CAF50; color: white; }
  tr:nth-child(even) { background-color: #f2f2f2; }
</style>
```

## Visual Explanation

### Anatomy of an HTML Table

```
┌─────────────────────────────────────────┐
│            <caption>                     │
│         Table Title                      │
├────────┬────────┬────────┬──────────────┤
│ <thead>│        │        │              │
│  <tr>  │  <th>  │  <th>  │   <th>       │
│        │ Header1│ Header2│  Header3     │
├────────┼────────┼────────┼──────────────┤
│ <tbody>│        │        │              │
│  <tr>  │  <td>  │  <td>  │   <td>       │
│        │ Data1  │ Data2  │   Data3      │
│  <tr>  │  <td>  │  <td>  │   <td>       │
│        │ Data4  │ Data5  │   Data6      │
├────────┼────────┼────────┼──────────────┤
│ <tfoot>│        │        │              │
│  <tr>  │  <td>  │  <td>  │   <td>       │
│        │Footer1 │Footer2 │  Footer3     │
└────────┴────────┴────────┴──────────────┘
```

### Cell Merging Visualization

```
Normal:       colspan="2":        rowspan="3":
┌───┬───┐    ┌─────────┬───┐    ┌───┬───┐
│ A │ B │    │   A     │ B │    │ A │ B │
├───┼───┤    ├─────────┼───┤    ├───┤   │
│ C │ D │    │   C     │ D │    │ C │   │
└───┴───┘    └─────────┴───┘    ├───┤   │
                                 │ D │   │
                                 └───┴───┘
```

## Common Mistakes

1. **Using tables for layout** — Never use `<table>` for page layout; use CSS Grid or Flexbox
2. **Missing `<th>` elements** — Always use `<th>` for headers (with `scope` attribute)
3. **Not using `<caption>`** — Always add a caption for context and accessibility
4. **Forgetting `border-collapse`** — Default double borders look unprofessional
5. **Nested tables** — Avoid tables inside tables unless absolutely necessary
6. **No responsive handling** — Tables overflow on small screens without proper CSS

## Best Practices

1. Always use semantic elements: `<thead>`, `<tbody>`, `<tfoot>`
2. Add `scope="col"` or `scope="row"` to `<th>` for accessibility
3. Use `<caption>` to provide a table summary
4. Apply `border-collapse: collapse` for clean borders
5. Use alternating row colors for readability
6. Make tables responsive with `overflow-x: auto` or CSS `@media` queries
7. Avoid colspan/rowspan unless necessary — they can confuse screen readers
8. Use `<colgroup>` for column-wide styling instead of per-cell classes
9. Keep table data flat — avoid complex nested structures

## Summary Notes

- `<table>` is the container; `<tr>` creates rows; `<td>` creates cells; `<th>` creates headers
- `<caption>` provides a descriptive title
- `<thead>`, `<tbody>`, `<tfoot>` group rows semantically
- `colspan` merges cells horizontally; `rowspan` merges vertically
- `scope` attribute on `<th>` improves accessibility
- `<colgroup>` and `<col>` style entire columns
- Default table rendering is borderless — use CSS for borders
- CSS `border-collapse: collapse` merges adjacent borders
- Tables are for data, not layout — use CSS for page structure
- Responsive tables often require `overflow-x` or wrapping in a scrollable container
