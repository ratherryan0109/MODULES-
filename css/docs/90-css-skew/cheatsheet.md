# CSS Skew Cheatsheet

## Functions

| Function | Parameters | Description |
|----------|-----------|-------------|
| `skewX(angle)` | angle in deg/rad | Skews along X-axis |
| `skewY(angle)` | angle in deg/rad | Skews along Y-axis |
| `skew(ax, ay)` | two angles | Skews both axes |

## Examples

```css
/* Basic skew */
transform: skewX(10deg);
transform: skewY(15deg);
transform: skew(10deg, 5deg);

/* Counter-skew for text */
.parent { transform: skewX(-20deg); }
.child { transform: skewX(20deg); }

/* Ribbon banner */
.ribbon {
  background: #e74c3c;
  color: white;
  padding: 10px 30px;
  transform: skewX(-15deg);
}
.ribbon span {
  display: inline-block;
  transform: skewX(15deg);
}
```

## Guidelines

| Angle | Effect | Use Case |
|-------|--------|----------|
| 0-15° | Subtle tilt | Ribbons, badges |
| 15-30° | Noticeable skew | Design accents |
| 30-45° | Strong skew | Artistic effect |
| 45°+ | Extreme | Avoid for readability |
