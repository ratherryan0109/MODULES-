# Project: CSS Design System Component Library

## Overview
Build a complete, documented CSS design system with design tokens, reusable components, layout primitives, multi-theme support, and a living style guide. This is a comprehensive project that demonstrates your understanding of CSS architecture, theming, accessibility, and documentation.

## Learning Objectives
- Define a complete design token system with CSS custom properties
- Build BEM-named components that reference only tokens (no hard-coded values)
- Implement light, dark, and high-contrast themes via token overrides
- Create layout primitives for reusable page structure
- Build a living style guide as documentation
- Ensure all components meet WCAG AA accessibility standards
- Use CSS `@layer` for cascade control
- Distribute the system as a reusable CSS package

## Requirements

### Design Tokens (Minimum 30)
Define all tokens in `:root` with semantic naming:
- **Colors** — primary, secondary, success, warning, error, info + hover/active/subtle variants
- **Surfaces** — surface, surface-alt, surface-hover
- **Text** — text, text-secondary, text-muted, text-inverse
- **Borders** — border, border-hover
- **Spacing** — 0, xs, sm, md, lg, xl, 2xl, 3xl (4px base)
- **Typography** — font stacks (sans, mono), font sizes (xs through 4xl), font weights, line heights
- **Shadows** — sm, md, lg, xl
- **Border Radius** — none, sm, md, lg, xl, full
- **Transitions** — fast, base, slow
- **Z-index** — dropdown, sticky, modal-backdrop, modal, toast

### Components (Minimum 6)
Using BEM naming with `.c-` prefix:
1. **Button (`.c-btn`)** — primary, outline, ghost, danger variants; sm/md/lg sizes; disabled state
2. **Card (`.c-card`)** — title, body, footer elements; featured modifier
3. **Badge (`.c-badge`)** — success, warning, error, info variants
4. **Input (`.c-input`)** — label, field, error-message elements; error/disabled states
5. **Toggle (`.c-toggle`)** — on/off states, focus-visible, label
6. **Alert (`.c-alert`)** — success, warning, error, info variants with dismiss button

### Layout Primitives (Minimum 3)
- **Container (`.o-container`)** — max-width centered wrapper
- **Grid (`.o-grid`)** — responsive auto-fill grid + column count modifiers
- **Stack (`.o-stack`)** — vertical flex with gap

### Themes (3)
1. **Light** (default in `:root`)
2. **Dark** (`[data-theme="dark"]`)
3. **High Contrast** (`[data-theme="high-contrast"]`)

### Living Style Guide
Build a single HTML page that documents every component:
- Component name and description
- HTML code example
- Live rendered preview
- All variants shown
- Accessibility notes
- Copy-code button for each example

### Technical Requirements
- All CSS organized with `@layer` (settings, generic, elements, objects, components, utilities)
- All components use BEM naming
- Zero hard-coded values — everything references tokens
- Every interactive element has `:focus-visible` styles
- Color contrast meets WCAG AA (4.5:1 minimum)
- Responsive from 320px+
- No JavaScript required for base component styling

## Starter Structure

```
design-system/
├── index.html              ← Living style guide
├── styles/
│   ├── main.css            ← @layer + @import
│   ├── _settings.css       ← Design tokens
│   ├── _generic.css        ← Reset
│   ├── _elements.css       ← HTML element defaults
│   ├── _objects.css        ← Layout primitives
│   ├── _components.css     ← All 6 components
│   └── _utilities.css      ← Utility classes
└── assets/
    └── (icons, images if needed)
```

## Stretch Goals
- Publish as an npm package with semantic versioning
- Add component interactivity with vanilla JS (no framework)
- Use `@container` queries for responsive components
- Add `prefers-color-scheme` auto-detection
- Create a dark/light theme toggle with localStorage persistence
- Add CSS animations for component entry states
- Integrate with Storybook for component documentation
- Add a CSS custom properties playground page for live token editing

## Evaluation Criteria
- [ ] 30+ design tokens with semantic naming
- [ ] 6+ BEM components with all required variants
- [ ] 3 layout primitives
- [ ] 3 themes (light, dark, high-contrast)
- [ ] All CSS in @layer structure
- [ ] Living style guide documents every component
- [ ] Zero hard-coded values in component files
- [ ] Focus-visible on all interactive elements
- [ ] WCAG AA contrast minimum
- [ ] Responsive layout (works at 320px)
- [ ] Components work with and without JavaScript
- [ ] Clean, commented, well-organized code
- [ ] Works in Chrome, Firefox, Safari

## Submission
Push your completed design system to a repository. Include a README with installation instructions, a link to the living style guide (GitHub Pages), and screenshots of all three themes.
