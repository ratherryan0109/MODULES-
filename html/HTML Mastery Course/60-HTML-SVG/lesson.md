# Module 60: HTML SVG

## Introduction

SVG (Scalable Vector Graphics) is an XML-based vector image format that enables creating resolution-independent graphics directly in HTML. Unlike raster images (PNG, JPG), SVGs can be scaled infinitely without losing quality, manipulated with CSS and JavaScript, and animated for rich interactive visuals. This module covers SVG syntax, shapes, paths, transforms, filters, and integration with HTML.

## Learning Objectives

By the end of this module, you will be able to:
- Create and embed SVG graphics directly in HTML
- Draw basic shapes (rectangles, circles, ellipses, lines, polygons)
- Use the `<path>` element for custom shapes
- Apply CSS styling and animations to SVG elements
- Use SVG filters and gradients
- Manipulate SVG with JavaScript
- Optimize SVGs for performance and accessibility

## SVG vs Canvas

| Feature       | SVG                                   | Canvas                      |
|---------------|---------------------------------------|-----------------------------|
| Type          | Vector (XML-based)                    | Raster (pixel-based)        |
| Scaling       | Infinitely scalable                   | Loses quality when scaled   |
| DOM           | Each element is a DOM node            | Single canvas element       |
| Performance   | Better for small # of elements        | Better for many pixels      |
| Accessibility| Supports text and ARIA               | Not accessible              |
| Animation     | CSS + SMIL + JS                      | JS-based (requestAnimationFrame)|
| Use Cases     | Icons, logos, illustrations, charts   | Games, image processing, video|

## Basic SVG Structure

```html
<svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 100 100" 
  width="200" height="200">
  <circle cx="50" cy="50" r="40" fill="blue" />
</svg>
```

### Key Attributes

| Attribute   | Description                                          |
|-------------|------------------------------------------------------|
| `xmlns`     | XML namespace (required for standalone SVG)          |
| `viewBox`   | `minX minY width height` — defines the coordinate system |
| `width`     | Display width (pixels or percentage)                 |
| `height`    | Display height (pixels or percentage)                 |
| `preserveAspectRatio` | Controls how the viewBox fits the container    |

## Basic Shapes

### Rectangle

```html
<rect x="10" y="10" width="80" height="50" 
      rx="5" ry="5" fill="steelblue" stroke="navy" stroke-width="2" />
```

### Circle

```html
<circle cx="50" cy="50" r="40" fill="coral" />
```

### Ellipse

```html
<ellipse cx="50" cy="50" rx="40" ry="25" fill="gold" />
```

### Line

```html
<line x1="10" y1="10" x2="90" y2="90" stroke="purple" stroke-width="3" />
```

### Polyline

```html
<polyline points="10,10 30,50 50,30 70,60 90,20" 
          fill="none" stroke="green" stroke-width="2" />
```

### Polygon

```html
<polygon points="50,10 90,90 10,90" fill="tomato" />
```

## The Path Element

The `<path>` element is the most powerful SVG shape, using path commands:

| Command | Name          | Parameters                          |
|---------|---------------|-------------------------------------|
| `M`     | Move To       | x y                                 |
| `L`     | Line To       | x y                                 |
| `H`     | Horizontal Line | x                                 |
| `V`     | Vertical Line | y                                   |
| `C`     | Cubic Bezier  | x1 y1, x2 y2, x y                   |
| `S`     | Smooth Cubic  | x2 y2, x y                          |
| `Q`     | Quadratic Bezier | x1 y1, x y                       |
| `T`     | Smooth Quadratic | x y                              |
| `A`     | Arc           | rx ry x-axis-rotation large-arc sweep x y |
| `Z`     | Close Path    | (none)                              |

```html
<path d="M10 10 L90 10 L50 90 Z" fill="steelblue" />
<path d="M10 80 Q 50 10, 90 80" fill="none" stroke="coral" stroke-width="3" />
<path d="M10 80 C 30 10, 70 10, 90 80" fill="none" stroke="gold" stroke-width="3" />
```

## SVG Groups and Styling

### `<g>` (Group)

Groups elements together for transforms and styling:

```html
<g fill="steelblue" stroke="navy" stroke-width="2">
  <rect x="10" y="10" width="30" height="30" />
  <circle cx="65" cy="25" r="15" />
</g>
```

### `<defs>` (Definitions)

Store reusable elements (gradients, filters, symbols):

```html
<svg viewBox="0 0 100 100">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </linearGradient>
  </defs>
  <rect x="10" y="10" width="80" height="80" fill="url(#grad1)" rx="10" />
</svg>
```

## SVG Text

```html
<svg viewBox="0 0 200 100">
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central"
        font-size="24" font-family="Arial" fill="steelblue">
    Hello SVG!
  </text>
</svg>
```

## SVG Filters

```html
<svg viewBox="0 0 200 200">
  <defs>
    <filter id="shadow">
      <feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="rgba(0,0,0,0.5)" />
    </filter>
    <filter id="blur">
      <feGaussianBlur stdDeviation="3" />
    </filter>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <circle cx="100" cy="100" r="50" fill="gold" filter="url(#shadow)" />
</svg>
```

## Common Filters

| Filter Element         | Description                        |
|------------------------|------------------------------------|
| `feGaussianBlur`       | Blurs the image                    |
| `feDropShadow`         | Adds a drop shadow                 |
| `feColorMatrix`        | Color transformation               |
| `feOffset`             | Offsets the image                  |
| `feMerge`              | Merges multiple filter effects     |
| `feBlend`              | Blends two images                  |
| `feTurbulence`         | Creates noise (fire, clouds)       |
| `feDisplacementMap`    | Distorts the image                 |

## SVG Animations

### CSS Animations

```html
<svg viewBox="0 0 200 200">
  <style>
    @keyframes pulse {
      0%, 100% { r: 20; fill: red; }
      50% { r: 40; fill: blue; }
    }
    .animated-circle { animation: pulse 2s ease-in-out infinite; }
  </style>
  <circle class="animated-circle" cx="100" cy="100" r="20" />
</svg>
```

### SMIL Animations (Native SVG)

```html
<svg viewBox="0 0 200 200">
  <circle cx="50" cy="100" r="20" fill="steelblue">
    <animate attributeName="cx" from="50" to="150" 
             dur="2s" repeatCount="indefinite" />
  </circle>
</svg>
```

## Embedding SVG

### Inline SVG (Recommended)

```html
<svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" fill="steelblue" />
</svg>
```

### `<img>` Tag

```html
<img src="icon.svg" alt="Icon" width="48" height="48">
```

### CSS Background

```css
.icon {
  background-image: url('icon.svg');
  width: 48px;
  height: 48px;
}
```

### `<object>` Tag

```html
<object data="graphic.svg" type="image/svg+xml" width="200" height="200">
  <!-- Fallback -->
</object>
```

## JavaScript Manipulation

```javascript
const svg = document.querySelector('svg');
const circle = svg.querySelector('circle');

// Change attributes
circle.setAttribute('fill', 'coral');
circle.setAttribute('r', '50');

// Create elements
const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
rect.setAttribute('x', '10');
rect.setAttribute('y', '10');
rect.setAttribute('width', '80');
rect.setAttribute('height', '40');
rect.setAttribute('fill', 'gold');
svg.appendChild(rect);

// Event handling
circle.addEventListener('click', () => {
  circle.setAttribute('fill', 'red');
});
```

## Common Mistakes

1. **Missing xmlns**: Inline SVG in HTML doesn't need xmlns, but standalone SVG files do.

2. **Wrong viewBox aspect ratio**: Mismatch between viewBox and width/height distorts content.

3. **Hardcoding dimensions**: SVGs should use viewBox for scaling and set dimensions with CSS.

4. **Not optimizing SVGs**: Export SVGs with SVGO to remove unnecessary metadata and group nesting.

5. **Accessibility ignored**: SVG elements are not accessible by default. Use `<title>` and `<desc>`.

6. **Using SVG for complex raster graphics**: SVG performance suffers with thousands of paths.

## Best Practices

1. **Use viewBox**: Always define viewBox for proper scaling. Width/height can be responsive.

2. **Inline for interactivity**: Inline SVGs can be styled with CSS and controlled with JS.

3. **Optimize paths**: Use SVGO or similar tools to reduce file size.

4. **Provide fallbacks**: Use `<img>` with PNG fallback via `<picture>` element.

5. **Make SVGs accessible**: Add `<title>`, `<desc>`, and ARIA attributes.

6. **Use symbols for icons**: Define icons in `<defs><symbol>` and reuse with `<use>`.

7. **Group logically**: Use `<g>` elements to organize related shapes.

8. **Prefer CSS over inline styles**: External stylesheets keep SVGs clean and maintainable.

9. **Use vector-effect**: In SVGs that need scaling with strokes: `vector-effect="non-scaling-stroke"`.

10. **Consider performance**: For animated SVGs with many elements, use will-change and GPU-accelerated properties.

## Summary Notes

- SVG is an XML-based vector image format for 2D graphics
- Infinitely scalable — resolution-independent
- Supports shapes, paths, text, gradients, filters, and animations
- Inline SVGs can be CSS-styled and JS-controlled
- key elements: `<svg>`, `<g>`, `<path>`, `<circle>`, `<rect>`, `<defs>`, `<use>`
- viewBox defines the coordinate system for scaling
- Use `<title>` and `<desc>` for accessibility
- `<path>` uses command strings (M, L, C, Q, A, Z)
- SMIL provides native animation (animate, animateTransform, animateMotion)
- CSS animations and transitions work on SVG properties
- SVGO optimizes SVG files for production
