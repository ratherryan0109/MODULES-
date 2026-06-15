# Align Items

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
The `align-items` property controls how flex items are aligned along the **cross axis** of a flex container. In a default `row` layout, this means vertical alignment — controlling whether items stretch to fill the height, align at the top, bottom, center, or by their text baseline. While `justify-content` distributes space on the main axis, `align-items` positions items within the cross axis space. This property is essential for creating equal-height columns, vertically centering content, and building consistent component layouts. It can be overridden on individual items using `align-self`.

## Learning Objectives
1. Understand that `align-items` operates on the cross axis (perpendicular to `flex-direction`)
2. Use all five standard values: `stretch`, `flex-start`, `flex-end`, `center`, `baseline`
3. Distinguish between `align-items` (cross axis) and `justify-content` (main axis)
4. Understand how `align-items` behavior changes when `flex-direction` changes (axes swap)
5. Override alignment for individual items using `align-self`
6. Apply `align-items: stretch` for equal-height columns in a row
7. Use `align-items: baseline` for aligning text in differently-sized items
8. Combine `align-items` with `justify-content` for complete centering
9. Debug alignment issues when items have different heights
10. Use `align-items` in real-world patterns: navigation bars, card rows, form layouts

## Theory

### The Cross Axis and Flex-Direction
`align-items` always operates on the **cross axis** — the axis perpendicular to the main axis. This means:

| `flex-direction` | Main Axis | Cross Axis | `align-items` Controls |
|---|---|---|---|
| `row` (default) | Horizontal (left → right) | Vertical (top → bottom) | **Vertical** alignment |
| `row-reverse` | Horizontal (right → left) | Vertical (top → bottom) | **Vertical** alignment |
| `column` | Vertical (top → bottom) | Horizontal (left → right) | **Horizontal** alignment |
| `column-reverse` | Vertical (bottom → top) | Horizontal (left → right) | **Horizontal** alignment |

This axis swap is critical: in `flex-direction: column`, `align-items: center` centers items **horizontally**, not vertically.

### The Five Values

| Value | Behavior | Use Case |
|---|---|---|
| `stretch` (default) | Items stretch to fill the entire cross-axis size | Equal-height columns, full-width buttons |
| `flex-start` | Items align at the cross-axis start (top in row) | Top-aligned content |
| `flex-end` | Items align at the cross-axis end (bottom in row) | Bottom-aligned actions |
| `center` | Items centered on the cross axis | Vertical centering in a row |
| `baseline` | Items aligned by their text baseline | Form labels with different font sizes |

### How `stretch` Works
`stretch` is the default and most commonly used value. It makes each flex item expand to fill the entire cross-axis size of the container. For `align-items: stretch` to work, the item must not have a fixed cross-axis size (i.e., no `height` in `row` direction, no `width` in `column` direction). If an item has an explicit `height` set, `stretch` is ignored for that item.

### Baseline Alignment
`baseline` aligns flex items by the baseline of their first line of text. This is useful when items have different font sizes or padding but should appear visually aligned by their text:

```
Without baseline:     With baseline:
┌─────────────┐       ┌─────────────┐
│ [1]         │       │ [1]         │
│ [2] (tall)  │       │     [2]     │
│     [3]     │       │ [3]         │
│  text       │       │  text text  │
│  text       │       └─────────────┘
└─────────────┘       ← text is level
```

### Align-Self: Per-Item Override
Any flex item can override the container's `align-items` value using `align-self`:

```css
.container {
  display: flex;
  align-items: center; /* All items vertically centered */
}

.item-special {
  align-self: flex-end; /* This one goes to the bottom */
}
```

`align-self` accepts the same values as `align-items` plus `auto` (inherits from container).

## Syntax and Code Examples

### Vertical Centering (The Classic Pattern)
```css
.container {
  display: flex;
  align-items: center; /* Vertically center items in a row */
  min-height: 200px;
}
```

### Equal-Height Columns (Default)
```css
.row {
  display: flex;
  gap: 1rem;
  /* align-items: stretch — default, columns equal height */
}

.column {
  flex: 1;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 8px;
  /* All columns automatically equal height */
}
```

### Top-Aligned Items
```css
.card-row {
  display: flex;
  align-items: flex-start; /* Cards align at top */
  gap: 1rem;
}

.card {
  flex: 1;
  padding: 1rem;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}
```

### Navigation with Vertical Centering
```css
.navbar {
  display: flex;
  align-items: center; /* Logo, links, and CTA all vertically centered */
  padding: 0 2rem;
  height: 64px;
  gap: 2rem;
}

.navbar .logo {
  font-size: 1.5rem;
  font-weight: 700;
}

.navbar .nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}
```

### Baseline Alignment for Form Labels
```css
.form-row {
  display: flex;
  align-items: baseline; /* Labels align by text baseline */
  gap: 1rem;
}

.form-row label {
  flex: 0 0 120px;
  font-size: 0.875rem; /* Smaller than the input */
  color: #475569;
}

.form-row input {
  flex: 1;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
}
```

### Align-Self Override
```css
.card-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  min-height: 300px;
}

.card {
  flex: 1;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
}

.card.highlight {
  align-self: stretch; /* This card stretches full height */
  /* Or: align-self: center; align-self: flex-end; */
}
```

### Avatar + Text with Center Alignment
```css
.user-profile {
  display: flex;
  align-items: center; /* Avatar and text vertically centered */
  gap: 0.75rem;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #3b82f6;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: 600;
}

.user-role {
  font-size: 0.8rem;
  color: #64748b;
}
```

### Column Direction with Align-Items
```css
.sidebar-nav {
  display: flex;
  flex-direction: column;
  align-items: center; /* Horizontally centers items in a column */
  gap: 0.5rem;
  padding: 1rem;
}

.sidebar-nav a {
  padding: 0.5rem 1rem;
  width: 100%;
  text-align: center;
  /* align-items: center makes each link horizontally centered */
}
```

## Visual Explanation

```
All values shown with flex-direction: row (cross axis = vertical):

stretch (default):
┌─────────────────────────────────┐
│ ┌─────┐ ┌─────┐ ┌─────┐         │
│ │     │ │     │ │     │         │ ← items stretch to fill height
│ │  A  │ │  B  │ │  C  │         │
│ │     │ │     │ │     │         │
│ └─────┘ └─────┘ └─────┘         │
└─────────────────────────────────┘

flex-start:
┌─────────────────────────────────┐
│ ┌─────┐ ┌─────┐ ┌─────┐         │ ← items at top
│ │  A  │ │  B  │ │  C  │         │
│ └─────┘ └─────┘ └─────┘         │
│                                 │
└─────────────────────────────────┘

center:
┌─────────────────────────────────┐
│                                 │
│ ┌─────┐ ┌─────┐ ┌─────┐         │ ← items vertically centered
│ │  A  │ │  B  │ │  C  │         │
│ └─────┘ └─────┘ └─────┘         │
│                                 │
└─────────────────────────────────┘

flex-end:
┌─────────────────────────────────┐
│                                 │
│ ┌─────┐ ┌─────┐ ┌─────┐         │
│ │  A  │ │  B  │ │  C  │         │ ← items at bottom
│ └─────┘ └─────┘ └─────┘         │
└─────────────────────────────────┘

baseline:
┌─────────────────────────────────┐
│ ┌──┐          ┌────────┐        │ ← text baselines align
│ │Hi│  ┌────┐  │Hello   │        │
│ └──┘  │How │  │World!  │        │
│       │are │  └────────┘        │
│       │you?│                    │
│       └────┘                    │
└─────────────────────────────────┘
```

## Common Mistakes
1. **Using `align-items` when you mean `justify-content` (and vice versa)**: Remember: `justify-content` = main axis, `align-items` = cross axis. In `flex-direction: row`, `align-items` is VERTICAL and `justify-content` is HORIZONTAL.
2. **Forgetting that `align-items` uses the cross axis**: When you change `flex-direction` to `column`, `align-items: center` centers HORIZONTALLY, not vertically.
3. **Expecting `baseline` to work like `center`**: `baseline` aligns by text baseline, not by center. Items with different font sizes will have different vertical positions.
4. **Not realizing that `stretch` requires no fixed cross-axis size**: If an item has `height: 100px` in a row layout, `stretch` won't override it.
5. **Confusing `align-items` with `align-content`**: `align-items` aligns individual items within their line; `align-content` aligns entire lines in a multi-line container.
6. **Using `align-items: center` without a defined container height**: If the container's cross-axis size is auto (content-height), centering has no effect because the container is exactly the height of its content.
7. **Setting `align-items` on a non-flex element**: The property only works on flex containers.

## Best Practices
1. **Use `align-items: center` for vertical centering** in a default row layout — the most common use case
2. **Use `align-self` on individual items** when one item needs different alignment from the rest
3. **Combine `align-items: center` with `justify-content: center`** for perfect centering in both axes
4. **Use `stretch` (default) for equal-height columns** — no extra CSS needed
5. **Use `baseline` for form labels and icon+text pairs** where text alignment matters
6. **Use `flex-start` for card rows** where you don't want cards to stretch to different heights
7. **Set an explicit `min-height` or `height` on the container** when using `center` or `flex-end` — otherwise the container collapses to content height
8. **Prefer `align-items` on the container** over `align-self` on each item for cleaner code
9. **Test alignment at different font sizes** — especially with `baseline`
10. **Remember the axis swap when changing `flex-direction`** — mentally check which axis `align-items` controls

## Accessibility Considerations
- `align-items` does not affect DOM order, focus order, or screen reader navigation
- Stretched items (default) don't change accessibility — they remain semantically correct
- Baseline alignment may shift visual positions of elements — ensure the visual order still makes sense with content
- Items with `align-self` overrides may visually appear in unexpected positions — verify keyboard navigation matches visual layout
- No inherent accessibility concerns with this property — it's purely visual positioning
- Ensure that aligned items remain readable and don't overlap at different zoom levels

## Performance Considerations
- `align-items` is computationally inexpensive — simple layout calculation
- No performance concerns — this property doesn't trigger paint or compositing changes
- Changing `align-items` triggers a layout recalculation but is very fast
- `stretch` may cause more complex layout calculations than other values because the browser must compute the cross-axis size for all items
- No additional GPU or memory overhead

## Browser Compatibility

| Value | Chrome | Edge | Firefox | Safari | Opera | IE |
|---|---|---|---|---|---|---|
| `align-items: stretch` | 29+ | 12+ | 20+ | 9+ | 17+ | 11 |
| `align-items: flex-start` | 29+ | 12+ | 20+ | 9+ | 17+ | 11 |
| `align-items: flex-end` | 29+ | 12+ | 20+ | 9+ | 17+ | 11 |
| `align-items: center` | 29+ | 12+ | 20+ | 9+ | 17+ | 11 |
| `align-items: baseline` | 29+ | 12+ | 20+ | 9+ | 17+ | 11 |
| `align-self` | 29+ | 12+ | 20+ | 9+ | 17+ | 11 |
| IE10 old spec (-ms-flex-align) | — | — | — | — | — | 10 |

## Summary Notes
- `align-items` controls **cross-axis** alignment of flex items
- **Five values**: `stretch` (default), `flex-start`, `flex-end`, `center`, `baseline`
- `stretch` — items expand to fill the cross-axis size (equal-height columns)
- `flex-start` — items align at the cross-axis start (top in `row`, left in `column`)
- `flex-end` — items align at the cross-axis end (bottom in `row`, right in `column`)
- `center` — items centered on the cross axis (vertical centering in `row`)
- `baseline` — items aligned by their text baseline
- The axis that `align-items` controls **changes with `flex-direction`**: in `column`, it becomes horizontal alignment
- `align-self` overrides alignment for individual items with the same values plus `auto`
- Combine with `justify-content: center` for perfect 2D centering
- `stretch` requires no fixed cross-axis dimension on items to work
- Cross-axis centering requires a defined container size in that axis
- No accessibility, performance, or browser support concerns (all modern browsers support it)
