# ARIA Labels: Accessible Rich Internet Applications

## What is ARIA?
ARIA (Accessible Rich Internet Applications) is a W3C specification that defines a set of attributes to make web content and applications more accessible to people with disabilities. ARIA supplements HTML semantics where native HTML elements are insufficient.

## The First Rule of ARIA
**"Don't use ARIA if you can use a native HTML element that has the semantics you need."**

Always prefer semantic HTML over ARIA. For example:
- Use `<nav>` instead of `<div role="navigation">`
- Use `<button>` instead of `<div role="button">`
- Use `<h1>` - `<h6>` instead of `role="heading" aria-level="1"`

ARIA is for when HTML alone cannot provide the accessible experience.

## Core ARIA Attributes

### Roles
Roles define what an element is or does:

| Role Category | Examples | Purpose |
|--------------|----------|---------|
| Landmark | banner, navigation, main, complementary, contentinfo, form, search | Identify page regions |
| Widget | button, slider, tab, checkbox, radio, combobox, dialog | Interactive widgets |
| Document Structure | article, heading, list, listitem, table, tooltip | Document organization |
| Live Region | alert, log, marquee, status, timer | Dynamic content updates |
| Abstract | command, input, range, section, widget | Base roles (not used directly) |

### States and Properties
ARIA states (dynamic, changeable) and properties (static) describe element characteristics:

**States (change value with user interaction):**
- `aria-expanded` - Whether a collapsible element is expanded
- `aria-pressed` - Button toggle state
- `aria-selected` - Tab/grid cell selection
- `aria-checked` - Checkbox/radio checked state
- `aria-hidden` - Element visibility to accessibility tree
- `aria-current` - Current item (page, step, location, date, time)
- `aria-disabled` - Element is disabled but still perceivable
- `aria-grabbed` - Drag-and-drop state
- `aria-busy` - Element is being updated

**Properties (static or set by developer):**
- `aria-label` - Provides an accessible name
- `aria-labelledby` - References another element for accessible name
- `aria-describedby` - References element for description
- `aria-controls` - Indicates controlled element
- `aria-owns` - Indicates ownership relationship
- `aria-flowto` - Alternative reading order
- `aria-activedescendant` - Focus management for composite widgets
- `aria-posinset` / `aria-setsize` - Position in a set
- `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, `aria-valuetext`
- `aria-required` - Required form field
- `aria-invalid` - Validation state
- `aria-roledescription` - Human-readable role description
- `aria-keyshortcuts` - Keyboard shortcuts

## Accessible Name Computation

The accessible name is how assistive technologies identify an element. The computation follows this priority (first wins):

1. `aria-labelledby` - Highest priority, references other element(s)
2. `aria-label` - Direct string label
3. Native labeling (e.g., `<label for="id">`, `<figcaption>`, `<caption>`)
4. Element's text content (inner text)
5. `title` attribute - Lowest priority, poor support

### Examples:
```html
<!-- aria-labelledby referencing visible text -->
<button aria-labelledby="close-btn-label">
    <span aria-hidden="true">×</span>
</button>
<span id="close-btn-label" hidden>Close dialog</span>

<!-- aria-label for icon-only button -->
<button aria-label="Search">
    <svg><!-- search icon --></svg>
</button>

<!-- aria-describedby for additional context -->
<input type="password" aria-describedby="password-hint">
<div id="password-hint">Must be at least 8 characters</div>
```

## ARIA Landmark Roles

Landmarks help screen reader users navigate page sections:

```html
<header role="banner">Site header</header>
<nav role="navigation" aria-label="Main">Primary nav</nav>
<main role="main">Main content</main>
<aside role="complementary">Related content</aside>
<footer role="contentinfo">Copyright</footer>
<form role="search">Search form</form>
```

**Best Practice:** Use semantic HTML elements when available. The `<main>` element automatically has `role="main"`.

## Live Regions

Live regions announce dynamic content changes to screen readers:

```html
<!-- Polite - announces when idle -->
<div aria-live="polite" aria-atomic="false">
    New messages will appear here
</div>

<!-- Assertive - interrupts current announcement -->
<div aria-live="assertive" role="alert">
    Error: Connection lost
</div>

<!-- Specialized live region roles -->
<div role="status">Loading complete</div>
<div role="log">Chat messages</div>
<div role="marquee">Stock ticker</div>
<div role="timer">00:45 remaining</div>
```

**Attributes:**
- `aria-live`: "off" (default), "polite", "assertive"
- `aria-atomic`: true/false - announce region as whole
- `aria-relevant`: "additions removals text all" - what changes trigger announcement
- `aria-busy`: true/false - wait for updates to complete

## ARIA Widget Patterns

### Tab Panel
```html
<div role="tablist" aria-label="Document tabs">
    <button role="tab" aria-selected="true" aria-controls="panel1" id="tab1">Overview</button>
    <button role="tab" aria-selected="false" aria-controls="panel2" id="tab2">Details</button>
</div>
<div role="tabpanel" id="panel1" aria-labelledby="tab1">Overview content</div>
<div role="tabpanel" id="panel2" aria-labelledby="tab2" hidden>Details content</div>
```

### Slider
```html
<div role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-label="Volume" aria-orientation="horizontal">
</div>
```

### Tree View
```html
<ul role="tree" aria-label="File browser">
    <li role="treeitem" aria-expanded="true">
        <span>Documents</span>
        <ul role="group">
            <li role="treeitem">Report.pdf</li>
            <li role="treeitem">Photo.jpg</li>
        </ul>
    </li>
</ul>
```

## ARIA and JavaScript

ARIA attributes are often managed dynamically with JavaScript:

```javascript
// Toggle accordion
function toggleAccordion(button) {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    panel.hidden = expanded;
}

// Update progress bar
function updateProgress(value) {
    const bar = document.getElementById('progress-bar');
    bar.setAttribute('aria-valuenow', value);
    bar.style.width = value + '%';
    bar.textContent = value + '% complete';
}

// Manage focus in a combobox
function updateActiveDescendant(input, optionId) {
    input.setAttribute('aria-activedescendant', optionId);
}
```

## Common ARIA Mistakes

1. **Redundant roles**: `<button role="button">` - unnecessary
2. **Missing focus management**: ARIA roles don't add keyboard support
3. **Using ARIA to fix bad HTML**: Fix semantics first
4. **aria-hidden misuse**: Hiding focusable elements creates keyboard traps
5. **Wrong role for the job**: Using generic role="text" instead of actual content
6. **Missing required children**: tabpanel without tablist parent
7. **Tabindex without ARIA**: Interactive ARIA widgets need keyboard handling
8. **Over-labeling**: Too many aria-label values create noise

## ARIA in Practice

### Custom Checkbox
```html
<div role="checkbox" tabindex="0" aria-checked="false" aria-labelledby="agree-label">
</div>
<span id="agree-label">I agree to the terms</span>
```

### Menu Button
```html
<button aria-haspopup="true" aria-expanded="false" aria-controls="menu1">
    File
</button>
<ul role="menu" id="menu1" aria-label="File menu" hidden>
    <li role="menuitem" tabindex="-1">New</li>
    <li role="menuitem" tabindex="-1">Open</li>
    <li role="menuitem" tabindex="-1">Save</li>
</ul>
```

### Alert Dialog
```html
<div role="alertdialog" aria-modal="true" aria-labelledby="dialog-title" aria-describedby="dialog-desc">
    <h2 id="dialog-title">Confirm Delete</h2>
    <p id="dialog-desc">Are you sure you want to delete this file?</p>
    <button>Cancel</button>
    <button>Delete</button>
</div>
```

## Testing ARIA Implementation

Use browser developer tools to inspect the accessibility tree:
- Chrome: DevTools → Elements → Accessibility
- Firefox: DevTools → Accessibility Inspector
- Use `document.querySelectorAll('[aria-*]')` to audit ARIA usage

Screen reader testing is essential: NVDA (Windows free), JAWS, VoiceOver (Mac), Narrator (Windows).

## Conclusion
ARIA is a powerful tool for creating accessible web applications, but it should be used judiciously. Always prefer semantic HTML, implement proper keyboard support alongside ARIA roles, and test with real assistive technologies.
