# CSS Backdrop Filter — Cheatsheet

## Basic Syntax

```css
.element {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* Safari support */
}
```

Always pair with a semi-transparent background:

```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px) saturate(1.5);
}
```

## Available Filter Functions

| Function | Syntax | Effect |
|---|---|---|
| **blur** | `blur(10px)` | Gaussian blur |
| **brightness** | `brightness(1.5)` | Brightness multiplier |
| **contrast** | `contrast(1.5)` | Contrast multiplier |
| **saturate** | `saturate(2)` | Chroma intensity |
| **grayscale** | `grayscale(1)` | Convert to grayscale |
| **sepia** | `sepia(0.5)` | Sepia tone |
| **invert** | `invert(1)` | Inverse colors |
| **hue-rotate** | `hue-rotate(90deg)` | Rotate hue |
| **opacity** | `opacity(0.5)` | Transparency |
| **drop-shadow** | `drop-shadow(2px 4px 6px black)` | Shadow |

## Glassmorphism Formula

```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px) saturate(1.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
}
```

## Common Combinations

```
/* Subtle blur — UI elements */
blur(4px) saturate(1.2)

/* Standard glass — cards, modals */
blur(12px) saturate(1.4)

/* Heavy blur — overlays */
blur(20px) brightness(0.8)

/* Dark mode glass */
brightness(0.6) blur(16px)

/* Vibrant glass */
saturate(1.8) blur(16px)
```

## Fallback Strategy

```css
@supports (backdrop-filter: blur(1px)) {
  .glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
  }
}

@supports not (backdrop-filter: blur(1px)) {
  .glass {
    background: rgba(255, 255, 255, 0.85);
  }
}
```

## Browser Support

| Browser | Version | Prefix |
|---|---|---|
| Chrome | 76+ | None |
| Edge | 79+ | None |
| Firefox | 103+ | None |
| Safari | 9+ | -webkit- |
| Opera | 66+ | None |
| iOS Safari | 9.3+ | -webkit- |
| Samsung Internet | 12+ | None |

## Performance Tips

- ❌ Avoid large areas (full page overlays)
- ❌ Avoid animating backdrop-filter on heavy pages
- ✅ Use semi-transparent solid fallbacks
- ✅ Test on mobile devices
- ✅ Use `will-change: backdrop-filter` sparingly

## Accessibility

- Contrast ratio must pass WCAG AA (4.5:1)
- Text on glass backgrounds may need text-shadow
- Provide solid color fallback for reduced motion
- Test with high contrast mode

## vs `filter`

| `filter` | `backdrop-filter` |
|---|---|
| Affects element AND children | Affects area BEHIND element |
| Elements are hidden/modified | Elements visible on top |
| Good for image effects | Good for UI glass effects |
| Better browser support | Newer, less supported |

## Key Takeaways

- Always include `-webkit-` prefix for Safari
- Always provide a solid background fallback
- Combine with semi-transparent backgrounds
- Multiple filter functions are space-separated
- Does NOT affect child elements
- GPU-intensive — profile on target devices
