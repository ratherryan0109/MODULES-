# Table Colspan & Rowspan Cheatsheet

## Basic Syntax

```html
<!-- Horizontal spanning -->
<td colspan="n">content</td>
<th colspan="n">content</th>

<!-- Vertical spanning -->
<td rowspan="n">content</td>
<th rowspan="n">content</th>
```

## Column Count Rules

Each row must total the same number of columns:

| Row Content | Column Count Calculation |
|-------------|------------------------|
| `<th colspan="2">A</th> <th>B</th>` | 2 + 1 = 3 |
| `<td colspan="3">C</td>` | 3 |
| `<td>A</td> <td>B</td> <td>C</td>` | 1 + 1 + 1 = 3 |

## Attribute Selectors for Styling

```css
/* All spanned cells */
td[colspan] { background: #e8f4fd; }
td[rowspan] { background: #d5e8f0; }

/* Specific column count spans */
td[colspan="2"] { text-align: center; }
td[colspan="3"] { background: #fcf3cf; }
```

## Accessibility Attributes

```html
<!-- Column group scope -->
<th colspan="3" scope="colgroup">Group Header</th>

<!-- Row group scope -->
<th rowspan="4" scope="rowgroup">Row Group Header</th>

<!-- Explicit associations -->
<th id="name" colspan="2">Full Name</th>
<td headers="name">John Doe</td>
```

## Common Patterns

### Multi-Level Columns
```html
<tr>
  <th colspan="2">Personal</th>
  <th colspan="2">Contact</th>
</tr>
<tr>
  <th>First</th> <th>Last</th>
  <th>Email</th>  <th>Phone</th>
</tr>
```

### Row Grouping
```html
<tr>
  <th rowspan="3">Department</th>
  <td>Employee 1</td>
</tr>
<tr><td>Employee 2</td></tr>
<tr><td>Employee 3</td></tr>
```

### Combined Spanning
```html
<td colspan="2" rowspan="3">Merged Block</td>
```

### Full-Row Span
```html
<tr>
  <td colspan="5">This spans all 5 columns</td>
</tr>
```

## Grid Planning Template

| Row | Cell 1 | Cell 2 | Cell 3 | Cell 4 | Total |
|-----|--------|--------|--------|--------|-------|
| 1 | `colspan=2` | `colspan=2` | — | — | 4 |
| 2 | `rowspan=2` | `colspan=2` | 1 | — | 4 |
| 3 | (spanned) | 1 | 1 | 1 | 4 |
| 4 | 1 | `colspan=3` | — | — | 4 |

## Validation Checklist

- [ ] Every row has the same total column count
- [ ] No overlapping or conflicting spans
- [ ] `scope` attributes on spanned headers
- [ ] `id`/`headers` for complex tables
- [ ] CSS distinguishes spanned cells
- [ ] Table renders correctly in multiple browsers
- [ ] Responsive behavior tested

## Common Mistakes to Avoid

| Mistake | Why | Fix |
|---------|-----|-----|
| Mismatched column totals | Rows misalign | Count colspan values per row |
| Extra cells in rowspan area | Overflow columns | Omit cells in spanned positions |
| colspan="0" | Inconsistent browser support | Use positive integer |
| No scope on spanned headers | Poor accessibility | Add scope="colgroup"/"rowgroup" |
| Forgetting responsive | Layout breaks on mobile | Use overflow-x: auto |
