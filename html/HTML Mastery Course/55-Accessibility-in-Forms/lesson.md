# Module 55: Accessibility in Forms

## Introduction

Accessibility in forms ensures that all users, including those with disabilities, can perceive, understand, navigate, and interact with form controls. Accessible forms use semantic HTML, proper labeling, keyboard navigation, error communication, and ARIA attributes. This module covers WCAG guidelines, screen reader considerations, and practical techniques for creating forms that work for everyone.

## Learning Objectives

By the end of this module, you will be able to:
- Associate labels with form controls using `<label>`, `aria-label`, and `aria-labelledby`
- Implement proper focus management and visible focus indicators
- Create accessible error messages with live regions
- Use ARIA attributes (aria-required, aria-invalid, aria-describedby) appropriately
- Ensure keyboard navigability through forms with logical tab order
- Implement accessible custom form controls
- Test forms with screen readers and accessibility tools
- Understand WCAG 2.1 success criteria related to forms
- Build accessible date pickers, file uploads, and multi-step forms
- Follow inclusive design patterns for diverse user needs

## Theory

### Why Form Accessibility Matters

Forms are critical user interactions — registration, checkout, search, login, and data entry. For users with disabilities, inaccessible forms can be impossible to complete. Screen reader users need clear labels and instructions. Keyboard-only users need logical focus order. Users with motor impairments need large click targets and forgiving validation.

### WCAG 2.1 Success Criteria for Forms

| Criterion | Level | Requirement |
|-----------|-------|-------------|
| 1.1.1 Non-text Content | A | All form controls need text labels |
| 1.3.1 Info and Relationships | A | Labels must be programmatically associated |
| 1.3.5 Identify Input Purpose | AA | Autocomplete attributes for common fields |
| 2.1.1 Keyboard | A | All functionality via keyboard |
| 2.4.3 Focus Order | A | Logical tab order |
| 2.4.6 Headings and Labels | AA | Descriptive labels |
| 2.4.7 Focus Visible | AA | Visible focus indicator |
| 3.3.1 Error Identification | A | Identify input errors |
| 3.3.2 Labels or Instructions | A | Labels and instructions provided |
| 3.3.3 Error Suggestion | AA | Suggestions for fixing errors |
| 3.3.4 Error Prevention | AA | Legal/financial data confirmation |
| 4.1.2 Name, Role, Value | A | Custom controls expose accessibility info |

### Core Principles of Accessible Forms

1. **Perceivable**: Labels, instructions, and errors must be programmatically determinable
2. **Operable**: All controls must be usable via keyboard alone
3. **Understandable**: Error messages must be clear and suggest corrections
4. **Robust**: Works with current and future assistive technologies

### The `<label>` Element

The `<label>` element is the foundation of form accessibility. It provides an accessible name for form controls.

```html
<!-- Explicit association (preferred) -->
<label for="username">Username</label>
<input type="text" id="username">

<!-- Implicit association -->
<label>Username <input type="text"></label>
```

### ARIA in Forms

ARIA (Accessible Rich Internet Applications) supplements HTML when native semantics are insufficient.

| ARIA Attribute | Usage |
|----------------|-------|
| `aria-label` | Provides a label when visual label isn't possible |
| `aria-labelledby` | References one or more IDs as the accessible name |
| `aria-describedby` | References IDs for additional description |
| `aria-required` | Indicates required field (semantically equivalent to `required`) |
| `aria-invalid` | Indicates invalid input ("true", "false", "grammar", "spelling") |
| `aria-errormessage` | References the error message element |
| `role="alert"` | Announces dynamic content to screen readers |
| `aria-live` | Sets live region priority ("off", "polite", "assertive") |

### Focus Management

Keyboard navigation relies on visible focus indicators and logical tab order.

```css
/* Custom focus indicator */
:focus-visible {
  outline: 3px solid #4A90D9;
  outline-offset: 2px;
}
```

### Accessible Error Messages

Errors must be associated with inputs and announced to screen readers.

```html
<label for="email">Email</label>
<input type="email" id="email" required
       aria-describedby="email-hint email-error">
<span id="email-hint">Enter your work email</span>
<span id="email-error" role="alert">
  Please enter a valid email address
</span>
```

## Syntax

### Basic Accessible Form Template

```html
<form>
  <div class="field">
    <label for="name">Full Name <span aria-hidden="true">*</span></label>
    <input type="text" id="name" name="name" required
           aria-required="true"
           aria-describedby="name-hint">
    <span id="name-hint" class="hint">First and last name</span>
  </div>

  <div class="field">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required
           aria-required="true"
           aria-describedby="email-error"
           aria-invalid="false">
    <span id="email-error" class="error" role="alert"></span>
  </div>

  <button type="submit">Submit</button>
</form>
```

### Accessible Radio Button Group

```html
<fieldset>
  <legend>Preferred Contact Method</legend>
  <label><input type="radio" name="contact" value="email"> Email</label>
  <label><input type="radio" name="contact" value="phone"> Phone</label>
</fieldset>
```

### Accessible Custom Select

```html
<div role="combobox" aria-expanded="false" aria-haspopup="listbox"
     aria-labelledby="country-label" tabindex="0">
  <span id="country-label">Country</span>
  <ul role="listbox" aria-label="Countries">
    <li role="option" aria-selected="false" tabindex="-1">USA</li>
    <li role="option" aria-selected="false" tabindex="-1">Canada</li>
  </ul>
</div>
```

## Examples

### Example 1: Proper Labeling Techniques

```html
<!-- Screen reader reads: "Full Name, edit text" -->
<label for="fn">Full Name</label>
<input type="text" id="fn">

<!-- Icon-only button needs aria-label -->
<button aria-label="Search">
  <svg><!-- search icon --></svg>
</button>
```

### Example 2: Live Region for Errors

```html
<div aria-live="polite" aria-atomic="true">
  <span id="formErrors"></span>
</div>
```

## Common Mistakes

1. **Missing labels**: Using placeholder as the only label — disappears on input, fails WCAG 1.3.1 and 3.3.2.
2. **Inaccessible custom controls**: Custom dropdowns, date pickers, and sliders without ARIA roles and keyboard support.
3. **Poor focus indicators**: Removing `outline: none` without providing a visible replacement.
4. **Wrong error association**: Not using `aria-describedby` to link errors to inputs.
5. **Placeholder as label**: Placeholder text disappears when typing and has poor contrast.
6. **Missing fieldset on radio groups**: Radio buttons without `<fieldset>` lose group context for screen readers.
7. **Auto-focus on page load**: Moving focus without user consent confuses screen reader users.
8. **Color-only errors**: Using red text or borders without icons or text to indicate errors.
9. **Ignoring keyboard navigation**: Custom controls that work with mouse but not keyboard.
10. **Hidden labels with display:none**: Visually hidden labels should use `.sr-only` CSS, not `display:none`.

## Best Practices

1. **Every input needs a label** — Use `<label for="id">`, `aria-label`, or `aria-labelledby`.
2. **Use `<fieldset>` and `<legend>`** for all radio button and checkbox groups.
3. **Associate errors with `aria-describedby`** and use `role="alert"` for announcements.
4. **Maintain a visible focus indicator** — at least 3px contrast ratio.
5. **Ensure logical tab order** — `tabindex="0"` for interactive elements, avoid positive tabindex values.
6. **Use `autocomplete` attributes** for common fields (name, email, address, phone) per WCAG 1.3.5.
7. **Provide instructions** before the form or via `aria-describedby`.
8. **Use `aria-required`** alongside the `required` attribute for redundancy.
9. **Set `aria-invalid`** on fields with validation errors.
10. **Test with screen readers** (NVDA, VoiceOver, JAWS) and keyboard-only navigation.

## Summary Notes

- Accessible forms follow POUR principles: Perceivable, Operable, Understandable, Robust
- `<label>` elements are the most important accessibility feature for forms
- `<fieldset>` + `<legend>` are required for radio/checkbox groups
- `aria-describedby` connects help text and error messages to inputs
- `aria-invalid` dynamically indicates validation state
- `aria-live` regions announce dynamic content to screen readers
- All functionality must be operable via keyboard
- Visible focus indicators are essential for keyboard users
- Error messages must identify the problem and suggest a fix
- Test with real assistive technologies, not just automated tools
