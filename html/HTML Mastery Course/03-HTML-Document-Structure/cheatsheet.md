# HTML Document Structure — Cheatsheet

## Minimal HTML5 Document

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <!-- Content here -->
</body>
</html>
```

## DOCTYPE Declarations

| Version | Declaration |
|---------|-------------|
| HTML5 | `<!DOCTYPE html>` |
| HTML 4.01 Strict | `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">` |
| XHTML 1.0 Strict | `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">` |

## Essential <head> Elements (in order)

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Page Title</title>
<meta name="description" content="Page description">
<meta name="keywords" content="keyword1, keyword2">
<meta name="author" content="Author Name">
<link rel="icon" href="favicon.ico">
<link rel="stylesheet" href="styles.css">
```

## Semantic HTML5 Elements

| Element | Purpose |
|---------|---------|
| `<header>` | Introductory content, branding, nav |
| `<nav>` | Navigation links |
| `<main>` | Primary content (only one per page) |
| `<article>` | Self-contained content (blog post, news) |
| `<section>` | Thematic grouping of content |
| `<aside>` | Sidebar, related content |
| `<footer>` | Footer, copyright, links |

## Nesting Rules

```
✅ Correct:    <div><p><span>text</span></p></div>
❌ Incorrect:  <div><p><span>text</p></span></div>
```

## DOM Tree Structure

```
Document
 └── <html>
      ├── <head>
      │    ├── <meta>
      │    ├── <title>
      │    └── <link>
      └── <body>
           ├── <header>
           ├── <main>
           └── <footer>
```

## Common lang Values

| Code | Language |
|------|----------|
| `en` | English |
| `es` | Spanish |
| `fr` | French |
| `de` | German |
| `ja` | Japanese |
| `ar` | Arabic |

## Open Graph Meta Tags

```html
<meta property="og:title" content="Title">
<meta property="og:description" content="Description">
<meta property="og:image" content="image.jpg">
<meta property="og:url" content="https://example.com">
<meta property="og:type" content="website">
```

## Key Rules
- Only one `<main>` per page
- `<head>` contains ONLY metadata
- Always close `<html>` and `<body>`
- Nest properly: first opened = last closed
- Validate at validator.w3.org
