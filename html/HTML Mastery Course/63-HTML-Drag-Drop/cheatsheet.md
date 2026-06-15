# HTML Drag & Drop Cheatsheet

## Setup
```html
<!-- Make element draggable -->
<div draggable="true">Drag me</div>

<!-- Drop target -->
<div id="drop-zone" class="drop-zone">Drop here</div>
```

## Event Lifecycle
```
dragstart → drag → dragenter → dragover → dragleave → drop → dragend
(source)    (source)  (target)     (target)   (target)   (target) (source)
```

## Drag Source Events
```javascript
element.addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('text/plain', element.id);
  event.dataTransfer.effectAllowed = 'move';
  element.classList.add('dragging');
});

element.addEventListener('drag', (event) => {
  // Fires continuously while dragging
});

element.addEventListener('dragend', (event) => {
  element.classList.remove('dragging');
  // Clean up any visual states
});
```

## Drop Target Events
```javascript
target.addEventListener('dragenter', (event) => {
  event.preventDefault();
  target.classList.add('active');
});

target.addEventListener('dragover', (event) => {
  event.preventDefault();  // REQUIRED to allow drop
  event.dataTransfer.dropEffect = 'move';
  target.classList.add('drag-over');
});

target.addEventListener('dragleave', (event) => {
  target.classList.remove('active', 'drag-over');
});

target.addEventListener('drop', (event) => {
  event.preventDefault();
  target.classList.remove('active', 'drag-over');
  const data = event.dataTransfer.getData('text/plain');
  const dragged = document.getElementById(data);
  target.appendChild(dragged);
});
```

## DataTransfer Methods
| Method/Property | Description |
|---|---|
| `setData(format, data)` | Store data (e.g., 'text/plain') |
| `getData(format)` | Retrieve data |
| `clearData(format)` | Remove data |
| `setDragImage(img, x, y)` | Custom drag image |
| `effectAllowed` | Source: allowed operations |
| `dropEffect` | Target: current operation |
| `files` | FileList of dropped files |
| `items` | DataTransferItemList |
| `types` | Array of MIME types |

## Data Formats
```javascript
// Standard MIME types
event.dataTransfer.setData('text/plain', 'Hello');
event.dataTransfer.setData('text/html', '<p>Hello</p>');
event.dataTransfer.setData('text/uri-list', 'https://example.com');
// Custom types (browser-dependent)
event.dataTransfer.setData('application/x-myapp', 'custom data');
```

## Effects
```javascript
// On drag source (dragstart)
event.dataTransfer.effectAllowed = 'none' | 'copy' | 'move' | 'link'
  | 'copyMove' | 'copyLink' | 'linkMove' | 'all';

// On drop target (dragover)
event.dataTransfer.dropEffect = 'none' | 'copy' | 'move' | 'link';
```

## File Drop Handling
```javascript
dropZone.addEventListener('drop', (event) => {
  event.preventDefault();
  const files = event.dataTransfer.files;

  Array.from(files).forEach(file => {
    // Validate type
    if (!file.type.startsWith('image/')) return;
    // Validate size (5MB)
    if (file.size > 5 * 1024 * 1024) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement('img');
      img.src = e.target.result;
      dropZone.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
});
```

## Custom Drag Image
```javascript
element.addEventListener('dragstart', (event) => {
  // From canvas
  const canvas = document.createElement('canvas');
  canvas.width = 80;
  canvas.height = 40;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#3498db';
  ctx.fillRect(0, 0, 80, 40);
  ctx.fillStyle = 'white';
  ctx.font = '12px Arial';
  ctx.fillText('Moving...', 10, 25);

  event.dataTransfer.setDragImage(canvas, 40, 20);
});
```

## CSS Styling
```css
.dragging {
  opacity: 0.5;
  transform: scale(0.95);
}

.drop-zone.drag-over {
  border-color: #3498db;
  background: rgba(52, 152, 219, 0.1);
}

.drop-zone.active {
  border: 2px dashed #3498db;
  background: #f0f8ff;
}
```

## Touch Support (Custom)
```javascript
let dragElement = null;

element.addEventListener('touchstart', (e) => {
  dragElement = e.target;
  dragElement.classList.add('dragging');
});

document.addEventListener('touchmove', (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  if (dragElement) {
    dragElement.style.position = 'fixed';
    dragElement.style.left = touch.clientX - 30 + 'px';
    dragElement.style.top = touch.clientY - 30 + 'px';
  }
});

document.addEventListener('touchend', (e) => {
  if (dragElement) {
    dragElement.style.position = '';
    dragElement.style.left = '';
    dragElement.style.top = '';
    dragElement.classList.remove('dragging');
    // Hit test drop zone
    const drop = document.elementFromPoint(
      e.changedTouches[0].clientX,
      e.changedTouches[0].clientY
    );
    if (drop && drop.dataset.dropzone) {
      drop.appendChild(dragElement);
    }
    dragElement = null;
  }
});
```

## Best Practices
- Always call `preventDefault()` on `dragover` to enable drops
- Use `save()/restore()` for drag visual states
- Handle `dragenter`/`dragleave` nesting with counters
- Sanitize dragged HTML to prevent XSS
- Provide keyboard alternatives for accessibility
- Test on touch devices (native API not supported)

## Browser Support
- ✅ All modern desktop browsers
- ❌ No native touch device support
- ⚠️ `items` property not supported in Safari
