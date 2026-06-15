# Flex Direction - Cheatsheet

## Values

| Value | Main Axis | Visual Order | Use Case |
|-------|-----------|-------------|----------|
| `row` | Left → Right | 1, 2, 3 | Navigation, button groups (default) |
| `row-reverse` | Right → Left | 3, 2, 1 | RTL layouts, right-aligned content |
| `column` | Top → Bottom | 1, 2, 3 | Vertical lists, sidebars, cards |
| `column-reverse` | Bottom → Top | 3, 2, 1 | Chat messages, bottom-up lists |

## Syntax
```css
.container {
  display: flex;
  flex-direction: row; /* default */
}
```

## Axis Relationships

| flex-direction | Main Axis | Cross Axis | justify-content | align-items |
|---------------|-----------|------------|-----------------|-------------|
| `row` | Horizontal | Vertical | Horizontal | Vertical |
| `row-reverse` | Horizontal (RTL) | Vertical | Horizontal (RTL) | Vertical |
| `column` | Vertical | Horizontal | Vertical | Horizontal |
| `column-reverse` | Vertical (BTT) | Horizontal | Vertical (BTT) | Horizontal |

## Accessibility
```
✓ row - matches DOM order
✓ column - matches DOM order
⚠ row-reverse - visual order ≠ DOM order
⚠ column-reverse - visual order ≠ DOM order
```

## Common Patterns
```css
/* Vertical navigation */
.sidebar { display: flex; flex-direction: column; }

/* Chat messages (newest at bottom) */
.chat { display: flex; flex-direction: column-reverse; }

/* Horizontal navbar */
.nav { display: flex; flex-direction: row; }
```
