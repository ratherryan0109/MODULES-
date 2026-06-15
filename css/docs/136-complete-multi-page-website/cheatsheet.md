# CSS Cheatsheet — Complete Multi-Page Website

## Design System (style.css)
```css
:root {
  --primary: #8b5cf6;
  --dark: #0f172a;
  --ff: 'Inter', system-ui, sans-serif;
  --fs-h1: clamp(2rem, 5vw, 3.5rem);
  --radius: 0.75rem;
  --max-width: 1100px;
  --transition: 0.3s ease;
}
```

## Shared Layout
```css
.container { max-width: var(--max-width); margin: 0 auto; padding: 0 1.5rem; }
```

## Navigation
```css
.nav { display: flex; align-items: center; justify-content: space-between; height: 4rem; }
.nav-links { display: flex; gap: 1.5rem; }
.nav-links a[aria-current="page"] { color: var(--primary); font-weight: 600; }
@media (max-width: 768px) { .nav-links { display: none; } .nav-links.active { display: flex; flex-direction: column; } }
```

## Reusable Grid
```css
.grid-3 { display: grid; grid-template-columns: 1fr; gap: 2rem; }
@media (min-width: 640px) { .grid-3 { grid-template-columns: 1fr 1fr; } }
@media (min-width: 900px) { .grid-3 { grid-template-columns: 1fr 1fr 1fr; } }
```

## Card Component
```css
.card { background: white; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 2rem; transition: all 0.3s; }
.card:hover { transform: translateY(-4px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); border-color: var(--primary); }
.card-icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; }
```

## Buttons
```css
.btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.75rem; border-radius: 0.5rem; font-weight: 600; border: none; cursor: pointer; transition: all 0.3s; }
.btn-primary { background: var(--primary); color: white; }
.btn-primary:hover { background: var(--primary-dark); transform: translateY(-2px); }
```

## Blog Card
```css
.blog-card { background: white; border: 1px solid #e2e8f0; border-radius: 0.75rem; overflow: hidden; transition: all 0.3s; }
.blog-image { height: 200px; overflow: hidden; }
.blog-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.blog-card:hover .blog-image img { transform: scale(1.05); }
```

## Form Inputs
```css
.form-group input, .form-group textarea {
  width: 100%; padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0; border-radius: 0.5rem;
  font-family: var(--ff); transition: border-color 0.3s;
}
.form-group input:focus, .form-group textarea:focus {
  border-color: var(--primary); box-shadow: 0 0 0 3px rgba(139,92,246,0.15);
}
```

## Page Header
```css
.page-header { background: linear-gradient(135deg, #f5f3ff, #ecfeff); padding: 8rem 0 3rem; text-align: center; }
```

## Hero
```css
.hero { min-height: 80vh; display: flex; align-items: center; padding: 6rem 0; background: linear-gradient(135deg, #f5f3ff, #ecfeff); }
```

## Footer
```css
.footer { background: #0f172a; color: #94a3b8; padding: 3rem 0; text-align: center; }
.footer-links { display: flex; justify-content: center; gap: 1.5rem; margin-bottom: 1rem; }
```
