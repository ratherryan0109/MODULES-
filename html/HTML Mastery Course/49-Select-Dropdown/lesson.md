# Module 49: Select Dropdown

## Introduction

The `<select>` element creates a dropdown menu that lets users choose one or more options from a list. It's one of the most common form controls for presenting predefined choices in a compact, space-efficient way. Combined with `<option>` and `<optgroup>` elements, select dropdowns can organize complex hierarchical choices clearly.

## Learning Objectives

- Create single and multiple selection dropdowns
- Group options with `<optgroup>`
- Set default selections and disable options
- Style select elements across browsers
- Handle select events with JavaScript
- Implement accessible dropdown navigation

## The `<select>` Element

```html
<select name="country" id="country">
  <option value="">Select a country</option>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="uk">United Kingdom</option>
</select>
```

## Key Attributes

| Attribute | Description |
|-----------|-------------|
| `name` | Form submission key |
| `id` | Label association |
| `multiple` | Allow multi-select (holding Ctrl/Cmd) |
| `size` | Number of visible options (without multiple, scrollable becomes a list) |
| `required` | Must select an option |
| `disabled` | Disable the entire select |
| `autofocus` | Auto-focus on page load |
| `form` | Associate with a form by ID |

## The `<option>` Element

| Attribute | Description |
|-----------|-------------|
| `value` | Submitted value (if omitted, text content is used) |
| `selected` | Pre-selects this option |
| `disabled` | Disable specific options |
| `label` | Shorter alternative to text content |

## The `<optgroup>` Element

Groups related options with a non-selectable header:

```html
<select name="car">
  <optgroup label="American">
    <option value="ford">Ford</option>
    <option value="chevy">Chevrolet</option>
  </optgroup>
  <optgroup label="European">
    <option value="bmw">BMW</option>
    <option value="audi">Audi</option>
  </optgroup>
</select>
```

## Single vs Multiple Selection

```html
<!-- Single select (default) -->
<select name="color">
  <option>Red</option>
  <option>Blue</option>
  <option>Green</option>
</select>

<!-- Multiple select (Ctrl/Cmd+click) -->
<select name="colors[]" multiple size="4">
  <option value="red">Red</option>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
  <option value="yellow">Yellow</option>
</select>
```

## Styling Select Elements

Select elements are notoriously difficult to style consistently across browsers. Native appearance can be reset:

```css
/* Reset browser styling */
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

select:focus {
  border-color: #4a6cf7;
  outline: none;
  box-shadow: 0 0 0 3px rgba(74,108,247,0.12);
}

/* Disabled option styling */
option:disabled {
  color: #a0aec0;
}
```

## Accessibility

```html
<label for="country">Country</label>
<select id="country" name="country" required aria-describedby="countryHelp">
  <option value="">Select...</option>
  <option value="us">United States</option>
</select>
<div id="countryHelp">Choose your country of residence.</div>
```

## Best Practices

1. **Always include a default placeholder option** with an empty value
2. **Label the select** appropriately with `<label for="id">`
3. **Use `optgroup` for long lists** to organize options
4. **Keep option text concise** — long text breaks dropdown layout
5. **Use `multiple` with `size`** to show multiple options as a list box
6. **Sort options logically** (alphabetical, categorical, or by popularity)
7. **Provide `value` attributes explicitly** — don't rely on text content
8. **Consider autocomplete for very long lists** (50+ options)
9. **Disable unavailable options** with `disabled` attribute on `<option>`
10. **Avoid deep nesting** in option groups (one level of optgroup max)

## Summary Notes

- `<select>` creates a dropdown; `<option>` defines choices
- `<optgroup>` groups related options with a header label
- `multiple` + `size` creates a multi-select list box
- The `value` attribute on `<option>` is what gets submitted
- If `value` is omitted, the option's text content is submitted
- Native select styling is limited — custom dropdowns may be needed for complex designs
- Select dropdowns are keyboard accessible by default (arrow keys, type-ahead)
- The `selected` attribute marks the default option
- An empty `value` option (``) is often used for a placeholder
- `size` attribute without `multiple` shows a scrollable single-select list
