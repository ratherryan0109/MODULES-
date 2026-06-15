# HTML Forms Introduction — Cheatsheet

## Form Element

```html
<form action="/submit" method="POST">
    <!-- Form controls here -->
</form>
```

| Attribute | Values | Description |
|-----------|--------|-------------|
| `action` | URL | Where to send form data |
| `method` | `GET`, `POST` | HTTP method |
| `autocomplete` | `on`, `off` | Auto-fill form fields |
| `novalidate` | (boolean) | Skip HTML5 validation |
| `target` | `_self`, `_blank`, etc. | Where to display response |

## Input Types

| Type | HTML | Purpose |
|------|------|---------|
| Text | `<input type="text">` | Single-line text |
| Password | `<input type="password">` | Masked input |
| Email | `<input type="email">` | Email address |
| Number | `<input type="number">` | Numeric input |
| Checkbox | `<input type="checkbox">` | Multiple selection |
| Radio | `<input type="radio">` | Single selection |
| Submit | `<input type="submit">` | Form submission button |
| Reset | `<input type="reset">` | Reset form values |

## Label Element

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username">
```

| Attribute | Description |
|-----------|-------------|
| `for` | References input `id` |

## Form Controls

| Element | Description |
|---------|-------------|
| `<input>` | Versatile input control |
| `<textarea>` | Multi-line text |
| `<select>` | Dropdown list |
| `<button>` | Clickable button |
| `<fieldset>` | Groups related controls |
| `<legend>` | Caption for fieldset |

## Best Practices
- ✅ Always use `<label>` elements linked via `for` attribute
- ✅ Use `<fieldset>` and `<legend>` for grouping
- ✅ Provide clear error messages
- ✅ Use appropriate input types for better UX
- ❌ Don't rely solely on color for error states
- ❌ Don't disable copy/paste on password fields
- ❌ Don't forget to set `name` attribute on inputs
