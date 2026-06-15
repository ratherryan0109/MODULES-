# Mini Project: Personal Notes App with Local Storage

## Project Overview

Build a fully functional personal notes application that stores all data in Local Storage. The app should allow users to create, read, update, and delete notes, with features like search, categorization, and a dark/light theme toggle that persists across sessions.

## Learning Objectives

- Apply Local Storage CRUD operations in a real application
- Implement data serialization with JSON
- Build a responsive UI that reflects stored state
- Handle storage errors gracefully
- Implement theme persistence
- Use the storage event for cross-tab synchronization

## Requirements

### Core Features
1. Create notes with title, content, category, and timestamp
2. Display all notes in a grid or list view
3. Edit existing notes inline or in a modal
4. Delete notes with confirmation
5. Search/filter notes by title or content
6. Categorize notes (Personal, Work, Ideas, etc.)
7. Show total note count and last updated time

### Persistence
8. All notes survive page refresh
9. Theme preference (light/dark) persists
10. Last active filter/search persists

### UI/UX
11. Clean, responsive design
12. Empty state when no notes exist
13. Loading state simulation
14. Toast notifications for actions
15. Keyboard shortcuts (Ctrl+S to save, etc.)

## Project Structure

```
notes-app/
├── index.html
├── style.css
└── script.js
```

## Step-by-Step Implementation Guide

### Step 1: HTML Structure

Create the main layout with:
- Header with app title, search bar, and theme toggle
- Sidebar or top bar with category filters
- Main content area with note grid
- Modal for creating/editing notes
- Footer with note count

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyNotes - Local Storage App</title>
</head>
<body>
    <!-- Header -->
    <header>
        <h1>MyNotes</h1>
        <input type="text" id="searchInput" placeholder="Search notes...">
        <button id="themeToggle">🌙</button>
    </header>

    <!-- Category Filter -->
    <nav id="categories">
        <button class="active" data-category="all">All</button>
        <button data-category="Personal">Personal</button>
        <button data-category="Work">Work</button>
        <button data-category="Ideas">Ideas</button>
    </nav>

    <!-- Note Grid -->
    <main id="notesContainer"></main>

    <!-- Empty State -->
    <div id="emptyState">No notes yet. Create your first note!</div>

    <!-- Add Note Button -->
    <button id="addNoteBtn">+ New Note</button>

    <!-- Modal -->
    <div id="noteModal" class="modal">
        <div class="modal-content">
            <input type="text" id="noteTitle" placeholder="Note title..." />
            <textarea id="noteContent" placeholder="Write your note..."></textarea>
            <select id="noteCategory">
                <option value="Personal">Personal</option>
                <option value="Work">Work</option>
                <option value="Ideas">Ideas</option>
            </select>
            <div class="modal-actions">
                <button id="saveNoteBtn">Save</button>
                <button id="cancelBtn">Cancel</button>
            </div>
        </div>
    </div>

    <footer>
        <span id="noteCount">0 notes</span>
    </footer>
</body>
</html>
```

### Step 2: CSS Styling

Implement a clean design with CSS custom properties for theming:

```css
:root {
    --bg: #ffffff;
    --text: #333333;
    --card-bg: #f8f9fa;
    --border: #dee2e6;
    --primary: #007bff;
    --shadow: 0 2px 8px rgba(0,0,0,0.1);
}

[data-theme="dark"] {
    --bg: #1a1a2e;
    --text: #eeeeee;
    --card-bg: #16213e;
    --border: #2a2a4a;
    --primary: #4da6ff;
    --shadow: 0 2px 8px rgba(0,0,0,0.3);
}

body {
    font-family: 'Segoe UI', system-ui, sans-serif;
    background: var(--bg);
    color: var(--text);
    margin: 0;
    min-height: 100vh;
    transition: background 0.3s, color 0.3s;
}
```

### Step 3: JavaScript — Notes Manager

```javascript
class NotesManager {
    constructor() {
        this.notes = [];
        this.currentNoteId = null;
        this.currentCategory = 'all';
        this.searchQuery = '';
        this.init();
    }

    init() {
        this.loadNotes();
        this.loadTheme();
        this.bindEvents();
        this.render();
    }

    loadNotes() {
        try {
            const data = localStorage.getItem('notes_app_notes');
            this.notes = data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('Failed to load notes:', e);
            this.notes = [];
        }
    }

    saveNotes() {
        try {
            localStorage.setItem('notes_app_notes', JSON.stringify(this.notes));
        } catch (e) {
            if (e.name === 'QuotaExceededError') {
                this.showToast('Storage full! Delete some notes.');
            }
        }
    }

    addNote(title, content, category) {
        const note = {
            id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
            title,
            content,
            category,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            pinned: false
        };
        this.notes.unshift(note);
        this.saveNotes();
        this.render();
        this.showToast('Note created!');
    }

    updateNote(id, updates) {
        const index = this.notes.findIndex(n => n.id === id);
        if (index !== -1) {
            this.notes[index] = {
                ...this.notes[index],
                ...updates,
                updatedAt: new Date().toISOString()
            };
            this.saveNotes();
            this.render();
            this.showToast('Note updated!');
        }
    }

    deleteNote(id) {
        if (confirm('Delete this note permanently?')) {
            this.notes = this.notes.filter(n => n.id !== id);
            this.saveNotes();
            this.render();
            this.showToast('Note deleted');
        }
    }

    getFilteredNotes() {
        let filtered = this.notes;
        
        if (this.currentCategory !== 'all') {
            filtered = filtered.filter(n => n.category === this.currentCategory);
        }
        
        if (this.searchQuery) {
            const q = this.searchQuery.toLowerCase();
            filtered = filtered.filter(n =>
                n.title.toLowerCase().includes(q) ||
                n.content.toLowerCase().includes(q)
            );
        }
        
        return filtered;
    }

    render() {
        const container = document.getElementById('notesContainer');
        const emptyState = document.getElementById('emptyState');
        const filtered = this.getFilteredNotes();
        
        // Update note count
        document.getElementById('noteCount').textContent =
            `${this.notes.length} note${this.notes.length !== 1 ? 's' : ''}`;
        
        if (filtered.length === 0) {
            container.innerHTML = '';
            emptyState.style.display = 'block';
            emptyState.textContent = this.notes.length === 0
                ? 'No notes yet. Click "+" to create one!'
                : 'No notes match your search.';
            return;
        }
        
        emptyState.style.display = 'none';
        container.innerHTML = filtered.map(note => `
            <article class="note-card" data-id="${note.id}">
                <div class="note-header">
                    <h3>${this.escapeHtml(note.title)}</h3>
                    <span class="note-category">${note.category}</span>
                </div>
                <p>${this.escapeHtml(note.content.substring(0, 150))}</p>
                <div class="note-footer">
                    <small>${new Date(note.updatedAt).toLocaleDateString()}</small>
                    <div class="note-actions">
                        <button onclick="manager.editNote('${note.id}')">✏️</button>
                        <button onclick="manager.deleteNote('${note.id}')">🗑️</button>
                    </div>
                </div>
            </article>
        `).join('');
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    editNote(id) {
        const note = this.notes.find(n => n.id === id);
        if (note) {
            this.currentNoteId = id;
            document.getElementById('noteTitle').value = note.title;
            document.getElementById('noteContent').value = note.content;
            document.getElementById('noteCategory').value = note.category;
            this.openModal();
        }
    }

    openModal(noteId = null) {
        if (noteId) {
            this.currentNoteId = noteId;
            this.editNote(noteId);
        } else {
            this.currentNoteId = null;
            document.getElementById('noteTitle').value = '';
            document.getElementById('noteContent').value = '';
            document.getElementById('noteCategory').value = 'Personal';
        }
        document.getElementById('noteModal').classList.add('open');
        document.getElementById('noteTitle').focus();
    }

    closeModal() {
        document.getElementById('noteModal').classList.remove('open');
        this.currentNoteId = null;
    }

    saveCurrentNote() {
        const title = document.getElementById('noteTitle').value.trim();
        const content = document.getElementById('noteContent').value.trim();
        const category = document.getElementById('noteCategory').value;
        
        if (!title) {
            this.showToast('Title is required');
            return;
        }
        
        if (this.currentNoteId) {
            this.updateNote(this.currentNoteId, { title, content, category });
        } else {
            this.addNote(title, content, category);
        }
        
        this.closeModal();
    }

    loadTheme() {
        const theme = localStorage.getItem('notes_app_theme') || 'light';
        document.documentElement.setAttribute('data-theme', theme);
        document.getElementById('themeToggle').textContent =
            theme === 'dark' ? '☀️' : '🌙';
    }

    toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('notes_app_theme', next);
        document.getElementById('themeToggle').textContent =
            next === 'dark' ? '☀️' : '🌙';
        this.showToast(`Switched to ${next} theme`);
    }

    showToast(message) {
        let toast = document.getElementById('toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.className = 'toast show';
        setTimeout(() => toast.className = 'toast', 2500);
    }

    bindEvents() {
        // Add note button
        document.getElementById('addNoteBtn').addEventListener('click', () => this.openModal());
        
        // Save button
        document.getElementById('saveNoteBtn').addEventListener('click', () => this.saveCurrentNote());
        
        // Cancel button
        document.getElementById('cancelBtn').addEventListener('click', () => this.closeModal());
        
        // Close modal on overlay click
        document.getElementById('noteModal').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) this.closeModal();
        });
        
        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => this.toggleTheme());
        
        // Search
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.searchQuery = e.target.value;
            this.render();
        });
        
        // Category filter
        document.querySelectorAll('#categories button').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelector('#categories .active')?.classList.remove('active');
                btn.classList.add('active');
                this.currentCategory = btn.dataset.category;
                this.render();
            });
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                e.preventDefault();
                if (document.getElementById('noteModal').classList.contains('open')) {
                    this.saveCurrentNote();
                }
            }
            if (e.key === 'Escape') this.closeModal();
            if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
                e.preventDefault();
                this.openModal();
            }
        });
        
        // Cross-tab sync
        window.addEventListener('storage', (e) => {
            if (e.key === 'notes_app_notes') {
                this.loadNotes();
                this.render();
                this.showToast('Notes synced from another tab');
            }
            if (e.key === 'notes_app_theme') {
                this.loadTheme();
            }
        });
    }
}

// Initialize app
const manager = new NotesManager();
```

### Step 4: Testing

1. Create notes with different categories
2. Refresh the page — notes should persist
3. Toggle theme and refresh — theme should persist
4. Search for notes by title
5. Filter by category
6. Delete a note with confirmation
7. Open the same page in two tabs — changes should sync
8. Fill storage and verify error handling

## Bonus Features

- **Note pinning**: Pin important notes to the top
- **Export/Import**: Download notes as JSON or upload to restore
- **Markdown support**: Render basic markdown in notes
- **Character count**: Show remaining characters as you type
- **Auto-save**: Save note draft every 5 seconds while typing
- **Tags**: Add multiple tags per note with filtering
- **Color coding**: Assign colors to different categories

## Evaluation Criteria

- All CRUD operations work correctly
- Data persists across sessions
- Theme toggle persists
- Search and filtering work
- Error handling for storage limits
- Clean, responsive UI
- Cross-tab synchronization works
- No console errors
- Code is well-organized and commented

## Submission

Submit your completed project as a single HTML file (or separate files) that can be opened directly in a browser without a server. Include a brief README describing your implementation choices.
