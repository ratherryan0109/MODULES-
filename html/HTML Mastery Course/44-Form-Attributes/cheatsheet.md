# HTML Form Attributes — Cheatsheet

## Form-Level Attributes

| Attribute | Values | Description |
|-----------|--------|-------------|
| `action` | URL path | Form submission endpoint |
| `method` | `GET` / `POST` | Request method |
| `enctype` | `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain` | Encoding type |
| `autocomplete` | `on` / `off` | Browser autofill |
| `novalidate` | (boolean) | Disable validation |
| `target` | `_self`, `_blank`, `_parent`, `_top` | Response display |

## Input Attributes

| Attribute | Values | Description |
|-----------|--------|-------------|
| `type` | text, email, password, etc. | Input type |
| `name` | string | Field name (submitted) |
| `value` | string | Default/current value |
| `placeholder` | string | Hint text inside field |
| `required` | (boolean) | Field must be filled |
| `disabled` | (boolean) | Not usable/submitted |
| `readonly` | (boolean) | View-only, still submitted |
| `maxlength` | number | Max character count |
| `minlength` | number | Min character count |
| `min` | number | Min value (number/date) |
| `max` | number | Max value (number/date) |
| `step` | number | Increment step (number) |
| `pattern` | regex | Validation regex |
| `autofocus` | (boolean) | Auto-focus on load |
| `autocomplete` | `on`/`off` | Per-field autocomplete |

## Global Form Attributes

| Attribute | Description |
|-----------|-------------|
| `form` | Associates input with form outside the `<form>` element |
| `formaction` | Overrides form's action for this input |
| `formmethod` | Overrides form's method for this input |
| `formenctype` | Overrides form's enctype for this input |
| `formnovalidate` | Overrides form's novalidate for this input |
| `formtarget` | Overrides form's target for this input |

## Encoding Types

| `enctype` | Use Case |
|------------|----------|
| `application/x-www-form-urlencoded` | Default (text only) |
| `multipart/form-data` | File uploads |
| `text/plain` | Debugging (not for production) |

## Best Practices
- ✅ Always set `name` attribute for form submission
- ✅ Use `required` for mandatory fields
- ✅ Set `maxlength` to prevent excessive input
- ✅ Use `pattern` for format validation
- ✅ Pair `autocomplete` with proper `name` values
- ❌ Don't use `disabled` if field should be submitted — use `readonly`
- ❌ Don't rely on `placeholder` as label replacement
- ❌ Don't disable native validation unless you have custom JS validation
