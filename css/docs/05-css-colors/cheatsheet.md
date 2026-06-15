# CSS Colors — Cheatsheet

## Color Formats
| Format | Example | Notes |
|--------|---------|-------|
| Named | `red`, `blue`, `transparent` | 140+ names |
| HEX | `#ff0000` | `#RGB` shorthand for `#RRGGBB` |
| HEX Alpha | `#ff000080` | 8-digit (CSS4) |
| RGB | `rgb(255, 0, 0)` | Values 0-255 |
| RGBA | `rgba(255,0,0,0.5)` | Alpha: 0.0-1.0 |
| HSL | `hsl(0, 100%, 50%)` | Hue 0-360, Sat 0-100%, Light 0-100% |
| HSLA | `hsla(0,100%,50%,0.5)` | HSL + alpha |

## HSL Color Wheel
- 0° Red, 60° Yellow, 120° Green, 180° Cyan, 240° Blue, 300° Purple

## currentColor
```css
border: 2px solid currentColor;
fill: currentColor; /* For SVGs */
```

## Opacity vs Alpha
- `opacity: 0.5` — affects entire element + children
- `rgba(0,0,0,0.5)` — affects only that property

## WCAG Contrast Ratios
- AA Normal: 4.5:1
- AA Large: 3:1
- AAA Normal: 7:1
- AAA Large: 4.5:1
