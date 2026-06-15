# Input Elements — Cheatsheet

## Basic Input Syntax

```html
<input type="text" name="fieldname" id="fieldid" value="default">
```

## Input Types Quick Reference

| Type | Description | Mobile Keyboard |
|------|-------------|-----------------|
| `text` | Single-line text (default) | Standard |
| `password` | Masked text input | Standard |
| `email` | Email with validation | @ and .com keys |
| `tel` | Telephone number | Numeric keypad |
| `url` | URL with validation | / and .com keys |
| `number` | Numeric with spinner | Numeric keypad |
| `search` | Search with clear button | Search button |
| `file` | File picker | N/A |
| `checkbox` | Boolean toggle | N/A |
| `radio` | Single choice from group | N/A |
| `date` | Date picker (YYYY-MM-DD) | Date selector |
| `datetime-local` | Date + time picker | Date/time selector |
| `month` | Month and year picker | Month selector |
| `week` | Week and year picker | Week selector |
| `time` | Time picker (HH:MM) | Time selector |
| `color` | Color picker | Color palette |
| `range` | Slider control | Slider |
| `hidden` | Invisible data carrier | N/A |
| `submit` | Form submit button | N/A |
| `reset` | Form reset button | N/A |
| `button` | Generic button | N/A |
| `image` | Image as submit button | N/A |

## Key Attributes

| Attribute | Values | Purpose |
|-----------|--------|---------|
| `type` | See above | Control type |
| `name` | string | Form data key |
| `value` | string | Default/current value |
| `placeholder` | string | Hint text |
| `required` | boolean | Mandatory field |
| `disabled` | boolean | Disable + prevent submission |
| `readonly` | boolean | Prevent editing, allow submission |
| `autofocus` | boolean | Auto-focus on load |
| `autocomplete` | `on`, `off`, `name`, `email`, etc. | Browser autofill hint |
| `inputmode` | `none`, `text`, `decimal`, `numeric`, `tel`, `search`, `email`, `url` | Virtual keyboard hint |
| `pattern` | regex | Validation pattern |
| `min` / `max` | number/date | Value constraints |
| `step` | number | Increment granularity |
| `minlength` / `maxlength` | number | Character count limits |
| `accept` | MIME types | File type filter |
| `multiple` | boolean | Allow multiple files/values |
| `alt` | string | Alternative text (for image type) |
| `src` | URL | Image source (for image type) |
| `width` / `height` | pixels | Image dimensions (for image type) |
| `form` | form ID | Associate with form outside `<form>` |
| `formaction` | URL | Override form action (submit/image) |
| `formenctype` | encoding type | Override form enctype |
| `formmethod` | GET/POST | Override form method |
| `formnovalidate` | boolean | Skip validation for this submit |
| `formtarget` | `_self`, `_blank`, etc. | Override form target |

## CSS Pseudo-Classes for Inputs

```css
:focus        /* Input has focus */
:focus-within /* Parent has focused child */
:hover        /* Mouse hover */
:active       /* Being clicked/activated */
:disabled     /* Disabled inputs */
:enabled      /* Enabled inputs */
:read-only    /* Read-only inputs */
:read-write   /* Editable inputs */
:required     /* Required inputs */
:optional     /* Non-required inputs */
:valid        /* Passes validation */
:invalid      /* Fails validation */
:in-range     /* Value within min/max */
:out-of-range /* Value outside min/max */
:checked      /* Checked checkbox/radio */
:indeterminate /* Neither checked nor unchecked */
:placeholder-shown /* Placeholder is visible */
:empty        /* No value */
:default      /* Default submit button in a form */
```

## JavaScript Properties & Methods

```javascript
// Properties
input.value              // Current value (string)
input.name               // Name attribute
input.type               // Input type
input.checked            // Boolean for checkbox/radio
input.files              // FileList for file inputs
input.validity           // ValidityState object
input.validationMessage  // Validation error message
input.willValidate       // Whether validation applies
input.valueAsNumber      // Value as Number (for number/range)
input.valueAsDate        // Value as Date (for date inputs)
input.defaultValue       // Initial HTML value

// Methods
input.focus()            // Set focus
input.blur()             // Remove focus
input.select()           // Select all text
input.setRangeText()     // Replace selected range
input.setSelectionRange() // Set selection range
input.checkValidity()    // Returns boolean
input.reportValidity()   // Shows validation message
input.setCustomValidity() // Set custom error
input.stepUp()           // Increment (number/range)
input.stepDown()         // Decrement (number/range)

// Events
input.addEventListener('input', handler)    // Value changes
input.addEventListener('change', handler)   // Value committed
input.addEventListener('focus', handler)    // Got focus
input.addEventListener('blur', handler)     // Lost focus
input.addEventListener('invalid', handler)  // Validation failed
```

## Form Submission Flow

```
User fills form → Submit button clicked
  → Browser checks validation (required, pattern, type)
    → If invalid: show error messages, stop
    → If valid:
      → Build FormData (name=value pairs from non-disabled inputs)
      → Apply enctype encoding
      → Send request (GET: URL params, POST: request body)
      → Server processes and responds
```

## Accessibility Requirements

| Requirement | Implementation |
|-------------|---------------|
| Associated label | `<label for="id">` or `aria-label` |
| Focus indicator | Visible `:focus` outline |
| Error association | `aria-describedby="error-id"` |
| Required indicator | `aria-required="true"` + visual asterisk |
| Grouping | `<fieldset>` + `<legend>` for related inputs |
| Instructions | `aria-describedby` for format hints |
| Status updates | `role="alert"` for dynamic messages |

## Common Validation Patterns

```html
<!-- Email -->
<input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">

<!-- Phone (US) -->
<input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">

<!-- ZIP Code -->
<input type="text" pattern="[0-9]{5}(-[0-9]{4})?" maxlength="10">

<!-- Strong password -->
<input type="password" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}">

<!-- URL -->
<input type="url">

<!-- Alphanumeric -->
<input type="text" pattern="[A-Za-z0-9]+">

<!-- Date range -->
<input type="date" min="2024-01-01" max="2025-12-31">
```
