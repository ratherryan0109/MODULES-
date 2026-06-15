# CSS Clip-Path Cheatsheet

## Shape Functions

### circle()
```css
clip-path: circle(50%);
clip-path: circle(30% at 20% 40%);
clip-path: circle(closest-side);
clip-path: circle(farthest-side at center);
```

### ellipse()
```css
clip-path: ellipse(40% 50%);
clip-path: ellipse(30% 40% at 50% 50%);
```

### inset()
```css
clip-path: inset(10%);
clip-path: inset(5% 10% 15% 20%);
clip-path: inset(10% round 20px);
clip-path: inset(10% round 10px 20px);
```

### polygon()
```css
/* Triangle */
clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

/* Hexagon */
clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);

/* Star (5-point) */
clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);

/* Diamond */
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);

/* Chevron / Arrow */
clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%);
```

### path()
```css
clip-path: path('M10 10 H 90 V 90 H 10 Z');
```

## Animated Clip-Path
```css
.element {
  clip-path: circle(50%);
  transition: clip-path 0.4s ease;
}
.element:hover {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

@keyframes morph {
  0%, 100% { clip-path: circle(50%); }
  50% { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }
}
.animated {
  animation: morph 3s ease-in-out infinite;
}
```

## Text Wrapping
```css
img.circle {
  float: left;
  clip-path: circle(50%);
  shape-outside: circle(50%);
}
```

## Section Divider
```css
.section {
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}
```

## Important Notes
- Layout space is NOT affected by clip-path
- Match vertex counts for smooth polygon animation
- Provide fallback styles for older browsers
