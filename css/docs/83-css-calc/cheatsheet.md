# CSS calc() Cheatsheet

## Syntax
```css
calc(expression)
```

## Operators
| Operator | Example | Notes |
|----------|---------|-------|
| `+` | `calc(100% + 20px)` | Requires spaces |
| `-` | `calc(100% - 40px)` | Requires spaces |
| `*` | `calc(2 * 20px)` | One operand must be unitless |
| `/` | `calc(100% / 3)` | Right operand must be unitless |

## Common Patterns

### Full-width minus padding
```css
.element {
  width: calc(100% - 40px);
}
```

### Sidebar layout
```css
.sidebar { width: 250px; flex-shrink: 0; }
.main { width: calc(100% - 250px - 1rem); }
```

### Fluid typography
```css
h1 { font-size: calc(1.5rem + 2vw); }
p { font-size: calc(1rem + 0.5vw); }
```

### Viewport height minus header
```css
.content {
  min-height: calc(100vh - 60px);
}
```

### Equal columns with gaps
```css
.column {
  width: calc(100% / 3 - 1rem);
  margin: 0.5rem;
}
```

### Full-bleed section
```css
.full-bleed {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding-left: calc(50vw - 50%);
  padding-right: calc(50vw - 50%);
}
```

### Fluid spacing
```css
.element {
  padding: calc(1rem + 1vw);
  margin-bottom: calc(0.5rem + 0.5vw);
}
```

### calc() with CSS variables
```css
:root {
  --columns: 3;
  --gap: 1rem;
}
.column {
  width: calc(100% / var(--columns) - var(--gap));
}
```

## Important Rules
- Spaces around `+` and `-` are **required**
- For `*`: at least one operand must be unitless
- For `/`: the right operand must be unitless
- Nested calc() is supported in modern browsers
- calc() works with `<length>`, `<frequency>`, `<angle>`, `<time>`, `<percentage>`, `<number>`, `<integer>`
