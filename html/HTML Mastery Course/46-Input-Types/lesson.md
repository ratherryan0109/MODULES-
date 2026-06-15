# Module 46: Input Types

## Introduction

HTML5 introduced a powerful set of input types that transform simple text fields into specialized controls with built-in validation, platform-specific keyboards on mobile devices, and native user interface widgets. Understanding each input type and its appropriate use case is essential for creating intuitive, accessible, and functional web forms.

Input types handle everything from text and numbers to dates, colors, and files — each with its own behavior, validation rules, and visual presentation. The right input type can dramatically improve user experience by reducing errors, accelerating data entry, and leveraging platform-native features.

## Learning Objectives

By the end of this module, you will be able to:

- Distinguish between all 22+ HTML input types and their use cases
- Implement text-based types: text, password, email, tel, url, search
- Implement numeric types: number, range
- Implement date/time types: date, datetime-local, month, week, time
- Implement choice types: checkbox, radio
- Implement special types: file, color, hidden, image
- Implement button types: submit, reset, button
- Apply best practices for cross-browser compatibility

## Input Type Categories

HTML input types can be organized into logical categories based on the kind of data they collect:

### 1. Text-Based Types

```html
<!-- Standard single-line text input -->
<input type="text" name="username" placeholder="Username">

<!-- Email with automatic validation -->
<input type="email" name="email" placeholder="user@example.com">

<!-- Masked password field -->
<input type="password" name="password" autocomplete="current-password">

<!-- Telephone (triggers numeric keypad on mobile) -->
<input type="tel" name="phone" placeholder="+1 (555) 000-0000">

<!-- URL with validation -->
<input type="url" name="website" placeholder="https://example.com">

<!-- Search with clear button -->
<input type="search" name="query" placeholder="Search...">
```

### 2. Numeric Types

```html
<!-- Number with increment controls -->
<input type="number" name="quantity" min="1" max="100" step="1" value="1">

<!-- Range slider -->
<input type="range" name="volume" min="0" max="100" value="50">
```

### 3. Date and Time Types

```html
<!-- Date picker (YYYY-MM-DD) -->
<input type="date" name="birthday">

<!-- Date and time picker -->
<input type="datetime-local" name="appointment">

<!-- Month picker (YYYY-MM) -->
<input type="month" name="billing_month">

<!-- Week picker (YYYY-Www) -->
<input type="week" name="deadline_week">

<!-- Time picker (HH:MM) -->
<input type="time" name="meeting_time">
```

### 4. Choice Types

```html
<!-- Checkbox (boolean/multiple selection) -->
<input type="checkbox" name="subscribe" value="yes" id="subscribe">
<label for="subscribe">Subscribe to newsletter</label>

<!-- Radio (single selection from group) -->
<input type="radio" name="gender" value="male" id="male">
<label for="male">Male</label>
<input type="radio" name="gender" value="female" id="female">
<label for="female">Female</label>
```

### 5. Special Types

```html
<!-- File upload -->
<input type="file" name="document" accept=".pdf,.doc">

<!-- Color picker -->
<input type="color" name="theme_color" value="#3498db">

<!-- Hidden data carrier -->
<input type="hidden" name="csrf_token" value="abc123">

<!-- Image as submit button -->
<input type="image" src="submit.png" alt="Submit">
```

### 6. Button Types

```html
<!-- Submit form -->
<input type="submit" value="Save Changes">

<!-- Reset form to initial values -->
<input type="reset" value="Clear All">

<!-- Generic button (requires JavaScript) -->
<input type="button" value="Click Me" onclick="alert('Hello!')">
```

## Detailed Type Reference

### `type="text"`
The default input type. Renders a single-line text field.

```html
<input type="text" name="city" maxlength="50" placeholder="Enter city name">
```
- Validation: None by default
- Mobile keyboard: Standard alphanumeric
- Use for: Short free-text responses

### `type="password"`
Text input where characters are masked (typically shown as dots or asterisks).

```html
<input type="password" name="password" minlength="8" autocomplete="new-password">
```
- Validation: None by default
- Security: Not encrypted in transit — use HTTPS
- Use for: Passwords, PINs, secret data

### `type="email"`
Text input with email format validation. Triggers @-keyboard on mobile.

```html
<input type="email" name="email" multiple placeholder="a@b.com, c@d.com">
```
- Validation: Checks for `@` and domain presence
- `multiple` attribute allows comma-separated emails
- Use for: Email addresses

### `type="tel"`
Text input for telephone numbers. No automatic validation.

```html
<input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
```
- Validation: None by default — use `pattern` for format
- Mobile keyboard: Numeric keypad
- Use for: Phone numbers (always combine with `pattern`)

### `type="url"`
Text input with URL validation.

```html
<input type="url" name="website" placeholder="https://example.com">
```
- Validation: Checks for valid URL protocol (http://, https://)
- Mobile keyboard: URL-optimized (including / and .com keys)
- Use for: Website URLs

### `type="search"`
Text input styled as a search field. Some browsers add a clear button.

```html
<input type="search" name="q" placeholder="Search..." aria-label="Search site">
```
- Validation: None
- Appearance: May include clear (×) button
- Use for: Search fields

### `type="number"`
Numeric input with increment/decrement controls (spinner).

```html
<input type="number" name="age" min="0" max="150" step="1" value="25">
```
- Validation: Must be a valid number within min/max range
- Mobile keyboard: Numeric keypad
- `step` attribute controls increment granularity
- Use for: Quantities, ages, scores

### `type="range"`
Slider control for selecting a value from a range.

```html
<input type="range" name="volume" min="0" max="100" value="75" step="5">
```
- No default browser display of current value (needs JavaScript)
- Access value via `inputElement.value` or event listener
- Use for: Settings, filters, volume controls

### `type="date"`
Calendar date picker returning YYYY-MM-DD format.

```html
<input type="date" name="dob" min="1900-01-01" max="2025-12-31">
```
- Browser renders a native date picker calendar
- Value format: YYYY-MM-DD
- Supported in all modern browsers

### `type="datetime-local"`
Date and time combined picker (no timezone).

```html
<input type="datetime-local" name="event_start">
```
- Value format: YYYY-MM-DDTHH:MM
- No timezone information — use UTC or separate timezone input

### `type="month"`
Month and year picker (no day).

```html
<input type="month" name="expiry">
```
- Value format: YYYY-MM

### `type="week"`
Week number and year picker.

```html
<input type="week" name="sprint_week">
```
- Value format: YYYY-Www (e.g., 2025-W14)

### `type="time"`
Time picker (no date, no timezone).

```html
<input type="time" name="appointment" step="900">
```
- Value format: HH:MM or HH:MM:SS
- `step` attribute in seconds (900 = 15-minute intervals)

### `type="checkbox"`
Boolean toggle — checked or unchecked. Multiple checkboxes can share a name.

```html
<input type="checkbox" name="toppings" value="cheese" checked>
<input type="checkbox" name="toppings" value="pepperoni">
```
- `checked` attribute sets initial state
- Only checked values are submitted
- Use for: Yes/no options, multiple selections

### `type="radio"`
Single selection from a group. Must share the same `name`.

```html
<input type="radio" name="size" value="small" id="small">
<input type="radio" name="size" value="medium" id="medium" checked>
<input type="radio" name="size" value="large" id="large">
```
- Only one radio in a name-group can be selected
- One radio should have `checked` for a default
- Use for: Mutually exclusive choices

### `type="file"`
File selection control with optional file type filtering.

```html
<input type="file" name="resume" accept=".pdf,.docx" multiple>
```
- Form must use `enctype="multipart/form-data"` and `method="POST"`
- `accept` filters file types (MIME or extension)
- `multiple` allows selecting multiple files
- Access via JavaScript `files` property (FileList)

### `type="color"`
Color picker returning a hex color value.

```html
<input type="color" name="bg_color" value="#3498db">
```
- Value format: #RRGGBB (7-character hex)
- Default value: #000000 (black) or #ffffff (white) depending on browser
- Use for: Theme customization, visual settings

### `type="hidden"`
Invisible input that stores data not meant for user interaction.

```html
<input type="hidden" name="session_id" value="xyz789">
```
- Not displayed — but visible in HTML source
- Value is submitted with form
- NOT secure — visible in dev tools
- Use for: CSRF tokens, page state, identifiers

### `type="submit"`
Button that submits the form.

```html
<input type="submit" value="Register">
```
- Triggers form submission
- Can be overridden with `formaction`, `formmethod`, `formnovalidate`
- Use for: Primary form submission

### `type="reset"`
Button that resets all form controls to their initial values.

```html
<input type="reset" value="Clear Form">
```
- Resets to HTML `value` attributes (not empty)
- Use caution — users may accidentally clear data

### `type="button"`
Generic button with no default behavior.

```html
<input type="button" value="Calculate" onclick="calculateTotal()">
```
- Requires JavaScript for functionality
- Use for: Custom actions within forms

### `type="image"`
Image that acts as a submit button. Click coordinates are submitted.

```html
<input type="image" src="submit-btn.png" alt="Submit" width="200" height="50">
```
- Submits form plus click coordinates (x, y)
- Requires `src` and `alt` attributes
- Use for: Custom graphical submit buttons

## Cross-Browser Compatibility

While most modern browsers support all HTML5 input types, some fall back to `type="text"` on unsupported browsers. Always provide fallback handling:

```html
<input type="date" name="birthday" placeholder="YYYY-MM-DD" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}">
```

## Mobile Keyboard Triggers

| Input Type | Mobile Keyboard |
|------------|-----------------|
| `text` | Standard alphanumeric |
| `email` | @ and .com shortcut keys |
| `tel` | Numeric keypad |
| `url` | / and .com shortcut keys |
| `number` | Numeric keypad |
| `search` | Search button in keyboard |

## Best Practices

1. **Always use the most specific type** — `email` over `text` for emails
2. **Combine with `pattern` for format validation** — especially for `tel`
3. **Set `autocomplete` for password managers** — `current-password`, `new-password`
4. **Use `min`/`max` for numeric and date constraints** — prevents invalid submissions
5. **Display range values** — use JavaScript `oninput` to show current slider value
6. **Accept image files with `accept="image/*"`** — for avatar/profile uploads
7. **Never trust hidden inputs** — they are visible in HTML source
8. **Set default `checked` for radios** — ensures one option is always selected
9. **Provide fallback for unsupported types** — use `pattern` and `placeholder`
10. **Use `inputmode` as a hint** — doesn't replace proper `type`, but helps on mobile

## Common Mistakes

1. Using `type="number"` for phone numbers (loses leading zeros and formatting)
2. Forgetting `enctype="multipart/form-data"` for file uploads
3. Not providing a default `checked` radio button (nothing selected by default)
4. Using hidden inputs for security-sensitive data
5. Relying solely on client-side `type` validation (always validate server-side)
6. Not handling unsupported date/time types gracefully

## Summary Notes

- HTML5 introduced many specialized input types beyond `text`
- Use types to trigger appropriate mobile keyboards and native UI widgets
- `type="email"`, `url`, and `number` provide built-in browser validation
- Choice types (checkbox, radio) use `checked` attribute, not `value`
- File uploads require `enctype="multipart/form-data"` on the form
- Unsupported types degrade gracefully to `type="text"`
- Hidden inputs are visible in source code — never use for secrets
- Range inputs need JavaScript to display the current value
- The `multiple` attribute works with `email` and `file` types
- Always combine type validation with server-side validation
