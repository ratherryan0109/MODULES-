# Table Styling Cheatsheet

## Core CSS Properties

| Property | Values | Description |
|----------|--------|-------------|
| `border-collapse` | `collapse`, `separate` | Merges or separates cell borders |
| `border-spacing` | `<length>` | Gap between cells (only with `separate`) |
| `table-layout` | `auto`, `fixed` | Column width algorithm |
| `caption-side` | `top`, `bottom` | Caption position relative to table |
| `empty-cells` | `show`, `hide` | Visibility of empty cells (only with `separate`) |
| `vertical-align` | `top`, `middle`, `bottom` | Vertical alignment in cells |

## Quick Setup Template

```css
table {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
}
th, td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
```

## Zebra Striping

```css
/* Light theme */
tbody tr:nth-child(odd)  { background: #f8f9fa; }
tbody tr:nth-child(even) { background: #ffffff; }
tbody tr:hover           { background: #e8f4fd; }

/* Dark theme */
tbody tr:nth-child(odd)  { background: #2d2d2d; }
tbody tr:nth-child(even) { background: #333333; }
tbody tr:hover           { background: #444444; }
```

## nth-child Formulas

| Formula | Selects |
|---------|---------|
| `odd` | 1, 3, 5, 7... |
| `even` | 2, 4, 6, 8... |
| `3n` | 3, 6, 9, 12... |
| `3n+1` | 1, 4, 7, 10... |
| `3n+2` | 2, 5, 8, 11... |
| `n+4` | 4, 5, 6, 7... |

## Fixed Layout Setup

```css
table { table-layout: fixed; width: 100%; }
.col-id { width: 10%; }
.col-name { width: 30%; }
.col-email { width: 40%; }
.col-status { width: 20%; }
```

## Responsive Wrapper

```css
.table-container {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
```

## Responsive Card Layout (Mobile)

```css
@media (max-width: 768px) {
  table, thead, tbody, tr, th, td { display: block; }
  thead { display: none; }
  td {
    padding-left: 50%;
    position: relative;
  }
  td::before {
    content: attr(data-label);
    position: absolute;
    left: 16px;
    font-weight: bold;
  }
}
```

## Header Styling

```css
/* Solid color */
th { background: #2c3e50; color: white; }

/* Gradient */
th { background: linear-gradient(135deg, #667eea, #764ba2); color: white; }

/* Sticky */
thead { position: sticky; top: 0; z-index: 10; }
```

## Hover Effects

```css
/* Row hover */
tbody tr:hover { background: #e3f2fd; }

/* Cell hover */
td:hover { background: #bbdefb; }

/* Smooth transition */
tbody tr { transition: background 0.2s ease; }
```

## First/Last Column

```css
td:first-child { font-weight: bold; }
td:last-child  { text-align: right; }
th:first-child { border-radius: 8px 0 0 0; }
th:last-child  { border-radius: 0 8px 0 0; }
```

## Print Styles

```css
@media print {
  table { border: 1px solid #000; }
  th, td { border: 1px solid #000; }
  tr { page-break-inside: avoid; }
}
```

## Common Selectors Reference

| Selector | Targets |
|----------|---------|
| `table` | The table element |
| `thead` | Header section |
| `tbody` | Body section |
| `tfoot` | Footer section |
| `th` | Header cells |
| `td` | Data cells |
| `tr` | Table rows |
| `caption` | Table caption |
| `colgroup` | Column group |
| `col` | Individual column |
| `td:empty` | Empty data cells |
| `tr:first-child` | First row |
| `tr:last-child` | Last row |
