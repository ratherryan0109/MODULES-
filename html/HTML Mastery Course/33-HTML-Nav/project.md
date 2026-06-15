# Mini Project: Multi-Level Navigation System

## Objective
Build a complete, production-ready navigation system for a fictional tech company website called "NovaTech". The navigation must include primary navigation, breadcrumbs, and pagination — all styled consistently with a modern design system.

## Requirements

### Navigation Components

#### 1. Primary Navigation (Top Bar)
- Company logo: "NovaTech" with a simple SVG or text logo
- 5 links: Home, Solutions, Products, Resources, Contact
- "Solutions" has a dropdown sub-menu with 4 items: Cloud, Security, AI/ML, Consulting
- "Resources" has a dropdown with 3 items: Blog, Documentation, Webinars
- Active page indicator using `aria-current="page"` (Home is active)
- Sticky at the top when scrolling
- Responsive: hamburger menu below 768px (CSS checkbox hack)

#### 2. Breadcrumb Navigation
- Located below the primary nav, inside a page header
- Shows: Home > Products > Cloud Platform
- Uses `<ol>` since order matters
- Proper `aria-label="Breadcrumb"` and `aria-current="page"`

#### 3. Pagination Navigation
- At the bottom of a product listing page
- 7 pages of results, page 3 is current
- Previous/Next buttons with aria-labels
- Current page marked with `aria-current="page"`
- Ellipsis (...) for gaps between pages

### HTML Requirements
- All three navigation components must use `<nav>` with distinct `aria-label` attributes
- Links must use `<ul>` or `<ol>` with `<li>` children
- Dropdowns must use nested `<ul>` elements
- Use `aria-current`, `aria-haspopup`, `aria-expanded` where appropriate
- Include a "Skip to main content" link

### CSS Requirements
- Consistent color scheme: Dark navy (#0f172a) primary, blue (#3b82f6) accents
- Sticky primary navigation
- Smooth transitions on hover, focus, and dropdown
- Breadcrumb with `›` separator between items
- Pagination with styled number boxes
- Responsive: hamburger menu for mobile, stacked breadcrumbs on small screens
- Visible focus indicators for keyboard users

### Accessibility
- Skip-to-content link
- All navigations have unique `aria-label`
- Dropdowns must be keyboard accessible
- Focus indicators on all interactive elements
- Proper heading hierarchy

## Steps

1. Create the HTML skeleton with DOCTYPE, meta tags, and language attribute
2. Add the skip-to-content link as the first element after `<body>`
3. Build the primary navigation in `<header>` with logo, links, and dropdowns
4. Add the hamburger toggle using a hidden checkbox
5. Build the breadcrumb navigation with `<ol>`
6. Build the pagination navigation with `<ul>`
7. Add the `<main>` content section with an `<h1>` and filler content
8. Write CSS: reset, variables, typography, sticky header
9. Style the primary navigation (flexbox, colors, spacing, hover)
10. Style the dropdown menus
11. Style the breadcrumb trail
12. Style the pagination
13. Implement the responsive hamburger menu
14. Add focus styles for keyboard navigation
15. Validate HTML and test

## Example Structure

```html
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <header>
    <nav aria-label="Main navigation">
      <!-- logo + links + dropdowns + hamburger -->
    </nav>
  </header>

  <nav aria-label="Breadcrumb">
    <ol>
      <li><a href="/">Home</a></li>
      <li><a href="/products">Products</a></li>
      <li aria-current="page">Cloud Platform</li>
    </ol>
  </nav>

  <main id="main-content">
    <h1>Cloud Platform</h1>
    <!-- product listing content -->

    <nav aria-label="Pagination">
      <ul>
        <li><a href="#" aria-label="Previous page">«</a></li>
        <li><a href="#" aria-label="Page 1">1</a></li>
        <li><a href="#" aria-label="Page 2">2</a></li>
        <li><a href="#" aria-current="page" aria-label="Page 3, current page">3</a></li>
        <li><span>...</span></li>
        <li><a href="#" aria-label="Page 7">7</a></li>
        <li><a href="#" aria-label="Next page">»</a></li>
      </ul>
    </nav>
  </main>
</body>
```

## Expected Output

A professional navigation system with:
- Sticky top navigation with hover dropdowns
- Responsive hamburger menu on mobile
- Breadcrumb trail showing page hierarchy
- Pagination controls for browsing listings
- All navigations accessible via keyboard and screen reader
- Consistent modern styling throughout

## Bonus Challenges

- Add a search bar inside the primary navigation
- Implement a progress indicator below the sticky nav
- Add a secondary sub-navigation for product categories
- Use CSS Grid to make pagination wrap on small screens
- Add keyboard shortcut (e.g., `Alt+N` to focus navigation)
