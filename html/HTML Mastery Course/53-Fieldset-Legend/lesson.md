# Module 53: Fieldset & Legend

## Introduction

The `<fieldset>` and `<legend>` elements are fundamental HTML form components used for grouping related form controls and providing descriptive captions. `<fieldset>` creates a visual box around a set of form elements, while `<legend>` supplies a label for that group. Together, they improve form organization, usability, and accessibility — especially for complex forms with multiple sections.

## Learning Objectives

By the end of this module, you will be able to:
- Group related form controls using `<fieldset>` elements
- Provide descriptive captions with `<legend>` elements
- Style `<fieldset>` and `<legend>` with CSS for different visual designs
- Understand the accessibility benefits of fieldset/legend grouping
- Implement nested fieldsets for hierarchical form organization
- Use the `disabled` attribute on fieldsets to disable entire groups
- Apply `form` attribute to associate a fieldset with a form outside its parent
- Create multi-section forms like checkout pages, surveys, and registration forms
- Recognize browser-specific rendering differences and normalize them
- Follow best practices for fieldset/legend usage in accessible forms

## Theory

### What is `<fieldset>`?

The `<fieldset>` element is a container used to group related form controls. It draws a box (with a border) around the contained elements and, when used with `<legend>`, provides a built-in accessible label for the group.

The `<fieldset>` element has been part of HTML since HTML 2.0 and remains fully supported across all browsers. When a screen reader encounters a `<fieldset>` with a `<legend>`, it announces the legend text before each control inside the fieldset, giving users essential context.

### What is `<legend>`?

The `<legend>` element is a direct child of `<fieldset>` and provides a caption for the group. It is placed as the first child inside `<fieldset>`. The legend text is rendered in the top-left corner of the fieldset border by default.

### Accessibility Role

The `<fieldset>` element has an implicit ARIA role of `group`. The `<legend>` element acts as the accessible name (via `aria-labelledby`) for that group. This is automatic — no extra ARIA attributes are needed.

### The `disabled` Attribute

When the `disabled` attribute is added to `<fieldset>`, all descendant form controls become disabled. This includes `<input>`, `<textarea>`, `<select>`, `<button>`, and `<output>` elements. Disabled fieldsets are useful for toggling entire sections of a form on or off.

### The `form` Attribute

HTML5 introduced a `form` attribute on `<fieldset>`. This attribute takes the `id` of a `<form>` element and associates the fieldset (and its controls) with that form, even if the fieldset is placed outside the `<form>` tags.

### Nested Fieldsets

Fieldsets can be nested inside other fieldsets to create hierarchical groupings. This is useful for multi-level forms (e.g., a shipping address group inside a billing information section).

## Syntax

### Basic Syntax

```html
<fieldset>
  <legend>Group Label</legend>
  <!-- Form controls here -->
</fieldset>
```

### With Disabled Attribute

```html
<fieldset disabled>
  <legend>Disabled Section</legend>
  <input type="text" name="field1" placeholder="This is disabled">
</fieldset>
```

### With Form Attribute

```html
<form id="myForm" action="/submit" method="post">
  <input type="submit" value="Submit">
</form>

<fieldset form="myForm">
  <legend>External Group</legend>
  <input type="text" name="externalField">
</fieldset>
```

### Nested Fieldsets

```html
<fieldset>
  <legend>Contact Information</legend>
  <input type="text" name="name" placeholder="Full Name">
  
  <fieldset>
    <legend>Phone Numbers</legend>
    <input type="tel" name="primary" placeholder="Primary">
    <input type="tel" name="secondary" placeholder="Secondary">
  </fieldset>
</fieldset>
```

## Visual Structure

| Element    | Default Rendering                                   | Purpose                          |
|------------|-----------------------------------------------------|----------------------------------|
| `<fieldset>` | Box with 2px groove border, slight padding        | Groups form controls             |
| `<legend>`   | Text positioned over the top border of fieldset   | Provides group label             |
| Inside     | Form controls flow normally (block or inline)       | Individual inputs/buttons        |

### Default Browser Styles

| Property              | fieldset               | legend                  |
|-----------------------|------------------------|-------------------------|
| `border`              | `2px groove threedface`| (inherits)             |
| `padding`             | `0.35em 0.75em 0.625em`| `0`                    |
| `margin`              | `2px`                  | `0`                    |
| `display`             | `block`                | `table` (inline)       |
| `min-inline-size`     | `min-content`          | -                       |

## Examples

### Example 1: Personal Information Group

```html
<fieldset>
  <legend>Personal Information</legend>
  <label>First Name: <input type="text" name="firstName"></label><br>
  <label>Last Name: <input type="text" name="lastName"></label><br>
  <label>Email: <input type="email" name="email"></label>
</fieldset>
```

### Example 2: Radio Button Group (Required)

Radio buttons must always be grouped with `<fieldset>` and `<legend>` for accessibility. The legend provides context that screen readers announce before each option.

```html
<fieldset>
  <legend>Preferred Contact Method</legend>
  <label><input type="radio" name="contact" value="email"> Email</label><br>
  <label><input type="radio" name="contact" value="phone"> Phone</label><br>
  <label><input type="radio" name="contact" value="mail"> Mail</label>
</fieldset>
```

### Example 3: Checkbox Group

```html
<fieldset>
  <legend>Skills (Select all that apply)</legend>
  <label><input type="checkbox" name="skills" value="html"> HTML</label><br>
  <label><input type="checkbox" name="skills" value="css"> CSS</label><br>
  <label><input type="checkbox" name="skills" value="js"> JavaScript</label>
</fieldset>
```

### Example 4: Disabled Fieldset

```html
<fieldset disabled>
  <legend>Premium Features (Upgrade to Unlock)</legend>
  <label><input type="checkbox" name="advanced"> Advanced Analytics</label><br>
  <label><input type="checkbox" name="priority"> Priority Support</label><br>
  <button type="button">Upgrade Now</button>
</fieldset>
```

## Common Mistakes

1. **Missing `<legend>` element**: The legend is optional technically, but omitting it removes the accessibility benefit of the fieldset grouping.

2. **Incorrect legend placement**: `<legend>` must be the **first child** of `<fieldset>`. Placing other elements before it breaks the layout.

3. **Nesting without `<legend>`**: Nested fieldsets should each have their own `<legend>` to maintain clear hierarchical labeling.

4. **Over-styling the legend**: The legend element has unique positioning behavior. Setting `display: block` or `float` can break its default placement over the fieldset border.

5. **Using fieldsets for visual grouping only**: If the group doesn't have a semantic relationship, use `<div>` with CSS instead.

6. **Not using fieldsets for radio/checkbox groups**: This is a critical accessibility failure. Screen readers cannot announce the group context without `<fieldset>` and `<legend>`.

7. **Applying `disabled` without visual indication**: Add CSS styling (e.g., opacity reduction) to make disabled fieldsets visually apparent.

8. **Nesting fieldsets too deeply**: Deep nesting (3+ levels) can confuse screen reader users. Keep hierarchy flat when possible.

## Best Practices

1. **Always include a `<legend>`** when using `<fieldset>` to provide accessible context.

2. **Use `<fieldset>` for all radio button groups** — this is an accessibility requirement, not a recommendation.

3. **Keep legend text concise but descriptive**: "Shipping Address" is better than "Address" or "The address where we should ship your order."

4. **Style fieldsets to match your design system** — remove the default groove border if it doesn't fit, but maintain visual grouping.

5. **Use the `disabled` attribute to toggle entire sections**, but provide a mechanism to enable them (e.g., a checkbox).

6. **Avoid placing interactive elements (buttons, links) inside `<legend>`** — only text should be in the legend for best accessibility.

7. **Test with a screen reader** to verify that legend text is announced before each control in the group.

8. **Use fieldsets in multi-step forms** to group each step's controls, making navigation clearer.

9. **Reset fieldset styles for a consistent baseline**:
```css
fieldset {
  border: none;
  margin: 0;
  padding: 0;
}
```

10. **For large forms**, use fieldsets to create visual sections that break up the page and reduce cognitive load.

## Summary Notes

- `<fieldset>` groups related form controls into a visual box
- `<legend>` provides a caption for the group (must be first child)
- Implicit ARIA role `group` with `aria-labelledby` from the legend
- Use `<fieldset>` for all radio button and checkbox groups
- `disabled` attribute on fieldset disables all child controls
- `form` attribute associates fieldset with a form by ID
- Fieldsets can be nested for hierarchical organization
- Default fieldset border is `2px groove` (override with CSS)
- Screen readers announce legend before each control in the group
- Always include a `<legend>` for maximum accessibility
