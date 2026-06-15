# CSS Cheatsheet — Portfolio Website

## Theme System
```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #0f172a;
  --accent: #8b5cf6;
}
[data-theme="dark"] {
  --bg-primary: #0f172a;
  --text-primary: #f1f5f9;
}
body {
  background: var(--bg-primary);
  color: var(--text-primary);
  transition: background 0.3s, color 0.3s;
}
```

## Responsive Grid (auto-fill)
```css
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}
```

## Project Filter System
```css
.project-card { display: none; }
.project-card.show { display: block; animation: fadeIn 0.4s ease; }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
```

## Timeline
```css
.timeline {
  position: relative;
  padding-left: 2rem;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 2px;
  background: var(--border);
}
.timeline-item::before {
  content: '';
  position: absolute;
  left: -2.35rem;
  top: 0.25rem;
  width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--accent);
}
```

## Image Handling
```css
.project-image { aspect-ratio: 16/10; overflow: hidden; }
.project-image img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.project-card:hover .project-image img { transform: scale(1.05); }
```

## Buttons
```css
.btn {
  display: inline-block;
  padding: 0.85rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none; cursor: pointer;
}
.btn:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
.btn-primary { background: var(--accent); color: white; }
.btn-outline { background: transparent; border: 2px solid var(--border); }
```

## Filter Buttons
```css
.filter-btn {
  background: var(--bg-primary);
  border: 1px solid var(--border);
  padding: 0.5rem 1.25rem;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
}
.filter-btn:hover, .filter-btn.active {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}
```

## Navigation
```css
.header {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  background: var(--bg-primary);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

/* Mobile nav toggle */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 4rem; left: 0; right: 0;
    background: var(--bg-primary);
    padding: 1rem;
  }
  .nav-menu.active { display: flex; }
}
```

## Form Inputs
```css
.form-group input, .form-group textarea {
  width: 100%;
  padding: 0.85rem 1rem;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: inherit;
  transition: border-color 0.3s;
}
.form-group input:focus, .form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(139,92,246,0.15);
}
```

## Accessibility
```css
.skip-link { position: absolute; top: -100%; left: 1rem; padding: 0.5rem 1rem; background: var(--accent); color: white; z-index: 9999; border-radius: 0.5rem; }
.skip-link:focus { top: 1rem; }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

## Skill Tags
```css
.skill-tag {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 500;
}
```
