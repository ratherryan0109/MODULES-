# HTML Canvas Cheatsheet

## Setup
```html
<canvas id="c" width="800" height="600">Fallback text</canvas>
<script>const ctx = document.getElementById('c').getContext('2d');</script>
```

## Retina / HiDPI Setup
```javascript
const dpr = window.devicePixelRatio || 1;
canvas.width = displayWidth * dpr;
canvas.height = displayHeight * dpr;
canvas.style.width = displayWidth + 'px';
canvas.style.height = displayHeight + 'px';
ctx.scale(dpr, dpr);
```

## State Management
| Method | Description |
|--------|-------------|
| `ctx.save()` | Push current state onto stack |
| `ctx.restore()` | Pop last saved state |

## Rectangles
| Method | Description |
|--------|-------------|
| `fillRect(x, y, w, h)` | Filled rectangle |
| `strokeRect(x, y, w, h)` | Outlined rectangle |
| `clearRect(x, y, w, h)` | Erase to transparent |

## Path Methods
```javascript
ctx.beginPath()           // Start new path
ctx.closePath()           // Close sub-path (line to start)
ctx.moveTo(x, y)          // Move pen
ctx.lineTo(x, y)          // Straight line
ctx.arc(x, y, r, a1, a2, ccw)  // Arc/circle
ctx.arcTo(x1, y1, x2, y2, r)   // Connected arc
ctx.quadraticCurveTo(cpx, cpy, x, y)  // Quad bezier
ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)  // Cubic bezier
ctx.ellipse(x, y, rx, ry, rot, a1, a2, ccw)  // Ellipse
ctx.rect(x, y, w, h)      // Rectangle sub-path
ctx.fill()                // Fill current path
ctx.stroke()              // Stroke current path
ctx.clip()                // Clip to current path
```

## Colors & Styles
```javascript
ctx.fillStyle = 'red' | '#FF0000' | 'rgb(255,0,0)' | 'rgba(255,0,0,0.5)'
ctx.strokeStyle = 'blue'
ctx.globalAlpha = 0.5     // Overall transparency
```

## Gradients
```javascript
const lg = ctx.createLinearGradient(x0, y0, x1, y1);
const rg = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
const cg = ctx.createConicGradient(startAngle, x, y);
gradient.addColorStop(offset, color);
```

## Line Styling
| Property | Values |
|----------|--------|
| `lineWidth` | Number (default 1) |
| `lineCap` | `butt` (default), `round`, `square` |
| `lineJoin` | `miter` (default), `round`, `bevel` |
| `miterLimit` | Number (default 10) |
| `setLineDash([dash, gap])` | Dash pattern array |
| `lineDashOffset` | Number |

## Text
```javascript
ctx.font = '48px serif'
ctx.textAlign = 'start' | 'left' | 'center' | 'right' | 'end'
ctx.textBaseline = 'top' | 'hanging' | 'middle' | 'alphabetic' | 'ideographic' | 'bottom'
ctx.fillText(text, x, y, maxWidth)
ctx.strokeText(text, x, y, maxWidth)
const w = ctx.measureText(text).width
```

## Images
```javascript
ctx.drawImage(img, dx, dy)
ctx.drawImage(img, dx, dy, dw, dh)
ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
```

## Pixel Manipulation
```javascript
const imgData = ctx.getImageData(x, y, w, h);
const data = imgData.data;  // Uint8ClampedArray [R,G,B,A, R,G,B,A, ...]
const newImg = ctx.createImageData(w, h);
ctx.putImageData(imgData, dx, dy);
```

## Transformations
| Method | Description |
|--------|-------------|
| `translate(tx, ty)` | Move origin |
| `rotate(angle)` | Rotate (radians) |
| `scale(sx, sy)` | Scale axes |
| `transform(a, b, c, d, e, f)` | Multiply matrix |
| `setTransform(a, b, c, d, e, f)` | Reset + set matrix |
| `resetTransform()` | Identity matrix |

## Compositing
```javascript
ctx.globalCompositeOperation = 'source-over' // default
// source-in, source-out, source-atop, destination-over,
// destination-in, destination-out, destination-atop,
// lighter, copy, xor, multiply, screen, overlay,
// darken, lighten, color-dodge, color-burn, hard-light,
// soft-light, difference, exclusion, hue, saturation,
// color, luminosity
```

## Shadows
```javascript
ctx.shadowColor = 'rgba(0,0,0,0.5)'
ctx.shadowBlur = 10
ctx.shadowOffsetX = 5
ctx.shadowOffsetY = 5
```

## Animation
```javascript
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // update and draw
  requestAnimationFrame(animate);
}
animate();
```

## Event / Hit Detection
```javascript
canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = (e.clientX - rect.left) * (canvas.width / rect.width);
  const y = (e.clientY - rect.top) * (canvas.height / rect.height);
  if (ctx.isPointInPath(x, y)) { /* hit */ }
});
```

## Export
```javascript
const dataURL = canvas.toDataURL('image/png');
canvas.toBlob(blob => { /* use blob */ }, 'image/jpeg', 0.9);
```

## Performance Tips
- Pre-render static content to off-screen canvas
- Minimize state changes (group by fillStyle, etc.)
- Avoid shadows in hot loops
- Use `alpha: false` in getContext if transparency not needed
- Use `willReadFrequently: true` if calling getImageData often
- Batch draw calls by style
- Use integer coordinates
- Use dirty rectangle updates
