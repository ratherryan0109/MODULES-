# Flex Shrink

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
`flex-shrink` controls how much a flex item will **shrink** relative to its siblings when there isn't enough space in the flex container. It is the counterpart to `flex-grow` — while `flex-grow` handles positive free space (extra space), `flex-shrink` handles negative free space (overflow). When flex items' total `flex-basis` exceeds the container's main-axis size, `flex-shrink` determines how each item contributes to the reduction. This property is essential for responsive designs where items need to gracefully compress rather than overflow. Understanding `flex-shrink` is also key to debugging why items sometimes disappear or behave unexpectedly on small screens.

## Learning Objectives
1. Understand how `flex-shrink` distributes negative space when items overflow the container
2. Calculate how items shrink using shrink factors and flex-basis
3. Distinguish between growing and shrinking behavior — they are NOT symmetrical
4. Prevent items from shrinking with `flex-shrink: 0`
5. Combine `flex-shrink` with `flex-basis` and `min-width`/`min-height`
6. Understand the minimum content size behavior — why items won't shrink below content
7. Debug unexpected shrinking (items disappearing, text overflowing)
8. Use `flex-shrink: 0` for fixed-size elements (sidebars, logos, images)
9. Understand the minimum content size constraint and how `min-width: 0` solves it
10. Apply shrink in responsive navigation, sidebar layouts, and card grids

## Theory

### How Flex Shrink Works
When items overflow the container (total `flex-basis` > container size), `flex-shrink` determines how each item contributes to the reduction. The default value is `1`, meaning all items shrink proportionally.

```
Container: 300px wide
Items: 3 items, each 150px basis (450px total)
Negative space (overflow): -150px

All items flex-shrink: 1 (default)
Each item loses: 150px × (1/3) = 50px
Final size: 150px - 50px = 100px each
```

### The Shrink Formula (More Complex Than Grow)
Unlike `flex-grow` which distributes space proportionally based on grow values alone, `flex-shrink` distribution is weighted by the item's `flex-basis`:

```
shrink_amount = overflow × (item_basis × item_shrink) / sum(basis × shrink for all items)
```

This means items with a larger `flex-basis` shrink MORE than items with a smaller `flex-basis`, even with the same `flex-shrink` value. This prevents small items from disappearing completely.

### Minimum Content Size Constraint
The most important behavior of `flex-shrink` is the **minimum content size** constraint. Flex items have a minimum content size (the width of the longest word or the intrinsic size of a replaced element). By default, `flex-shrink` will NOT shrink an item below this minimum content size, regardless of the `flex-shrink` value.

```css
.item {
  flex-shrink: 1000; /* Very high shrink factor */
  /* BUT: still won't shrink below the longest word's width */
}

.item {
  flex-shrink: 1;
  min-width: 0; /* Allows shrinking BELOW content size */
}
```

This is the #1 cause of "why won't my flex items shrink?" bugs.

### Flex-Shrink: 0
Setting `flex-shrink: 0` completely prevents an item from shrinking. The item keeps its `flex-basis` size even if the container overflows. This is essential for:
- Logos and brand elements that must maintain their size
- Fixed-width sidebars
- Icons, badges, and avatars
- Images that shouldn't be distorted

### Flex-Shrink vs Min-Width/Overflow
The minimum content size behavior can be overridden in two ways:
1. `min-width: 0` — allows the item to shrink below its minimum content size
2. `overflow: hidden` (or any value other than `visible`) — also allows below-content shrinking

## Syntax and Code Examples

### Basic Shrink — All Items
```css
.item {
  flex-shrink: 1; /* Default — items shrink proportionally */
}
```

### Preventing Shrink on a Specific Item
```css
.sidebar {
  flex-shrink: 0; /* This item will NOT shrink */
  width: 250px; /* Maintains 250px even if container is small */
}

.main-content {
  flex-shrink: 1; /* Shrinks if needed (default) */
  flex-grow: 1;
}
```

### Different Shrink Ratios
```css
.flex-row {
  display: flex;
  width: 500px;
}

.item1 {
  flex-basis: 300px;
  flex-shrink: 1; /* Shrinks normally */
}

.item2 {
  flex-basis: 300px;
  flex-shrink: 3; /* Shrinks 3× more than item1 */
}

/* Overflow: 600 - 500 = 100px
   Weighted: item1 basis×shrink = 300×1 = 300
             item2 basis×shrink = 300×3 = 900
   Total: 1200
   item1 shrinks: 100 × (300/1200) = 25px
   item2 shrinks: 100 × (900/1200) = 75px
   Final: item1 = 275px, item2 = 225px */
```

### Fixed Layout with Shrink Protection
```css
.layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  flex-shrink: 0; /* Never shrinks */
  width: 250px;
  background: #1e293b;
  color: #fff;
  padding: 1.5rem;
}

.content {
  flex-shrink: 1; /* Can shrink */
  flex-grow: 1;
  padding: 2rem;
  min-width: 0; /* Allow shrinking below content */
}

/* Without min-width: 0 on .content, long text in content
   would prevent the sidebar from staying visible */
```

### Navigation with Shrink Prevention
```css
.navbar {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 56px;
  background: #fff;
  border-bottom: 1px solid #e2e8f0;
}

.nav-logo {
  flex-shrink: 0; /* Logo maintains size */
  font-size: 1.25rem;
  font-weight: 700;
  margin-right: 2rem;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}

.nav-links li {
  flex-shrink: 1; /* Can shrink */
  white-space: nowrap;
}

.nav-search {
  flex-shrink: 1;
  margin-left: auto;
  min-width: 100px; /* Won't shrink below 100px */
}
```

### Card Grid with Min-Width: 0
```css
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px;
  min-width: 0; /* Allows card to shrink below 300px when needed */
  padding: 1.5rem;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.card h3 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* Truncates long titles */
}
```

### Image That Shouldn't Shrink
```css
.media-object {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.media-image {
  flex-shrink: 0; /* Image won't be compressed */
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.media-body {
  flex: 1;
  min-width: 0; /* Text wraps, doesn't overflow */
}
```

### High Shrink Value for Expelling Content
```css
.expel-item {
  flex-shrink: 999; /* Extreme shrink — this item will shrink to minimum first */
  /* Items with higher shrink values reduce more aggressively */
  /* Combined with min-width: 0, this item can almost disappear */
  min-width: 0;
}
```

## Visual Explanation

```
Container: 400px, Items: 200px basis each (600px total)
Overflow: 200px

flex-shrink: 1, 1, 1 (all default)
┌────────────────────────────────────┐
│ [ 133px ] [ 133px ] [ 134px ]      │
│ -67        -67        -66          │
└────────────────────────────────────┘
Each loses ~67px

flex-shrink: 1, 0, 1 (middle doesn't shrink)
┌────────────────────────────────────┐
│ [ 100px ] [ 200px ] [ 100px ]      │
│ -100         0        -100         │
└────────────────────────────────────┘
Middle stays at 200px, others absorb all overflow

flex-shrink: 1, 3, 1 (middle shrinks 3× more)
┌────────────────────────────────────┐
│ [ 120px ] [ 160px ] [ 120px ]      │
│ -80        -120       -80          │
└────────────────────────────────────┘
Middle loses 1.5× what others lose

Minimum content size behavior:
┌────────────────────────────────────────┐
│ [Short] [A very long word] [Short]     │
│ The middle item won't shrink below     │
│ "A" "very" "long" "word" widths       │
│ Unless min-width: 0 is set            │
└────────────────────────────────────────┘
```

## Common Mistakes
1. **Items not shrinking at all**: The minimum content size is preventing further shrinking. Set `min-width: 0` on the item to allow it to shrink below its content size.
2. **Using `flex-shrink: 0` everywhere**: This prevents responsiveness. Only use it on items that must maintain size (logos, icons, sidebars).
3. **Confusing shrink with basis/witdth**: Setting `width: 250px` does NOT prevent an item from shrinking. You must set `flex-shrink: 0` to prevent shrinking.
4. **Assuming shrink works symmetrically to grow**: Shrink distribution is weighted by `flex-basis` × `flex-shrink`, not just `flex-shrink` ratio. Items with larger basis shrink more.
5. **Setting shrink higher than needed**: A value of `1` is usually sufficient. Higher values (`999`) create extreme behavior that's hard to predict.
6. **Not accounting for `white-space: nowrap`**: Text with `nowrap` creates a large minimum content size that prevents shrinking.
7. **Expecting shrink to work without `flex-basis`**: Without explicit `flex-basis`, the shrink calculation uses content size, which is unpredictable.
8. **Using `flex-shrink` when `overflow-x: auto` is the better solution**: Sometimes scrolling is better than shrinking content to unreadable sizes.

## Best Practices
1. **Keep `flex-shrink: 1` (default) for most items** — enables responsive shrinking behavior
2. **Use `flex-shrink: 0` for fixed elements** — sidebars, logos, icons, images that must maintain size
3. **Set `min-width: 0` when flex items won't shrink as expected** — allows shrinking below content size
4. **Use the `flex` shorthand** (`flex: 1 1 300px`) rather than individual shrink property
5. **Test with real content** — long words, images, and headings can all prevent expected shrinking
6. **Combine `flex-shrink: 0` with `width`** for truly fixed-size items
7. **Use `overflow: hidden` or `text-overflow: ellipsis`** alongside `min-width: 0` for graceful overflow
8. **Avoid extreme shrink values** — they create unpredictable behavior; use media queries instead
9. **Apply `min-width` alongside `flex-shrink: 0`** when items should maintain a minimum even when shrinking is allowed
10. **Remember that `flex-shrink` only applies when items overflow** — if items fit comfortably, shrink has no effect

## Accessibility Considerations
- **Shrinking text too much makes it unreadable** — set `min-width` or use responsive breakpoints to maintain readability
- Ensure interactive elements (buttons, links) don't shrink below 44×44px touch target size (WCAG 2.2)
- Use `min-width` and `min-height` as accessibility safeguards on interactive flex items
- `flex-shrink: 0` on navigation items ensures menus remain usable on small screens
- Test at 200% zoom — content that shrinks at normal size may become illegible when zoomed
- Items with `white-space: nowrap` and insufficient shrink can cause horizontal overflow on small viewports
- Consider using `overflow: auto` instead of aggressive shrinking for data tables and navigation

## Performance Considerations
- `flex-shrink` calculation is slightly more expensive than `flex-grow` due to the weighted basis calculation
- The performance difference is negligible — modern browsers handle it efficiently
- Changing `flex-shrink` triggers layout recalculation
- No paint or compositing implications
- The minimum content size calculation is built into the browser — no additional cost
- For containers with many flex items (100+), the calculation scales linearly
- CSS containment (`contain: layout`) can isolate shrink calculations

## Browser Compatibility

| Feature | Chrome | Edge | Firefox | Safari | Opera | IE |
|---|---|---|---|---|---|---|
| `flex-shrink` | 29+ | 12+ | 20+ | 9+ | 17+ | 11 |
| `flex-shrink: 0` | 29+ | 12+ | 20+ | 9+ | 17+ | 11 |
| `flex` shorthand | 29+ | 12+ | 20+ | 9+ | 17+ | 11 (partial) |
| Minimum content size behavior | 29+ | 12+ | 20+ | 9+ | 17+ | 11 |
| `min-width: 0` override | 29+ | 12+ | 20+ | 9+ | 17+ | 11 |
| IE10 (-ms-flex-negative) | — | — | — | — | — | 10 |

## Summary Notes
- `flex-shrink` controls how items **shrink** when there's negative free space (overflow)
- **Default is `1`** — items shrink proportionally by default
- `flex-shrink: 0` **prevents an item from shrinking** — it keeps its `flex-basis` size
- Shrink calculation is **weighted by `flex-basis`**: items with larger basis shrink more with the same shrink factor
- **Minimum content size** prevents items from shrinking below their content (longest word, intrinsic image size)
- Override minimum content size with `min-width: 0` or `overflow: hidden`
- Always use the `flex` shorthand (`flex: 1 1 300px`) rather than individual shrink
- `flex-shrink: 0` is essential for: logos, fixed-width sidebars, icons, images, and any element that must maintain size
- For extreme responsiveness, combine `flex-shrink: 1` with `min-width` to define both flexibility and constraints
- Test with real content at narrow viewports to ensure expected shrink behavior
- Accessibility safeguard: don't let interactive elements shrink below 44×44px touch targets
