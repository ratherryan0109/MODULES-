# Module 54: Form Validation

## Introduction

Form validation is the process of ensuring that user-submitted data meets specified requirements before it is sent to a server. HTML5 provides built-in constraint validation that allows developers to enforce rules like required fields, specific input types, pattern matching, and value ranges — all without JavaScript. This module covers both HTML5 native validation and JavaScript-based custom validation, from basic required fields to complex real-time validation logic.

## Learning Objectives

By the end of this module, you will be able to:
- Implement HTML5 constraint validation using built-in attributes
- Use pattern matching with regular expressions for custom input formats
- Apply validation attributes like required, minlength, maxlength, min, max, and step
- Customize validation error messages using JavaScript
- Build real-time validation with input events
- Create custom validation rules with setCustomValidity()
- Understand the Constraint Validation API (validity object)
- Implement form validation UX best practices
- Style valid/invalid states with CSS pseudo-classes
- Handle form submission with validation checks

## Theory

### What is Form Validation?

Form validation checks user input against rules before processing. It can happen on the client-side (in the browser) or server-side (on the server). Client-side validation provides immediate feedback, improving user experience. Server-side validation is essential for security, as client-side validation can be bypassed.

### HTML5 Constraint Validation

HTML5 introduced a built-in validation system called "Constraint Validation." It uses attributes on form elements to define constraints, and the browser automatically checks these constraints when the form is submitted.

### The Constraint Validation API

The Constraint Validation API provides JavaScript access to form element validity states:

- `HTMLInputElement.validity` — A ValidityState object with boolean properties
- `HTMLInputElement.validationMessage` — The localized validation message
- `HTMLInputElement.checkValidity()` — Returns true/false and fires an invalid event
- `HTMLInputElement.reportValidity()` — Same as checkValidity but shows the message
- `HTMLInputElement.setCustomValidity(message)` — Sets a custom validation message

### The ValidityState Object

| Property           | Description                                      |
|--------------------|--------------------------------------------------|
| `valueMissing`     | Required field is empty                          |
| `typeMismatch`     | Value doesn't match type (email, url, etc.)      |
| `patternMismatch`  | Value doesn't match the pattern regex            |
| `tooLong`          | Value exceeds maxlength                          |
| `tooShort`         | Value is shorter than minlength                  |
| `rangeUnderflow`   | Value is less than min                           |
| `rangeOverflow`    | Value is greater than max                        |
| `stepMismatch`     | Value doesn't match step increment               |
| `badInput`         | Browser cannot parse the value                   |
| `customError`      | A custom validity message was set                |
| `valid`            | All constraints pass (true/false)                |

## Syntax

### Basic Validation Attributes

```html
<!-- Required field -->
<input type="text" required>

<!-- Pattern matching -->
<input type="text" pattern="[A-Za-z]+" title="Letters only">

<!-- Length constraints -->
<input type="text" minlength="3" maxlength="20">

<!-- Number range -->
<input type="number" min="0" max="100" step="1">

<!-- Type validation -->
<input type="email">
<input type="url">
<input type="tel">
<input type="number">
```

### Complete Form with Validation

```html
<form id="registerForm" novalidate>
  <label>Username:
    <input type="text" name="username" required
           minlength="3" maxlength="20"
           pattern="[A-Za-z0-9_]+"
           title="Letters, numbers, and underscores only">
  </label>
  <label>Email:
    <input type="email" name="email" required>
  </label>
  <label>Age:
    <input type="number" name="age" min="13" max="120" required>
  </label>
  <button type="submit">Register</button>
</form>
```

### JavaScript Validation

```javascript
const form = document.getElementById('registerForm');
const email = document.getElementById('email');

form.addEventListener('submit', function(e) {
  if (!this.checkValidity()) {
    e.preventDefault();
    // Show errors
  }
});

email.addEventListener('input', function() {
  if (this.validity.typeMismatch) {
    this.setCustomValidity('Please enter a valid email address');
  } else {
    this.setCustomValidity('');
  }
});
```

## Examples

### Example 1: Required Field with Custom Error

```html
<input type="text" id="name" required>
<script>
  document.getElementById('name').addEventListener('input', function() {
    if (this.validity.valueMissing) {
      this.setCustomValidity('Name is required!');
    } else {
      this.setCustomValidity('');
    }
  });
</script>
```

### Example 2: Password Confirmation (Custom)

```html
<input type="password" id="password" required minlength="8">
<input type="password" id="confirm" required>
<script>
  document.getElementById('confirm').addEventListener('input', function() {
    if (this.value !== document.getElementById('password').value) {
      this.setCustomValidity('Passwords must match');
    } else {
      this.setCustomValidity('');
    }
  });
</script>
```

### Example 3: Styled Validation States

```css
input:valid { border-color: #4caf50; }
input:invalid { border-color: #f44336; }
input:focus:invalid { box-shadow: 0 0 0 3px rgba(244,67,54,0.2); }
```

## Common Mistakes

1. **Relying only on client-side validation**: Always validate on the server too. Client-side validation is a UX feature, not a security measure.

2. **Using `novalidate` without custom validation**: The `novalidate` attribute disables all native validation. Only use it if you replace it with robust custom validation.

3. **Forgetting the `title` attribute with `pattern`**: The `title` attribute provides guidance on the expected format. Without it, pattern mismatch errors show a generic message.

4. **Not handling the `invalid` event**: The `invalid` event fires on each invalid element during validation. Listen for it to apply custom error display logic.

5. **Over-validating during input**: Validating on every keystroke can be annoying. Use `blur` for field-level validation and save full validation for submission.

6. **Ignoring accessibility**: Error messages must be associated with inputs using `aria-describedby` or similar techniques.

7. **Wrong number types**: Using `type="number"` for phone numbers or ZIP codes is wrong. These should be `type="tel"` or `type="text"` with pattern.

8. **Not resetting custom validity**: `setCustomValidity('')` must be called to clear a custom error. An empty string means no error.

9. **Inconsistent validation**: If multiple fields relate to each other (like password/confirm), validate them together, not individually.

10. **Not providing helpful error messages**: "Invalid input" is useless. "Password must be at least 8 characters" is helpful.

## Best Practices

1. **Use HTML5 validation attributes first** — they work without JavaScript and cover most cases.

2. **Add real-time validation on `blur`** — validate when the user leaves a field, not on every keystroke.

3. **Show all errors at once** on form submission, not one at a time.

4. **Use `aria-describedby`** to associate error messages with inputs for screen readers.

5. **Provide clear, specific error messages** — tell the user what's wrong and how to fix it.

6. **Use `novalidate` only when building fully custom validation** — but ensure your custom validation is thorough.

7. **Style valid/invalid states** with CSS pseudo-classes for immediate visual feedback.

8. **Validate on the server** — always, without exception.

9. **Use the `pattern` attribute** with a descriptive `title` for complex format validation.

10. **Keep validation messages concise** and positioned near the relevant field.

## Summary Notes

- HTML5 constraint validation uses attributes: required, pattern, min, max, minlength, maxlength, step
- The ValidityState object provides detailed validation status
- `setCustomValidity()` creates custom validation messages
- CSS pseudo-classes `:valid` and `:invalid` style validation states
- Always pair client-side validation with server-side validation
- The `invalid` event fires per-element during validation
- Use `checkValidity()` and `reportValidity()` for programmatic validation
- The `novalidate` attribute on `<form>` disables native validation
- Accessibility: associate errors with inputs via `aria-describedby`
- Real-time validation on `blur` is better UX than on every keystroke
