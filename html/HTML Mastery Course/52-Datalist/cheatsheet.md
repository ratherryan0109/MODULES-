# Datalist — Cheatsheet

## HTML Structure

```html
<input list="mylist">
<datalist id="mylist">
  <option value="Suggestion 1" label="Description">
  <option value="Suggestion 2">
  <option label="Label-only suggestion">
</datalist>
```

## Supported Input Types

| Type | Works | Notes |
|------|-------|-------|
| text | ✅ | Standard autocomplete |
| search | ✅ | Search suggestions |
| url | ✅ | URL suggestions |
| tel | ✅ | Phone number suggestions |
| email | ✅ | Email suggestions |
| number | ✅ | Numeric suggestions |
| range | ✅ | Tick marks on slider |
| color | ✅ | Color swatch suggestions |
| date/time/week/month | ✅ | Date suggestions |
| file | ❌ | Not supported |
| checkbox/radio | ❌ | Not supported |
| hidden/image | ❌ | Not supported |
| submit/reset/button | ❌ | Not supported |

## Option Attributes

| Attribute | Required | Description |
|-----------|----------|-------------|
| `value` | Usually | The suggestion text/value |
| `label` | No | Descriptive label shown alongside value |

## Key Differences

| Feature | `<datalist>` | `<select>` |
|---------|-------------|------------|
| Free-text entry | ✅ Allowed | ❌ Not allowed |
| Filter as you type | ✅ Built-in | ❌ Requires JS |
| Stylable popup | ❌ No | ⚠️ Partial |
| Multiple selection | ❌ No | ✅ With `multiple` |
| ARIA role needed | ❌ No | ❌ No |

## Dynamic JavaScript

```javascript
const input = document.getElementById('myinput');
const dl = document.getElementById('mydatalist');

// Update options
dl.innerHTML = ['One', 'Two', 'Three']
  .map(v => `<option value="${v}">`).join('');

// Or via options collection
const opt = document.createElement('option');
opt.value = 'New Item';
dl.appendChild(opt);

// Clear all
dl.innerHTML = '';
```

## Limitation: Use Datalist When

- You want suggestions but allow free text
- You don't need custom styled dropdowns
- You need quick progressive enhancement without JS
- You want built-in keyboard navigation

## Limitation: Avoid Datalist When

- You need restricted options (use `<select>`)
- You need custom styled dropdown (build combobox)
- You need multi-select with autocomplete (custom widget)
- You need cross-shadow-DOM association

## Browser Notes

- Matching is case-insensitive substring (varies by browser)
- Popup is OS-native, not stylable
- Datalist works without JavaScript (progressive enhancement)
- Not supported in some older mobile browsers
