# Project: Responsive Blog Template with Modern CSS Layout

## Overview
Build a complete, responsive blog template using modern CSS layout techniques — Flexbox, CSS Grid, Container Queries, and intrinsic sizing. The template should work perfectly across devices without relying on traditional media query breakpoints for the main layout.

## Learning Objectives
- Implement the holy grail layout with CSS Grid named areas
- Use `auto-fill`/`minmax` for responsive galleries without media queries
- Combine Flexbox and Grid in a single page layout (hybrid approach)
- Use container queries for component-level responsiveness
- Apply intrinsic sizing (`min-content`, `max-content`, `fit-content`)
- Create accessible, semantic HTML structure with proper ARIA roles

## Requirements

### Page Structure
1. **Header** — Site title/logo, navigation links, search bar
2. **Hero Section** — Featured article with large image, title, excerpt
3. **Article Grid** — Grid of article cards (auto-fill responsive)
4. **Sidebar** — Categories, tag cloud, recent posts
5. **Footer** — Links, copyright, social icons

### Technical Requirements
- Use CSS Grid with `grid-template-areas` for the page layout
- Article cards use Flexbox for internal layout (image, text, metadata)
- Article grid uses `repeat(auto-fill, minmax(300px, 1fr))` — no media queries
- Implement at least one container query for a sidebar widget
- Use intrinsic sizing on at least 3 elements
- Set `container-type` on at least one component
- Include a `@supports` fallback for older browsers
- Use `min-height: 100vh` for sticky footer

### Responsive Behavior
- On desktop (wide): 3-column layout with sidebar
- On tablet (medium): 2-column grid, sidebar stacks below
- On mobile (narrow): single column, everything stacks
- **Constraint:** Only use media queries for the sidebar stacking behavior. Use intrinsic/Flexbox/Grid methods for everything else.

## Starter Structure

```html
<body class="blog-page">
  <header class="blog-header">
    <div class="logo">My Blog</div>
    <nav class="main-nav">
      <a href="#">Home</a>
      <a href="#">Articles</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <section class="hero">
    <article class="hero-article">
      <div class="hero-image"></div>
      <div class="hero-content">
        <h1>Featured Article Title</h1>
        <p>Article excerpt goes here...</p>
      </div>
    </article>
  </section>

  <div class="content-area">
    <main class="article-grid">
      <article class="article-card">
        <div class="card-image"></div>
        <div class="card-content">
          <h2>Article Title</h2>
          <p>Excerpt text...</p>
          <div class="card-meta">
            <span class="date">June 13, 2026</span>
            <span class="category">CSS</span>
          </div>
        </div>
      </article>
      <!-- Repeat for more articles -->
    </main>

    <aside class="sidebar">
      <div class="sidebar-widget">
        <h3>Categories</h3>
        <ul><!-- category list --></ul>
      </div>
      <div class="sidebar-widget">
        <h3>Recent Posts</h3>
        <ul><!-- recent posts --></ul>
      </div>
    </aside>
  </div>

  <footer class="blog-footer">
    <p>&copy; 2026 My Blog. All rights reserved.</p>
  </footer>
</body>
```

## Stretch Goals
- Add a theme toggle (dark/light) that adjusts layout colors
- Implement a `subgrid` card layout for the featured section
- Add CSS `@container` queries for sidebar widget responsiveness
- Use `content-visibility: auto` on off-screen articles for performance
- Add CSS `scroll-margin` for smooth anchor scrolling on article links

## Evaluation Criteria
- [ ] Holy grail layout with grid-template-areas
- [ ] Article grid uses auto-fill/minmax without media queries
- [ ] Cards use Flexbox for internal layout (equal height)
- [ ] At least one container query implemented
- [ ] Intrinsic sizing used on 3+ elements
- [ ] Sticky footer with min-height: 100vh
- [ ] Semantic HTML with accessible roles
- [ ] Sidebar stacks below main content on mobile (media query OK)
- [ ] Clean, well-commented CSS
- [ ] Works in Chrome, Firefox, Safari

## Submission
Push your completed blog template to a repository. Include screenshots at 3 breakpoints (desktop, tablet, mobile) showing the responsive layout in action.
