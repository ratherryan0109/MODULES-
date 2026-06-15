# Module 61 Project: Interactive Canvas Drawing Application

## Project Overview
Build a full-featured interactive drawing application using the HTML Canvas API. This application will allow users to draw, paint, add text, apply filters, and export their creations. The project tests all major Canvas concepts: paths, colors, gradients, text, image manipulation, event handling, and export functionality.

## Learning Objectives
- Implement mouse/touch event handling on canvas
- Create drawing tools with different brush styles
- Build an undo/redo system using canvas state snapshots
- Apply image filters via pixel manipulation
- Implement text tools with font selection
- Export canvas content to image files
- Optimize canvas performance for smooth drawing

## Requirements

### Core Features
1. **Drawing Tools**: Pen, eraser, line, rectangle, circle, and spray paint tools
2. **Brush Customization**: Color picker, brush size slider (1-50px), opacity control
3. **Shape Tools**: Draw filled/stroked rectangles, circles, and lines with preview
4. **Text Tool**: Click to add text with font family, size, color, and bold/italic options
5. **Fill Tool**: Flood fill bounded areas using pixel-based algorithm
6. **Undo/Redo**: At least 20 history steps using canvas snapshots
7. **Canvas Resize**: Change canvas dimensions (preserve content or clear)
8. **Clear Canvas**: Clear entire canvas with confirmation dialog
9. **Export**: Save as PNG and JPEG with quality slider for JPEG
10. **Color Palette**: Pre-set color palette with custom color picker

### UI Requirements
- Toolbar with all tool icons (use emoji or simple text labels)
- Color palette with at least 12 preset colors
- Brush size slider with live preview
- Status bar showing current tool, coordinates, and zoom level
- Responsive layout that works on desktop and tablet
- Keyboard shortcuts for common actions

### Technical Requirements
- Use `requestAnimationFrame` for smooth drawing
- Implement proper coordinate scaling for high-DPI (Retina) displays
- Handle both mouse and touch events
- Minimum 800x500 canvas size
- All tools implemented in a single HTML file with embedded CSS and JavaScript
- No external libraries or frameworks

## Suggested Architecture

### JavaScript Structure
```javascript
const DrawingApp = {
  canvas: null,
  ctx: null,
  currentTool: 'pen',
  brushColor: '#000000',
  brushSize: 5,
  opacity: 1.0,
  history: [],
  historyIndex: -1,
  maxHistory: 20,
  isDrawing: false,
  startX: 0,
  startY: 0,

  init() { /* setup */ },
  setupCanvas() { /* Retina setup */ },
  setupTools() { /* tool event bindings */ },
  setupEvents() { /* mouse/touch events */ },

  // Drawing methods
  startDraw(e) {},
  draw(e) {},
  endDraw(e) {},

  // Tool implementations
  drawPen(e) {},
  drawEraser(e) {},
  drawLine(e) {},
  drawRect(e) {},
  drawCircle(e) {},
  sprayPaint(e) {},

  // History
  saveState() {},
  undo() {},
  redo() {},

  // Export
  exportToPNG() {},
  exportToJPEG(quality) {},

  // Utilities
  getCanvasCoords(e) {},
  floodFill(x, y, fillColor) {}
};
```

### Tool Implementation Details

**Pen Tool**: Connect points with lineTo() for smooth strokes.
```javascript
// In mousemove:
ctx.lineTo(x, y);
ctx.stroke();
```

**Shape Tools**: Show preview during drag, draw final on mouseup.
```javascript
// In mousemove (preview):
ctx.putImageData(snapshot, 0, 0);
ctx.strokeRect(startX, startY, width, height);
```

**Spray Paint**: Random dots within a radius.
```javascript
for (let i = 0; i < density; i++) {
  const angle = Math.random() * Math.PI * 2;
  const dist = Math.random() * radius;
  ctx.fillRect(x + cos * dist, y + sin * dist, 1, 1);
}
```

**Flood Fill**: Use a stack-based or queue-based algorithm.
```javascript
function floodFill(startX, startY, fillColor) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const targetColor = getPixel(imageData, startX, startY);
  if (colorsMatch(targetColor, fillColor)) return;
  const pixels = [[startX, startY]];
  while (pixels.length > 0) {
    const [x, y] = pixels.pop();
    if (outOfBounds(x, y) || !colorsMatch(getPixel(imageData, x, y), targetColor)) continue;
    setPixel(imageData, x, y, fillColor);
    pixels.push([x+1, y], [x-1, y], [x, y+1], [x, y-1]);
  }
  ctx.putImageData(imageData, 0, 0);
}
```

## Implementation Guide

### Step 1: HTML Structure
Create the HTML layout with:
- A top toolbar with tool buttons, color palette, brush controls
- The canvas element centered on the page
- A bottom status bar

### Step 2: Canvas Setup
Implement Retina display support and context initialization.

### Step 3: Core Drawing
Implement the pen tool with proper event handling (mousedown, mousemove, mouseup, and touch equivalents).

### Step 4: Shape Tools
Add rectangle, circle, and line tools with rubber-band preview.

### Step 5: History System
Save canvas state as an ImageData snapshot after each action. Implement undo/redo by restoring snapshots.

### Step 6: Additional Tools
Implement eraser, spray paint, text tool, and flood fill.

### Step 7: Export
Add toDataURL() and toBlob() export with quality options.

### Step 8: Polish
Add keyboard shortcuts, touch support, status bar updates, and responsive design.

## Keyboard Shortcuts
| Key | Action |
|-----|--------|
| P | Pen tool |
| E | Eraser |
| L | Line tool |
| R | Rectangle tool |
| C | Circle tool |
| T | Text tool |
| F | Fill tool |
| S | Spray paint |
| Ctrl+Z | Undo |
| Ctrl+Y | Redo |
| Ctrl+S | Save/Export PNG |

## Bonus Features
- **Layer system**: Multiple canvas layers with visibility toggle
- **Zoom**: Canvas zoom with pan
- **Filters**: Apply filters (grayscale, sepia, blur) to entire canvas
- **Shapes**: Add stars, polygons, and arrows
- **Gradient fill**: Fill with linear or radial gradient
- **Grid overlay**: Toggle grid for precise drawing
- **Mirror mode**: Draw symmetrically across X or Y axis

## Validation Checklist
- [ ] All drawing tools work correctly
- [ ] Color picker and brush size function properly
- [ ] Undo/redo works with at least 20 steps
- [ ] Text tool allows font selection and placement
- [ ] Flood fill fills bounded areas correctly
- [ ] Export saves canvas as PNG and JPEG
- [ ] Touch events work on tablet devices
- [ ] Canvas renders crisply on Retina displays
- [ ] Keyboard shortcuts are functional
- [ ] UI is responsive and usable

## Submission
Submit a single `index.html` file containing all HTML, CSS, and JavaScript. Include a README with instructions and a screenshot of your application.
