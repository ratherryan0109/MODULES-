# Module 60: Grid Auto Flow

## Introduction

`grid-auto-flow` controls the auto-placement algorithm of CSS Grid — the mechanism that decides where grid items go when they don't have explicit positions. By default, the grid fills items left-to-right, top-to-bottom, placing them into the next available cell. But by changing `grid-auto-flow`, you can control the direction of placement and enable dense packing, where items fill gaps left by earlier items.

Understanding auto-flow is essential for working with dynamic content where you don't know the exact number of items. It's particularly powerful for image galleries, product listings, dashboards, and any content that's generated dynamically. The `dense` keyword, combined with auto-flow, creates masonry-like layouts that maximize space utilization.

## Learning Objectives

1. Understand the auto-placement algorithm in CSS Grid and how it assigns items
2. Use `grid-auto-flow: row` (default) for left-to-right, top-to-bottom placement
3. Use `grid-auto-flow: column` for top-to-bottom, left-to-right placement
4. Use `grid-auto-flow: dense` for compact, space-filling layouts
5. Use `grid-auto-flow: row dense` / `column dense` for combined strategies
6. Combine auto-flow with implicit track sizing (`grid-auto-rows`, `grid-auto-columns`)
7. Predict and control item placement with different auto-flow values
8. Debug unexpected item placement caused by auto-flow algorithm
9. Optimize dense packing for image galleries and dashboards
10. Choose between auto and explicit placement strategies based on content needs

## Theory

### Auto-Placement Algorithm

When a grid item doesn't have an explicit `grid-column` or `grid-row`, the browser's auto-placement algorithm places it automatically:

1. The algorithm processes items in DOM order
2. It places each item into the next available grid cell that fits
3. The direction of advancement depends on `grid-auto-flow`
4. If no cell fits in the current row/column, a new track is created (implicit grid)

### Grid Auto Flow Values

| Value | Behavior |
|-------|----------|
| `row` (default) | Fills left-to-right, then top-to-bottom (row-major) |
| `column` | Fills top-to-bottom, then left-to-right (column-major) |
| `dense` | Fills gaps in the grid, may reorder items visually |
| `row dense` | Row-major placement with dense packing |
| `column dense` | Column-major placement with dense packing |

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row;     /* Default behavior */
    grid-auto-flow: column;  /* Fill columns first */
    grid-auto-flow: dense;   /* Backfill gaps */
    grid-auto-flow: row dense;    /* Row-major + dense */
    grid-auto-flow: column dense; /* Column-major + dense */
}
```

### The Dense Packing Mode

Without `dense`, the auto-placement algorithm never places an item before a previous item in the DOM order. This means if item 1 spans 2 columns and item 2 needs 1 column, item 2 will skip the partially-filled row:

```
Without dense (default flow: row):
Items: 1(spans 2), 2, 3, 4, 5, 6

┌──────┬──────┬──────┐
│  1 (spans 2) │  3  │
├──────┼──────┼──────┤
│  4   │  5   │  6   │
├──────┴──────┴──────┤
│  2   │  (empty)     │ ← Item 2 got pushed
└──────┴──────┴──────┘

With dense:
┌──────┬──────┬──────┐
│  1 (spans 2) │  3  │
├──────┼──────┼──────┤
│  2   │  4   │  5   │ ← Item 2 fills the gap!
├──────┼──────┼──────┤
│  6   │      │      │
└──────┴──────┴──────┘
```

⚠️ **Important**: `dense` changes visual order, not DOM order. Items that appear later in HTML may appear earlier visually. This can affect keyboard navigation and screen reader order.

### Grid Auto Flow in Practice

The most common use case is combining auto-flow with auto-fit for responsive layouts:

```css
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-flow: dense;  /* Fill gaps for compact layout */
    grid-auto-rows: 200px;  /* Consistent implicit row height */
}

/* Some items can span for emphasis */
.gallery .featured {
    grid-column: span 2;
    grid-row: span 2;
}
```

### Implicit Tracks with Auto-Flow

Auto-flow combined with implicit track sizing creates fully dynamic grids:

```css
.container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: none; /* No explicit rows — all implicit */
    grid-auto-rows: minmax(150px, auto); /* All rows at least 150px */
    grid-auto-flow: row dense;
}
```

## Syntax

```css
/* Default row-major flow */
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row;
}

/* Column-major flow */
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: column;
}

/* Dense packing — fills gaps */
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: dense;
}

/* Combined: row-major with dense packing */
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row dense;
}

/* Column-major with dense and implicit sizing */
.container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: column dense;
    grid-auto-rows: 200px;
}

/* Dynamic gallery with dense packing */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-flow: dense;
    grid-auto-rows: 200px;
    gap: 10px;
}

.gallery .wide { grid-column: span 2; }
.gallery .tall { grid-row: span 2; }
.gallery .big  { grid-column: span 2; grid-row: span 2; }
```

## Visual Explanation

### Default Flow vs Column Flow

```
grid-auto-flow: row (default)       grid-auto-flow: column
Items placed left→right,             Items placed top→bottom,
then top→bottom                      then left→right

┌───┬───┬───┐                        ┌───┬───┬───┐
│ 1 │ 2 │ 3 │                        │ 1 │ 4 │ 7 │
├───┼───┼───┤                        ├───┼───┼───┤
│ 4 │ 5 │ 6 │                        │ 2 │ 5 │ 8 │
├───┼───┼───┤                        ├───┼───┼───┤
│ 7 │ 8 │ 9 │                        │ 3 │ 6 │ 9 │
└───┴───┴───┘                        └───┴───┴───┘
```

### Dense Packing Comparison

```
Without dense:                        With dense:
┌──────┬──────┬──────┐               ┌──────┬──────┬──────┐
│ 1    │ 1    │ 2    │               │ 1    │ 1    │ 2    │
├──────┼──────┼──────┤               ├──────┼──────┼──────┤
│ 3    │ 4    │ 5    │               │ 3    │ 4    │ 5    │
├──────┼──────┼──────┤               ├──────┼──────┼──────┤
│ 6    │ hole │      │ ← gap        │ 6    │ 7    │      │
└──────┴──────┴──────┘               └──────┴──────┴──────┘
```

### Auto-Placement Algorithm Steps

```
Step 1: Place item 1 (spans 2 cols)  Step 2: Place item 2
┌──────────┬──────────┐               ┌──────────┬──────────┐
│    1     │    1     │               │    1     │    1     │
│          │          │               │          │          │
└──────────┴──────────┘               ├──────────┼──────────┤
                                       │    2     │          │
                                       └──────────┴──────────┘

Items 3-6 placed normally (flow: row)  With dense: item 7 fills gap
┌──────────┬──────────┬──────────┐    ┌──────────┬──────────┬──────────┐
│    1     │    1     │    3     │    │    1     │    1     │    3     │
├──────────┼──────────┼──────────┤    ├──────────┼──────────┼──────────┤
│    4     │    5     │    6     │    │    2     │    4     │    5     │
├──────────┼──────────┼──────────┤    ├──────────┼──────────┼──────────┤
│    2     │   (gap)  │    7     │    │    6     │    7     │    8     │
└──────────┴──────────┴──────────┘    └──────────┴──────────┴──────────┘
```

## Common Mistakes

1. **Not knowing dense changes visual order**: `dense` can place later DOM elements before earlier ones. This confuses screen reader users and keyboard navigation.
2. **Using `column` flow with `auto-fill` columns**: `auto-fill` determines column count based on width, which conflicts with column-major flow. Results can be unpredictable.
3. **Forgetting `grid-auto-rows` when using dense**: Without implicit row sizing, dense-packed items in extra rows can collapse.
4. **Assuming `dense` only fills horizontal gaps**: `dense` fills both row and column gaps.
5. **Over-relying on auto-placement for complex layouts**: For precise layouts, use explicit placement with `grid-column` and `grid-row`.
6. **Not accounting for DOM order in accessibility**: Visually reordered items (via `dense`) still follow DOM order for screen readers and keyboard.

## Best Practices

- Use `grid-auto-flow: dense` for image galleries where visual compactness is more important than DOM order
- Use `row` (default) for content where reading order matters (articles, blog posts)
- Combine `dense` with explicit `grid-column: span N` for featured items
- Always pair `dense` with `grid-auto-rows` for predictable implicit row heights
- For column-major layouts (e.g., timelines), use `grid-auto-flow: column`
- Test all auto-flow layouts with keyboard navigation to ensure logical tab order
- Document that dense mode reorders items visually for developers reading your code

## Accessibility Considerations

- ⚠️ **`dense` changes visual order but NOT DOM order** — this can confuse screen reader users
- Keyboard tab order follows DOM order, not visual position when using `dense`
- Never use `dense` for content where visual reading order matters (articles, forms, navigation)
- `dense` is acceptable for decorative content (image galleries, portfolio grids)
- Add `role="list"` and ensure logical tab order in dense galleries
- Test with a screen reader to verify the announced order matches visual expectations
- Provide a skip-link for users to bypass dense galleries

## Performance Considerations

- Auto-placement is handled entirely by the browser layout engine and is very fast
- The `dense` algorithm requires more computation than default flow — noticeable only with hundreds of items
- `grid-auto-flow: column` combined with many items creates many columns, which affects memory
- For grids with 1000+ items, consider pagination or virtual scrolling
- Implicit row creation with auto-flow is efficient and doesn't impact performance

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|----|
| `grid-auto-flow: row` | 57+ | 52+ | 10.1+ | 16+ | 10-11 (old spec) |
| `grid-auto-flow: column` | 57+ | 52+ | 10.1+ | 16+ | 10-11 (old spec) |
| `grid-auto-flow: dense` | 57+ | 52+ | 10.1+ | 16+ | Not supported |
| `grid-auto-flow: row dense` | 57+ | 52+ | 10.1+ | 16+ | Not supported |
| `grid-auto-flow: column dense` | 57+ | 52+ | 10.1+ | 16+ | Not supported |

## Summary Notes

- `grid-auto-flow` = `row` (default) places items left→right, top→bottom
- `column` places items top→bottom, left→right
- `dense` fills gaps but changes visual order from DOM order
- Combine: `row dense` or `column dense` for both direction and packing
- Use `dense` for galleries, not for content with reading order
- Always pair auto-flow with `grid-auto-rows`/`grid-auto-columns` for implicit sizing
- The auto-placement algorithm processes items in DOM order
- `dense` backfills gaps left by items with explicit spanning

## Cheat Table

| Value | Direction | Fills Gaps | Use Case |
|-------|-----------|------------|----------|
| `row` | Horizontal first | No | Default — best for reading content |
| `column` | Vertical first | No | Timelines, column-based lists |
| `dense` | Depends on flow | Yes | Image galleries, compact layouts |
| `row dense` | Horizontal first | Yes | Gallery with row-major dense |
| `column dense` | Vertical first | Yes | Dashboard with column-major dense |
