# Project: Design System Component Library with BEM + ITCSS

## Overview
Build a small but complete CSS component library using BEM naming, ITCSS file organization, and CSS Layers. This project will demonstrate your understanding of CSS architecture principles by creating a reusable, themeable, and well-organized set of components.

## Learning Objectives
- Apply BEM naming consistently across multiple components
- Organize CSS using the ITCSS layer structure
- Implement CSS `@layer` for cascade control
- Create design tokens with CSS custom properties
- Build a dark/light theme system
- Write CSS that is maintainable, predictable, and scalable
- Use proper prefix conventions (`.o-`, `.c-`, `.u-`, `.is-`)

## Requirements

### Component Library Components (Minimum 5)
1. **Button (`.c-btn`)** — primary, outline, ghost, and size variants
2. **Card (`.c-card`)** — with title, body, footer sections and featured modifier
3. **Modal (`.c-modal`)** — overlay with backdrop, content box, close button, open/close state
4. **Badge (`.c-badge`)** — small label with color variants (success, warning, error, info)
5. **Form Input (`.c-input`)** — text input with label, error state, disabled state

### Layout Objects (Minimum 2)
1. **Container (`.o-container`)** — centered max-width wrapper
2. **Grid (`.o-grid`)** — responsive grid with auto-fill and column count modifier

### Technical Requirements
- Use BEM naming for ALL components
- Use ITCSS layer order: `@layer settings, generic, elements, objects, components, utilities;`
- Define at least 20 design tokens in the settings layer
- Each token uses semantic names (e.g., `--color-primary`, not `--color-blue`)
- Implement a complete dark theme using `[data-theme="dark"]`
- Include utility classes for spacing: `.u-mt-{sm|md|lg}`, `.u-mb-{sm|md|lg}`, `.u-text-center`
- Use `@supports` for progressive enhancement in browsers without `@layer` support
- All components must be responsive

### File Structure
```
project/
├── index.html
└── styles/
    ├── main.css              ← @import all layers + page-specific styles
    ├── _settings.css
    ├── _generic.css
    ├── _elements.css
    ├── _objects.css
    ├── _components.css
    └── _utilities.css
```

## Starter Structure

```css
/* styles/main.css */
@layer settings, generic, elements, objects, components, utilities;

@import url('_settings.css');
@import url('_generic.css');
@import url('_elements.css');
@import url('_objects.css');
@import url('_components.css');
@import url('_utilities.css');

/* Page-specific styles outside layers (highest priority) */
body {
  background: var(--color-bg);
  font-family: var(--font-sans);
}
```

## Stretch Goals
- Add a `@container` query to make the Card component responsive to its container width
- Create a theme switcher that persists user preference in localStorage
- Use `:has()` to style a card differently when it contains a button
- Add `prefers-reduced-motion` support
- Add `prefers-color-scheme` auto-detection for dark mode
- Create a documentation page showing all components with their modifiers

## Evaluation Criteria
- [ ] All 5 components implemented with proper BEM naming
- [ ] All components have at least 2 modifier variants
- [ ] ITCSS file structure with 7 layers
- [ ] `@layer` order declared and used
- [ ] 20+ semantic design tokens
- [ ] Dark theme via `[data-theme]`
- [ ] 2+ layout objects (o-container, o-grid)
- [ ] Utility classes for spacing/alignment
- [ ] Modal works with open/close interaction
- [ ] Responsive layout (works at 320px width)
- [ ] Clean, documented code
- [ ] Works in Chrome, Firefox, Safari

## Submission
Push your completed component library to a repository. Include a documentation page showing each component with its variant examples, and screenshots of both light and dark themes.
