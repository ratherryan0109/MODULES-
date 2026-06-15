# CSS Alignment

## Introduction
CSS provides multiple ways to align elements horizontally and vertically. Understanding alignment techniques is essential for creating polished, professional layouts. This module covers text alignment, vertical alignment, centering with margins, and alignment in Flexbox and Grid contexts.

## Learning Objectives
1. Master text-align for horizontal text alignment
2. Use vertical-align for inline and inline-block elements
3. Center block elements with margin: auto
4. Understand absolute positioning for centering
5. Align content in Flexbox containers
6. Align content in CSS Grid containers
7. Implement vertical centering techniques
8. Use CSS transforms for precise positioning
9. Apply alignment in responsive designs
10. Debug common alignment issues

## Theory

### Horizontal Alignment
- `text-align`: Aligns inline content within a block container (left, right, center, justify)
- `margin: auto`: Centers block elements horizontally when a width is set
- Flexbox/Grid alignment properties (justify-content, justify-items, justify-self)

### Vertical Alignment
- `vertical-align`: Aligns inline/inline-block elements within a line box (top, middle, bottom, baseline)
- Flexbox/Grid: align-items, align-self (cross-axis alignment)
- Absolute positioning + transform (the most reliable cross-browser vertical centering method)

### The text-align Property in Depth
The `text-align` property controls alignment of inline content within a block container. Beyond the common values (`left`, `right`, `center`, `justify`), CSS Text Level 3 introduces `start` and `end` values which are writing-mode-aware. In left-to-right text, `start` equals `left` and `end` equals `right`. In right-to-left text (like Arabic or Hebrew), `start` equals `right` and `end` equals `left`. Using `start` and `end` is the more future-proof approach for internationalized websites.

### The vertical-align Property in Depth
`vertical-align` applies to inline and inline-block elements, specifying their alignment within the line box. The `baseline` value (default) aligns the element's baseline with the parent's baseline. `top` aligns the top of the element with the top of the line box. `middle` aligns the middle of the element with the baseline of the parent plus half the x-height. Understanding these subtle differences is important for precise alignment of icons, form elements, and inline-block layouts.

### The Challenge of Vertical Centering
Historically, vertical centering has been one of the most difficult problems in CSS. Before Flexbox, developers relied on various hacks: table display, absolute positioning with transforms, line-height matching, and padding tricks. Flexbox and Grid have finally made vertical centering straightforward, but understanding the older techniques is still important for legacy code maintenance.

### Aligning in Flexbox vs Grid vs Block

| Context | Main Axis | Cross Axis |
|---------|-----------|------------|
| Block | `margin: auto` (horizontal) | Complex (needs positioning) |
| Flexbox | `justify-content` | `align-items` / `align-self` |
| Grid | `justify-items` / `justify-self` | `align-items` / `align-self` |

## Syntax

### Text Alignment
```css
.text {
  text-align: left | right | center | justify | start | end;
}
```

### Vertical Alignment
```css
.element {
  vertical-align: baseline | top | middle | bottom | text-top | text-bottom;
}
```

### Margin Auto Centering
```css
.block {
  width: 300px;
  margin: 0 auto; /* Horizontal centering */
}
```

### Flexbox Centering
```css
.parent {
  display: flex;
  align-items: center;     /* Vertical centering */
  justify-content: center; /* Horizontal centering */
}
```

### Grid Centering
```css
.parent {
  display: grid;
  place-items: center; /* Centers both horizontally and vertically */
}
```

## Alignment Methods Comparison

| Method | Horizontal | Vertical | Works On |
|--------|------------|----------|----------|
| `text-align` | ✓ | ✗ | Inline content |
| `vertical-align` | ✗ | ✓ | Inline/inline-block |
| `margin: auto` | ✓ | ✗ | Block elements with width |
| `position + transform` | ✓ | ✓ | Positioned elements |
| Flexbox | ✓ | ✓ | Flex items |
| Grid | ✓ | ✓ | Grid items |
| `line-height` | ✗ | ✓ | Single-line text |

## Examples

### Center Text
```css
.center-text {
  text-align: center;
}
```

### Center Block Element
```css
.center-block {
  width: 50%;
  margin: 0 auto;
}
```

### Vertical Center with Flexbox
```css
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
}
```

### Absolute Center with Transform
```css
.absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

This technique works because `top: 50%` positions the top edge at 50% of the parent's height, then `transform: translate(-50%, -50%)` shifts the element back by 50% of its own width and height, resulting in perfect centering.

### Center with Line-Height (Single Line)
```css
.single-line {
  height: 100px;
  line-height: 100px; /* Matches height for vertical centering */
  text-align: center;
}
```

### Vertical-Align for Inline Elements
```css
.icon-with-text {
  vertical-align: middle; /* Aligns icon with text */
}
.inline-block-card {
  display: inline-block;
  width: 200px;
  vertical-align: top; /* All cards align to top */
}
```

### Align Self in Flexbox
```css
.flex-container {
  display: flex;
  height: 200px;
  align-items: flex-start; /* Default for all items */
}
.item-center {
  align-self: center; /* This item centers vertically */
}
.item-end {
  align-self: flex-end; /* This item goes to bottom */
}
```

### Grid Center with place-items
```css
.grid-center {
  display: grid;
  place-items: center;
  height: 300px;
}
```

## Visual Explanation

```
text-align: center
┌────────────────────────────────────┐
│         Centered Text              │
├────────────────────────────────────┤
│  text-align: left       │
│            text-align: right       │
└────────────────────────────────────┘

margin: 0 auto
┌────────────────────────────────────┐
│        ┌──────────────────┐        │
│        │  Centered Block  │        │
│        │  margin: 0 auto  │        │
│        └──────────────────┘        │
└────────────────────────────────────┘

Flexbox Centering
┌────────────────────────────────────┐
│  ┌─┐                               │
│  │ │  justify-content: center      │
│  │ │  align-items: center          │
│  └─┘                               │
└────────────────────────────────────┘

Absolute Center with Transform
┌────────────────────────────────────┐
│                                    │
│          ┌──────────────┐          │
│          │              │          │
│          │top: 50%      │          │
│          │left: 50%     │          │
│          │translate(-50%,│         │
│          │  -50%)       │          │
│          │              │          │
│          └──────────────┘          │
│                                    │
└────────────────────────────────────┘
```

## Common Mistakes

1. **Using text-align for block centering**: Only works for inline content, not block elements
2. **margin: auto without width**: Won't center without explicit width or `max-width`
3. **vertical-align not working**: Only works on inline/inline-block elements, not block elements
4. **Forgetting transform for absolute centering**: `top: 50%` alone centers top edge, not the middle of the element
5. **Not setting height for vertical centering**: Container needs explicit height for most vertical centering techniques
6. **Justified text causing readability issues**: `text-align: justify` can create uneven word spacing, especially in narrow columns
7. **Using margin: auto with position: absolute**: `margin: auto` for centering only works with block layout, not absolute positioning (unless all four offsets are set)

## Best Practices

1. Use `text-align: center` for text, icons, and inline elements
2. Use `margin: auto` for fixed-width block centering
3. Use Flexbox for complex centering needs
4. Use Grid for 2D alignment with `place-items: center`
5. Use `transform` for absolute positioning centering
6. Always set container height for vertical centering
7. Test alignment at different viewport sizes
8. Use `justify-content` and `align-items` together for Flexbox centering
9. For responsive layouts, prefer Flexbox or Grid centering over absolute positioning
10. Avoid using `text-align: justify` in narrow containers (under 300px)

## Accessibility

- Justified text can create readability issues (uneven spacing, rivers of white space)
- Ensure centered content maintains reading order
- Test with zoom levels up to 200%
- Use appropriate heading hierarchy
- Avoid using alignment alone to convey meaning (e.g., "the centered text is the title") — use semantic HTML
- Right-aligned text can be harder to read for long passages, especially for users with dyslexia
- When using `text-align: justify`, consider hyphenation (`hyphens: auto`) for better readability

## Performance

- `transform` for centering uses GPU acceleration
- Flexbox/Grid centering is well-optimized in modern browsers
- `text-align` has no performance impact
- Avoid excessive nesting of centered containers
- Absolute positioning with transform avoids layout reflows (element is composited)
- `margin: auto` triggers layout calculations but has minimal performance impact for simple layouts

## Browser Compatibility

| Method | Chrome | Firefox | Safari | Edge | IE |
|--------|--------|---------|--------|------|----|
| text-align | ✓ | ✓ | ✓ | ✓ | ✓ |
| vertical-align | ✓ | ✓ | ✓ | ✓ | ✓ |
| margin: auto | ✓ | ✓ | ✓ | ✓ | ✓ |
| Flexbox centering | ✓ 29+ | ✓ 20+ | ✓ 9+ | ✓ 12+ | Partial* |
| Grid centering | ✓ 57+ | ✓ 52+ | ✓ 10.1+ | ✓ 16+ | ✗ |
| `place-items` | ✓ 59+ | ✓ 53+ | ✓ 11+ | ✓ 16+ | ✗ |
| `transform: translate` centering | ✓ | ✓ | ✓ | ✓ | ✓ 9+ |

*IE 10-11 support Flexbox with vendor prefixes and have several known bugs

### Right-to-Left (RTL) Alignment Considerations
When building websites in RTL languages (Arabic, Hebrew, Persian), alignment behavior changes:
- `text-align: left` becomes `text-align: right` visually
- Flexbox's `justify-content: flex-start` swaps direction
- Use logical properties: `text-align: start` instead of `text-align: left`
- Use `margin-inline: auto` instead of `margin: 0 auto` for logical centering
- Consider `inset-inline-start` and `inset-inline-end` for positioned elements

Logical properties and values make it much easier to support both LTR and RTL layouts with a single codebase.

## Summary Notes

- `text-align: center` for inline / inline-block children
- `margin: 0 auto` for block elements with explicit width
- `vertical-align` for inline/inline-block within a line box
- Flexbox: `align-items` (cross axis), `justify-content` (main axis)
- Grid: `align-items`, `justify-items`, `place-items` (shorthand)
- Absolute center: `top: 50%; left: 50%; transform: translate(-50%, -50%)`
- Always set explicit height for vertical centering
- Test alignment at various screen sizes
- Use `place-items: center` in Grid for 2D centering in one property
- Flexbox and Grid provide the most robust alignment solutions
- Avoid `text-align: justify` in narrow containers
- `line-height` matching height works for single-line text centering
- Use `gap` for spacing in Flexbox/Grid instead of margin
