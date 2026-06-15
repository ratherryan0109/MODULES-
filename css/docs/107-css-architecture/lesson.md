# CSS Architecture

## Introduction
CSS Architecture encompasses methodologies, patterns, and principles for organizing CSS at scale. Well-architected CSS is maintainable, scalable, predictable, and performant — essential for projects of any size. This module covers the major CSS methodologies (BEM, ITCSS, OOCSS, SMACSS), how to organize files, manage specificity, use CSS layers, and build design token systems with custom properties.

---

## Learning Objectives
1. Understand the major CSS architecture principles: OOCSS, BEM, SMACSS, ITCSS
2. Implement BEM naming convention effectively in real-world components
3. Organize CSS files for scalability using the ITCSS pyramid
4. Manage specificity and cascade intentionally using `@layer`
5. Use CSS custom properties for design tokens and theming
6. Create maintainable, themeable stylesheets that scale across teams
7. Apply the Single Responsibility Principle to CSS classes
8. Reduce CSS selector specificity with flat class-based selectors
9. Implement a consistent CSS naming scheme across a project
10. Audit and refactor existing CSS towards better architecture

---

## Theory

### Why CSS Architecture Matters

CSS is deceptively simple. Small projects can get away with a single stylesheet and a few well-named classes. But as a project grows — more pages, more components, more developers — CSS without architecture becomes unmanageable:

- **The Cascade Wars**: One developer's `h2 { color: red }` conflicts with another's `.sidebar h2 { color: blue }`
- **Specificity Creep**: `!important` declarations accumulate as developers fight to override each other's styles
- **Dead Code**: No one knows which classes are still used, so nothing gets deleted
- **The Naming Problem**: `.blue-button`, `.btn-blue`, `.button--blue`, and `.btn.blue` all in the same codebase

CSS architecture solves these problems with **intentionality** — every decision about naming, organization, and specificity is made deliberately rather than reactively.

---

### Methodology 1: BEM (Block Element Modifier)

BEM is a naming convention developed at Yandex. It creates a clear, visual relationship between HTML and CSS.

```
.block                    → The standalone component
.block__element           → A part of the block (child)
.block--modifier          → A variation of the block or element
.block__element--modifier → A variation of an element
```

```css
/* Block: the outer component */
.card { }

/* Elements: parts of the card */
.card__image { }
.card__title { }
.card__body { }
.card__footer { }

/* Modifiers: variations */
.card--featured { }
.card--compact { }
.card__title--large { }

/* Usage in HTML */
/* <div class="card card--featured">
     <img class="card__image" src="..." />
     <h2 class="card__title card__title--large">Title</h2>
     <div class="card__body">Content</div>
     <div class="card__footer">Actions</div>
   </div> */
```

**BEM Rules:**
- No nesting (beyond BEM structure) — keeps specificity flat
- Each class is independent — no `.card .card__title`, just `.card__title`
- Modifiers are boolean or key-value: `.card--featured` or `.card--size-large`
- Blocks can be nested: a `.card__footer` can contain a `.button` block

**Pros:** Extremely clear naming, low specificity, easy to understand relationships
**Cons:** Verbose HTML, long class names, no inherent file organization guidance

---

### Methodology 2: OOCSS (Object-Oriented CSS)

OOCSS, developed by Nicole Sullivan, applies OOP principles to CSS.

**Two Core Principles:**

1. **Separate structure from skin:**
```css
/* Structure (layout) */
.media {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

/* Skin (visual) */
.theme-dark {
  background: #1e1e2e;
  color: #cdd6f4;
  border-radius: 8px;
}
```

2. **Separate container from content:**
```css
/* Bad: container-dependent */
.sidebar h2 { font-size: 1.1rem; }
.main h2 { font-size: 1.5rem; }

/* Good: content classes used anywhere */
.heading-secondary { font-size: 1.5rem; }
.heading-tertiary { font-size: 1.1rem; }
```

**Pros:** Highly reusable classes, encourages DRY CSS
**Cons:** Can lead to many single-purpose classes (similar to utility-first)

---

### Methodology 3: SMACSS (Scalable and Modular Architecture for CSS)

SMACSS, by Jonathan Snook, categorizes CSS rules into five types:

1. **Base** — Default element styles (reset, typography defaults)
2. **Layout** — Major page sections (`.header`, `.sidebar`, `.grid`)
3. **Module** — Reusable components (`.card`, `.button`, `.nav`)
4. **State** — Dynamic states (`.is-active`, `.is-hidden`, `.is-loading`)
5. **Theme** — Visual variations (`.theme-dark`, `.theme-high-contrast`)

```css
/* Base - element selectors only */
a { color: var(--color-link); }
h1, h2, h3 { line-height: 1.2; }

/* Layout - prefixed with l- */
.l-header { }
.l-sidebar { }
.l-main { }
.l-footer { }

/* Module - component-specific */
.card { }
.nav { }
.btn { }

/* State - prefixed with is- */
.is-active { }
.is-disabled { }
.is-hidden { }

/* Theme - prefixed with theme- */
.theme-dark { }
.theme-compact { }
```

**Pros:** Clear categorization, state classes are obvious, scalable
**Cons:** Prefix conventions can feel arbitrary, layout/module overlap

---

### Methodology 4: ITCSS (Inverted Triangle CSS)

ITCSS, by Harry Roberts, organizes CSS by specificity and reach — from broad/generic to specific/explicit.

```
                     Reach
                     │
         Settings ───┤ (variables, no output)
         Tools ──────┤ (mixins, functions)
         Generic ────┤ (reset, normalize)
         Elements ───┤ (bare HTML elements)
         Objects ────┤ (layout patterns)
         Components ─┤ (UI components)
         Utilities ──┤ (overrides)
                     │
                     └──→ Specificity (increasing)
```

```css
/* Settings — design tokens */
:root {
  --color-primary: #667eea;
  --spacing-md: 16px;
}

/* Generic — reset */
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; }

/* Elements — bare HTML */
h1 { font-size: 2rem; }
a { color: var(--color-primary); }

/* Objects — layout */
.o-container { max-width: 1200px; margin-inline: auto; }
.o-grid { display: grid; gap: var(--spacing-md); }

/* Components — UI */
.c-card { /* ... */ }
.c-button { /* ... */ }

/* Utilities — overrides */
.u-mt-lg { margin-top: 32px; }
.u-text-center { text-align: center; }
```

**Pros:** Clear layering, manages specificity, great for large codebases
**Cons:** Overhead for small projects, requires discipline

---

### CSS Layers (`@layer`)

CSS Layers (Cascade Layer) let you explicitly control the cascade order.

```css
/* Define layer order (first declaration = lowest priority) */
@layer settings, generic, elements, objects, components, utilities;

/* Add rules to a layer */
@layer components {
  .card {
    background: var(--color-surface);
    padding: var(--spacing-lg);
  }
}

/* Unlayered styles have the HIGHEST priority */
```

**Key advantage:** You can override component styles with utilities or unlayered styles without fighting specificity.

```css
/* This will always win, regardless of selector specificity */
.highlight {
  background: gold !important;  /* NO, don't do this */
}

/* Better: unlayered utility */
.u-highlight {
  background: gold;
}
/* With @layer, this beats any layered rule even with lower specificity */
```

---

### Specificity Management

Specificity is the algorithm browsers use to determine which CSS rule applies when multiple match an element.

```
Selector                          Specificity
---------------------------------------------
* { }                             0,0,0,0
h1 { }                            0,0,0,1
[type="text"] { }                 0,0,1,0
.class { }                        0,0,1,0
.class1.class2 { }                0,0,2,0
#id { }                           0,1,0,0
<div style="..."> { }             1,0,0,0
```

**The Golden Rule:** Keep all specificity at the `0,0,1,0` level (single class). No IDs in CSS. No `!important`.

```css
/* ❌ Avoid */
#sidebar .widget h2 a { }

/* ✅ Prefer */
.widget-link { }
```

---

### Design Tokens with Custom Properties

Design tokens are the atomic values of a design system — colors, spacing, typography, shadows, etc.

```css
:root {
  /* Colors */
  --color-primary: #667eea;
  --color-primary-hover: #5a6fd6;
  --color-surface: #ffffff;
  --color-text: #1a1a2e;
  --color-text-muted: #6c757d;

  /* Spacing scale */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;

  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.07);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);

  /* Borders */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
}
```

**Theming with custom properties:**

```css
/* Light theme (default) */
:root {
  --color-surface: #ffffff;
  --color-surface-alt: #f8f9fa;
  --color-text: #1a1a2e;
  --color-border: #dee2e6;
}

/* Dark theme — override only what changes */
[data-theme="dark"] {
  --color-surface: #1e1e2e;
  --color-surface-alt: #313244;
  --color-text: #cdd6f4;
  --color-border: #45475a;
}

/* Components use tokens, not hard-coded values */
.card {
  background: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}
```

---

## File Organization Patterns

### Small Project
```
styles/
└── main.css          ← One file, organized with comments
```

### Medium Project (ITCSS-inspired)
```
styles/
├── settings/
│   └── tokens.css
├── generic/
│   └── reset.css
├── elements/
│   ├── typography.css
│   └── links.css
├── components/
│   ├── button.css
│   ├── card.css
│   └── nav.css
├── utilities/
│   └── spacing.css
└── main.css           ← @import all layers
```

### Large Project (with CSS Layers)
```
styles/
├── settings/
│   └── _tokens.css
├── generic/
│   └── _reset.css
├── elements/
│   ├── _typography.css
│   └── _forms.css
├── objects/
│   ├── _container.css
│   └── _grid.css
├── components/
│   ├── _button.css
│   ├── _card.css
│   └── _modal.css
├── utilities/
│   └── _spacing.css
├── main.css           ← @layer + @import
└── vendor/            ← Third-party CSS
```

---

## Visual Explanation

```
ITCSS Pyramid — From Broad to Specific:

                       Reach
                         │
          ┌──────────────┴──────────────┐
          │         Settings            │  Design tokens, variables
          │         (no output)         │  Lowest specificity
          ├─────────────────────────────┤
          │          Tools              │  Mixins, functions
          │         (no output)         │
          ├─────────────────────────────┤
          │         Generic             │  Reset, normalize, box-sizing
          ├─────────────────────────────┤
          │        Elements             │  Bare HTML: h1, a, p, ul
          ├─────────────────────────────┤
          │        Objects              │  Layout: .o-grid, .o-container
          ├─────────────────────────────┤
          │       Components            │  UI: .c-card, .c-btn, .c-nav
          ├─────────────────────────────┤
          │       Utilities             │  Overrides: .u-mt-md
          └─────────────────────────────┘  Highest specificity
                         │
                         └──→ Specificity increases downward


BEM Naming — Block, Element, Modifier Structure:

  .block
    │
    ├── .block__element      (child part of block)
    │       │
    │       └── .block__element--modifier  (variant of element)
    │
    └── .block--modifier     (variant of block)

  Example — Card Component:

  ┌─────────────────────────┐
  │ .card (Block)           │
  │                         │
  │  ┌─────────────────────┐│
  │  │ .card__image (Elem) ││
  │  └─────────────────────┘│
  │  .card__title (Element)  │
  │  .card__body (Element)   │
  │  .card__footer (Element) │
  └─────────────────────────┘
         ↓
  .card--featured (Modifier)  → highlighted variant


Specificity Calculation — Which Rule Wins?

Selector                     Specificity         Example
───────────────────────────────────────────────────────────────
* { }                         (0,0,0,0)          universal
h1 { }                        (0,0,0,1)          element
[type="text"] { }             (0,0,1,0)          attribute
.class { }                    (0,0,1,0)          class
.class1.class2 { }            (0,0,2,0)          two classes
#id { }                       (0,1,0,0)          ID (avoid!)
style="color: red"            (1,0,0,0)          inline style
!important                    (∞)                break glass


CSS Layers — Explicit Cascade Control:

  @layer settings, generic, elements, objects, components, utilities;

  Priority (higher overrides lower):
                                     Any unlayered style
  HIGHEST ───────►  ┌─────────────┐  (always wins)
                     │ utilities    │
                     │ components   │
                     │ objects      │
                     │ elements     │
                     │ generic      │
  LOWEST  ────────►  │ settings     │
                     └─────────────┘
  Lower layer = applied first, easier to override


OOCSS Principles — Separate Structure from Skin:

  Structure (layout):              Skin (visual):

  ┌──────────────────┐           ┌──────────────────┐
  │ .media {         │           │ .theme-dark {    │
  │   display: flex; │           │   background: #1e │
  │   gap: 16px;     │           │   color: #cdd;   │
  │ }                │           │   border-radius   │
  └──────────────────┘           └──────────────────┘

  Combined in HTML:
  <div class="media theme-dark">
    <img class="media__image" src="..." />
    <div class="media__body">Content</div>
  </div>


SMACSS Categories:

  ┌──────────────┐
  │  BASE        │  a, h1, body — element defaults
  ├──────────────┤
  │  LAYOUT      │  .l-header, .l-sidebar — major sections
  ├──────────────┤
  │  MODULE      │  .card, .nav, .btn — reusable components
  ├──────────────┤
  │  STATE       │  .is-active, .is-hidden — dynamic states
  ├──────────────┤
  │  THEME       │  .theme-dark — visual variations
  └──────────────┘
```

### Common Mistakes

1. **Overly deep nesting with preprocessors** — Sass nesting like `.sidebar .widget .content h2 a` creates 0,0,4,2 specificity. Use flat BEM-style selectors instead.

2. **Mixing methodologies inconsistently** — `.card__title` in one file, `.Card-Title` in another, `.cardTitle` in a third. Pick one and enforce it with a linter.

3. **Not using custom properties for theming** — Hard-coding `#667eea` in 47 places makes theming impossible. Define once as `--color-primary` and reference everywhere.

4. **Too many utility classes** — `<div class="flex gap-md p-lg text-center mt-xl">` becomes unreadable HTML. Utility classes are useful (Tailwind proves it), but components should encapsulate complexity.

5. **Ignoring the cascade** — Fighting the cascade with `!important` is a sign of broken architecture. Use `@layer` instead.

6. **No CSS reset** — Browsers have different defaults. Without a reset, you get inconsistent spacing, sizing, and typography across browsers.

7. **Putting `@import` in CSS files** — CSS `@import` blocks parallel downloads and hurts performance. Use build tools or link multiple stylesheets.

8. **Not documenting naming conventions** — New developers shouldn't have to guess whether it's `.btn-primary` or `.button--primary`. Document your convention.

9. **Over-engineering for small projects** — Not every project needs ITCSS with 7 layers. Start simple and add architecture as the project grows.

10. **Forgetting about the cascade in `@layer`** — Remember: unlayered styles beat layered styles. Specify layer order explicitly.

---

## Best Practices

1. **Choose one methodology and stick with it** — BEM + ITCSS is a popular and proven combination.

2. **Use CSS custom properties for theming** — They enable runtime theming, reduce repetition, and make design changes predictable.

3. **Leverage `@layer` for cascade control** — Replace specificity hacks with explicit cascade layer declarations.

4. **Keep specificity low and flat** — Aim for `0,0,1,0` (one class) on every rule. Never use IDs in CSS.

5. **Document architecture decisions** — Add an `ARCHITECTURE.md` or comments at the top of `main.css` explaining the methodology, layer order, and naming convention.

6. **Use a linter (stylelint) for consistency** — Enforce BEM naming, layer order, custom property usage, and specificity limits automatically.

7. **Name design tokens semantically** — Use `--color-primary` not `--color-blue`. The value can change; the semantic meaning remains.

8. **Audit CSS regularly** — Dead code accumulates. Use tools to find unused CSS and remove it.

9. **Write CSS for deletion** — Structure CSS so that removing a component's file doesn't break anything else. No cross-component dependencies.

10. **Prefer class selectors over element selectors** — `.btn` not `button`. This avoids unintended styling of third-party markup.

---

## Accessibility

- **Don't hide focus styles** — Resetting `outline: none` without providing an alternative breaks keyboard navigation. Use `:focus-visible` instead.
- **Use relative units** — `rem` and `em` for typography allow user font-size preferences to work.
- **High contrast mode** — Test with Windows High Contrast Mode. Use `forced-colors` media query if needed.
- **Reduced motion** — Use `@media (prefers-reduced-motion: no-preference)` to wrap animations.

---

## Performance

- **CSS is render-blocking** — Split CSS into critical (above-the-fold) and non-critical (lazy-loaded) for faster initial paint.
- **Avoid large CSS files** — Code-split by route when using frameworks. A 500KB CSS file slows every page load.
- **Use `content-visibility`** — On large pages, `content-visibility: auto` on off-screen sections defers styling.
- **Minify CSS** — Always minify in production. Removes comments, whitespace, and reduces file size.
- **Use `will-change` sparingly** — Overuse causes excessive GPU memory usage.

---

## Browser Support

| Feature | Chrome | Edge | Firefox | Safari |
|---------|--------|------|---------|--------|
| CSS Custom Properties | 49+ | 15+ | 31+ | 9.1+ |
| CSS `@layer` | 99+ | 99+ | 97+ | 15.4+ |
| `:where()` (zero specificity) | 88+ | 88+ | 78+ | 14+ |
| `:is()` (specificity of most specific) | 88+ | 88+ | 78+ | 14+ |
| `has()` (parent selector) | 105+ | 105+ | 121+ | 15.4+ |

---

## Summary Notes

- **BEM** for naming (`.block__element--modifier`)
- **ITCSS** for file organization (Settings → Tools → Generic → Elements → Objects → Components → Utilities)
- **OOCSS** for thinking about reusable objects (separate structure from skin)
- **SMACSS** for categorizing rules (Base, Layout, Module, State, Theme)
- **`@layer`** for cascade control (no more specificity wars)
- **Custom properties** for design tokens and theming
- **Flat selectors** — always prefer `.class` over `#id` or deeply nested selectors

---

## Cheat Table

| Concept | Pattern | Benefit |
|---------|---------|---------|
| Block naming | `.card` | Component container |
| Element naming | `.card__title` | Clear parent-child relationship |
| Modifier naming | `.card--featured` | Variation without repetition |
| Layer order | `@layer base, components, utilities;` | Explicit cascade control |
| Design token | `--color-primary: #667eea` | Single source of truth |
| Zero-specificity | `:where(.card) { }` | Easy to override |
| State class | `.is-active` | Clear dynamic state |
| Utility class | `.u-text-center` | Single-purpose override |
