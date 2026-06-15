# Mobile-Friendly HTML — Cheatsheet

## Viewport Meta Tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

| Property | Values | Description |
|----------|--------|-------------|
| `width` | `device-width`, pixels | Sets viewport width |
| `initial-scale` | `1.0` | Initial zoom level |
| `minimum-scale` | `0.1` - `10.0` | Minimum zoom |
| `maximum-scale` | `0.1` - `10.0` | Maximum zoom |
| `user-scalable` | `yes`, `no` | Allow pinch zoom |

## CSS Media Queries

| Breakpoint | Device |
|------------|--------|
| `max-width: 480px` | Small phones |
| `max-width: 768px` | Tablets / large phones |
| `min-width: 1024px` | Desktop |
| `min-width: 1440px` | Large screens |

## Responsive Units

| Unit | Relative To |
|------|-------------|
| `%` | Parent element |
| `em` | Font size of parent |
| `rem` | Font size of root (html) |
| `vw` | 1% of viewport width |
| `vh` | 1% of viewport height |
| `vmin` | Smaller of vw/vh |
| `vmax` | Larger of vw/vh |

## Responsive Images

```html
<img src="small.jpg"
     srcset="medium.jpg 768w, large.jpg 1200w"
     sizes="(max-width: 768px) 100vw, 50vw"
     alt="Responsive image">
```

## Mobile-First Approach

```css
/* Base: mobile styles */
.column { width: 100%; }

/* Tablet */
@media (min-width: 768px) {
    .column { width: 50%; }
}

/* Desktop */
@media (min-width: 1024px) {
    .column { width: 33.33%; }
}
```

## Touch Targets

| Element | Minimum Size |
|---------|-------------|
| Buttons | 48×48px |
| Links | 44×44px |
| Spacing | 8px between targets |

## Best Practices
- ✅ Always include viewport meta tag
- ✅ Use relative units (%, rem, vw) over fixed px
- ✅ Make all images responsive with `max-width: 100%`
- ✅ Use mobile-first media queries (min-width)
- ✅ Ensure touch targets are at least 48px
- ❌ Don't disable zoom (`user-scalable=no`)
- ❌ Don't use fixed-width layouts
- ❌ Don't use `px` for font sizes — use `rem`
