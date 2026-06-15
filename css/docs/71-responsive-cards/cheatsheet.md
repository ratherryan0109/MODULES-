# Responsive Cards Cheatsheet

## Card Grid Patterns

### Auto-Fit Grid (No Media Queries)
```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
```

### Fixed Columns with Breakpoints
```css
.card-grid { display: grid; gap: 1.5rem; grid-template-columns: 1fr; }
@media (min-width: 640px) { .card-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .card-grid { grid-template-columns: repeat(3, 1fr); } }
```

### Featured Card
```css
.featured { grid-column: 1 / -1; }
@media (min-width: 768px) {
  .featured { grid-column: span 2; }
  .featured .card { flex-direction: row; }
}
```

## Card Component

```css
.card {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.12);
}
```

### Card Image
```css
.card-img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
}
```

### Card Body
```css
.card-body {
  padding: 1.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}
```

### Line Clamping
```css
.card-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card-text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

### Card Footer
```css
.card-footer {
  padding: 1rem 1.25rem;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

## Horizontal Card (List View)
```css
.card-horizontal {
  display: flex;
  flex-direction: column;
}
@media (min-width: 640px) {
  .card-horizontal {
    flex-direction: row;
  }
  .card-horizontal .card-img {
    width: 200px;
    min-height: 150px;
    aspect-ratio: auto;
  }
}
```

## Container Query Cards
```css
/* Parent */
.card-wrapper { container-type: inline-size; }

/* Child */
@container (min-width: 400px) {
  .card { flex-direction: row; }
}
@container (min-width: 600px) {
  .card { padding: 2rem; }
  .card-img { width: 300px; }
}
```

## Overlay Card
```css
.overlay-card {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 16/9;
}
.overlay-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem 1.5rem;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: white;
}
```

## Touch Considerations
```css
/* Only apply hover on devices that support it */
@media (hover: hover) {
  .card:hover { transform: translateY(-4px); }
}
```

## Accessibility
```html
<article class="card">
  <a href="#" aria-label="Read more about Card Title">
    <img src="..." alt="Card image description">
    <h3>Card Title</h3>
    <p>Card description</p>
  </a>
</article>
```
