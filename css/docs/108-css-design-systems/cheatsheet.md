# CSS Design Systems — Cheatsheet

## Design System Layers

```
┌──────────────────────────────┐
│    Design Guidelines         │  Principles, voice, tone
├──────────────────────────────┤
│    Design Tokens             │  Colors, spacing, typography, shadows
├──────────────────────────────┤
│    Base Styles               │  Reset, typography defaults
├──────────────────────────────┤
│    Layout Primitives         │  Grid, container, flex utilities
├──────────────────────────────┤
│    Components                │  Button, Card, Modal, Input, etc.
├──────────────────────────────┤
│    Patterns                  │  Page templates, feature sections
├──────────────────────────────┤
│    Documentation             │  Usage guidelines, code examples
└──────────────────────────────┘
```

## Token Naming Convention

```
--category-property-variant

--color-primary-hover
--spacing-md
--font-size-lg
--radius-full
--shadow-sm
```

## Complete Token Set

### Colors
```css
--color-primary          /* Primary brand color */
--color-primary-hover    /* Primary hover state */
--color-primary-active   /* Primary active/pressed state */
--color-primary-subtle   /* Primary background tint */
--color-surface          /* Default background */
--color-surface-alt      /* Alternative background */
--color-text             /* Primary text */
--color-text-secondary   /* Secondary text */
--color-text-muted       /* Muted/de-emphasized text */
--color-text-inverse     /* Text on dark backgrounds */
--color-border           /* Default border */
--color-border-hover     /* Border hover state */
--color-success          /* Success semantic */
--color-warning          /* Warning semantic */
--color-error            /* Error semantic */
--color-info             /* Info semantic */
```

### Spacing (4px base)
```css
--spacing-0: 0px
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 16px
--spacing-lg: 24px
--spacing-xl: 32px
--spacing-2xl: 48px
--spacing-3xl: 64px
```

### Typography
```css
--font-sans              /* Primary sans-serif font stack */
--font-mono              /* Monospace font stack */
--font-size-xs: 0.75rem  /* 12px */
--font-size-sm: 0.875rem /* 14px */
--font-size-base: 1rem   /* 16px */
--font-size-lg: 1.25rem  /* 20px */
--font-size-xl: 1.5rem   /* 24px */
--font-size-2xl: 1.5rem  /* 24px */
--font-size-3xl: 1.875rem /* 30px */
--font-size-4xl: 2.25rem  /* 36px */
--font-weight-normal: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
```

## Theming Pattern

```css
/* Default theme */
:root {
  --color-primary: #3b82f6;
  --color-surface: #ffffff;
  --color-text: #0f172a;
}

/* Dark theme — override what changes */
[data-theme="dark"] {
  --color-primary: #60a5fa;
  --color-surface: #1e1e2e;
  --color-text: #cdd6f4;
}

/* Apply with JS */
document.documentElement.setAttribute('data-theme', 'dark');
```

## Component Architecture

```css
/* Base — shared by all variants */
.c-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  font-family: var(--font-sans);
  border-radius: var(--radius-md);
  border: 2px solid transparent;
  cursor: pointer;
  transition: background var(--transition-fast);
}

/* Variants */
.c-btn--primary { background: var(--color-primary); color: white; }
.c-btn--outline { background: transparent; color: var(--color-primary); border-color: var(--color-primary); }

/* Sizes */
.c-btn--sm { padding: var(--spacing-xs) var(--spacing-sm); font-size: var(--font-size-sm); }
.c-btn--lg { padding: var(--spacing-md) var(--spacing-lg); font-size: var(--font-size-lg); }

/* States */
.c-btn:disabled { opacity: 0.5; pointer-events: none; }
.c-btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
```

## Layout Primitives

```css
.o-container { max-width: 1200px; margin-inline: auto; padding-inline: var(--spacing-md); }
.o-grid { display: grid; gap: var(--spacing-md); }
.o-grid--auto { grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr)); }
.o-stack { display: flex; flex-direction: column; gap: var(--spacing-md); }
.o-inline { display: flex; flex-wrap: wrap; gap: var(--spacing-md); align-items: center; }
.o-center { display: grid; place-items: center; }
```

## Prefix Conventions

| Prefix | Category | Example |
|---|---|---|
| `--` | Design token | `--color-primary` |
| `.c-` | Component | `.c-btn`, `.c-card` |
| `.o-` | Object/layout | `.o-grid`, `.o-container` |
| `.u-` | Utility | `.u-mt-md`, `.u-text-center` |
| `.is-` | State | `.is-active`, `.is-open` |

## Accessibility Checks

- ✅ Color contrast ≥ 4.5:1 (normal text), ≥ 3:1 (large text)
- ✅ `:focus-visible` on all interactive elements
- ✅ `prefers-reduced-motion` respected
- ✅ Semantic HTML elements used
- ✅ ARIA attributes where needed

## Output Structure

```
design-system/
├── tokens/
│   ├── _colors.css
│   ├── _typography.css
│   └── _spacing.css
├── base/
│   └── _reset.css
├── objects/
│   ├── _grid.css
│   └── _container.css
├── components/
│   ├── _button.css
│   ├── _card.css
│   ├── _modal.css
│   └── _input.css
├── utilities/
│   └── _spacing.css
├── main.css
└── docs/
    ├── index.html         /* Living style guide */
    └── tokens.html        /* Token reference */
```
