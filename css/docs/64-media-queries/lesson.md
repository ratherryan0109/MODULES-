# CSS Media Queries

## Introduction
Media queries are a CSS feature that allows content rendering to adapt to different device characteristics such as screen resolution, width, height, orientation, and color depth. They are the cornerstone of responsive web design, enabling different styles for different devices without changing the HTML markup.

## Learning Objectives
1. Understand the syntax and structure of media queries
2. Use media types (screen, print, speech, all)
3. Apply media features (width, height, orientation, resolution)
4. Combine multiple conditions with logical operators
5. Implement mobile-first vs desktop-first strategies
6. Test media queries across devices
7. Use newer media features (prefers-color-scheme, prefers-reduced-motion)
8. Understand the cascade with media queries
9. Debug media queries effectively
10. Use media queries with CSS-in-JS and frameworks

## Theory

### Media Query Syntax

```
@media media-type and (media-feature) {
  /* CSS rules */
}
```

| Component | Description |
|-----------|-------------|
| `@media` | The at-rule that begins a media query |
| `media-type` | all, screen, print, speech |
| `and` | Logical operator for combining conditions |
| `media-feature` | Characteristic to test (width, height, etc.) |
| `{ }` | Rules applied when conditions are true |

### Media Types

| Type | Description |
|------|-------------|
| `all` | All devices (default) |
| `screen` | Computer screens, tablets, phones |
| `print` | Print preview and printed pages |
| `speech` | Screen readers and speech synthesizers |

### Media Features

| Feature | Description | Values |
|---------|-------------|--------|
| `width` | Viewport width | px, em |
| `height` | Viewport height | px, em |
| `aspect-ratio` | Width/height ratio | ratio (16/9) |
| `orientation` | Device orientation | portrait, landscape |
| `resolution` | Pixel density | dpi, dpcm, dppx |
| `color` | Color bits per component | integer |
| `hover` | Device hover capability | none, hover |
| `any-pointer` | Pointer accuracy | none, coarse, fine |
| `prefers-color-scheme` | Color scheme preference | light, dark |
| `prefers-reduced-motion` | Motion preference | no-preference, reduce |
| `prefers-contrast` | Contrast preference | no-preference, more, less |
| `prefers-reduced-data` | Data usage preference | no-preference, reduce |
| `prefers-reduced-transparency` | Transparency preference | no-preference, reduce |
| `inverted-colors` | Color inversion | none, inverted |
| `forced-colors` | Forced colors mode | none, active |
| `display-mode` | Display mode (PWA) | fullscreen, standalone, minimal-ui, browser |

### Logical Operators

| Operator | Syntax | Behavior |
|----------|--------|----------|
| `and` | `(x) and (y)` | Both must be true |
| `or` (comma) | `(x), (y)` | Either can be true |
| `not` | `not (x)` | Negates condition |
| `only` | `only screen` | Hides from older browsers |

### Range Syntax (Modern)

```css
/* Traditional */
@media (min-width: 768px) and (max-width: 1024px) { }

/* Modern range syntax */
@media (768px <= width <= 1024px) { }
@media (width >= 768px) { }
@media (width <= 1024px) { }
```

## Syntax Examples

### Basic Media Queries
```css
/* Print styles */
@media print {
  body { font-size: 12pt; }
  nav, .ad, .sidebar { display: none; }
}

/* Screen only */
@media screen {
  body { background: #f5f5f5; }
}

/* Speech */
@media speech {
  .logo { speak: none; }
}
```

### Width-Based Queries
```css
/* Mobile first */
@media (min-width: 576px) { }  /* Mobile landscape */
@media (min-width: 768px) { }  /* Tablet */
@media (min-width: 992px) { }  /* Desktop */
@media (min-width: 1200px) { } /* Large desktop */
@media (min-width: 1400px) { } /* Extra large */
```

### Device State Queries
```css
/* Dark mode */
@media (prefers-color-scheme: dark) {
  body { background: #1a1a2e; color: #e0e0e0; }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* High contrast */
@media (prefers-contrast: more) {
  body { filter: contrast(1.2); }
}
```

### Orientation Queries
```css
@media (orientation: landscape) {
  .hero { background-image: url('landscape-bg.jpg'); }
}

@media (orientation: portrait) {
  .hero { background-image: url('portrait-bg.jpg'); }
}
```

### Resolution Queries
```css
/* Retina / high DPI */
@media (min-resolution: 2dppx) {
  .logo { background-image: url('logo@2x.png'); }
}

/* Print resolution */
@media print and (min-resolution: 300dpi) {
  img { max-width: 90%; }
}
```

### Complex Combinations
```css
/* Tablet landscape + dark mode */
@media screen and (min-width: 768px) and (max-width: 1024px) 
       and (orientation: landscape) and (prefers-color-scheme: dark) {
  /* styles */
}

/* Hover-capable devices */
@media (hover: hover) {
  .card:hover { transform: scale(1.02); }
}

/* Touch-only devices */
@media (hover: none) and (pointer: coarse) {
  .nav-item { padding: 1rem; min-height: 44px; }
}
```

## Visual Explanation

```
Media Query Flow
================

                     START
                       |
                 Device loads CSS
                       |
           +--- Does @media match? ---+
           |                          |
         YES                         NO
           |                          |
    Apply rules inside          Skip rules,
    the media query            continue CSS
           |                          |
    Continue to next           Continue to next
    media query or             media query or
    regular CSS                regular CSS
           |                          |
           +----------+--------------+
                      |
                Render page
```

### Mobile-First vs Desktop-First

| Approach | Base Styles | Add On | Use Case |
|----------|-------------|--------|----------|
| Mobile-First | Mobile | min-width | Progressive enhancement, default approach |
| Desktop-First | Desktop | max-width | Graceful degradation, printed layout |

```
Mobile-First:    Base (mobile) ---> @media (min-width: 768px) ---> @media (min-width: 1024px)
                    |                       |                            |
                Small screen            Mid screen                  Large screen

Desktop-First:  Base (desktop) ---> @media (max-width: 1023px) ---> @media (max-width: 767px)
                    |                        |                           |
                Large screen             Mid screen                  Small screen
```

## Common Mistakes
1. **Forgetting space between `and` and parentheses** - Syntax error
2. **Using px for font-based features** - Use em for font-relative queries
3. **Putting media queries at wrong cascade order** - Specificity or order issues
4. **Overcomplicating queries** - Unnecessary nesting or combinations
5. **Not testing actual devices** - DevTools resizing is not always accurate
6. **Using max-width for mobile-first** - Should use min-width
7. **Missing print styles** - Users will print pages
8. **Not respecting prefers-reduced-motion** - Accessibility issue

## Best Practices
1. Always start with mobile-first base styles
2. Use em/rem for media query values, not px (for zoom support)
3. Group media queries by feature at the bottom of stylesheet
4. Use modern range syntax when browser support allows
5. Keep queries simple - avoid complex boolean logic
6. Test prefers-color-scheme and prefers-reduced-motion for accessibility
7. Use only one logical operator per query for clarity
8. Comment your breakpoints for maintainability

## Accessibility
- `prefers-reduced-motion` - Reduce/disable animations for vestibular disorders
- `prefers-color-scheme` - Support dark mode for reduced eye strain
- `prefers-contrast` - Enhance contrast for low-vision users
- `prefers-reduced-data` - Serve smaller assets on data saver modes
- `prefers-reduced-transparency` - Reduce frosted glass effects
- `forced-colors` - Support Windows High Contrast Mode
- `inverted-colors` - Support macOS color inversion
- Always test with screen readers at various viewports

## Performance
- Media queries themselves add negligible weight to CSS
- Place critical styles outside media queries for fast initial render
- Use media queries to conditionally load resources
- Avoid expensive paint operations inside frequent breakpoint changes
- `prefers-reduced-data` can defer non-essential images/videos

## Browser Compatibility
- Media queries are supported in all modern browsers (IE9+)
- Range syntax (<=) supported in modern browsers (2023+)
- `prefers-color-scheme` supported everywhere except IE
- `prefers-reduced-motion` widely supported
- `prefers-contrast` and `prefers-reduced-data` have partial support
- `forced-colors` supported in Edge/Firefox
- Use fallbacks for newer features with sensible defaults

## Summary Notes
- Media queries apply CSS rules based on device characteristics
- Syntax: @media type and (feature) { ... }
- Mobile-first uses min-width, desktop-first uses max-width
- Modern range syntax: @media (768px <= width <= 1024px)
- Always respect user preferences (motion, color scheme, contrast)
- Use commas for OR logic in media queries
- Test on real devices, not just DevTools
- Print style sheets improve user experience for printing
