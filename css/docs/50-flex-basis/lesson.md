# Flex Basis

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
`flex-basis` sets the **initial main-axis size** of a flex item before any growing or shrinking occurs. It acts as the starting point from which `flex-grow` (adds space) and `flex-shrink` (removes space) calculate their adjustments. Unlike `width` or `height`, `flex-basis` respects the flex container's direction — it controls width in a `row` layout and height in a `column` layout. Understanding `flex-basis` is the key to mastering the `flex` shorthand and creating predictable, responsive flex layouts. It directly determines how items behave when there's extra or insufficient space, making it the most important sizing property in Flexbox.

## Learning Objectives
1. Define what `flex-basis` represents in flex layout — the initial main-axis size
2. Distinguish between `flex-basis`, `width`, and `height` and understand their interaction
3. Understand how `flex-direction` determines which dimension `flex-basis` controls
4. Use `flex-basis: auto` (default) vs explicit length values (`px`, `em`, `%`)
5. Use `flex-basis: 0` for equal distribution layouts where content is ignored
6. Understand the `content` keyword and its browser support
7. Implement content-aware sizing with `flex-basis: auto`
8. Calculate how basis interacts with grow and shrink — the flex sizing algorithm
9. Combine basis with `min-width`/`max-width` for size constraints
10. Apply basis in real-world responsive patterns: card grids, sidebars, equal columns

## Theory

### What Flex Basis Controls
`flex-basis` specifies the size of a flex item along the **main axis**:
- In `flex-direction: row` or `row-reverse`: `flex-basis` controls **width**
- In `flex-direction: column` or `column-reverse`: `flex-basis` controls **height**

```
flex-direction: row:          flex-direction: column:
┌──────────────────────┐      ┌──────────────────────┐
│ ← basis (width) →    │      │                      │
│ ┌────────────────┐   │      │   basis (height)      │
│ │   Item         │   │      │   ┌────────────┐      │
│ └────────────────┘   │      │   │   Item    │      │
└──────────────────────┘      │   └────────────┘      │
                              │                      │
                              └──────────────────────┘
```

### Flex-Basis vs Width vs Height
The relationship between `flex-basis`, `width`, and `height` is governed by specific rules:

| Scenario | Which Wins |
|---|---|
| `flex-basis` set (not `auto`) AND `width` set (row direction) | `flex-basis` wins |
| `flex-basis: auto` AND `width` set (row direction) | `width` is used as basis |
| `flex-basis: auto` AND no `width` set | Content size is used |
| `flex-basis` set (not `auto`) AND `height` set (column direction) | `flex-basis` wins |
| Both `flex-basis` and `min-width`/`max-width` set | `min-width`/`max-width` constrain the final size |

The key takeaway: **`flex-basis` overrides `width`/`height`** when it is set to a value other than `auto`.

### Flex-Basis Values

| Value | Behavior |
|---|---|
| `auto` (default) | Uses the item's `width` (row) or `height` (column) if set; otherwise uses content size |
| `0` | Ignores content width — items start at size 0 and grow/shrink from there |
| `<length>` (e.g., `200px`, `50%`) | Explicit size in the specified unit |
| `content` | Based on content size (newer CSS spec — limited browser support) |
| `fit-content` | Sizes to content, subject to min/max constraints |

### How Flex-Basis Affects Grow and Shrink
The `flex-basis` is the input to the flex sizing algorithm:
1. Start with each item's `flex-basis` as the initial size
2. Sum all initial sizes — compare to container size
3. If container is larger → `flex-grow` distributes the extra space
4. If container is smaller → `flex-shrink` distributes the deficit

```
Example in row direction:
Container: 800px
Item A: flex-basis: 200px, flex-grow: 1
Item B: flex-basis: 300px, flex-grow: 2
Item C: flex-basis: 100px, flex-grow: 1

Total basis: 600px, Free space: 200px
Grow units: 1 + 2 + 1 = 4
Item A: 200 + 200×(1/4) = 250px
Item B: 300 + 200×(2/4) = 400px
Item C: 100 + 200×(1/4) = 150px
Total: 800px ✓
```

### Percentage Flex-Basis
Percentage `flex-basis` is relative to the container's main-axis size:

```css
.item {
  flex-basis: 25%; /* 25% of the container's width (in row) */
}
```

This works well for simple proportional layouts but differs from `flex-grow` distribution — percentages are calculated BEFORE grow/shrink adjustment.

### The `content` Keyword
The `content` keyword (distinct from `auto`) bases the initial size purely on the item's content, ignoring any explicit `width` or `height`:

```css
.item {
  flex-basis: content; /* Size based purely on content */
}
```

Browser support for `content` is limited (Chrome 92+, Firefox 63+, Safari 14+) and it's not available in Internet Explorer.

## Syntax and Code Examples

### Basic Flex-Basis Values
```css
.item-auto {
  flex-basis: auto; /* Default — content-sized or uses width/height */
}

.item-zero {
  flex-basis: 0; /* Starts at 0 — all size comes from grow */
}

.item-fixed {
  flex-basis: 200px; /* Explicit 200px starting size */
}

.item-percent {
  flex-basis: 25%; /* 25% of container's main-axis size */
}
```

### Equal Columns with flex-basis: 0
```css
.row {
  display: flex;
}

.column {
  flex: 1 1 0; /* grow: 1, shrink: 1, basis: 0 */
  /* All columns start at 0 and grow equally */
  padding: 1rem;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
}
```

### Fixed Basis with Wrapping — Responsive Cards
```css
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.card {
  flex: 1 1 300px; /* grow, shrink, basis: 300px */
  /* Ideal size: 300px. Grows if space, shrinks if needed */
  padding: 1.5rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

### Content-Aware Flex (flex-basis: auto)
```css
.button-group {
  display: flex;
  gap: 0.5rem;
}

.button-group button {
  flex: 0 1 auto; /* grow: 0, shrink: 1, basis: auto */
  /* Sized by content (button label width), shrinks if needed */
  padding: 0.75rem 1.5rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
}
```

### Flex-Basis with Min/Max Constraints
```css
.sidebar {
  flex: 0 0 250px; /* Fixed 250px */
  min-width: 200px;
  max-width: 300px;
  /* Actually flexible between 200-300px, not truly fixed */
}

.content {
  flex: 1 1 0; /* Takes remaining space */
  min-width: 0; /* Allow shrinking below content */
}
```

### Percentage Flex-Basis in a Row
```css
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.grid .item {
  flex-basis: calc(33.333% - 0.667rem); /* 3 columns with gap */
  flex-grow: 1;
  /* More robust than width: 33.33% */
}
```

### Flex-Basis in Column Direction
```css
.column-layout {
  display: flex;
  flex-direction: column;
  height: 600px;
  gap: 1rem;
}

.column-layout .header {
  flex: 0 0 80px; /* basis: 80px tall */
  background: #1e293b;
  color: #fff;
  padding: 1rem;
}

.column-layout .body {
  flex: 1 1 auto; /* basis: auto — content-sized, grows to fill */
  padding: 1rem;
}

.column-layout .footer {
  flex: 0 0 60px; /* basis: 60px tall */
  background: #f1f5f9;
  padding: 1rem;
}
```

### Flex-Basis Nav with Search
```css
.navbar {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  gap: 1rem;
}

.logo {
  flex: 0 0 auto; /* Content-sized, no flexibility */
}

.search {
  flex: 1 1 auto; /* Content-sized but can grow to fill space */
  min-width: 200px;
}

.actions {
  flex: 0 0 auto; /* Content-sized */
  display: flex;
  gap: 0.5rem;
}
```

## Visual Explanation

```
flex-basis Values Illustrated (row direction, container 800px):

flex-basis: auto (content size)
┌────────┬───────────────────┬──────┐
│ short  │   medium content  │ long │
│        │                   │ text │
└────────┴───────────────────┴──────┘
Items sized by their content

flex-basis: 0 (all items with flex-grow: 1)
┌──────────┬──────────┬──────────┐
│  267px   │  267px   │  266px   │
│ (equal)  │ (equal)  │ (equal)  │
└──────────┴──────────┴──────────┘
All items start at 0, grow equally

flex-basis: 200px (all with flex-grow: 1)
┌─────────────────┬─────────────────┬────────────────┐
│ 200px + grow    │ 200px + grow    │ 200px + grow   │
│ (equal share)   │ (equal + share) │ (equal share)  │
└─────────────────┴─────────────────┴────────────────┘
Items start at 200px, then grow by equal share of remainder

flex-basis: 25% (with flex-grow: 0)
┌──────────────┬──────────────┬────────────────────┐
│  25% (200px)  │  25% (200px)  │  50% (400px)      │
└──────────────┴──────────────┴────────────────────┘
Third item takes remaining space
```

## Common Mistakes
1. **Using `width` instead of `flex-basis`**: In flex layouts, `flex-basis` overrides `width` on the main axis (when `flex-basis` is not `auto`). Setting `width: 200px` on a flex item in a row may have no effect if `flex-basis` is also set.
2. **Confusing basis with final size**: Basis is the **STARTING** size before grow/shrink. The final size includes growth or shrinkage adjustments.
3. **Using percentage without understanding**: Percentage basis is relative to the container's main-axis size — in a column, `flex-basis: 50%` means 50% of the container's height, not width.
4. **Assuming `auto` means zero**: `auto` uses content size or the item's `width`/`height` property. It is NOT the same as `0`.
5. **Not considering direction**: Basis controls width in `row` and height in `column` — if you change `flex-direction`, what `flex-basis` controls changes.
6. **Using `flex-basis` without `flex-grow` or `flex-shrink`**: Without growth or shrinkage, `flex-basis` acts just like `width`/`height` — you could use the more familiar properties instead.
7. **Forgetting `flex-basis: 0` for truly equal columns**: Without `flex-basis: 0`, items with different content widths will not have equal final sizes even with `flex-grow: 1`.
8. **Expecting `flex-basis: content` to work everywhere**: Limited browser support — use `auto` for broader compatibility.

## Best Practices
1. **Use `flex-basis: 0` for truly equal distribution** with `flex-grow: 1` — all items start from 0 and grow equally
2. **Use `flex-basis: auto` (default) for content-aware sizing** — items size naturally, then grow/shrink as needed
3. **Use the `flex` shorthand** to set all three properties together — `flex: 1 1 300px` is clearer than three separate declarations
4. **For responsive cards**: `flex: 1 1 300px` — basis determines the target size and wrapping threshold
5. **Set `min-width`/`max-width` alongside `flex-basis`** to constrain growth and shrinkage
6. **Set `min-width: 0`** when you want items to shrink below their content size
7. **Use percentage basis sparingly** — `fr` units in CSS Grid or `flex-grow` ratios are often more predictable
8. **Consider direction when setting basis** — what works in `row` may not work in `column`
9. **Test with real content** — content size affects `flex-basis: auto` behavior significantly
10. **Prefer the `flex` shorthand** — writing `flex: 1 1 0` is more idiomatic than `flex-grow: 1; flex-shrink: 1; flex-basis: 0`

## Accessibility Considerations
- `flex-basis` does not affect DOM order, focus order, or screen reader navigation
- Ensure items with explicit basis values remain readable at all sizes — test with zoom
- Use relative units (`em`, `rem`, `%`) for `flex-basis` to respect user font-size preferences
- Items with very small basis values (e.g., `flex-basis: 0`) may become too narrow for readable text — always set `min-width` as an accessibility safeguard
- For `flex-basis` in typography, use `rem` units to respect browser font-size settings
- Test with increased font size to ensure content doesn't overflow or get clipped
- Items with `flex-basis` in `column` direction may compress vertically — ensure content remains readable

## Performance Considerations
- `flex-basis` calculation is part of the standard flex layout algorithm — no performance concern
- Changing `flex-basis` triggers layout recalculation
- `flex-basis: 0` may be slightly faster in some cases because the browser doesn't need to compute content size
- `flex-basis: auto` requires the browser to calculate content size first, then apply grow/shrink — a two-pass process
- The difference between `0` and `auto` performance is negligible in modern browsers
- No paint or compositing implications

## Browser Compatibility

| Value | Chrome | Edge | Firefox | Safari | Opera | IE |
|---|---|---|---|---|---|---|
| `flex-basis: auto` | 29+ | 12+ | 20+ | 9+ | 17+ | 11 |
| `flex-basis: <length>` | 29+ | 12+ | 20+ | 9+ | 17+ | 11 |
| `flex-basis: <percentage>` | 29+ | 12+ | 20+ | 9+ | 17+ | 11 |
| `flex-basis: 0` | 29+ | 12+ | 20+ | 9+ | 17+ | 11 |
| `flex-basis: content` | 92+ | 92+ | 63+ | 14+ | 78+ | No |
| `flex-basis: fit-content` | 92+ | 92+ | 94+ | 15.4+ | 78+ | No |
| IE10 (-ms-flex-preferred-size) | — | — | — | — | — | 10 |

## Summary Notes
- `flex-basis` sets the **initial main-axis size** of a flex item — the starting point for grow/shrink calculations
- In `row` direction: basis = **width**; in `column` direction: basis = **height**
- **Default is `auto`**: uses `width`/`height` if set, otherwise content size
- **`flex-basis: 0`** — items start at size 0; with `flex-grow: 1`, all items grow equally (true equal distribution)
- **`flex-basis: 200px`** — items start at 200px, then grow/shrink from there
- `flex-basis` **overrides** `width`/`height` on the main axis when set to a non-`auto` value
- `flex-basis: 0` + `flex-grow: 1` = the standard `flex: 1` equal-distribution pattern
- `flex-basis: 300px` + `flex-wrap: wrap` + `flex-grow: 1` = the responsive card grid pattern
- Percentage basis is relative to the **container's main-axis size**
- `min-width`/`max-width` constrain the final size even after basis and grow/shrink
- The `flex` shorthand is the recommended way to set all three sizing properties
- `flex-basis: content` is the newest value with limited browser support (Chrome 92+, Firefox 63+)
- Test with real content to ensure basis values produce the expected layout
