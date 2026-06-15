# CSS Overflow - Cheatsheet

## Overflow Values

| Value | Description | Scrollbars | Use Case |
|-------|-------------|------------|----------|
| `visible` | Default. Content overflows visibly | Never | Default behavior |
| `hidden` | Clips overflow content | Never | Image containers, clearfix |
| `scroll` | Always shows scrollbars | Always | Data tables, code blocks |
| `auto` | Scrollbars when needed | As needed | Most practical choice |
| `clip` | Like hidden, no programmatic scroll | Never | Strict clipping |

## Individual Axes

```css
overflow-x: visible | hidden | scroll | auto | clip;
overflow-y: visible | hidden | scroll | auto | clip;
```

## Text Truncation (Ellipsis)

```css
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

## Multi-line Truncation

```css
.multiline-truncate {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

## Overflow Wrap

```css
.word-wrap {
  overflow-wrap: break-word;  /* Break long words */
  word-break: break-all;       /* Break at any character */
}
```

## Custom Scrollbar

```css
/* WebKit (Chrome, Safari, Edge) */
.element::-webkit-scrollbar { width: 8px; }
.element::-webkit-scrollbar-track { background: #f1f1f1; }
.element::-webkit-scrollbar-thumb { background: #888; border-radius: 4px; }

/* Firefox */
.element { scrollbar-width: thin; scrollbar-color: #888 #f1f1f1; }
```

## Overscroll Behavior

```css
.no-chaining {
  overscroll-behavior: contain;  /* Prevent scroll chaining */
}
.never-bounce {
  overscroll-behavior: none;     /* No bounce effect */
}
```

## Responsive Images

```css
img {
  max-width: 100%;
  height: auto;
}
```

## Common Patterns

### Fixed Height Scrollable Container
```css
.scrollable {
  height: 400px;
  overflow-y: auto;
}
```

### Hide Horizontal Scroll
```css
.hide-x-scroll {
  overflow-x: hidden;
  overflow-y: auto;
}
```

### Scrollbar Gutter
```css
.reserve-space {
  scrollbar-gutter: stable;  /* Reserve scrollbar space */
}
```

## Accessibility

```css
/* Focus visible for scrollable areas */
[tabindex="0"]:focus {
  outline: 2px solid #4a90d9;
}
```
```html
<div tabindex="0" role="region" aria-label="Scrollable content">
  ...
</div>
```

## Common Issues

| Issue | Solution |
|-------|----------|
| Unexpected horizontal scroll | Check fixed-width elements, use `max-width: 100%` |
| Sticky not working | Check parent for `overflow: hidden/auto` |
| Margins causing scroll | Use `overflow: auto` instead of hidden |
| Content jumps when scrollbar appears | Use `scrollbar-gutter: stable` |
| Long words break layout | Use `overflow-wrap: break-word` |
