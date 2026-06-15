# CSS Opacity

## Module Overview
Master the `opacity` property and `rgba()` / `hsla()` color functions to control element transparency in CSS. This module covers the behavior of opacity at the element level versus the color level, common pitfalls, and practical applications for visual effects.

## Introduction
Opacity and transparency are fundamental tools for creating visual depth, hover effects, overlays, and subtle UI interactions. CSS provides two distinct approaches: the `opacity` property (which affects an entire element and all its children) and alpha color channels via `rgba()`/`hsla()` (which affect only the specific property they are applied to). Understanding when to use each is critical for predictable, accessible results.

## Learning Objectives
1. Understand the `opacity` property and its inheritance behavior
2. Distinguish between `opacity` and `rgba()`/`hsla()` alpha transparency
3. Apply transparency for visual layering and hover effects
4. Handle cross-browser compatibility and accessibility concerns
5. Create fade-in/fade-out animations with opacity
6. Combine opacity with transforms for performant transitions
7. Use alpha transparency for backgrounds without affecting text
8. Debug opacity-related stacking context issues

## Theory

### The opacity Property
The `opacity` property accepts values from `0` (fully transparent) to `1` (fully opaque). Values in between create partial transparency. Opacity affects the entire element including all children — a child element cannot be more opaque than its parent. For example, if a parent has `opacity: 0.5`, a child with `opacity: 1` will appear at 50% opacity (0.5 × 1 = 0.5 effective opacity).

### Alpha Transparency in Colors
Alpha transparency via `rgba()` (RGB with alpha) or `hsla()` (HSL with alpha) only affects the specific property being styled. This allows you to make a background semi-transparent while keeping the text fully opaque. The alpha channel accepts values from `0` (transparent) to `1` (opaque), and can also use percentage notation in modern CSS.

### The Stacking Context Effect
One of the most surprising behaviors of `opacity` is that any value below `1` creates a new stacking context. This means an element with `opacity: 0.99` will start a new stacking context, potentially changing the visual layering of positioned child elements. This is the same behavior caused by `transform`, `filter`, and `position` with `z-index`.

### opacity: 0 vs visibility: hidden vs display: none
These three approaches to hiding content have important differences:
- `opacity: 0`: Element is invisible but still takes up space and is interactive (clickable, focusable)
- `visibility: hidden`: Element is invisible, takes up space, but is NOT interactive
- `display: none`: Element is removed from layout completely, not interactive, not accessible

## Syntax

```css
/* Element-level transparency */
.faded {
  opacity: 0.5; /* 50% transparent, affects all children */
}

/* Color-level transparency */
.alpha-bg {
  background: rgba(0, 120, 255, 0.3);
  color: #000; /* text remains fully opaque */
}

/* HSL with alpha */
.alpha-hsl {
  background: hsla(210, 100%, 50%, 0.3);
}

/* Modern syntax (CSS Color Level 4) */
.alpha-modern {
  background: rgb(0 120 255 / 0.3);
  background: hsl(210 100% 50% / 0.3);
}
```

## Examples

### Basic Opacity
```css
.faded {
  opacity: 0.5; /* 50% transparent */
}
```

### Alpha on Background Only
```css
.alpha-bg {
  background: rgba(0, 120, 255, 0.3);
  color: #000; /* text remains fully opaque */
}
```

### Hover Opacity Transition
```css
.card {
  opacity: 0.8;
  transition: opacity 0.3s ease;
}
.card:hover {
  opacity: 1;
}
```

### Fade-In Animation
```css
.fade-in {
  animation: fadeIn 0.5s ease forwards;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Overlay with Alpha Background
```css
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.overlay-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
}
```

### Disabled State
```css
button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
```

### Opacity with will-change for Performance
```css
.animated-element {
  will-change: opacity;
  transition: opacity 0.3s ease;
}
```

## Visual Explanation

```
Opacity on Parent Affects Children:
┌──────────────────────────────┐
│  Parent (opacity: 0.5)       │ ← 50% transparent
│  ┌────────────────────────┐  │
│  │ Child (opacity: 1)     │  │ ← Still 50% transparent
│  │ (effective: 0.5 × 1)   │  │   because parent limits it
│  └────────────────────────┘  │
└──────────────────────────────┘

Alpha on Background (rgba):
┌──────────────────────────────┐
│  ┌────────────────────────┐  │
│  │ Background: rgba(0,0,0,│  │ ← Semi-transparent bg
│  │ 0.3)                   │  │
│  │ Text: #000 (opaque)    │  │ ← Fully readable text
│  └────────────────────────┘  │
└──────────────────────────────┘

Opacity Stacking Context:
opacity < 1 creates stacking context
┌──────────────────────────────┐
│ Element (opacity: 0.99)      │
│ ┌── stacking context ──────┐ │
│ │ Children stacked within  │ │
│ └──────────────────────────┘ │
└──────────────────────────────┘
```

## Common Mistakes

1. **Using `opacity` on a parent makes all children transparent too** — children cannot be more opaque than their parent
2. **`visibility: hidden` vs `opacity: 0`**: `opacity: 0` does not remove from accessibility tree; `visibility: hidden` does
3. **Text with opacity < 1 may fail WCAG contrast requirements** — transparency reduces effective contrast ratio
4. **Opacity creates stacking contexts**: `opacity: 0.99` unintentionally creates a stacking context, potentially changing element layering
5. **Animating opacity on large elements** can cause performance issues without GPU compositing
6. **Not using transition with opacity**: Abrupt opacity changes without transitions feel jarring
7. **Using `opacity: 0` for invisible interactive elements**: The element is still interactive and focusable, which can confuse keyboard users

## Best Practices

1. Use `opacity` for element-wide fade effects
2. Use `rgba()`/`hsla()` for background transparency without affecting text
3. Always add `transition: opacity 0.3s` for hover effects
4. Use `will-change: opacity` when animating opacity on large elements
5. Prefer `opacity` over `visibility` for fade animations (opacity is animatable)
6. Use `opacity: 0` + `pointer-events: none` to disable interaction on invisible elements
7. Combine opacity with transform for smooth, performant animations
8. Use CSS custom properties for reusable opacity values: `--hover-opacity: 0.8`
9. Test opacity-based hover effects with keyboard focus as well as mouse hover
10. When hiding content with `opacity: 0`, use `aria-hidden="true"` if the content should not be announced by screen readers

## Accessibility

- Ensure sufficient contrast when using transparency on text (WCAG AA requires 4.5:1 for normal text)
- Use `rgba()` for backgrounds without affecting text opacity
- Avoid relying solely on color/transparency to convey information
- `opacity: 0` does not hide content from screen readers — use `visibility: hidden` or `aria-hidden` instead
- Fade animations should respect `prefers-reduced-motion`
- Elements with reduced opacity for disabled states should also use `aria-disabled="true"`
- Test all opacity-based effects with high contrast mode enabled

## Performance

- Animating `opacity` is GPU-accelerated in modern browsers
- Opacity triggers compositing, which creates a new layer
- Use `will-change: opacity` to promote the element to a compositor layer before animation starts
- Avoid animating opacity on elements with complex backgrounds or shadows (repaints are more expensive)
- `opacity: 0` on large elements still requires compositing — use `visibility: hidden` to skip painting
- Alpha transparency in `rgba()` backgrounds has negligible performance impact
- Combining `opacity` with `transform` keeps animations on the compositor thread

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|----|
| `opacity` | ✓ | ✓ | ✓ | ✓ | ✓ 9+ |
| `rgba()` | ✓ | ✓ | ✓ | ✓ | ✓ 9+ |
| `hsla()` | ✓ | ✓ | ✓ | ✓ | ✓ 9+ |
| `opacity` animation | ✓ | ✓ | ✓ | ✓ | ✓ 10+ |
| CSS Color Level 4 syntax | ✓ 111+ | ✓ 108+ | ✓ 15+ | ✓ 111+ | ✗ |

`opacity` is supported in all modern browsers and IE9+. The CSS Color Level 4 syntax (e.g., `rgb(0 120 255 / 0.3)`) is supported in all current browser versions but not in IE.

## Summary Notes

- `opacity` controls element-wide transparency (0 = invisible, 1 = opaque)
- `rgba()` / `hsla()` provide per-property alpha control
- Children inherit parent opacity cumulatively
- `opacity < 1` creates a new stacking context
- Use `rgba()` for semi-transparent backgrounds with opaque text
- Opacity is GPU-accelerated and ideal for animations
- `opacity: 0` keeps element in layout and accessibility tree
- Combine with `pointer-events: none` to disable interaction on invisible elements
- Always test contrast with transparency applied
- Use `transition: opacity` for smooth fade effects
- Respect `prefers-reduced-motion` for opacity animations
- CSS Color Level 4 space-separated syntax is modern and cleaner
- Add `aria-hidden` when using opacity to visually hide but semantically remove content
