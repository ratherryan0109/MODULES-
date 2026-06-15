# HTML Introduction — Cheatsheet

## Document Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <!-- Visible content goes here -->
</body>
</html>
```

## Basic Tags

| Tag | Description | Self-Closing? |
|-----|-------------|---------------|
| `<html>` | Root element | No |
| `<head>` | Metadata container | No |
| `<title>` | Page title (in tab) | No |
| `<body>` | Visible content | No |
| `<h1>` to `<h6>` | Headings | No |
| `<p>` | Paragraph | No |
| `<br>` | Line break | Yes |
| `<hr>` | Horizontal rule | Yes |
| `<!-- comment -->` | HTML comment | N/A |

## Text Formatting

| Tag | Effect |
|-----|--------|
| `<strong>` | Bold (important) |
| `<em>` | Italic (emphasis) |
| `<u>` | Underline |
| `<mark>` | Highlight |
| `<small>` | Smaller text |
| `<del>` | Strikethrough (deleted) |
| `<ins>` | Inserted text |
| `<sub>` | Subscript |
| `<sup>` | Superscript |

## Links and Images

```html
<a href="https://example.com">Link text</a>
<img src="image.jpg" alt="Description">
```

## Lists

```html
<ul>
    <li>Unordered item</li>
</ul>

<ol>
    <li>Ordered item</li>
</ol>
```

## HTML5 Semantic Elements

| Element | Purpose |
|---------|---------|
| `<header>` | Introductory content / navigation |
| `<nav>` | Navigation links |
| `<main>` | Primary content |
| `<article>` | Self-contained content |
| `<section>` | Thematic grouping |
| `<aside>` | Sidebar / related content |
| `<footer>` | Footer information |

## Attributes (Common)

| Attribute | Used On | Purpose |
|-----------|---------|---------|
| `id` | Any | Unique identifier |
| `class` | Any | CSS class reference |
| `src` | `<img>`, `<script>` | Source URL |
| `href` | `<a>`, `<link>` | Hyperlink URL |
| `alt` | `<img>` | Alternative text |
| `lang` | `<html>` | Language declaration |

## Key Reminders

- Always use `<!DOCTYPE html>` first
- Tags should be lowercase
- Close all tags properly
- Nest tags correctly (last opened = first closed)
- Use semantic elements for structure
- Include `alt` text on all images
- Validate with W3C Validator
