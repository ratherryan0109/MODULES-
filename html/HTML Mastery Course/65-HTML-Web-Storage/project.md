# Module 65 Project: Collaborative Task Board with Cross-Tab Sync

## Overview
Build a collaborative task board application (Kanban-style) that uses **localStorage** for data persistence and **the StorageEvent API** for real-time cross-tab synchronization. Multiple users working on the same machine should be able to open the app in different tabs and see each other's changes in real-time.

## Learning Objectives
- Implement full CRUD operations with localStorage
- Use JSON serialization for complex data structures
- Handle the storage event for cross-tab communication
- Implement graceful error handling (QuotaExceededError)
- Build a storage utility wrapper for reusable patterns
- Manage state synchronization without race conditions

## Requirements

### Core Features (Must-Have)
1. **Task Board Layout**: Three columns — "To Do", "In Progress", "Done"
2. **Task CRUD**: Add, edit, delete tasks
3. **Drag & Drop**: Move tasks between columns (click-based or drag-and-drop)
4. **Persistent State**: All tasks survive page reloads
5. **Cross-Tab Sync**: Opening the app in multiple tabs shows live updates
6. **Toast Notifications**: Show when tasks are added/edited/deleted by other tabs
7. **Storage Error Handling**: Gracefully handle QuotaExceededError

### Enhanced Features (Nice-to-Have)
8. **Task Details**: Each task has: title, description, priority (low/medium/high), due date, and assignee name
9. **Task Filtering**: Filter by priority, assignee, or search text
10. **Dark Mode**: Toggle theme preference persisted in localStorage
11. **Undo**: Toast with "Undo" button that reverses the last delete operation
12. **Export/Import**: Download tasks as JSON, upload JSON to restore

### Technical Requirements
- No external libraries — vanilla JavaScript only
- All data stored under a single localStorage key (`taskBoard`)
- Storage wrapper class/object handling all serialization
- Feature detection before any storage access
- Debounced writes (save timer resets on each change)

## Architecture

### Data Model
```javascript
// Stored under localStorage key: 'taskBoard'
const dataModel = {
  columns: [
    { id: 'todo', title: 'To Do', tasks: [] },
    { id: 'inprogress', title: 'In Progress', tasks: [] },
    { id: 'done', title: 'Done', tasks: [] }
  ],
  nextTaskId: 1,
  lastModified: '2026-01-15T10:30:00.000Z'
};

// Single task object
const task = {
  id: 1,
  title: 'Build login page',
  description: 'Implement user authentication UI',
  priority: 'high',        // 'low' | 'medium' | 'high'
  assignee: 'Alice',
  dueDate: '2026-02-01',
  createdAt: '2026-01-15T10:30:00.000Z',
  updatedAt: '2026-01-15T11:00:00.000Z'
};
```

### Required Functions
| Function | Description |
|----------|-------------|
| `loadBoard()` | Read and parse tasks from localStorage, validate structure |
| `saveBoard()` | Serialize and write tasks to localStorage with error handling |
| `addTask(columnId, taskData)` | Create a task and add it to the specified column |
| `moveTask(taskId, fromColumn, toColumn)` | Move a task between columns |
| `editTask(taskId, updates)` | Update task fields |
| `deleteTask(taskId, columnId)` | Remove a task (with undo support) |
| `filterTasks(criteria)` | Return tasks matching priority/assignee/search |
| `importBoard(json)` | Replace all data from uploaded JSON |
| `exportBoard()` | Download all data as JSON file |
| `syncCrossTab()` | Trigger storage event for cross-tab notification |
| `calculateStats()` | Show storage usage percentage |

### Storage Event Handling
```javascript
window.addEventListener('storage', (e) => {
  if (e.key === 'taskBoard' && e.newValue) {
    const newData = JSON.parse(e.newValue);
    renderBoard(newData);
    showToast('Tasks updated from another tab');
  }
});
```

## User Interface Layout

```
┌────────────────────────────────────────────────────────┐
│ 📋 Task Board                    🌙 ☁️ Stats: 12%     │
├────────────┬────────────────────┬──────────────────────┤
│  To Do     │   In Progress      │   Done               │
│ (3 tasks)  │   (2 tasks)        │   (5 tasks)          │
├────────────┼────────────────────┼──────────────────────┤
│ [Task 1]   │   [Task 2]         │   [Task 3]           │
│ high       │   medium           │   low                │
│ Alice      │   Bob              │   Charlie            │
│ 2026-02-01 │   2026-01-25       │   2026-01-20         │
│ [Edit][×]  │   [Edit][×]        │   [Edit][×]          │
│            │                    │                      │
│ [+ Add]    │   [+ Add]          │   [+ Add]            │
├────────────┴────────────────────┴──────────────────────┤
│ Toast: "Task 'Fix bug' moved to Done by another tab"   │
└────────────────────────────────────────────────────────┘
```

## Implementation Checklist

- [ ] Create `loadBoard()` with validation and fallback
- [ ] Create `saveBoard()` with try/catch and QuotaExceededError handling
- [ ] Create `addTask()` with auto-ID generation
- [ ] Create `moveTask()` with column validation
- [ ] Create `editTask()` with field validation
- [ ] Create `deleteTask()` with undo support
- [ ] Render tasks in 3-column layout
- [ ] Add task form with modal or inline input
- [ ] Add drag-and-drop or click-based column movement
- [ ] Implement search/filter bar
- [ ] Implement theme toggle with localStorage persistence
- [ ] Add `storage` event listener for cross-tab sync
- [ ] Show toast notifications for remote changes
- [ ] Add export/import functionality
- [ ] Display storage usage stats
- [ ] Add confirmation dialog for clear/delete
- [ ] Test with localStorage filled to 90% capacity
- [ ] Test in private browsing mode (feature detection)
- [ ] Test with 3+ tabs open simultaneously

## Example Code Skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task Board</title>
  <style>
    /* CSS custom properties for theming */
    :root { --bg: white; --text: black; column-gap: 12px; }
    [data-theme="dark"] { --bg: #1a1a2e; --text: #eee; }
    /* Three-column layout with CSS Grid */
  </style>
</head>
<body>
  <header>
    <h1>Task Board</h1>
    <button id="themeToggle">🌙 Dark Mode</button>
    <span id="storageStats"></span>
    <button id="exportBtn">Export</button>
    <input type="file" id="importInput" accept=".json" hidden>
    <button id="importBtn">Import</button>
  </header>

  <div id="filterBar">
    <input type="text" id="searchInput" placeholder="Search tasks...">
    <select id="priorityFilter"><option value="">All</option>...</select>
    <select id="assigneeFilter"><option value="">All</option>...</select>
  </div>

  <div id="board">
    <div class="column" data-column="todo">
      <h2>To Do <span class="count">0</span></h2>
      <div class="tasks"></div>
      <button class="add-task">+ Add Task</button>
    </div>
    <!-- Repeat for inprogress and done -->
  </div>

  <!-- Toast container -->
  <div id="toasts"></div>

  <!-- Task modal -->
  <dialog id="taskModal">
    <form method="dialog">
      <input type="text" id="taskTitle" required>
      <textarea id="taskDescription"></textarea>
      <select id="taskPriority">...</select>
      <input type="text" id="taskAssignee">
      <input type="date" id="taskDueDate">
      <button type="submit">Save</button>
      <button type="button" id="cancelBtn">Cancel</button>
    </form>
  </dialog>

  <script>
    /* Your JavaScript here */
  </script>
</body>
</html>
```

## Stretch Goals
- Add color-coded priority badges (green=low, yellow=medium, red=high)
- Implement keyboard shortcuts (Ctrl+N=new task, Del=delete selected)
- Add task comments/notes within each task
- Add activity log panel showing all recent operations
- Implement optimistic UI updates with rollback on error
- Add pagination for boards with 50+ tasks

## Submission
Submit a single `index.html` file containing all HTML, CSS, and JavaScript. Ensure the application works when opened directly in a browser (no build step required). Include a brief README comment at the top of the file explaining the project and how cross-tab sync works.
