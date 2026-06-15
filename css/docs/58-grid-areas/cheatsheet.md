# Grid Areas — Quick Reference

## `grid-template-areas` Syntax

| Notation | Description | Example |
|----------|-------------|---------|
| `"name name"` | Each string = one row | `"header header"` |
| `name` | Each word = one cell within a row | `"nav main aside"` |
| Repeated name | Spans adjacent cells | `"header header header"` |
| `.` | Empty cell | `"header . aside"` |
| `"a a a" "b b c"` | Multi-row layout | See below |

## `grid-area` Property

| Syntax | Description | Example |
|--------|-------------|---------|
| `grid-area: name` | Assign to named area | `grid-area: header` |
| `grid-area: A / B / C / D` | Line shorthand (row-start / col-start / row-end / col-end) | `grid-area: 1 / 1 / 3 / 4` |

## Layout Rules

| Rule | Explanation |
|------|-------------|
| Rectangular constraint | Each named area must be a rectangle |
| Same column count | Every row must have same number of cells |
| Connected cells | Same name adjacent = spanning; separated = invalid |
| Dot notation | `.` creates empty cells |
| No special chars | Names: letters, digits, hyphens only |
| Start with letter | `sidebar` ✓, `2col` ✗ |

## Common Layout Templates

```
3-Column Holy Grail:              2-Column Blog:
┌──────┬──────┬──────┐            ┌────────────────┬──────┐
│  header header header │            │   header header  │
├──────┼──────┼──────┤            ├────────────────┼──────┤
│ nav  │ main │ aside │            │  content sidebar │
├──────┼──────┼──────┤            ├────────────────┼──────┤
│  footer footer footer │            │   footer footer  │
└──────┴──────┴──────┘            └────────────────┴──────┘

"header header header"            "header  header"
"nav    main   aside"            "content sidebar"
"footer footer footer"            "footer  footer"

Dashboard:                        Image Gallery:
┌──────┬──────┬──────┐            ┌──────┬──────┬──────┐
│ stats stats stats │            │  a   │  a   │  b   │
├──────┼──────┼──────┤            ├──────┼──────┼──────┤
│ chart│ table│ menu │            │  a   │  a   │  c   │
├──────┼──────┼──────┤            ├──────┼──────┼──────┤
│  footer footer footer │            │  d   │  e   │  f   │
└──────┴──────┴──────┘            └──────┴──────┴──────┘

"stats stats stats"               "a a b"
"chart table menu"               "a a c"
"footer footer footer"            "d e f"
```

## Responsive Reordering

| Breakpoint | grid-template-areas | Columns |
|------------|-------------------|---------|
| Desktop (900px+) | `"header header header" "nav main aside" "footer footer footer"` | 3 |
| Tablet (600-900px) | `"header header" "nav main" "aside aside" "footer footer"` | 2 |
| Mobile (<600px) | `"header" "nav" "main" "aside" "footer"` | 1 |
