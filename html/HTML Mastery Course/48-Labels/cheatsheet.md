# Labels — Cheatsheet

## Label Association Methods

| Method | Syntax | Best For |
|--------|--------|----------|
| Explicit | `<label for="id">Text</label><input id="id">` | Most inputs |
| Implicit | `<label>Text <input></label>` | Checkboxes, radios |
| aria-label | `<input aria-label="Text">` | No visible label |
| aria-labelledby | `<input aria-labelledby="elId">` | Reusing existing text |

## Visually Hidden Label CSS

```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

## Label Styling Patterns

```css
/* Required indicator */
label.required::after { content: " *"; color: #e53e3e; }

/* Clickable cursor */
label { cursor: pointer; }

/* Inline for checkbox/radio */
.inline-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-weight: 400;
}

/* Error state */
label.error { color: #e53e3e; }

/* Disabled label */
label.disabled { color: #a0aec0; cursor: not-allowed; }
```

## Fieldset + Legend Pattern

```html
<fieldset>
  <legend>Group Label</legend>
  <label><input type="radio" name="x" value="a"> Option A</label>
  <label><input type="radio" name="x" value="b"> Option B</label>
</fieldset>
```

## Accessible Name Computation Priority

```
1. aria-labelledby (highest priority)
2. aria-label
3. <label for="id"> (explicit label)
4. <label> wrapping (implicit label)
5. title attribute
6. placeholder attribute (lowest priority)
```

## Accessibility Requirements

| WCAG SC | Requirement | Implementation |
|---------|-------------|---------------|
| 1.1.1 | Non-text content | Alt text for image inputs |
| 1.3.1 | Info and Relationships | Programmatic label association |
| 2.4.6 | Headings and Labels | Descriptive label text |
| 3.3.2 | Labels or Instructions | Labels or instructions provided |
| 4.1.2 | Name, Role, Value | Proper accessible name computation |

## Common Mistakes

| Mistake | Solution |
|---------|----------|
| Using placeholder as label | Add visible `<label>` element |
| Mismatched for/id | Ensure `for` exactly matches `id` |
| Display:none on label | Use `.visually-hidden` instead |
| Missing fieldset for radios | Wrap groups in `<fieldset>` |
| Duplicate IDs | Generate unique IDs per input |
| No required indicator | Add `::after` asterisk to label |

## Quick Examples

```html
<!-- Explicit (recommended) -->
<label for="email">Email</label>
<input type="email" id="email" name="email">

<!-- Implicit (wrapping) -->
<label>
  <input type="checkbox" name="agree">
  I agree to terms
</label>

<!-- aria-label -->
<input type="search" aria-label="Search documentation">

<!-- aria-labelledby -->
<h3 id="section">Contact</h3>
<input aria-labelledby="section" type="text">

<!-- Required indicator -->
<label for="name" class="required">Full Name</label>
<input id="name" required>

<!-- With help text -->
<label for="pwd">Password</label>
<input type="password" id="pwd" aria-describedby="pwdHelp">
<span id="pwdHelp">8+ characters with 1 number</span>
```
