# Module 48: Labels

## Introduction

The `<label>` element is one of the most important yet underappreciated elements in HTML forms. Labels provide descriptive text for form controls, making interfaces usable for everyone — especially people using screen readers or other assistive technologies. A properly implemented label improves accessibility, increases clickable area (especially on mobile), and is required for WCAG compliance.

Every form input must have an associated label. This module covers the labeling techniques, best practices, and common pitfalls.

## Learning Objectives

- Understand the purpose and importance of labels
- Implement explicit and implicit labeling techniques
- Use `aria-label` and `aria-labelledby` for complex scenarios
- Style labels effectively with CSS
- Apply labeling best practices for accessibility compliance

## The `<label>` Element

The `<label>` element associates descriptive text with a form control. Clicking the label text focuses or activates its associated input.

### Explicit Label (Recommended)

Uses the `for` attribute matching the input's `id`:

```html
<label for="email">Email Address</label>
<input type="email" id="email" name="email">
```

The `for` value must exactly match the `id` value of the associated input.

### Implicit Label (Wrapping)

The input is nested inside the label:

```html
<label>
  Email Address
  <input type="email" name="email">
</label>
```

No `for`/`id` needed. CSS styling can be more challenging with wrapping.

## Labeling Techniques

### 1. Explicit Label — The Gold Standard

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username">
```

**Advantages**: Works regardless of DOM order, clear association, easier CSS styling.

### 2. Implicit Label — Convenient Wrapping

```html
<label>
  <input type="checkbox" name="subscribe"> Subscribe to newsletter
</label>
```

Best for checkboxes and radios where the label follows naturally after the input.

### 3. Multiple Labels

An input can have multiple labels using multiple `for` references. This is rare but valid:

```html
<label for="phone">Phone:</label>
<label for="phone">Required</label>
<input type="tel" id="phone" name="phone">
```

### 4. Hidden Labels (Visually Hidden)

When a label isn't needed visually but must be present for screen readers:

```html
<label for="search" class="visually-hidden">Search the site</label>
<input type="search" id="search" name="q">
```

```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
```

### 5. Using `aria-label` — When No Visible Text

When there's no visible text to label the input:

```html
<input type="search" aria-label="Search documentation" name="q">
```

Screen readers will announce "Search documentation, search input".

### 6. Using `aria-labelledby` — When an Existing Element Serves as Label

```html
<h2 id="section-title">Contact Information</h2>
<input type="text" aria-labelledby="section-title name-label" id="name">
<span id="name-label">Full Name</span>
```

This can reference multiple element IDs separated by spaces.

## Click Target and Usability

Labels enlarge the click target — critical for mobile users:

```css
label {
  display: inline-block;
  padding: 4px 0;
  cursor: pointer;
}

/* For checkboxes and radios - make the whole area clickable */
.checkbox-label {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}

.checkbox-label:hover {
  background: #f0f4ff;
}
```

## Styling Labels

```css
/* Base label styling */
label {
  display: block;
  margin-bottom: 4px;
  font-weight: 600;
  color: #2d3748;
  font-size: 14px;
}

/* Required field indicator */
label.required::after {
  content: " *";
  color: #e53e3e;
}

/* Disabled state */
label.disabled {
  color: #a0aec0;
  cursor: not-allowed;
}

/* Inline labels for checkboxes/radios */
.inline-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-right: 16px;
  font-weight: 400;
  cursor: pointer;
}
```

## Accessibility Requirements

- **WCAG 1.3.1**: Info and Relationships — labels must be programmatically associated
- **WCAG 2.4.6**: Headings and Labels — labels must describe the purpose
- **WCAG 3.3.2**: Labels or Instructions — labels or instructions must be provided

## Common Mistakes

### Mistake 1: Using `placeholder` as a Label
Placeholder text disappears when the user types, making it inaccessible.

### Mistake 2: Mismatched `for` and `id`
The `for` value must exactly match the `id` value — case-sensitive.

### Mistake 3: Multiple Inputs with the Same `id`
Each input needs a unique `id` for label association.

### Mistake 4: Using `aria-label` When a Visible Label is Possible
Visible labels benefit all users. Use aria-label only when the label can't be visible.

### Mistake 5: Not Labeling Checkbox Groups
Each individual checkbox needs its own label for proper accessibility.

## Best Practices

1. **Use explicit labels (`for`/`id`) as the default approach**
2. **Always provide labels — never rely solely on placeholders**
3. **Make labels visually proximate to their inputs** (close proximity aids usability)
4. **Use sentence case or title case consistently** for label text
5. **Indicate required fields** with an asterisk and `aria-required="true"`
6. **For checkbox/radio groups**, use a `<fieldset>` with `<legend>` for the group label
7. **Style the label's cursor** as `pointer` to indicate clickability
8. **Use the `visually-hidden` class** when a label must be hidden but accessible
9. **Test with a screen reader** to verify proper label announcement
10. **Ensure labels remain visible** when the input is focused (don't hide them)

## Summary Notes

- Every form input needs an associated label (WCAG requirement)
- Explicit labeling: `<label for="id">` matches `<input id="id">`
- Implicit labeling: `<label>` wraps the `<input>`
- Labels enlarge click targets — important for mobile UX
- `aria-label` provides accessible names when no visible label exists
- `aria-labelledby` references existing elements as labels
- Never use `placeholder` alone as a label
- Required field indicators should be part of the label
- Test label associations with screen readers
- Labels can be styled to indicate focus, error, or disabled states
