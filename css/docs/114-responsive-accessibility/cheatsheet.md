# Responsive Accessibility Cheatsheet

## Viewport Meta
```html
<!-- Correct: accessible -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- WRONG: inaccessible -->
<meta name="viewport" content="user-scalable=no, maximum-scale=1.0">
```

## CSS Units for Accessibility
| Unit | Best For | Accessibility Benefit |
|------|----------|---------------------|
| `rem` | Font sizes, spacing | Respects user's base font size |
| `em` | Component-relative sizing | Scales with component font |
| `%` | Layout widths | Fluid containers |
| `ch` | Line lengths | Readable measure (~65ch) |
| `vw` | Responsive typography | Scales with viewport |

## Fluid Typography Pattern
```css
body { font-size: clamp(1rem, 2vw, 1.25rem); }
h1 { font-size: clamp(2rem, 5vw, 3.5rem); }
```

## Touch Targets
```css
@media (pointer: coarse) {
  button, a, input, select, textarea,
  [role="button"], [tabindex] {
    min-height: 44px;
    min-width: 44px;
  }
}
```

## WCAG Requirements
| Criterion | Level | Requirement |
|-----------|-------|-------------|
| 1.4.4 Resize Text | AA | 200% zoom without loss |
| 1.4.10 Reflow | AA | No 2D scroll at 400% |
| 1.4.12 Text Spacing | AA | No loss with spacing overrides |

## Responsive Navigation Checklist
- [ ] Hamburger has aria-expanded and aria-controls
- [ ] Menu is keyboard accessible
- [ ] Focus management when menu opens/closes
- [ ] Skip link present regardless of viewport
- [ ] Touch targets ≥ 44px
- [ ] aria-current on current page link
