# Module 18: CSS Tables

## Table of Contents
1. Introduction
2. Learning Objectives
3. Theory
   - Table Structure Elements
   - Table Borders (Separate vs Collapse)
   - Table Styling (Colors, Spacing, Hover)
   - Table Layout (Auto vs Fixed)
   - Caption Styling
   - Empty Cells
   - Responsive Tables
   - Column Styling with colgroup
   - Table Accessibility with scope and headers
   - Striped Tables and Alternating Row Colors
   - Table Sorting Visual Cues
4. Visual Explanation
5. Common Mistakes
6. Best Practices
7. Accessibility Considerations
8. Performance Considerations
9. Browser Compatibility
10. Summary Notes

## Introduction
Tables present data in rows and columns. CSS provides properties to control table layout, borders, spacing, and striping. Well-styled tables improve data readability and create professional-looking data presentations.

HTML tables are designed for tabular data — information that has relationships across rows and columns. Think financial reports, product specifications, comparison grids, schedules, and data sets. CSS transforms the browser's default table rendering (which is functional but unattractive) into polished, readable data presentations that work across device sizes.

## Learning Objectives
By the end of this module, you will be able to:
- Style table borders and control border behavior (collapse vs separate)
- Collapse or separate table borders for the desired visual effect
- Apply alternating row colors (zebra striping) for readability
- Style table headers and captions appropriately
- Control table layout algorithm (auto vs fixed)
- Make tables responsive for small screens
- Style specific table elements (thead, tbody, tfoot)
- Use column styling with colgroup and col
- Create accessible tables with proper scope attributes
- Implement sorting visual indicators

## Theory

### Table Structure Elements
A well-structured HTML table uses semantic elements:

```html
<table>
  <caption>Monthly Sales Report 2024</caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Revenue</th>
      <th scope="col">Expenses</th>
      <th scope="col">Profit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$12,000</td>
      <td>$8,500</td>
      <td>$3,500</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$14,000</td>
      <td>$9,200</td>
      <td>$4,800</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$26,000</td>
      <td>$17,700</td>
      <td>$8,300</td>
    </tr>
  </tfoot>
</table>
```

**Semantic elements:**
- `<table>` — The table container
- `<caption>` — Table title/description (visible to screen readers by default)
- `<thead>` — Header rows (repeats on each printed page)
- `<tbody>` — Main data rows (can have multiple)
- `<tfoot>` — Footer rows (summary, totals)
- `<tr>` — Table row
- `<th>` — Header cell (bold, centered by default)
- `<td>` — Data cell

### Table Borders (Separate vs Collapse)

**Separated borders (default):**
```css
table {
  border-collapse: separate;
  border-spacing: 2px;   /* Gap between cells */
}
th, td {
  border: 1px solid #ddd;
}
```
In separated mode, each cell has its own border, and `border-spacing` controls the gap between cells. The result is a grid look where each cell is individually framed.

**Collapsed borders (recommended for most tables):**
```css
table {
  border-collapse: collapse;  /* Merges adjacent borders into one */
}
th, td {
  border: 1px solid #ddd;
}
```
In collapsed mode, adjacent borders merge into a single border. This creates a cleaner look and eliminates the gap between cells. `border-spacing` has no effect when borders are collapsed.

**Rounding table corners (requires separate borders):**
```css
table {
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;         /* Works with separate borders */
  border: 1px solid #e2e8f0;
}
/* Collapse won't allow border-radius — use separate mode */
table {
  border-collapse: collapse;  /* border-radius won't work! */
}
```

### Table Styling
Basic table styling for a professional look:

```css
/* Full-width table with proper spacing */
table {
  width: 100%;
  border-collapse: collapse;
}

/* Cell padding and alignment */
th, td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

/* Header styling */
th {
  background: #2d3748;
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Zebra striping */
tr:nth-child(even) {
  background: #f7fafc;
}

/* Hover effect */
tr:hover {
  background: #ebf8ff;
}

/* Remove border from last row */
tr:last-child td {
  border-bottom: none;
}
```

### Table Layout (Auto vs Fixed)
Controls how the browser calculates column widths:

**Auto layout (default):**
```css
table { table-layout: auto; }
```
- Column widths are determined by the widest content in each column
- Can produce unpredictable widths if cells have very long content
- Best for: Tables with unknown or variable content

**Fixed layout:**
```css
table { table-layout: fixed; }
```
- Column widths are determined by the first row or explicit `<col>` widths
- The table renders faster — the browser can lay out cells immediately without analyzing content
- Long content is clipped or wrapped according to `overflow-wrap`
- Best for: Large tables, tables with equal-width columns, controlled layouts

```css
/* Equal-width columns */
table { table-layout: fixed; }
colgroup col { width: 25%; }

/* Or use first row to set widths */
thead th:nth-child(1) { width: 30%; }
thead th:nth-child(2) { width: 40%; }
thead th:nth-child(3) { width: 30%; }
```

### Caption Styling
The `<caption>` element provides a title for the table:

```css
caption {
  caption-side: top;      /* Above the table (default) */
  caption-side: bottom;   /* Below the table */
  font-size: 1.2em;
  font-weight: bold;
  padding: 8px 0;
  text-align: left;
}

/* Visually appealing caption */
caption {
  caption-side: top;
  background: #f7fafc;
  padding: 12px 16px;
  font-weight: 600;
  font-size: 1.1rem;
  border: 1px solid #e2e8f0;
  border-bottom: none;
  border-radius: 8px 8px 0 0;
}
```

### Empty Cells
Controls whether empty cells show their borders:

```css
table { empty-cells: show; }   /* Show border on empty cells (default) */
table { empty-cells: hide; }   /* Hide border on empty cells */
```

When `empty-cells: hide` is set, empty cells display no border or background, making the table look like there's no cell there. This property only works when `border-collapse: separate`.

### Responsive Tables
Tables are inherently non-responsive. Several approaches exist:

**Approach 1: Horizontal scroll (simplest, works well)**
```css
.table-container {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.table-container table {
  min-width: 600px;
}
```

**Approach 2: Card-style on small screens (requires data-label attributes)**
```css
@media (max-width: 600px) {
  table, thead, tbody, th, td, tr { display: block; }

  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    margin-bottom: 16px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 8px;
    background: white;
  }

  td {
    position: relative;
    padding-left: 50%;
    text-align: right;
    border: none;
    border-bottom: 1px solid #f7fafc;
  }

  td::before {
    content: attr(data-label);
    position: absolute;
    left: 12px;
    font-weight: 600;
    text-align: left;
  }

  td:last-child { border-bottom: none; }
}
```

**HTML requirement for card approach:**
```html
<td data-label="Month">January</td>
<td data-label="Revenue">$12,000</td>
```

### Column Styling with colgroup
Style entire columns without targeting each cell individually:

```html
<table>
  <colgroup>
    <col class="col-name">
    <col class="col-revenue">
    <col class="col-expenses">
    <col class="col-profit">
  </colgroup>
  <thead>...</thead>
  <tbody>...</tbody>
</table>
```

```css
/* Limited properties available on <col> */
.col-name { background: #f7fafc; }
.col-profit { background: #f0fff4; }
```

**Note:** Only `background`, `border`, `width`, and `visibility` work on `<col>` elements. For more control, use `nth-child` selectors on `th` and `td` directly.

### Table Accessibility with scope and headers
Proper accessibility attributes make tables usable by screen readers:

```html
<thead>
  <tr>
    <th scope="col">Month</th>
    <th scope="col">Revenue</th>
    <th scope="col">Expenses</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">January</th>
    <td>$12,000</td>
    <td>$8,500</td>
  </tr>
</tbody>
```

**`scope` values:**
- `scope="col"` — Header for a column
- `scope="row"` — Header for a row
- `scope="colgroup"` — Header for a group of columns
- `scope="rowgroup"` — Header for a group of rows

For complex tables (merged cells), use the `headers` attribute:
```html
<td headers="month revenue">$12,000</td>
```

### Striped Tables and Alternating Row Colors
```css
/* Basic zebra striping */
tbody tr:nth-child(odd) { background: #f7fafc; }
tbody tr:nth-child(even) { background: #ffffff; }

/* Three-color striping */
tbody tr:nth-child(3n+1) { background: #f7fafc; }
tbody tr:nth-child(3n+2) { background: #edf2f7; }
tbody tr:nth-child(3n)   { background: #e2e8f0; }

/* Striped columns (vertical striping) */
td:nth-child(odd) { background: #f7fafc; }
td:nth-child(even) { background: #ffffff; }
```

### Table Sorting Visual Cues
Indicate sortable columns with CSS:

```css
th.sortable {
  cursor: pointer;
  user-select: none;
}

th.sortable::after {
  content: " ↕";
  font-size: 0.8em;
  opacity: 0.4;
}

th.sorted-asc::after {
  content: " ↑";
  opacity: 1;
  color: #4299e1;
}

th.sorted-desc::after {
  content: " ↓";
  opacity: 1;
  color: #4299e1;
}

th.sortable:hover {
  background: #4a5568;
}
```

## Visual Explanation
```
Table Structure:

  ┌──────────────────────────────────────────┐
  │           CAPTION (Table Title)          │
  ├────────┬──────────┬──────────┬───────────┤
  │ Month  │ Revenue  │ Expenses │  Profit   │
  ├────────┼──────────┼──────────┼───────────┤
  │ Jan    │ $12,000  │ $8,500   │ $3,500    │
  ├────────┼──────────┼──────────┼───────────┤
  │ Feb    │ $14,000  │ $9,200   │ $4,800    │
  ├────────┼──────────┼──────────┼───────────┤
  │ Total  │ $26,000  │ $17,700  │ $8,300    │
  └────────┴──────────┴──────────┴───────────┘

Border Collapse:

  separate:  ┌──┬──┬──┐    Each cell has its own border
             ├──┼──┼──┤    gap between cells (border-spacing)
             └──┴──┴──┘

  collapse:  ┌─┬─┬─┐        Adjacent borders merge
             ├─┼─┼─┤        no gap between cells
             └─┴─┴─┘
```

## Common Mistakes
1. **Not using border-collapse: collapse**: Separated borders with default spacing look outdated
2. **Not styling headers**: Default `<th>` is just bold and centered — headers should be visually distinct
3. **No zebra striping**: Alternating row colors significantly improve readability in large tables
4. **Not making tables responsive**: Tables overflow on small screens — always wrap in a scrollable container
5. **Using tables for layout**: Tables should be used for TABULAR DATA only, not for page layout (use CSS grid or flexbox)
6. **Inconsistent cell padding**: Padding should be uniform across all cells for visual order
7. **Not using semantic table elements**: Missing thead, tbody, tfoot, and caption reduces accessibility
8. **Forgetting scope attributes**: Screen readers can't associate header cells with data cells without proper scope
9. **Fixed-height rows**: Table rows should have automatic height based on content
10. **Too many visual effects simultaneously**: Border, background, hover, striping, and shadows on one table create visual chaos

## Best Practices
- Use `border-collapse: collapse` for cleaner table appearance
- Always wrap tables in a container with `overflow-x: auto` for responsive behavior
- Use `table-layout: fixed` for large tables or when you need consistent column widths
- Apply zebra striping with `tr:nth-child(even)` for improved readability
- Use consistent cell padding (12-16px is recommended)
- Style thead, tbody, and tfoot separately for clear visual hierarchy
- Use `scope="col"` and `scope="row"` on all header cells for accessibility
- Hide thead and display as cards on very small screens for mobile-friendly data
- Use `<caption>` for table descriptions (improves SEO and accessibility)
- Keep table styling minimal for data-heavy tables — let the data speak

```css
/* Professional table style */
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

th {
  background: #2d3748;
  color: white;
  padding: 14px 16px;
  text-align: left;
  font-weight: 600;
  white-space: nowrap;
}

td {
  padding: 12px 16px;
  border-bottom: 1px solid #edf2f7;
}

tbody tr:hover {
  background: #ebf8ff;
  transition: background 0.15s ease;
}

.table-wrapper {
  overflow-x: auto;
}
```

## Accessibility Considerations
- Use `<caption>` to provide a table description that screen readers announce
- Use `scope="col"` and `scope="row"` on all header cells for proper screen reader navigation
- Use `headers` attribute for complex tables with merged cells
- Avoid using tables for layout — screen readers navigate tables with specific keystrokes
- Ensure sufficient color contrast in table headers and data cells
- Don't use color alone to convey information in tables (add icons or text)
- Provide visible row hover states for easier tracking across wide tables
- Tables should be keyboard navigable; avoid `tabindex` on individual cells
- Complex data tables may benefit from a summary description (use `aria-describedby`)

## Performance Considerations
- Tables with `table-layout: fixed` render faster than `auto` because the browser doesn't need to analyze all content
- Very large tables (1000+ rows) may benefit from virtualization or pagination
- Avoid excessive DOM nesting inside table cells — cells can trigger multiple layout passes
- Row hover effects using CSS are performant (no JavaScript needed)
- CSS `nth-child` selectors for striping have negligible performance impact
- For extremely large data sets, consider client-side pagination or server-side rendering

## Browser Compatibility
| Property | Chrome | Firefox | Safari | Edge | Opera | IE |
|----------|--------|---------|--------|------|-------|----|
| border-collapse | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| border-spacing | 1+ | 1+ | 1+ | 12+ | 3.5+ | 8+ |
| table-layout | 1+ | 1+ | 1+ | 12+ | 3.5+ | 5+ |
| caption-side | 1+ | 1+ | 3+ | 12+ | 4+ | 8+ |
| empty-cells | 1+ | 1+ | 1+ | 12+ | 4+ | 8+ |
| nth-child | 1+ | 3.6+ | 3.1+ | 12+ | 9.5+ | 9+ |

All core table styling properties are supported in every browser since IE8+. Table rendering behavior is standardized across modern browsers. The only notable legacy issue is IE8 not supporting `border-spacing` (use separate borders with cellspacing HTML attribute as fallback).

## Summary Notes
- Core table CSS properties: `border-collapse`, `border-spacing`, `table-layout`, `caption-side`, `empty-cells`
- `border-collapse: collapse` merges adjacent borders into single lines (recommended)
- `border-collapse: separate` keeps cell borders distinct (required for `border-radius` on tables)
- `width: 100%` makes tables fill their container width
- Zebra striping: `tr:nth-child(even) { background: #f7fafc; }`
- `table-layout: fixed` provides faster rendering and controlled column widths
- `table-layout: auto` adjusts column widths based on content
- `caption-side` controls caption position (top or bottom)
- Use `overflow-x: auto` for responsive tables on small screens
- Card-style responsive tables require `data-label` attributes on cells
- Style thead, tbody, and tfoot separately for visual hierarchy
- Use `scope="col"` and `scope="row"` for screen reader accessibility
- Always use semantic table elements for accessibility and SEO
- Tables are for TABULAR DATA — not for page layout
- For large datasets, consider combining `table-layout: fixed` with overflow scroll
- Sorting indicators can be pure CSS with pseudo-elements
