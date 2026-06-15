# Input Types — Cheatsheet

## All Input Types Reference

| Type | Category | Value Format | Browser UI | Validation |
|------|----------|-------------|------------|------------|
| `text` | Text | Plain string | Text field | None |
| `password` | Text | Plain string | Masked field | None |
| `email` | Text | user@domain | Text field | @ + domain |
| `tel` | Text | Plain string | Text field | None |
| `url` | Text | protocol://path | Text field | URL protocol |
| `search` | Text | Plain string | Search field | None |
| `number` | Numeric | Number | Spinner | Numeric only |
| `range` | Numeric | Number | Slider | Min/max |
| `date` | Date/Time | YYYY-MM-DD | Calendar | Date format |
| `datetime-local` | Date/Time | YYYY-MM-DDTHH:MM | Calendar+clock | Format |
| `month` | Date/Time | YYYY-MM | Month picker | Format |
| `week` | Date/Time | YYYY-Www | Week picker | Format |
| `time` | Date/Time | HH:MM | Clock | Format |
| `checkbox` | Choice | on (if checked) | Checkbox | None |
| `radio` | Choice | value | Radio circle | None |
| `file` | Special | File data | File picker | Accept filter |
| `color` | Special | #RRGGBB | Color picker | Hex format |
| `hidden` | Special | value | None | None |
| `submit` | Button | N/A | Button | N/A |
| `reset` | Button | N/A | Button | N/A |
| `button` | Button | N/A | Button | N/A |
| `image` | Button | x,y coordinates | Image | N/A |

## Mobile Keyboards

```
type="text"      → Standard alphanumeric
type="email"     → @ and .com shortcuts
type="tel"       → Numeric keypad (0-9, +, #, *)
type="url"       → / and .com shortcuts
type="number"    → Numeric keypad (0-9, .)
type="search"    → Search button in keyboard
```

## File Input Accept Values

```html
<!-- Image files -->
accept="image/*"
accept="image/png, image/jpeg"

<!-- Documents -->
accept=".pdf,.doc,.docx"
accept="application/pdf, application/msword"

<!-- All files -->
accept="*/*"

<!-- Media -->
accept="audio/*"         <!-- Audio files -->
accept="video/*"         <!-- Video files -->
accept="audio/*,video/*" <!-- Both -->

<!-- Specific MIME types -->
accept=".jpg,.jpeg,.png,.gif,.webp"
```

## Date/Time Value Formats

```
date:            2025-04-15          (YYYY-MM-DD)
datetime-local:  2025-04-15T14:30    (YYYY-MM-DDTHH:MM)
month:           2025-04             (YYYY-MM)
week:            2025-W16            (YYYY-Www)
time:            14:30               (HH:MM)
time (with sec): 14:30:00            (HH:MM:SS)
```

## Validation Attributes by Type

| Type | min | max | step | minlength | maxlength | pattern | required |
|------|-----|-----|------|-----------|-----------|---------|----------|
| text | - | - | - | ✓ | ✓ | ✓ | ✓ |
| email | - | - | - | ✓ | ✓ | ✓ | ✓ |
| tel | - | - | - | ✓ | ✓ | ✓ | ✓ |
| url | - | - | - | ✓ | ✓ | ✓ | ✓ |
| number | ✓ | ✓ | ✓ | - | - | - | ✓ |
| range | ✓ | ✓ | ✓ | - | - | - | - |
| date | ✓ | ✓ | ✓ | - | - | - | ✓ |
| time | ✓ | ✓ | ✓ | - | - | - | ✓ |
| password | - | - | - | ✓ | ✓ | ✓ | ✓ |
| search | - | - | - | ✓ | ✓ | - | ✓ |

## Quick Examples

```html
<!-- Text Inputs -->
<input type="text" name="username" maxlength="50">
<input type="password" name="pwd" autocomplete="new-password" minlength="8">
<input type="email" name="email" multiple placeholder="a@b.com">
<input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
<input type="url" name="site" placeholder="https://">

<!-- Numeric -->
<input type="number" name="qty" min="1" max="100" step="1" value="1">
<input type="range" name="vol" min="0" max="100" value="50" oninput="output.value=this.value">
<output id="output">50</output>

<!-- Date/Time -->
<input type="date" name="dob" min="1900-01-01" max="2010-12-31">
<input type="time" name="time" step="900">  <!-- 15-min intervals -->
<input type="datetime-local" name="event">
<input type="month" name="billing">
<input type="week" name="sprint">

<!-- Choice -->
<input type="checkbox" name="agree" checked>
<input type="radio" name="size" value="M" checked>

<!-- File -->
<input type="file" accept="image/*" multiple>

<!-- Special -->
<input type="color" value="#ff0000">
<input type="hidden" name="token" value="xyz">

<!-- Buttons -->
<input type="submit" value="Save">
<input type="reset" value="Clear">
<input type="button" value="Click" onclick="doSomething()">
<input type="image" src="btn.png" alt="Submit">
```

## Common Pitfalls

| Mistake | Why It's Wrong | Correct Approach |
|---------|---------------|------------------|
| `type="number"` for phone | Loses leading zeros, no formatting | `type="tel"` with `pattern` |
| No `enctype` for file upload | File data not sent | `enctype="multipart/form-data"` |
| Hidden inputs for secrets | Visible in HTML source | Server-side validation |
| No default checked radio | Nothing selected | One radio with `checked` |
| Relying only on client validation | Can be bypassed | Always validate server-side |
