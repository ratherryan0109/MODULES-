# Flex Wrap - Cheatsheet

## Values

| Value | Behavior | Visual Order |
|-------|----------|-------------|
| `nowrap` | Single line, may overflow | 1 2 3 4 5 6... |
| `wrap` | Multi-line, top to bottom | 1 2 3 / 4 5 6 |
| `wrap-reverse` | Multi-line, bottom to top | 4 5 6 / 1 2 3 |

## Syntax
```css
.container {
  flex-wrap: nowrap; /* default */
  flex-wrap: wrap;
  flex-wrap: wrap-reverse;
}
```

## Flex-Flow Shorthand
```css
.container {
  flex-flow: <flex-direction> <flex-wrap>;
  /* Examples: */
  flex-flow: row wrap;
  flex-flow: column nowrap;
  flex-flow: row-reverse wrap-reverse;
}
```

## Responsive Pattern
```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.item {
  flex: 1 1 250px;
  /* Grows, shrinks, minimum 250px basis */
}
```

## Alignment with Wrapping

| Property | Works With |
|----------|-----------|
| `justify-content` | ✓ Single line & multi-line (per line) |
| `align-items` | ✓ Single line & multi-line (per line) |
| `align-content` | ✓ Multi-line ONLY |
| `align-self` | ✓ Single line & multi-line (per item) |

## Important Notes
- `align-content` requires flex-wrap: wrap to work
- gap works with wrapped items
- wrap-reverse changes cross axis direction only
- Responsive layouts possible without media queries
- Flex-flow shorthand: `flex-flow: row wrap;`
