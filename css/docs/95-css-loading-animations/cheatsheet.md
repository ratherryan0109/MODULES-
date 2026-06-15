# CSS Loading Animations Cheatsheet

## Common Loaders

### Ring Spinner
```css
.spinner {
  width: 40px; height: 40px;
  border: 4px solid #eee;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
```

### Bouncing Dots
```css
.dot { animation: bounce 1.4s ease infinite both; }
.dot:nth-child(1) { animation-delay: -0.32s; }
.dot:nth-child(2) { animation-delay: -0.16s; }
@keyframes bounce { 0%,80%,100% { transform: scale(0); } 40% { transform: scale(1); } }
```

### Skeleton Shimmer
```css
.skeleton {
  background: linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
@keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
```

### Progress Bar
```css
.bar { height: 8px; background: #eee; border-radius: 4px; overflow: hidden; }
.bar-fill { height: 100%; background: #3b82f6; animation: progress 2s ease infinite; }
@keyframes progress { 0% { width: 0; } 100% { width: 100%; } }
```

## Accessibility
```html
<div class="spinner" role="status" aria-label="Loading">
  <span class="visually-hidden">Loading...</span>
</div>
```

## Best Practices
- Use GPU-accelerated properties (transform, opacity)
- Keep loaders small and subtle
- Remove or hide after content loads
- Respect prefers-reduced-motion
