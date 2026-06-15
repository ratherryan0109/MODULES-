# Module 5: HTML Attributes

## Introduction
HTML attributes provide additional information about HTML elements. They modify the behavior, appearance, or functionality of elements and are always placed in the opening tag. Attributes are key-value pairs that make HTML dynamic and powerful — from setting image sources and link destinations to defining styles and behaviors.

## Learning Objectives
By the end of this module, you will be able to:
- Define HTML attributes and their syntax
- Distinguish between global and element-specific attributes
- Use common attributes like id, class, src, href, alt, title
- Apply boolean attributes correctly
- Understand data-* attributes for custom data
- Follow best practices for attribute usage

## Attribute Syntax

```html
<tagname attribute="value">Content</tagname>
```

- Attributes are placed **inside the opening tag**
- Written as `name="value"` pairs
- Values should be enclosed in double quotes (single quotes also valid)
- Multiple attributes are separated by spaces

```html
<a href="https://example.com" target="_blank" title="Visit Example">Click Here</a>
```

## Global Attributes

Global attributes can be used on **any** HTML element.

| Attribute | Purpose |
|-----------|---------|
| `id` | Unique identifier for an element |
| `class` | Class name(s) for CSS/styling |
| `style` | Inline CSS styles |
| `title` | Tooltip text on hover |
| `lang` | Language of element content |
| `dir` | Text direction (ltr, rtl) |
| `hidden` | Hides the element |
| `tabindex` | Tab order for keyboard navigation |
| `contenteditable` | Makes content editable |
| `data-*` | Custom data attributes |

### id Attribute
```html
<div id="header">...</div>
<div id="footer">...</div>
```
- Must be **unique** within the page
- Used for CSS targeting, anchor links, and JavaScript
- Cannot contain spaces

### class Attribute
```html
<p class="highlight important">Text</p>
```
- Can have **multiple values** separated by spaces
- Used for CSS and JavaScript selection
- Not unique — many elements can share classes

### style Attribute
```html
<p style="color: blue; font-size: 18px;">Styled text</p>
```
- Applies inline CSS directly to an element
- Overrides external stylesheets
- Use sparingly — prefer external CSS

### title Attribute
```html
<abbr title="HyperText Markup Language">HTML</abbr>
```
- Shows a tooltip on hover
- Provides additional information

## Element-Specific Attributes

Some attributes only work on specific elements.

### For `<a>` (Anchor/Link)
```html
<a href="https://example.com" target="_blank" rel="noopener">Link</a>
```
| Attribute | Values | Purpose |
|-----------|--------|---------|
| `href` | URL | Destination link |
| `target` | `_self`, `_blank`, `_parent`, `_top` | Where to open |
| `rel` | `noopener`, `nofollow`, `noreferrer` | Relationship |
| `download` | filename | Triggers download |

### For `<img>` (Image)
```html
<img src="photo.jpg" alt="A scenic view" width="600" height="400" loading="lazy">
```
| Attribute | Purpose |
|-----------|---------|
| `src` | Image source URL (required) |
| `alt` | Alternative text (required for accessibility) |
| `width` | Image width in pixels |
| `height` | Image height in pixels |
| `loading` | `lazy` or `eager` loading |

### For `<input>` (Input)
```html
<input type="text" name="username" placeholder="Enter name" required maxlength="20">
```
| Attribute | Purpose |
|-----------|---------|
| `type` | Input type (text, email, password, etc.) |
| `name` | Field name for form submission |
| `placeholder` | Hint text inside the field |
| `required` | Mandatory field |
| `value` | Default value |
| `disabled` | Disables the field |
| `readonly` | Read-only field |

## Boolean Attributes

Boolean attributes don't need a value — their presence alone means "true."

```html
<input type="text" required>          <!-- required="true" -->
<input type="text" disabled>          <!-- disabled="true" -->
<button disabled>Click</button>        <!-- button is disabled -->
<details open>...</details>            <!-- details is open -->
```

You can also write them as:
```html
<input required="required">
<input disabled="disabled">
```

## Custom Data Attributes (data-*)

Custom data attributes store extra information without affecting rendering.

```html
<div data-user-id="12345" data-role="admin" data-active="true">
    John Doe
</div>
```

Access via JavaScript:
```javascript
const user = document.querySelector('[data-user-id="12345"]');
console.log(user.dataset.userId);   // "12345"
console.log(user.dataset.role);     // "admin"
```

## ARIA Attributes (Accessibility)

ARIA attributes improve accessibility for assistive technologies.

```html
<nav aria-label="Main navigation">...</nav>
<div role="button" tabindex="0" aria-pressed="false">Click</div>
<input type="text" aria-required="true" aria-describedby="help-text">
```

| Attribute | Purpose |
|-----------|---------|
| `role` | Defines the element's role |
| `aria-label` | Accessible label |
| `aria-labelledby` | Links to a label element |
| `aria-describedby` | Links to a description |
| `aria-hidden` | Hides from screen readers |
| `aria-expanded` | Expand/collapse state |

## Event Handler Attributes

HTML can include JavaScript event handlers as attributes:

```html
<button onclick="alert('Clicked!')">Click</button>
<input onfocus="this.style.background='yellow'">
<div onmouseover="console.log('hover')">Hover over me</div>
```

Best practice: separate JavaScript from HTML using `addEventListener()`.

## Common Mistakes

| Mistake | Incorrect | Correct |
|---------|-----------|---------|
| Missing quotes | `href=https://example.com` | `href="https://example.com"` |
| Duplicate id | Two `id="main"` | Unique id per element |
| Missing alt | `<img src="photo.jpg">` | `<img src="photo.jpg" alt="desc">` |
| Wrong case | `Class="text"` | `class="text"` (lowercase) |
| Space in id value | `id="my element"` | `id="my-element"` |
| No value for boolean | `required="false"` | Omit `required` entirely |

## Best Practices
1. **Always quote attribute values** — double quotes preferred
2. **Use lowercase attribute names** — XHTML requires it, HTML5 convention
3. **Always include `alt` on images** — essential for accessibility
4. **Use `rel="noopener"`** with `target="_blank"` for security
5. **Keep ids unique** — duplicate ids cause JavaScript and CSS bugs
6. **Use `data-*` for custom data** — avoid inventing non-standard attributes
7. **Prefer semantic elements over ARIA** — native HTML is more robust
8. **Validate your HTML** — catch attribute errors early

## Summary Notes
- Attributes provide additional information and modify element behavior
- Global attributes (`id`, `class`, `style`, `title`) work on any element
- Element-specific attributes are tied to particular elements
- Boolean attributes need no value — presence is truth
- `data-*` attributes store custom data accessible via JavaScript
- ARIA attributes improve accessibility
- Always quote attribute values and use lowercase names
