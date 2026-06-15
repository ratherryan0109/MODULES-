# Flex Direction

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
The `flex-direction` property defines the direction of the **main axis** in a flex container. It determines whether flex items are laid out in a horizontal row or a vertical column, and in which direction they flow — normal (left-to-right or top-to-bottom) or reversed (right-to-left or bottom-to-top). This is the most fundamental flex container property because it controls which axis `justify-content` and `align-items` operate on. Choosing the right `flex-direction` is the first decision you make when building a flex layout — every other alignment property depends on it.

## Learning Objectives
1. Understand how `flex-direction` controls the main axis direction and how the cross axis responds
2. Use all four values confidently: `row`, `row-reverse`, `column`, `column-reverse`
3. Predict how items flow and align with each direction value
4. Understand how changing `flex-direction` swaps the behavior of `justify-content` and `align-items`
5. Combine `flex-direction` with other flex properties (`flex-wrap`, `gap`, `align-items`) for complex layouts
6. Recognize the accessibility impact of reverse values and use them responsibly
7. Use `column` direction for stacked layouts, vertical navigation, and sticky footer patterns
8. Debug layout issues caused by incorrect `flex-direction`
9. Apply `flex-direction` in real-world patterns (nav bars, hero sections, card stacks)
10. Understand how writing direction (LTR vs RTL) interacts with `flex-direction`

## Theory

### The Main Axis and Cross Axis
`flex-direction` is the master control for the flex axes:

| Value | Main Axis Direction | Cross Axis Direction | `justify-content` Controls | `align-items` Controls |
|---|---|---|---|---|
| `row` (default) | Left → Right | Top → Bottom | Horizontal spacing | Vertical alignment |
| `row-reverse` | Right → Left | Top → Bottom | Horizontal spacing (flipped) | Vertical alignment |
| `column` | Top → Bottom | Left → Right | Vertical spacing | Horizontal alignment |
| `column-reverse` | Bottom → Top | Left → Right | Vertical spacing (flipped) | Horizontal alignment |

This axis swap is the source of most Flexbox confusion. When you change `flex-direction` from `row` to `column`, `justify-content` stops controlling horizontal alignment and starts controlling vertical alignment. Similarly, `align-items` switches from vertical to horizontal.

### How `flex-direction` Affects `flex-basis`
`flex-basis` sets the initial main-axis size of a flex item. Since `flex-direction` defines the main axis:
- In `row`/`row-reverse`: `flex-basis` controls **width**
- In `column`/`column-reverse`: `flex-basis` controls **height**

This means `flex-basis: 200px` in a `row` creates items that are 200px wide. In a `column`, the same `flex-basis: 200px` creates items that are 200px tall.

### Writing Direction and `flex-direction`
`row` flows in the direction of the writing mode:
- **LTR** (English, Spanish): left → right
- **RTL** (Arabic, Hebrew): right → left

`row-reverse` always flows opposite to the writing direction. `column` and `column-reverse` are unaffected by writing direction — they always flow top-to-bottom and bottom-to-top respectively.

## Syntax and Code Examples

### Basic Direction Values
```css
/* Default: items in a horizontal row */
.row-direction {
  display: flex;
  flex-direction: row; /* default — left to right */
}

/* Reversed row: items flow right to left */
.row-reverse-direction {
  display: flex;
  flex-direction: row-reverse;
}

/* Column: items stack vertically */
.column-direction {
  display: flex;
  flex-direction: column; /* top to bottom */
}

/* Reversed column: items stack bottom to top */
.column-reverse-direction {
  display: flex;
  flex-direction: column-reverse;
}
```

### Navigation Bar (row)
```css
.navbar {
  display: flex;
  flex-direction: row; /* Default, explicit for clarity */
  align-items: center;
  gap: 2rem;
  padding: 1rem 2rem;
  background: #1e293b;
  color: #fff;
}
```

### Vertical Navigation (column)
```css
.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  width: 250px;
  background: #f1f5f9;
}

.sidebar-nav a {
  padding: 0.75rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  color: #334155;
  transition: background 0.2s;
}

.sidebar-nav a:hover {
  background: #e2e8f0;
}
```

### Sticky Footer Pattern (column)
```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
}

main {
  flex: 1; /* Takes all available vertical space */
}

footer {
  padding: 2rem;
  background: #1e293b;
  color: #fff;
}
```

### Centered Hero Section (column)
```css
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertical centering */
  align-items: center;     /* Horizontal centering */
  min-height: 80vh;
  text-align: center;
  padding: 2rem;
}

/* Note: In row direction, justify-content would be horizontal
   But in column, it becomes vertical — axis swap in action! */
```

### Chat Message Layout (column-reverse)
```css
.chat-window {
  display: flex;
  flex-direction: column-reverse;
  /* Newest messages appear at the bottom automatically */
  height: 400px;
  overflow-y: auto;
  padding: 1rem;
  gap: 0.5rem;
}

.message {
  padding: 0.75rem;
  background: #f1f5f9;
  border-radius: 8px;
}
```

### Right-Aligned Action Bar (row-reverse)
```css
.action-bar {
  display: flex;
  flex-direction: row-reverse;
  gap: 0.5rem;
  padding: 1rem;
  /* Items flow right-to-left: buttons appear right-aligned */
}

/* First button in DOM ends up on the right side */
.action-bar .primary { /* First in DOM, appears on right */ }
.action-bar .secondary { /* Second in DOM, appears next to left */ }
```

### Combining with Flex-Wrap
```css
.card-columns {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 600px; /* Column layout wraps when height is full */
  gap: 1rem;
}

.card-columns .card {
  flex: 0 0 auto;
  width: 250px; /* In column, width is cross-axis, height is main-axis */
}
```

## Visual Explanation

```
flex-direction Values and Their Axes:

flex-direction: row (default)
   Main Axis → (horizontal)
   ┌─────────────────────────────────────────┐
   │ (main-start) → [1] [2] [3] → (main-end) │
   │ Cross Axis ↓                             │
   │ (cross-start)                            │
   │ (cross-end)                              │
   └─────────────────────────────────────────┘

flex-direction: row-reverse
   ← Main Axis (horizontal, reversed)
   ┌─────────────────────────────────────────┐
   │ (main-end) ← [3] [2] [1] ← (main-start) │
   └─────────────────────────────────────────┘

flex-direction: column
   Main Axis ↓ (vertical)
   ┌─────────────────┐
   │ (main-start)     │
   │ [1]              │
   │ [2]              │
   │ [3]              │
   │ (main-end)       │
   └─────────────────┘

flex-direction: column-reverse
   ↑ Main Axis (vertical, reversed)
   ┌─────────────────┐
   │ (main-end)       │
   │ [3]              │
   │ [2]              │
   │ [1]              │
   │ (main-start)     │
   └─────────────────┘
```

## Common Mistakes
1. **Thinking `row-reverse` or `column-reverse` changes the cross axis**: It does NOT — only the main axis direction reverses. The cross axis stays the same.
2. **Confusing `justify-content` behavior when changing direction**: `justify-content` aligns along the main axis. In `row`, it controls horizontal spacing. In `column`, it controls vertical spacing. This swap is the #1 source of Flexbox confusion.
3. **Expecting `align-items: center` to vertically center in `column`**: In `column`, `align-items` controls horizontal alignment (cross axis), NOT vertical. Use `justify-content: center` for vertical centering in a column.
4. **Using `column-reverse` without considering accessibility**: `column-reverse` reverses visual order but not DOM order — keyboard and screen reader order remain unchanged.
5. **Not setting `min-height` with `column` direction**: When using `flex-direction: column` with `flex: 1` on an item, the parent needs a defined height (or `min-height`) for the item to expand into.
6. **Forgetting writing direction affects `row`**: In RTL languages, `row` flows right-to-left by default, which can surprise developers testing only in LTR.

## Best Practices
1. **Default to `row`** unless you specifically need vertical layout — most UI components are horizontal by nature
2. **Use `column` for stacked layouts** — form fields, vertical navigation, card stacks, mobile layouts
3. **Use `column` with `flex: 1` for sticky footer** — the classic `display: flex; flex-direction: column; min-height: 100vh` pattern
4. **Use `row-reverse` and `column-reverse` sparingly** — they change only visual order, which creates accessibility mismatches
5. **Remember that `flex-direction` swaps axis roles** — when you change direction, mentally re-evaluate which properties control which axis
6. **Combine `column` with `flex-wrap: wrap`** for multi-column layouts where items fill column-by-column
7. **Use `column-reverse` only for cosmetic patterns** — like chat message lists where newest appears at the bottom
8. **Document explicit `flex-direction: row`** even though it's the default — it makes your intent clear in the code
9. **Test `row-reverse` with screen readers** — ensure the visual layout doesn't create a confusing reading order
10. **Consider writing direction** when using `row` for international layouts (RTL languages)

## Accessibility Considerations
- **`row-reverse` and `column-reverse` change visual order but NOT DOM order** — this is the most critical accessibility concern
- Screen readers navigate in DOM order, not visual order — reverse directions create disconnect between visual and auditory experience
- Keyboard tab order follows DOM order — `row-reverse` can make Tab navigation feel random to users
- Never use reverse values for content where sequence matters (steps, instructions, timelines)
- Acceptable uses for reverse values: decorative elements, icon rows, toolbars, chat messages with auto-scroll
- When using `column-reverse` for chat, ensure the input area is at the bottom in both visual and DOM order
- Always test with keyboard-only navigation when using non-default `flex-direction` values
- Provide `aria-flowto` or other ARIA attributes if visual order must differ from DOM order (complex scenarios)

## Performance Considerations
- Changing `flex-direction` has negligible performance impact — axis recalculation is efficient
- The browser handles direction changes during layout recalculation (triggered by CSS changes or viewport resizes)
- `flex-direction: column` may have slightly different performance characteristics in early browser implementations, but modern browsers handle both equally well
- No GPU or compositing implications from changing `flex-direction`
- When animating or transitioning `flex-direction`, be aware that it's typically not animatable — changes happen instantly
- Using `flex-direction` with `flex-wrap: wrap` in column mode can be more expensive layout-wise because the browser must calculate both axis constraints

## Browser Compatibility

| Feature | Chrome | Edge | Firefox | Safari | Opera | IE |
|---|---|---|---|---|---|---|
| `flex-direction: row` | 29+ | 12+ | 20+ | 9+ | 17+ | 11 |
| `flex-direction: row-reverse` | 29+ | 12+ | 20+ | 9+ | 17+ | 11 |
| `flex-direction: column` | 29+ | 12+ | 20+ | 9+ | 17+ | 11 |
| `flex-direction: column-reverse` | 29+ | 12+ | 20+ | 9+ | 17+ | 11 |
| IE10 (old spec) | — | — | — | — | — | 10 (-ms-flex-order, -ms-flex-direction) |
| Writing direction support | Full | Full | Full | Full | Full | 11 (partial) |

## Summary Notes
- `flex-direction` defines the **main axis** direction — the primary axis for item layout
- Four values: `row` (default, LTR), `row-reverse` (RTL), `column` (TTB), `column-reverse` (BTT)
- `flex-direction` determines **which axis each alignment property controls**:
  - `justify-content` aligns along the main axis
  - `align-items` aligns along the cross axis
- `flex-basis` sizes along the main axis — **width** in `row`, **height** in `column`
- Changing `flex-direction` swaps the behavior of `justify-content` and `align-items` — this is the most common source of Flexbox confusion
- **Reverse values** change visual order only — DOM order, tab order, and screen reader order remain unchanged
- **Use `column`** for sticky footers (`min-height: 100vh` + `flex: 1`), hero sections, vertical navs, stacked cards
- **Use `row-reverse`** for right-aligned action bars, RTL layouts, reverse-ordered navigation
- **Use `column-reverse`** for chat message lists, bottom-aligned content, scrollable reverse timelines
- LTR vs RTL writing directions interact with `row` but not `column` values
- Always test reverse values with keyboard navigation and screen readers
