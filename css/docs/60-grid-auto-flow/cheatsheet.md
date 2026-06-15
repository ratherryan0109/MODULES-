# Grid Auto Flow — Cheatsheet

## Property
```css
grid-auto-flow: row | column | dense | row dense | column dense;
```
Applies to: grid container

## Values

| Value | Behavior | Use Case |
|-------|----------|----------|
| `row` **(default)** | Fill left to right, then top to bottom | General layouts |
| `column` | Fill top to bottom, then left to right | Vertical lists, timelines |
| `dense` | Fill gaps regardless of DOM order | Image galleries |
| `row dense` | Row-major fill + gap filling | Compact horizontal layouts |
| `column dense` | Column-major fill + gap filling | Compact vertical layouts |

## Memory Jogger
- **row** → reading direction (LTR top-to-bottom)
- **column** → filling a column on a page (top-to-bottom first)
- **dense** → "dense" packing — no holes

## Companion Properties
```css
grid-auto-rows: <length>;      /* Size of implicit rows */
grid-auto-columns: <length>;   /* Size of implicit columns */
```

## Pattern: Row Flow
```css
.grid { grid-template-columns: repeat(3, 1fr); grid-auto-flow: row; }
/* Placement: 1 2 3 / 4 5 6 / 7 8 9 */
```

## Pattern: Column Flow
```css
.grid { grid-template-columns: repeat(3, 1fr); grid-auto-flow: column; }
/* Placement: 1 4 7 / 2 5 8 / 3 6 9 */
```

## Pattern: Dense Gallery
```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-flow: dense;
  gap: 8px;
}
```

## Accessibility Reminder
- `dense` changes visual order — ensure DOM order matches tab/reading order for interactive content
- Use `dense` for decorative content (image galleries, portfolios) — avoid for forms, articles, navigation
- Keep the reading/tab order logical for screen reader users

## Browser Support
All values supported in:
- Chrome 57+ (2017)
- Firefox 52+ (2017)
- Safari 10.1+ (2017)
- Edge 16+ (2017)
