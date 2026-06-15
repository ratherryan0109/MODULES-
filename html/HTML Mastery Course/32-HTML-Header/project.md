# Mini Project: Company Landing Page Header

## Objective
Build a complete, production-quality page header for a fictional SaaS company called "CloudFlow". The header must include branding, navigation, search, user actions, and be fully responsive with a sticky behavior.

## Requirements

### Content Structure
- A top announcement bar: "🚀 Get 30% off your first month! Learn more →"
- Main header bar with:
  - Company logo (use an SVG or styled text logo "CloudFlow")
  - Site title in an `<h1>` (hidden visually but available to screen readers)
  - Search form with input and submit button
  - User action links: "Log In" (text) and "Start Free Trial" (button style)
- Navigation bar below with 5 links: Product, Features, Pricing, Resources, Contact
- A "Skip to Content" accessibility link as the first focusable element

### HTML Requirements
- Must use `<header>` at page level (direct child of `<body>`)
- Must use `<nav>` with `aria-label` for main navigation
- Must use `<h1>` for the site name
- Must include a `<form role="search">` for the search bar
- Links must be wrapped in an unordered list inside `<nav>`
- All `<a>` elements must have `href="#"` (or realistic paths)

### CSS Requirements
- Flexbox layout for the header bars
- Sticky behavior: the navigation bar sticks to the top on scroll
- Custom styling: colors, fonts, spacing, hover effects
- Responsive: below 768px, collapse navigation into a hamburger menu (use CSS checkbox hack — no JavaScript)
- Smooth transitions on hover and scroll
- Announcement bar should be dismissible with CSS (checkbox hack)

### Accessibility
- Skip-to-content link (visually hidden until focused)
- `aria-label` on `<nav>`
- Proper color contrast ratios
- All interactive elements focusable and visible
- Site name as `<h1>` (can be visually hidden with `sr-only` class)

## Steps

1. Create HTML document with `<!DOCTYPE html>` and language attribute
2. Add the skip-to-content link as the first child of `<body>`
3. Create the announcement bar with dismiss checkbox
4. Build the main header bar with logo, title, search, and user actions
5. Build the navigation bar with sticky positioning
6. Add a `<main>` section with the `id` for the skip link target
7. Write CSS: variables, reset, typography, flexbox layouts
8. Add hover effects, transitions, and sticky behavior
9. Implement responsive hamburger menu with CSS checkbox hack
10. Implement the dismissible announcement bar
11. Validate HTML and test responsiveness
12. Test keyboard navigation and screen reader announcements

## Example Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CloudFlow — Cloud Solutions</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Skip link -->
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <!-- Announcement Bar -->
  <div class="announcement-bar">...</div>

  <header>
    <!-- Main header -->
    <div class="header-main">
      <div class="brand">...</div>
      <form role="search">...</form>
      <div class="user-actions">...</div>
    </div>

    <!-- Navigation -->
    <nav aria-label="Main navigation">
      <input type="checkbox" id="nav-toggle" hidden>
      <label for="nav-toggle" class="hamburger">☰</label>
      <ul class="nav-links">...</ul>
    </nav>
  </header>

  <main id="main-content">
    <h2>Welcome to CloudFlow</h2>
    <p>Main content here. Scroll to see sticky nav in action.</p>
  </main>
</body>
</html>
```

## Expected Output

A professional SaaS landing page header with:
- Sticky navigation that stays at the top when scrolling
- Responsive design that works on mobile, tablet, and desktop
- Accessible navigation that works with keyboard and screen readers
- Clean, modern styling with smooth animations
- Dismissible announcement bar
- All semantic HTML5 elements properly used

## Bonus Challenges

- Add a dropdown mega menu to "Resources" with sub-links
- Add a progress indicator that fills as the user scrolls
- Implement a search suggestions dropdown (CSS only or with JS)
- Add a dark mode toggle in the header
- Animate the header to shrink on scroll using Intersection Observer API
