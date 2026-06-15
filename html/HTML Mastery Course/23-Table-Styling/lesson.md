# Module 23: Table Styling

## Introduction

HTML tables are a powerful way to display structured data. However, default browser styling for tables is minimal and often unattractive. Table styling using CSS transforms raw data grids into visually appealing, readable, and professional-looking components. This module covers every aspect of styling tables, from borders and spacing to responsive design and print styling.

## Learning Objectives

By the end of this module, you will be able to:
- Apply borders, padding, and spacing to tables
- Control table layout algorithms
- Style alternating row colors (zebra striping)
- Create hover effects on rows and cells
- Design responsive tables
- Use CSS pseudo-classes for advanced table styling
- Handle print-specific table formatting
- Implement accessibility in table styling

## Table CSS Properties

### Borders

The `border` property is the foundation of table styling.

```css
table {
  border: 1px solid #333;
}
th, td {
  border: 1px solid #ccc;
}
```

### Border Collapse

By default, table cells have double borders where they meet. The `border-collapse` property controls this behavior.

| Value | Description |
|-------|-------------|
| `separate` | Default. Each cell has its own borders |
| `collapse` | Adjacent borders are merged into one |

```css
table {
  border-collapse: collapse;
}
```

With `border-collapse: separate`, you can control spacing between cells using `border-spacing`:

```css
table {
  border-collapse: separate;
  border-spacing: 4px;
}
```

### Cell Padding

Padding inside cells improves readability:

```css
th, td {
  padding: 12px 16px;
}
```

### Text Alignment

Control text positioning within cells:

```css
th {
  text-align: left;   /* Default for headers */
}
td {
  text-align: center;  /* Default for data cells */
  vertical-align: middle;  /* top, middle, bottom */
}
```

## Table Layout Algorithms

The `table-layout` property determines how the browser calculates column widths.

| Value | Description |
|-------|-------------|
| `auto` | Default. Column width depends on content |
| `fixed` | Column width is determined by the first row or `width` settings |

```css
table {
  table-layout: fixed;
  width: 100%;
}
```

With `fixed` layout, the table renders faster because the browser does not need to analyze all cell contents before rendering.

## Styling Table Sections

Modern CSS allows targeting specific table sections:

```css
thead {
  background-color: #2c3e50;
  color: white;
}
tbody {
  background-color: #ecf0f1;
}
tfoot {
  background-color: #bdc3c7;
  font-weight: bold;
}
```

## Zebra Striping

Alternating row colors improve readability:

```css
tbody tr:nth-child(odd) {
  background-color: #f2f2f2;
}
tbody tr:nth-child(even) {
  background-color: #ffffff;
}
```

You can also use `nth-child(even/odd)` with formulas:

```css
/* Every third row, starting from the second */
tr:nth-child(3n+2) {
  background-color: #e8f4fd;
}
```

## Hover Effects

Interactive hover states:

```css
tbody tr:hover {
  background-color: #d5e8f0;
  transition: background-color 0.3s ease;
}

td:hover {
  background-color: #b8d4e3;
}
```

## Styling the First and Last Columns

```css
td:first-child {
  font-weight: bold;
  background-color: #f9f9f9;
}
td:last-child {
  text-align: right;
}
```

## Responsive Tables

### Horizontal Overflow

For wide tables on narrow screens:

```css
.table-container {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
```

```html
<div class="table-container">
  <table>...</table>
</div>
```

### Responsive Card Layout (Mobile)

For complex tables, convert rows to cards:

```css
@media (max-width: 768px) {
  table, thead, tbody, th, td, tr {
    display: block;
  }
  thead {
    display: none;  /* Hide headers on mobile */
  }
  td {
    position: relative;
    padding-left: 50%;
  }
  td::before {
    content: attr(data-label);
    position: absolute;
    left: 16px;
    font-weight: bold;
  }
}
```

## Caption Styling

```css
caption {
  caption-side: top;    /* or bottom */
  text-align: left;
  font-weight: bold;
  padding: 8px;
  font-size: 1.2em;
}
```

## Empty Cells

```css
table {
  empty-cells: show;  /* or hide */
}
```

## Advanced Styling Techniques

### Striped Columns

```css
col:nth-child(odd) {
  background-color: #f9f9f9;
}
```

Note: `col` styling is limited. For more control, use `td:nth-child()` selectors.

### Highlighting Specific Rows

```css
tr.highlight {
  background-color: #ffeeba;
  font-weight: bold;
}
```

### Borders Inside Only

```css
table {
  border-collapse: collapse;
}
td, th {
  border: 1px solid #ddd;
}
table {
  border: none;
}
/* Then add outer border to the table wrapper if needed */
```

### Gradient Headers

```css
thead th {
  background: linear-gradient(180deg, #4a90d9, #357abd);
  color: white;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
}
```

## Common Mistakes

| Mistake | Why It's Wrong | Correct Approach |
|---------|---------------|------------------|
| Not using `border-collapse` | Results in doubled borders between cells | Always set `border-collapse: collapse` for clean single borders |
| Applying `padding` to `table` instead of cells | `padding` on `<table>` does not affect cell content space | Apply `padding` to `th` and `td` elements |
| Forgetting responsive handling | Tables overflow on mobile screens | Wrap tables in a container with `overflow-x: auto` |
| Using inline styles for table styling | Hard to maintain and override | Use CSS classes and external stylesheets |
| Setting fixed width on every column | Makes table inflexible | Use `table-layout: fixed` and set widths on key columns only |
| Skipping `vertical-align` | Content alignment may look off | Explicitly set `vertical-align: middle` for consistency |
| Using `<br>` for spacing | Poor semantics and accessibility | Use `padding` and `margin` on cells |

## Best Practices

1. **Always set `border-collapse: collapse`** unless you specifically need separate borders
2. **Use semantic structure**: `<thead>`, `<tbody>`, `<tfoot>`
3. **Provide visual feedback**: hover states and alternating rows
4. **Make tables responsive** for mobile users
5. **Keep headers distinct** from data rows
6. **Use accessible colors** with sufficient contrast ratios
7. **Avoid overly complex nesting** of tables
8. **Limit table width** to `100%` maximum for responsiveness
9. **Use `scope` attributes** on `<th>` for screen readers
10. **Add `data-label` attributes** on `<td>` for responsive card layouts

## Summary

Table styling in CSS provides complete control over the appearance of tabular data. Key concepts include:
- `border-collapse` controls border merging behavior
- `table-layout` determines width calculation strategy
- Pseudo-classes (`:nth-child`, `:hover`) enable dynamic styling
- Responsive design requires overflow handling or card-based layouts
- Accessibility must be considered in all styling decisions

Mastering table styling ensures your data is presented clearly, professionally, and accessibly across all devices.
