# CSS Hover Effects Cheatsheet

## Common Hover Patterns

### Lift Card
```css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
}
```

### Underline Animation
```css
.link { position: relative; }
.link::after {
  content: '';
  position: absolute; bottom: 0; left: 0;
  width: 100%; height: 2px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}
.link:hover::after { transform: scaleX(1); }
```

### Image Zoom
```css
.img-wrapper { overflow: hidden; }
.img-wrapper img {
  transition: transform 0.5s ease, filter 0.3s ease;
}
.img-wrapper:hover img {
  transform: scale(1.1);
  filter: brightness(0.8);
}
```

### Button Fill
```css
.btn {
  background: transparent;
  border: 2px solid currentColor;
  transition: background 0.3s ease, color 0.3s ease;
}
.btn:hover {
  background: currentColor;
  color: white;
}
```

### Glow
```css
.btn:hover {
  box-shadow: 0 0 20px rgba(59,130,246,0.5);
}
```

## Accessibility
```css
/* Touch device fallback */
@media (hover: hover) {
  .card:hover { transform: translateY(-8px); }
}

/* Focus for keyboard */
.btn:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *:hover { transform: none !important; }
}
```

## Best Practices
- Duration: 200-400ms
- Prefer transform + opacity for performance
- Use @media (hover: hover) for hover-specific effects
- Always include :focus-visible for keyboard users
- Test on touch devices
