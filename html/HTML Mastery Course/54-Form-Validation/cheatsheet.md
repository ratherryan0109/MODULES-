# Form Validation — Cheatsheet

## HTML5 Validation Attributes

| Attribute     | Applies To          | Description                                    |
|---------------|---------------------|------------------------------------------------|
| `required`    | input, select, textarea | Field must have a value                    |
| `pattern`     | text inputs         | Value must match a regular expression          |
| `minlength`   | text, textarea      | Minimum character length                       |
| `maxlength`   | text, textarea      | Maximum character length                       |
| `min`         | number, date, range | Minimum acceptable value                       |
| `max`         | number, date, range | Maximum acceptable value                       |
| `step`        | number, date, range | Incremental step between values                |
| `type`        | input               | Built-in validation (email, url, number, tel)  |
| `multiple`    | email, file         | Accept multiple values (comma-separated)       |

## Input Types with Built-in Validation

```html
<input type="email">     <!-- Validates email format -->
<input type="url">       <!-- Validates URL format -->
<input type="number">    <!-- Validates numeric input -->
<input type="tel">       <!-- Validates telephone (pattern recommended) -->
<input type="date">      <!-- Validates date format -->
<input type="time">      <!-- Validates time format -->
<input type="color">     <!-- Validates hex color -->
```

## Basic Form Template

```html
<form id="myForm" novalidate>
  <label>Username:
    <input type="text" name="username" required
           minlength="3" maxlength="20"
           pattern="[A-Za-z0-9_]+"
           title="Letters, numbers, underscores">
  </label>
  <button type="submit">Submit</button>
</form>
```

## Constraint Validation API

### ValidityState Properties

```javascript
const input = document.getElementById('myInput');
const v = input.validity;

v.valid             // true if ALL constraints pass
v.valueMissing      // required field is empty
v.typeMismatch      // wrong type (email, url, etc.)
v.patternMismatch   // doesn't match pattern regex
v.tooLong           // exceeds maxlength
v.tooShort          // shorter than minlength
v.rangeUnderflow    // less than min
v.rangeOverflow     // greater than max
v.stepMismatch      // doesn't match step increment
v.badInput          // browser can't parse value
v.customError       // custom validity message set
```

### Key Methods

```javascript
input.checkValidity()        // Returns boolean, fires invalid event
input.reportValidity()       // Same as above + shows error UI
input.setCustomValidity(msg) // Set/clear custom error ('' clears it)
form.checkValidity()         // Check all fields in form
form.reportValidity()        // Check all + show errors
form.requestSubmit()         // Submit with validation (preferred)
form.submit()                // Submit WITHOUT validation
```

### Events

```javascript
input.addEventListener('invalid', (e) => {
  e.preventDefault();  // Prevent default error bubble
  showCustomError(input);
});

form.addEventListener('submit', (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
    // Handle errors
  }
});
```

## Custom Validation Examples

### Password Match

```javascript
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');

confirm.addEventListener('input', () => {
  if (confirm.value !== password.value) {
    confirm.setCustomValidity('Passwords must match');
  } else {
    confirm.setCustomValidity('');
  }
});
```

### Custom Error Messages

```javascript
email.addEventListener('input', () => {
  if (email.validity.valueMissing) {
    email.setCustomValidity('Please enter your email');
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity('Enter a valid email (user@domain.com)');
  } else {
    email.setCustomValidity('');
  }
});
```

## CSS Validation Styling

```css
/* Validation states */
input:valid { border-color: #4caf50; }
input:invalid { border-color: #e0e0e0; }
input:focus:invalid { border-color: #f44336; }
input:required { border-left: 3px solid #ff9800; }

/* Placeholder styling when invalid */
input:invalid:placeholder-shown { border-color: #ddd; }

/* Custom error element */
.error-msg {
  color: #e74c3c;
  font-size: 12px;
  display: none;
}
.error-msg.show { display: block; }
```

## Real-Time Validation Pattern

```javascript
function setupField(input, errorEl) {
  // Validate on blur
  input.addEventListener('blur', () => {
    if (input.validity.valid) {
      input.classList.remove('invalid');
      input.classList.add('valid');
      errorEl.style.display = 'none';
    } else {
      input.classList.add('invalid');
      input.classList.remove('valid');
      errorEl.textContent = input.validationMessage;
      errorEl.style.display = 'block';
    }
  });

  // Clear error on input
  input.addEventListener('input', () => {
    if (input.validity.valid) {
      input.classList.add('valid');
      input.classList.remove('invalid');
      errorEl.style.display = 'none';
    }
  });
}
```

## Accessibility Best Practices

```html
<!-- Associate error with input via aria-describedby -->
<label for="email">Email</label>
<input type="email" id="email" aria-describedby="email-error" required>
<span id="email-error" role="alert" class="error-msg">
  Please enter a valid email
</span>
```

## Form Submission Pattern

```javascript
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    // Focus first invalid field
    const firstInvalid = form.querySelector(':invalid');
    firstInvalid?.focus();
    return;
  }

  // Submit data
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: new FormData(form)
    });
    if (!response.ok) throw new Error('Server error');
    showSuccess();
  } catch (err) {
    showServerError(err.message);
  }
});
```

## Common Regex Patterns

```javascript
const patterns = {
  email:    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  url:      /^https?:\/\/.+/,
  phone:    /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$/,
  zip5:     /^[0-9]{5}$/,
  zip9:     /^[0-9]{5}(-[0-9]{4})?$/,
  hexColor: /^#[0-9A-Fa-f]{6}$/,
  username: /^[A-Za-z0-9_]{3,20}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  creditCard: /^\d{13,19}$/,
  timeHHMM: /^([01]\d|2[0-3]):[0-5]\d$/,
};
```

## Validation Triggers Comparison

| Trigger  | User Experience      | Use Case                     |
|----------|---------------------|------------------------------|
| `submit` | Instant on submit   | Simple forms                 |
| `blur`   | On leaving a field  | Most forms — balanced UX     |
| `input`  | Every keystroke     | Password strength, counters  |
| `change` | After value change  | Select dropdowns, file inputs|

## Security Rules

| Rule                   | Client | Server |
|------------------------|--------|--------|
| Required fields        | ✅     | ✅     |
| Format validation      | ✅     | ✅     |
| Length limits          | ✅     | ✅     |
| Range checks           | ✅     | ✅     |
| SQL Injection prevention| ❌    | ✅     |
| XSS prevention         | ❌     | ✅     |
| Business rules         | ❌     | ✅     |
| Rate limiting          | ❌     | ✅     |
