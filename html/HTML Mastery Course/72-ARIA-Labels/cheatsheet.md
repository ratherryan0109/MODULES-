# ARIA Labels - Cheatsheet

## First Rule of ARIA
**Don't use ARIA if native HTML works.** Prefer `<nav>` over `role="navigation"`, `<button>` over `role="button"`, `<h1>` over `role="heading"`.

## Accessible Name Priority (highest to lowest)
1. `aria-labelledby` (reference element IDs)
2. `aria-label` (direct string)
3. Native labeling (`<label>`, `<figcaption>`, `<caption>`)
4. Element's text content
5. `title` attribute (worst support)

## ARIA Roles Quick Reference

### Landmarks
| Role | HTML Equivalent | Use |
|------|----------------|-----|
| banner | `<header>` (top-level) | Site header |
| navigation | `<nav>` | Navigation blocks |
| main | `<main>` | Primary content |
| complementary | `<aside>` | Supporting content |
| contentinfo | `<footer>` (top-level) | Copyright, footer |
| form | `<form>` (with name) | Form landmark |
| search | `<form role="search">` | Search functionality |

### Widget Roles
| Role | Required States | Used For |
|------|----------------|----------|
| button | - | Clickable action |
| checkbox | aria-checked | Toggle option |
| combobox | aria-expanded, aria-haspopup | Autocomplete/search |
| dialog | aria-modal, aria-labelledby | Modal windows |
| link | - | Navigation (when not using <a>) |
| progressbar | aria-valuenow, aria-valuemin, aria-valuemax | Progress indicator |
| slider | aria-valuenow, aria-valuemin, aria-valuemax | Range input |
| switch | aria-checked | Toggle switch |
| tab | aria-selected, aria-controls | Tab headers |
| tabpanel | aria-labelledby | Tab content |

## Key States & Properties

| Attribute | Values | Purpose |
|-----------|--------|---------|
| aria-expanded | true/false/undefined | Collapsible state |
| aria-selected | true/false | Selection state |
| aria-checked | true/false/mixed | Checked state |
| aria-pressed | true/false/mixed | Toggle button |
| aria-current | page/step/location/date/time/true/false | Current item |
| aria-hidden | true/false | Accessibility tree visibility |
| aria-disabled | true/false | Element disabled state |
| aria-invalid | true/false/grammar/spelling | Validation state |
| aria-required | true/false | Required field |
| aria-readonly | true/false | Read-only state |
| aria-haspopup | true/menu/listbox/tree/grid/dialog | Has popup |
| aria-modal | true/false | Modal blocking |
| aria-live | off/polite/assertive | Live region politeness |
| aria-atomic | true/false | Live region atomicity |
| aria-relevant | additions/removals/text/all | Live region relevancy |
| aria-busy | true/false | Loading state |
| aria-grabbed | true/false | Drag source |
| aria-dropeffect | none/move/copy/execute/link/popup | Drop target |

## ARIA Relationships
- `aria-controls` - Element(s) controlled
- `aria-describedby` - Element(s) providing description
- `aria-labelledby` - Element(s) providing label
- `aria-owns` - Element(s) owned
- `aria-flowto` - Alternative reading order
- `aria-activedescendant` - Currently active descendant
- `aria-details` - Extended description

## Live Regions
```html
<div aria-live="polite" aria-atomic="false">Dynamic content</div>
<div role="alert">Immediate notification</div>
<div role="status">Status update</div>
<div role="log">Chat messages</div>
<div role="timer">Countdown</div>
```

## Focus Management
- Roving tabindex: one item `tabindex="0"`, others `-1`
- Never remove focus indicators (`outline: none`)
- Use `:focus-visible` for keyboard-only focus
- ARIA doesn't add keyboard support - implement it in JS

## Common Mistakes
- Using ARIA when HTML works
- aria-hidden="true" on focusable elements
- Missing aria-labelledby/aria-label on dialogs
- role="presentation" on interactive elements
- Not managing focus in dynamic widgets
- Wrong aria-live politeness level

## Testing
- Chrome DevTools → Elements → Accessibility
- Firefox → Accessibility Inspector
- axe DevTools for automated checks
- NVDA/VoiceOver for screen reader testing
