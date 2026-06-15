# CSS Forms

## Table of Contents
1. [Introduction](#introduction)
2. [Learning Objectives](#learning-objectives)
3. [Theory](#theory)
4. [Syntax and Code Examples](#syntax-and-code-examples)
5. [Visual Explanation](#visual-explanation)
6. [Common Mistakes](#common-mistakes)
7. [Best Practices](#best-practices)
8. [Accessibility Considerations](#accessibility-considerations)
9. [Performance Considerations](#performance-considerations)
10. [Browser Compatibility](#browser-compatibility)
11. [Summary Notes](#summary-notes)

## Introduction
HTML forms are the primary way users interact with web applications — submitting data, logging in, registering, searching, and providing feedback. Yet forms are notoriously difficult to style consistently across browsers because each browser applies its own default styles to form elements. CSS form styling bridges this gap, allowing developers to create cohesive, branded, and user-friendly form experiences. Mastering form styling means understanding how to reset browser defaults, apply consistent typography and spacing, handle validation states visually, and ensure every input type — from text fields to file pickers — feels part of a unified design system.

## Learning Objectives
1. Style text inputs, textareas, select menus, and buttons with consistent typography and spacing
2. Create accessible form layouts with properly associated labels and validation states
3. Style custom checkboxes, radio buttons, toggle switches, and file inputs using `appearance: none`
4. Implement accessible focus indicators and error messaging using CSS pseudo-classes
5. Use CSS Grid and Flexbox to build responsive, well-aligned form structures
6. Understand the `box-sizing` model and its critical role in form input sizing
7. Apply `:valid`, `:invalid`, `:required`, `:optional`, `:focus-within`, and `:placeholder-shown` pseudo-classes
8. Build custom select menus and dropdowns without JavaScript
9. Handle cross-browser inconsistencies with vendor prefixes and fallbacks
10. Design mobile-friendly form controls with adequate touch targets

## Theory

### The Challenge of Form Styling
Form elements are replaced elements — the browser renders them using OS-level widgets rather than standard HTML/CSS. This means `<input>`, `<textarea>`, `<select>`, `<button>`, and `<progress>` each have their own default appearance that varies across operating systems and browsers. The key to consistent form styling is understanding which properties apply to each element and how to override default appearances.

### Box-Sizing Is Critical
The most common form styling gotcha is the box model. By default, `input` and `textarea` elements use `content-box` sizing, meaning `padding` and `border` are added outside the specified `width`. This causes inputs to overflow their containers. The fix is universal:

```css
input, textarea, select, button {
  box-sizing: border-box;
}
```

With `border-box`, the padding and border are included in the total width, making sizing predictable.

### The `appearance` Property
The `appearance` property removes native OS styling from form controls, giving you a blank canvas:

```css
input[type="checkbox"],
input[type="radio"],
select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
```

After removing the native appearance, you must supply your own visual styles — otherwise the element becomes invisible. This technique is essential for custom checkboxes, radio buttons, and select menus.

### Pseudo-Classes for Form Styling
CSS provides powerful pseudo-classes for form interaction states:

| Pseudo-class | Target | Use Case |
|---|---|---|
| `:focus` | Any focused element | Focus indicator styling |
| `:focus-visible` | Keyboard-focused only | Keyboard-only focus ring |
| `:focus-within` | Container with focused child | Highlight form sections |
| `:valid` | Inputs passing validation | Green borders on valid input |
| `:invalid` | Inputs failing validation | Red borders on invalid input |
| `:required` | Required fields | Asterisk or label styling |
| `:optional` | Non-required fields | Dimmed styling |
| `:disabled` | Disabled inputs | Grayed-out appearance |
| `:read-only` | Read-only inputs | Different background |
| `:placeholder-shown` | Input showing placeholder | Hide labels when typing |
| `:in-range` / `:out-of-range` | Number inputs in/out of range | Range validation feedback |
| `:user-invalid` | User-interacted invalid fields | Only show errors after interaction |

### Input Types and Their Styling Behavior
Different input types accept different CSS properties:

- **Text, Email, Password, Search, URL, Tel**: Highly stylable — padding, borders, fonts, colors all work
- **Number, Date, Color**: Partially stylable — some internal spinner/calendar parts are OS-rendered
- **Checkbox, Radio**: Need `appearance: none` for custom styling, then use `::before`/`::after` for custom indicators
- **File**: Very limited styling — the button portion is OS-rendered; wrapping in a label with styled trigger is common
- **Range**: The track is stylable, but the thumb uses `-webkit-slider-thumb` / `-moz-range-thumb` pseudo-elements
- **Select**: The dropdown arrow is OS-rendered; use `appearance: none` and a background-image arrow

## Syntax and Code Examples

### Basic Input Styling
```css
/* Universal reset for form controls */
input, textarea, select, button {
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

/* Text input styling */
input[type="text"],
input[type="email"],
input[type="password"],
input[type="search"],
input[type="url"],
input[type="tel"],
textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #fff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);
}

/* Focus-visible for keyboard users only */
input:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
```

### Validation State Styling
```css
input:required {
  border-left: 4px solid #f59e0b;
}

input:invalid {
  border-color: #ef4444;
}

input:invalid:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.25);
}

input:valid {
  border-color: #22c55e;
}

input:user-invalid {
  border-color: #ef4444;
  background-color: #fef2f2;
}

/* Error message using adjacent element */
input:invalid + .error-message {
  display: block;
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 4px;
}

.error-message {
  display: none;
}
```

### Custom Select Menu
```css
select {
  width: 100%;
  padding: 12px 16px;
  padding-right: 40px;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #fff;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  cursor: pointer;
}
```

### Custom Checkbox and Radio
```css
/* Hide native input but keep accessible */
input[type="checkbox"],
input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
}

input[type="radio"] {
  border-radius: 50%;
}

input[type="checkbox"]:checked {
  background-color: #3b82f6;
  border-color: #3b82f6;
}

input[type="checkbox"]:checked::after {
  content: "";
  position: absolute;
  left: 5px;
  top: 1px;
  width: 6px;
  height: 10px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

input[type="radio"]:checked {
  border-color: #3b82f6;
  background-color: #fff;
}

input[type="radio"]:checked::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #3b82f6;
}
```

### Form Layout with CSS Grid
```css
.form-group {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;
  margin-bottom: 1.25rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

/* Inline label layout */
.form-inline {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 8px 16px;
  align-items: center;
}

@media (max-width: 640px) {
  .form-row {
    grid-template-columns: 1fr;
  }
  .form-inline {
    grid-template-columns: 1fr;
  }
}
```

### Toggle Switch (Custom)
```css
.toggle {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.toggle input {
  appearance: none;
  width: 44px;
  height: 24px;
  background-color: #d1d5db;
  border-radius: 12px;
  border: none;
  transition: background-color 0.2s;
  cursor: pointer;
}

.toggle input::after {
  content: "";
  position: absolute;
  left: 2px;
  top: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  transition: transform 0.2s;
}

.toggle input:checked {
  background-color: #3b82f6;
}

.toggle input:checked::after {
  transform: translateX(20px);
}

.toggle input:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
```

## Visual Explanation

```
Form Input Box Model (border-box):
┌──────────────────────────────────────────┐
│  Border (2px solid)                       │
│  ┌────────────────────────────────────┐   │
│  │  Padding (12px 16px)               │   │
│  │  ┌──────────────────────────────┐  │   │
│  │  │  Content (text)              │  │   │
│  │  └──────────────────────────────┘  │   │
│  └────────────────────────────────────┘   │
└──────────────────────────────────────────┘
Width: 100% — all parts included

Form Layout Strategies:
Vertical (default):       Horizontal:           Grid (2-column):
┌──────────────────────┐  ┌────────┬─────────┐  ┌───────────────────┐
│ Label                │  │ Label  │ Input   │  │ Label    │ Input  │
│ [Input              ]│  ├────────┼─────────┤  ├──────────┤────────┤
│                      │  │ Label  │ Input   │  │ Label    │ Input  │
│ Error message        │  ├────────┼─────────┤  ├──────────┤────────┤
│                      │  │ Label  │ Input   │  │ Label    │ Input  │
│ [Submit]             │  └────────┴─────────┘  └───────────────────┘
└──────────────────────┘
 Best for mobile           Compact layout         Best for lengthy forms
```

## Common Mistakes
1. **Forgetting `box-sizing: border-box` on inputs**: Without it, padding and border increase the element's total width, breaking layouts
2. **Not styling `:focus` states**: Removing `outline: none` without providing a replacement focus indicator is an accessibility failure
3. **Using `outline: none` alone**: Always pair with a visible `:focus` or `:focus-visible` style
4. **Inconsistent font sizes between labels and inputs**: Always set `font-family: inherit` and `font-size: inherit` on form elements
5. **Overriding `appearance` without providing custom styling**: The element becomes invisible — you must supply replacement styles
6. **Using `placeholder` as a label replacement**: Placeholders disappear on input, fail color contrast, and are not accessible
7. **Not accounting for `select` arrow inconsistencies**: Different browsers render select arrows differently — use `appearance: none` for consistency
8. **Ignoring mobile touch targets**: Inputs and buttons should be at least 44×44px for comfortable tapping
9. **Using `::before`/`::after` on replaced elements**: Pseudo-elements don't work on `<input>`, `<select>`, or `<img>` — wrap them in a container
10. **Not providing validation feedback in real time**: Use `:valid`/`:invalid` to give immediate visual cues

## Best Practices
1. **Always set `box-sizing: border-box`** on all form controls for predictable sizing
2. **Use semantic HTML first** — proper `<label>`, `<fieldset>`, `<legend>`, and input types ensure accessibility
3. **Place labels above inputs** for the best readability and mobile experience
4. **Use `font-family: inherit` and `font-size: inherit`** on all form controls to match your design system
5. **Provide clear focus indicators** — use `:focus-visible` for keyboard users and custom `:focus` for mouse users
6. **Group related fields** with `<fieldset>` and `<legend>` for screen reader context
7. **Use `gap` on flex/grid containers** for consistent spacing between form elements
8. **Set `min-height: 44px`** on inputs and buttons for touch targets
9. **Use `:user-invalid`** (where supported) to only show validation errors after user interaction
10. **Test with screen readers** — forms must be operable with keyboard-only navigation
11. **Use `accent-color`** for quick native checkbox/radio/range theming: `input { accent-color: #3b82f6; }`
12. **Implement `:focus-within`** on form groups to highlight the entire active section

## Accessibility Considerations
- Every `<input>` must have an associated `<label>` — either wrapping the input or using `for`/`id` attributes
- Never use `placeholder` as a label replacement — it disappears on input and fails WCAG 2.1 SC 2.4.6
- Error messages must be programmatically associated with inputs using `aria-describedby`
- Use `aria-required="true"` alongside the `required` attribute for older screen readers
- Color alone should not convey state — pair validation colors with icons or text labels
- Ensure sufficient color contrast: 4.5:1 for text labels, 3:1 for large text and borders
- Custom checkboxes and toggles must be keyboard accessible and announce state changes
- Use `fieldset` and `legend` to group related radio buttons and checkboxes
- Test all forms with keyboard navigation: Tab, Shift+Tab, Enter, Space, and arrow keys
- Disabled inputs should still be perceivable — use sufficient contrast for disabled text
- Consider using `inputmode` attribute to trigger appropriate mobile keyboards (`inputmode="numeric"`, `inputmode="email"`)
- The `autocomplete` attribute helps users with cognitive disabilities fill forms correctly

## Performance Considerations
- Form styling has negligible performance impact — CSS selectors are fast
- Avoid using `box-shadow` with large blur radii on many inputs simultaneously during animation
- `transition` on `border-color` and `box-shadow` is GPU-accelerated and performant
- Custom SVG background images for select arrows should be inline or small data URIs to avoid HTTP requests
- For large forms (50+ inputs), batch DOM reads and writes to avoid layout thrashing
- Use `will-change: transform` sparingly — only on animated custom controls
- Font loading (FOUT/FOIT) can cause form layout shifts — use `font-display: swap` or system font stacks
- CSS pseudo-classes like `:valid`/`:invalid` are fast and don't cause repaints on their own

## Browser Compatibility

| Feature | Chrome | Edge | Firefox | Safari | Opera | IE |
|---|---|---|---|---|---|---|
| `appearance: none` | 29+ | 79+ | 1+ (with -moz-) | 9.1+ (with -webkit-) | 16+ | No support |
| `box-sizing: border-box` | 10+ | 12+ | 29+ | 5.1+ | 9.5+ | 8+ (partial) |
| `:focus-visible` | 86+ | 86+ | 85+ | 15.4+ | 72+ | No |
| `:focus-within` | 60+ | 79+ | 52+ | 10.1+ | 47+ | No |
| `:valid`/`:invalid` | 10+ | 12+ | 4+ | 5+ | 10+ | 10+ (partial) |
| `:required`/`:optional` | 10+ | 12+ | 4+ | 5+ | 10+ | 10+ |
| `:user-invalid` | 119+ | 119+ | 88+ | 17.5+ | 105+ | No |
| `:placeholder-shown` | 47+ | 79+ | 51+ | 9+ | 34+ | No |
| `accent-color` | 93+ | 93+ | 92+ | 15.4+ | 79+ | No |
| `input[type="color"]` | 20+ | 12+ | 29+ | 10.1+ | 12+ | No |
| `input[type="date"]` | 20+ | 12+ | 57+ | 14.1+ | 15+ | No |
| `input[type="range"]` | 4+ | 12+ | 23+ | 3.1+ | 11+ | 10+ |
| `::before`/`::after` on inputs | No | No | No | No | No | No |

## Summary Notes
- Form elements are replaced OS widgets — `appearance: none` gives you full styling control
- `box-sizing: border-box` is mandatory to prevent input overflow issues
- Always inherit `font-family` and `font-size` onto form controls for design consistency
- Every input needs an associated `<label>` — never rely on `placeholder` alone
- Use `:focus-visible` for keyboard focus indicators and custom `:focus` for mouse interaction
- `accent-color` provides quick native theming for checkboxes, radios, and range inputs
- Custom controls (checkboxes, toggles, selects) need `appearance: none` plus replacement styles
- Validation pseudo-classes (`:valid`, `:invalid`, `:user-invalid`) provide real-time feedback
- Touch targets should be at least 44×44px (WCAG 2.2 requirement)
- Use CSS Grid or Flexbox for form layout — `gap` for consistent spacing
- Test all forms with keyboard-only navigation and screen readers
- Browser DevTools (Computed tab) helps debug form element box models
