# Select Dropdown — Cheatsheet

## Basic Structure

```html
<select name="field" id="field" required>
  <option value="">Select...</option>
  <option value="a">Option A</option>
  <option value="b" selected>Option B (default)</option>
  <option value="c" disabled>Option C (disabled)</option>
</select>
```

## Attributes

| Attribute | Values | Description |
|-----------|--------|-------------|
| `name` | string | Form submission key |
| `id` | string | Label association |
| `multiple` | boolean | Multi-select mode |
| `size` | number | Visible option count |
| `required` | boolean | Must select non-empty value |
| `disabled` | boolean | Disable entire select |
| `autofocus` | boolean | Auto-focus on load |
| `form` | formID | Associate with form |

## Option Attributes

| Attribute | Description |
|-----------|-------------|
| `value` | Submitted value (default: text content) |
| `selected` | Pre-select this option |
| `disabled` | Disable this option |
| `label` | Shorter display text |

## Optgroup

```html
<optgroup label="Group Name">
  <option value="1">Item 1</option>
  <option value="2">Item 2</option>
</optgroup>
```

## CSS Styling

```css
select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url("data:image/svg+xml,...") no-repeat right 12px center;
  padding: 10px 40px 10px 14px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  width: 100%;
}
select:focus { border-color: #4a6cf7; outline: none; }
select[multiple] { padding: 8px; height: auto; }
select[multiple] option { padding: 6px 10px; }
```

## JavaScript

```javascript
// Get value
const val = select.value;

// Get selected option text
const text = select.options[select.selectedIndex].text;

// Get all selected (multiple)
const vals = [...select.selectedOptions].map(o => o.value);

// Set value
select.value = 'us';

// Set by index
select.selectedIndex = 2;

// Add option
select.add(new Option('Text', 'value'));

// Remove option
select.remove(index);

// Clear all
select.innerHTML = '';

// Event
select.addEventListener('change', () => {});
```

## Accessibility

```html
<label for="country">Country</label>
<select id="country" name="country" required aria-describedby="help">
  <option value="">Select...</option>
</select>
<div id="help">Choose your country of residence.</div>
```

## Common Patterns

```
Single select:    <select>...</select>
Multi select:     <select multiple>...</select>
Scrollable:       <select size="5">...</select>
Grouped:          <optgroup label="X">
Placeholder:      <option value="">Select...
Required:         <select required> + <option value="">
Dependent:        JavaScript updates child select on change
Custom style:     appearance: none + custom arrow SVG
```
