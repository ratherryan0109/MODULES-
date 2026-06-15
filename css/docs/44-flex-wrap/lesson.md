# Flex Wrap

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
The `flex-wrap` property controls whether flex items should wrap onto multiple lines when they exceed the container's main-axis size, or stay on a single line (potentially overflowing). This is the key to building responsive flex layouts that adapt to available space without media queries. When combined with `flex-basis` or `min-width` on flex items, `flex-wrap: wrap` creates automatically responsive layouts — items flow onto new lines when there isn't enough room, and snap back when there is. Understanding `flex-wrap` also unlocks `align-content`, the multi-line cross-axis alignment property that only works when wrapping is active.

## Learning Objectives
1. Understand the three values of `flex-wrap`: `nowrap` (default), `wrap`, and `wrap-reverse`
2. Control whether items wrap to new lines when they overflow the container
3. Combine `flex-wrap` with `flex-direction` for both row and column wrapping
4. Use `flex-flow` as a shorthand for `flex-direction` + `flex-wrap`
5. Understand when and how `align-content` becomes available (multi-line containers only)
6. Build responsive layouts without media queries using `flex-wrap: wrap` + `flex-basis`
7. Recognize how `wrap-reverse` affects cross-axis order and its accessibility implications
8. Debug wrapping issues related to item sizing and container constraints
9. Apply wrapping in card grids, form layouts, and navigation patterns
10. Understand how `gap` interacts with wrapping — `row-gap` vs `column-gap` on wrapped lines

## Theory

### The Three Values

| Value | Behavior | Cross Axis Direction |
|---|---|---|
| `nowrap` (default) | All items stay on one line | Items may overflow or shrink |
| `wrap` | Items wrap onto multiple lines, top → bottom | Normal |
| `wrap-reverse` | Items wrap onto multiple lines, bottom → top | Reversed |

### How Wrapping Works
When the total size of flex items (their `flex-basis` or content size) exceeds the container's main-axis size, the browser needs to decide what to do. With `nowrap` (default), items stay on one line and the browser either shrinks them (if `flex-shrink > 0`) or lets them overflow. With `wrap`, items that don't fit on the current line flow onto the next line.

```
Container: 500px wide, Items: 200px each

nowrap (3 items, all on one line):
[Item 1 (200px)] [Item 2 (200px)] [Item 3 (200px)] ← total 600px
[--- 500px container ---] <- items overflow or shrink

wrap (3 items, wrapped):
[Item 1 (200px)] [Item 2 (200px)] ← line 1
[Item 3 (200px)]                   ← line 2
```

### Minimum Content Size and Wrapping
A common issue with wrapping is that items won't wrap because they have a minimum content size that prevents shrinking below the wrap threshold. For example, if each item contains a long word or a fixed-width image, the item cannot shrink below that content's intrinsic width. Setting `min-width: 0` or using `overflow: hidden` allows items to shrink below their content size, enabling wrapping to occur.

### The Relationship with `align-content`
`align-content` controls how **lines** of flex items are distributed along the cross axis in a multi-line container. It only has an effect when `flex-wrap: wrap` or `wrap-reverse` is active and there are multiple lines. In a single-line container (`nowrap`), `align-content` does nothing.

### Wrapping in Column Direction
When `flex-direction: column` is combined with `flex-wrap: wrap`, the wrapping behavior changes:
- Items flow top-to-bottom (main axis) until they reach the container's height
- Then wrap to the next column (cross axis)
- The container needs an explicit height (not `auto`) for column wrapping to work

```css
.column-wrap {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 500px; /* Required for column wrapping */
  gap: 1rem;
}
```

## Syntax and Code Examples

### Basic Wrapping
```css
.container {
  display: flex;
  flex-wrap: wrap; /* Items wrap to new lines */
  gap: 1rem;
}

.item {
  flex: 0 0 200px; /* Fixed 200px, no grow/shrink */
  height: 100px;
}
```

### Responsive Card Grid (The Classic Pattern)
```css
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.card {
  flex: 1 1 300px;
  /* Ideal: 300px wide, grows to fill space, shrinks when needed */
  /* Items wrap when there isn't 300px + gap available */
  padding: 1.5rem;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

### With min-width Instead of flex-basis
```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.item {
  min-width: 250px;  /* Items won't shrink below 250px */
  flex: 1;            /* Grows to fill remaining space */
}
```

### wrap-reverse Example
```css
.toolbar {
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 8px;
  padding: 8px;
  background: #f1f5f9;
  border-radius: 6px;
  /* Wrapped lines appear ABOVE the first line */
}
```

### Column Wrapping (Masonry-Like)
```css
.column-wrap {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 600px; /* Required — defines when items wrap */
  gap: 1rem;
}

.column-wrap .item {
  flex: 0 0 auto;
  width: 200px;
  margin-bottom: 1rem;
}
```

### Flex-Flow Shorthand
```css
/* Instead of: */
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

/* Use: */
.container {
  display: flex;
  flex-flow: column wrap; /* direction + wrap in one declaration */
}
```

### Nowrap (Default) with Overflow Handling
```css
.nowrap-container {
  display: flex;
  flex-wrap: nowrap; /* Default — explicit for clarity */
  gap: 1rem;
  overflow-x: auto; /* Allow horizontal scroll instead of wrapping */
  padding-bottom: 1rem; /* Room for scrollbar */
}

.nowrap-container .item {
  flex: 0 0 300px; /* Fixed 300px, no shrinking */
}
```

### Wrapping with Different-sized Items
```css
.flex-wrap-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px;
  background: #f8fafc;
}

.wide { flex: 1 1 400px; }  /* Wants to be 400px wide */
.narrow { flex: 1 1 200px; } /* Wants to be 200px wide */
```

## Visual Explanation

```
nowrap (default):
All items on one line — may overflow or shrink
┌────────────────────────────────────────────┐
│ [Item 1] [Item 2] [Item 3] [Item 4] [Item 5│ ← overflows
│ [Item 6]                                   │
└────────────────────────────────────────────┘

wrap:
Items that don't fit flow to the next line
┌────────────────────────────────────────────┐
│ [Item 1] [Item 2] [Item 3]                │ ← line 1
├────────────────────────────────────────────┤
│ [Item 4] [Item 5] [Item 6]                │ ← line 2
└────────────────────────────────────────────┘
Cross axis direction: top → bottom

wrap-reverse:
Items wrap in the opposite cross axis direction
┌────────────────────────────────────────────┐
│ [Item 4] [Item 5] [Item 6]                │ ← line 2 (appears first!)
├────────────────────────────────────────────┤
│ [Item 1] [Item 2] [Item 3]                │ ← line 1 (appears second!)
└────────────────────────────────────────────┘
Cross axis direction: bottom → top

Column + wrap:
┌─────────────────────────┐
│ Header     │ Header     │ ← items fill column first
│ Content    │ Content    │
│ Footer     │            │ ← then wrap to next column
└─────────────────────────┘
```

## Common Mistakes
1. **Not setting `flex-wrap: wrap` when items need to wrap**: The default is `nowrap` — items will overflow or shrink rather than wrap
2. **Using `flex-wrap` with fixed-width items that don't need wrapping**: If all items have a fixed width that fits in the container, wrapping won't occur and the property is unnecessary
3. **Confusing `wrap-reverse` cross axis reversal with `row-reverse` main axis reversal**: `wrap-reverse` reverses the cross axis (which line appears on top), while `row-reverse` reverses the main axis (item order within a line)
4. **Forgetting that `align-content` only works when wrapping occurs**: In a single-line container, `align-content` has no effect — use `align-items` instead
5. **Not accounting for minimum content size**: Items containing long words or fixed-size elements may not shrink enough to trigger wrapping — set `min-width: 0` or `overflow: hidden`
6. **Using `flex-wrap: wrap` without `gap`**: Items that wrap without `gap` may have inconsistent spacing, especially at line boundaries
7. **Forgetting to set a `height` when wrapping columns**: For `flex-direction: column` + `flex-wrap: wrap`, the container needs an explicit height for wrapping to know where to break
8. **Assuming `wrap-reverse` is safe for content ordering**: The visual line order is reversed, which can confuse users and screen readers

## Best Practices
1. **Use `flex-wrap: wrap` for responsive layouts by default** — it automatically adapts to different screen sizes
2. **Combine with appropriate `flex-basis` values** (`flex: 1 1 300px`) for responsive behavior — the basis determines the wrap threshold
3. **Use the `flex-flow` shorthand** for cleaner code: `flex-flow: row wrap` or `flex-flow: column wrap`
4. **Set `min-width: 0` on flex items** if they're not wrapping as expected — this allows items to shrink below their content size
5. **Use `gap` with wrapping** — `row-gap` controls space between wrapped lines, `column-gap` controls space between items on the same line
6. **Remember that `nowrap` can cause overflow** — if all items have fixed sizes that exceed the container, they'll overflow rather than wrap
7. **Use `overflow-x: auto` with `nowrap`** for horizontally scrollable containers like carousels or tab bars
8. **Use `wrap-reverse` only for cosmetic purposes** — never for content where line order matters for comprehension
9. **Test wrapping behavior at multiple breakpoints** — items should wrap gracefully at every width
10. **Add a `min-height` equivalent for cross-axis** — when wrapping, the container's cross-axis size grows to accommodate wrapped lines

## Accessibility Considerations
- `wrap-reverse` changes the visual stacking order of lines but NOT the DOM order — this can create confusing reading sequences
- Screen readers traverse items in DOM order, regardless of which visual line they appear on
- `wrap-reverse` should be avoided for content where the sequence of lines matters (multi-step forms, chronological lists, articles)
- Acceptable use of `wrap-reverse`: decorative image grids, icon toolbars, tags, badges
- When using `wrap-reverse`, ensure the DOM order matches the desired reading order as closely as possible
- Wrapped content in `column` direction may have complex reading patterns — test thoroughly
- For critical content, use media queries with explicit reordering rather than relying on `wrap-reverse`
- The `gap` property doesn't affect accessibility — it's purely visual spacing
- Items that wrap should maintain logical adjacency — related items should appear on the same line when possible

## Performance Considerations
- Wrapping has minimal performance impact — the browser recalculates line breaks during layout
- The browser recalculates wrapping on every resize, which can trigger repaints — but this is efficient in modern browsers
- Very long lists of wrapping items (100+) may cause a brief layout calculation pause
- Wrapping with `flex-direction: column` requires the browser to know the container height, which may require additional layout passes if the height is content-dependent
- `gap`+`wrap` recalculations are optimized — no performance concern
- CSS containment (`contain: layout`) can isolate wrapping containers from the rest of the page
- Avoid animating properties that cause wrap recalculation (width, flex-basis, gap) — these trigger expensive re-layouts
- For items that frequently change size, consider using `transform` for animation instead

## Browser Compatibility

| Feature | Chrome | Edge | Firefox | Safari | Opera | IE |
|---|---|---|---|---|---|---|
| `flex-wrap: wrap` | 29+ | 12+ | 28+ | 9+ | 17+ | 11 |
| `flex-wrap: nowrap` | 29+ | 12+ | 28+ | 9+ | 17+ | 11 |
| `flex-wrap: wrap-reverse` | 29+ | 12+ | 28+ | 9+ | 17+ | 11 |
| `flex-flow` shorthand | 29+ | 12+ | 28+ | 9+ | 17+ | 11 |
| `gap` + `flex-wrap` | 84+ | 84+ | 63+ | 14.1+ | 70+ | No |
| `align-content` with wrap | 29+ | 12+ | 28+ | 9+ | 17+ | 11 (partial) |
| IE10 old spec | — | — | — | — | — | 10 (-ms-flex-wrap) |

## Summary Notes
- `flex-wrap` controls whether flex items stay on one line (`nowrap`, default) or wrap to multiple lines (`wrap`, `wrap-reverse`)
- **`nowrap`**: All items on one line — they shrink or overflow rather than wrapping
- **`wrap`**: Items flow onto new lines from top to bottom (normal cross-axis direction)
- **`wrap-reverse`**: Items flow onto new lines from bottom to top (reversed cross-axis direction)
- `flex-flow` is the shorthand: `flex-flow: <flex-direction> <flex-wrap>` — e.g., `flex-flow: row wrap`
- `align-content` ONLY works when `flex-wrap` is active (multi-line containers)
- **Responsive pattern**: `flex-wrap: wrap` + `flex: 1 1 300px` creates auto-responsive layouts without media queries
- **Column wrapping** requires an explicit `height` on the container to determine when items wrap
- `min-width: 0` may be needed to allow items to shrink below their content size for wrapping to occur
- `gap` with `row-gap`/`column-gap` provides independent spacing between items and between wrapped lines
- `wrap-reverse` has accessibility implications — line order is visual-only
- Browser support is excellent — all modern browsers support `flex-wrap` fully
