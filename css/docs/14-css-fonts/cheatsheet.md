# CSS Fonts — Cheatsheet
## Properties
- `font-family: 'Open Sans', Arial, sans-serif;`
- `font-size: 16px;` or `1rem;` or `1.2em;`
- `font-weight: normal(400) | bold(700) | 100-900`
- `font-style: normal | italic | oblique`
- `font-variant: normal | small-caps`
- `line-height: 1.5;` (unitless recommended)

## Shorthand
`font: style weight size/line-height family;`
`font: italic bold 16px/1.5 Arial, sans-serif;`

## Web Fonts
```css
@font-face {
  font-family: 'MyFont';
  src: url('myfont.woff2') format('woff2');
  font-display: swap;
}
```

## Units
| Unit | Relative To |
|------|-------------|
| `px` | Fixed (not recommended for font-size) |
| `em` | Parent element's font-size |
| `rem` | Root (html) element's font-size |
| `%` | Parent element's font-size |
