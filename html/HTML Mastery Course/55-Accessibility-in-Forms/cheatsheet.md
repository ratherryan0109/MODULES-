# Accessibility in Forms — Cheatsheet

## Core HTML Elements

```html
<!-- Proper label association (PREFERRED) -->
<label for="email">Email</label>
<input type="email" id="email">

<!-- Implicit label -->
<label>Email <input type="email"></label>

<!-- Grouping -->
<fieldset>
  <legend>Contact Method</legend>
  <!-- radio buttons -->
</fieldset>
```

## ARIA Attributes for Forms

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `aria-label` | Direct label when no visual label | `<input aria-label="Search">` |
| `aria-labelledby` | Reference one or more IDs as label | `<input aria-labelledby="title desc">` |
| `aria-describedby` | Reference IDs for description/error | `<input aria-describedby="hint error">` |
| `aria-required` | Indicates required field | `<input aria-required="true">` |
| `aria-invalid` | Indicates invalid state | `<input aria-invalid="true">` |
| `aria-errormessage` | References error message ID | `<input aria-errormessage="err1">` |
| `aria-disabled` | Disabled state (still focusable) | `<fieldset aria-disabled="true">` |
| `aria-live` | Live region priority | `<div aria-live="polite">` |
| `aria-atomic` | Announce entire region on change | `<div aria-live="polite" aria-atomic="true">` |

## WCAG 2.1 Success Criteria

| Criterion | Level | Requirement |
|-----------|-------|-------------|
| 1.1.1 Non-text Content | A | All controls have text labels |
| 1.3.1 Info and Relationships | A | Labels programmatically associated |
| 1.3.5 Identify Input Purpose | AA | autocomplete attributes |
| 2.1.1 Keyboard | A | All functionality via keyboard |
| 2.4.3 Focus Order | A | Logical tab order |
| 2.4.6 Headings and Labels | AA | Descriptive labels |
| 2.4.7 Focus Visible | AA | Visible focus indicator |
| 3.3.1 Error Identification | A | Identify input errors |
| 3.3.2 Labels or Instructions | A | Labels and instructions provided |
| 3.3.3 Error Suggestion | AA | Suggestions for fixing errors |

## Autocomplete Values

```html
<input autocomplete="name">
<input autocomplete="given-name">   <!-- First name -->
<input autocomplete="family-name">  <!-- Last name -->
<input autocomplete="email">
<input autocomplete="tel">
<input autocomplete="street-address">
<input autocomplete="address-line1">
<input autocomplete="address-line2">
<input autocomplete="address-level2"> <!-- City -->
<input autocomplete="address-level1"> <!-- State -->
<input autocomplete="postal-code">
<input autocomplete="country-name">
<input autocomplete="cc-number">
<input autocomplete="cc-exp">
<input autocomplete="cc-csc">
<input autocomplete="cc-name">
<input autocomplete="username">
<input autocomplete="new-password">
<input autocomplete="current-password">
```

## Accessible Error Pattern

```html
<label for="email">Email</label>
<input type="email" id="email" required
       aria-describedby="email-error"
       aria-invalid="false">
<span id="email-error" class="error" role="alert">
  Please enter a valid email
</span>
```

```javascript
input.addEventListener('blur', () => {
  if (!input.validity.valid) {
    input.setAttribute('aria-invalid', 'true');
    errorEl.textContent = 'Please enter a valid email';
    errorEl.style.display = 'block';
  } else {
    input.setAttribute('aria-invalid', 'false');
    errorEl.style.display = 'none';
  }
});
```

## Focus Management

```javascript
// Focus error summary after validation failure
const summary = document.getElementById('errorSummary');
summary.tabIndex = -1;
summary.focus();

// Focus first field of a new step
const firstField = step.querySelector('input, select, button');
firstField?.focus();

// Skip link
// <a href="#main" class="skip-link">Skip to main content</a>
```

```css
/* Visible focus indicator */
:focus-visible {
  outline: 3px solid #4A90D9;
  outline-offset: 2px;
}

/* Never use without replacement */
/* BAD: */ outline: none;
/* GOOD: */ outline: none; box-shadow: 0 0 0 3px #4A90D9;
```

## Screen Reader Only (Sr-Only) CSS

```css
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
```

## Required Field Indicators

```html
<!-- Visual asterisk (hidden from screen readers) -->
<label for="name">Name <span aria-hidden="true">*</span></label>
<input type="text" id="name" required aria-required="true">

<!-- Legend at top -->
<p>Fields marked with <span aria-hidden="true">*</span><span class="sr-only">required</span> are mandatory.</p>
```

## Keyboard Navigation Patterns

| Control | Key Interactions |
|---------|------------------|
| Text input | Tab to focus, type |
| Checkbox | Tab, Space to toggle |
| Radio group | Tab to group, Arrow keys between options |
| Select | Tab, Arrow keys, Enter to confirm |
| Button | Tab, Enter/Space to activate |
| Custom combobox | Tab, Arrow keys, Enter to select, Escape to close |
| Slider | Tab, Arrow keys, Home/End |
| Toggle switch | Tab, Space/Enter to toggle |

## Testing Checklist

- [ ] Tab through all form controls in logical order
- [ ] All interactive elements have visible focus indicators
- [ ] Screen reader announces labels for all inputs
- [ ] Fieldset + legend for all radio/checkbox groups
- [ ] Error messages associated via aria-describedby
- [ ] aria-invalid set on invalid fields
- [ ] Error summary receives focus on validation failure
- [ ] All functionality works without a mouse
- [ ] autocomplete attributes on common fields
- [ ] Color is not the only indicator of state
- [ ] Custom controls have correct ARIA roles and states
- [ ] Live regions announce dynamic content changes
