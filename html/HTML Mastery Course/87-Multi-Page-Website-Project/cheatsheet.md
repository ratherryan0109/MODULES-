# Multi-Page Website Project — Cheatsheet

## File Structure

```
project/
├── index.html
├── about.html
├── services.html
├── contact.html
├── assets/
│   ├── css/style.css
│   ├── images/
│   └── js/script.js
```

## Common Header Template

```html
<header>
    <a href="index.html" class="logo">SiteName</a>
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
</header>
```

## Navigation Link Types

| Type | Example | Use |
|------|---------|-----|
| Relative (same folder) | `about.html` | Internal pages |
| Relative (subfolder) | `services/web-design.html` | Nested pages |
| Relative (parent) | `../index.html` | Going up a level |
| Root-relative | `/about.html` | From any page |
| Absolute | `https://example.com` | External links |

## Active Page CSS

```css
/* Add class='active' to current page's link */
nav a.active {
    color: #3498db;
    font-weight: bold;
}
```

## Breadcrumb Navigation

```html
<nav aria-label="Breadcrumb">
    <ol class="breadcrumb">
        <li><a href="index.html">Home</a></li>
        <li><a href="services.html">Services</a></li>
        <li aria-current="page">Web Design</li>
    </ol>
</nav>
```

## Common Footer Template

```html
<footer>
    <div class="footer-grid">
        <div class="col">
            <h4>Company</h4>
            <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="careers.html">Careers</a></li>
            </ul>
        </div>
        <div class="col">
            <h4>Support</h4>
            <ul>
                <li><a href="faq.html">FAQ</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
        <div class="col">
            <h4>Legal</h4>
            <ul>
                <li><a href="privacy.html">Privacy</a></li>
                <li><a href="terms.html">Terms</a></li>
            </ul>
        </div>
    </div>
    <p class="copyright">&copy; 2026 Company Name</p>
</footer>
```

## Page Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Page description">
    <title>Page Name - Site Name</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <header><!-- Include header --></header>
    <main>
        <h1>Page Title</h1>
        <!-- Page-specific content -->
    </main>
    <footer><!-- Include footer --></footer>
</body>
</html>
```

## Best Practices
- ✅ Use consistent header/footer on all pages
- ✅ Mark active navigation item
- ✅ Include breadcrumbs for deep pages
- ✅ Use descriptive page titles
- ✅ Validate all internal links
- ✅ Use relative paths (not absolute)
- ❌ Don't hardcode full URLs for internal links
- ❌ Don't forget viewport meta tag
- ❌ Don't skip the 404 page
