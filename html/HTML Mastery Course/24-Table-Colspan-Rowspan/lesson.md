# Module 24: Table Colspan & Rowspan

## Introduction

HTML tables often need to represent complex data relationships that span multiple columns or rows. The `colspan` and `rowspan` attributes enable cells to occupy more than one column or row, creating sophisticated table layouts. These attributes are essential for headers that describe multiple sub-columns, side-by-side grouping, and data that naturally spans multiple rows.

## Learning Objectives

By the end of this module, you will be able to:
- Use `colspan` to merge multiple columns
- Use `rowspan` to merge multiple rows
- Combine colspan and rowspan in the same table
- Design complex header structures with spanning
- Calculate correct cell counts when using spanning
- Apply CSS styling to spanned cells
- Avoid common mistakes with spanning attributes

## The Colspan Attribute

`colspan` specifies the number of columns a cell should span horizontally.

### Syntax

```html
<td colspan="n">content</td>
<th colspan="n">content</th>
```

Where `n` is an integer (1 or greater) indicating how many columns the cell occupies.

### Basic Example

```html
<table>
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>30</td>
  </tr>
</table>
```

This creates a header cell "Name" that spans the first two columns.

## The Rowspan Attribute

`rowspan` specifies the number of rows a cell should span vertically.

### Syntax

```html
<td rowspan="n">content</td>
<th rowspan="n">content</th>
```

Where `n` is an integer indicating how many rows the cell occupies.

### Basic Example

```html
<table>
  <tr>
    <th rowspan="2">Department</th>
    <td>Sales</td>
  </tr>
  <tr>
    <td>Marketing</td>
  </tr>
</table>
```

The "Department" header spans both rows in the first column.

## How Cell Counting Works

When using colspan and rowspan, you must account for occupied cells when defining subsequent rows.

### Visual Cell Grid

Imagine a grid where each `<td>` or `<th>` occupies one or more cells:

```
| Col A (colspan=2)      | Col B |
| First Name | Last Name | Age   |
```

- Row 1: Cell 1 (spanning 2 columns), Cell 2 (1 column) = 3 columns total
- Row 2: Cell 1 (1 column), Cell 2 (1 column), Cell 3 (1 column) = 3 columns total

## Complex Header Structures

### Multi-Level Headers

```html
<table>
  <tr>
    <th colspan="2">Personal Info</th>
    <th colspan="2">Contact</th>
  </tr>
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th>Phone</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>john@example.com</td>
    <td>555-0100</td>
  </tr>
</table>
```

### Side Header with Rowspan

```html
<table>
  <tr>
    <th rowspan="4">Q1 2025</th>
    <th>Month</th>
    <th>Revenue</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$50,000</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$55,000</td>
  </tr>
  <tr>
    <td>March</td>
    <td>$62,000</td>
  </tr>
</table>
```

## Combining Colspan and Rowspan

### Scheduling Table Example

```html
<table>
  <tr>
    <th>Time</th>
    <th colspan="3">Workshop Sessions</th>
  </tr>
  <tr>
    <th rowspan="2">9:00-12:00</th>
    <td colspan="2">Web Development</td>
    <td rowspan="2">Design Lab</td>
  </tr>
  <tr>
    <td>HTML</td>
    <td>CSS</td>
    <!-- Design Lab spans here -->
  </tr>
  <tr>
    <th>12:00-1:00</th>
    <td colspan="3">Lunch Break</td>
  </tr>
</table>
```

### Visual Grid Calculation

For the scheduling table above:
- Row 1: Time (1) + Workshops (colspan=3) = 4 columns
- Row 2: Time (rowspan=2) + Web Dev (colspan=2) + Design Lab (rowspan=2) = 4 columns
- Row 3: (Time spanned) + HTML (1) + CSS (1) + (Design Lab spanned) = 4 columns
- Row 4: Time (1) + Lunch (colspan=3) = 4 columns

## Practical Applications

### Employee Schedule

```html
<table>
  <tr>
    <th>Employee</th>
    <th>Monday</th>
    <th>Tuesday</th>
    <th>Wednesday</th>
    <th>Thursday</th>
    <th>Friday</th>
  </tr>
  <tr>
    <td rowspan="2">Alice</td>
    <td>9-5</td>
    <td>9-5</td>
    <td>Off</td>
    <td>9-5</td>
    <td>9-1</td>
  </tr>
  <tr>
    <td colspan="5">On call weekend</td>
  </tr>
</table>
```

### Invoice Table

```html
<table>
  <tr>
    <th colspan="5">Invoice #1042</th>
  </tr>
  <tr>
    <th>Item</th>
    <th>Qty</th>
    <th>Unit Price</th>
    <th>Discount</th>
    <th>Total</th>
  </tr>
  <tr>
    <td>Laptop</td>
    <td>1</td>
    <td>$999.99</td>
    <td>$50.00</td>
    <td>$949.99</td>
  </tr>
  <tr>
    <td>Mouse</td>
    <td>2</td>
    <td>$29.99</td>
    <td>$0.00</td>
    <td>$59.98</td>
  </tr>
  <tr>
    <td colspan="4" class="total-label">Subtotal</td>
    <td class="total-value">$1,009.97</td>
  </tr>
  <tr>
    <td colspan="4" class="total-label">Tax (8%)</td>
    <td class="total-value">$80.80</td>
  </tr>
  <tr>
    <td colspan="4" class="grand-total-label">Grand Total</td>
    <td class="grand-total-value">$1,090.77</td>
  </tr>
</table>
```

## CSS Styling for Spanned Cells

Spanned cells can be styled like any other cell, with additional considerations for visual emphasis.

```css
th[colspan] {
  background-color: #2c3e50;
  color: white;
  text-align: center;
}

td[rowspan] {
  background-color: #e8f4fd;
  font-weight: bold;
  vertical-align: middle;
}

.total-label {
  text-align: right;
  font-weight: bold;
}

.grand-total-label {
  text-align: right;
  font-weight: bold;
  font-size: 1.1em;
}

.grand-total-value {
  font-weight: bold;
  font-size: 1.1em;
  color: #27ae60;
}
```

## Accessibility Considerations

### Using scope with spanned headers

```html
<th colspan="3" scope="colgroup">Personal Information</th>
<th rowspan="2" scope="rowgroup">Details</th>
```

- `scope="colgroup"` indicates the header spans a group of columns
- `scope="rowgroup"` indicates the header spans a group of rows

### id and headers attributes

For complex spanning, use `id` and `headers`:

```html
<th id="name" colspan="2">Name</th>
<td headers="name">John</td>
```

## Common Mistakes

| Mistake | Problem | Solution |
|---------|---------|----------|
| Mismatched column counts | Table layout breaks, columns misalign | Ensure each row adds up to the same number of columns |
| Forgetting to skip cells | Missing or extra cells | When a previous row's cell spans down, omit that column in the spanned rows |
| colspan="0" | Not supported consistently across browsers | Always use a positive integer |
| Over-nesting | Unreadable, hard-to-maintain tables | Keep spanning simple; break into multiple tables if needed |
| No CSS differentiation | Spanned cells look identical to regular cells | Style spanned cells distinctly with backgrounds or borders |

## Best Practices

1. **Plan your grid** on paper before coding
2. **Count columns carefully**: every row must have the same total column count
3. **Use `scope` attributes** for accessibility
4. **Style spanned headers** distinctly from regular cells
5. **Keep it simple**: avoid spanning more than 2-3 rows/columns for readability
6. **Test on multiple screen sizes**: spanning can behave differently on mobile
7. **Use `<th>` for headers**, `<td>` for data
8. **Add `aria-colspan` and `aria-rowspan`** for complex accessibility needs
9. **Consider responsive alternatives**: on mobile, spanned layouts may not work well
10. **Validate your HTML** using the W3C validator

## Summary

- `colspan` merges cells horizontally across columns
- `rowspan` merges cells vertically across rows
- Every row must have the same total column count
- Combine colspan and rowspan for complex layouts
- Always use `scope` attributes for accessibility
- Style spanned cells distinctly for visual clarity
- Plan your grid before writing HTML to avoid calculation errors
