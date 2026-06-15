# Module 63: HTML Drag & Drop API

## Overview
The HTML Drag and Drop (DnD) API enables web applications to implement native drag-and-drop functionality using mouse events. It allows users to select draggable elements, drag them over drop zones, and drop them to trigger actions. The API provides a standardized way to implement drag-and-drop across browsers, supporting both internal page operations and external file integration. This module covers the complete Drag and Drop API, including drag events, data transfer, custom drag feedback, file uploads, and accessibility considerations.

## Section 1: Introduction to Drag and Drop

### What is the Drag and Drop API?
The Drag and Drop API is a set of interfaces and events that enable native drag-and-drop functionality in the browser. It was standardized in HTML5 and provides:

- **Draggable elements**: Elements that can be picked up and moved
- **Drop targets**: Elements that can accept dropped content
- **Data transfer**: Mechanism to pass data between drag source and drop target
- **Visual feedback**: Custom drag images and cursor changes
- **File support**: Drag files from the desktop into the browser

### Key Concepts
- **Drag source**: The element being dragged
- **Drop target**: The element where the draggable is dropped
- **DataTransfer object**: Holds the data being transferred during the drag operation
- **Drag events**: Fired on both source and target elements throughout the operation

## Section 2: Making Elements Draggable

### The `draggable` Attribute
To make an element draggable, add the `draggable` attribute:

```html
<div draggable="true">Drag me</div>
<img src="photo.jpg" draggable="false"> <!-- Images are draggable by default -->
```

Values: `true`, `false`, `auto` (browser default behavior)

### dragstart Event
Fired on the drag source when dragging begins:

```javascript
element.addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('text/plain', element.id);
  event.dataTransfer.effectAllowed = 'move';
  element.classList.add('dragging');
});
```

### dragend Event
Fired on the drag source when dragging ends (whether successful or not):

```javascript
element.addEventListener('dragend', (event) => {
  element.classList.remove('dragging');
});
```

## Section 3: Drop Targets

### dragover Event
Fired repeatedly on a drop target while a draggable is over it. Must call `preventDefault()` to allow dropping:

```javascript
dropZone.addEventListener('dragover', (event) => {
  event.preventDefault(); // Required to allow drop
  event.dataTransfer.dropEffect = 'move';
  dropZone.classList.add('drag-over');
});
```

### dragenter Event
Fired when a draggable enters a drop target:

```javascript
dropZone.addEventListener('dragenter', (event) => {
  event.preventDefault();
  dropZone.classList.add('active');
});
```

### dragleave Event
Fired when a draggable leaves a drop target:

```javascript
dropZone.addEventListener('dragleave', (event) => {
  dropZone.classList.remove('active', 'drag-over');
});
```

### drop Event
Fired when a draggable is dropped on a valid target:

```javascript
dropZone.addEventListener('drop', (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData('text/plain');
  const draggedElement = document.getElementById(data);
  dropZone.appendChild(draggedElement);
  dropZone.classList.remove('active', 'drag-over');
});
```

## Section 4: The DataTransfer Object

### Setting Data
```javascript
// Text data
event.dataTransfer.setData('text/plain', 'Hello World');

// HTML data
event.dataTransfer.setData('text/html', '<p>HTML content</p>');

// URL data
event.dataTransfer.setData('text/uri-list', 'https://example.com');

// Multiple data types
event.dataTransfer.setData('text/plain', item.id);
event.dataTransfer.setData('text/html', item.outerHTML);
```

### Getting Data
```javascript
const text = event.dataTransfer.getData('text/plain');
const html = event.dataTransfer.getData('text/html');
const url = event.dataTransfer.getData('text/uri-list');
```

### Clearing Data
```javascript
event.dataTransfer.clearData();        // Clear all data
event.dataTransfer.clearData('text/plain'); // Clear specific format
```

### DataTransfer Properties

**`effectAllowed`**: Specifies the type of operation allowed on the drag source
```javascript
event.dataTransfer.effectAllowed = 'move';    // Default per drag source
// 'none', 'copy', 'move', 'link', 'copyMove', 'copyLink', 'linkMove', 'all'
```

**`dropEffect`**: Specifies the current operation effect on the drop target
```javascript
event.dataTransfer.dropEffect = 'move';
// 'none', 'copy', 'move', 'link'
```

**`items`**: Read-only list of DataTransferItem objects
```javascript
for (const item of event.dataTransfer.items) {
  console.log(item.kind, item.type); // 'string', 'file'
}
```

**`files`**: Read-only FileList of dropped files
```javascript
const files = event.dataTransfer.files;
for (const file of files) {
  console.log(file.name, file.size, file.type);
}
```

## Section 5: Custom Drag Feedback

### Custom Drag Image
```javascript
element.addEventListener('dragstart', (event) => {
  // Create a custom image
  const img = new Image();
  img.src = 'drag-cursor.png';

  // Or use a canvas/HTML element
  const canvas = document.createElement('canvas');
  canvas.width = 100;
  canvas.height = 50;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#3498db';
  ctx.fillRect(0, 0, 100, 50);
  ctx.fillStyle = 'white';
  ctx.font = '14px Arial';
  ctx.fillText('Dragging...', 10, 30);

  // Set drag image (offsetX, offsetY are the cursor offset from the image top-left)
  event.dataTransfer.setDragImage(img, 50, 25);
});
```

### Styling During Drag
```css
.dragging {
  opacity: 0.5;
  transform: scale(0.95);
}

.drag-over {
  border-color: #3498db;
  background: rgba(52, 152, 219, 0.1);
}

.drop-zone.active {
  border: 2px dashed #3498db;
  background: #f0f8ff;
}
```

## Section 6: Drag Events Lifecycle

The complete sequence of events during a drag-and-drop operation:

1. `dragstart` — User starts dragging (source)
2. `drag` — Repeatedly while dragging (source)
3. `dragenter` — Enters a potential drop target (target)
4. `dragover` — Repeatedly while over the target (target)
5. `dragleave` — Leaves the target (target)
6. `drop` — Dropped on valid target (target)
7. `dragend` — Drag operation ends (source)

```javascript
// Source events
source.addEventListener('dragstart', handleDragStart);
source.addEventListener('drag', handleDrag);
source.addEventListener('dragend', handleDragEnd);

// Target events
target.addEventListener('dragenter', handleDragEnter);
target.addEventListener('dragover', handleDragOver);
target.addEventListener('dragleave', handleDragLeave);
target.addEventListener('drop', handleDrop);
```

## Section 7: File Drag and Drop

### Accepting File Drops
```javascript
const dropZone = document.getElementById('drop-zone');

dropZone.addEventListener('dragover', (event) => {
  event.preventDefault();
});

dropZone.addEventListener('drop', (event) => {
  event.preventDefault();
  const files = event.dataTransfer.files;

  for (const file of files) {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = document.createElement('img');
        img.src = e.target.result;
        dropZone.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  }
});
```

### File Type Validation
```javascript
dropZone.addEventListener('drop', (event) => {
  event.preventDefault();
  const files = event.dataTransfer.files;

  Array.from(files).forEach(file => {
    // Check file type
    if (!file.type.match('image.*')) {
      showError('Only images are allowed');
      return;
    }

    // Check file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      showError('File too large (max 5MB)');
      return;
    }

    // Process file
    uploadFile(file);
  });
});
```

### Upload Progress
```javascript
function uploadFile(file) {
  const formData = new FormData();
  formData.append('file', file);

  const xhr = new XMLHttpRequest();
  xhr.upload.addEventListener('progress', (event) => {
    if (event.lengthComputable) {
      const percent = (event.loaded / event.total) * 100;
      progressBar.style.width = percent + '%';
    }
  });
  xhr.open('POST', '/upload');
  xhr.send(formData);
}
```

## Section 8: Cross-Origin and Security

### Same-Origin Policy
- Drag data cannot be read from cross-origin drag sources
- `getData()` only works for types that were set in the same drag session
- File drops from the OS are not subject to same-origin restrictions

### Security Best Practices
```javascript
// Validate dropped content
dropZone.addEventListener('drop', (event) => {
  event.preventDefault();

  // Only accept data from trusted sources
  const types = event.dataTransfer.types;
  if (!types.includes('text/plain')) {
    return;
  }

  // Sanitize dragged HTML before insertion
  const html = event.dataTransfer.getData('text/html');
  const sanitized = sanitizeHTML(html);
  target.innerHTML = sanitized;
});
```

## Section 9: Touch Device Support

The Drag and Drop API does not work on touch devices natively. Workarounds include:

### Using Touch Events
```javascript
let dragElement = null;

element.addEventListener('touchstart', (event) => {
  dragElement = event.target;
  dragElement.classList.add('dragging');
});

document.addEventListener('touchmove', (event) => {
  event.preventDefault();
  const touch = event.touches[0];
  if (dragElement) {
    dragElement.style.position = 'fixed';
    dragElement.style.left = touch.clientX - 30 + 'px';
    dragElement.style.top = touch.clientY - 30 + 'px';
  }
});

document.addEventListener('touchend', (event) => {
  if (dragElement) {
    // Hit test drop zones
    const dropZone = document.elementFromPoint(
      event.changedTouches[0].clientX,
      event.changedTouches[0].clientY
    );
    if (dropZone && dropZone.classList.contains('drop-zone')) {
      dropZone.appendChild(dragElement);
    }
    dragElement.style.position = '';
    dragElement.style.left = '';
    dragElement.style.top = '';
    dragElement.classList.remove('dragging');
    dragElement = null;
  }
});
```

### Polyfill Libraries
- **MobileDragDrop**: Polyfills drag-and-drop for touch devices
- **SortableJS**: Works with both mouse and touch (recommended alternative)

## Section 10: Drag and Drop Best Practices

1. **Always call `preventDefault()` on `dragover`** to enable dropping
2. **Provide visual feedback** when hovering over drop targets
3. **Use `effectAllowed` and `dropEffect`** appropriately for UX clarity
4. **Fall back gracefully** when DnD is not supported
5. **Avoid memory leaks** by removing event listeners when cleaning up
6. **Test with keyboard accessibility** — DnD is inherently mouse-dependent
7. **Provide alternative interactions** (buttons, menus) for accessibility
8. **Validate files** before processing on file drops
9. **Sanitize dragged HTML** to prevent XSS attacks
10. **Use `stopPropagation()`** to prevent drag events from bubbling unexpectedly

## Section 11: Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Basic DnD | ✅ | ✅ | ✅ | ✅ |
| `setDragImage()` | ✅ | ✅ | ✅ | ✅ |
| `files` property | ✅ | ✅ | ✅ | ✅ |
| `items` property | ✅ | ✅ | ❌ | ✅ |
| Touch support | ❌ | ❌ | ❌ | ❌ |

## Common Pitfalls

1. **Forgetting `preventDefault()` on `dragover`**: The drop event won't fire.
2. **Calling `getData()` outside of `drop` event**: Data is only available in `drop` and `dragend` events.
3. **Not handling `dragenter`/`dragleave` correctly**: These fire on child elements too.
4. **Using `setData()`/`getData()` with custom types**: Custom types may not work in all browsers; prefer standard types.
5. **Not cleaning up drag classes**: Always remove visual states in `dragend`.

## Summary

The HTML Drag and Drop API provides a powerful native interface for implementing drag-and-drop interactions. Understanding the event lifecycle, DataTransfer object, and proper visual feedback patterns is essential for creating intuitive drag-and-drop interfaces. For touch devices, fallback to touch events or use a polyfill library.
