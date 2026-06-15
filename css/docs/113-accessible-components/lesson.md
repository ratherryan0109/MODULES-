# Module 113: Accessible Components

## Introduction
Accessible components combine semantic HTML, ARIA attributes, CSS styling, and JavaScript behavior to create UI elements that work for everyone — keyboard users, screen reader users, voice control users, and mouse users alike. This module focuses on building common UI components with accessibility built in from the start. Accessibility is not a separate layer to add after development; it must be considered during the design and implementation of every component.

## Learning Objectives
1. Build accessible navigation (skip links, menus, breadcrumbs)
2. Create accessible forms with proper labels and validation
3. Implement accessible modals and dialogs
4. Design accessible tabs and accordions
5. Build accessible data tables
6. Create accessible tooltips and popovers
7. Implement accessible carousels and sliders
8. Design accessible cards and media components
9. Test components with assistive technology
10. Understand ARIA roles, states, and properties for components

## Theory

### Beginner Level
Accessible components start with semantic HTML. Use `<nav>`, `<button>`, `<a>`, `<table>`, `<form>` elements before adding CSS. ARIA should only be used when native HTML semantics are insufficient. The first rule of ARIA is: don't use ARIA if you can use a native HTML element that provides the semantics you need. The second rule: don't change native semantics unless you have to (e.g., don't add `role="button"` to a `<div>` when you could use `<button>`).

Benefits of native semantic elements:
- Built-in keyboard handling (Enter/Space for buttons, arrow keys for select)
- Built-in screen reader announcements (role, name, state)
- Zero ARIA required
- Built-in focus management
- Accessibility tree mapping done by the browser

### Intermediate Level
Each component requires: proper role, accessible name, keyboard interaction pattern, focus management, and state announcements. Use `aria-label`, `aria-labelledby`, `aria-describedby` for naming. Use `aria-expanded`, `aria-pressed`, `aria-selected` for states. Use `role="alert"` for live region announcements. The accessible name is computed by the browser using this priority order: `aria-labelledby` > `aria-label` > native label (e.g., `<label>` for inputs) > content text.

### Advanced Level
Complex components (autocomplete, tree views, grid widgets) require full ARIA Authoring Practices implementation. Custom components must handle: focus trapping (modals), roving tabindex (tabs, toolbars), arrow key navigation (menus, grid), screen reader live region updates (dynamic content), and touch/pointer interactions alongside keyboard. The WAI-ARIA Authoring Practices Guide (APG) provides tested patterns for over 40 common component types.

### ARIA Principles Summary

| Principle | Description | Example |
|-----------|-------------|---------|
| Role | What is this element? | `role="tab"`, `role="dialog"` |
| Name | What is it called? | `aria-label`, `aria-labelledby` |
| State | What is its current state? | `aria-expanded`, `aria-selected` |
| Property | What are its characteristics? | `aria-haspopup`, `aria-controls` |
| Relationship | How does it relate to others? | `aria-owns`, `aria-activedescendant` |

## Syntax

```css
/* Accessible card component */
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
}
.card:focus-within {
  border-color: #0066cc;
  box-shadow: 0 0 0 3px #0066cc40;
}

/* Skip link */
.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  padding: 0.75rem 1.5rem;
  background: #0066cc;
  color: #fff;
  z-index: 1000;
  text-decoration: none;
}
.skip-link:focus {
  top: 1rem;
}

/* Visually hidden but accessible — screen reader only class */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Accessible modal styling */
.modal[open] {
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal::backdrop {
  background: rgba(0, 0, 0, 0.5);
}

/* Accessible animated focus styles */
.nav-link:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 4px;
}

/* Error state styling */
.field-error input {
  border-color: #cc0000;
}
.field-error .error-message {
  color: #cc0000;
  font-size: 0.875rem;
}
```

## Examples

### Accessible Button
```html
<button type="button" aria-pressed="false" class="toggle-btn">
  <span class="sr-only">Mute</span>
  <span aria-hidden="true">🔊</span>
</button>
```

### Accessible Form Field
```html
<div class="field">
  <label for="email">Email address</label>
  <input type="email" id="email" required
         aria-describedby="email-hint email-error">
  <span id="email-hint" class="hint">We'll never share your email.</span>
  <span id="email-error" class="error" role="alert"></span>
</div>
```

### Accessible Modal Pattern
```html
<div class="modal-overlay" id="modal-overlay" onclick="closeModal()">
  <div class="modal" role="dialog" aria-modal="true"
       aria-labelledby="modal-title" aria-describedby="modal-desc">
    <h2 id="modal-title">Confirm Deletion</h2>
    <p id="modal-desc">This action cannot be undone.</p>
    <button type="button" onclick="closeModal()">Cancel</button>
    <button type="button" onclick="confirmDelete()">Delete</button>
  </div>
</div>
```

```javascript
// Modal focus management
function openModal() {
  const modal = document.getElementById('modal-overlay');
  modal.style.display = 'flex';
  modal.querySelector('button').focus(); // Focus first focusable element

  // Focus trap
  modal.addEventListener('keydown', trapFocus);
}

function trapFocus(event) {
  if (event.key === 'Escape') {
    closeModal();
    return;
  }
  if (event.key !== 'Tab') return;

  const focusable = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}
```

### Accessible Tabs Pattern
```html
<div class="tabs">
  <div role="tablist" aria-label="Settings">
    <button role="tab" aria-selected="true" aria-controls="panel-1"
            id="tab-1" tabindex="0">General</button>
    <button role="tab" aria-selected="false" aria-controls="panel-2"
            id="tab-2" tabindex="-1">Privacy</button>
  </div>
  <div role="tabpanel" id="panel-1" aria-labelledby="tab-1">
    General settings content...
  </div>
  <div role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>
    Privacy settings content...
  </div>
</div>
```

### Accessible Navigation
```html
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

## Visual Explanation

| Pattern | HTML Element | ARIA Role | Keyboard |
|---------|-------------|-----------|----------|
| Button | `<button>` | — | Enter/Space |
| Link | `<a>` | — | Enter |
| Tabs | `<button>` + `role="tab"` | `tablist`, `tab`, `tabpanel` | Arrow keys |
| Modal | Container | `dialog`, `alertdialog` | Escape, Tab trap |
| Menu | `<button>` + links | `menu`, `menuitem` | Arrow, Escape |
| Accordion | `<button>` + `<div>` | — | Enter/Space, Arrow |
| Tooltip | Container | `tooltip` | Hover/Focus |
| Slider | Container | `slider` | Arrow keys, Home/End |

```
Accessible Component Anatomy:

  ┌──────────────────────────────────┐
  │   Element + Role (what is it)   │
  │   + Accessible Name (what's     │
  │     its name)                   │
  │   + State (expanded? selected?) │
  │   + Keyboard interaction        │
  │   + Focus management            │
  │   + Screen reader announcements │
  └──────────────────────────────────┘

Focus Flow for Tabs:

               Tab
               │
  ┌──── Tablist ────┐
  │                 │
  [Tab 1] [Tab 2] [Tab 3]
    ↑ focus   │       │
    │         ▼       │
    │    ArrowRight   │
    │     ──────────> │
    │                 ▼
    │          ArrowLeft
    └───────── <──────┘

  Tab enters tablist → Arrow keys navigate tabs
  Tab exits tablist → Focus goes to tabpanel content
```

## Common Mistakes
- **Using `<div>` for buttons instead of `<button>`** — `<div>` elements aren't focusable, have no keyboard activation, and aren't announced as buttons by screen readers
- **Missing labels on form inputs** — Every `<input>`, `<select>`, and `<textarea>` needs an associated `<label>` or `aria-label`
- **Not managing focus in modals (focus trap)** — Without focus trapping, Tab can move focus behind the modal overlay, confusing screen reader users
- **Using ARIA roles incorrectly** — e.g., `role="button"` on a `<div>` that isn't keyboard-accessible via Enter/Space
- **Missing `aria-expanded` on toggle buttons** — Screen reader users need to know whether a menu or section is expanded
- **Not testing with screen readers** — Automated tools catch ~30% of accessibility issues; manual testing with NVDA, VoiceOver, or JAWS is essential
- **Hiding focusable elements with `display: none` while they're still in tab order** — Use `hidden` attribute or `tabindex="-1"` for off-screen elements
- **Using `aria-hidden="true"` on focusable elements** — This creates an accessibility paradox: the element is focusable but invisible to screen readers
- **Missing headings in long content sections** — Headings provide navigation landmarks for screen reader users
- **Not providing alt text for informative images** — Every `<img>` needs `alt` text; decorative images should have `alt=""` (empty)

## Best Practices
- Start with semantic HTML; add ARIA only when native semantics are insufficient
- Every interactive element must have an accessible name (via content, label, or `aria-label`)
- Test with keyboard alone (no mouse) — all functionality must be keyboard accessible
- Test with a screen reader (NVDA on Windows, VoiceOver on macOS, JAWS for enterprise)
- Use `.sr-only` class for text that should be accessible but visually hidden
- Provide focus indicators for all interactive elements (use `:focus-visible`)
- Use `aria-live` regions for dynamic content updates (prefer `polite` over `assertive`)
- Follow WAI-ARIA Authoring Practices patterns for complex widgets
- Use `aria-current="page"` on current navigation item
- Use `<button>` for actions, `<a>` for navigation — the distinction matters for screen readers
- Ensure error messages are associated with form fields using `aria-describedby`
- Provide skip links at the top of every page

## Accessibility
- Use `aria-atomic="true"` for complete region updates (e.g., shopping cart total updates)
- Avoid `aria-live="assertive"` unless critical — it interrupts current screen reader speech, which is disruptive
- Use `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax` for progress indicators
- Use `role="status"` for status messages that don't require user action
- Use `role="alert"` for error messages that require immediate attention
- Use `aria-sort` on table headers that are sortable (none, ascending, descending)
- Use `aria-current="page"` on current navigation item for screen reader context
- Support `prefers-reduced-motion` for all animated components
- Ensure touch targets are minimum 44x44px (WCAG 2.5.5)
- Provide captions and transcripts for media content

## Performance
- Accessible semantics have zero performance cost — ARIA attributes are lightweight and parsed once during DOM construction
- ARIA attributes are part of the accessibility tree, which is built alongside the DOM tree with negligible overhead
- Live regions (`aria-live`) may impact screen reader performance if overused — avoid updating live regions more than necessary
- Focus management in JavaScript should be efficient — use `element.focus()` with `{ preventScroll: true }` when appropriate
- The `.sr-only` class uses `clip: rect()` which has no performance impact
- Semantic HTML (`<nav>`, `<main>`, `<aside>`) provides free accessibility without any CSS or JavaScript cost
- `aria-describedby` and `aria-labelledby` referencing complex content may have minimal serialization cost

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| ARIA roles | 1+ | 2+ | 2+ | 12+ |
| `aria-label` | 1+ | 2+ | 2+ | 12+ |
| `aria-labelledby` | 1+ | 2+ | 2+ | 12+ |
| `aria-describedby` | 1+ | 2+ | 2+ | 12+ |
| `aria-expanded` | 1+ | 2+ | 2+ | 12+ |
| `aria-live` | 1+ | 2+ | 2+ | 12+ |
| `role="dialog"` | 1+ | 2+ | 2+ | 12+ |
| `<dialog>` element | 37+ | 98+ | 15.4+ | 79+ |
| `:focus-visible` | 86+ | 85+ | 15.4+ | 86+ |

ARIA support is universal in modern browsers. Screen reader compatibility varies significantly — test with multiple screen readers (NVDA, VoiceOver, JAWS). The `<dialog>` element has broad support but has known issues with focus management in some browsers. For complex components, use the WAI-ARIA Authoring Practices guide as your reference implementation. The `aria-*` attributes are consistently supported across all modern browsers and screen readers.

## Summary Notes
- Semantic HTML first, ARIA second — native elements provide keyboard handling, naming, and role for free
- Every interactive element needs an accessible name (content, label, aria-label, aria-labelledby)
- Manage focus for modals (focus trap), menus (roving tabindex), and dynamic content
- Use `aria-live="polite"` for dynamic updates; use `aria-live="assertive"` sparingly
- Test with keyboard alone and with screen reader (NVDA/VoiceOver)
- Follow WAI-ARIA Authoring Practices for complex components (tabs, modals, menus, sliders)
- Provide skip links, visible focus indicators, and proper heading hierarchy
- Accessible components have zero performance overhead and benefit all users
- Use `aria-current`, `aria-expanded`, `aria-selected`, and `aria-pressed` for state communication
- Accessibility is not a feature — it's a fundamental requirement of professional web development
