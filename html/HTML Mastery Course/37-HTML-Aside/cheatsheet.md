# HTML `<aside>` Element — Cheatsheet

## Basic Syntax

```html
<aside>
  <h3>Related Content</h3>
  <ul>
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
  </ul>
</aside>
```

## Two Contexts

| Context | Scope | ARIA Role |
|---------|-------|-----------|
| Inside `<article>` | Tangential to article | `complementary` |
| Outside `<article>` | Tangential to page | `complementary` |
| Inside `<aside>` | Inner loses role | None |

## ARIA Landmark

```html
<!-- Provide accessible name -->
<aside aria-label="Related articles">
<aside aria-labelledby="sidebar-title">
  <h2 id="sidebar-title">Sidebar</h2>
```

## Common Use Cases

| Use Case | Example |
|----------|---------|
| Sidebar | Related links, categories |
| Pull quote | Highlighted excerpt from article |
| Glossary | Key terms and definitions |
| Ads | Advertisement containers |
| Author bio | About the author widget |
| Related posts | Links to similar content |

## ✅ vs ❌

| ✅ Good | ❌ Bad |
|---------|--------|
| Related article links | Main navigation |
| Pull quotes | Page header content |
| Advertisement | Copyright notice |
| Glossary terms | Primary article text |
| Author biography | Site footer links |
| Category list | Contact form (unless tangential) |

## CSS Defaults

```css
aside {
  display: block;
}
```

## Accessibility

- Implicit role: `complementary` (when outside article/section)
- Announcement: "Complementary landmark" by screen readers
- Must have accessible name for clear landmark navigation
- Inside `<article>`: Complementary scope is the article

## Common Patterns

### Sidebar Layout (CSS Grid)
```css
.page-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 20px;
}
```

### Pull Quote Style
```css
.pull-quote {
  border-left: 4px solid #e65100;
  padding: 15px;
  margin: 20px 0;
  font-style: italic;
}
```

## Browser Support

| Chrome | Firefox | Safari | Edge | IE |
|--------|---------|--------|------|-----|
| 5+     | 4+      | 5+     | 12+  | 9+* |

*Requires HTML5 shiv
