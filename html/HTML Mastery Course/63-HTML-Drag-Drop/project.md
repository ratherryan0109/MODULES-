# Module 63 Project: Full-Featured File Manager Dashboard

## Project Overview
Build a browser-based file manager that uses drag-and-drop extensively for file organization. Users can upload files via drag-drop, organize them into folders by dragging, reorder files, create folder structures, preview files, and manage their file system entirely through drag-and-drop interactions.

## Learning Objectives
- Implement complex drag-and-drop interactions with multiple drop zones
- Handle file drops from the operating system with validation
- Build a hierarchical folder system with drag-to-move functionality
- Implement drag-and-drop reordering within and between containers
- Create visual feedback systems for drag operations
- Persist application state using localStorage
- Handle touch events for mobile drag-and-drop support
- Implement undo/redo for drag operations

## Requirements

### Core Features

1. **File Browser Layout**
   - Left sidebar: folder tree (collapsible, hierarchical)
   - Main area: file grid/list view showing current folder contents
   - Top toolbar: breadcrumb navigation, view toggle, search
   - Status bar: showing item count, selected items, total size

2. **Drag from OS Upload**
   - Drop zone overlay when dragging files over the window
   - File validation (type, size, duplicate detection)
   - Upload progress indicator per file
   - Thumbnail preview for images
   - File type icons for documents

3. **Drag-to-Move Files**
   - Drag files between folders in the tree sidebar
   - Drag files to folder breadcrumb segments
   - Drop files onto folder icons to move them
   - Visual highlight on valid drop targets
   - Reject drops on invalid targets (self, parent into child)

4. **Drag-to-Reorder**
   - Drag files within a folder to reorder them
   - Visual insertion indicator (line) showing drop position
   - Multi-select drag (using Ctrl/Cmd+click to select multiple)

5. **Folder Management**
   - Create new folders via context menu or button
   - Delete folders/files with confirmation
   - Rename folders/files (inline editing or double-click)
   - Copy/cut/paste via context menu and keyboard shortcuts

6. **Context Menu**
   - Right-click on files/folders for options
   - Options: Open, Rename, Copy, Cut, Delete, Properties
   - Different options for files vs folders

### UI Requirements
- Clean, modern interface (inspired by macOS Finder or Windows Explorer)
- File type icons for common types (images, documents, archives, code, audio, video)
- Grid view and list view toggle
- File size formatting (KB, MB, GB)
- Date formatting for file timestamps
- Dark mode toggle
- Keyboard shortcuts

### Technical Requirements
- All data stored in localStorage (simulated file system)
- No external libraries — vanilla JavaScript only
- Touch event support for mobile drag-and-drop
- Undo/redo for destructive operations (delete, move)
- Responsive design (desktop-first, functional on tablet)
- Single HTML file with embedded CSS and JavaScript

## Suggested Architecture

### Data Model
```javascript
const state = {
  folders: {
    'root': { id: 'root', parentId: null, name: 'My Files', children: ['folder1', 'folder2'], order: [] },
    'folder1': { id: 'folder1', parentId: 'root', name: 'Documents', children: [], order: ['file1', 'file2'] },
    'folder2': { id: 'folder2', parentId: 'root', name: 'Images', children: [], order: ['file3'] },
  },
  files: {
    'file1': { id: 'file1', name: 'report.pdf', type: 'application/pdf', size: 245000, lastModified: Date.now(), parentId: 'folder1' },
    'file2': { id: 'file2', name: 'notes.txt', type: 'text/plain', size: 1200, lastModified: Date.now(), parentId: 'folder1' },
    'file3': { id: 'file3', name: 'photo.jpg', type: 'image/jpeg', size: 3200000, lastModified: Date.now(), parentId: 'folder2' },
  },
  selectedFiles: [],
  currentFolderId: 'root',
  viewMode: 'grid', // 'grid' | 'list'
  history: [],
  historyIndex: -1,
};
```

### Event Handling Architecture
```javascript
const DragDropManager = {
  dragSource: null,
  dragData: null,

  init() { /* setup global events */ },

  handleDragStart(event, item) {
    this.dragData = { id: item.id, type: item.type }; // 'file' or 'folder'
    event.dataTransfer.setData('text/plain', item.id);
    event.dataTransfer.effectAllowed = 'move';
  },

  handleDragOver(event, target) {
    event.preventDefault();
    // Determine if target is a valid drop zone
    // Show visual feedback (highlight, insert line)
  },

  handleDrop(event, target) {
    event.preventDefault();
    // Determine drop action: move, reorder, or upload
    // Execute the action
    // Save state to localStorage
    // Add to undo history
  },

  handleFileDrop(event, targetFolderId) {
    const files = event.dataTransfer.files;
    Array.from(files).forEach(file => {
      // Validate, create file object, add to state
    });
    this.render();
  }
};
```

### Rendering
```javascript
const Renderer = {
  render() {
    this.renderBreadcrumb();
    this.renderFolderTree();
    this.renderFileList();
    this.renderStatusBar();
  },

  renderFileList() {
    const folder = state.folders[state.currentFolderId];
    const items = folder.order.map(id => state.files[id] || state.folders[id]);
    // Render as grid or list based on state.viewMode
  },

  renderFolderTree() {
    // Recursively build nested list from folder hierarchy
  }
};
```

## Implementation Guide

### Step 1: Data Model & State
Implement the file system data model with localStorage persistence.

### Step 2: Layout
Create the three-panel layout (sidebar, content area, status bar).

### Step 3: File Rendering
Implement grid and list view rendering for files and folders.

### Step 4: Folder Tree
Implement collapsible, hierarchical folder tree in sidebar.

### Step 5: Drag from OS
Handle file drops with validation, preview, and state integration.

### Step 6: Internal Drag-Drop
Implement drag-to-move between folders and drag-to-reorder within folders.

### Step 7: Context Menu
Implement right-click context menu with all actions.

### Step 8: Undo/Redo
Implement history tracking for move, delete, and rename operations.

### Step 9: Touch Support
Add touch event handlers for mobile drag-and-drop.

### Step 10: Polish
Add animations, transitions, dark mode, and keyboard shortcuts.

## Keyboard Shortcuts
| Key | Action |
|-----|--------|
| Ctrl+C | Copy selected |
| Ctrl+X | Cut selected |
| Ctrl+V | Paste |
| Delete | Move to trash |
| F2 | Rename selected |
| Ctrl+Z | Undo |
| Ctrl+Y | Redo |
| Ctrl+A | Select all |
| Ctrl+F | Search/filter |
| Ctrl+1 | Grid view |
| Ctrl+2 | List view |

## Bonus Features
- **Drag to trash bin**: Drag files to a trash icon to delete
- **Zip folder download**: Simulate downloading a folder as zip
- **Drag between tabs**: Open multiple folders in tabs
- **File tags**: Color-coded tags on files, filterable
- **Favorites**: Star folders for quick access
- **Search with drag**: Drag search results into folders
- **Recent files view**: Show recently modified files

## Validation Checklist
- [ ] File upload via drag from OS works with validation
- [ ] Files drag between folders in sidebar
- [ ] Files drag between folder breadcrumbs
- [ ] Files reorder within folders via drag
- [ ] Folder tree is collapsible and navigable
- [ ] Context menu with all actions works
- [ ] Undo/redo works for move, delete, rename
- [ ] Touch events work on mobile devices
- [ ] Grid and list view toggle works
- [ ] Dark mode toggle works
- [ ] All data persists on page reload
- [ ] Keyboard shortcuts are functional
- [ ] Responsive design works on tablet

## Submission
Submit a single `index.html` file with embedded CSS and JavaScript. Include a README with setup instructions and screenshots.
