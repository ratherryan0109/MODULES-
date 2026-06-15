# Flex Grow

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
`flex-grow` controls how much a flex item will **grow** relative to its siblings when there's extra space in the container. It's a unitless number (a ratio) that determines how positive free space is distributed among items. When a flex container has more space than its items need, `flex-grow` dictates which items claim that extra space and in what proportions. This property is the foundation of flexible, fluid layouts — enabling patterns like `flex: 1` for equal-width columns, proportional sidebar-to-content ratios, and fill-remaining-space behaviors. Understanding the math behind `flex-grow` is essential for precise flexbox layout control.

## Learning Objectives
1. Understand how `flex-grow` distributes extra space among flex items
2. Calculate how items grow using flex-grow ratios and the allocation formula
3. Distinguish between growing items (`flex-grow > 0`) and non-growing items (`flex-grow: 0`)
4. Combine `flex-grow` with `flex-basis` and `flex-shrink` for complete flex behavior
5. Use the `flex: 1` pattern for equal-width columns
6. Implement proportional growth for content areas (sidebar:content ratios)
7. Debug unexpected growth behavior caused by content size or basis values
8. Understand how `flex-grow` interacts with `max-width` constraints
9. Apply `flex-grow` in real layouts: sidebars, content areas, card rows, input fields
10. Understand the difference between `flex-grow` and `width` percentage-based layouts

## Theory

### How Flex Grow Works
When a flex container has **positive free space** (the container's main-axis size exceeds the total of all items' main-axis sizes), `flex-grow` distributes that space proportionally. Each item receives a share proportional to its `flex-grow` value relative to the sum of all `flex-grow` values.

```
Container: 800px wide
Total item flex-basis: 600px (3 items × 200px)
Free space: 200px

Items all have flex-grow: 1
Total grow units: 3
Each item gets: 200px × (1/3) = 66.6px
Final item size: 200px + 66.6px = 266.6px
```

### The Growth Formula
The exact formula for how much an item grows is:

```
item_growth = free_space × (item_flex-grow / sum_of_all_flex-grow_values)
```

Where `free_space` = container_size - sum_of_item_flex-basis_sizes

### Flex-Grow and Flex-Basis Interaction
The `flex-basis` determines the starting point. `flex-grow` adds to that basis:
- If `flex-basis: 0`, items start at 0 and all their width comes from growth
- If `flex-basis: auto`, items start at their content width, then grow from there

This is why `flex: 1` (which sets `flex-basis: 0`) creates truly equal columns, while `flex: 1 1 auto` (`flex: auto`) creates columns sized by content first, then grown.

### Flex-Grow: 0 vs Flex-Grow: 1
- `flex-grow: 0` (default): Item does NOT grow — it stays at its flex-basis size
- `flex-grow: 1`: Item grows to absorb a proportional share of free space
- `flex-grow: 2`: Item grows to absorb DOUBLE the share of an item with `flex-grow: 1`

### The Flex: 1 Pattern
`flex: 1` is shorthand for `flex-grow: 1, flex-shrink: 1, flex-basis: 0`. This combination:
1. Starts items at size 0 (flex-basis: 0)
2. Grows them equally to fill the container (flex-grow: 1)
3. Shrinks them equally if needed (flex-shrink: 1)

This creates truly equal-width columns regardless of content size.

### Interaction with Max-Width
Even with `flex-grow`, an item cannot exceed its `max-width`. If a growing item hits `max-width`, the remaining free space is distributed among the other growing items.

## Syntax and Code Examples

### Basic Usage
```css
.item {
  flex-grow: 1; /* Default: 0 */
}
```

### Equal Width Columns
```css
.container {
  display: flex;
}

.column {
  flex-grow: 1; /* All columns grow equally */
  flex-basis: 0; /* Start from 0 for truly equal distribution */
  padding: 1rem;
}

/* Alternative with shorthand */
.column {
  flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
}
```

### Proportional Sidebar + Content
```css
.layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  flex-grow: 1; /* Takes 1 part of free space */
  background: #1e293b;
  color: #fff;
  padding: 1.5rem;
}

.content {
  flex-grow: 3; /* Takes 3 parts of free space = 3× wider */
  padding: 2rem;
  /* Total 4 parts: sidebar = 25%, content = 75% */
}

/* Equivalent to:
   sidebar: width: 25%, content: width: 75%
   But with flex-grow, it adapts to content! */
```

### Mixed Growing and Non-Growing Items
```css
.toolbar {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: #f8fafc;
  gap: 0.5rem;
}

.toolbar .logo {
  flex-grow: 0; /* Stays at logo width — doesn't grow */
}

.toolbar .search {
  flex-grow: 1; /* Takes all available space */
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
}

.toolbar .actions {
  flex-grow: 0; /* Stays at button width */
  display: flex;
  gap: 0.5rem;
}
```

### Input That Fills Remaining Space
```css
.input-group {
  display: flex;
  gap: 0;
}

.input-group input {
  flex-grow: 1; /* Input takes all available space */
  padding: 0.75rem;
  border: 2px solid #d1d5db;
  border-right: none;
  border-radius: 6px 0 0 6px;
}

.input-group button {
  flex-grow: 0; /* Button stays at its content width */
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
}
```

### Flex-Grow with Percentages (via Flex-Basis)
```css
/* These achieve similar visual results differently */
.percentage-layout {
  display: flex;
}

.sidebar-a {
  width: 25%; /* Fixed percentage */
}

.sidebar-b {
  flex-grow: 1;
  flex-basis: 0; /* 25% of free space */
}

.content-area {
  flex-grow: 3;
  flex-basis: 0; /* 75% of free space */
}
```

### Avoiding Over-Growth with Max-Width
```css
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex-grow: 1;
  flex-basis: 250px;
  max-width: 400px; /* Prevents cards from growing too wide */
  padding: 1.5rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

## Visual Explanation

```
Container: 800px, flex-basis per item: 200px, total basis: 600px
Free space: 200px

All items flex-grow: 1 (total grow = 3)
┌────────────────────────────────────────────┐
│ [ 267px ] [ 267px ] [ 266px ]              │
│ +67        +67        +66                  │
└────────────────────────────────────────────┘
Each gets 200/3 ≈ 67px extra

Mixed flex-grow: 1, 2, 1 (total grow = 4)
┌────────────────────────────────────────────┐
│ [ 250px ] [ 300px ] [ 250px ]              │
│ +50        +100       +50                  │
└────────────────────────────────────────────┘
Item 2 gets 2× the growth of items 1 and 3

With flex-basis: 0 (for truly equal columns)
┌────────────────────────────────────────────┐
│ [ 267px ] [ 267px ] [ 266px ]              │
│ Start at 0, grow from there                │
└────────────────────────────────────────────┘

Growth calculation visualization:
Container: 800px
Item 1: basis 200px, grow 1 → 200 + 200×(1/4) = 250px
Item 2: basis 200px, grow 2 → 200 + 200×(2/4) = 300px
Item 3: basis 200px, grow 1 → 200 + 200×(1/4) = 250px
Sum: 800px ✓
```

## Common Mistakes
1. **Using `flex-grow` without considering `flex-basis`**: Without setting `flex-basis: 0`, items with different content sizes will grow to different sizes even with the same `flex-grow` value. Always set `flex-basis: 0` for true proportional distribution.
2. **Assuming `flex-grow: 1` makes all items equal**: Only true if all items have the same `flex-basis` AND the same `flex-grow`. If one item has `flex-basis: 200px` and another has `flex-basis: 100px`, both with `flex-grow: 1`, they grow unequally.
3. **Using negative `flex-grow` values**: Invalid — values must be ≥ 0. Negative values are ignored.
4. **Forgetting `flex-basis: 0` for truly equal columns**: Without it, items retain their content width, and only the remaining free space is distributed equally — items with more content end up wider.
5. **Using `flex-grow` with wrapped items**: Growth only distributes remaining space in the current line. Items on different lines don't share free space.
6. **Not setting `max-width` constraint**: An item with `flex-grow: 1` can grow indefinitely if the container grows (e.g., on wide screens). Always set `max-width` when appropriate.
7. **Expecting `flex-grow` to work without free space**: If all space is taken (items sum to container size), `flex-grow: 1` doesn't make items larger.
8. **Using `flex-grow` in isolated flex items**: If only one item has `flex-grow: 1`, it gets ALL free space — which may or may not be the desired behavior.

## Best Practices
1. **Use `flex: 1` shorthand** instead of `flex-grow: 1` alone — it sets all three properties properly
2. **For equal-width columns**: `flex: 1 1 0` — sets flex-basis to 0 for true equal distribution
3. **For proportional layouts**: Set different grow values based on desired ratio (e.g., sidebar 1, content 3)
4. **Use `flex-grow: 0` (default) for items that should NOT grow** — icons, logos, fixed-width elements
5. **Always combine with `max-width`** to prevent items from growing beyond their useful size
6. **Use `flex-grow` with `flex-basis` consistently** — don't rely on content size assumptions
7. **For responsive card grids**: `flex: 1 1 300px` combines grow, shrink, and basis for auto-responsive layouts
8. **Avoid using `flex-grow` on all items** — let some items keep their natural size for balanced layouts
9. **Test growth behavior at different container sizes** — proportional growth changes as container width changes
10. **Understand that `flex-grow` only distributes free space** — not total space; it's different from percentage-based layouts

## Accessibility Considerations
- `flex-grow` does not affect DOM order, focus order, or screen reader navigation
- Items that grow significantly (e.g., 3× wider than others) should still maintain readable content
- Ensure proportionally larger items still have sufficient contrast and readability
- For text content, use `max-width` (or `max-width: 70ch`) to prevent lines from becoming too long
- Test with zoom to ensure content doesn't overflow at different sizes
- No inherent accessibility concern — it's purely visual sizing

## Performance Considerations
- `flex-grow` is a simple mathematical calculation — no performance concern
- Changing `flex-grow` triggers layout recalculation but is very fast
- No paint or compositing impact
- Items with high grow values may cause performance issues if animated frequently — prefer `transform` for animation
- Multiple items with `flex-grow` require a single-pass calculation — efficient regardless of item count

## Browser Compatibility

| Feature | Chrome | Edge | Firefox | Safari | Opera | IE |
|---|---|---|---|---|---|---|
| `flex-grow` | 29+ | 12+ | 20+ | 9+ | 17+ | 11 |
| `flex-grow: 0` | 29+ | 12+ | 20+ | 9+ | 17+ | 11 |
| `flex` shorthand | 29+ | 12+ | 20+ | 9+ | 17+ | 11 (partial) |
| `flex-basis: 0` | 29+ | 12+ | 20+ | 9+ | 17+ | 11 |
| IE10 (-ms-flex-positive) | — | — | — | — | — | 10 |

## Summary Notes
- `flex-grow` distributes **positive free space** among flex items proportionally
- **Default is `0`** — items don't grow; they stay at their `flex-basis` size
- Value is a **unitless number** (ratio) — `1`, `2`, `3`, etc.
- Growth formula: `item_growth = free_space × (item_grow / total_grow)`
- `flex-basis` determines the starting size — `flex-grow` adds to it
- **`flex-basis: 0`** + `flex-grow: 1` creates truly equal distribution regardless of content
- **`flex: 1`** = `flex-grow: 1, flex-shrink: 1, flex-basis: 0` — the standard equal-distribution pattern
- Items with `max-width` stop growing at that limit — remaining space goes to other items
- Growth only applies within a single line — wrapped items on different lines don't share space
- Combine `flex-grow` with `flex-shrink` and `flex-basis` via the `flex` shorthand
- Test with real content to ensure growth behavior matches expectations
