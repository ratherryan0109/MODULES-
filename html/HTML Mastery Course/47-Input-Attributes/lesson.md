# Module 47: Input Attributes

## Introduction

HTML input attributes define the behavior, validation rules, appearance, and accessibility of form controls. While the `type` attribute determines what kind of input is displayed, dozens of other attributes fine-tune how the input functions — from placeholder text and default values to complex validation constraints and autofill hints.

Mastering input attributes is essential for creating forms that are both user-friendly and functionally robust. These attributes enable client-side validation without JavaScript, improve accessibility, optimize mobile input, and streamline form submission.

## Learning Objectives

By the end of this module, you will be able to:

- Implement all standard HTML input attributes correctly
- Use validation attributes: `required`, `min`, `max`, `step`, `pattern`, `minlength`, `maxlength`
- Configure autocomplete for password managers and browser autofill
- Use boolean attributes: `disabled`, `readonly`, `checked`, `multiple`, `autofocus`
- Apply form association attributes: `form`, `formaction`, `formmethod`, `formenctype`, `formtarget`, `formnovalidate`
- Optimize mobile input with `inputmode` and `autocomplete`
- Understand the interaction between attributes

## Categories of Input Attributes

### 1. Core Attributes

```html
<!-- The fundamental input attributes -->
<input type="text" name="username" id="username" value="default">
```

| Attribute | Purpose |
|-----------|---------|
| `type` | Defines the input control type |
| `name` | Key for form data submission |
| `id` | Unique identifier for labeling and scripting |
| `value` | Current/default value of the input |

### 2. Validation Attributes

These attributes enable browser-native form validation:

```html
<input type="text" required minlength="3" maxlength="50" pattern="[A-Za-z]+">
<input type="number" min="0" max="100" step="1">
```

| Attribute | Applies To | Effect |
|-----------|-----------|--------|
| `required` | Most types | Field must have a value |
| `min` | number, range, date/time | Minimum value |
| `max` | number, range, date/time | Maximum value |
| `step` | number, range, date/time | Increment granularity |
| `minlength` | text, email, tel, url, password | Minimum character count |
| `maxlength` | text, email, tel, url, password | Maximum character count |
| `pattern` | text, tel, email, url, password | Regex validation pattern |

#### The `pattern` Attribute

The `pattern` attribute accepts a JavaScript-compatible regular expression:

```html
<!-- US Phone: 555-123-4567 -->
<input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
       title="Format: 555-123-4567">

<!-- Alphanumeric, 3-10 characters -->
<input type="text" pattern="[A-Za-z0-9]{3,10}" 
       title="3-10 alphanumeric characters">

<!-- Credit card (simplified) -->
<input type="text" pattern="[0-9]{13,16}" 
       maxlength="16" title="13-16 digit card number">
```

The `title` attribute provides a hint about the expected format and is shown in the validation message.

### 3. Behavior Attributes

```html
<input type="text" placeholder="Enter your name" autofocus>
<input type="checkbox" checked>
<input type="file" multiple>
```

| Attribute | Effect |
|-----------|--------|
| `placeholder` | Hint text shown when input is empty |
| `autofocus` | Auto-focus on page load (one per page) |
| `checked` | Pre-selects checkbox or radio |
| `disabled` | Disables input (not submitted) |
| `readonly` | Prevents editing (value submitted) |
| `multiple` | Allow multiple values/files |
| `autocomplete` | Browser autofill hint |
| `inputmode` | Virtual keyboard type hint |

#### `disabled` vs `readonly`

```html
<!-- Disabled: grayed out, not interactive, NOT submitted -->
<input type="text" value="Cannot edit" disabled>

<!-- Readonly: can't edit, looks normal, IS submitted -->
<input type="text" value="Can read only" readonly>
```

Key differences:

| Feature | `disabled` | `readonly` |
|---------|-----------|------------|
| Can be edited | No | No |
| Value submitted | No | Yes |
| Visual change | Grayed out | Normal/Subtle |
| Can receive focus | No | Yes |
| Works with all types | Yes | Text-based only |
| JavaScript interaction | Partially | Fully |

### 4. Autocomplete Attributes

The `autocomplete` attribute helps browsers and password managers fill in form data:

```html
<input type="text" autocomplete="name">
<input type="email" autocomplete="email">
<input type="tel" autocomplete="tel">
<input type="password" autocomplete="current-password">
<input type="password" autocomplete="new-password">
```

**Common autocomplete values:**

| Category | Values |
|----------|--------|
| Personal | `name`, `given-name`, `family-name`, `nickname` |
| Contact | `email`, `tel`, `tel-country-code`, `tel-national` |
| Address | `street-address`, `address-line1`, `address-line2`, `city`, `state`, `postal-code`, `country` |
| Account | `username`, `current-password`, `new-password` |
| Financial | `cc-name`, `cc-number`, `cc-exp`, `cc-csc`, `transaction-currency` |
| Web | `url`, `photo` |

### 5. Mobile Optimization Attributes

```html
<!-- inputmode hints at the keyboard type -->
<input type="text" inputmode="numeric" pattern="[0-9]*">
<input type="text" inputmode="decimal">
<input type="text" inputmode="email">
<input type="text" inputmode="url">
<input type="text" inputmode="tel">
<input type="text" inputmode="search">

<!-- enterkeyhint customizes the enter key label -->
<input enterkeyhint="search">
<input enterkeyhint="done">
<input enterkeyhint="next">
<input enterkeyhint="go">
<input enterkeyhint="send">
```

**`inputmode` values:**

| Value | Keyboard |
|-------|----------|
| `none` | No virtual keyboard |
| `text` | Standard text keyboard (default) |
| `decimal` | Numeric with decimal point |
| `numeric` | Numeric digits only |
| `tel` | Telephone keypad |
| `search` | Search-optimized keyboard |
| `email` | Email-optimized (@ key) |
| `url` | URL-optimized (/ key) |

### 6. Form Association Attributes

These attributes on submit buttons override the form's default behavior:

```html
<form action="/default" method="POST" id="myForm">
  <input type="text" name="data" form="myForm">
  <button type="submit" formaction="/alternate" formmethod="GET">
    Submit via GET to alternate URL
  </button>
  <button type="submit" formnovalidate>
    Submit without validation
  </button>
</form>
```

| Attribute | On Element | Effect |
|-----------|-----------|--------|
| `form` | Any input | Associates input with a form by ID (even outside `<form>`) |
| `formaction` | submit/image | Overrides form's `action` URL |
| `formmethod` | submit/image | Overrides form's `method` (GET/POST) |
| `formenctype` | submit/image | Overrides form's `enctype` |
| `formtarget` | submit/image | Overrides form's `target` |
| `formnovalidate` | submit/image | Skips validation for this submission |

### 7. Event Handler Attributes

While inline event handlers are generally discouraged in favor of addEventListener:

```html
<input type="text" onfocus="highlight(this)" onblur="unhighlight(this)" 
       oninput="validateField(this)" onchange="saveValue(this)">
```

| Event | Fires When |
|-------|-----------|
| `onfocus` | Input receives focus |
| `onblur` | Input loses focus |
| `oninput` | Value changes (every keystroke) |
| `onchange` | Value committed (on blur) |
| `oninvalid` | Validation fails |
| `onselect` | Text is selected |

### 8. ARIA Accessibility Attributes

```html
<input type="text" aria-label="Search" aria-describedby="search-help" 
       aria-invalid="true" aria-required="true">
```

| Attribute | Purpose |
|-----------|---------|
| `aria-label` | Accessible name when no visible label |
| `aria-labelledby` | References IDs of labeling elements |
| `aria-describedby` | References IDs of descriptive text |
| `aria-required` | Indicates required field |
| `aria-invalid` | Indicates validation error |
| `aria-errormessage` | References error message element |

## Attribute Interaction

Some attributes interact in important ways:

```html
<!-- minlength only works if there's a value (or required) -->
<input type="text" minlength="3" required>

<!-- pattern and title work together for error messages -->
<input type="text" pattern="[A-Z]{3}" title="Exactly 3 uppercase letters">

<!-- step on a date input is in days -->
<input type="date" step="7">  <!-- Weekly intervals -->

<!-- multiple enables comma-separated emails -->
<input type="email" multiple>
```

## Common Mistakes

### Mistake 1: Forgetting `name` Attribute
Inputs without `name` are not submitted with the form. Always include `name`.

### Mistake 2: Confusing `disabled` and `readonly`
Use `disabled` to prevent interaction AND submission. Use `readonly` to prevent editing but allow submission.

### Mistake 3: Invalid `pattern` Regex
The pattern must match the ENTIRE value (it's wrapped in `^(?:...)$`).

### Mistake 4: Missing `form` Attribute for External Inputs
If an input is outside `<form>`, use `form="formId"` to associate it.

### Mistake 5: Not Handling Autocomplete for Security
Use `autocomplete="new-password"` for password fields to prevent autofilling old passwords.

## Best Practices

1. **Always include `name`** — without it, the input value is not submitted
2. **Use `required` with server-side validation** — never trust client-side alone
3. **Provide descriptive `title` with `pattern`** — helps users understand format requirements
4. **Use `autocomplete` for all form fields** — improves UX and accessibility
5. **Use `inputmode` alongside type** — type is for mobile, inputmode refines the keyboard
6. **Disable vs Readonly** — use `disabled` to exclude from submission, `readonly` to include
7. **Set `autofocus` only once per page** — multiple autofocus is ignored
8. **Use `maxlength` for text inputs** — prevents excessively long submissions
9. **Use `form` attribute to group inputs across the DOM** — keeps form structure flexible
10. **Always validate constraints server-side** — client attributes are easily bypassed

## Summary Notes

- Input attributes control validation, behavior, appearance, and accessibility
- `required`, `min`, `max`, `step`, `pattern`, `minlength`, `maxlength` enable native validation
- `disabled` excludes from submission; `readonly` includes
- `autocomplete` improves UX and is critical for accessibility audits
- `inputmode` and `enterkeyhint` optimize mobile keyboard experience
- `formaction`, `formmethod`, etc. allow per-button overrides of form behavior
- The `form` attribute associates inputs outside the `<form>` element
- `pattern` must match the entire value (anchored automatically)
- Always combine client attributes with server-side validation
- The `title` attribute on a `pattern` input customizes the error message
