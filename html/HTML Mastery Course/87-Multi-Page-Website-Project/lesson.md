# Module 87: Multi-Page Website Project

## Introduction
Building a multi-page website is a fundamental skill in web development. This project takes you through planning, structuring, and creating a complete multi-page website using HTML5 semantic elements, consistent navigation, shared layouts, and best practices for maintainable code.

## Learning Objectives
By the end of this module, you will be able to:
- Plan and design a multi-page website structure
- Create consistent navigation across multiple pages
- Build reusable HTML templates
- Implement semantic HTML5 layout elements
- Create responsive navigation systems
- Link pages correctly using relative and absolute paths
- Implement breadcrumb navigation
- Design a sitemap and user flow

## Planning a Multi-Page Website

### Site Architecture
Before writing code, plan your site structure:
```
project-folder/
├── index.html        (Home)
├── about.html        (About Us)
├── services.html     (Services)
├── portfolio.html    (Portfolio)
├── blog.html         (Blog)
├── contact.html      (Contact)
└── assets/
    ├── css/
    │   └── style.css
    ├── images/
    └── js/
```

### Navigation Patterns

1. **Header Navigation** — Persistent across all pages
2. **Breadcrumb Navigation** — Shows current page location
3. **Footer Navigation** — Secondary links, legal, social
4. **Sidebar Navigation** — Sub-page navigation for sections

## Consistent Layout Structure

### Shared Header
```html
<header>
    <div class="logo">
        <a href="index.html"><img src="logo.png" alt="Site Name"></a>
    </div>
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

### Shared Footer
```html
<footer>
    <div class="footer-content">
        <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="privacy.html">Privacy Policy</a></li>
                <li><a href="terms.html">Terms of Service</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h3>Contact</h3>
            <p>Email: info@example.com</p>
        </div>
    </div>
    <div class="copyright">
        <p>&copy; 2026 My Website. All rights reserved.</p>
    </div>
</footer>
```

### Breadcrumb Navigation
```html
<nav aria-label="Breadcrumb">
    <ol class="breadcrumb">
        <li><a href="index.html">Home</a></li>
        <li><a href="services.html">Services</a></li>
        <li aria-current="page">Web Design</li>
    </ol>
</nav>
```

## Active Page Indication

```html
<nav>
    <ul>
        <li><a href="index.html" class="active">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>
```

Add a CSS class to highlight the current page:
```css
nav a.active { color: #3498db; font-weight: bold; border-bottom: 2px solid #3498db; }
```

## Visual Explanation

```
┌─────────────────────────────────────────────────────────┐
│  HEADER                                                 │
│  [Logo]  Home | About | Services | Portfolio | Contact   │
├─────────────────────────────────────────────────────────┤
│  BREADCRUMB: Home > Services > Web Design               │
├─────────────────────────────────────────────────────────┤
│  MAIN CONTENT (varies per page)                         │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐             │
│  │ Section 1 │  │ Section 2 │  │ Section 3 │             │
│  └──────────┘  └──────────┘  └──────────┘             │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  FOOTER                                                 │
│  [Links] [Social] [Copyright]                           │
└─────────────────────────────────────────────────────────┘
```

## Common Mistakes
- Hardcoding absolute URLs instead of relative paths
- Inconsistent header/footer across pages
- Missing active state on current navigation page
- Broken image links due to incorrect paths
- Forgetting the viewport meta tag for responsive design

## Best Practices
- ✅ Use a consistent template structure for all pages
- ✅ Use relative paths for internal links
- ✅ Mark the current page in navigation
- ✅ Include breadcrumb navigation for deep pages
- ✅ Optimize images and assets for loading
- ✅ Validate all internal links
- ✅ Use semantic HTML5 elements for layout
- ✅ Implement 404 page for broken URLs

## Summary Notes
- Plan your site structure before coding
- Use consistent header and footer across all pages
- Implement breadcrumb navigation for usability
- Use relative paths for internal linking
- Mark active navigation items with CSS
- Create reusable CSS for consistent styling
- Always include the viewport meta tag
- Validate all pages with W3C validator
