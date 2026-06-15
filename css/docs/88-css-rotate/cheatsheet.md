# CSS Rotate Cheatsheet

## Syntax

```css
/* 2D (Z-axis) */
rotate: 45deg;
rotate: 0.5turn;

/* 3D - specify axis */
rotate: X 45deg;
rotate: Y 180deg;
rotate: Z 90deg;
```

## Angular Units

| Unit | Full Rotation | Half Rotation | Example |
|------|---------------|---------------|---------|
| deg | 360deg | 180deg | `rotate: 45deg` |
| rad | 6.283rad | 3.14rad | `rotate: 1.57rad` |
| grad | 400grad | 200grad | `rotate: 100grad` |
| turn | 1turn | 0.5turn | `rotate: 0.25turn` |

## Common Patterns

```css
/* Spinning loader */
@keyframes spin {
  to { rotate: 360deg; }
}
.loader { animation: spin 1s linear infinite; }

/* Card flip */
.scene { perspective: 800px; }
.card { transition: rotate 0.6s; transform-style: preserve-3d; }
.card:hover { rotate: Y 180deg; }
.front, .back { backface-visibility: hidden; position: absolute; }
.back { rotate: Y 180deg; }

/* Hover spin */
.btn { transition: rotate 0.3s ease; }
.btn:hover { rotate: 360deg; }
```

## Related Properties

| Property | Purpose |
|----------|---------|
| `transform-origin` | Sets rotation pivot point |
| `perspective` | Creates 3D depth on parent |
| `transform-style` | `preserve-3d` for children |
| `backface-visibility` | Shows/hides element backface |
