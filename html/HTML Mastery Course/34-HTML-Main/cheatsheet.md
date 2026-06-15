# HTML `<main>` Element — Cheatsheet

## Basic Syntax

```html
<main>
  <!-- Primary page content -->
</main>
```

## Document Structure

```html
<body>
  <header>Site header, logo, navigation</header>
  <main>
    <h1>Page Title</h1>
    <p>Primary content</p>
  </main>
  <footer>Copyright, links</footer>
</body>
```

## Attributes

| Attribute | Description |
|-----------|-------------|
| `hidden`  | Hides the element. Required on all but one `<main>` per document |
| `id`      | Target for skip-navigation links |
| `tabindex`| Use `-1` to allow programmatic focus without tab order |
| `aria-live`| Use `"polite"` in SPAs for dynamic content announcements |
| `aria-atomic`| Use `"true"` to announce entire region on updates |

## Nesting Rules

| Allowed Inside | NOT Allowed Inside |
|----------------|-------------------|
| `<body>`       | `<article>`       |
| `<div>`        | `<aside>`         |
| `<sectioning root>` | `<footer>`     |
|                | `<header>`        |
|                | `<nav>`           |

## One `<main>` Rule

- **Max one visible** `<main>` per document
- Additional `<main>` elements **must** have `hidden` attribute
- Multiple hidden `<main>`s are allowed

## Implicit ARIA

```html
<main role="main">  <!-- redundant but harmless in modern browsers -->
```

## Skip Navigation Pattern

```html
<a href="#main-content" class="skip-link">Skip to main content</a>

<main id="main-content" tabindex="-1">
  <h1>Main Content</h1>
</main>
```

```css
.skip-link {
  position: absolute;
  top: -40px;
}
.skip-link:focus {
  top: 0;
}
```

## Common Use Cases

| Use Case | Inside `<main>` |
|----------|----------------|
| Blog post | `<article>` |
| Product listing | Multiple `<article>` or `<section>` |
| Dashboard | `<section>` with data panels |
| Landing page | `<section>` for each content block |
| Documentation | `<article>`, `<section>`, `<nav>` (page-internal) |

## What NOT to Put in `<main>`

- Page-level `<header>` (site branding, main nav)
- Page-level `<footer>` (copyright, legal)
- Sidebars (`<aside>` with tangential content)
- Site-wide `<nav>`
- Search tools unrelated to main content

## Browser Support

| Chrome | Firefox | Safari | Edge | IE |
|--------|---------|--------|------|-----|
| 5+     | 4+      | 5.1+   | 12+  | 9+* |

*IE 9-11 require HTML5 shiv

## CSS Defaults

```css
main {
  display: block;
}
```

## Accessibility Shortcuts

| Screen Reader | Key to Jump to Main |
|---------------|---------------------|
| NVDA          | `D` (landmark)      |
| JAWS          | `Q` (landmark)      |
| VoiceOver     | Rotor → Main        |
| TalkBack      | Local context menu  |

## SPA Best Practices

```html
<main aria-live="polite" aria-atomic="true">
```

```javascript
// After content update:
main.querySelector('h1').focus();
```

## Valid HTML5 Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <header>
    <nav>...</nav>
  </header>
  <main>
    <h1>Title</h1>
    <!-- Content -->
  </main>
  <footer>...</footer>
</body>
</html>
```
