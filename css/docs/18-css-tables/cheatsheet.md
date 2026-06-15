# CSS Tables — Cheatsheet
## Properties
- `border-collapse: collapse | separate`
- `border-spacing: 2px;` (only with separate)
- `caption-side: top | bottom`
- `empty-cells: show | hide`
- `table-layout: auto | fixed`

## Table Structure
```html
<table>
  <caption>Title</caption>
  <thead><tr><th>Header</th></tr></thead>
  <tbody><tr><td>Data</td></tr></tbody>
  <tfoot><tr><td>Footer</td></tr></tfoot>
</table>
```

## Zebra Striping
```css
tr:nth-child(even) { background: #f0f0f0; }
tr:hover { background: #e0e0e0; }
```

## Responsive
```css
.table-wrapper { overflow-x: auto; }
table { width: 100%; min-width: 600px; }
```
