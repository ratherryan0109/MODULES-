# Module 43: HTML Forms Introduction

## Introduction

HTML forms are the primary way users interact with web applications. They allow users to input data, make selections, submit information, and communicate with servers. Forms are the backbone of e-commerce checkouts, contact pages, login systems, search bars, surveys, and virtually every data-collection interface on the web.

Understanding forms requires knowledge of input types, form structure, validation, accessibility, and how data is sent to servers.

## Learning Objectives

By the end of this module, you will be able to:
- Create HTML forms using `<form>`, `<input>`, `<label>`, and related elements
- Understand the different input types and their purposes
- Implement form validation using HTML5 attributes
- Structure forms accessibly with proper labeling
- Handle form submission with GET and POST methods
- Style forms with CSS for better user experience

## Basic Form Structure

```html
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <button type="submit">Submit</button>
</form>
```

### Key Attributes

| Attribute | Description |
|-----------|-------------|
| `action` | URL where form data is sent |
| `method` | HTTP method (`get` or `post`) |
| `name` | Name of the form (for scripting) |
| `enctype` | Encoding type for file uploads |
| `novalidate` | Bypass HTML5 validation |
| `autocomplete` | Enable/disable autofill |

## Form Elements

### `<input>` Types

| Type | Purpose | Example |
|------|---------|---------|
| `text` | Single-line text | Name, username |
| `email` | Email address | `user@example.com` |
| `password` | Password (masked) | Hidden characters |
| `number` | Numeric input | Age, quantity |
| `tel` | Telephone number | `(555) 123-4567` |
| `url` | URL input | `https://example.com` |
| `search` | Search queries | Search bar |
| `date` | Date picker | `2026-06-12` |
| `time` | Time picker | `14:30` |
| `color` | Color picker | `#ff0000` |
| `range` | Slider | Volume control |
| `file` | File upload | Image upload |
| `checkbox` | Multiple selection | Interests |
| `radio` | Single selection | Gender |
| `hidden` | Hidden data | CSRF tokens |
| `submit` | Submit button | Send form |
| `reset` | Reset button | Clear form |

### `<textarea>` — Multi-line Text

```html
<label for="message">Message:</label>
<textarea id="message" name="message" rows="5" cols="40">
Default text here
</textarea>
```

### `<select>` and `<option>` — Dropdowns

```html
<label for="country">Country:</label>
<select id="country" name="country">
  <option value="">Select a country</option>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="uk">United Kingdom</option>
</select>
```

### `<button>` — Buttons

```html
<button type="submit">Submit</button>
<button type="reset">Reset</button>
<button type="button" onclick="doSomething()">Click Me</button>
```

## Form Accessibility

### Proper Labeling

```html
<!-- Correct: label with for -->
<label for="email">Email:</label>
<input type="email" id="email" name="email">

<!-- Correct: input nested in label -->
<label>
  Email:
  <input type="email" name="email">
</label>

<!-- Correct: aria-label -->
<input type="search" name="q" aria-label="Search">
```

### Fieldset and Legend for Grouping

```html
<fieldset>
  <legend>Shipping Address</legend>
  <label for="street">Street:</label>
  <input type="text" id="street" name="street">
  
  <label for="city">City:</label>
  <input type="text" id="city" name="city">
</fieldset>
```

### Required Fields and Error Messages

```html
<label for="username">
  Username <span aria-label="required">*</span>:
</label>
<input type="text" id="username" name="username" required
       aria-required="true"
       aria-describedby="username-hint">
<p id="username-hint" class="hint">At least 3 characters</p>
```

## HTML5 Validation Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `required` | Field must be filled | `required` |
| `minlength` | Minimum characters | `minlength="3"` |
| `maxlength` | Maximum characters | `maxlength="100"` |
| `min` | Minimum numeric value | `min="1"` |
| `max` | Maximum numeric value | `max="100"` |
| `step` | Increment step | `step="0.1"` |
| `pattern` | Regex pattern | `pattern="[A-Za-z]+"` |
| `multiple` | Allow multiple values | `multiple` |

```html
<input type="text" name="username" required minlength="3" maxlength="20" pattern="[A-Za-z0-9]+">
```

## Form Submission

### GET Method
```html
<form action="/search" method="get">
  <input type="search" name="q">
  <button type="submit">Search</button>
</form>
<!-- URL becomes: /search?q=search+term -->
```

### POST Method
```html
<form action="/submit" method="post">
  <input type="text" name="username">
  <input type="password" name="password">
  <button type="submit">Login</button>
</form>
<!-- Data sent in request body, not URL -->
```

## Styling Forms

```css
input, textarea, select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: #1a73e8;
  box-shadow: 0 0 0 2px rgba(26,115,232,0.2);
}

button[type="submit"] {
  background: #1a73e8;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.error {
  border-color: #d32f2f;
}

.error-message {
  color: #d32f2f;
  font-size: 0.875em;
}
```

## Common Mistakes

- **Missing `<label>` elements** — hurts accessibility
- **Using wrong input type** — e.g., `type="text"` for email
- **Forgetting `name` attribute** — data won't be submitted
- **Not grouping related fields** with `<fieldset>`
- **Relying only on client-side validation**
- **Using `placeholder` as a substitute for `<label>`**
- **Not handling form state** (loading, error, success)

## Best Practices

1. Always use `<label>` with `for` attribute
2. Use appropriate input types for mobile keyboards
3. Provide clear error messages inline
4. Use `<fieldset>` and `<legend>` for grouped inputs
5. Implement both client-side and server-side validation
6. Use `autocomplete` attributes for faster filling
7. Show password requirements in real-time
8. Disable submit button after submission (prevent double)
9. Show loading states during form processing
10. Test forms with screen readers

## Summary Notes

| Element | Purpose |
|---------|---------|
| `<form>` | Container for form elements |
| `<input>` | Various input types (text, email, password, etc.) |
| `<label>` | Associates text with a form control |
| `<textarea>` | Multi-line text input |
| `<select>` | Dropdown selection |
| `<button>` | Clickable button |
| `<fieldset>` | Groups related controls |
| `<legend>` | Caption for fieldset |
| `action` | Where form data is sent |
| `method` | How data is sent (get/post) |
