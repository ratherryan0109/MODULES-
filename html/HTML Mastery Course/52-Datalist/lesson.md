# The Datalist Element

## What is a Datalist?
The `<datalist>` element provides a set of predefined `<option>` suggestions for an `<input>` element. Unlike a `<select>` dropdown, the user can still type free-form text — the datalist only offers suggestions, not restrictions.

```html
<label for="browser">Choose a browser:</label>
<input list="browsers" id="browser" name="browser">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Edge">
  <option value="Safari">
  <option value="Opera">
</datalist>
```

## How It Works

The `<input>` element uses the `list` attribute, whose value must match the `id` of the `<datalist>`. When the user types in the input, the browser filters the options and displays matching suggestions in a dropdown.

- **Not a select replacement** — the user can enter values not in the list
- **Filters as you type** — browsers show matching options dynamically
- **Read-only input + datalist** — can simulate a searchable select if input is readonly, but better to use proper combobox pattern

## Input Types That Support Datalist

| Input Type | Behavior |
|-----------|----------|
| `text` | Text suggestions |
| `search` | Search query suggestions |
| `url` | URL suggestions |
| `tel` | Phone number suggestions |
| `email` | Email suggestions |
| `number` | Numeric suggestions |
| `range` | Shows labeled tick marks |
| `color` | Color suggestions |
| `date`, `time`, `week`, `month` | Date/time suggestions |

## Datalist Attributes

### `<datalist>` Attributes
- `id` — must match the `list` attribute of the associated `<input>`

### `<option>` Attributes
- `value` — the suggestion text/value
- `label` — an optional descriptive label shown alongside the value

```html
<input list="countries" id="country" name="country">
<datalist id="countries">
  <option value="US" label="United States">
  <option value="CA" label="Canada">
  <option value="MX" label="Mexico">
</datalist>
```

### Option with No Value
If `<option>` has no `value` attribute, the `label` becomes the suggestion:
```html
<datalist id="colors">
  <option label="Red">
  <option label="Green">
  <option label="Blue">
</datalist>
```

## Datalist vs Select vs Combobox

| Feature | Datalist | Select | Combobox (ARIA) |
|---------|----------|--------|-----------------|
| Free text input | Yes | No | Yes |
| Must choose from list | No | Yes | Configurable |
| Filter as you type | Built-in | No | Custom JS |
| Stylable | Limited | Somewhat | Fully |
| Mobile friendly | Varied | Good | Varies |
| ARIA role | None needed | `combobox` | `combobox` |

## Limitation: No `multiple` Support
You cannot select multiple items from a datalist. For multi-select with autocomplete, you need a custom combobox widget.

## Styling Datalist
Native browser datalist popups are **not stylable** via CSS. The appearance is controlled by the operating system. For custom styling, implement a custom autocomplete widget using a list + JavaScript.

However, you can style the input itself when it has a datalist:
```css
input[list] {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 8px center;
  padding-right: 32px;
}
```

## Browser Quirks

1. **Datalist button** — browsers add a dropdown arrow to inputs with `list`, which opens the suggestion list
2. **Partial matching** — matching varies by browser (case-insensitive typically, but substring matching differs)
3. **Datalist in Shadow DOM** — does not work across shadow boundaries; both input and datalist must be in the same tree
4. **Mobile behavior** — mobile browsers may not show the datalist until the user taps a dedicated icon

## Accessibility

- The `<datalist>` is automatically associated with the input via the `list` attribute
- Screen readers announce the number of suggestions available
- Use `<label>` elements properly for input identification
- Datalist suggestions are navigable via arrow keys from the input

## JavaScript API

```javascript
const input = document.getElementById('browser');
const datalist = document.getElementById('browsers');

// Get available options
const options = datalist.options;

// Filter dynamically
function updateSuggestions(filter) {
  datalist.innerHTML = '';
  const items = ['Chrome', 'Firefox', 'Edge', 'Safari'];
  items.filter(item => item.toLowerCase().includes(filter.toLowerCase()))
    .forEach(item => {
      const option = document.createElement('option');
      option.value = item;
      datalist.appendChild(option);
    });
}

input.addEventListener('input', () => updateSuggestions(input.value));
```

## Use Cases

- **Browser/OS selection** with free-text override
- **Country/city autocomplete** with multiple matches
- **Tag input** suggestions
- **Search engine selection** with custom query
- **Version numbers** with recent suggestions
- **Medical/legal codes** where exact values are preferred but free text is allowed

## Summary

```
input[list]  ← matches →  datalist#id
                            └── option[value][label]
```
