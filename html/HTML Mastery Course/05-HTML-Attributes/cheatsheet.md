# HTML Attributes — Cheatsheet

## Attribute Syntax

```html
<tagname attribute="value">Content</tagname>
```

## Global Attributes (Work on Any Element)

| Attribute | Description |
|-----------|-------------|
| `id` | Unique identifier |
| `class` | CSS class(es) |
| `style` | Inline CSS |
| `title` | Tooltip text |
| `lang` | Language |
| `dir` | Text direction (`ltr`/`rtl`) |
| `hidden` | Hides element |
| `tabindex` | Tab order |
| `contenteditable` | Make editable |
| `data-*` | Custom data |

## Common Element-Specific Attributes

| Element | Attributes |
|---------|------------|
| `<a>` | `href`, `target`, `rel`, `download` |
| `<img>` | `src`, `alt`, `width`, `height`, `loading` |
| `<input>` | `type`, `name`, `value`, `placeholder`, `required` |
| `<form>` | `action`, `method`, `enctype`, `novalidate` |
| `<video>` | `src`, `controls`, `autoplay`, `loop`, `muted` |
| `<meta>` | `charset`, `name`, `content`, `property` |

## Boolean Attributes

| Attribute | Effect When Present |
|-----------|-------------------|
| `disabled` | Disables the element |
| `required` | Makes field mandatory |
| `readonly` | Field is read-only |
| `hidden` | Hides the element |
| `checked` | Pre-checks checkbox/radio |
| `selected` | Pre-selects option |
| `autofocus` | Auto-focus on page load |
| `multiple` | Allow multiple selection |
| `novalidate` | Skip form validation |

## Anchor (`<a>`) Attributes

```html
<a href="url" target="_blank" rel="noopener noreferrer" download="file.pdf">
```

## Image (`<img>`) Attributes

```html
<img src="photo.jpg" alt="Description" width="600" height="400" loading="lazy">
```

## Input Attributes

```html
<input type="text" name="username" placeholder="Username" required maxlength="20" autocomplete="off">
```

## ARIA Attributes

| Attribute | Purpose |
|-----------|---------|
| `role` | Element's role (button, navigation, etc.) |
| `aria-label` | Accessible label |
| `aria-labelledby` | References label element ID |
| `aria-describedby` | References description ID |
| `aria-hidden` | Hide from screen readers |
| `aria-expanded` | Expand/collapse state |
| `aria-current` | Current item (page, step) |
| `aria-required` | Required field indicator |

## Data Attributes

```html
<div data-id="101" data-role="admin" data-active="true">
    Content
</div>
```
```javascript
element.dataset.id     // "101"
element.dataset.role   // "admin"
element.dataset.active // "true"
```

## Key Rules
- Place attributes in the **opening tag** only
- Always **quote values** (double quotes preferred)
- Use **lowercase** attribute names
- **id** must be unique per page
- Boolean attributes need no value
- Prefer `data-*` for custom attributes
