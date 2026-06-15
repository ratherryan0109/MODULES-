# Mini Project: Task Management Dashboard with CSS Modules

## Overview
Build a Task Management Dashboard UI using React components styled exclusively with CSS Modules. The dashboard must use multiple `.module.css` files, demonstrate `composes` for shared styles, use `:global()` for app-level theming, and include at least one example of cross-module composition.

## Learning Goals
- Practice CSS Modules file structure with co-located styles
- Use `composes` for style reuse within and across modules
- Apply `:global()` for layout skeleton and CSS custom properties
- Combine CSS Modules with React conditional class patterns
- Use SCSS Modules (optional) for advanced styling

## Requirements

### 1. Global Setup (globals.css)
- Define CSS custom properties in `:root` for the theme (colors, spacing, radii, shadows)
- Create a `:global(.app-layout)` grid class for the top-level page structure
- Define global font and reset styles

### 2. Components (each with its own .module.css)

**Sidebar** (`Sidebar.module.css`)
- Navigation items with active/hover states
- Logo area at top
- `composes` from a shared utilities module
- Use `:global()` references where needed

**Header** (`Header.module.css`)
- Search bar, notification icon, user avatar
- `composes` for positioning utilities from shared module
- Responsive adjustments

**TaskBoard** (`TaskBoard.module.css`)
- Grid of task columns (To Do, In Progress, Done)
- Each column is a flex container with column direction
- Scrollable task lists within columns

**TaskCard** (`TaskCard.module.css`)
- Individual task cards with priority indicators (color-coded borders)
- Hover effects for card elevation
- Conditional classes for completed/draft states

**Modal** (`Modal.module.css`)
- Overlay and modal content
- Animations with scoped `@keyframes`
- `composes: hidden` for controlled visibility

### 3. Shared Utilities Module (`utils.module.css`)
- `.flexCenter`, `.flexBetween`, `.truncate`, `.visuallyHidden`
- Reusable spacing presets (`.paddingSm`, `.paddingMd`, `.paddingLg`)
- These are composed into component modules

### 4. Interactivity
- Task cards change border color based on priority (low/medium/high) using conditional module classes
- Clicking a task opens the modal with details
- "Add Task" button shows a new card form (inline)
- Mark task as completed (strikethrough + opacity change via composed classes)

### 5. TypeScript Integration (optional bonus)
- Create a `.d.ts` declaration file for CSS Modules
- Use a codegen tool to auto-generate `.module.css.d.ts` files

## Project Structure
```
task-dashboard/
├── src/
│   ├── components/
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.jsx
│   │   │   └── Sidebar.module.css
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.css
│   │   ├── TaskBoard/
│   │   │   ├── TaskBoard.jsx
│   │   │   └── TaskBoard.module.css
│   │   ├── TaskCard/
│   │   │   ├── TaskCard.jsx
│   │   │   └── TaskCard.module.css
│   │   └── Modal/
│   │       ├── Modal.jsx
│   │       └── Modal.module.css
│   ├── styles/
│   │   ├── globals.css
│   │   └── utils.module.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## Example Component Skeleton

```jsx
// TaskCard.jsx
import styles from './TaskCard.module.css';
import utils from '../styles/utils.module.css';

export default function TaskCard({ task, onSelect }) {
  const priorityClass = styles[task.priority] || styles.normal;
  const statusClass = task.completed ? styles.completed : '';

  return (
    <div
      className={`${styles.card} ${priorityClass} ${statusClass}`}
      onClick={() => onSelect(task)}
    >
      <h3 className={styles.title}>{task.title}</h3>
      <p className={utils.truncate}>{task.description}</p>
      <div className={utils.flexBetween}>
        <span className={styles.date}>{task.dueDate}</span>
        <span className={styles.assignee}>{task.assignee}</span>
      </div>
    </div>
  );
}
```

```css
/* TaskCard.module.css */
.card {
  background: var(--color-surface);
  border: 2px solid transparent;
  border-radius: var(--radius-md);
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  composes: shadowSm from './shared.module.css';
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.date {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.assignee {
  font-size: 0.8rem;
  color: var(--color-primary);
  font-weight: 500;
}

/* Priority colors via conditional classes */
.low { border-left: 4px solid #22C55E; }
.medium { border-left: 4px solid #F59E0B; }
.high { border-left: 4px solid #EF4444; }

.completed {
  opacity: 0.6;
}

.completed .title {
  text-decoration: line-through;
}
```

## Stretch Goals
- Add drag-and-drop between columns using `@hello-pangea/dnd`
- Persist tasks to `localStorage`
- Add a dark mode toggle using `:global(.dark)` class switching
- Extract a shared `animations.module.css` with reusable `@keyframes` that components compose
- Add unit tests for component rendering with CSS Modules
- Set up SCSS Modules (`Card.module.scss`) for one component to demonstrate compatibility
- Generate TypeScript declarations for all `.module.css` files automatically

## Evaluation Criteria

| Area | Points |
|------|--------|
| CSS Module file structure and naming | 15 pts |
| Effective use of `composes` (within and across modules) | 20 pts |
| Proper use of `:global()` for theme/layout | 10 pts |
| Conditional class application in React | 15 pts |
| Responsive design and visual quality | 15 pts |
| Code organization and component separation | 15 pts |
| Bonus features (TypeScript, dark mode, SCSS) | 10 pts |

**Total: 100 pts**

## Submission
Submit a GitHub repository or zip with the complete project structure. Include a brief README explaining:
1. How to run the project (`npm install && npm run dev`)
2. Your CSS Modules architecture decisions
3. Any trade-offs you encountered between local scoping and global styles
