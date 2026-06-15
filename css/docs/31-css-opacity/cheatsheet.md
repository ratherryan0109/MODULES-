# CSS Opacity Cheatsheet

## `opacity` Property
```css
opacity: 0;     /* fully transparent (invisible but in layout) */
opacity: 0.5;   /* 50% transparent */
opacity: 1;     /* fully opaque */
```

## Alpha Color Functions
```css
background: rgba(0, 120, 255, 0.3);  /* RGB + alpha */
background: hsla(210, 100%, 50%, 0.3); /* HSL + alpha */
color: rgba(0, 0, 0, 0.7);              /* semi-transparent text */
```

## Common Patterns
```css
/* Smooth hover reveal */
.element {
  opacity: 0.7;
  transition: opacity 0.3s ease;
}
.element:hover {
  opacity: 1;
}

/* Image overlay */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s;
}
.container:hover .overlay {
  opacity: 1;
}
```

## Difference: `opacity` vs `rgba()`
| Feature | `opacity` | `rgba()` |
|---------|-----------|----------|
| Affects children | Yes | No |
| Applies to | Entire element | Single property |
| Inheritance | Children cannot be more opaque | Only the property using it |
