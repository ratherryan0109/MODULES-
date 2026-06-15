# CSS 3D Transformations Cheatsheet

## Key Properties

| Property | Values | Description |
|----------|--------|-------------|
| `perspective` | length | Distance from viewer (smaller = more 3D) |
| `perspective-origin` | position | Vanishing point position |
| `transform-style` | `flat` / `preserve-3d` | 3D context for children |
| `backface-visibility` | `visible` / `hidden` | Show/hide element back |

## 3D Transform Functions

| Function | Example | Effect |
|----------|---------|--------|
| `rotateX(a)` | `rotateX(45deg)` | Tilt forward/back |
| `rotateY(a)` | `rotateY(45deg)` | Turn left/right |
| `rotateZ(a)` | `rotateZ(45deg)` | Spin (same as 2D) |
| `translateZ(l)` | `translateZ(100px)` | Move toward viewer |
| `scaleZ(n)` | `scaleZ(1.5)` | Scale depth |
| `perspective(l)` | `perspective(800px)` | Per-element perspective |
| `matrix3d(...)` | `matrix3d(16 values)` | Full 3D matrix |

## Card Flip Pattern

```css
.scene { perspective: 800px; }
.card {
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}
.card:hover { transform: rotateY(180deg); }
.front, .back {
  position: absolute;
  backface-visibility: hidden;
}
.back { transform: rotateY(180deg); }
```

## Cube Pattern

```css
.cube { transform-style: preserve-3d; }
.face {
  position: absolute;
  width: 200px; height: 200px;
}
.front  { transform: translateZ(100px); }
.back   { transform: rotateY(180deg) translateZ(100px); }
.right  { transform: rotateY(90deg) translateZ(100px); }
.left   { transform: rotateY(-90deg) translateZ(100px); }
.top    { transform: rotateX(90deg) translateZ(100px); }
.bottom { transform: rotateX(-90deg) translateZ(100px); }
```
