# CSS Icons — Cheatsheet
## Icon Methods
1. **Inline SVG**: `<svg>...</svg>` (most flexible, styleable)
2. **Icon Libraries**: Font Awesome, Bootstrap Icons, Material Icons
3. **CSS-only icons**: Using borders/shapes (limited)

## Accessible Icons
```html
<!-- Decorative -->
<i class="fas fa-search" aria-hidden="true"></i>

<!-- With text label -->
<button><i class="fas fa-trash" aria-hidden="true"></i> Delete</button>

<!-- Standalone icon -->
<button aria-label="Search"><i class="fas fa-search" aria-hidden="true"></i></button>
```

## SVG Styling
```css
svg { fill: currentColor; width: 24px; height: 24px; }
svg:hover { color: blue; }
```
