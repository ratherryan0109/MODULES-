# CSS Best Practices Cheatsheet

## Specificity Hierarchy
```
Inline styles    → 1,0,0,0
#id              → 0,1,0,0
.class           → 0,0,1,0
element          → 0,0,0,1
*                → 0,0,0,0
```

## Property Order Convention
```
1. Position (position, top, z-index)
2. Display & Layout (display, flex, grid)
3. Box Model (width, margin, padding, border)
4. Typography (font, line-height, text-align)
5. Visual (color, background, box-shadow)
6. Misc (cursor, animation, transform)
```

## CSS Organization Layers
```css
@layer reset, base, components, utilities;

@layer reset {
  *, *::before, *::after { box-sizing: border-box; }
}
@layer base {
  body { font-family: system-ui; line-height: 1.6; }
}
@layer components {
  .card { ... }
}
@layer utilities {
  .text-center { text-align: center; }
}
```

## Defensive CSS Patterns
```css
/* Images */
img { max-width: 100%; height: auto; }

/* Long text */
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.word-break {
  overflow-wrap: break-word;
  word-break: break-word;
}

/* Responsive containers */
.container {
  max-width: min(1200px, 100% - 2rem);
  margin-inline: auto;
}

/* Touch targets */
button, a { min-height: 44px; }
```

## Naming Conventions
| Methodology | Pattern | Example |
|-------------|---------|---------|
| BEM | `.block__element--modifier` | `.card__title--featured` |
| SMACSS | `.l-`, `.m-`, `.is-` | `.l-grid`, `.is-active` |
| Utility | `.u-` | `.u-text-center` |
| ITCSS | Layer prefix | `.o-layout`, `.c-card` |

## Common Anti-patterns
| Anti-pattern | Fix |
|-------------|-----|
| `#main-content` | Use `.main-content` |
| `!important` | Fix specificity instead |
| `div.class` | Just `.class` |
| `15px 15px 15px 15px` | `15px` |
| Current browser prefix | Use PostCSS/autoprefixer |
