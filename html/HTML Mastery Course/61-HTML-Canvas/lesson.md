# Module 61: HTML Canvas

## Overview
The HTML `<canvas>` element is a powerful, resolution-dependent bitmap container used for drawing graphics, rendering animations, building games, manipulating images, and creating real-time data visualizations entirely in the browser. Unlike SVG, which is a vector-based declarative format, Canvas provides an imperative, pixel-based drawing surface controlled via JavaScript. This module covers the Canvas API comprehensively, from basic shapes and paths to advanced pixel manipulation, transformations, and animation loops.

## Section 1: Introduction to Canvas

### What is Canvas?
The `<canvas>` element is a rectangular area on an HTML page that serves as a drawing surface. It was introduced by Apple in 2004 for Dashboard widgets and later standardized by the WHATWG. It is part of the HTML5 specification and is supported by all modern browsers.

Key characteristics:
- **Pixel-based (raster)**: Draws individual pixels, unlike SVG which uses vector paths.
- **Immediate mode**: Drawing commands are executed immediately and the canvas does not retain a scene graph. Once drawn, shapes are not remembered as objects.
- **JavaScript-driven**: All drawing operations are performed via a scripting context (usually 2D or WebGL).
- **Single DOM element**: The `<canvas>` tag itself is just a container; all visuals are rendered programmatically.

### Canvas vs SVG
| Feature | Canvas | SVG |
|---------|--------|-----|
| Rendering | Raster (pixel-based) | Vector (shape-based) |
| Performance | Better for many objects | Better for few objects |
| Event handling | Manual (coordinate checking) | Built-in per element |
| Resolution | Depends on canvas size | Resolution-independent |
| DOM | Single element | Multiple elements |
| Accessibility | Requires manual effort | ARIA-friendly |
| Animation | Requires manual loops | CSS/SMIL built-in |

### Basic Canvas Setup
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Canvas Demo</title>
</head>
<body>
  <canvas id="myCanvas" width="800" height="600">
    Your browser does not support the canvas element.
  </canvas>
  <script>
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    // Drawing code goes here
  </script>
</body>
</html>
```

### Canvas Dimensions
Setting canvas dimensions correctly is critical:
- Use HTML attributes `width` and `height` to set the drawing surface size (not CSS alone).
- CSS sizing stretches the canvas visually but does not change the pixel resolution, leading to blurriness.
- For high-DPI (Retina) displays, scale the canvas by `window.devicePixelRatio`.

```javascript
function setupRetinaCanvas(canvas, width, height) {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  return ctx;
}
```

## Section 2: The Canvas Rendering Context

### Getting the Context
The `getContext()` method returns a drawing context object:
- `'2d'` — 2D rendering context (this module's focus)
- `'webgl'` or `'webgl2'` — 3D rendering context
- `'bitmaprenderer'` — ImageBitmap rendering
- `'webgpu'` — Emerging standard

```javascript
const ctx = canvas.getContext('2d', {
  alpha: false,       // performance optimization
  willReadFrequently: false, // optimize for drawing (not reading)
  colorSpace: 'srgb'  // color space
});
```

### Canvas State
The 2D context maintains a state stack. Common state properties include:
- `fillStyle` — fill color/style
- `strokeStyle` — stroke color/style
- `lineWidth` — line thickness
- `lineCap` — end cap style (butt, round, square)
- `lineJoin` — corner style (miter, round, bevel)
- `miterLimit` — miter limit ratio
- `font` — text font
- `textAlign` — text alignment
- `textBaseline` — text baseline
- `shadowColor`, `shadowBlur`, `shadowOffsetX`, `shadowOffsetY`
- `globalAlpha` — global transparency
- `globalCompositeOperation` — blending mode
- `transform` — current transformation matrix

```javascript
ctx.save();   // push current state
ctx.restore(); // pop saved state
```

## Section 3: Drawing Shapes

### Rectangles
Canvas provides three rectangle methods:
```javascript
ctx.fillRect(x, y, w, h);     // Filled rectangle
ctx.strokeRect(x, y, w, h);   // Outlined rectangle
ctx.clearRect(x, y, w, h);    // Transparent rectangle (erases)
```

### Paths
Paths are sequences of sub-paths defined by line segments and curves:

```javascript
ctx.beginPath();
ctx.moveTo(x, y);         // Start a new sub-path
ctx.lineTo(x, y);         // Draw a straight line
ctx.arc(x, y, r, startAngle, endAngle, counterclockwise);
ctx.arcTo(x1, y1, x2, y2, radius);
ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
ctx.quadraticCurveTo(cpx, cpy, x, y);
ctx.ellipse(x, y, rx, ry, rotation, startAngle, endAngle, counterclockwise);
ctx.rect(x, y, w, h);     // Rectangle sub-path
ctx.closePath();          // Close current sub-path
ctx.fill();               // Fill the path
ctx.stroke();             // Stroke the path
```

### Drawing a Triangle
```javascript
function drawTriangle(ctx, x1, y1, x2, y2, x3, y3) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath();
  ctx.fill();
}
```

### Arcs and Circles
```javascript
// Circle centered at (cx, cy) with radius r
ctx.beginPath();
ctx.arc(cx, cy, r, 0, Math.PI * 2);
ctx.fill();

// Semicircle
ctx.beginPath();
ctx.arc(cx, cy, r, 0, Math.PI);
ctx.fill();
```

## Section 4: Colors, Styles, and Gradients

### Fill and Stroke Styles
```javascript
// Color names
ctx.fillStyle = 'red';
ctx.strokeStyle = 'blue';

// Hex values
ctx.fillStyle = '#FF0000';
ctx.strokeStyle = '#0000FF';

// RGB / RGBA
ctx.fillStyle = 'rgb(255, 0, 0)';
ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';

// HSL / HSLA
ctx.fillStyle = 'hsl(120, 100%, 50%)';
ctx.fillStyle = 'hsla(120, 100%, 50%, 0.3)';
```

### Gradients
```javascript
// Linear Gradient
const linearGradient = ctx.createLinearGradient(x0, y0, x1, y1);
linearGradient.addColorStop(0, 'red');
linearGradient.addColorStop(0.5, 'yellow');
linearGradient.addColorStop(1, 'blue');
ctx.fillStyle = linearGradient;

// Radial Gradient
const radialGradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
radialGradient.addColorStop(0, 'white');
radialGradient.addColorStop(1, 'black');
ctx.fillStyle = radialGradient;

// Conic Gradient (newer)
const conicGradient = ctx.createConicGradient(startAngle, x, y);
conicGradient.addColorStop(0, 'red');
conicGradient.addColorStop(0.25, 'yellow');
conicGradient.addColorStop(0.5, 'green');
conicGradient.addColorStop(0.75, 'blue');
conicGradient.addColorStop(1, 'red');
ctx.fillStyle = conicGradient;
```

### Patterns
```javascript
const image = new Image();
image.src = 'pattern.png';
image.onload = () => {
  const pattern = ctx.createPattern(image, 'repeat'); // repeat, repeat-x, repeat-y, no-repeat
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};
```

## Section 5: Lines and Line Styling

```javascript
ctx.lineWidth = 5;
ctx.lineCap = 'round';     // butt (default), round, square
ctx.lineJoin = 'bevel';    // miter (default), round, bevel
ctx.miterLimit = 10;
ctx.setLineDash([5, 10]);  // dash pattern (dash length, gap length)
ctx.lineDashOffset = 0;
```

## Section 6: Text

```javascript
ctx.font = '48px serif';
ctx.fillStyle = 'black';
ctx.textAlign = 'left';     // left, right, center, start, end
ctx.textBaseline = 'top';   // top, hanging, middle, alphabetic, ideographic, bottom

// Filled text
ctx.fillText('Hello Canvas', x, y, maxWidth);

// Stroked text
ctx.strokeText('Hello Canvas', x, y, maxWidth);

// Measure text width
const metrics = ctx.measureText('Hello');
console.log(metrics.width);
// Additional metrics: actualBoundingBoxAscent, actualBoundingBoxDescent, etc.
```

## Section 7: Images

### Drawing Images
```javascript
const img = new Image();
img.src = 'image.jpg';
img.onload = () => {
  // Draw image at (x, y)
  ctx.drawImage(img, x, y);

  // Draw scaled image
  ctx.drawImage(img, x, y, width, height);

  // Draw a portion of the source image
  ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
};
```

### Image Data (Pixel Manipulation)
```javascript
// Get pixel data
const imageData = ctx.getImageData(x, y, width, height);
const data = imageData.data; // Uint8ClampedArray [R, G, B, A, R, G, B, A, ...]

// Create blank image data
const newImageData = ctx.createImageData(width, height);

// Put pixel data back
ctx.putImageData(imageData, x, y);
```

### Example: Invert Colors
```javascript
function invertColors(imageData) {
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    data[i]     = 255 - data[i];     // R
    data[i + 1] = 255 - data[i + 1]; // G
    data[i + 2] = 255 - data[i + 2]; // B
    // data[i + 3] is alpha — leave unchanged
  }
  return imageData;
}
```

## Section 8: Transformations

```javascript
ctx.save();

// Translation
ctx.translate(tx, ty);

// Rotation (in radians)
ctx.rotate(angle);

// Scaling
ctx.scale(sx, sy);

// Transformation matrix
// a, b, c, d, e, f correspond to:
// | a  c  e |
// | b  d  f |
// | 0  0  1 |
ctx.transform(a, b, c, d, e, f);

// Set absolute transform
ctx.setTransform(a, b, c, d, e, f);

// Reset to identity matrix
ctx.resetTransform();

ctx.restore();
```

## Section 9: Compositing and Clipping

### Global Composite Operations
```javascript
ctx.globalCompositeOperation = 'source-over'; // default
// Options: source-over, source-atop, source-in, source-out,
//          destination-over, destination-atop, destination-in, destination-out,
//          lighter, copy, xor, multiply, screen, overlay, darken,
//          lighten, color-dodge, color-burn, hard-light, soft-light,
//          difference, exclusion, hue, saturation, color, luminosity
```

### Clipping
```javascript
ctx.beginPath();
ctx.arc(200, 200, 100, 0, Math.PI * 2);
ctx.clip(); // All subsequent drawing is clipped to this circle

// Draw a large rectangle — will be clipped to the circle
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

## Section 10: Shadows

```javascript
ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
ctx.shadowBlur = 10;
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;

ctx.fillStyle = 'blue';
ctx.fillRect(100, 100, 100, 100);
```

## Section 11: Animation

### Request Animation Frame Loop
```javascript
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update state
  // Draw frame

  requestAnimationFrame(animate);
}

animate();
```

### Frame Rate Control
```javascript
let lastTime = 0;
const fps = 60;
const interval = 1000 / fps;

function animate(timestamp) {
  const deltaTime = timestamp - lastTime;

  if (deltaTime >= interval) {
    lastTime = timestamp - (deltaTime % interval);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw frame
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
```

## Section 12: Performance Optimization

### Best Practices
1. **Batch draw calls**: Minimize state changes (fillStyle, strokeStyle, etc.).
2. **Use `save()`/`restore()` sparingly**: Each call saves/restores the entire state.
3. **Avoid `getImageData()` in hot loops**: Reading pixel data is slow.
4. **Off-screen canvas**: Pre-render static elements to an off-screen canvas.
5. **Only redraw what changed**: Use dirty rectangles.
6. **Use `requestAnimationFrame`** instead of `setInterval`.
7. **Disable alpha channel** if not needed: `getContext('2d', { alpha: false })`.
8. **Use integer coordinates** to avoid sub-pixel rendering overhead.
9. **Limit shadow usage**: Shadows are expensive.
10. **Use `globalCompositeOperation` efficiently**.

### Off-screen Canvas
```javascript
const offscreen = document.createElement('canvas');
offscreen.width = 400;
offscreen.height = 400;
const offCtx = offscreen.getContext('2d');

// Draw static content once
offCtx.fillStyle = 'red';
offCtx.fillRect(0, 0, 400, 400);

// In animation loop, just draw the pre-rendered canvas
ctx.drawImage(offscreen, 0, 0);
```

## Section 13: Event Handling on Canvas

Since Canvas is a single DOM element, you must calculate coordinates manually:

```javascript
canvas.addEventListener('click', (event) => {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const x = (event.clientX - rect.left) * scaleX;
  const y = (event.clientY - rect.top) * scaleY;
  // Check if (x, y) is within any drawn object
});
```

### Hit Detection Techniques
1. **Bounding box checking**: AABB collision detection.
2. **Distance-based**: For circles, check distance from center.
3. **Color-based**: Render each object with a unique color on an off-screen canvas, then check pixel color.
4. **Path-based**: Use `ctx.isPointInPath(x, y)` and `ctx.isPointInStroke(x, y)`.

## Section 14: Responsive Canvas

```javascript
function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  const displayWidth = window.innerWidth;
  const displayHeight = window.innerHeight;

  canvas.width = displayWidth * dpr;
  canvas.height = displayHeight * dpr;
  canvas.style.width = displayWidth + 'px';
  canvas.style.height = displayHeight + 'px';

  ctx.scale(dpr, dpr);
}

window.addEventListener('resize', resizeCanvas);
```

## Section 15: Canvas and Accessibility

Canvas is inherently inaccessible — screen readers cannot interpret pixel content. Mitigations:
1. Provide fallback content inside the `<canvas>` element.
2. Use ARIA attributes: `role="img"`, `aria-label`.
3. Provide keyboard navigation for interactive canvases.
4. Use the `canvas.setAttribute('role', 'img')` pattern.
5. For complex visualizations, provide a data table alternative.

## Section 16: Browser Support and Fallbacks

Canvas is supported in all modern browsers. Fallback content inside the `<canvas>` element is displayed when Canvas is not supported:

```html
<canvas id="myCanvas" width="800" height="600">
  <p>Your browser does not support Canvas. Please upgrade to a modern browser.</p>
</canvas>
```

## Common Pitfalls

1. **Canvas size vs. CSS size mismatch**: Always set `width`/`height` attributes.
2. **Forgetting `beginPath()`**: Paths accumulate unless you start a new one.
3. **Not handling `devicePixelRatio`**: Causes blurry text and shapes on Retina displays.
4. **Memory leaks in animations**: Ensure clean up of animation frames.
5. **Image loading race conditions**: Always use `onload` or `img.complete` before drawing.

## Summary

The HTML Canvas API gives developers pixel-level control over graphics rendering in the browser. From simple shapes to complex animations, data visualizations, and games, Canvas is a versatile tool. Understanding the rendering context, state management, paths, transformations, and performance optimization is essential for building high-quality Canvas-based applications.
