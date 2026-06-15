# Module 55: Grid Columns

## Introduction

`grid-template-columns` is the CSS Grid property that defines the column structure of a grid. It sets the number of columns, their individual widths, and how space is distributed across the horizontal axis. Understanding column definition is the foundation of all CSS Grid layouts — without columns, there is no grid structure. This property accepts a wide variety of value types including fixed lengths, percentages, the flexible `fr` unit, and CSS functions like `repeat()` and `minmax()` that enable responsive, self-adjusting layouts.

Columns in CSS Grid are defined by **track sizes** and **line numbers**. Each column is bounded by two grid lines (one on each side), and these lines are automatically numbered starting from 1. You can also name these lines for easier reference. Items placed inside the grid can span across multiple columns by referencing these line numbers, creating complex layouts without nested containers.

## Learning Objectives

1. Define explicit columns using `grid-template-columns` with various unit types
2. Use fixed lengths (px, em, rem), percentages, and the `fr` unit to size columns
3. Combine different unit types in a single column declaration for mixed layouts
4. Use `repeat()` to create repetitive column patterns efficiently
5. Use `minmax()` to create responsive columns with minimum and maximum constraints
6. Span items across multiple columns using `grid-column: span N` and line-based syntax
7. Use `auto-fill` and `auto-fit` keywords for truly responsive column layouts
8. Place items on specific column lines using positive and negative numbers
9. Name grid lines for more readable and maintainable column definitions
10. Create asymmetric and complex column layouts with mixed sizing strategies

## Theory

### Column Track Sizing

Each value in `grid-template-columns` creates one column track. The number of values equals the number of explicit columns. The grid container's width is distributed among these columns according to their specified sizes.

```css
.container {
    display: grid;
    grid-template-columns: 200px 300px 200px;
    /* Creates 3 columns: 200px, 300px, 200px = 700px total */
}
```

### Column Sizing Units

CSS Grid columns accept a variety of unit types, each serving a different purpose:

| Unit | Example | Behavior |
|------|---------|----------|
| `px` | `200px` | Fixed width, never changes |
| `em`/`rem` | `20em` | Relative to font size |
| `%` | `25%` | Percentage of container width |
| `fr` | `1fr` | Fraction of remaining space after fixed tracks |
| `auto` | `auto` | Sizes to content width |
| `min-content` | `min-content` | Smallest size without overflow |
| `max-content` | `max-content` | Size needed to fit content without wrapping |
| `fit-content()` | `fit-content(300px)` | Clamped between min-content and given value |

#### The `fr` Unit

The `fr` unit (fraction) is the most powerful unit in CSS Grid. It distributes **remaining space** — the space left after all fixed-size columns (px, em, %) and gaps have been accounted for:

```css
grid-template-columns: 200px 1fr 1fr;
/* Column 1: 200px fixed. Remaining space split equally among column 2 and 3 */
```

```css
grid-template-columns: 1fr 2fr 1fr;
/* No fixed columns. Total = 4fr. Column 2 gets 2/4 (50%), columns 1 and 3 get 1/4 (25%) each */
```

### The repeat() Function

`repeat()` eliminates repetitive track definitions and supports multiple patterns:

```css
/* Instead of: grid-template-columns: 1fr 1fr 1fr 1fr; */
grid-template-columns: repeat(4, 1fr);

/* Repeating patterns */
grid-template-columns: repeat(3, 1fr 2fr);
/* Creates: 1fr 2fr 1fr 2fr 1fr 2fr (6 columns) */
```

### The minmax() Function

`minmax(min, max)` sets a size range for each column, ensuring columns never go below a minimum or exceed a maximum:

```css
/* Each column is at least 200px wide but can grow to 1fr */
grid-template-columns: repeat(3, minmax(200px, 1fr));
```

### auto-fill and auto-fit Keywords

Used inside `repeat()`, these keywords create responsive columns without media queries:

```css
/* Creates as many 200px columns as fit, then distributes leftover space */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

/* Same, but collapses empty tracks */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

The difference between `auto-fill` and `auto-fit`:

| Behavior | auto-fill | auto-fit |
|----------|-----------|----------|
| Empty tracks | Preserved (visible in DevTools) | Collapsed to 0 |
| Single item | Leaves empty space on right | Stretches to fill |
| Container smaller than min | Both behave identically | Both behave identically |

### Named Grid Lines

Line names make code more maintainable and self-documenting:

```css
grid-template-columns: [sidebar-start] 250px [sidebar-end main-start] 1fr [main-end];
```

Items can then reference named lines:

```css
.item {
    grid-column: sidebar-start / main-end;
}
```

### Spanning Columns

Items can span multiple columns in several ways:

```css
.item {
    /* Span by count */
    grid-column: span 2;       /* Spans 2 columns */
    
    /* Span by line numbers */
    grid-column: 1 / 3;        /* From line 1 to line 3 (spans columns 1-2) */
    
    /* Span full width */
    grid-column: 1 / -1;       /* From first line to last line */
    
    /* Span using named lines */
    grid-column: sidebar / main-end;
}
```

Line numbers in CSS Grid:
- Positive numbers count from the **start** (1, 2, 3, ...)
- Negative numbers count from the **end** (-1, -2, -3, ...)
- Line `1` is the leftmost line; line `-1` is the rightmost line
- With N columns, there are N+1 lines

### Asymmetric Column Layouts

Grid columns excel at creating asymmetric, content-focused layouts:

```css
/* Magazine-style layout */
grid-template-columns: 2fr 1fr 1fr;
/* First column gets 50% of space; second and third get 25% each */

/* Holy Grail layout */
grid-template-columns: 250px 1fr 250px;
/* Fixed sidebar, fluid content */
```

## Syntax

```css
/* Basic column definition */
.container {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
}

/* Equal columns with repeat */
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}

/* Responsive without media queries */
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

/* Named lines */
.container {
    display: grid;
    grid-template-columns: [left] 1fr [center] 2fr [right] 1fr [end];
}

/* Mixed units */
.container {
    display: grid;
    grid-template-columns: 200px 2fr 1fr 150px;
}

/* Complex pattern */
.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr 2fr 100px);
}

/* Using min-content and max-content */
.container {
    display: grid;
    grid-template-columns: min-content 1fr max-content;
}
```

## Visual Explanation

### Column Track Anatomy

```
grid-template-columns: 200px 1fr 200px;

Line numbers:  1         2         3         4
               │  200px  │   1fr    │  200px  │
               ├─────────┼──────────┼─────────┤
               │         │          │         │
               │ Track 1 │ Track 2  │ Track 3 │
               │  Fixed  │ Flexible │  Fixed  │
               │  200px  │   fills  │  200px  │
               │         │  space   │         │
               └─────────┴──────────┴─────────┘
```

### repeat() Expansion

```
repeat(4, 1fr):           →     1fr  1fr  1fr  1fr

repeat(2, 100px 1fr):     →     100px  1fr  100px  1fr

repeat(auto-fill, minmax(150px, 1fr)):
    ┌─────┬─────┬─────┬──────────┐
    │150px│150px│150px│  empty   │  ← auto-fill preserves
    │ min │ min │ min │  space   │     empty track
    └─────┴─────┴─────┴──────────┘

repeat(auto-fit, minmax(150px, 1fr)):
    ┌─────────┬─────────┬─────────┐
    │  1fr     │  1fr     │  1fr    │  ← auto-fit collapses
    │  fills   │  fills   │  fills  │     empty tracks
    └─────────┴─────────┴─────────┘
```

### Item Spanning

```
grid-column: 1 / 3;

Line:   1         2         3         4
        ├─────────┼──────────┼─────────┤
        │         │          │         │
        │  Item spans from line 1 to line 3  │
        │         │          │         │
        └─────────┴──────────┴─────────┘

grid-column: span 2;

Line:   1         2         3         4
        ├─────────┼──────────┼─────────┤
        │         │          │         │
        │  Item spans 2 columns (automatically)  │
        │         │          │         │
        └─────────┴──────────┴─────────┘

grid-column: 1 / -1;  (full-width span in a 3-column grid)

Line:   1         2         3         4
        ├─────────┼──────────┼─────────┤
        │         │          │         │
        │  Item spans from first to last line  │
        │         │          │         │
        └─────────┴──────────┴─────────┘
```

## Common Mistakes

1. **Confusing columns with items**: `grid-template-columns` defines track sizes, not item positions. Items are placed into tracks.
2. **Forgetting that `fr` consumes remaining space**: If you mix `fr` with fixed widths, the `fr` columns only get leftover space, not the full container.
3. **Using `px` for responsive layouts**: Fixed pixel columns don't adapt. Use `fr`, `%`, or `minmax()` for responsive designs.
4. **Misunderstanding `auto-fill` vs `auto-fit`**: `auto-fill` preserves empty track slots; `auto-fit` collapses them. When you have fewer items than slots, this matters.
5. **Trying to use `repeat()` outside of `grid-template-columns`/`rows`**: `repeat()` is only valid in these properties.
6. **Confusing line numbers and span counts**: `grid-column: 1 / 3` spans **2 columns** (lines 1 to 3), not 3 columns.
7. **Overlapping items without `z-index`**: Items spanning the same lines will overlap. Use `z-index` to control stacking.
8. **Not accounting for gap space**: `gap` reduces available space for `fr` calculations. Three `1fr` columns with `gap: 20px` means each `fr` = (container - 40px) / 3.

## Best Practices

- Use the `repeat(auto-fit, minmax(250px, 1fr))` pattern for responsive card grids
- Use named lines for layouts with more than 3 columns to improve readability
- Prefer `fr` over percentages for flexible layouts — `fr` handles gaps automatically
- Use `minmax()` to prevent columns from becoming too narrow on small screens
- Use negative line numbers (`grid-column: 1 / -1`) for full-width items like headers and footers
- Combine fixed side columns (sidebar, nav) with flexible center columns
- Test column layouts at multiple screen widths to verify responsive behavior
- Use `grid-column-end: span N` instead of hardcoded line numbers when you want items to grow from their auto-placed position

## Accessibility Considerations

- Column spanning is purely visual — it does not affect DOM order or screen reader navigation
- Always maintain a logical content order in the HTML, even if grid-column repositions items visually
- When using `grid-column` to rearrange items for different screen sizes, ensure keyboard tab order matches the visual order
- Avoid layouts where items span such that the visual reading order becomes illogical
- Use appropriate `aria-label` or `role` attributes on spanning structural elements like headers and sidebars
- Test with keyboard navigation to ensure spanning items don't create confusing tab sequences

## Performance Considerations

- CSS Grid column calculations are performed by the browser's layout engine and are highly optimized
- Extremely large grids (1000+ columns) may cause layout performance issues — limit explicit columns to what's needed
- `auto-fill`/`auto-fit` triggers re-layout on container resize; this is generally performant but consider `content-visibility: auto` for off-screen grids
- Named lines have negligible performance impact — use them freely for maintainability
- Complex `repeat()` patterns with many values do not significantly impact rendering

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|----|
| `grid-template-columns` basic | 57+ | 52+ | 10.1+ | 16+ | 10-11 (old spec) |
| `fr` unit | 57+ | 52+ | 10.1+ | 16+ | 10-11 (old spec) |
| `repeat()` | 57+ | 52+ | 10.1+ | 16+ | 10-11 (partial) |
| `minmax()` | 57+ | 52+ | 10.1+ | 16+ | 10-11 (old spec) |
| `auto-fill`/`auto-fit` | 57+ | 52+ | 10.1+ | 16+ | Not supported |
| `fit-content()` | 57+ | 52+ | 12.1+ | 16+ | Not supported |
| `min-content`/`max-content` | 57+ | 52+ | 11+ | 16+ | Not supported |
| Named grid lines | 57+ | 52+ | 10.1+ | 16+ | 10-11 (partial) |

## Summary Notes

- `grid-template-columns` defines the number and size of columns in a grid
- Each value creates one column track; the number of values = columns
- `fr` distributes remaining space proportionally — the backbone of flexible grids
- `repeat(count, value)` creates `count` copies of `value` without typing them out
- `minmax(min, max)` enforces size constraints on tracks
- `auto-fill` creates tracks and keeps empty slots; `auto-fit` collapses empty slots
- Lines are numbered 1..N+1; negative numbers count from the end
- `grid-column: span N` spans N columns from the item's start position
- `grid-column: 1 / -1` spans the full width of the grid
- Named lines improve readability and maintainability of complex layouts
- The pattern `repeat(auto-fit, minmax(250px, 1fr))` is the single most useful responsive grid technique

## Cheat Table

| Property/Value | Description | Example |
|----------------|-------------|---------|
| `grid-template-columns` | Defines column track sizes | `grid-template-columns: 1fr 1fr 1fr` |
| `repeat(N, value)` | Repeats value N times | `repeat(3, 1fr)` |
| `repeat(auto-fill, ...)` | Fills grid with tracks | `repeat(auto-fill, 200px)` |
| `repeat(auto-fit, ...)` | Fills and collapses | `repeat(auto-fit, minmax(200px, 1fr))` |
| `minmax(min, max)` | Min/max size range | `minmax(200px, 1fr)` |
| `fit-content(N)` | Clamps at N | `fit-content(300px)` |
| `grid-column: span N` | Spans N columns | `grid-column: span 2` |
| `grid-column: A / B` | Spans from line A to B | `grid-column: 1 / -1` |
| `[name]` | Names a grid line | `[sidebar] 250px [content] 1fr` |
