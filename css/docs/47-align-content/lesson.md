# Align Content

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
`align-content` controls the distribution of space between and around **lines** of items in a multi-line flex container along the cross axis. While `align-items` aligns individual items within a single line, `align-content` aligns entire lines when there's extra space in the cross axis. Think of `align-content` as the "`justify-content` for the cross axis." It only works when `flex-wrap: wrap` or `wrap-reverse` is set and there are multiple lines of items. This property is essential for controlling the vertical spacing of wrapped card grids, distributing content evenly across the full height of a container, and creating balanced multi-line layouts.

## Learning Objectives
1. Distinguish between `align-content` (line distribution) and `align-items` (item alignment within lines)
2. Understand when `align-content` applies — multi-line flex containers only (`flex-wrap: wrap`)
3. Use all values: `normal`, `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`, `stretch`
4. Implement multi-line content distribution patterns for card grids and galleries
5. Debug when `align-content` has no effect (single-line containers with `nowrap`)
6. Combine with `flex-wrap: wrap` for responsive, balanced layouts
7. Apply `space-between` to distribute wrapped lines from top to bottom
8. Use `stretch` (default) when you want lines to fill the container
9. Distinguish between cross-axis line alignment and item alignment
10. Apply `align-content` in grid-like flex layouts for vertical space distribution

## Theory

### Single-line vs Multi-line
`align-content` only works in a **multi-line** flex container (where `flex-wrap: wrap` or `wrap-reverse` is set AND there are enough items to create multiple lines). In a single-line container (`flex-wrap: nowrap`), `align-content` has **NO effect**. This is the most important concept for this property.

```
Single-line (nowrap):              Multi-line (wrap):
┌──────────────────────┐           ┌──────────────────────┐
│ 1 │ 2 │ 3 │ 4         │           │ 1 │ 2 │ 3 │ 4         │ ← line 1
│                      │           ├──────────────────────┤
│ align-content has    │           │ 5 │ 6 │ 7 │ 8         │ ← line 2
│ NO effect            │           └──────────────────────┘
└──────────────────────┘           align-content distributes
                                    these two lines vertically
```

### The Values

| Value | Behavior |
|---|---|
| `normal` / `stretch` | Lines stretch to fill the cross-axis space (default) |
| `flex-start` | Lines packed at the start of the cross axis |
| `flex-end` | Lines packed at the end of the cross axis |
| `center` | Lines centered on the cross axis |
| `space-between` | First line at start, last at end, equal spacing between |
| `space-around` | Equal spacing around each line (half-gap at edges) |
| `space-evenly` | Completely equal distribution everywhere |

### How `stretch` (Default) Works
`stretch` doesn't actually stretch the items themselves — it stretches the **lines** (the gaps between lines) to fill the available space. Each line's items expand to fill the extra space proportionally. This is why you often see `align-content: stretch` making items taller when there's vertical space to fill.

### `align-content` vs `align-items`

| Aspect | `align-content` | `align-items` |
|---|---|---|
| Applies to | Multiple lines (multi-line containers) | Single line (any flex container) |
| Effect | Distributes space BETWEEN lines | Aligns items WITHIN their line |
| Requires | `flex-wrap: wrap` | Any flex container |
| Analogy | Like `justify-content` for cross axis | Like `align-self` applied to all items |
| Use case | Wrapped card grids, galleries | Navigation bars, single-row layouts |

### The Relationship with Container Height
For `align-content` to have a visible effect, the flex container must have **extra space** in the cross axis. If the container's cross-axis size is exactly the sum of the items' sizes (no extra space), all values look the same. Setting `height` or `min-height` on the container creates the extra space for `align-content` to distribute.

```
Container height: 600px
Two lines of items: total 300px
Extra space: 300px — align-content distributes this 300px
```

## Syntax and Code Examples

### Basic Setup
```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: center; /* or any value */
  height: 500px; /* Extra space for align-content to distribute */
  gap: 1rem;
}

.item {
  flex: 0 0 200px;
  height: 80px;
}
```

### Space-Between for Multi-line Card Grid
```css
.gallery {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between; /* First line at top, last at bottom */
  gap: 1rem;
  min-height: 80vh;
  padding: 1rem;
}

.gallery .card {
  flex: 1 1 250px;
  height: 200px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 8px;
}
```

### Centered Wrapped Content
```css
.centered-grid {
  display: flex;
  flex-wrap: wrap;
  align-content: center; /* All lines vertically centered */
  justify-content: center; /* Items horizontally centered */
  gap: 1.5rem;
  min-height: 600px;
  padding: 2rem;
}

.centered-grid .item {
  flex: 0 0 200px;
  height: 150px;
  background: #f1f5f9;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Space-Evenly for Balanced Distribution
```css
.balanced-grid {
  display: flex;
  flex-wrap: wrap;
  align-content: space-evenly; /* Equal vertical space around all lines */
  gap: 1rem;
  height: 700px;
  padding: 1rem;
}

.balanced-grid .item {
  flex: 0 0 150px;
  height: 100px;
  background: #e2e8f0;
  border-radius: 4px;
}
```

### Flex-Start vs Flex-End
```css
/* Items packed at the top */
.top-grid {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 1rem;
  min-height: 500px;
}

/* Items packed at the bottom */
.bottom-grid {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
  gap: 1rem;
  min-height: 500px;
}
```

### Combining with Align-Items
```css
.complex-grid {
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;  /* Distribute lines vertically */
  align-items: center;          /* Center items within each line */
  gap: 1rem;
  min-height: 800px;
}

.complex-grid .item {
  flex: 0 0 180px;
  height: 120px;
  background: #3b82f6;
  border-radius: 8px;
}
```

### Preventing Stretch (Using flex-start)
```css
/* Without stretch — items stay their natural size */
.natural-grid {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start; /* Don't stretch lines */
  gap: 1rem;
  min-height: 500px;
}

/* With stretch (default) — lines expand to fill space */
.stretch-grid {
  display: flex;
  flex-wrap: wrap;
  align-content: stretch; /* Lines expand to fill vertical space */
  gap: 1rem;
  min-height: 500px;
}
```

## Visual Explanation

```
All values shown with a container height of 400px and 2 lines of items (total content height ~150px):

align-content: flex-start     align-content: center
┌──────────────────────┐      ┌──────────────────────┐
│ 1 │ 2 │ 3 │ 4         │      │                      │
│ 5 │ 6 │ 7 │ 8         │      │  1 │ 2 │ 3 │ 4       │
│ (free space below)    │      │  5 │ 6 │ 7 │ 8       │
│                      │      │                      │
└──────────────────────┘      └──────────────────────┘

align-content: flex-end       align-content: space-between
┌──────────────────────┐      ┌──────────────────────┐
│                      │      │ 1 │ 2 │ 3 │ 4         │
│                      │      │ (space between)      │
│  1 │ 2 │ 3 │ 4       │      │ 5 │ 6 │ 7 │ 8         │
│  5 │ 6 │ 7 │ 8       │      └──────────────────────┘
└──────────────────────┘

align-content: space-around   align-content: space-evenly
┌──────────────────────┐      ┌──────────────────────┐
│ (space)              │      │ (space)              │
│  1 │ 2 │ 3 │ 4       │      │  1 │ 2 │ 3 │ 4       │
│ (space)              │      │ (space)              │
│  5 │ 6 │ 7 │ 8       │      │  5 │ 6 │ 7 │ 8       │
│ (space)              │      │ (space)              │
└──────────────────────┘      └──────────────────────┘
```

## Common Mistakes
1. **Using when there's no wrapping**: `align-content` won't work with `nowrap` (default). If items don't wrap, it has no effect.
2. **Confusing with `align-items`**: They're different — `align-items` aligns items within their line, `align-content` distributes space between entire lines.
3. **Not enough items to wrap**: If you have only 3 items and the container is wide enough, no wrapping occurs and `align-content` does nothing.
4. **Forgetting container cross-axis size**: Needs extra space on the cross axis to distribute. Without `min-height` or `height`, the container collapses to content height and there's no space to distribute.
5. **Expecting `space-between` to work with one line**: With a single line of wrapped items, `space-between` behaves like `flex-start`.
6. **Not accounting for `gap` in spacing**: The `gap` property adds spacing between items, which interacts with `align-content` spacing — the two can compound.
7. **Using `stretch` and expecting items not to expand**: `stretch` distributes extra space into the lines, making items taller. Use `flex-start` to prevent this.
8. **Confusing the direction**: `align-content` is for cross-axis lines. For main-axis item distribution on each line, use `justify-content`.

## Best Practices
1. **Always pair `align-content` with `flex-wrap: wrap`** — it has no effect without wrapping
2. **Set a `min-height` or `height` on the container** to create extra space for distribution
3. **Use `space-between` for evenly distributed multi-line content** — first line at top, last at bottom
4. **Use `center` for vertically centering groups of wrapped items** within a container
5. **Use `flex-start` when you don't want lines to stretch** — preserves natural item sizes
6. **Use `stretch` (default) when you want lines to fill the container** — most common for full-height layouts
7. **Use `space-evenly` for truly balanced vertical spacing** — identical gaps between all lines and edges
8. **Use `space-around` for gallery layouts** where edges need some breathing room
9. **Combine `align-content` with `align-items: center`** when you want both lines distributed AND items centered within them
10. **Test with different numbers of items** — 2 lines vs 5 lines can look very different with the same `align-content` value

## Accessibility Considerations
- `align-content` only affects visual distribution of lines — it does NOT change DOM order or screen reader navigation
- Screen reader navigation order is based on DOM order, not visual layout position
- When lines are distributed with large gaps (`space-between`, `space-evenly`), ensure content across lines is still perceivably connected
- Very large gaps between lines may cause users to visually group content incorrectly
- Ensure that items in different lines can still be navigated sequentially without confusion
- No inherent accessibility concern — `align-content` is purely visual layout
- Test with zoom to ensure content doesn't become disconnected at different viewport sizes

## Performance Considerations
- `align-content` has minimal performance impact — simple space distribution calculation
- No paint or composite implications — only layout recalculation
- The browser recalculates line distribution on resize, which triggers repaint but is efficient
- For containers with many wrapped items (100+), layout calculation is still fast
- No cache or memory concerns
- `stretch` may require more layout work than `flex-start` because the browser must calculate how to distribute extra space proportionally
- Combining `align-content` with `align-items` may add slight overhead but is negligible

## Browser Compatibility

| Value | Chrome | Edge | Firefox | Safari | Opera | IE |
|---|---|---|---|---|---|---|
| `align-content: stretch` | 29+ | 12+ | 28+ | 9+ | 17+ | 11 (partial) |
| `align-content: flex-start` | 29+ | 12+ | 28+ | 9+ | 17+ | 11 (partial) |
| `align-content: flex-end` | 29+ | 12+ | 28+ | 9+ | 17+ | 11 (partial) |
| `align-content: center` | 29+ | 12+ | 28+ | 9+ | 17+ | 11 (partial) |
| `align-content: space-between` | 29+ | 12+ | 28+ | 9+ | 17+ | 11 (partial) |
| `align-content: space-around` | 29+ | 12+ | 28+ | 9+ | 17+ | 11 (partial) |
| `align-content: space-evenly` | 60+ | 79+ | 52+ | 11+ | 47+ | No |
| IE10 old spec (-ms-flex-line-pack) | — | — | — | — | — | 10 |

## Summary Notes
- `align-content` distributes space **between lines** in multi-line flex containers along the cross axis
- It only works with `flex-wrap: wrap` or `wrap-reverse` — has no effect with `nowrap`
- It is the cross-axis equivalent of `justify-content` (which works on the main axis)
- **Eight values**: `normal`/`stretch` (default), `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`
- `stretch` (default) distributes extra space into the lines, making items expand
- `flex-start` packs lines at the start; `flex-end` packs at the end
- `center` centers lines on the cross axis
- `space-between` puts first line at start, last at end, with equal space between
- `space-around` puts equal space around each line (half at edges)
- `space-evenly` puts identical space between all lines and edges
- The container needs a defined cross-axis size (`height` or `min-height`) for alignment to be visible
- Not the same as `align-items` — `align-items` aligns items within their line; `align-content` distributes entire lines
- Fully supported in modern browsers; `space-evenly` is the last value to gain full support (Chrome 60+)
- Use DevTools Flexbox inspector to see how `align-content` distributes lines
