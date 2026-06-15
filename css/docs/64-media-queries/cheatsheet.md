# Media Queries Cheatsheet

## Syntax

```css
@media media-type and (media-feature) {
  /* styles */
}
```

## Media Types

| Type | Target |
|------|--------|
| `all` | All devices (default) |
| `screen` | Screens (phones, tablets, monitors) |
| `print` | Print preview / printed pages |
| `speech` | Screen readers |

## Logical Operators

| Operator | Example | Meaning |
|----------|---------|---------|
| `and` | `(min-width: 768px) and (orientation: landscape)` | Both conditions true |
| `,` (or) | `(min-width: 768px), (orientation: landscape)` | Either condition true |
| `not` | `not (hover: hover)` | Negates condition |
| `only` | `only screen` | Hides from old browsers |

## Common Media Features

### Viewport Dimensions
```css
@media (min-width: 768px) { }
@media (max-width: 767px) { }
@media (min-height: 500px) { }
@media (width >= 768px) { } /* modern range */
@media (400px <= width <= 800px) { } /* modern range */
```

### Orientation
```css
@media (orientation: portrait) { }
@media (orientation: landscape) { }
```

### Display Quality
```css
@media (min-resolution: 2dppx) { }      /* Retina */
@media (min-resolution: 300dpi) { }     /* Print */
@media (color) { }                       /* Color display */
@media (monochrome) { }                  /* B/W display */
```

### User Preferences
```css
@media (prefers-color-scheme: dark) { }
@media (prefers-color-scheme: light) { }
@media (prefers-reduced-motion: reduce) { }
@media (prefers-reduced-data: reduce) { }
@media (prefers-contrast: more) { }
@media (prefers-contrast: less) { }
@media (prefers-reduced-transparency: reduce) { }
```

### Interaction
```css
@media (hover: hover) { }              /* Can hover (mouse) */
@media (hover: none) { }               /* Cannot hover (touch) */
@media (pointer: fine) { }             /* Precise pointer (mouse) */
@media (pointer: coarse) { }           /* Imprecise (finger) */
@media (any-pointer: coarse) { }       /* Any input is coarse */
```

### Display Mode (PWA)
```css
@media (display-mode: fullscreen) { }
@media (display-mode: standalone) { }
@media (display-mode: minimal-ui) { }
@media (display-mode: browser) { }
```

### Other Features
```css
@media (aspect-ratio: 16/9) { }
@media (min-aspect-ratio: 4/3) { }
@media (forced-colors: active) { }
@media (inverted-colors: inverted) { }
```

## Common Breakpoint Reference

| Name | min-width | Devices |
|------|-----------|---------|
| xs | 0 | Default (phones) |
| sm | 576px | Phones landscape |
| md | 768px | Tablets |
| lg | 992px | Laptops |
| xl | 1200px | Desktops |
| xxl | 1400px | Large screens |

## Mobile-First Pattern
```css
/* Base (mobile) */
.element { ... }

/* Tablet */
@media (min-width: 768px) {
  .element { ... }
}

/* Desktop */
@media (min-width: 1024px) {
  .element { ... }
}
```

## Accessibility Best Practices
```css
/* Always include */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
