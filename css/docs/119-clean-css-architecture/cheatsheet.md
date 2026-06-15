# Clean CSS Architecture Cheatsheet

## ITCSS Layers (Generic → Explicit)
| # | Layer | Contains |
|---|-------|----------|
| 1 | Settings | Variables, config |
| 2 | Tools | Mixins, functions |
| 3 | Generic | Reset, normalize |
| 4 | Elements | Bare HTML (h1, a, p) |
| 5 | Objects | Layout (grid, container) |
| 6 | Components | UI modules (card, btn) |
| 7 | Utilities | Override helpers |

## CSS Layer Pattern
```css
@layer settings, tools, generic, elements, objects, components, utilities;

@layer settings {
  :root { --primary: #0055CC; }
}
@layer generic {
  *, *::before, *::after { box-sizing: border-box; }
}
@layer elements {
  body { font-family: system-ui; }
}
@layer objects {
  .o-grid { display: grid; gap: 1rem; }
}
@layer components {
  .c-card { border-radius: 8px; }
}
@layer utilities {
  .u-text-center { text-align: center; }
}
```

## Naming Prefixes (ITCSS + BEM)
| Prefix | Layer | Example |
|--------|-------|---------|
| none | Settings/Tools | `$primary` (Sass) |
| none | Generic/Elements | `body {}` |
| `.o-` | Objects | `.o-grid`, `.o-container` |
| `.c-` | Components | `.c-card__title` |
| `.u-` | Utilities | `.u-text-center` |
| `.is-` / `.has-` | State | `.is-active` |

## File Structure
```
styles/
├── settings/
│   └── _variables.css
├── tools/
│   └── _mixins.css
├── generic/
│   └── _reset.css
├── elements/
│   └── _typography.css
├── objects/
│   ├── _grid.css
│   └── _container.css
├── components/
│   ├── _card.css
│   └── _button.css
├── utilities/
│   └── _spacing.css
└── main.css
```

## Architecture Assessment Checklist
- [ ] Layers defined and used
- [ ] Objects separated from components
- [ ] No ID selectors for styling
- [ ] Consistent naming prefix convention
- [ ] File structure matches layer strategy
- [ ] Architecture documented
- [ ] Team trained on conventions
