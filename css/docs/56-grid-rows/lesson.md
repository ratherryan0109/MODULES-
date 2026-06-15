# Module 56: Grid Rows

## Introduction

`grid-template-rows` defines the row structure of a CSS Grid, controlling the vertical dimension in the same way `grid-template-columns` controls the horizontal. While columns handle the width of tracks, rows handle their height. Understanding row definition is crucial for creating full-page layouts, achieving vertical balance, and ensuring content areas have appropriate heights.

Just as with columns, rows are defined by **track sizes** bounded by **grid lines** numbered starting from 1. However, rows have unique considerations: the default `auto` sizing makes rows grow to fit their content, the `fr` unit can create flexible-height rows that fill the container, and the combination of explicit and implicit rows determines how additional content beyond the defined grid is rendered.

The most famous row pattern in CSS Grid is `grid-template-rows: auto 1fr auto` — the holy grail of full-page layouts where header and footer size to their content and the main content fills all remaining vertical space.

## Learning Objectives

1. Define explicit rows with `grid-template-rows` using various unit types
2. Use `auto`, `fr`, fixed (px, em, rem), and percentage row heights
3. Create the classic `auto 1fr auto` layout for full-page designs
4. Span items across multiple rows using `grid-row` syntax
5. Use `minmax()` for responsive row sizing with height constraints
6. Use `repeat()` for repetitive row patterns efficiently
7. Control implicit row sizing with `grid-auto-rows`
8. Combine row and column placement for complete item positioning
9. Create asymmetric row layouts with mixed height values
10. Use named row lines for readable and maintainable code

## Theory

### Row Definition Basics

Row sizes are defined similarly to columns, but apply to the vertical axis. Each value in `grid-template-rows` creates one row track:

```css
.container {
    display: grid;
    grid-template-rows: 80px 1fr 60px;
    /* Row 1: 80px, Row 2: 1fr (fills space), Row 3: 60px */
    grid-template-columns: 1fr;
    min-height: 100vh;
}
```

### Row Sizing Units

| Unit | Example | Behavior in Rows |
|------|---------|------------------|
| `px` | `80px` | Fixed height |
| `em`/`rem` | `5rem` | Relative to font size |
| `%` | `20%` | Percentage of container height (if container has explicit height) |
| `fr` | `1fr` | Fraction of remaining vertical space |
| `auto` | `auto` | Sizes to content height |
| `min-content` | `min-content` | Minimum height for content |
| `max-content` | `max-content` | Height for all content without wrapping |
| `fit-content()` | `fit-content(200px)` | Clamped between min-content and value |

### The `auto 1fr auto` Layout Pattern

This is the most important row pattern for full-page layouts:

```css
body {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr;
    min-height: 100vh;
}

header { /* Row 1: auto height */ }
main   { /* Row 2: fills remaining space */ }
footer { /* Row 3: auto height */ }
```

```
Visual:
┌──────────────────────────┐
│        Header             │ ← auto (sizes to content)
├──────────────────────────┤
│                          │
│        Main Content       │ ← 1fr (fills all remaining space)
│                          │
│                          │
├──────────────────────────┤
│        Footer             │ ← auto (sizes to content)
└──────────────────────────┘
```

This works because:
- `auto` rows grow or shrink to exactly fit their content
- `1fr` takes all the leftover vertical space
- `min-height: 100vh` ensures the total is at least viewport height
- If content exceeds viewport, the footer still stays at bottom (auto) and the main grows

### Row Measurement Context

Unlike columns (which have a known container width), row `%` values require the container to have an **explicit height**. Without one, `%` defaults to `auto`:

```css
/* Safe: min-height gives a reference */
.container {
    display: grid;
    grid-template-rows: 20% 60% 20%;
    min-height: 500px;
}

/* Risky: without height, % doesn't work as expected */
.container {
    display: grid;
    grid-template-rows: 20% 60% 20%; /* May default to auto */
}
```

### Spanning Rows

Items can span multiple rows using `grid-row`:

```css
.item {
    /* Span by count */
    grid-row: span 2;        /* Spans 2 rows */
    
    /* Span by line numbers */
    grid-row: 1 / 3;         /* From line 1 to line 3 (2 rows) */
    
    /* Span to the end */
    grid-row: 2 / -1;        /* From line 2 to the last row line */
}
```

### Implicit Row Sizing with `grid-auto-rows`

When grid items exceed the explicitly defined rows, CSS Grid creates **implicit rows**. The `grid-auto-rows` property controls their size:

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 200px); /* 2 explicit rows */
    grid-auto-rows: 150px; /* All implicit rows are 150px */
}
```

If you have 10 items in a 3-column grid, you need 4 rows (3 columns × 4 rows = 12 slots). The first 2 rows are 200px each; rows 3 and 4 (implicit) are 150px each.

### Combining Row and Column Placement

For complete control over item positioning, combine both properties:

```css
.item {
    /* Short-hand */
    grid-column: 1 / 3;
    grid-row: 2 / 4;
    
    /* Long-hand */
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;
    
    /* Single-line shorthand: grid-row-start / grid-column-start / grid-row-end / grid-column-end */
    grid-area: 2 / 1 / 4 / 3;
}
```

## Syntax

```css
/* Basic row definitions */
.container {
    display: grid;
    grid-template-rows: 100px 200px;
    grid-template-columns: 1fr;
}

/* Full page layout */
.container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr;
    min-height: 100vh;
}

/* Equal-height rows */
.container {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 1fr;
    height: 600px;
}

/* Mixed sizes */
.container {
    display: grid;
    grid-template-rows: 80px 2fr 1fr 60px;
    grid-template-columns: repeat(3, 1fr);
}

/* With minmax */
.container {
    display: grid;
    grid-template-rows: auto minmax(300px, 1fr) auto;
    grid-template-columns: 1fr;
    min-height: 100vh;
}

/* With implicit row control */
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 200px);
    grid-auto-rows: 120px;
}
```

## Visual Explanation

### Row Lines and Track Sizing

```
grid-template-rows: 80px 1fr 60px;

Line:  1
        ┌────────────────────────────────┐
        │          Header (80px)          │ Row 1
        ├────────────────────────────────┤
Line:  2
        │                                │
        │      Main Content (1fr)         │ Row 2 — fills
        │        (flexible)               │ remaining space
        │                                │
        ├────────────────────────────────┤
Line:  3
        │          Footer (60px)          │ Row 3
        └────────────────────────────────┘
Line:  4
```

### Item Spanning Rows

```
grid-row: span 3        grid-row: 2 / 4

┌────────────────┐      ┌────────────────┐
│     Item 1     │      │     Item 1     │
├────────────────┤      ├────────────────┤
│                │      │                │
│   Item spans   │      │   Item starts  │
│    3 rows      │      │   at line 2,   │
│                │      │   ends at 4    │
│                │      │                │
├────────────────┤      ├────────────────┤
│     Item 2     │      │     Item 3     │
└────────────────┘      └────────────────┘
```

### Implicit Track Creation

```
grid-template-rows: 100px 100px;  (2 explicit rows)
grid-auto-rows: 80px;            (implicit rows)
grid-template-columns: repeat(3, 1fr);
Items: 12 (need 4 rows in a 3-column grid)

Explicit:       Implicit:
┌────┬────┬────┐ ┌────┬────┬────┐
│100 │100 │100 │ │100 │100 │100 │
├────┼────┼────┤ ├────┼────┼────┤
│100 │100 │100 │ │100 │100 │100 │
├────┼────┼────┤ ├────┼────┼────┤
│ 80 │ 80 │ 80 │ │ 80 │ 80 │ 80 │  ← implicit rows at 80px
├────┼────┼────┤ ├────┼────┼────┤
│ 80 │ 80 │ 80 │ │ 80 │ 80 │ 80 │
└────┴────┴────┘ └────┴────┴────┘
```

## Common Mistakes

1. **Forgetting to set `min-height` on container**: The `fr` unit needs space to fill. Without `min-height` or `height`, `1fr` rows collapse to nothing.
2. **Using percentages without explicit container height**: `%` on rows requires a container with a defined height. Without one, % values behave like `auto`.
3. **Confusing `grid-row` with `grid-auto-rows`**: `grid-row` is for item placement; `grid-auto-rows` sets the size of implicit rows.
4. **Over-specifying explicit rows**: If you have a dynamic number of items, don't define all rows explicitly — use `grid-auto-rows` for flexibility.
5. **Not accounting for gap in fr calculations**: `gap` reduces available height for `fr` rows, just like with columns.
6. **Setting `height: 100%` on grid items**: Grid items should not need explicit heights — let the row track sizing handle it.
7. **Mixing `fr` with `auto` rows and expecting equal distribution**: `auto` rows get their content size first; `fr` rows only get what's left.

## Best Practices

- Use `auto 1fr auto` for any page-level layout — it handles short and long content gracefully
- Combine `minmax()` with `fr` to ensure rows have a minimum height even when empty: `minmax(300px, 1fr)`
- Use `grid-auto-rows` for grids with dynamic numbers of items to maintain consistent row heights
- For equal-height rows (card rows, dashboard widgets), use `grid-template-rows: repeat(N, 1fr)` with a defined container height
- Name row lines for layouts with many rows: `[header] auto [content] 1fr [footer] auto [end]`
- Explicit rows are best for fixed-structure layouts; implicit rows with `grid-auto-rows` are better for dynamic content
- Always set `min-height: 100vh` on full-page grid layouts to avoid collapsed content areas

## Accessibility Considerations

- Row spanning is visual only — it doesn't change DOM or screen reader order
- Ensure the logical document order matches the visual reading order, even when items span multiple rows
- When items span multiple rows, the content may be perceived as more important — ensure it actually is
- Keyboard focus order follows DOM order, not visual row-spanning order
- Use `min-height` appropriately to prevent content from being clipped in spanned rows
- Test with zoom (200%) to ensure row heights accommodate enlarged text

## Performance Considerations

- Row calculations are part of the grid layout algorithm and are highly optimized
- Large numbers of implicit rows (100+) may impact layout performance — consider pagination or virtualization
- `auto` rows require the browser to calculate content height, which involves layout of children — use `minmax()` or fixed heights for performance-critical sections
- `1fr` rows in a `min-height: 100vh` container trigger a single reflow on load
- Named lines have no performance impact

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|----|
| `grid-template-rows` basic | 57+ | 52+ | 10.1+ | 16+ | 10-11 (old spec) |
| `fr` unit in rows | 57+ | 52+ | 10.1+ | 16+ | Partial |
| `repeat()` in rows | 57+ | 52+ | 10.1+ | 16+ | Partial |
| `minmax()` in rows | 57+ | 52+ | 10.1+ | 16+ | Partial |
| `grid-auto-rows` | 57+ | 52+ | 10.1+ | 16+ | 10-11 (old spec) |
| `grid-row` | 57+ | 52+ | 10.1+ | 16+ | 10-11 (old spec) |
| Negative line numbers | 57+ | 52+ | 10.1+ | 16+ | Partial |
| Named row lines | 57+ | 52+ | 10.1+ | 16+ | Partial |

## Summary Notes

- `grid-template-rows` defines the height and number of rows in a grid
- `auto` sizes rows to content; `fr` distributes remaining vertical space
- The `auto 1fr auto` pattern creates sticky footer / flexible content layouts
- `grid-row: span N` spans an item across N rows from its auto-placed position
- `grid-row: A / B` spans from line A to line B using line numbers
- Explicit rows are defined with `grid-template-rows`; implicit rows use `grid-auto-rows`
- Without a container height, `%` row values behave like `auto`
- Use `minmax(min, 1fr)` to ensure rows have a minimum height
- Combine `grid-column` and `grid-row` for complete two-dimensional placement
- Named row lines (`[header] auto [content] 1fr`) improve code readability

## Cheat Table

| Property/Value | Description | Example |
|----------------|-------------|---------|
| `grid-template-rows` | Defines row heights | `grid-template-rows: auto 1fr auto` |
| `grid-auto-rows` | Sets implicit row height | `grid-auto-rows: 150px` |
| `grid-row: span N` | Spans N rows | `grid-row: span 2` |
| `grid-row: A / B` | Spans from line A to B | `grid-row: 1 / 3` |
| `grid-row: 1 / -1` | Spans all rows | `grid-row: 1 / -1` |
| `grid-row-start` | Start line for item | `grid-row-start: 2` |
| `grid-row-end` | End line for item | `grid-row-end: span 3` |
| `grid-area` | Shorthand for all four lines | `grid-area: 2 / 1 / 4 / 3` |
| `auto 1fr auto` | Sticky footer layout | `grid-template-rows: auto 1fr auto` |
| `repeat(N, 1fr)` | N equal-height rows | `grid-template-rows: repeat(3, 1fr)` |
