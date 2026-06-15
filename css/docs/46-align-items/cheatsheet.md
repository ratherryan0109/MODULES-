# Align Items - Quick Reference

## Values

| Value | Behavior | Use Case |
|-------|----------|----------|
| `stretch` (default) | Items fill cross-axis space | Equal height columns |
| `flex-start` | Items align at cross-axis start | Top-aligned content |
| `flex-end` | Items align at cross-axis end | Bottom-aligned content |
| `center` | Items center on cross axis | Vertical centering |
| `baseline` | Items align by text baseline | Form rows with mixed fonts |

## align-items vs align-self

```css
/* Container sets default for all items */
.container { align-items: center; }

/* Item overrides for itself */
.item-special { align-self: flex-end; }
```

## Direction Changes

| flex-direction | Cross axis (align-items controls) |
|---------------|-----------------------------------|
| `row` | Vertical (top → bottom) |
| `row-reverse` | Vertical |
| `column` | Horizontal (left → right) |
| `column-reverse` | Horizontal |

## Common Pattern

```css
/* Perfect centering */
.container { display: flex; justify-content: center; align-items: center; }
```
