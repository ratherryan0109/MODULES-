# HTML Tables - Cheatsheet

## Core Elements

| Element | Description | Attributes |
|---------|-------------|------------|
| `<table>` | Table container | global, border (deprecated) |
| `<tr>` | Table row | global |
| `<td>` | Table data cell | colspan, rowspan, headers |
| `<th>` | Table header cell | colspan, rowspan, scope, headers |
| `<caption>` | Table title/summary | align (deprecated) |
| `<thead>` | Groups header rows | global |
| `<tbody>` | Groups body rows | global |
| `<tfoot>` | Groups footer rows | global |
| `<colgroup>` | Defines column group | span |
| `<col>` | Defines column properties | span |

## Basic Table Structure

```html
<table>
  <caption>Title</caption>
  <thead>
    <tr>
      <th scope="col">Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer</td>
    </tr>
  </tfoot>
</table>
```

## Cell Merging

| Attribute | Example | Result |
|-----------|---------|--------|
| `colspan="2"` | `<td colspan="2">` | Cell spans 2 columns |
| `rowspan="3"` | `<td rowspan="3">` | Cell spans 3 rows |

## Scope Values

| Value | Meaning |
|-------|---------|
| `col` | Header for a column |
| `row` | Header for a row |
| `colgroup` | Header for a column group |
| `rowgroup` | Header for a row group |

## CSS Styling Quick Reference

```css
/* Collapse borders */
table { border-collapse: collapse; }

/* Borders on cells */
th, td { border: 1px solid #ddd; padding: 8px; }

/* Header style */
th { background: #333; color: white; }

/* Alternating rows */
tr:nth-child(even) { background: #f2f2f2; }

/* Hover effect */
tr:hover { background: #e0e0e0; }

/* Responsive wrapper */
.table-wrapper { overflow-x: auto; }

/* Sticky header */
th { position: sticky; top: 0; }
```

## Accessibility Quick Reference

```html
<!-- Proper scope -->
<th scope="col">Name</th>
<th scope="row">Alice</th>

<!-- Explicit headers -->
<th id="name">Name</th>
<td headers="name">Alice</td>

<!-- Caption for context -->
<caption>Employee List</caption>
```

## Common Mistakes

| Mistake | Solution |
|---------|----------|
| Using tables for layout | Use CSS Grid/Flexbox |
| Missing `<th>` elements | Add `<th>` with `scope` |
| No `<caption>` | Add descriptive caption |
| No `border-collapse` | Add `border-collapse: collapse` |
| Not handling overflow | Wrap in `overflow-x: auto` |
| Missing `scope` on `<th>` | Add `scope="col"` or `scope="row"` |

## Default Table Styles

| Property | Default |
|----------|---------|
| Border | None |
| Cell spacing | 2px (separated) |
| `<th>` alignment | Bold, centered |
| `<td>` alignment | Normal, left-aligned |
| Cell padding | 1px |
| `<caption>` placement | Above table, centered |
