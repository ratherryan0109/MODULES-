# Mini Project: International Blog Layout

## Objective
Build a complete blog article page layout that uses CSS Logical Properties throughout. The layout must work correctly in LTR (English), RTL (Arabic/Hebrew), and have the foundation for vertical writing modes. No CSS should be duplicated for direction changes.

## Requirements

1. **Header**: Site title and navigation using logical margins and padding
2. **Article layout**: Three-column grid (sidebar - content - related articles) using logical sizing
3. **Sidebar**: Sticky positioned with `inset-block-start`, using logical borders
4. **Article content**: Proper padding, blockquote styling with `border-inline-start`, figure captions
5. **Footer**: Links with logical spacing, centered text
6. **Badge/tag elements**: Positioned with `inset-inline-end` and `inset-block-start`
7. **Mobile responsive**: Stack layout at narrow widths using logical sizing

## Specs

- Use `margin-inline: auto` for centering content containers
- Use `inline-size` and `block-size` instead of `width` and `height`
- Use `padding-inline` and `padding-block` for all spacing
- Use `border-inline-start` for blockquotes and accent borders
- Use `inset-inline-*` and `inset-block-*` for positioned elements
- Use `text-align: start` / `end` instead of `left` / `right`
- No `[dir="rtl"]` CSS overrides — everything must adapt automatically

## Starter Code

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My International Blog</title>
  <style>
    /* Reset */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #1a1a2e; background: #f8fafc; }

    /* Header — use logical padding */
    .site-header {
      /* TODO: Add padding-inline and padding-block */
      /* TODO: border-block-end */
      background: #1a1a2e;
      color: white;
    }

    .site-header h1 {
      /* TODO: margin-inline-end: auto for push effect */
    }

    /* Navigation — use logical margins for spacing */
    .nav-links {
      display: flex;
      /* TODO: gap */
    }

    /* Article Layout — use logical sizing */
    .article-layout {
      display: grid;
      grid-template-columns: 200px 1fr 200px;
      gap: 24px;
      /* TODO: max-inline-size, margin-inline: auto, padding-inline */
    }

    /* Sidebar — use sticky with logical positioning */
    .sidebar {
      position: sticky;
      /* TODO: inset-block-start */
      /* TODO: border-inline-end */
    }

    /* Blockquote — use logical border */
    blockquote {
      /* TODO: border-inline-start */
      /* TODO: margin-inline, padding-inline */
    }

    /* Tags / Badges — use logical positioning */
    .tag {
      /* TODO: inset-inline-end and inset-block-start for positioning */
    }

    /* Footer — use logical borders and alignment */
    .site-footer {
      /* TODO: border-block-start, text-align: center */
      /* TODO: padding-inline, padding-block */
    }

    /* Responsive */
    @media (max-width: 768px) {
      .article-layout {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <header class="site-header">
    <div class="article-layout">
      <h1>🌐 My Blog</h1>
      <nav class="nav-links">
        <a href="#">Home</a>
        <a href="#">Articles</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  </header>

  <div class="article-layout">
    <aside class="sidebar">
      <h3>Table of Contents</h3>
      <ul>
        <li>Introduction</li>
        <li>The Problem with Physical Properties</li>
        <li>How Logical Properties Help</li>
        <li>Practical Implementation</li>
        <li>Conclusion</li>
      </ul>
    </aside>

    <main class="content">
      <article>
        <h1>Building International Layouts with CSS Logical Properties</h1>
        <div class="tags">
          <span class="tag">CSS</span>
          <span class="tag">Internationalization</span>
          <span class="tag">Layout</span>
        </div>

        <p>CSS Logical Properties represent a fundamental shift in how we approach web layout. Instead of thinking in terms of fixed physical directions (left, right, top, bottom), we think in terms of flow-relative directions (inline, block, start, end).</p>

        <h2>The Problem with Physical Properties</h2>
        <p>When you use margin-left, padding-right, or border-top, you're making assumptions about the writing direction. These assumptions break down when your content needs to support:</p>
        <ul>
          <li>Right-to-left languages (Arabic, Hebrew, Urdu)</li>
          <li>Vertical writing modes (Japanese, Chinese, Mongolian)</li>
          <li>Mixed-direction content</li>
        </ul>

        <blockquote>
          <p>"The best international layout is one that doesn't need RTL-specific overrides — it just works because it was built with logical properties from the start."</p>
        </blockquote>

        <h2>How Logical Properties Help</h2>
        <p>By using margin-inline-start instead of margin-left, your layout automatically adapts to any writing direction. The border that appears on the left in English will correctly appear on the right in Arabic — without any additional CSS.</p>
      </article>
    </main>

    <aside class="related">
      <h3>Related Articles</h3>
      <ul>
        <li><a href="#">CSS Writing Modes Explained</a></li>
        <li><a href="#">Building RTL-Ready Components</a></li>
        <li><a href="#">Modern CSS Layout Techniques</a></li>
      </ul>
    </aside>
  </div>

  <footer class="site-footer">
    <p>&copy; 2026 My Blog. Built with logical properties.</p>
    <nav>
      <a href="#">Privacy</a>
      <span class="separator">•</span>
      <a href="#">Terms</a>
      <span class="separator">•</span>
      <a href="#">Accessibility</a>
    </nav>
  </footer>
</body>
</html>
```

## Expected Output

- In LTR: Header with logo on left, nav on right; sidebar on left, content center, related on right; blockquote left accent; tags top-right positioned
- In RTL (change `dir="rtl"`): Header with logo on right, nav on left; sidebar on right, content center, related on left; blockquote right accent; tags top-left positioned
- Responsive at mobile: Single column with sidebar and related sections stacking
- No direction-specific CSS overrides anywhere

## Stretch Goals

- Add a language switcher button that toggles `dir` attribute between LTR and RTL
- Add a writing mode toggle (horizontal vs vertical-rl)
- Add smooth transitions when direction changes
- Add `prefers-color-scheme` dark mode support that maintains logical property usage

## Evaluation Criteria

- All spacing uses logical properties (padding-inline, margin-block, etc.)
- No physical properties used for layout (left, right, top, bottom in CSS)
- Blockquote accent border moves correctly in RTL without overrides
- Sticky sidebar positions correctly in all modes
- Badge/tag elements reposition correctly
- Responsive breakpoint works in both LTR and RTL
- Clean, readable CSS with consistent naming
