# Flex Container - Cheatsheet

## Creating a Flex Container

| Property | Value | Effect |
|----------|-------|--------|
| `display` | `flex` | Block-level flex container |
| `display` | `inline-flex` | Inline-level flex container |

## Flex Container Properties

| Property | Initial Value | Description |
|----------|--------------|-------------|
| `flex-direction` | `row` | Main axis direction |
| `flex-wrap` | `nowrap` | Allow wrapping |
| `flex-flow` | `row nowrap` | Shorthand for direction + wrap |
| `justify-content` | `flex-start` | Main axis alignment |
| `align-items` | `stretch` | Cross axis alignment (single line) |
| `align-content` | `stretch` | Cross axis alignment (multi-line) |
| `gap` | `normal` (0) | Spacing between items |

## Block vs Inline-Flex

| Property | `display: flex` | `display: inline-flex` |
|----------|----------------|----------------------|
| Width | 100% of parent | Shrink-to-fit |
| Line behavior | Block-level | Inline-level |
| Use case | Page layouts | Small components |

## Gap Values
```css
gap: 1rem;        /* 16px spacing */
gap: 10px;        /* 10px spacing */
gap: 2em;         /* relative to font-size */
gap: 5%;          /* percentage of container size */
```

## Flex Formatting Context Rules
```
✓ Flex items are laid out along main axis
✗ Floats are ignored on flex items
✗ Margins do not collapse
✗ vertical-align has no effect on flex items
✗ ::first-line / ::first-letter don't apply
```

## Accessibility
- Flex containers don't change semantics
- Keep logical DOM order
- Don't rely on visual reordering for accessibility
