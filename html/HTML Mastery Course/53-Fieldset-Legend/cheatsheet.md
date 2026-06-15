# Fieldset & Legend — Cheatsheet

## Basic Syntax

```html
<fieldset>
  <legend>Section Title</legend>
  <!-- Form controls here -->
</fieldset>
```

## Attributes Quick Reference

| Attribute   | Values    | Description                                       |
|-------------|-----------|---------------------------------------------------|
| `disabled`  | (boolean) | Disables all descendant form controls              |
| `form`      | `id`      | Associates fieldset with a form by ID              |
| `name`      | string    | Name for the fieldset (rarely used)                |

## Implicit ARIA

| Element      | Implicit Role | Accessible Name Source          |
|--------------|---------------|----------------------------------|
| `<fieldset>` | `group`       | `<legend>` (via aria-labelledby) |

## Default Browser Styles

```css
fieldset {
  display: block;
  border: 2px groove threedface;
  padding: 0.35em 0.75em 0.625em;
  margin: 2px;
  min-inline-size: min-content;
}

legend {
  display: table;
  padding: 0;
}
```

## Common CSS Resets & Customizations

```css
/* Remove default border */
fieldset {
  border: none;
  margin: 0;
  padding: 0;
}
legend {
  padding: 0;
}

/* Rounded card style */
fieldset {
  border: 2px solid #6C63FF;
  border-radius: 8px;
  padding: 20px;
  margin: 10px 0;
}
legend {
  background: #6C63FF;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 14px;
}
```

## Disabled State

```html
<!-- Disables all inputs, selects, textareas, buttons inside -->
<fieldset disabled>
  <legend>Disabled Section</legend>
  <input type="text" name="field1">
  <button type="submit">Submit</button> <!-- Also disabled -->
</fieldset>
```

```css
/* Enhanced visual feedback */
fieldset[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
fieldset[disabled] * {
  pointer-events: none;
}
```

## Form Association

```html
<form id="myForm" action="/submit" method="post">
  <button type="submit">Submit</button>
</form>

<!-- This fieldset belongs to myForm even though it's outside the form -->
<fieldset form="myForm">
  <legend>External Fields</legend>
  <input type="text" name="externalField">
</fieldset>
```

## Nested Fieldsets

```html
<fieldset>
  <legend>Contact Details</legend>
  <input type="text" name="fullName">
  <fieldset>
    <legend>Phone Numbers</legend>
    <input type="tel" name="primaryPhone">
    <input type="tel" name="secondaryPhone">
  </fieldset>
</fieldset>
```

## JavaScript API

```javascript
// Get fieldset elements
const fieldset = document.querySelector('fieldset');

// Properties
fieldset.disabled = true;   // boolean - disable/enable
fieldset.form;              // reference to associated form (read-only)
fieldset.type = 'fieldset'; // always 'fieldset'

// Check if any control inside is invalid
const hasInvalid = fieldset.querySelector(':invalid') !== null;

// Focus first valid input inside
const firstInput = fieldset.querySelector('input:not([disabled])');
if (firstInput) firstInput.focus();
```

## Required Usage Scenarios

| Scenario                | Use Fieldset? | Reason                                        |
|-------------------------|---------------|-----------------------------------------------|
| Radio button group      | **Required**  | Accessibility — screen readers need group context |
| Checkbox group          | Recommended   | Provides group context to screen readers      |
| Single text input       | Not needed    | Use <label> directly                          |
| Form section            | Recommended   | Organizes form visually and semantically      |
| Multi-step form         | Recommended   | Each step can be its own fieldset             |
| Disabled section        | Recommended   | One attribute disables entire group           |

## Accessibility Guidelines

- Always include `<legend>` as the first child of `<fieldset>`
- Keep legend text concise but descriptive (e.g., "Shipping Address")
- Do not place interactive elements (links, buttons) inside `<legend>`
- Use fieldsets for all radio button groups (WCAG 1.3.1)
- Nest no more than 2 levels deep
- Test with a screen reader (NVDA, VoiceOver, JAWS)

## Browser Compatibility

| Feature              | Chrome | Firefox | Safari | Edge | IE 11 |
|----------------------|--------|---------|--------|------|-------|
| Basic fieldset       | ✅     | ✅      | ✅     | ✅   | ✅    |
| disabled attribute   | ✅     | ✅      | ✅     | ✅   | ✅    |
| form attribute       | ✅     | ✅      | ✅     | ✅   | ❌    |
| Nested fieldsets     | ✅     | ✅      | ✅     | ✅   | ✅    |
| Flexbox inside       | ⚠️     | ⚠️      | ⚠️     | ⚠️   | ❌    |
| Grid inside          | ⚠️     | ⚠️      | ⚠️     | ⚠️   | ❌    |

⚠️ = Use a wrapper `<div>` for reliable flex/grid layout inside fieldsets.
