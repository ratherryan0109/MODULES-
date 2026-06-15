# Module 12: CSS Outline

## Table of Contents
1. Introduction
2. Learning Objectives
3. Theory
   - Outline Properties
   - Outline vs Border (Detailed Comparison)
   - Outline Width, Style, and Color
   - Outline-Offset
   - Outline for Focus Indicators
   - Focus-Visible for Keyboard-Only Focus
   - Debugging with Outline
   - Outline and Accessibility
4. Visual Explanation
5. Common Mistakes
6. Best Practices
7. Accessibility Considerations
8. Performance Considerations
9. Browser Compatibility
10. Summary Notes

## Introduction
The `outline` property draws a line around an element, outside the border. Unlike borders, outlines don't affect the element's size or layout — they simply overlay on top of the element's box without shifting content. Outlines are primarily used for accessibility (focus indicators) and debugging. Outlines are always the same on all sides and cannot be individually styled per side.

Because outlines don't participate in the box model, they're ideal for visual feedback that shouldn't disrupt layout. This makes them the standard choice for focus indicators on buttons, links, and form controls. The introduction of `:focus-visible` has further refined outline usage, allowing developers to show focus indicators only for keyboard navigation while suppressing them for mouse clicks.

## Learning Objectives
By the end of this module, you will be able to:
- Set outline width, style, and color individually and via shorthand
- Use the `outline` shorthand property efficiently
- Understand the key differences between outline and border
- Use `outline-offset` to control outline positioning
- Apply outline for accessible focus indicators
- Use `:focus-visible` for keyboard-only focus styles
- Use outline for debugging element positions without layout impact
- Understand the accessibility implications of removing outlines

## Theory

### Outline Properties
Outlines have three sub-properties plus an offset:

```css
/* Individual properties */
outline-width: 2px;
outline-style: solid;
outline-color: blue;

/* Shorthand */
outline: 2px solid blue;

/* Offset (space between border and outline) */
outline-offset: 3px;
```

### Outline vs Border (Detailed Comparison)
While outlines and borders look similar visually, they behave very differently:

| Feature | Border | Outline |
|---------|--------|---------|
| Position | Between padding and margin | Outside the border |
| Affects layout | Yes (adds to element width/height) | No (overlaps margins, no layout impact) |
| Per-side styling | Yes (top, right, bottom, left individually) | No (all sides are identical) |
| Per-side visibility | Can set border-top without border-bottom | Cannot — outline applies to all sides or none |
| Rounded corners | Follows `border-radius` | Always rectangular, regardless of `border-radius` |
| Box model participation | Yes — adds to total dimensions | No — does not affect dimensions |
| Default use | Decorative frames, separators | Focus indicators, debugging |
| Color inheritance | Defaults to `currentColor` | Defaults to `currentColor` |
| Shorthand | `border: width style color;` | `outline: width style color;` |

### Outline Width, Style, and Color

**Outline Width:**
```css
outline-width: 1px;
outline-width: medium;  /* Typically 3px */
outline-width: thick;   /* Typically 5px */
```

**Outline Style:**
Same set of styles as borders: `solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset`, `none`, `hidden`.

**Outline Color:**
```css
outline-color: #4299e1;
outline-color: red;
outline-color: currentColor;  /* Default — matches text color */
outline-color: invert;        /* Inverts background for visibility (limited support) */
```

### Outline-Offset
The `outline-offset` property creates space (or overlap) between the border and the outline:
```css
/* Positive offset — outline pushed outward */
outline-offset: 3px;    /* 3px gap between border and outline */

/* Negative offset — outline drawn inside the border */
outline-offset: -3px;   /* Outline overlaps with the border area */
```

**Practical use of outline-offset:**
```css
/* Create a clear gap between focus ring and button */
.button {
  border: 2px solid transparent;
}
.button:focus-visible {
  outline: 3px solid #4299e1;
  outline-offset: 2px;  /* 2px gap between border and outline */
}

/* Inset outline (drawn inside the element) */
.card:focus-visible {
  outline: 2px solid white;
  outline-offset: -4px;  /* Outline drawn inside the card's edge */
}
```

### Outline for Focus Indicators
The most important use of outlines is providing visible focus indicators for keyboard accessibility:

```css
/* DON'T do this — removes focus indicator entirely */
button:focus { outline: none; }

/* DO this — custom focus indicator */
button:focus {
  outline: 3px solid #4299e1;
  outline-offset: 2px;
}
```

**The problem with `outline: none;`:**
When you remove the focus outline, keyboard users navigating with Tab have no visual indication of which element is focused. This makes the site unusable for users who rely on keyboard navigation (users with motor disabilities, screen reader users, power users who prefer keyboard).

If you must remove the default outline, you must provide an alternative focus indicator — typically using `box-shadow`, `background-color` changes, or a custom `border` (but remember borders affect layout):
```css
/* Alternative focus indicator using box-shadow (no layout impact) */
button:focus-visible {
  outline: none;  /* Remove default outline */
  box-shadow: 0 0 0 3px #4299e1;  /* Simulate outline with shadow */
}
```

### Focus-Visible for Keyboard-Only Focus
The `:focus-visible` pseudo-class applies focus styles only when the browser determines that focus should be visible — typically keyboard navigation, not mouse clicks:

```css
/* Focus styles only for keyboard users */
button:focus-visible {
  outline: 3px solid #4299e1;
  outline-offset: 2px;
}

/* Suppress focus ring for mouse users (but keep it accessible) */
button:focus:not(:focus-visible) {
  outline: none;
}
```

**Browser behavior with `:focus-visible`:**
- When clicking a button with a mouse → focus ring is suppressed
- When tabbing to the same button → focus ring is shown
- This provides the best experience for both mouse and keyboard users

**Polyfill for older browser support:**
```css
/* Fallback for browsers without :focus-visible support */
button:focus {
  outline: 3px solid #4299e1;  /* Always show focus ring */
}
/* Progressive enhancement */
button:focus:not(:focus-visible) {
  outline: none;  /* Hide when :focus-visible is supported and not active */
}
button:focus-visible {
  outline: 3px solid #4299e1;
}
```

### Debugging with Outline
Outlines are excellent for visualizing element boundaries without affecting layout:
```css
/* Visualize ALL elements - invaluable for layout debugging */
* { outline: 1px solid red; }

/* More targeted debugging */
.container > * { outline: 1px dashed blue; }
.suspected-bug-element { outline: 2px dotted red; }
```

**Why outline is better than border for debugging:**
- Doesn't shift elements (borders add to dimensions, causing layout shifts when turned on/off)
- Can be applied globally with a CSS rule
- Easy to toggle on/off
- Doesn't affect box model calculations

## Visual Explanation
```
Outline Position on the Box Model:

  ┌───── Margin ──────────────────────┐
  │  ┌─── Outline ────────────────┐  │ ← Outline OUTSIDE the border
  │  │  (does not affect layout)   │  │    Always rectangular
  │  │                            │  │
  │  │  ┌─── Border ──────────┐  │  │
  │  │  │  ┌─ Padding ──────┐ │  │  │
  │  │  │  │  ┌ Content ─┐ │ │  │  │
  │  │  │  │  │          │ │ │  │  │
  │  │  │  │  └──────────┘ │ │  │  │
  │  │  │  └───────────────┘ │  │  │
  │  │  └─────────────────────┘  │  │
  │  └───────────────────────────────┘  │
  └──────────────────────────────────────┘

Outline vs Border on a Rounded Element:

  ┌──────────────────────────────┐
  │                              │
  │  ╭──────────────────────╮    │ ← Border follows border-radius
  │  │                      │    │
  │  │     Element with     │    │
  │  │   border-radius: 10px│    │
  │  │                      │    │
  │  ╰──────────────────────╯    │
  │                              │
  └──────────────────────────────┘
  ↑                             ↑
  Outline: rectangular, does NOT follow border-radius

Outline-Offset:

  Positive offset (+3px):
    Element ──── border →   ← 3px gap →   ← outline →

  Negative offset (-3px):
    Element ──── outline → ← overlaps →   ← border →
```

## Common Mistakes
1. **Removing `outline:focus` without replacement**: The most harmful outline mistake — makes the site completely unusable for keyboard-dependent users
2. **Confusing outline with border**: They look similar but behave very differently. Outline doesn't affect layout and doesn't follow `border-radius`.
3. **Expecting per-side styling**: Outline applies to ALL sides equally — you cannot have outline only on the left side
4. **Expecting outline to follow `border-radius`**: Outline is always rectangular, even on elements with `border-radius: 50%`
5. **Using outline for decorative borders**: Outline is not meant for decoration — it's for focus indicators and debugging
6. **Not using `outline-offset` with focus indicators**: The default outline is drawn right against the element's edge — a small offset creates clearer visual separation
7. **Assuming `:focus-visible` is supported everywhere**: Always provide a `:focus` fallback for older browsers
8. **Using `outline-color: invert` expecting broad support**: `invert` is not supported in all browsers and may not work as expected

## Best Practices
- **Never** remove `outline: none` without providing an alternative focus indicator
- Use `:focus-visible` for keyboard-only focus styles with a `:focus` fallback
- Use `outline-offset: 2-3px` to separate the focus ring from the element's edge for clarity
- Use outline for debugging instead of border (outline doesn't shift elements)
- Consider using `box-shadow` as a focus-visible alternative if you need rounded focus indicators (shadows follow `border-radius`)
- Use `outline: 0` instead of `outline: none` for a slightly more concise removal
- Test focus indicators manually by tabbing through your site
- Ensure focus outline color has sufficient contrast against all possible backgrounds

```css
/* Best practice: accessible focus styles */
:focus-visible {
  outline: 3px solid #4299e1;
  outline-offset: 2px;
}

/* Rounded focus indicator using box-shadow (follows border-radius) */
:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px #4299e1;
}
```

## Accessibility Considerations
- Focus indicators are REQUIRED by WCAG 2.4.7 (Focus Visible): "Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible"
- WCAG 2.4.13 (Focus Appearance, Level AAA): Focus indicator must be at least 2px thick and have a contrast ratio of at least 3:1 against adjacent colors
- Never remove focus outlines — this is one of the most common accessibility failures on the web
- Always test focus indicators with keyboard navigation (Tab, Shift+Tab, arrow keys)
- Ensure focus indicators are visible in high contrast mode (Windows High Contrast Mode)
- Use `:focus-visible` to avoid showing focus rings after mouse clicks while maintaining keyboard accessibility
- For custom components (custom buttons, menus, modals), ensure all interactive elements have visible focus indicators
- Focus outline should be at least 2px thick for visibility

```css
/* Windows High Contrast Mode support */
@media (forced-colors: active) {
  :focus-visible {
    outline: 3px solid Highlight;  /* Uses system highlight color */
  }
}
```

## Performance Considerations
- Outlines have essentially zero performance impact — they don't trigger layout or repaint
- Unlike borders, outlines don't affect element dimensions, so toggling them doesn't cause layout shift
- Outline rendering is handled in the paint phase, not the layout phase
- Animating outline (changing color, width) is less performant than animating `transform` or `opacity`
- Using `outline: 1px solid red;` on `*` for debugging is safe to leave in development

## Browser Compatibility
| Property | Chrome | Firefox | Safari | Edge | Opera | IE |
|----------|--------|---------|--------|------|-------|----|
| outline-width | 1+ | 1.5+ | 1.2+ | 12+ | 7+ | 8+ |
| outline-style | 1+ | 1.5+ | 1.2+ | 12+ | 7+ | 8+ |
| outline-color | 1+ | 1.5+ | 1.2+ | 12+ | 7+ | 8+ |
| outline shorthand | 1+ | 1.5+ | 1.2+ | 12+ | 7+ | 8+ |
| outline-offset | 1+ | 1.5+ | 1.2+ | 15+ | 7+ | No |
| :focus-visible | 86+ | 85+ | 15.4+ | 86+ | 72+ | No |
| outline-color: invert | 1+ | 1.5+ | 1.2+ | 12+ | 7+ | 8+ |

Core outline properties are supported since IE8. `outline-offset` is supported in all modern browsers except IE. `:focus-visible` has excellent modern browser support (2023+) but is not available in older browsers.

## Summary Notes
- Outline is drawn outside the border and does NOT affect layout or element dimensions
- Shorthand: `outline: width style color; outline-offset: value;`
- Unlike border, outline cannot be styled per-side and does NOT follow `border-radius`
- `outline-offset` creates space between the border and the outline (positive = outward, negative = inward)
- **Never** remove `outline:focus` without providing an alternative focus indicator
- `:focus-visible` shows focus ring only for keyboard navigation (best UX for mouse + keyboard users)
- Always provide a `:focus` fallback for `:focus-visible` until browser support is universal
- Excellent for debugging element positions — apply `* { outline: 1px solid red; }` to see all boxes
- Outline has no performance cost and doesn't trigger layout shifts
- WCAG requires visible focus indicators — outline is the standard implementation
- Use `forced-colors` media query for Windows High Contrast Mode support
- `box-shadow` can be used as an alternative to outline if you need rounded focus indicators
