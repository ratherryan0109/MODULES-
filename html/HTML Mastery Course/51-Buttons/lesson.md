# Module 51: Buttons

## Introduction

Buttons are interactive elements that trigger actions when clicked — submitting forms, resetting fields, opening dialogs, or executing JavaScript. HTML provides the `<button>` element and several `<input>` type-based buttons (`submit`, `reset`, `button`, `image`). Understanding the differences, use cases, and best practices for each is essential for building accessible, functional web interfaces.

## Learning Objectives

- Distinguish between `<button>` and `<input>` button types
- Implement `type="submit"`, `reset`, `button`, and `image` buttons correctly
- Style buttons consistently across browsers
- Use button attributes like `formaction`, `formmethod`, `formnovalidate`
- Implement accessible button patterns
- Handle button events and states (disabled, loading, active)

## Button Elements vs Input Buttons

```html
<!-- <button> element — can contain HTML -->
<button type="submit">Save <span>Changes</span></button>

<!-- <input> button — self-closing, text only -->
<input type="submit" value="Save Changes">
```

## Button Types

### `<button type="submit">` (Default)

```html
<button type="submit">Submit Form</button>
<!-- If type is omitted, default is submit -->
<button>Submit Form</button>  <!-- Also submits! -->
```

### `<button type="reset">`

```html
<button type="reset">Clear All</button>
```

### `<button type="button">`

```html
<button type="button" onclick="doSomething()">Click Me</button>
```

### `<input type="submit">`

```html
<input type="submit" value="Submit">
```

### `<input type="reset">`

```html
<input type="reset" value="Reset Form">
```

### `<input type="button">`

```html
<input type="button" value="Click" onclick="alert('Clicked!')">
```

### `<input type="image">`

```html
<input type="image" src="submit-icon.png" alt="Submit">
```

## Key Attributes

| Attribute | On | Effect |
|-----------|-----|--------|
| `type` | button/input | `submit`, `reset`, `button` |
| `value` | input | Button label text |
| `disabled` | both | Disable the button |
| `autofocus` | both | Auto-focus on load |
| `form` | both | Associate with form by ID |
| `formaction` | submit | Override form action URL |
| `formmethod` | submit | Override form method (GET/POST) |
| `formenctype` | submit | Override form encoding |
| `formtarget` | submit | Override form target |
| `formnovalidate` | submit | Skip validation |
| `name` | both | Button name for submission |
| `popovertarget` | both | Target popover ID |
| `popovertargetaction` | both | `show`, `hide`, `toggle` |

## Button States

```html
<!-- Normal -->
<button type="submit">Submit</button>

<!-- Disabled -->
<button type="submit" disabled>Submit</button>

<!-- Loading (requires JavaScript) -->
<button type="submit" id="submitBtn" onclick="handleSubmit(this)">
  <span class="btn-text">Submit</span>
  <span class="spinner" style="display:none;">⏳</span>
</button>
```

## Styling Buttons

```css
button, input[type="submit"],
input[type="reset"], input[type="button"] {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

button:hover { opacity: 0.9; }
button:active { transform: scale(0.98); }
button:focus-visible { outline: 3px solid #4a6cf7; outline-offset: 2px; }
button:disabled { opacity: 0.5; cursor: not-allowed; }
```

## Button Accessibility

```html
<!-- Always provide descriptive text -->
<button type="button" aria-label="Close dialog">✕</button>

<!-- For icon-only buttons -->
<button type="button" aria-label="Add to favorites">
  <svg><!-- heart icon --></svg>
</button>

<!-- Disabled state for screen readers -->
<button type="submit" disabled aria-disabled="true">Submit</button>
```

## Best Practices

1. **Always specify `type`** — buttons default to `submit`, which can accidentally submit forms
2. **Use `<button>` over `<input type="button">`** — `<button>` can contain HTML, is easier to style
3. **Style all button states** — normal, hover, active, focus, disabled
4. **Add `aria-label` for icon buttons** — icon-only buttons need accessible names
5. **Disable buttons during form submission** — prevent double-submission
6. **Show loading state** — indicate processing with spinner or text change
7. **Use `formnovalidate` for cancel buttons** — allows navigating away from incomplete forms
8. **Space buttons properly** — adjacent buttons need consistent spacing (8-16px gap)
9. **Use `type="button"` for non-form actions** — prevents unintended form submission
10. **Set `cursor: pointer`** — indicates clickability

## Summary Notes

- `<button>` elements can contain HTML content; `<input>` buttons show only text
- Default `type` for `<button>` is `submit` — always specify the type
- `formaction` and `formmethod` allow per-button overrides of form behavior
- `disabled` buttons cannot be clicked and are excluded from tab order
- Icon buttons need `aria-label` for accessibility
- Loading states prevent double-submission
- Use `formnovalidate` on Cancel/Clear buttons to bypass validation
- CSS `appearance: none` can help with cross-browser consistency
- Button text should clearly describe the action ("Save", "Delete", not "Click Here")
- Form submission buttons should be visually prominent (primary action)
