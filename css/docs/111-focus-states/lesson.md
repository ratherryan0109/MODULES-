# Module 111: Focus States

## Introduction
Focus states are visual indicators that show which element on a page is currently selected for keyboard interaction. They are essential for keyboard accessibility, allowing users who cannot use a mouse to navigate efficiently. CSS provides several pseudo-classes (`:focus`, `:focus-visible`, `:focus-within`) and properties to style focus indicators effectively. According to WebAIM's million-pages study, missing or poorly styled focus indicators are among the most common accessibility failures on the web.

## Learning Objectives
1. Understand the difference between `:focus`, `:focus-visible`, and `:focus-within`
2. Style accessible focus indicators that meet WCAG requirements
3. Implement custom focus rings using `outline` and `box-shadow`
4. Handle focus management for complex widgets
5. Test keyboard navigation patterns
6. Design focus indicators for different component types
7. Avoid common focus anti-patterns
8. Support high-contrast mode focus indicators
9. Implement skip-to-content links
10. Audit focus visibility across a project

## Theory

### Beginner Level
The `:focus` pseudo-class applies when any element receives focus, via mouse, keyboard, or programmatically. The `:focus-visible` pseudo-class specifically applies when the browser determines focus should be visible (keyboard navigation), preventing the focus ring from appearing on mouse clicks — a better user experience. This distinction is critical: mouse users never see a focus ring on click, while keyboard users always see a clearly visible indicator when tabbing through interactive elements.

Historically, developers removed `:focus { outline: none; }` globally and provided no replacement, making sites completely unusable for keyboard users. The `:focus-visible` pattern provides a solution that works well for both mouse and keyboard users.

### Intermediate Level
`outline` is the preferred property for focus indicators because it does not affect layout (unlike `border`) and respects forced colors mode. Use `outline-offset` for spacing between the ring and the element. `box-shadow` can create highly visible focus rings and works with `border-radius`. The `:focus-within` pseudo-class styles a container when any child element has focus — useful for highlighting entire cards, menus, or form groups.

Properties for focus indicators compared:

| Property | Layout Impact | border-radius | forced-colors | Best For |
|----------|--------------|---------------|---------------|----------|
| `outline` | None | No (rectangular) | Yes | Simple elements |
| `box-shadow` | None | Yes | No (override) | Rounded elements |
| `border` | Yes (shifts layout) | Yes | Yes | Special cases |

### Advanced Level
Focus management for custom widgets (tabs, modals, dropdowns) requires JavaScript `focus()` calls and `tabindex` values. The "roving tabindex" pattern manages focus within component groups (like toolbars or tab lists) where only one element is in the tab order at a time. For complex single-page apps, programmatic focus management following route changes is critical for screen reader users — without it, users are "lost" after navigation.

The WAI-ARIA Authoring Practices provide detailed keyboard interaction patterns for:
- **Accordion**: Enter/Space to toggle; Arrow keys not required
- **Tabs**: Arrow keys to switch tabs; Tab enters/leaves tablist
- **Modal**: Focus trapped inside modal; Tab cycles within modal; Escape closes
- **Menu**: Arrow keys navigate items; Enter activates; Escape closes
- **Tree View**: Arrow keys expand/collapse and navigate; Home/End for first/last

### Roving Tabindex Pattern
```javascript
// Simplified roving tabindex implementation
function handleArrowKeys(container, event) {
  const items = [...container.querySelectorAll('[role="tab"]')];
  const currentIndex = items.indexOf(document.activeElement);
  let nextIndex;

  if (event.key === 'ArrowRight') {
    nextIndex = (currentIndex + 1) % items.length;
  } else if (event.key === 'ArrowLeft') {
    nextIndex = (currentIndex - 1 + items.length) % items.length;
  }

  if (nextIndex !== undefined) {
    items.forEach(item => item.tabIndex = -1);
    items[nextIndex].tabIndex = 0;
    items[nextIndex].focus();
  }
}
```

## Syntax

```css
/* Universal focus reset — only for keyboard */
:focus-visible {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

/* Style parent when child is focused */
.card:focus-within {
  box-shadow: 0 0 0 3px #0066cc80;
}

/* Custom focus ring with box-shadow (respects border-radius) */
.button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px #0066cc;
}

/* Skip to content link — first focusable element on the page */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #0066cc;
  color: white;
  padding: 8px 16px;
  z-index: 100;
  transition: top 0.1s ease;
}
.skip-link:focus {
  top: 0;
}

/* High contrast mode focus */
@media (forced-colors: active) {
  :focus-visible {
    outline: 2px solid Highlight;
  }
}

/* Remove focus for mouse users only — the safe pattern */
:focus:not(:focus-visible) {
  outline: none;
}

/* Double ring for high emphasis */
.important-action:focus-visible {
  outline: 3px solid #0066cc;
  outline-offset: 2px;
  box-shadow: 0 0 0 6px #0066cc40;
}

/* Input focus with enhanced visibility */
input:focus-visible {
  outline: 2px solid #0066cc;
  outline-offset: 0;
  border-color: #0066cc;
}

/* Focus-visible within a group */
.toolbar:focus-within {
  outline: 2px solid #0066cc;
  border-radius: 4px;
}
```

## Examples

### Good: Keyboard-only focus ring
```css
button:focus-visible {
  outline: 3px solid #0066cc;
  outline-offset: 2px;
}
```

### Bad: Removing focus entirely
```css
/* ❌ Never do this — it breaks keyboard navigation */
button:focus {
  outline: none;
}
```

### Complete Focus System
```css
/* Modern focus system — best practice pattern */
:focus {
  outline: none;
}

:focus-visible {
  outline: 3px solid #0066cc;
  outline-offset: 2px;
  border-radius: 2px;
}

/* Respect forced colors */
@media (forced-colors: active) {
  :focus-visible {
    outline: 3px solid Highlight;
  }
}

/* Component-specific focus styles */
.nav-link:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 4px;
}

.card:focus-within {
  border-color: #0066cc;
}

.button-icon:focus-visible {
  box-shadow: 0 0 0 3px #0066cc, 0 0 0 5px #0066cc20;
  outline: none;
}
```

## Visual Explanation

```
Focus Behavior by Input Method:

Mouse click:        [Button]
                     click
                    [Button] ← no focus ring (focus-visible not applied)

Tab key:            [Button]
                     Tab → Tab
                    [Button] ← focus ring visible (focus-visible applied)

:focus-visible vs :focus:

  ┌──────────────────────┬─────────────────────┬──────────────┐
  │  Pseudo-class        │  Mouse Click        │  Tab Key     │
  ├──────────────────────┼─────────────────────┼──────────────┤
  │  :focus              │  ✓ (ring appears)   │  ✓           │
  │  :focus-visible      │  ✗ (no ring)        │  ✓           │
  │  :focus-within       │  ✓ (if child has)   │  ✓           │
  └──────────────────────┴─────────────────────┴──────────────┘

Skip Link Behavior:

  Before focus:    [Skip to Content]    ← visually hidden off-screen
                      │ (Tab press)
  On focus:        ██[Skip to Content]██ ← moves into viewport
                      │ (Enter press)
  After click:     ═══════ Content ═══════ ← focus moves to main content
```

## Common Mistakes
- **Removing `outline: none` without replacement (`:focus-visible`)** — This is the #1 keyboard accessibility error on the web. Always provide an alternative focus indicator.
- **Using `outline: none` globally (use `:focus:not(:focus-visible)`)** — A global `outline: none` on `:focus` hides focus from all users. Use the modern pattern instead.
- **Focus indicators with less than 2px width (WCAG 2.4.11 requires minimum 2px)** — Thinner rings are harder to see, especially for users with low vision.
- **Focus ring colors that fail contrast against the background** — The focus ring itself must have 3:1 contrast against the adjacent unfocused state (WCAG 2.4.12 AAA).
- **Not providing visible focus for custom components (select, dropdown)** — Custom-styled `<select>`, `<div>`-based dropdowns, and custom checkboxes often lose default focus indicators.
- **Forgetting focus management for modals and off-canvas menus** — When a modal opens, focus must move inside it and be trapped there. When it closes, focus must return to the triggering element.
- **Using `box-shadow` without `outline` fallback in forced colors mode** — `box-shadow` is not rendered in Windows High Contrast Mode. Always include `outline` as a fallback.
- **Inconsistent focus indicator design across components** — Different focus styles on links, buttons, and inputs confuse users. Maintain consistent focus indicator design.
- **Not testing with Tab and Shift+Tab through all interactive elements** — Some elements may be unreachable or may trap focus unexpectedly.
- **Animating or delaying focus indicators** — Focus changes should be instant, not animated. Delays confuse users trying to track their position.

## Best Practices
- Use `:focus-visible` for keyboard-only focus indicators — the modern, recommended approach
- Minimum 2px thick outline or ring (WCAG 2.4.11 AA)
- 3:1 contrast ratio between focus ring and adjacent background (WCAG 2.4.12 AAA)
- Use `outline-offset` to separate ring from element (2-4px is recommended)
- Test all interactive elements with Tab and Shift+Tab navigation
- Provide skip links for long navigation sections
- Use `:focus-within` for card-style interactive components (entire card highlights when any child is focused)
- Support forced colors mode with `outline` — `box-shadow` is invisible in Windows High Contrast Mode
- Make focus indicators consistent across your entire site or application
- Test with a keyboard alone — if you can't complete all tasks, focus management needs work
- Include visible focus on all interactive elements: links, buttons, inputs, selects, textareas, and custom widgets
- Use the `<button>` element for buttons — it gets keyboard focus and activation for free

## Accessibility
- **WCAG 2.4.7 Focus Visible (Level AA)**: Any keyboard operable user interface must have a visible focus indicator
- **WCAG 2.4.11 Focus Appearance (Level AA, WCAG 2.2)**: Focus indicator must be at least 2px thick and have 3:1 contrast ratio against the unfocused state
- **WCAG 2.4.12 Focus Appearance (Level AAA)**: Focus indicator must have 3:1 contrast ratio against the adjacent unfocused area
- **WCAG 1.4.1 Use of Color**: Focus indicators must not rely on color alone — use shape, size, or position changes
- Windows High Contrast Mode maps `outline` to the `Highlight` system color — use `outline` for guaranteed visibility
- Screen readers announce focus changes; the visual focus indicator must match the screen reader's focus position
- Skip links are the first focusable element and should be available at the very top of the HTML
- For single-page applications, manage focus programmatically after route changes or dynamic content updates
- Custom components (modals, menus, tab panels) require `tabindex` management and keyboard event handlers

## Performance
- Focus styles using `outline` and `box-shadow` have negligible performance impact — they are simple paint operations
- Avoid transitions on focus states (can cause confusion and unnecessary repaints)
- `will-change` is not needed for focus animations — focus styles should be instant
- JavaScript focus management should be efficient — avoid querying the entire DOM on every focus event
- Skip links have zero performance cost — they are just styled links
- The `:focus-within` pseudo-class may trigger style recalculations on focus changes but the impact is minimal
- Focus style changes don't trigger layout — they only trigger paint (the cheapest rendering step)

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| `:focus` | 1+ | 1+ | 1+ | 12+ |
| `:focus-visible` | 86+ | 85+ | 15.4+ | 86+ |
| `:focus-within` | 60+ | 52+ | 10.1+ | 60+ |
| `outline` | 1+ | 1+ | 1+ | 12+ |
| `outline-offset` | 1+ | 2+ | 1.2+ | 8+ |
| `forced-colors` | 89+ | 102+ | 14.1+ | 89+ |
| `tabindex` attribute | all | all | all | all |

The `:focus-visible` pseudo-class has broad modern browser support since 2021. For older browsers without `:focus-visible`, provide a fallback with `:focus`. The standard polyfill approach is to use a `:focus:not(:focus-visible)` pattern for removing mouse focus rings, or use the `focus-visible` polyfill JavaScript library. Always test focus behavior in multiple browsers as implementation details vary.

## Summary Notes
- Use `:focus-visible` for keyboard-only focus indicators — mouse users don't see the ring, keyboard users do
- Never remove focus indicators without providing a better alternative — this is a critical WCAG failure
- Minimum focus indicator: 2px solid ring with 2px offset and 3:1 contrast ratio
- Test all interactive elements with Tab and Shift+Tab keyboard navigation
- Use `:focus-within` for parent container highlighting (cards, menus, toolbars)
- Support forced colors mode with the `outline` property (not `box-shadow`)
- Manage focus programmatically for custom widgets and modals (roving tabindex, focus trapping)
- Provide a skip-to-content link as the first focusable element on every page
- Keep focus indicators consistent across your site and instant (no animation)
- The modern pattern: `:focus { outline: none; }` + `:focus-visible { outline: 3px solid blue; }`
