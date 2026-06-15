# CSS Design Systems

## Introduction
A CSS Design System is a comprehensive collection of reusable components, design tokens, patterns, and guidelines that ensure visual and functional consistency across products. CSS plays a crucial role in implementing and maintaining design systems — providing the theming engine, component styles, layout primitives, and responsive behavior that make design systems work at scale. This module covers how to build, document, and distribute a CSS-powered design system.

---

## Learning Objectives
1. Understand design system components and architecture layers
2. Implement design tokens with CSS custom properties (colors, spacing, typography, shadows)
3. Build a complete component library with CSS methodologies (BEM, ITCSS)
4. Create consistent spacing, typography, and color systems with mathematical scales
5. Implement multi-theme support using CSS custom properties and `data-` attributes
6. Document and distribute CSS design systems effectively
7. Ensure accessibility compliance across all components (WCAG 2.1 AA)
8. Build responsive components that work across devices
9. Create utility classes for rapid layout and spacing
10. Version and distribute the design system as an npm package

---

## Theory

### What is a Design System?

A design system is more than a component library. It is a **complete set of standards** for visual and functional consistency:

```
┌─────────────────────────────────────┐
│        Design Guidelines            │  ─── Principles, voice, tone
├─────────────────────────────────────┤
│         Design Tokens               │  ─── Colors, typography, spacing
├─────────────────────────────────────┤
│         Base Styles                 │  ─── Reset, typography defaults
├─────────────────────────────────────┤
│      Layout Primitives              │  ─── Grid, container, flex utilities
├─────────────────────────────────────┤
│         Components                  │  ─── Button, Card, Modal, Input, etc.
├─────────────────────────────────────┤
│         Patterns                    │  ─── Page templates, feature sections
├─────────────────────────────────────┤
│         Documentation               │  ─── Usage guidelines, code examples
└─────────────────────────────────────┘
```

CSS handles layers 2 through 6 — the tangible styling that users see and interact with.

### Design System vs Component Library

| Aspect | Component Library | Design System |
|--------|------------------|---------------|
| Scope | Just the code | Code + guidelines + process |
| Includes | CSS, HTML, JS | Tokens, patterns, docs, principles |
| Governance | Tech team | Cross-functional (design + eng + PM) |
| Versioning | npm package | npm package + living docs |
| Audience | Developers | Designers, developers, product managers |

A design system **contains** a component library but also includes the decision-making framework.

---

### Design Tokens: The Foundation

Design tokens are the atomic values of a design system. They are the single source of truth for every visual property.

**Naming Convention:**

```
--category-property-variant
--category-property-state
```

Examples:
- `--color-primary-hover` — a hover variant of the primary color
- `--spacing-md` — medium spacing in the spacing scale
- `--font-size-lg` — large font size
- `--radius-full` — fully rounded corners

**Complete Token Set:**

```css
:root {
  /* ===== COLORS ===== */
  --color-primary: #3b82f6;
  --color-primary-hover: #2563eb;
  --color-primary-active: #1d4ed8;
  --color-primary-subtle: #dbeafe;

  --color-secondary: #8b5cf6;
  --color-secondary-hover: #7c3aed;

  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #06b6d4;

  --color-surface: #ffffff;
  --color-surface-alt: #f8fafc;
  --color-surface-hover: #f1f5f9;

  --color-text: #0f172a;
  --color-text-secondary: #475569;
  --color-text-muted: #94a3b8;
  --color-text-inverse: #ffffff;

  --color-border: #e2e8f0;
  --color-border-hover: #cbd5e1;

  /* ===== SPACING SCALE (4px base) ===== */
  --spacing-0: 0px;
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;

  /* ===== TYPOGRAPHY ===== */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */

  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;

  /* ===== SHADOWS ===== */
  --shadow-sm: 0 1px 2px 0 rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.05);
  --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.04);
  --shadow-xl: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.04);

  /* ===== BORDER RADIUS ===== */
  --radius-none: 0px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* ===== BREAKPOINTS (for documentation, not CSS) ===== */
  /* --bp-sm: 640px; */
  /* --bp-md: 768px; */
  /* --bp-lg: 1024px; */
  /* --bp-xl: 1280px; */

  /* ===== TRANSITIONS ===== */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;

  /* ===== Z-INDEX ===== */
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-modal-backdrop: 300;
  --z-modal: 400;
  --z-toast: 500;
}
```

**Why a 4px spacing scale?** The number 4 divides evenly into 8, 12, 16, 24, 32, 48, 64 — creating a proportional, harmonious rhythm. Many design systems (Material Design, IBM Carbon, Shopify Polaris) use 4px or 8px base spacing.

---

### Creating a Typography Scale

A modular typography scale creates visual harmony. The most common ratio is **1.25 (Major Third)**:

```
Base:    16px × 1.25^0  = 16px   (1rem)
Level 1: 16px × 1.25^1  = 20px   (1.25rem)
Level 2: 16px × 1.25^2  = 25px   (1.563rem)
Level 3: 16px × 1.25^3  = 31px   (1.953rem)
Level 4: 16px × 1.25^4  = 39px   (2.441rem)
Level 5: 16px × 1.25^5  = 49px   (3.052rem)
```

```css
h1 { font-size: var(--font-size-4xl); line-height: var(--line-height-tight); }
h2 { font-size: var(--font-size-3xl); line-height: var(--line-height-tight); }
h3 { font-size: var(--font-size-2xl); line-height: var(--line-height-normal); }
h4 { font-size: var(--font-size-xl); line-height: var(--line-height-normal); }
p  { font-size: var(--font-size-base); line-height: var(--line-height-relaxed); }
small { font-size: var(--font-size-sm); }
```

---

### Theming with CSS Custom Properties

Theming works by overriding design token values at different scope levels.

```css
/* Default (light) theme — already set in :root */
:root {
  --color-surface: #ffffff;
  --color-surface-alt: #f8fafc;
  --color-text: #0f172a;
  --color-text-secondary: #475569;
  --color-border: #e2e8f0;
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.07);
}

/* Dark theme — override only the tokens that change */
[data-theme="dark"] {
  --color-surface: #1e1e2e;
  --color-surface-alt: #313244;
  --color-text: #cdd6f4;
  --color-text-secondary: #a6adc8;
  --color-border: #45475a;
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.4);
}

/* High contrast theme */
[data-theme="high-contrast"] {
  --color-primary: #0000ff;
  --color-text: #000000;
  --color-surface: #ffffff;
  --color-border: #000000;
  --color-text-inverse: #ffffff;
}
```

**Switching themes via JavaScript:**
```javascript
// Apply dark theme
document.documentElement.setAttribute('data-theme', 'dark');

// Remove theme (back to default)
document.documentElement.removeAttribute('data-theme');

// Auto-detect system preference
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('data-theme', 'dark');
}
```

---

### Component Architecture

Every component in a design system follows a consistent pattern:

```css
/* Component: .c-btn */

/* Base: shared by all variants */
.c-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-base);
  font-family: var(--font-sans);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
  border: 2px solid transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition:
    background var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast),
    box-shadow var(--transition-fast);
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
}

/* Variant: primary */
.c-btn--primary {
  background: var(--color-primary);
  color: var(--color-text-inverse);
  border-color: var(--color-primary);
}
.c-btn--primary:hover {
  background: var(--color-primary-hover);
  border-color: var(--color-primary-hover);
}
.c-btn--primary:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Variant: outline */
.c-btn--outline {
  background: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}
.c-btn--outline:hover {
  background: var(--color-primary-subtle);
}

/* Size: small */
.c-btn--sm {
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-sm);
}

/* Size: large */
.c-btn--lg {
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: var(--font-size-lg);
}

/* State: disabled */
.c-btn:disabled,
.c-btn[aria-disabled="true"] {
  opacity: 0.5;
  pointer-events: none;
}
```

---

### Layout Primitives

Layout primitives are reusable, class-based layout components.

```css
/* Container */
.o-container {
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: var(--spacing-md);
}

/* Responsive Grid */
.o-grid {
  display: grid;
  gap: var(--spacing-md);
}

.o-grid--auto {
  grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
}

.o-grid--2 { grid-template-columns: repeat(2, 1fr); }
.o-grid--3 { grid-template-columns: repeat(3, 1fr); }
.o-grid--4 { grid-template-columns: repeat(4, 1fr); }

/* Stack (vertical flex) */
.o-stack {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

/* Inline (horizontal flex) */
.o-inline {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  align-items: center;
}

/* Center */
.o-center {
  display: grid;
  place-items: center;
}

/* Cluster (wrapping group) */
.o-cluster {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  align-items: center;
  justify-content: center;
}
```

---

### Utility Classes

Utility classes provide one-off overrides for rapid layouts.

```css
/* Spacing */
.u-mt-0  { margin-top: 0; }
.u-mt-xs { margin-top: var(--spacing-xs); }
.u-mt-sm { margin-top: var(--spacing-sm); }
.u-mt-md { margin-top: var(--spacing-md); }
.u-mt-lg { margin-top: var(--spacing-lg); }
.u-mt-xl { margin-top: var(--spacing-xl); }

.u-mb-md { margin-bottom: var(--spacing-md); }
.u-mr-md { margin-right: var(--spacing-md); }

/* Padding */
.u-p-md  { padding: var(--spacing-md); }
.u-p-lg  { padding: var(--spacing-lg); }

/* Text */
.u-text-center { text-align: center; }
.u-text-right  { text-align: right; }
.u-text-bold   { font-weight: var(--font-weight-bold); }
.u-text-muted  { color: var(--color-text-muted); }

/* Display */
.u-flex    { display: flex; }
.u-grid    { display: grid; }
.u-hidden  { display: none; }

/* Responsive visibility */
@media (max-width: 640px) {
  .u-hidden-mobile { display: none; }
}
@media (min-width: 1024px) {
  .u-hidden-desktop { display: none; }
}
```

---

### Documentation

A design system is only as good as its documentation. Every component should document:

```markdown
## Button (c-btn)

**Description:** Primary action button with multiple variants and sizes.

**Usage:**
```html
<button class="c-btn c-btn--primary">Click me</button>
<a class="c-btn c-btn--outline" href="/">Link Button</a>
```

**Variants:**
- `c-btn--primary` — Solid primary color background
- `c-btn--outline` — Outlined style with primary color
- `c-btn--ghost` — Transparent with text only
- `c-btn--danger` — Red for destructive actions

**Sizes:**
- `c-btn--sm` — Compact (32px height)
- Default — Standard (40px height)
- `c-btn--lg` — Large (48px height)

**States:**
- `:hover` — Darker background
- `:focus-visible` — Outline ring
- `:disabled` — 50% opacity, no pointer events

**Accessibility:**
- Always uses semantic `<button>` or `<a>` elements
- Focus-visible ring for keyboard navigation
- ARIA aria-disabled for disabled state
- Minimum 4.5:1 contrast ratio on all variants
```

---

## Visual Explanation

```
Design System Architecture Layers:

┌──────────────────────────────────────────────┐
│         Design Guidelines                    │  Principles, voice, tone
├──────────────────────────────────────────────┤
│         Design Tokens                        │  Colors, spacing, typography
├──────────────────────────────────────────────┤
│         Base Styles                          │  Reset, typography defaults
├──────────────────────────────────────────────┤
│         Layout Primitives                    │  Grid, container, flex
├──────────────────────────────────────────────┤
│         Components                           │  Button, Card, Modal, Input
├──────────────────────────────────────────────┤
│         Patterns                             │  Page templates, sections
├──────────────────────────────────────────────┤
│         Documentation                        │  Usage guidelines, examples
└──────────────────────────────────────────────┘

CSS handles layers 2 through 6 — the tangible styling.


Design Token Naming Convention:

  --[category]-[property]-[variant]
  ─────────────────────────────────

  --color-primary-hover    (color category, primary property, hover variant)
  --spacing-md              (spacing category, medium variant)
  --font-size-lg            (typography > font-size > large)
  --radius-full             (border-radius > fully rounded)
  --shadow-sm               (shadow category, small variant)
  --z-modal                 (z-index category, modal layer)


Spacing Scale (4px base) — Visual Rhythm:

  Token     Value    Visual
  ────────────────────────────────────
  --spacing-0    0px  ●
  --spacing-xs   4px  ●─
  --spacing-sm   8px  ●──
  --spacing-md  16px  ●────
  --spacing-lg  24px  ●──────
  --spacing-xl  32px  ●───────
  --spacing-2xl 48px  ●────────────
  --spacing-3xl 64px  ●────────────────

  The 4px base creates a harmonious rhythm:
  4, 8, 16, 24, 32, 48, 64 — all divisible by 4


Typography Scale (Major Third 1.25):

  Level   Calculation      Size      CSS Token
  ──────────────────────────────────────────────────
  0       16 x 1.25^0     16px      --font-size-base
  1       16 x 1.25^1     20px      --font-size-xl
  2       16 x 1.25^2     25px      --font-size-2xl
  3       16 x 1.25^3     31px      --font-size-3xl
  4       16 x 1.25^4     39px      --font-size-4xl
  5       16 x 1.25^5     49px

  Visual Hierarchy:
  h1 ----██████████████████████████████ 39px
  h2 ----██████████████████████████ 31px
  h3 ----██████████████████████ 25px
  h4 ----██████████████████ 20px
  p  ----██████████████ 16px
  sm ----██████████ 14px
  xs ----████████ 12px


Component Architecture — Button Example:

  Base (.c-btn)              Variants              Sizes
  ┌──────────────────┐    ┌──────────────┐     ┌──────────────┐
  │ inline-flex      │    │ --primary    │     │ --sm: 8px 12px│
  │ gap: 8px         │    │  bg: blue    │     │ --lg: 16px 24│
  │ padding: 8px 16px│    │  text: white │     │              │
  │ font-size: 16px  │    ├──────────────┤     └──────────────┘
  │ border-radius: 8 │    │ --outline    │
  │ cursor: pointer  │    │  bg: trans   │
  │ transition       │    │  border: blue│
  └──────────────────┘    ├──────────────┤
                          │ --danger     │
                          │  bg: red     │
                          └──────────────┘


Theming via Token Override:

  Same component, different theme — just swap token values:

  ┌────────────────────┐   ┌────────────────────┐
  │ LIGHT (:root)      │   │ DARK([data-theme])  │
  │                    │   │                    │
  │ ┌────────────────┐ │   │ ┌────────────────┐ │
  │ │ Card           │ │   │ │ Card           │ │
  │ │ bg: white      │ │   │ │ bg: #1e1e2e    │ │
  │ │ text: #0f172a  │ │   │ │ text: #cdd6f4  │ │
  │ │ border: #e2e8f0│ │   │ │ border: #45475a│ │
  │ └────────────────┘ │   │ └────────────────┘ │
  │                    │   │                    │
  │ Button:            │   │ Button:            │
  │ ┌────────────────┐ │   │ ┌────────────────┐ │
  │ │ Primary blue   │ │   │ │ Primary blue   │ │
  │ └────────────────┘ │   │ └────────────────┘ │
  └────────────────────┘   └────────────────────┘

  Components use var(--color-surface) — themes just redefine the token.


Documentation — What Every Component Needs:

  ┌──────────────────────────────────────┐
  │  Button (c-btn)                      │
  │  ──────────────────────────────────  │
  │  Description: Primary action button  │
  │                                      │
  │  Usage:                              │
  │  <button class="c-btn c-btn--primary"│
  │                                      │
  │  Variants: primary | outline | ghost │
  │  Sizes:    sm | md | lg              │
  │  States:   hover | focus | disabled  │
  │                                      │
  │  Accessibility:                      │
  │  - Semantic button element           │
  │  - Focus-visible ring                │
  │  - 4.5:1 contrast ratio              │
  └──────────────────────────────────────┘
```

### Common Mistakes

1. **Token naming inconsistency** — `--colorPrimary`, `--color-primary`, and `--colorPrimary-color` in the same system. Pick one convention and enforce it.

2. **Not versioning tokens** — When you change a token value, every component using it updates. This is powerful but dangerous — use semantic versioning.

3. **Components that don't use tokens** — A button with `background: #3b82f6` instead of `background: var(--color-primary)` defeats the purpose of a design system.

4. **Too many components** — A design system with 200 button variants is not helpful. Start small and add components based on real usage data.

5. **No responsive design** — All components should work from 320px to 1920px+.

6. **Forgetting focus styles** — Keyboard users need visible focus indicators. Never do `outline: none` without an alternative.

7. **Not testing with real content** — Components look perfect with lorem ipsum but break with real user data (long words, different languages).

8. **No CSS-only fallback** — If your system relies on JavaScript for basic styling, it will break when JS fails.

9. **Skipping documentation** — A component without documentation doesn't exist. Developers won't use what they don't know about.

10. **Not handling reduced motion** — Animated components should respect `prefers-reduced-motion`.

---

## Best Practices

1. **Use consistent naming** — Follow `--category-property-variant` for tokens and `.c-component--modifier` for components.

2. **Document all tokens and components** — Every token needs a name, value, description, and usage example.

3. **Version your design system** — Use semantic versioning for your CSS package. Token changes are breaking changes.

4. **Test across browsers and themes** — Run visual regression tests for every component in every theme variant.

5. **Keep tokens as the single source of truth** — Never hard-code values outside the token files.

6. **Build with accessibility from the start** — WCAG 2.1 AA minimum. Include focus styles, contrast checks, and semantic HTML.

7. **Use CSS-only patterns where possible** — Less JavaScript means more robust, faster-loading components.

8. **Create a demo page** — A living style guide with every component and variant is essential for adoption.

9. **Use CSS `@layer`** — Organize your tokens, base, components, and utilities into cascade layers.

10. **Audit usage regularly** — Remove components nobody uses. Add components everybody needs.

---

## Accessibility

- **Color contrast**: All text/background combinations must pass WCAG AA (4.5:1 for normal text, 3:1 for large text)
- **Focus indicators**: Every interactive element must have a visible `:focus-visible` style
- **Reduced motion**: Wrap animations in `@media (prefers-reduced-motion: no-preference)`
- **Semantic HTML**: Use `<button>` for buttons, `<nav>` for navigation, `<main>` for content
- **ARIA attributes**: Use `aria-label`, `aria-expanded`, `aria-current` where appropriate
- **Screen reader testing**: Test all components with VoiceOver (macOS) and NVDA (Windows)

---

## Performance

- **CSS bundle size**: Tree-shake unused components. A 500KB design system CSS file hurts every page.
- **Critical CSS**: Extract above-the-fold CSS when performance matters.
- **@import vs link**: Prefer multiple `<link>` tags over CSS `@import` which blocks parallel downloads.
- **Content-visibility**: Use `content-visibility: auto` on off-screen sections.
- **Avoid large box-shadows**: Multiple large shadows can cause painting performance issues on mobile.

---

## Browser Support

| Feature | Chrome | Edge | Firefox | Safari |
|---------|--------|------|---------|--------|
| CSS Custom Properties | 49+ | 15+ | 31+ | 9.1+ |
| CSS `@layer` | 99+ | 99+ | 97+ | 15.4+ |
| `:focus-visible` | 86+ | 86+ | 85+ | 15.4+ |
| `prefers-color-scheme` | 76+ | 79+ | 67+ | 12.1+ |
| `prefers-reduced-motion` | 74+ | 79+ | 63+ | 10.1+ |
| `gap` in Flexbox | 84+ | 84+ | 63+ | 14.1+ |
| Container Queries | 105+ | 105+ | 110+ | 16+ |

---

## Summary Notes

- **Design tokens are the foundation** — Every visual value should be a CSS custom property
- **Components use tokens** — Never hard-code values in component styles
- **Theming = token overrides** — Dark mode is just a new set of token values
- **Document everything** — A component without docs doesn't exist
- **Accessibility is not optional** — Build it in from the start
- **Version your system** — Use semver for CSS packages
- **Start small, grow with usage** — Build what you need, not everything imaginable

---

## Cheat Table

| Concept | Implementation | Purpose |
|---------|---------------|---------|
| Design tokens | `--color-primary: #3b82f6` | Single source of truth for visual values |
| Component base | `.c-btn { }` | Shared styles across all variants |
| Component variant | `.c-btn--primary { }` | Specific visual variation |
| Component size | `.c-btn--sm { }` | Size variation |
| Theme | `[data-theme="dark"] { }` | Token overrides for alternate themes |
| Layout primitive | `.o-grid { }` | Reusable layout pattern |
| Utility | `.u-mt-md { }` | Single-purpose override |
| State class | `.is-active { }` | Dynamic component state |
| Container | `.o-container { }` | Max-width centered wrapper |
