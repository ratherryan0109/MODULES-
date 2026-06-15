# HTML SVG — Cheatsheet

## Basic SVG Structure

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <circle cx="50" cy="50" r="40" fill="steelblue" />
</svg>
```

## Basic Shapes

| Element       | Attributes                                      | Example                                    |
|---------------|-------------------------------------------------|--------------------------------------------|
| `<rect>`      | `x`, `y`, `width`, `height`, `rx`, `ry`        | `<rect x="10" y="10" width="80" height="50" rx="5" fill="red" />` |
| `<circle>`    | `cx`, `cy`, `r`                                 | `<circle cx="50" cy="50" r="40" fill="blue" />` |
| `<ellipse>`   | `cx`, `cy`, `rx`, `ry`                          | `<ellipse cx="50" cy="50" rx="40" ry="20" />` |
| `<line>`      | `x1`, `y1`, `x2`, `y2`                         | `<line x1="10" y1="10" x2="90" y2="90" stroke="black" />` |
| `<polyline>`  | `points`                                        | `<polyline points="10,10 50,50 90,10" />` |
| `<polygon>`   | `points`                                        | `<polygon points="50,10 90,90 10,90" />` |
| `<path>`      | `d`                                             | `<path d="M10 10 L90 10 L50 90 Z" />` |

## Path Commands

| Command | Name              | Parameters       | Example              |
|---------|-------------------|------------------|----------------------|
| `M`     | Move To           | x y              | `M 10 10`           |
| `L`     | Line To           | x y              | `L 50 50`           |
| `H`     | Horizontal Line   | x                | `H 80`              |
| `V`     | Vertical Line     | y                | `V 80`              |
| `C`     | Cubic Bezier      | x1 y1, x2 y2, x y | `C 10 10, 90 10, 50 50` |
| `S`     | Smooth Cubic      | x2 y2, x y       | `S 90 10, 50 50`    |
| `Q`     | Quadratic Bezier  | x1 y1, x y       | `Q 50 10, 90 80`    |
| `T`     | Smooth Quadratic  | x y              | `T 90 80`           |
| `A`     | Arc               | rx ry x-rot large sweep x y | `A 20 20 0 1 1 80 50` |
| `Z`     | Close Path        | —                | `Z`                 |

Lowercase = relative coordinates. Uppercase = absolute.

## Styling Attributes

| Attribute      | Values                     | Description             |
|----------------|----------------------------|-------------------------|
| `fill`         | color \| url(#gradient)    | Interior color          |
| `stroke`       | color                      | Outline color           |
| `stroke-width` | number                     | Outline thickness        |
| `opacity`      | 0–1                        | Element opacity         |
| `fill-opacity` | 0–1                        | Fill opacity            |
| `stroke-opacity` | 0–1                      | Stroke opacity          |
| `stroke-linecap` | `butt` \| `round` \| `square` | Line end style    |
| `stroke-linejoin` | `miter` \| `round` \| `bevel` | Corner style     |
| `stroke-dasharray` | numbers              | Dash pattern            |
| `stroke-dashoffset` | number            | Dash offset             |
| `transform`   | translate, scale, rotate   | Transform operations    |
| `vector-effect` | `non-scaling-stroke`     | Scale-independent stroke|

## Gradients

```html
<defs>
  <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="red" />
    <stop offset="100%" stop-color="blue" />
  </linearGradient>
  
  <radialGradient id="rg" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>
</defs>

<!-- Apply -->
<rect fill="url(#lg)" ... />
<circle fill="url(#rg)" ... />
```

## Filters

```html
<defs>
  <filter id="shadow">
    <feDropShadow dx="2" dy="2" stdDeviation="3" flood-opacity="0.4" />
  </filter>
  <filter id="blur">
    <feGaussianBlur stdDeviation="3" />
  </filter>
  <filter id="glow">
    <feGaussianBlur stdDeviation="3" result="blur" />
    <feComposite in="SourceGraphic" in2="blur" operator="over" />
  </filter>
</defs>

<!-- Apply -->
<circle filter="url(#shadow)" ... />
```

## Reusing Elements

```html
<defs>
  <symbol id="icon-star" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </symbol>
</defs>

<use href="#icon-star" x="10" y="10" width="32" height="32" fill="gold" />
```

## Text

```html
<svg viewBox="0 0 200 100">
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central"
        font-size="20" font-family="Arial" fill="steelblue">
    Hello SVG!
  </text>
  
  <!-- Text along path -->
  <path id="textPath" d="M10 50 Q 50 10, 90 50" fill="none" />
  <text><textPath href="#textPath">Text along a curve</textPath></text>
</svg>
```

## SMIL Animation

```html
<circle cx="50" cy="50" r="20" fill="coral">
  <!-- Animate position -->
  <animate attributeName="cx" from="50" to="150" dur="2s" repeatCount="indefinite" />
  
  <!-- Animate color -->
  <animate attributeName="fill" values="red;blue;green;red" dur="4s" repeatCount="indefinite" />
</circle>

<rect x="10" y="10" width="40" height="40" fill="steelblue">
  <!-- Animate transform -->
  <animateTransform attributeName="transform" type="rotate" 
    from="0 30 30" to="360 30 30" dur="3s" repeatCount="indefinite" />
</rect>
```

## JavaScript Manipulation

```javascript
// Create element
const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle.setAttribute('cx', '50');
circle.setAttribute('cy', '50');
circle.setAttribute('r', '30');
circle.setAttribute('fill', 'coral');

// Add to SVG
document.querySelector('svg').appendChild(circle);

// Modify
circle.setAttribute('fill', 'steelblue');

// Event handling
circle.addEventListener('click', () => {
  circle.setAttribute('fill', 'gold');
});

// Get bounding box
const bbox = circle.getBBox(); // { x, y, width, height }
```

## Embedding Methods

```html
<!-- Inline (best for interactivity) -->
<svg viewBox="0 0 100 100">...</svg>

<!-- As image -->
<img src="image.svg" alt="description" width="48" height="48">

<!-- CSS background -->
<div style="background: url('image.svg') no-repeat center; width: 48px; height: 48px;"></div>

<!-- Object (with fallback) -->
<object data="graphic.svg" type="image/svg+xml" width="200" height="200">
  <img src="fallback.png" alt="fallback">
</object>
```

## Responsive SVG

```css
svg {
  width: 100%;
  height: auto;
}

/* Or */
.responsive-svg {
  display: block;
  max-width: 100%;
}
```

## Accessibility

```html
<svg role="img" aria-labelledby="title desc" viewBox="0 0 100 100">
  <title id="title">Chart Title</title>
  <desc id="desc">Description of the chart for screen readers</desc>
  <!-- chart content -->
</svg>
```

## Optimization (SVGO)

```bash
npm install -g svgo
svgo input.svg -o output.svg
```
