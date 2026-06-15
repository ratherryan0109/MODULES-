# CSS Maintainability Cheatsheet

## File Organization
```
styles/
├── base/
│   ├── _reset.css
│   └── _typography.css
├── components/
│   ├── _button.css
│   ├── _card.css
│   └── _nav.css
├── layout/
│   ├── _grid.css
│   └── _header.css
├── utilities/
│   └── _spacing.css
├── _variables.css
└── main.css
```

## BEM Naming
```
.block                  → Component name (card)
.block__element         → Component part (card__title)
.block--modifier        → Component variant (card--featured)
```

## Comment Templates
```css
/**
 * Component Name
 *
 * Description of component purpose
 *
 * Usage: <div class="component component--modifier">
 *   <h2 class="component__title">...</h2>
 * </div>
 *
 * Modifiers:
 *   component--featured - Highlighted variant
 *
 * States:
 *   .is-active - Active state
 */
```

## Maintainability Checklist
- [ ] CSS custom properties for all colors/spacing
- [ ] No !important (except utilities)
- [ ] No ID selectors for styling
- [ ] Consistent naming convention (BEM)
- [ ] Component files organized by function
- [ ] Comments explain non-obvious decisions
- [ ] No magic numbers (values in context)
- [ ] Selectors are as flat as possible
- [ ] Unused CSS is regularly removed
- [ ] Stylelint configured for team consistency
- [ ] Living style guide maintained
- [ ] Architecture decisions documented
