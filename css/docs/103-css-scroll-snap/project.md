# Mini Project: Interactive Portfolio Showcase

## Objective
Build an interactive portfolio website that uses CSS scroll snap for navigation. The site should feature full-screen project slides with horizontal category navigation and vertical project browsing within each category. Include a progress indicator, keyboard navigation, and responsive design.

## Requirements

1. **Landing hero section**: Full-viewport hero with name/title that snaps to the top
2. **Project categories**: Horizontal scroll snap navigation between categories (Web, Design, Photography)
3. **Project items**: Within each category, vertical scroll snap through individual projects
4. **Navigation indicators**: Dots showing current category and current project within category
5. **Navigation arrows**: Previous/next buttons for both category and project navigation
6. **Keyboard support**: Arrow keys navigate between categories and projects
7. **Fixed header**: Transparent header that becomes opaque on scroll, with `scroll-padding` adjustment
8. **Responsive**: Stack vertically on mobile with single-axis scroll snap

## Specs

- Use `scroll-snap-type: x mandatory` for horizontal category navigation
- Use `scroll-snap-type: y proximity` for vertical project navigation within categories
- Use `scroll-padding-block-start` to account for the fixed header
- Use `scroll-snap-stop: always` on category boundaries
- Include arrow key event listeners for keyboard navigation
- Use `scroll-behavior: smooth` for polished transitions
- CSS custom properties for theming (colors, fonts)

## Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio Showcase</title>
  <style>
    :root {
      --header-height: 60px;
      --bg: #0f0f0f;
      --text: #ffffff;
      --accent: #667eea;
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, sans-serif; background: var(--bg); color: var(--text); overflow: hidden; }

    /* Fixed header */
    .header {
      position: fixed;
      inset: 0 0 auto 0;
      height: var(--header-height);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-inline: 24px;
      background: rgba(15, 15, 15, 0.8);
      backdrop-filter: blur(10px);
      z-index: 100;
      border-block-end: 1px solid rgba(255,255,255,0.1);
    }

    /* Category navigation - horizontal snap */
    .categories {
      display: flex;
      overflow-x: auto;
      overflow-y: hidden;
      width: 100vw;
      height: 100vh;
      /* TODO: scroll-snap-type: x mandatory */
      /* TODO: scroll-behavior: smooth */
    }

    .category {
      flex: 0 0 100vw;
      height: 100vh;
      /* TODO: scroll-snap-align: start */
      /* TODO: scroll-snap-stop: always */
      position: relative;
      overflow: hidden;
    }

    /* Category label fixed within category */
    .category-label {
      position: absolute;
      inset-block-start: calc(var(--header-height) + 40px);
      inset-inline-start: 40px;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 4px;
      opacity: 0.5;
    }

    .category-title {
      position: absolute;
      inset-block-start: calc(var(--header-height) + 70px);
      inset-inline-start: 40px;
      font-size: 3rem;
      font-weight: 800;
    }

    /* Projects within category - vertical snap */
    .projects {
      height: 100vh;
      overflow-y: auto;
      /* TODO: scroll-snap-type: y proximity */
      padding-block-start: 140px; /* space for category label */
    }

    .project {
      height: 100vh;
      /* TODO: scroll-snap-align: start */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px;
    }

    /* Navigation dots */
    .nav-dots {
      position: fixed;
      inset-block-end: 40px;
      inset-inline: 0;
      display: flex;
      justify-content: center;
      gap: 12px;
      z-index: 100;
    }

    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: rgba(255,255,255,0.2);
      cursor: pointer;
      transition: all 0.3s;
      border: none;
    }

    .dot.active { background: var(--accent); transform: scale(1.3); }

    /* Navigation arrows */
    .nav-arrow {
      position: fixed;
      inset-block-start: 50%;
      transform: translateY(-50%);
      z-index: 100;
      background: rgba(255,255,255,0.1);
      border: none;
      color: white;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 1.5rem;
      backdrop-filter: blur(4px);
      transition: background 0.3s;
    }
    .nav-arrow:hover { background: rgba(255,255,255,0.2); }
    .nav-arrow.prev { inset-inline-start: 20px; }
    .nav-arrow.next { inset-inline-end: 20px; }

    /* Project backgrounds */
    .project:nth-child(1) { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
    .project:nth-child(2) { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
    .project:nth-child(3) { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }

    .category:nth-child(2) .project:nth-child(1) { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }
    .category:nth-child(2) .project:nth-child(2) { background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); }
    .category:nth-child(3) .project:nth-child(1) { background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%); }
    .category:nth-child(3) .project:nth-child(2) { background: linear-gradient(135deg, #fccb90 0%, #d57eeb 100%); }
  </style>
</head>
<body>
  <header class="header">
    <span class="logo">✦ Portfolio</span>
    <nav>
      <a href="#" style="color:var(--accent);text-decoration:none;">Work</a>
      <a href="#" style="color:rgba(255,255,255,0.5);text-decoration:none;margin-inline-start:20px;">About</a>
      <a href="#" style="color:rgba(255,255,255,0.5);text-decoration:none;margin-inline-start:20px;">Contact</a>
    </nav>
  </header>

  <div class="categories" id="categoriesContainer">
    <!-- Category: Web Development -->
    <div class="category">
      <div class="category-label">Category 01</div>
      <div class="category-title">Web Development</div>
      <div class="projects">
        <div class="project">
          <h2 style="font-size:2rem;">E-Commerce Platform</h2>
          <p style="opacity:0.7;max-width:500px;text-align:center;">A full-featured online store built with React, Node.js, and Stripe</p>
        </div>
        <div class="project">
          <h2 style="font-size:2rem;">Dashboard Analytics</h2>
          <p style="opacity:0.7;max-width:500px;text-align:center;">Real-time data visualization dashboard with customizable widgets</p>
        </div>
        <div class="project">
          <h2 style="font-size:2rem;">Social Media App</h2>
          <p style="opacity:0.7;max-width:500px;text-align:center;">Mobile-first social platform with real-time messaging</p>
        </div>
      </div>
    </div>

    <!-- Category: Design -->
    <div class="category">
      <div class="category-label">Category 02</div>
      <div class="category-title">UI/UX Design</div>
      <div class="projects">
        <div class="project">
          <h2 style="font-size:2rem;">SaaS Landing Page</h2>
          <p style="opacity:0.7;max-width:500px;text-align:center;">Conversion-optimized landing page for a B2B software company</p>
        </div>
        <div class="project">
          <h2 style="font-size:2rem;">Mobile Banking App</h2>
          <p style="opacity:0.7;max-width:500px;text-align:center;">Complete redesign of a banking app with focus on accessibility</p>
        </div>
      </div>
    </div>

    <!-- Category: Photography -->
    <div class="category">
      <div class="category-label">Category 03</div>
      <div class="category-title">Photography</div>
      <div class="projects">
        <div class="project">
          <h2 style="font-size:2rem;">Urban Landscapes</h2>
          <p style="opacity:0.7;max-width:500px;text-align:center;">A collection of cityscape photography from around the world</p>
        </div>
        <div class="project">
          <h2 style="font-size:2rem;">Portrait Series</h2>
          <p style="opacity:0.7;max-width:500px;text-align:center;">Environmental portraits capturing people in their natural habitats</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Navigation arrows -->
  <button class="nav-arrow prev" id="prevBtn">←</button>
  <button class="nav-arrow next" id="nextBtn">→</button>

  <!-- Dots -->
  <div class="nav-dots" id="dotsContainer"></div>

  <script>
    // TODO: Implement
    // 1. Update category dots based on scroll position
    // 2. Arrow navigation for categories
    // 3. Keyboard navigation (arrow keys)
    // 4. Click dots to navigate
  </script>
</body>
</html>
```

## Expected Output

- Full-screen portfolio with 3 categories (Web, Design, Photography)
- Horizontal scroll snap between categories
- Vertical scroll snap between projects within each category
- Navigation dots that update based on current position
- Arrow buttons for category navigation
- Keyboard arrow key support
- Smooth, polished transitions
- Responsive layout on mobile (vertical stacking)
- Professional dark theme with accent color

## Stretch Goals

- Add smooth transitions between category backgrounds
- Add parallax effect on project content when scrolling
- Add a mini-map showing all categories and projects
- Implement touch/swipe gesture support for mobile
- Add URL hash-based navigation (e.g., #web, #design)
- Add a loading animation when switching categories
- Add prefers-reduced-motion support to disable smooth scroll

## Evaluation Criteria

- Horizontal scroll snap works correctly for category navigation
- Vertical scroll snap works for project navigation within categories
- Fixed header has scroll-padding applied
- Navigation dots update correctly
- Arrow keys navigate between categories
- Arrow buttons navigate between categories
- Responsive on mobile devices
- Smooth scroll behavior
- Professional visual design
- Clean, well-organized CSS
