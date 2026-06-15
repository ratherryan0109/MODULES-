# CSS Nesting Cheatsheet

## Basic Nesting
```css
.parent {
  color: #333;
  .child { color: #666; }
}
```

## The & Selector
```css
.button {
  background: #3b82f6;

  &:hover { background: #1d4ed8; }

  & .icon { margin-right: 8px; }

  &.active { background: #10b981; }

  .dark & { background: #1d4ed8; }
}
```

## Pseudo-Elements
```css
.card {
  &::before { content: ''; }
  &::after { content: ''; }
}
```

## Media Queries
```css
.card {
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
```

## Nesting vs Flat
| Nested | Flat Equivalent |
|--------|-----------------|
| `.card { .title { } }` | `.card .title { }` |
| `.card { &.featured { } }` | `.card.featured { }` |
| `.btn { &:hover { } }` | `.btn:hover { }` |

## Best Practices
- Limit to 2-3 levels deep
- Use & for pseudo-classes and modifiers
- Combine with @scope for component isolation
- Keep specificity manageable

## Browser Support
Chrome 120+, Firefox 117+, Safari 17.2+, Edge 120+
