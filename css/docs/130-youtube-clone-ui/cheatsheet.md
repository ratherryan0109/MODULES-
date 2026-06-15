# CSS Cheatsheet — YouTube Clone UI

## App Layout (CSS Grid)
```css
.app-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 56px 1fr;
  min-height: 100vh;
}
.app-layout.sidebar-closed { grid-template-columns: 72px 1fr; }
.header { grid-column: 1 / -1; grid-row: 1; }
.sidebar { grid-row: 2; }
.main-content { grid-row: 2; }
```

## Video Grid
```css
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
```

## Video Card
```css
.video-card { cursor: pointer; border-radius: 12px; overflow: hidden; padding: 0.5rem; }
.video-card:hover { background: var(--surface); }
.video-thumb { aspect-ratio: 16/9; border-radius: 12px; overflow: hidden; position: relative; }
.video-thumb img { width: 100%; height: 100%; object-fit: cover; }
.video-duration {
  position: absolute; bottom: 0.5rem; right: 0.5rem;
  background: rgba(0,0,0,0.8); color: white;
  padding: 0.15rem 0.4rem; border-radius: 4px;
  font-size: 0.75rem; font-weight: 500;
}
```

## Video Info
```css
.video-info { display: flex; gap: 0.75rem; margin-top: 0.75rem; }
.channel-avatar { width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0; }
.video-meta h3 { font-size: 0.9rem; font-weight: 600; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.video-meta .channel-name, .video-meta .stats { font-size: 0.8rem; color: var(--text-muted); }
```

## Header
```css
.header { display: flex; align-items: center; padding: 0 1rem; gap: 1rem; height: 56px; }
.search-bar { flex: 1; max-width: 600px; display: flex; }
.search-bar input { flex: 1; padding: 0.5rem 1rem; border-radius: 40px 0 0 40px; }
.search-bar button { border-radius: 0 40px 40px 0; padding: 0.5rem 1.25rem; }
```

## Sidebar Navigation
```css
.sidebar-item { display: flex; align-items: center; gap: 1.5rem; padding: 0.5rem 1.25rem; border-radius: 10px; cursor: pointer; transition: background 0.2s; }
.sidebar-item:hover { background: var(--surface-hover); }
.sidebar-item .icon { font-size: 1.25rem; min-width: 24px; text-align: center; }
```

## Chip Bar
```css
.chip-bar { display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 1rem; }
.chip { padding: 0.4rem 1rem; border-radius: 8px; font-size: 0.85rem; white-space: nowrap; cursor: pointer; border: 1px solid #333; background: var(--surface-hover); }
.chip.active { background: white; color: black; }
```

## Responsive
```css
@media (max-width: 768px) { .sidebar { display: none; } .app-layout { grid-template-columns: 1fr; } }
@media (max-width: 480px) { .video-grid { grid-template-columns: 1fr; } }
```
