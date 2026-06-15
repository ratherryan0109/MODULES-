# CSS Transform Cheatsheet

## 2D Transform Functions

| Function | Parameters | Example |
|----------|-----------|---------|
| `translate()` | `tx, ty` | `translate(50px, 100px)` |
| `translateX()` | `tx` | `translateX(50px)` |
| `translateY()` | `ty` | `translateY(50px)` |
| `rotate()` | `angle` | `rotate(45deg)` |
| `scale()` | `sx, sy` | `scale(1.5, 1.2)` |
| `scaleX()` | `sx` | `scaleX(1.5)` |
| `scaleY()` | `sy` | `scaleY(1.5)` |
| `skew()` | `ax, ay` | `skew(10deg, 5deg)` |
| `skewX()` | `ax` | `skewX(10deg)` |
| `skewY()` | `ay` | `skewY(10deg)` |
| `matrix()` | `a,b,c,d,e,f` | `matrix(1,0,0,1,0,0)` |

## Transform Origin

```css
transform-origin: center;                    /* default */
transform-origin: top left;
transform-origin: 50% 50%;
transform-origin: 0 0;
transform-origin: 100px 200px;
```

## Performance Tips

| Do | Don't |
|----|-------|
| Use `transform` for position | Use `top`/`left` for animation |
| Combine with `opacity` | Animate `width`/`height` |
| Add `will-change: transform` | Overuse `will-change` |
| Use `translate` instead of margin | Forget `transform-style: preserve-3d` for 3D children |

## Common Patterns

```css
/* Centering with translate */
.centered {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}

/* Card lift */
.card:hover {
  transform: translateY(-8px) scale(1.02);
}

/* Flip card */
.flip-card:hover {
  transform: rotateY(180deg);
}
```
