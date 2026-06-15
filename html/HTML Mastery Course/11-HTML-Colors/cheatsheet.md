# HTML Colors — Cheatsheet

## Color Value Types

| Method | Syntax | Example |
|--------|--------|---------|
| Named | `red`, `blue` | `color: red;` |
| Hex | `#RRGGBB` | `color: #FF0000;` |
| Short Hex | `#RGB` | `color: #F00;` |
| RGB | `rgb(r,g,b)` | `color: rgb(255,0,0);` |
| RGBA | `rgba(r,g,b,a)` | `color: rgba(255,0,0,0.5);` |
| HSL | `hsl(h,s%,l%)` | `color: hsl(0,100%,50%);` |
| HSLA | `hsla(h,s%,l%,a)` | `color: hsla(0,100%,50%,0.5);` |

## Common Named Colors

| Color | Hex | Color | Hex |
|-------|-----|-------|-----|
| Red | `#FF0000` | Blue | `#0000FF` |
| Green | `#008000` | Yellow | `#FFFF00` |
| Black | `#000000` | White | `#FFFFFF` |
| Gray | `#808080` | Purple | `#800080` |
| Orange | `#FFA500` | Pink | `#FFC0CB` |

## RGBA Alpha Values

```css
opacity: 0;     /* fully transparent */
opacity: 0.5;   /* 50% visible */
opacity: 1;     /* fully opaque */
```

## HSL Color Wheel

| Hue | Color |
|-----|-------|
| 0° | Red |
| 60° | Yellow |
| 120° | Green |
| 180° | Cyan |
| 240° | Blue |
| 300° | Magenta |
| 360° | Red |

## CSS Properties for Color

```css
color: red;              /* Text color */
background-color: blue;  /* Background color */
border-color: green;     /* Border color */
outline-color: orange;   /* Outline color */
text-decoration-color: purple; /* Underline color */
```

## WCAG Contrast Ratios

| Level | Normal Text | Large Text |
|-------|-------------|------------|
| AA | 4.5:1 | 3:1 |
| AAA | 7:1 | 4.5:1 |

## Best Practices
- ✅ Use hex codes for precise production colors
- ✅ Use RGBA/HSLA when transparency is needed
- ✅ Ensure 4.5:1 minimum contrast ratio
- ✅ Test for color blindness
- ✅ Use text labels alongside color indicators
- ❌ Don't use color as the only differentiator
- ❌ Don't put light text on light backgrounds
