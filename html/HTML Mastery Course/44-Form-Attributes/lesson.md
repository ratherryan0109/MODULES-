# Module 44: Form Attributes

## Introduction

HTML form attributes define how forms behave, validate, submit, and interact with users. Beyond the basic `action` and `method`, modern HTML provides dozens of attributes that control everything from autofill behavior to custom validation messages. Mastering these attributes is essential for building robust, accessible, and user-friendly forms.

This module covers attributes for the `<form>` element, `<input>` elements, and other form controls, including the newest HTML5 attributes.

## Learning Objectives

By the end of this module, you will be able to:
- Configure form submission with `action`, `method`, `enctype`, and `target`
- Use input attributes for validation, autocomplete, and UX
- Implement custom validation with `pattern` and `setCustomValidity()`
- Manage form state with `disabled`, `readonly`, and `required`
- Use `autocomplete` for faster form filling
- Leverage global attributes on form controls

## `<form>` Element Attributes

| Attribute | Values | Description |
|-----------|--------|-------------|
| `action` | URL | Where to send form data on submit |
| `method` | `get`, `post`, `dialog` | HTTP method for submission |
| `enctype` | `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain` | Encoding for form data |
| `target` | `_self`, `_blank`, `_parent`, `_top` | Where to display response |
| `name` | string | Name of the form |
| `novalidate` | (boolean) | Skip HTML5 validation |
| `autocomplete` | `on`, `off` | Enable/disable autofill |
| `accept-charset` | charset | Character encoding |

### Method Comparison

| `method="get"` | `method="post"` |
|----------------|-----------------|
| Data in URL query string | Data in request body |
| Limited length (~2000 chars) | No length limit |
| Visible in browser history | Not visible |
| Bookmarkable | Not bookmarkable |
| Use for searches | Use for mutations (login, signup) |

## `<input>` Element Attributes

### Validation Attributes

| Attribute | Example | Description |
|-----------|---------|-------------|
| `required` | `required` | Field must have a value |
| `minlength` | `minlength="3"` | Minimum character count |
| `maxlength` | `maxlength="100"` | Maximum character count |
| `min` | `min="1"` | Minimum numeric/date value |
| `max` | `max="100"` | Maximum numeric/date value |
| `step` | `step="0.5"` | Increment between values |
| `pattern` | `pattern="[A-Za-z]+"` | Regex pattern to match |

```html
<input type="text" name="username" required minlength="3" maxlength="20" pattern="[A-Za-z0-9_]+" title="Letters, numbers, and underscores only">
```

### Autocomplete Attributes

```html
<input type="text" name="name" autocomplete="name">
<input type="email" name="email" autocomplete="email">
<input type="tel" name="phone" autocomplete="tel">
<input type="url" name="website" autocomplete="url">
<input type="text" name="address" autocomplete="street-address">
```

Full list includes: `name`, `given-name`, `family-name`, `email`, `tel`, `address-line1`, `address-line2`, `country`, `postal-code`, `username`, `current-password`, `new-password`, `cc-number`, `cc-exp`, `cc-csc`, `transaction-amount`, `language`, `bday`, `sex`, `url`, `photo`, `organization`, `street-address`, `address-level1`-`4`, `country-name`, `postal-code`, `tel-*`, `impp`, `work-*`, `home-*`, `mobile-*`, `fax-*`, `pager-*`.

### Form Association Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `form` | Associates an input with a form outside its parent | `form="my-form"` |
| `formaction` | Overrides the form's action for this input | `formaction="/alt-submit"` |
| `formenctype` | Overrides the form's enctype | `formenctype="multipart/form-data"` |
| `formmethod` | Overrides the form's method | `formmethod="post"` |
| `formtarget` | Overrides the form's target | `formtarget="_blank"` |
| `formnovalidate` | Overrides form's novalidate | `formnovalidate` |

```html
<form id="main-form" action="/submit" method="post">
  <input type="text" name="data">
  <button type="submit">Save</button>
  <button type="submit" formaction="/draft" formmethod="get">Save Draft</button>
</form>
<!-- Input outside the form -->
<input type="text" name="extra" form="main-form">
```

### Input Mode and Enter Key Hint

```html
<!-- Shows numeric keypad on mobile -->
<input type="text" inputmode="numeric" name="zip">

<!-- Shows URL keyboard -->
<input type="text" inputmode="url" name="website">

<!-- Shows email keyboard -->
<input type="text" inputmode="email" name="email">

<!-- Enter key label -->
<input type="search" name="q" enterkeyhint="search">
<input type="text" name="message" enterkeyhint="send">
```

### State Attributes

| Attribute | Description | Behavior |
|-----------|-------------|----------|
| `disabled` | Input is not interactive | Not submitted, grayed out, not focusable |
| `readonly` | Input value cannot be changed | Submitted, focusable, selectable |
| `hidden` | Input not visible | Not displayed, submitted if form-associated |

```html
<input type="text" name="readonly-field" value="Cannot change" readonly>
<input type="text" name="disabled-field" value="Not submitted" disabled>
<input type="hidden" name="token" value="abc123">
```

## Custom Validation Messages

HTML5 validation messages can be customized with JavaScript:

```html
<input type="email" id="email" name="email" required>
```

```javascript
const email = document.getElementById('email');
email.addEventListener('invalid', function(e) {
  if (this.validity.valueMissing) {
    this.setCustomValidity('Please enter your email address');
  } else if (this.validity.typeMismatch) {
    this.setCustomValidity('Please enter a valid email');
  }
});

email.addEventListener('input', function() {
  this.setCustomValidity(''); // Reset on input
});
```

## The `multiple` Attribute

Allows multiple values in a single input:

```html
<input type="file" name="documents" multiple>
<input type="email" name="emails" multiple placeholder="Separate emails with commas">
```

## The `accept` Attribute (File Input)

```html
<input type="file" name="photo" accept="image/*">
<input type="file" name="document" accept=".pdf,.doc,.docx">
<input type="file" name="media" accept="image/png, image/jpeg, video/mp4">
```

## The `dirname` Attribute

Submits the text direction of an input:

```html
<input type="text" name="comment" dirname="comment.dir">
<!-- Submits: comment=text&comment.dir=ltr -->
```

## Global Attributes on Form Elements

Form controls accept all global HTML attributes:

- `id`, `class`, `style`
- `data-*` for custom data
- `aria-*` for accessibility
- `tabindex` for keyboard navigation
- `title` for tooltips
- `lang` for language

## Common Mistakes

- Using `disabled` when `readonly` is intended
- Forgetting `name` attribute (data not submitted)
- Not providing `autocomplete` for common fields
- Using `pattern` without `title` (no error message)
- Using `novalidate` without client-side fallback
- Not resetting `setCustomValidity()` on input

## Best Practices

1. Always include `name` attribute for data submission
2. Use `autocomplete` on all common fields
3. Provide `title` with `pattern` for validation hints
4. Use `inputmode` for mobile keyboard optimization
5. Prefer `readonly` over `disabled` when possible
6. Use `form` attribute for inputs outside `<form>`
7. Reset `setCustomValidity()` on input events
8. Use `accept` for file type restrictions
9. Style `:valid` and `:invalid` states with CSS
10. Test form submission with and without JavaScript

## Summary Notes

| Category | Key Attributes |
|----------|---------------|
| **Submission** | `action`, `method`, `enctype`, `target` |
| **Validation** | `required`, `min`, `max`, `pattern`, `minlength`, `maxlength` |
| **Autofill** | `autocomplete` (50+ values) |
| **Override** | `formaction`, `formmethod`, `formtarget`, `formnovalidate` |
| **Mobile** | `inputmode`, `enterkeyhint` |
| **State** | `disabled`, `readonly`, `hidden` |
| **File** | `accept`, `multiple`, `capture` |
| **Association** | `form`, `name` |
