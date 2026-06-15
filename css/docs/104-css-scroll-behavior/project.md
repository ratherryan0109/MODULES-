# Mini Project: Single-Page Documentation Site

## Objective
Build a single-page documentation website with smooth scrolling navigation, an interactive table of contents with active state tracking, a back-to-top button, and scroll-margin offsets for all anchor targets. The site should provide a polished, accessible documentation browsing experience.

## Requirements

1. **Smooth scrolling**: Global smooth scrolling for all anchor link navigation
2. **Fixed header**: A header with the site title and navigation links (Home, Docs, API, About)
3. **Sidebar Table of Contents**: Sticky sidebar with links to all documentation sections
4. **Active state tracking**: The current section in the sidebar is highlighted as the user scrolls
5. **Back-to-top button**: Appears after scrolling 400px, smoothly scrolls to top
6. **scroll-margin**: All sections have proper scroll-margin-top to account for the fixed header
7. **Section highlight**: `:target` sections have a brief highlight animation when navigated to
8. **Reduced motion**: Disable smooth scrolling and animations when user prefers reduced motion
9. **Responsive**: Sidebar collapses to a top nav bar on mobile

## Specs

- `html { scroll-behavior: smooth; }` for global smooth scrolling
- `scroll-margin-top: calc(60px + 20px)` on all `section[id]` elements
- `IntersectionObserver` for active ToC state tracking (not scroll events)
- `window.scrollTo({ top: 0, behavior: 'smooth' })` for back-to-top
- `@media (prefers-reduced-motion: reduce)` to disable animations
- `:target` pseudo-class with CSS animation for section highlight
- Min 6 documentation sections with substantial content

## Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Documentation Site</title>
  <style>
    :root { --header-height: 60px; --color-primary: #3b82f6; --color-bg: #f8fafc; --color-text: #0f172a; }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, -apple-system, sans-serif; background: var(--color-bg); color: var(--color-text); line-height: 1.7; }

    /* TODO: html { scroll-behavior: smooth; } */

    /* Fixed header */
    .header {
      position: fixed;
      inset: 0 0 auto 0;
      height: var(--header-height);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-inline: 24px;
      background: white;
      border-block-end: 1px solid #e2e8f0;
      z-index: 100;
    }

    .layout {
      display: grid;
      grid-template-columns: 250px 1fr;
      gap: 40px;
      max-inline-size: 1100px;
      margin: calc(var(--header-height) + 40px) auto 0;
      padding-inline: 24px;
      padding-block-end: 80px;
    }

    /* Sidebar ToC */
    .sidebar {
      position: sticky;
      inset-block-start: calc(var(--header-height) + 40px);
      block-size: fit-content;
    }

    .sidebar ul { list-style: none; }
    .sidebar a {
      display: block;
      padding: 6px 12px;
      color: #64748b;
      text-decoration: none;
      border-radius: 6px;
      font-size: 0.9rem;
      border-inline-start: 3px solid transparent;
      transition: all 0.2s;
    }
    .sidebar a:hover { background: #e2e8f0; color: var(--color-text); }
    /* TODO: .sidebar a.active { border-color: var(--color-primary); ... } */

    /* Sections */
    section {
      margin-block-end: 40px;
      padding-block: 20px;
    }
    /* TODO: section[id] { scroll-margin-top: calc(var(--header-height) + 20px); } */

    /* :target highlight animation */
    /* TODO: @keyframes highlight { ... } */
    /* TODO: :target { animation: highlight 2s ease; } */

    /* Back-to-top */
    .back-to-top {
      position: fixed;
      inset-block-end: 24px;
      inset-inline-end: 24px;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: var(--color-primary);
      color: white;
      border: none;
      cursor: pointer;
      font-size: 1.2rem;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.3s, transform 0.3s;
      z-index: 100;
    }
    .back-to-top.visible { opacity: 1; transform: translateY(0); }

    /* Reduced motion */
    /* TODO: @media (prefers-reduced-motion: reduce) { ... } */

    /* Responsive */
    @media (max-width: 768px) {
      .layout { grid-template-columns: 1fr; }
      .sidebar { position: static; }
    }
  </style>
</head>
<body>
  <header class="header">
    <strong>📘 Docs</strong>
    <nav>
      <a href="#" style="color:var(--color-text);text-decoration:none;padding:0 8px;">Home</a>
      <a href="#" style="color:#64748b;text-decoration:none;padding:0 8px;">Docs</a>
      <a href="#" style="color:#64748b;text-decoration:none;padding:0 8px;">API</a>
    </nav>
  </header>

  <div class="layout">
    <aside class="sidebar" id="sidebar">
      <h3 style="margin-block-end:12px;font-size:0.85rem;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;">Contents</h3>
      <ul id="tocList"></ul>
    </aside>
    <main id="mainContent">
      <!-- Sections generated by JavaScript -->
    </main>
  </div>

  <button class="back-to-top" id="backToTop" aria-label="Back to top">⬆</button>

  <script>
    // Documentation sections data
    const sections = [
      { id: 'introduction', title: 'Introduction', content: 'Welcome to the documentation for our platform. This guide will help you understand the core concepts, APIs, and best practices for building applications.' },
      { id: 'getting-started', title: 'Getting Started', content: 'To get started, install the package via npm: npm install our-package. Then import it into your project and initialize it with your API key.' },
      { id: 'configuration', title: 'Configuration', content: 'The library supports extensive configuration options. You can customize behavior, theming, logging levels, and more through the config object.' },
      { id: 'core-concepts', title: 'Core Concepts', content: 'Understanding the architecture is key to using this library effectively. It is built on three core principles: modularity, performance, and accessibility.' },
      { id: 'advanced-usage', title: 'Advanced Usage', content: 'For power users, the library exposes advanced hooks and customization points. You can create plugins, extend base classes, and integrate with other frameworks.' },
      { id: 'api-reference', title: 'API Reference', content: 'This section covers the complete API surface including all exported functions, classes, interfaces, and their parameters with detailed descriptions.' },
      { id: 'troubleshooting', title: 'Troubleshooting', content: 'Common issues and their solutions. If you encounter problems, check this section first, then open a GitHub issue if needed.' },
    ];

    // TODO: Generate ToC links
    // TODO: Generate sections
    // TODO: Implement IntersectionObserver for active state
    // TODO: Implement back-to-top
    // TODO: Respect prefers-reduced-motion
  </script>
</body>
</html>
```

## Expected Output

- A fully functional single-page documentation site
- Smooth scrolling between all sections via sidebar links
- Active sidebar item tracking as user scrolls (using IntersectionObserver)
- Back-to-top button that appears after scrolling down 400px
- All sections properly offset for the fixed header
- Brief highlight animation on :target sections
- Degrades gracefully when prefers-reduced-motion is set
- Responsive layout: sidebar on desktop, top nav on mobile
- Professional, clean documentation appearance

## Stretch Goals

- Add keyboard navigation (Ctrl+K for search, arrow keys in sidebar)
- Add breadcrumb navigation showing current position
- Add a progress bar at the top of the page showing reading progress
- Implement a dark mode toggle
- Add expandable/collapsible subsections in the sidebar
- Add a "scroll to top" progress indicator around the button (SVG circle)
- Generate sections from a markdown-like data structure

## Evaluation Criteria

- Smooth scrolling works for all anchor links
- scroll-margin-top correctly offsets sections from fixed header
- Active ToC state updates correctly using IntersectionObserver
- Back-to-top button appears/hides with smooth transition
- :target highlight animation plays on navigation
- prefers-reduced-motion disables smooth scroll and animations
- Responsive design works on mobile
- Clean, accessible HTML structure with ARIA labels
