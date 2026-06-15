# CSS Cheatsheet — Blog Website

## Typography Scale
```css
:root {
  --ff-serif: 'Merriweather', Georgia, serif;
  --ff-sans: 'Inter', system-ui, sans-serif;
  --fs-h1: clamp(2rem, 5vw, 3.5rem);
  --fs-h2: clamp(1.5rem, 3vw, 2.25rem);
  --fs-h3: clamp(1.25rem, 2vw, 1.5rem);
  --fs-body: 1.0625rem;
  --fs-small: 0.875rem;
  --lh-body: 1.7;
}
```

## Blog Layout (Grid + Sidebar)
```css
.blog-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}
@media (min-width: 768px) {
  .blog-layout { grid-template-columns: 2fr 1fr; }
}
```

## Article Card
```css
.post-card {
  background: var(--clr-surface);
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid var(--clr-border);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.post-card:hover { transform: translateY(-3px); box-shadow: 0 8px 25px rgba(0,0,0,0.08); }
.post-card .post-image { aspect-ratio: 16/10; overflow: hidden; }
.post-card .post-image img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.post-card:hover .post-image img { transform: scale(1.05); }
```

## Post Meta
```css
.post-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--clr-text-light);
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}
```

## Article Content
```css
.article-content {
  font-family: var(--ff-serif);
  font-size: 1.0625rem;
  line-height: 1.8;
}
.article-content p { margin-bottom: 1.5rem; max-width: 65ch; }
.article-content h2 { font-family: var(--ff-sans); font-size: var(--fs-h2); margin: 2rem 0 1rem; }
.article-content blockquote {
  border-left: 4px solid var(--clr-accent);
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  background: var(--clr-tag-bg);
  border-radius: 0 0.75rem 0.75rem 0;
}
.article-content pre {
  background: #1c1917;
  color: #fafaf9;
  padding: 1.25rem;
  border-radius: 0.75rem;
  overflow-x: auto;
  font-size: 0.9rem;
}
.article-content code {
  background: #fef3c7;
  padding: 0 0.4rem;
  border-radius: 4px;
  font-size: 0.9em;
}
```

## Tags
```css
.post-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.post-tags a {
  background: #fef3c7;
  color: #92400e;
  padding: 0.2rem 0.75rem;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: opacity 0.3s;
}
```

## Sidebar Widget
```css
.sidebar-widget {
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: 0.75rem;
  padding: 1.5rem;
}
.sidebar-widget h3 {
  font-family: var(--ff-serif);
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--clr-accent);
}
```

## Responsive Post Grid
```css
.post-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 500px) { .post-grid { grid-template-columns: 1fr 1fr; } }
```
