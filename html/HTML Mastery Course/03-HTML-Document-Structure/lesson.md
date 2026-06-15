# Module 3: HTML Document Structure

## Introduction
Every HTML document follows a specific structure that browsers understand and interpret. This structure is the foundation upon which all web pages are built. Understanding how to properly structure an HTML document ensures your pages are rendered correctly, accessible to all users, and optimized for search engines.

## Learning Objectives
By the end of this module, you will be able to:
- Explain the purpose of the DOCTYPE declaration
- Structure a complete HTML document correctly
- Differentiate between head and body sections
- Use meta tags effectively for SEO and social sharing
- Understand how the browser parses HTML into the DOM tree
- Apply proper nesting and indentation rules

## The Core Document Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <meta name="description" content="Page description for SEO">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Main Heading</h1>
        <nav><!-- navigation --></nav>
    </header>
    <main>
        <article><!-- content --></article>
    </main>
    <footer>
        <p>&copy; 2026</p>
    </footer>
</body>
</html>
```

## The DOCTYPE Declaration

The `<!DOCTYPE html>` declaration is required at the very top of every HTML document. It tells the browser which version of HTML to use:

- **HTML5**: `<!DOCTYPE html>` (case-insensitive)
- **HTML 4.01 Strict**: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`
- **XHTML 1.0 Strict**: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">`

> **Important**: Without a DOCTYPE, browsers render in "quirks mode," which mimics old browser behavior and causes inconsistent rendering. Always include `<!DOCTYPE html>`.

## The `<html>` Element

The `<html>` element is the root container of the entire document. It should include the `lang` attribute:

```html
<html lang="en">   <!-- For English -->
<html lang="es">   <!-- For Spanish -->
<html lang="fr">   <!-- For French -->
```

The `lang` attribute is important for:
- Screen readers (correct pronunciation)
- Search engines (language targeting)
- Browser features (translation suggestions)

## The `<head>` Section

The `<head>` contains metadata — information about the page that is not displayed directly. Key elements:

### Character Encoding
```html
<meta charset="UTF-8">
```
UTF-8 supports all characters from all languages. Always include this as the first meta tag.

### Viewport Settings
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
This ensures proper rendering on mobile devices by setting the viewport width to the device width.

### Page Title
```html
<title>My Amazing Page | Site Name</title>
```
The title appears in the browser tab, search engine results, and social media previews. Keep it under 60 characters.

### Meta Description
```html
<meta name="description" content="A brief description of the page content for search engines.">
```
This appears in search results under the title. Aim for 150-160 characters.

### Open Graph Tags (Social Media)
```html
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Description">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:url" content="https://example.com/page">
```
These control how the page appears when shared on Facebook, Twitter, LinkedIn, etc.

### Favicon
```html
<link rel="icon" href="favicon.ico" type="image/x-icon">
```

### Stylesheets
```html
<link rel="stylesheet" href="style.css">
```

## The `<body>` Section

The `<body>` contains all content visible to users. It should use semantic HTML5 elements for structure:

| Element | Purpose |
|---------|---------|
| `<header>` | Introductory content, logo, navigation |
| `<nav>` | Navigation links |
| `<main>` | Primary content (unique to this page) |
| `<section>` | Thematic grouping of content |
| `<article>` | Self-contained, reusable content |
| `<aside>` | Tangentially related content |
| `<footer>` | Footer information, copyright, links |

## Document Flow and Nesting

HTML elements follow a tree structure (DOM). Every element (except the root) has exactly one parent.

```
html
├── head
│   ├── meta
│   ├── title
│   └── link
└── body
    ├── header
    │   ├── h1
    │   └── nav
    ├── main
    │   └── article
    │       ├── h2
    │       └── p
    └── footer
        └── p
```

### Nesting Rules
1. Always close the innermost tag first
2. Block-level elements can contain inline elements
3. Inline elements should not contain block-level elements (with exceptions like `<a>` in HTML5)
4. `<body>` can only contain block-level elements as direct children

## The DOM Tree (Document Object Model)

When the browser parses HTML, it creates a tree structure called the **DOM Tree**:

```
Document
 └── <html>
      ├── <head>
      │    ├── <meta charset="UTF-8">
      │    └── <title>Page Title</title>
      └── <body>
           ├── <h1>Main Heading</h1>
           └── <p>Paragraph text</p>
```

The DOM is accessible via JavaScript, allowing dynamic manipulation of the page.

## Common Mistakes

| Mistake | Incorrect | Correct |
|---------|-----------|---------|
| Missing DOCTYPE | Start with `<html>` | `<!DOCTYPE html>` first |
| Wrong meta charset order | `<title>` before `<meta charset>` | `<meta charset>` should be first in `<head>` |
| Duplicate `<title>` | Multiple `<title>` tags | Only one `<title>` |
| Content outside `<body>` | Text before `<body>` | All visible content inside `<body>` |
| Unclosed `<html>` or `<body>` | Omitted closing tags | Always close root tags |

## Best Practices
1. **Always use `<!DOCTYPE html>`** — prevents quirks mode
2. **Place `<meta charset="UTF-8">` first** — before any other head elements
3. **Use exactly one `<main>` element** — for primary page content
4. **Include the `lang` attribute** — on the `<html>` tag
5. **Keep `<title>` under 60 characters** — for optimal SEO display
6. **Use semantic elements** — instead of generic `<div>` tags
7. **Validate your HTML regularly** — with the W3C validator
8. **Order meta tags consistently** — charset, viewport, title, description

## Summary Notes
- `<!DOCTYPE html>` triggers standards mode in browsers
- `<html lang="...">` declares the document language
- `<head>` contains metadata only (not displayed)
- `<body>` contains all visible page content
- Meta tags control SEO, social sharing, and mobile behavior
- The DOM is a tree representation of HTML structure
- Semantic elements improve accessibility and SEO
- Proper nesting is critical for valid HTML
