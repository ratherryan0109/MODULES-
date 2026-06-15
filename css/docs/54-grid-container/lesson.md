# Grid Container

## Table of Contents
1. [Introduction](#introduction)
2. [Learning Objectives](#learning-objectives)
3. [Theory](#theory)
4. [Syntax and Code Examples](#syntax-and-code-examples)
5. [Visual Explanation](#visual-explanation)
6. [Common Mistakes](#common-mistakes)
7. [Best Practices](#best-practices)
8. [Accessibility Considerations](#accessibility-considerations)
9. [Performance Considerations](#performance-considerations)
10. [Browser Compatibility](#browser-compatibility)
11. [Summary Notes](#summary-notes)

## Introduction
The grid container is the foundation of every CSS Grid layout — it is the parent element that establishes a new grid formatting context for its direct children. Setting `display: grid` or `display: inline-grid` on an element turns it into a grid container, and all its direct children become grid items automatically. From there, you define the grid structure using properties like `grid-template-columns`, `grid-template-rows`, `grid-template-areas`, and `gap`. This module covers all properties that can be applied to the grid container itself, including the powerful `repeat()` function, the `minmax()` function for responsive sizing, and the `auto-fill`/`auto-fit` keywords that enable truly responsive grids without a single media query. Understanding the grid container is the first step to mastering CSS Grid layout.

## Learning Objectives
1. Create a grid container with `display: grid` and `display: inline-grid` and understand the difference
2. Define the grid structure explicitly with `grid-template-columns` and `grid-template-rows`
3. Use the `fr` unit, percentages, and fixed length values for track sizing
4. Use `repeat()` notation for repetitive and patterned track definitions
5. Use `minmax()` for flexible track sizing with minimum and maximum bounds
6. Use `auto-fill` and `auto-fit` keywords with `minmax()` for responsive grids
7. Set gaps between tracks with the `gap` (row-gap, column-gap) property
8. Understand block-level vs inline-level grid container behavior
9. Use `grid-auto-rows` and `grid-auto-columns` for implicit track sizing
10. Control the auto-placement algorithm with `grid-auto-flow`
11. Use named grid lines and named grid areas for readable layouts
12. Debug grid containers using browser DevTools grid inspector

## Theory

### What is a Grid Container?
A grid container is any element with `display: grid` or `display: inline-grid`. Once applied, it establishes a **grid formatting context** where:
- Direct children become **grid items** (arranged in the defined grid)
- Floats on children are ignored
- Margins on children do NOT collapse
- `vertical-align` has no effect on grid items
- The grid container itself behaves as a block or inline element depending on the display value

### Block vs Inline Grid

| Feature | `display: grid` | `display: inline-grid` |
|---|---|---|
| Container width | 100% of parent (block-level) | Shrink-to-fit content |
| Line breaks | Generates line breaks | Flows inline with text |
| Use case | Full page layouts, sections | Small grid components within text |
| `width` control | Full width unless specified | Content width unless specified |

### Grid Container Properties

| Property | Purpose | Default Value |
|---|---|---|
| `display` | Creates the grid container | — |
| `grid-template-columns` | Defines column track sizes | `none` (1 column, content-sized) |
| `grid-template-rows` | Defines row track sizes | `none` (1 row, content-sized) |
| `grid-template-areas` | Defines named grid areas | `none` |
| `grid-template` | Shorthand for columns + rows + areas | `none` |
| `gap` (row-gap, column-gap) | Sets spacing between tracks | `0` |
| `grid-auto-rows` | Size of implicitly created rows | `auto` |
| `grid-auto-columns` | Size of implicitly created columns | `auto` |
| `grid-auto-flow` | Placement algorithm for items | `row` |
| `grid` | Master shorthand | See individual properties |

### The `repeat()` Function
`repeat()` simplifies creating repetitive track patterns and is essential for responsive grids:

```css
/* 4 equal columns */
grid-template-columns: repeat(4, 1fr);

/* Pattern repeats */
grid-template-columns: repeat(2, 200px 1fr);
/* Creates: 200px 1fr 200px 1fr */

/* Repeat with auto-fill — responsive */
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
```

### The `minmax()` Function
`minmax(min, max)` creates tracks that are at least the minimum size and at most the maximum size:

```css
/* Each column: at least 200px, at most 1fr */
grid-template-columns: repeat(3, minmax(200px, 1fr));

/* Sidebar: 250px min, 300px max */
grid-template-columns: minmax(250px, 300px) 1fr;

/* Content: at least 300px */
grid-template-columns: 200px minmax(300px, 1fr);
```

### `auto-fill` vs `auto-fit`
Both work with `repeat()` and `minmax()` but differ in behavior:

| Keyword | Behavior | Use Case |
|---|---|---|
| `auto-fill` | Creates as many track slots as possible, even if empty | Grids that should maintain consistent column count |
| `auto-fit` | Creates tracks and collapses empty ones | Grids where items should expand to fill space |

```css
/* auto-fill: maintains empty columns */
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

/* auto-fit: collapses empty columns, items grow */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

With `auto-fill`, if you have 3 items in a 5-column grid, you get 2 empty column slots. With `auto-fit`, the 3 items expand to fill the space.

### Implicit Grid Tracks
When items exceed the explicit grid (more items than defined tracks), the browser creates **implicit** tracks:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 explicit columns */
  grid-auto-rows: 120px; /* Any implicit rows are 120px tall */
  gap: 1rem;
}
```

Without `grid-auto-rows`, implicit rows default to `auto` (content-sized).

### The `grid-auto-flow` Property
Controls how the auto-placement algorithm fills in items:

| Value | Behavior |
|---|---|
| `row` (default) | Fills each row, then moves to next row |
| `column` | Fills each column, then moves to next column |
| `dense` | Backfills holes left by earlier items (with row or column) |
| `row dense` | Row-first with dense packing |
| `column dense` | Column-first with dense packing |

### Named Grid Lines
You can name grid lines for more readable placement:

```css
.container {
  display: grid;
  grid-template-columns: [sidebar-start] 250px [sidebar-end content-start] 1fr [content-end];
  grid-template-rows: [header-start] auto [header-end main-start] 1fr [main-end footer-start] auto [footer-end];
}

.item {
  grid-column: sidebar-start / sidebar-end;
  grid-row: header-start / footer-end;
}
```

## Syntax and Code Examples

### Basic Grid Container
```css
.page {
  display: grid;
  grid-template-columns: 250px 1fr 250px;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  min-height: 100vh;
}
```

### Inline Grid
```css
.inline-grid-example {
  display: inline-grid;
  grid-template-columns: repeat(3, 100px);
  gap: 8px;
  /* Width is content-based — flows inline with text */
}
```

### Responsive Grid with Auto-Fill
```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.gallery-item {
  height: 250px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 8px;
}
```

### Responsive Grid with Auto-Fit
```css
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}
```

### Fixed + Flexible Columns
```css
.dashboard {
  display: grid;
  grid-template-columns: 
    minmax(200px, 250px)    /* Sidebar: 200-250px */
    1fr                      /* Main: flexible */
    minmax(150px, 200px);   /* Aside: 150-200px */
  grid-template-rows: 
    auto                     /* Header: content-sized */
    1fr                      /* Content: fills space */
    auto;                   /* Footer: content-sized */
  gap: 0;
  min-height: 100vh;
}
```

### Implicit Grid Sizing
```css
.blog-listing {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(200px, auto); /* Implicit rows: at least 200px */
  gap: 1.5rem;
}
```

### Dense Packing for Masonry-Like Layout
```css
.masonry {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense; /* Fills gaps with items that fit */
  gap: 1rem;
}

.masonry-item {
  background: #3b82f6;
  border-radius: 8px;
  min-height: 100px;
}

.masonry-item.wide {
  grid-column: span 2;
}

.masonry-item.tall {
  grid-row: span 2;
}
```

### Named Areas
```css
.page {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  gap: 0;
  min-height: 100vh;
}

header { grid-area: header; }
nav    { grid-area: sidebar; }
main   { grid-area: main; }
footer { grid-area: footer; }
```

### Grid with Named Lines
```css
.container {
  display: grid;
  grid-template-columns: [col1] 1fr [col2] 1fr [col3] 1fr [col4];
  grid-template-rows: [row1] auto [row2] 1fr [row3] auto [row4];
  gap: 1rem;
  min-height: 100vh;
}

.header {
  grid-column: col1 / col4;
  grid-row: row1 / row2;
}

.content {
  grid-column: col1 / col3;
  grid-row: row2 / row3;
}

.sidebar {
  grid-column: col3 / col4;
  grid-row: row2 / row3;
}

.footer {
  grid-column: col1 / col4;
  grid-row: row3 / row4;
}
```

### Grid Shorthand
```css
/* Grid shorthand: rows / columns */
.container {
  display: grid;
  grid: auto 1fr auto / repeat(3, 1fr);
  gap: 1rem;
  min-height: 100vh;
}

/* Grid with named areas and sizes */
.container {
  display: grid;
  grid:
    "header header header" auto
    "nav    main   aside"  1fr
    "footer footer footer" auto
    / 200px 1fr 200px;
  min-height: 100vh;
}
```

### Complete Dashboard Container
```css
.dashboard {
  display: grid;
  grid-template-columns: 
    [sidebar-start] 250px [sidebar-end main-start] 1fr [main-end];
  grid-template-rows:
    [header-start] 64px [header-end content-start] 1fr [content-end];
  grid-template-areas:
    "sidebar header"
    "sidebar content";
  gap: 0;
  min-height: 100vh;
}

.dashboard-sidebar {
  grid-area: sidebar;
  background: #1e293b;
  color: #fff;
  padding: 1rem;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
}

.dashboard-header {
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  background: #fff;
  border-bottom: 1px solid #e2e8f0;
}

.dashboard-content {
  grid-area: content;
  padding: 1.5rem;
  overflow-y: auto;
}
```

## Visual Explanation

```
display: grid (block-level):
┌─────────────────────────────────────────────┐
│ ← container takes 100% width →              │
│ ┌──────────┬──────────┬──────────┐          │
│ │   250px   │   1fr    │   250px   │          │
│ └──────────┴──────────┴──────────┘          │
└─────────────────────────────────────────────┘

display: inline-grid (inline-level):
┌──────────┬──────────┬──────────┐
│   250px   │   1fr    │   250px   │ ← only takes needed width
└──────────┴──────────┴──────────┘
← text can flow around the inline grid →

Track Sizing with repeat() and minmax():
repeat(auto-fill, minmax(250px, 1fr))
   On a 1200px container:
   ┌──────┬──────┬──────┬──────┐
   │ 300  │ 300  │ 300  │ 300  │ ← 4 columns that fit
   └──────┴──────┴──────┴──────┘
   (empty slots remain)

repeat(auto-fit, minmax(250px, 1fr))
   On a 1200px container with 3 items:
   ┌──────────┬──────────┬──────────┐
   │   400    │   400    │   400    │ ← items expand to fill
   └──────────┴──────────┴──────────┘
   (empty slots are collapsed)
```

## Common Mistakes
1. **Forgetting to set `display: grid`**: Without it, `grid-template-columns` and other grid properties have no effect.
2. **Applying item properties to the container**: `grid-column`, `grid-row`, `grid-area` go on the **items**, not the container. `grid-template-columns`, `gap` go on the **container**.
3. **Not using `fr` units**: Percentage-based sizing with gaps requires complex `calc()` — `fr` handles it automatically.
4. **Confusing `auto-fill` and `auto-fit`**: `auto-fill` preserves empty track spaces; `auto-fit` collapses them. The difference is visible when there are fewer items than slots.
5. **Forgetting `min-height: 100vh`**: Grid containers with `auto` rows don't fill the viewport by default when content is short.
6. **Overcomplicating with manual line placement**: Named areas (`grid-template-areas`) are often simpler and more readable.
7. **Not accounting for implicit grid**: When items exceed the explicit grid, implicit tracks use `auto` sizing by default — which may not match your design.
8. **Using margins instead of `gap`**: `gap` is purpose-built for grid spacing and avoids edge-spacing issues.
9. **Mixing `grid` and `flex` inelegantly**: Grid for the outer page container, Flexbox for component interiors — don't use grid for every nested element.
10. **Not using `grid-auto-flow: dense` when appropriate**: Items in a sparse grid may leave unsightly gaps that `dense` packing would fill.

## Best Practices
1. **Always set `display: grid`** before any other grid property — it's the foundation
2. **Use `grid-template-areas` for readable layouts** — string-based area names are self-documenting
3. **Use `repeat(auto-fill/auto-fit, minmax(250px, 1fr))` for responsive grids** — no media queries needed
4. **Use `fr` for flexible tracks** — simpler and more robust than percentage math
5. **Use `gap` for spacing** — never use margins between grid items
6. **Set `min-height: 100vh`** on full-page grids to ensure they fill the viewport
7. **Use `grid-auto-rows` to control implicit row sizes** — prevents content-sized surprises
8. **Use `dense` packing for layouts with varying item sizes** — fills visual gaps
9. **Name grid lines** for complex placements — improves code readability
10. **Use the `grid` shorthand** for concise grid definitions
11. **Combine with Flexbox** — use Grid for page structure, Flexbox for component interiors
12. **Use browser DevTools Grid inspector** — visualize tracks, lines, and areas during development

## Accessibility Considerations
- Grid container properties **do not affect accessibility semantics** — the grid is purely visual
- Grid items are still regular HTML elements — use semantic elements inside them
- `grid-auto-flow: dense` rearranges items visually but NOT in DOM order — screen readers follow DOM order
- Ensure logical DOM order even when grid placement visually reorders items
- Name grid areas for maintainability but remember they don't affect accessibility
- `display: inline-grid` doesn't change semantics — it's still a grid visually
- Test grid layouts with keyboard navigation and screen readers
- Responsive grid reconfiguration should preserve content sequence

## Performance Considerations
- Grid container creation is efficient — minimal overhead over block layout
- `auto-fill`/`auto-fit` with `minmax()` recalculates on every resize — fine for most grids
- Large grids (50+ tracks) may have minor layout overhead
- Named grid areas have no runtime performance cost — resolved at computed-value time
- `dense` packing requires a more complex placement algorithm — negligible for most grids
- CSS containment (`contain: layout style`) can isolate grid container performance
- Browser DevTools grid overlays don't affect performance — safe to use during development
- Grid with `gap` is equally performant to grid without gaps

## Browser Compatibility

| Feature | Chrome | Edge | Firefox | Safari | Opera | IE |
|---|---|---|---|---|---|---|
| `display: grid` | 57+ | 16+ | 52+ | 10.1+ | 44+ | No |
| `display: inline-grid` | 57+ | 16+ | 52+ | 10.1+ | 44+ | No |
| `grid-template-columns` | 57+ | 16+ | 52+ | 10.1+ | 44+ | No |
| `grid-template-rows` | 57+ | 16+ | 52+ | 10.1+ | 44+ | No |
| `grid-template-areas` | 57+ | 16+ | 52+ | 10.1+ | 44+ | No |
| `gap` | 57+ | 16+ | 52+ | 10.1+ | 44+ | No |
| `repeat()` | 57+ | 16+ | 52+ | 10.1+ | 44+ | No |
| `minmax()` | 57+ | 16+ | 52+ | 10.1+ | 44+ | No |
| `auto-fill` / `auto-fit` | 57+ | 16+ | 52+ | 10.1+ | 44+ | No |
| `grid-auto-rows` | 57+ | 16+ | 52+ | 10.1+ | 44+ | No |
| `grid-auto-columns` | 57+ | 16+ | 52+ | 10.1+ | 44+ | No |
| `grid-auto-flow` | 57+ | 16+ | 52+ | 10.1+ | 44+ | No |
| `grid` shorthand | 57+ | 16+ | 52+ | 10.1+ | 44+ | No |
| Named grid lines | 57+ | 16+ | 52+ | 10.1+ | 44+ | No |
| IE10-11 (old spec, -ms-) | — | — | — | — | — | 10-11 |

## Summary Notes
- `display: grid` creates a **block-level** grid container; `display: inline-grid` creates an **inline-level** one
- Direct children become **grid items** automatically — floats and `vertical-align` are disabled on them
- `grid-template-columns` and `grid-template-rows` define the **explicit grid** — the rows and columns you plan for
- `repeat(count, pattern)` creates repetitive tracks — `repeat(4, 1fr)` = 4 equal columns
- `minmax(min, max)` creates tracks with flexible size ranges — `minmax(200px, 1fr)`
- `auto-fill` creates as many track slots as possible; `auto-fit` collapses empty ones
- `gap` sets spacing between tracks — `gap: 1rem` or `gap: 1rem 2rem` (row / column)
- **Implicit grid** (`grid-auto-rows`, `grid-auto-columns`) controls auto-created tracks
- `grid-auto-flow` directs the placement algorithm — `row` (default), `column`, or `dense`
- `grid-template-areas` names layout regions for readable placement
- Named grid lines (`[name]`) make line-based placement more understandable
- The `grid` shorthand combines all container properties into one declaration
- `min-height: 100vh` ensures full-page grids fill the viewport
- Modern browser support is excellent (Chrome 57+, Firefox 52+, Safari 10.1+, Edge 16+)
- Debug with browser DevTools — Chrome and Firefox have dedicated Grid inspector panels
