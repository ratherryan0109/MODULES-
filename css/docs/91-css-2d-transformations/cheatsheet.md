# CSS 2D Transformations Cheatsheet

## All 2D Transform Functions

| Function | Params | Example |
|----------|--------|---------|
| `translate(x, y)` | px, %, em | `translate(50px, 100px)` |
| `translateX(x)` | px, % | `translateX(50%)` |
| `translateY(y)` | px, % | `translateY(50px)` |
| `rotate(a)` | deg, rad, turn | `rotate(45deg)` |
| `scale(s)` or `scale(x, y)` | number | `scale(1.5, 1.2)` |
| `scaleX(s)` | number | `scaleX(1.5)` |
| `scaleY(s)` | number | `scaleY(1.5)` |
| `skew(a)` or `skew(ax, ay)` | deg | `skew(10deg, 5deg)` |
| `skewX(a)` | deg | `skewX(10deg)` |
| `skewY(a)` | deg | `skewY(10deg)` |
| `matrix(a,b,c,d,e,f)` | numbers | `matrix(1,0,0,1,0,0)` |

## Common Patterns

```css
/* Hover lift */
.card:hover { transform: translateY(-8px) scale(1.02); }

/* Button press */
.btn:active { transform: scale(0.95); }

/* Centering */
.centered {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}

/* Entrance animation */
@keyframes slideIn {
  from { transform: translateX(-100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
```

## Transform Order

```
transform: scale(1.5) rotate(45deg) translateX(50px);
/* Applied: 1. translateX, 2. rotate, 3. scale */
```

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome | Full (since v36) |
| Firefox | Full (since v16) |
| Safari | Full (since v9) |
| Edge | Full |
| IE | IE 9+ (-ms- prefix) |
