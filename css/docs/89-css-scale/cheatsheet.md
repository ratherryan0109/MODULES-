# CSS Scale Cheatsheet

## Syntax

```css
/* Uniform */
scale: 1.5;

/* Non-uniform (X Y) */
scale: 1.5 0.5;

/* 3D (X Y Z) */
scale: 1.5 1.5 2;

/* No scaling */
scale: none;
```

## Value Reference

| Value | Effect |
|-------|--------|
| 1 | Original size |
| > 1 | Enlarges |
| 0 to 1 | Shrinks |
| 0 | Invisible |
| < 0 | Flips (mirror) |

## Common Patterns

```css
/* Hover zoom */
.card { transition: scale 0.3s ease; }
.card:hover { scale: 1.05; }

/* Button press */
.btn { transition: scale 0.1s; }
.btn:active { scale: 0.95; }

/* Pulse animation */
@keyframes pulse {
  0%, 100% { scale: 1; }
  50% { scale: 1.1; }
}

/* Image gallery zoom */
.gallery-item { overflow: hidden; }
.gallery-item img { transition: scale 0.4s; }
.gallery-item:hover img { scale: 1.2; }

/* Bounce in */
@keyframes bounceIn {
  0% { scale: 0; }
  60% { scale: 1.1; }
  100% { scale: 1; }
}
```

## Related Properties

| Property | Purpose |
|----------|---------|
| `transform-origin` | Scaling anchor point |
| `transition` | Smooth scale animation |
| `overflow` | Prevent overflow on zoom |
