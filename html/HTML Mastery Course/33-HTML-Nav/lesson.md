# Lesson 33: HTML Nav

## Introduction

The `<nav>` element is a semantic HTML5 element designed to represent a section of a page that contains navigation links to other pages or to parts within the current page. It is one of the most important semantic elements for both user experience and accessibility, as it helps users and assistive technologies identify and navigate through the site's navigation structure.

## Learning Objectives

By the end of this lesson, you will be able to:
1. Understand the purpose and semantics of the `<nav>` element
2. Create accessible navigation menus with proper structure
3. Differentiate between primary, secondary, and supplementary navigation
4. Use `<nav>` with ARIA attributes for enhanced accessibility
5. Build various navigation patterns (horizontal, vertical, breadcrumb, pagination)
6. Style navigation menus with CSS for different layouts
7. Implement responsive navigation solutions

## Theory

### What is the `<nav>` Element?

The `<nav>` element represents a section of a page that links to other pages or to parts within the page. It is intended for major navigation blocks, not all groups of links on a page.

### Key Characteristics

- **Semantic**: Clearly identifies navigation content
- **Sectioning**: Creates a section in the document outline
- **Multiple instances**: A page can have multiple `<nav>` elements
- **Landmark**: Has an implicit ARIA role of `navigation`

### When to Use `<nav>`

| Navigation Type | Use `<nav>`? |
|-----------------|--------------|
| Primary site navigation | ✅ Yes |
| Secondary navigation | ✅ Yes |
| Table of contents | ✅ Yes |
| Breadcrumb navigation | ✅ Yes |
| Pagination | ✅ Yes |
| Footer links (about, contact, privacy) | Optional (use `<nav>` if they form a major navigation) |
| Social media links sidebar | Optional |
| All links in a footer | ❌ Typically use `<footer>` directly |

### When NOT to Use `<nav>`

- For a single link or a few unrelated links
- Inside `<footer>` for copyright and legal text (use the `<footer>` element directly)
- For links that are part of content rather than navigation
- When `<nav>` would be the only meaningful content on a page

## Syntax

```html
<!-- Basic navigation -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<!-- Breadcrumb navigation -->
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li>Current Product</li>
  </ol>
</nav>
```

## Examples

### Example 1: Primary Horizontal Navigation

```html
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/" class="active">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/portfolio">Portfolio</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

### Example 2: Vertical Sidebar Navigation

```html
<nav aria-label="Sidebar navigation">
  <ul>
    <li><a href="/dashboard">Dashboard</a></li>
    <li><a href="/profile">Profile</a></li>
    <li><a href="/settings">Settings</a></li>
    <li><a href="/billing">Billing</a></li>
  </ul>
</nav>
```

### Example 3: Breadcrumb Navigation

```html
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li><a href="/products/laptops">Laptops</a></li>
    <li aria-current="page">ProBook X1</li>
  </ol>
</nav>
```

### Example 4: Pagination Navigation

```html
<nav aria-label="Pagination">
  <ul>
    <li><a href="/page/1" aria-label="Previous page">« Prev</a></li>
    <li><a href="/page/1" aria-label="Page 1">1</a></li>
    <li><a href="/page/2" aria-current="page" aria-label="Page 2, current page">2</a></li>
    <li><a href="/page/3" aria-label="Page 3">3</a></li>
    <li><a href="/page/4" aria-label="Next page">Next »</a></li>
  </ul>
</nav>
```

### Example 5: Multiple Navigations on One Page

```html
<!-- Primary navigation -->
<nav aria-label="Main">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/blog">Blog</a></li>
  </ul>
</nav>

<!-- Secondary: Table of Contents -->
<nav aria-label="Table of Contents">
  <ol>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
  </ol>
</nav>

<!-- Tertiary: Footer navigation -->
<nav aria-label="Footer">
  <ul>
    <li><a href="/privacy">Privacy</a></li>
    <li><a href="/terms">Terms</a></li>
  </ul>
</nav>
```

## Visual Explanation

### Navigation Structure Diagram

```
<nav aria-label="Main navigation"> ──────┐
├── <ul>                                │
│   ├── <li><a href="/">Home</a></li>   │
│   ├── <li><a href="/about">About</a>  │
│   ├── <li><a href="/services">...</a> │
│   └── <li><a href="/contact">...</a>  │
└── </ul>                               │
──────────────────────────────────────────
```

### Typical Navigation Layouts

```
Horizontal Nav (Top Bar):
┌──────────────────────────────────────────┐
│  Home  │  About  │  Services  │  Contact │
└──────────────────────────────────────────┘

Vertical Nav (Sidebar):
┌────┐
│Home│
│About│
│Services│
│Contact│
└────┘

Breadcrumb:
Home > Products > Laptops > ProBook X1

Pagination:
« 1  2  3  4  5  »
```

## Common Mistakes

1. **Using `<nav>` for all link groups** — Only wrap the main navigation blocks, not every collection of links
2. **Missing `aria-label`** — Without a label, screen readers announce "navigation" without context
3. **Using `<nav>` inside `<nav>`** — Navigation cannot be nested inside another navigation
4. **Using `<div>` or `<span>` instead of `<ul>`/`<ol>`** — Lists provide structure and accessibility
5. **Not marking the current page** — Use `aria-current="page"` for the active link
6. **Including non-navigation content in `<nav>`** — `<nav>` should only contain navigation links
7. **Forgetting the hamburger menu accessibility** — Mobile menus need proper ARIA labels

## Best Practices

1. Always use `aria-label` to distinguish multiple `<nav>` elements
2. Use `<ul>` (or `<ol>`) to structure navigation links
3. Add `aria-current="page"` to the current page's link
4. Use descriptive, concise link text (avoid "click here")
5. Make navigation keyboard accessible with visible focus indicators
6. For breadcrumbs, use `<ol>` (order matters) and `aria-label="Breadcrumb"`
7. For pagination, use `aria-label` on each page link
8. Place primary `<nav>` inside the page `<header>` for consistency
9. Keep navigation HTML structure simple and semantic
10. Test navigation with screen readers and keyboard-only navigation

## Summary Notes

- `<nav>` is a semantic element for major navigation blocks
- Has an implicit ARIA role of `navigation`
- Always use `aria-label` to differentiate multiple `<nav>` elements
- Common patterns: horizontal, vertical, breadcrumb, sidebar, pagination
- Use `<ul>` for unordered navigation, `<ol>` for ordered (breadcrumbs, pagination)
- `aria-current="page"` marks the current/active page link
- `<nav>` creates a section in the document outline
- Footer navigation should use `<nav>` if it contains a significant link collection
- Mobile navigation often requires hamburger menus with proper accessibility attributes
- Navigation links should be descriptive and meaningful out of context
- `<nav>` should not be nested inside another `<nav>`
- The `<nav>` element is a landmark region for assistive technologies
