# CSS Architecture — Cheatsheet

## Methodologies at a Glance

| Methodology | Focus | Key Pattern |
|---|---|---|
| **BEM** | Naming convention | `.block__element--modifier` |
| **OOCSS** | Reusable objects | Separate structure from skin |
| **SMACSS** | Rule categorization | Base, Layout, Module, State, Theme |
| **ITCSS** | File/specificity layering | Settings → Tools → Generic → Elements → Objects → Components → Utilities |

## BEM Naming

```
.block              → The component itself
.block__element     → A child part of the component
.block--modifier    → A variation
.block__element--modifier → A variation of a child
```

```css
.card { }
.card__title { }
.card--featured { }
.card__title--large { }
```

## ITCSS Pyramid

```
┌──────────────────────────────┐
│         Settings             │  Variables, tokens (no output)
├──────────────────────────────┤
│          Tools               │  Mixins, functions
├──────────────────────────────┤
│         Generic              │  Reset, normalize
├──────────────────────────────┤
│         Elements             │  Bare HTML (h1, a, ul)
├──────────────────────────────┤
│         Objects              │  Layout patterns (.o-grid)
├──────────────────────────────┤
│       Components             │  UI components (.c-card)
├──────────────────────────────┤
│        Utilities             │  Overrides (.u-text-center)
└──────────────────────────────┘
          ▲ Specificity
```

## SMACSS Categories

| Category | Prefix | Example |
|---|---|---|
| Base | (element) | `body { }`, `a { }` |
| Layout | `.l-` | `.l-header`, `.l-sidebar` |
| Module | (descriptive) | `.card`, `.nav`, `.btn` |
| State | `.is-` | `.is-active`, `.is-hidden` |
| Theme | `.theme-` | `.theme-dark`, `.theme-compact` |

## CSS Layers

```css
/* Declare layer order (first = lowest priority) */
@layer settings, generic, elements, objects, components, utilities;

/* Add rules to a layer */
@layer components {
  .card { background: var(--color-surface); }
}

/* Unlayered styles beat ALL layers */
```

## Design Tokens Pattern

```css
:root {
  --color-primary: #667eea;
  --color-surface: #ffffff;
  --color-text: #333333;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --font-sans: 'Inter', system-ui, sans-serif;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
}

[data-theme="dark"] {
  --color-surface: #1e1e2e;
  --color-text: #cdd6f4;
}

/* Components reference tokens, never hard-code values */
.card {
  background: var(--color-surface);
  color: var(--color-text);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
}
```

## Specificity

```
0,0,0,1  element (h1, p, a)
0,0,1,0  class (.card, .btn)
0,0,1,1  class + element (.card h2)
0,1,0,0  ID (#header)
1,0,0,0  inline style
```

**Golden rule:** Stay at `0,0,1,0` (single class). Never use IDs or `!important`.

## Zero-specificity selectors

```css
:where(.card) { }        /* specificity: 0,0,0,0 */
:is(.card, .btn) { }     /* specificity: 0,0,1,0 (most specific arg) */
:has(.card) { }           /* specificity: 0,0,1,0 */
```

## File Organization

```
styles/
├── settings/
│   └── _tokens.css
├── generic/
│   └── _reset.css
├── elements/
│   └── _typography.css
├── objects/
│   ├── _container.css
│   └── _grid.css
├── components/
│   ├── _button.css
│   ├── _card.css
│   └── _modal.css
├── utilities/
│   └── _spacing.css
└── main.css
```

## Common Mistakes

- ❌ Overly deep nesting (high specificity)
- ❌ Mixing methodologies inconsistently
- ❌ Hard-coding values instead of using custom properties
- ❌ Too many utility classes making HTML unreadable
- ❌ Using `!important` to fight specificity instead of `@layer`
- ❌ No CSS reset leading to browser inconsistencies
- ❌ CSS `@import` in stylesheets (blocks parallel downloads)

## Best Practices

- ✅ Pick one methodology and stick with it (BEM + ITCSS recommended)
- ✅ Use `@layer` for cascade control
- ✅ Keep specificity low and flat (single class selectors)
- ✅ Use semantic custom properties for all design values
- ✅ Document naming conventions and architecture decisions
- ✅ Use stylelint to enforce convention consistency
