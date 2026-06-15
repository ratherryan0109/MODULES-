# Professional CSS: Clean CSS Architecture

## Table of Contents
1. [Introduction](#introduction)
2. [Learning Objectives](#learning-objectives)
3. [Theory](#theory)
4. [Syntax](#syntax)
5. [Common Mistakes](#common-mistakes)
6. [Best Practices](#best-practices)
7. [Accessibility Considerations](#accessibility-considerations)
8. [Performance Considerations](#performance-considerations)
9. [Browser Compatibility](#browser-compatibility)
10. [Summary Notes](#summary-notes)

## Introduction
CSS architecture is the intentional design of how CSS is structured, organized, and scaled across a project. A good architecture makes CSS predictable, maintainable, and performant — whether the project is a small site or a large-scale application. Without deliberate architecture, CSS degrades into a "cascade of shame" where new rules are appended without regard for existing structure, specificity battles erupt, and the stylesheet becomes a hall of mirrors where every change breaks something unpredictable. Architecture provides a roadmap that keeps the codebase healthy as it grows.

## Learning Objectives
1. Understand CSS architecture principles
2. Implement ITCSS (Inverted Triangle CSS)
3. Use CSS cascade layers effectively
4. Design component-based CSS
5. Separate concerns (layout, theme, components)
6. Create scalable CSS file structures
7. Balance specificity and reusability
8. Implement CSS in component frameworks
9. Apply the Single Responsibility Principle to CSS
10. Use OOCSS (Object-Oriented CSS) principles

## Theory

### Architecture Approaches
| Approach | Principle | Best For |
|----------|-----------|----------|
| ITCSS | Specificity layers from generic to explicit | Large projects with many developers |
| SMACSS | Categorize: base, layout, module, state, theme | Medium projects, teams |
| OOCSS | Separate structure from skin | Component libraries, design systems |
| BEM | Block-element-modifier naming | Component-based apps, any size |
| Utility-first | Single-purpose atomic classes | Rapid prototyping, design systems |

### ITCSS Layers in Detail
The Inverted Triangle CSS methodology organizes styles from generic (broad, low-specificity) to explicit (narrow, high-specificity):

```
1. Settings    — Variables, config (no CSS output)
2. Tools       — Mixins, functions (no CSS output)
3. Generic     — Reset, normalize, box-sizing
4. Elements    — Bare HTML elements (h1, a, ul)
5. Objects     — Layout patterns (container, grid)
6. Components  — UI components (card, button, nav)
7. Utilities   — Override helpers (text-center, m-0)
```

The triangle shape represents decreasing reach and increasing specificity. `Settings` affects everything but generates no CSS. `Utilities` affects specific elements and must always win. Between them, each layer builds on the previous one without fear of accidental override — a component style will never be accidentally overridden by a generic reset because the reset comes first.

### The Single Responsibility Principle in CSS
Each CSS rule should have one clear responsibility. An OOCSS approach separates structure from skin:

```css
/* Structure (Object) — reusable layout pattern */
.media {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

/* Skin (Component) — visual presentation */
.media--card {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
```

The `.media` object can be reused for comments, user profiles, search results, and notifications — it only handles layout. The `.media--card` modifier adds visual styling specific to the card context.

### Component Isolation Patterns
Components should be independent units that don't rely on external context:

```css
/* ❌ Bad: component depends on parent context */
.page-sidebar .nav { ... }
.main-content .nav { ... } /* Must duplicate or override */

/* ✅ Good: component is self-contained */
.nav { ... } /* Works anywhere */

/* ✅ Good: component uses custom properties for theming */
.nav {
  background: var(--nav-bg, #f0f0f0);
  color: var(--nav-color, #333);
}
```

### Understanding `@layer` for Architecture
CSS cascade layers let you enforce architectural rules directly in the browser:

```css
/* Declare layer order — this determines precedence */
@layer reset, base, objects, components, utilities;

/* Layer order for unlayered styles goes here (before first @layer rule) */
/* Unlayered styles always win over layered styles */

@layer reset {
  * { margin: 0; padding: 0; box-sizing: border-box; }
}

@layer base {
  body { font-family: system-ui; line-height: 1.6; color: #333; }
  h1 { font-size: 2rem; }
  a { color: #0055CC; }
}

@layer objects {
  .container { max-width: 75rem; margin-inline: auto; }
  .grid { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); }
}

@layer components {
  .card { background: white; border-radius: 8px; padding: 1rem; }
  .button { display: inline-flex; align-items: center; padding: 0.5rem 1rem; border-radius: 4px; }
}

@layer utilities {
  .mt-0 { margin-top: 0; }
  .text-center { text-align: center; }
  .sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0, 0, 0, 0); }
}
```

In this system, a utility like `.mt-0` will always override a component's margin, and a component will always override an element style. This is enforced by the browser, not by convention — no amount of specificity in a lower layer can override a higher layer.

### ITCSS with @layer
The ITCSS layers map naturally to CSS `@layer`:

```css
@layer settings, tools, generic, elements, objects, components, utilities;

@layer settings {
  :root { --primary: #0055CC; --spacing: 1rem; --font-family: system-ui; }
}
@layer generic {
  *, *::before, *::after { box-sizing: border-box; margin: 0; }
}
@layer elements {
  body { font-family: var(--font-family); line-height: 1.6; color: #333; }
  h1 { font-size: 2.5rem; }
  h2 { font-size: 2rem; }
  p { margin-bottom: var(--spacing); }
  a { color: var(--primary); text-decoration: underline; }
}
@layer objects {
  .container { max-width: 75rem; margin-inline: auto; padding: var(--spacing); }
  .grid { display: grid; gap: var(--spacing); }
}
@layer components {
  .card { background: #fff; border-radius: 8px; padding: var(--spacing); box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
  .card__title { font-size: 1.25rem; font-weight: 700; }
  .btn { display: inline-block; padding: 0.5rem 1rem; border-radius: 4px; background: var(--primary); color: white; }
}
@layer utilities {
  .text-center { text-align: center; }
  .mt-0 { margin-top: 0; }
}
```

## Syntax

```css
/* Cascade layers for clean architecture */
@layer settings, tools, generic, elements, objects, components, utilities;

@layer settings {
  :root { --primary: #0055CC; --spacing: 1rem; }
}
@layer generic {
  *, *::before, *::after { box-sizing: border-box; margin: 0; }
}
@layer elements {
  body { font-family: system-ui; line-height: 1.6; }
}
@layer objects {
  .container { max-width: 75rem; margin-inline: auto; padding: var(--spacing); }
}
@layer components {
  .card { background: #fff; border-radius: 8px; padding: var(--spacing); }
}
@layer utilities {
  .text-center { text-align: center; }
}

/* OOCSS — separate structure from skin */
/* Structure object */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 2px solid transparent;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  transition: all 0.2s;
}

/* Skin variants */
.btn--primary { background: var(--primary); color: white; }
.btn--primary:hover { background: #004099; }
.btn--secondary { background: transparent; border-color: var(--primary); color: var(--primary); }
.btn--ghost { background: transparent; color: var(--text-muted); }
.btn--ghost:hover { background: #f0f0f0; }

/* Component with theme hooks */
.card {
  background: var(--card-bg, #fff);
  border: 1px solid var(--card-border, #e0e0e0);
  border-radius: var(--card-radius, 8px);
  padding: var(--card-padding, 1rem);
}

/* Container queries for context-aware components */
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
  }
}

/* State-based styles with data attributes */
[data-state="loading"] .card-content { opacity: 0.5; }
[data-state="error"] .card { border-color: red; }
[data-state="empty"] .card-empty { display: block; }
```

## Common Mistakes
1. **No architecture strategy at all**: Adding CSS files randomly without any organizing principle. Each new developer adds files wherever they want.
2. **Mixing architecture patterns**: Using BEM in some files, utility classes in others, and SMACSS in component styles. The lack of a unified approach creates confusion.
3. **Ignoring the cascade**: Fighting the cascade instead of using it. Trying to make everything zero-specificity or everything high-specificity, rather than understanding how specificity naturally works.
4. **Over-engineering for small projects**: Adopting ITCSS with seven layers for a 3-page marketing site. Architecture should match project complexity.
5. **Not separating structure from skin**: A `.media` object that hard-codes colors and fonts, making it impossible to reuse with different visual themes.
6. **Components with external dependencies**: `.card` styling that depends on being inside `.main-content` or `.sidebar`, making it non-portable.
7. **No design token system**: Hard-coded values everywhere instead of custom properties, making global theme changes impossible.
8. **Circular dependencies in imports**: `_button.scss` imports `_variables.scss`, and `_variables.scss` imports `_button.scss` for some reason — or more subtly, the import order creates unexpected cascade issues.
9. **Not using `@layer` when available**: Continuing to fight specificity with naming conventions when `@layer` provides a native, browser-enforced solution.
10. **File structure that doesn't match architecture**: Having an ITCSS architecture but a flat file structure where all styles are in one folder.

## Best Practices
1. **Use cascade layers to control specificity**: Declare `@layer` order at the top of your entry stylesheet. This is the single most impactful architectural decision you can make.
2. **Separate structure from skin (OOCSS)**: Layout and positioning should be decoupled from colors, fonts, and visual effects. This maximizes reusability.
3. **Design components as independent units**: A component should include all the styles it needs internally, without depending on external context. Use custom properties as theming hooks.
4. **Use consistent naming methodology**: Choose one approach (BEM, SMACSS, or utility-first) and use it consistently across the entire project.
5. **Keep specificity as low as possible**: Target everything at the class level. Avoid IDs, `!important`, and deep nesting.
6. **Document architecture decisions**: Create an ARCHITECTURE.md file that explains the chosen architecture, why it was chosen, and how to work within it.
7. **Use CSS custom properties for theme hooks**: Components should expose custom properties for theming rather than requiring direct style overrides.
8. **Match architecture to project size**: A small project might only need Base → Components → Utilities. A large project benefits from ITCSS or a custom layered approach.
9. **Use container queries for context-aware components**: `@container` queries let components respond to their own container's size rather than the viewport, making them truly portable.
10. **Automate architecture enforcement with Stylelint**: Create custom Stylelint rules that enforce your chosen architecture patterns.

## Accessibility Considerations
- **Semantic structure layer**: The element layer (ITCSS layer 4) should establish proper heading hierarchy, landmark roles, and semantic HTML styling — not just visual reset.
- **Focus management**: The component layer should include visible focus indicators for all interactive components. Don't rely on browser defaults.
- **Color contrast in theme hooks**: When exposing `--card-bg` and `--card-text` as custom properties, ensure the design system always produces sufficient contrast ratios.
- **Reduced motion in animation architecture**: Structure your animation layer so that `prefers-reduced-motion` can disable all motion at the architectural level, not component by component.
- **Print styles as a layer**: Include `@media print` in your architecture plan — printed output should be a first-class concern, not an afterthought.

## Performance Considerations
- **Layered delivery with ITCSS**: You can potentially lazy-load deeper layers (components, utilities) while inlining the generic and element layers as critical CSS.
- **`@layer` doesn't affect performance**: CSS cascade layers are resolved at parse time and have zero runtime performance cost. They're purely an organizational tool.
- **Component isolation prevents unnecessary recalculations**: When a component is properly isolated with `contain: layout style paint`, changes inside it don't trigger style/layout recalculation outside it.
- **Keep object layer lightweight**: `.container`, `.grid`, `.media` objects should be minimal — they're used everywhere, so every byte in the object layer is multiplied by every page.
- **Monitor unused CSS by layer**: When auditing unused CSS, check which architectural layers have the highest percentage of unused rules. This tells you where your architecture is over-engineered.

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|-----|
| `@layer` | 99+ | 97+ | 15.4+ | 99+ | — |
| CSS Custom Properties | 49+ | 31+ | 9.1+ | 79+ | — |
| CSS Grid | 57+ | 52+ | 10.1+ | 79+ | — |
| Container Queries | 105+ | 110+ | 16+ | 105+ | — |
| `contain` | 52+ | 69+ | 15.4+ | 79+ | — |
| `:where()` / `:is()` | 88+ | 78+ | 14+ | 88+ | — |
| Flexbox | 29+ | 28+ | 9+ | 79+ | 11 (partial) |

`@layer` is supported in all modern browsers. For legacy browsers (IE11), you can achieve similar architecture through file concatenation order — the file that loads last wins. Tools like PostCSS have plugins that can polyfill `@layer` behavior by reordering stylesheets. Container queries are newer and have limited Safari support — use them for progressive enhancement, not critical layout.

## Summary Notes
- **Good architecture anticipates growth** — design for the project you expect to have, not the project you have today
- **CSS layers provide explicit cascade control** — `@layer` is browser-enforced architecture
- **Component isolation prevents unintended interactions** — a component should work in any context
- **ITCSS layers**: Settings → Tools → Generic → Elements → Objects → Components → Utilities (generic to explicit)
- **OOCSS separates structure from skin** — layout objects from visual presentation, maximizing reusability
- **Choose architecture that fits project complexity** — a small site doesn't need ITCSS with seven layers
- **Document architecture for team onboarding** — every developer should understand why the architecture exists and how to work within it
- **Container queries are the future of component architecture** — they make components truly context-independent
- **Design tokens as custom properties** eliminate hard-coded values and enable systematic theming
- **`:where()` provides zero-specificity selectors** for base and object layers that are always overridable
- **Architecture should be enforced, not just documented** — use Stylelint, build tools, and code review
- **Layered critical CSS delivery** — inline outer layers (generic, elements), lazy-load inner layers (components)
- **A good architecture makes 90% of CSS decisions obvious** — developers spend less time debating and more time building

---

## Visual Explanation

```
ITCSS — Inverted Triangle CSS Architecture
============================================

                  ▲
                 / \         REACH
                /   \     (scope of
               /     \    effect)
              /       \
             /         \      narrow
            /           \
           /   7. Utilities \
          /─────────────────\
         /   6. Components   \
        /─────────────────────\
       /     5. Objects        \
      /─────────────────────────\
      /      4. Elements          \
    /─────────────────────────────\
   /      3. Generic (reset)       \
  /─────────────────────────────────\
 /   2. Tools (mixins, functions)   \
/─────────────────────────────────────\
\     1. Settings (variables, config) /
 \───────────────────────────────────/
  \                               /
   \                             /
    \          ▲                /
     \  SPECIFICITY            /
      \  INCREASES            /
       \                    /
        \                 /
         \              /
          \           /
           \        /
            \     /
             \  /


  Layer       | Output    | Example                  | Specificity
  ────────────┼───────────┼──────────────────────────┼─────────────
  1 Settings  │ None      │ $primary, $breakpoints   │ N/A
  2 Tools     │ None      │ @mixin respond-to()      │ N/A
  3 Generic   │ CSS       │ * { box-sizing: border } │ 0,0,0,0
  4 Elements  │ CSS       │ h1, a, body              │ 0,0,0,1
  5 Objects   │ CSS       │ .container, .grid        │ 0,0,1,0
  6 Components│ CSS       │ .card, .btn              │ 0,0,1,0
  7 Utilities │ CSS       │ .text-center, .m-0       │ 0,0,1,0

OOCSS — Separate Structure from Skin
══════════════════════════════════════

┌──────────────────────┐     ┌──────────────────────┐
│  Structure (Object)  │     │  Skin (Component)    │
├──────────────────────┤     ├──────────────────────┤
│ .btn {               │     │ .btn--primary {      │
│   display: inline-flex│    │   background: var(--p)│
│   padding: 0.5rem    │     │   color: white;      │
│   border-radius: 4px │     │ }                    │
│   cursor: pointer    │     │                      │
│ }                    │     │ .btn--secondary {    │
│                      │     │   background: gray;  │
│ Reusable ANYWHERE    │     │ }                    │
│ regardless of skin   │     │                      │
└──────────────────────┘     │ .btn--ghost {        │
                              │   background: none   │
                              │ }                    │
                              └──────────────────────┘

@layer Architecture — Cascade Control
═══════════════════════════════════════

@layer reset, base, objects, components, utilities;

┌─────────────────────────────────────────────────────────────────────┐
│  @layer utilities { .text-center { text-align: center } }          │
│  @layer components{ .card { background: white } }                  │
│  @layer objects   { .container { max-width: 75rem } }              │
│  @layer base      { h1 { font-size: 2rem } }                       │
│  @layer reset     { * { box-sizing: border-box } }                 │
└─────────────────────────────────────────────────────────────────────┘
                    ↑ always wins, regardless of specificity

Component Isolation
════════════════════

✅ Self-contained:                  ❌ Parent-dependent:
.card {                             .page-sidebar .card {
  background: var(--card-bg);         background: white;
  padding: var(--card-pad);         }
}                                   .main-content .card {
                                      background: gray;
.card works anywhere                } ← must duplicate
with any theme via custom props       or they differ
```
