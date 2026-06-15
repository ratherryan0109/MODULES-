# Advanced Custom Properties Cheatsheet

## @property Rule
```css
@property --hue {
  syntax: '<number>';
  inherits: true;
  initial-value: 200;
}

@property --primary-color {
  syntax: '<color>';
  inherits: true;
  initial-value: #3498db;
}

@property --size {
  syntax: '<length>';
  inherits: false;
  initial-value: 16px;
}

@property --rotation {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}
```

## Syntax Types
| Syntax | Examples |
|--------|---------|
| `<length>` | `10px`, `2rem`, `50%` |
| `<number>` | `0.5`, `100`, `3.14` |
| `<percentage>` | `50%`, `100%` |
| `<color>` | `#3498db`, `rgb(0,0,0)`, `hsl(200,70%,50%)` |
| `<angle>` | `45deg`, `0.5turn`, `200grad` |
| `<time>` | `2s`, `500ms` |
| `<resolution>` | `300dpi`, `2dpcm` |
| `*` | Any valid CSS value |

## Animating Custom Properties
```css
/* Registered properties interpolate smoothly */
@keyframes hueShift {
  0% { --hue: 0; }
  100% { --hue: 360; }
}

.element {
  background: hsl(var(--hue), 70%, 50%);
  animation: hueShift 3s linear infinite;
}
```

## Transitions with Custom Properties
```css
.element {
  --hue: 200;
  transition: --hue 0.5s ease;
}
.element:hover {
  --hue: 20;
}
```

## Feature Detection
```css
@supports (--custom: property) {
  /* Custom properties supported */
}
@supports not (--custom: property) {
  /* Fallback */
}
```

## Composition Patterns
```css
.element {
  --hue: 200;
  --saturation: 70%;
  --lightness: 50%;
  background: hsl(var(--hue), var(--saturation), var(--lightness));
  border: calc(var(--hue) * 0.1px) solid black;
}
```

## Shadow DOM Theming
```css
/* In global CSS */
:root {
  --component-primary: #3498db;
  --component-bg: white;
}

/* In Shadow DOM (inherits automatically) */
:host {
  background: var(--component-bg);
  color: var(--component-primary);
}
```
