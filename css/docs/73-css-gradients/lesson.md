# CSS Gradients

## Introduction
CSS gradients allow you to create smooth transitions between two or more specified colors. They are a powerful tool for creating visual depth, texture, and atmosphere without using external images. CSS supports linear, radial, conic, and repeating gradients.

## Learning Objectives
1. Understand linear gradient syntax and angles
2. Create radial gradients with shape and position control
3. Use conic gradients for color wheels and pie charts
4. Implement repeating gradients for patterns
5. Combine multiple gradients on one element
6. Use gradient color stops and hard stops
7. Create gradient overlays for images
8. Animate gradients with CSS animations
9. Use gradients for text effects
10. Ensure gradient accessibility

## Theory

### Gradient Types

| Type | Function | Description | Use Case |
|------|----------|-------------|----------|
| Linear | `linear-gradient()` | Colors transition along a straight line | Backgrounds, buttons |
| Radial | `radial-gradient()` | Colors radiate from a center point | Spotlight effects, orbs |
| Conic | `conic-gradient()` | Colors transition around a circle | Color wheels, pie charts |
| Repeating Linear | `repeating-linear-gradient()` | Linear gradient that repeats | Stripes, patterns |
| Repeating Radial | `repeating-radial-gradient()` | Radial gradient that repeats | Targets, ripples |

### Gradient Syntax

```css
/* Linear */
background: linear-gradient(direction, color-stop1, color-stop2, ...);

/* Radial */
background: radial-gradient(shape size at position, color-stop1, color-stop2, ...);

/* Conic */
background: conic-gradient(from angle at position, color-stop1, color-stop2, ...);
```

### Color Stops

| Stop Type | Example | Description |
|-----------|---------|-------------|
| Color only | `red` | Evenly spaced |
| With position | `red 50%` | Position in gradient |
| Multiple stops | `red 0%, blue 50%, green 100%` | Full control |
| Hard stop | `red 50%, blue 50%` | Abrupt color change |

## Syntax Examples

### Linear Gradients
```css
/* Default (top to bottom) */
.grad-1 { background: linear-gradient(blue, purple); }

/* Direction keyword */
.grad-2 { background: linear-gradient(to right, blue, purple); }
.grad-3 { background: linear-gradient(to bottom right, blue, purple); }

/* Angle in degrees */
.grad-4 { background: linear-gradient(45deg, blue, purple); }
.grad-5 { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }

/* Multiple color stops */
.grad-6 { background: linear-gradient(90deg, red, orange, yellow, green, blue, purple); }

/* Transparency */
.grad-7 { background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%); }

/* Hard stops (stripes) */
.grad-8 { background: linear-gradient(90deg, #3b82f6 50%, #1e40af 50%); }
```

### Radial Gradients
```css
/* Center circle */
.grad-9 { background: radial-gradient(circle, #3b82f6, #1e40af); }

/* Ellipse */
.grad-10 { background: radial-gradient(ellipse, #3b82f6, #1e40af); }

/* Positioned */
.grad-11 { background: radial-gradient(circle at top left, #3b82f6, transparent); }

/* Size keywords */
.grad-12 { background: radial-gradient(circle closest-side, #3b82f6, #1e40af); }
.grad-13 { background: radial-gradient(circle farthest-corner, #3b82f6, #1e40af); }
```

### Conic Gradients
```css
/* Color wheel */
.grad-14 { background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red); }

/* From angle */
.grad-15 { background: conic-gradient(from 90deg, red, blue, red); }

/* Pie chart */
.grad-16 { background: conic-gradient(red 0% 25%, blue 25% 50%, green 50% 75%, yellow 75% 100%); }
```

### Repeating Gradients
```css
/* Stripes */
.grad-17 { background: repeating-linear-gradient(45deg, #3b82f6, #3b82f6 10px, #1e40af 10px, #1e40af 20px); }

/* Target pattern */
.grad-18 { background: repeating-radial-gradient(circle, #3b82f6, #3b82f6 10px, #1e40af 10px, #1e40af 20px); }
```

### Multiple Gradients
```css
.grad-19 {
  background:
    linear-gradient(45deg, rgba(0,0,0,0.5), transparent),
    url('image.jpg');
  background-blend-mode: overlay;
}
```

### Gradient Animations
```css
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animated-grad {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient-shift 15s ease infinite;
}
```

### Text Gradient
```css
.gradient-text {
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

## Visual Explanation

### Linear Gradient Angles

```
0deg (to top)          90deg (to right)
      ↑                     →
      |                     
←----+----→           ↑----+----↓
      |                     
      ↓                     ←
180deg (to bottom)    270deg (to left)
```

### Gradient Types Visual

```
Linear:      ████████████████████
             blue ---------> purple

Radial:      ████████████████████
             Center (blue) → Edge (purple)
             
Conic:       Circular gradient around center
             
Repeating:   ████░░░░████░░░░████
```

## Common Mistakes
1. **Forgetting vendor prefixes** - No longer needed in modern browsers
2. **Too many color stops** - Keeps it to 2-4 for smooth gradients
3. **Low contrast** - Ensure readability over gradient backgrounds
4. **Ignoring fallbacks** - Provide solid color for old browsers
5. **Overusing gradients** - Can look dated or busy
6. **Not using `background-size` for animated gradients** - Causes flickering
7. **Forgetting `background-clip: text`** - Text gradient won't work
8. **Hard stops without matching positions** - Can create artifacts

## Best Practices
1. Always provide a solid color fallback before the gradient
2. Use 2-4 colors for smooth, professional gradients
3. Test contrast for text overlaid on gradients
4. Use `background-size: 400% 400%` for smooth animations
5. Combine gradients with blend modes for rich effects
6. Use transparency gradients for image overlays
7. Prefer `to [side]` or `[angle]` deg notation
8. Use CSS custom properties for gradient colors

## Accessibility
- Ensure 4.5:1 contrast ratio for text on gradient backgrounds
- Never convey information through gradient color alone
- Use `prefers-reduced-motion` to disable animated gradients
- Provide solid color fallback for Windows High Contrast Mode
- Use `forced-colors: active` media query for gradient removal

## Performance
- Gradients are rendered by the GPU (very fast)
- Animated gradients can be expensive - use `transform` or `opacity` instead
- Repeating gradients with many stops can impact performance
- Multiple overlapping gradients can increase paint time
- Use `will-change: background` for animated gradients (sparingly)

## Browser Compatibility
- Linear and radial gradients: All modern browsers (IE10+)
- Conic gradients: All modern browsers (2020+)
- Repeating gradients: All modern browsers (IE10+)
- `background-clip: text`: All modern browsers
- Gradient animations: All modern browsers

## Summary Notes
- CSS gradients create smooth color transitions without images
- Linear gradients go in a straight line; radial radiate from a point
- Conic gradients go around a circle
- Hard stops create striped patterns
- Multiple gradients can be layered on one element
- Text gradients use `background-clip: text` + `color: transparent`
- Animate gradients with `background-position` (not the gradient itself)
- Always provide solid color fallbacks
- Respect `prefers-reduced-motion` for animated gradients
- Gradients are GPU-accelerated and performant
