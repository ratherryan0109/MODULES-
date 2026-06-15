# Mini Project: Performance-Optimized News Portal

## Project Overview

You will build a news article page for "TechPress Daily" and then optimize it for performance. The starting version will have deliberate performance anti-patterns. Your task is to identify and fix all issues, achieving a Lighthouse Performance score of 95+.

## Learning Objectives

- Identify common HTML performance bottlenecks
- Implement critical CSS inlining
- Use resource hints effectively
- Optimize images with responsive srcset and lazy loading
- Defer non-critical JavaScript
- Optimize font loading
- Measure and verify performance improvements

## Starting Template (Unoptimized)

Create this unoptimized version first, then identify all issues:

```html
<!DOCTYPE html>
<html>
<head>
  <title>TechPress Daily</title>
  <meta charset="UTF-8">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdn.example.com/analytics.js"></script>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap">
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="news.css">
  <link rel="stylesheet" href="widgets.css">
</head>
<body>
  <header>
    <img src="logo.png" alt="Logo">
    <nav>
      <a href="/">Home</a>
      <a href="/tech">Tech</a>
      <a href="/science">Science</a>
    </nav>
  </header>
  <main>
    <article>
      <h1>Breaking News: AI Breakthrough</h1>
      <img src="hero-image.jpg" alt="AI concept art">
      <p>Scientists announced a major breakthrough...</p>
      <img src="chart-infographic.jpg" alt="Chart showing AI growth">
      <p>More details about the discovery...</p>
      <img src="team-photo.jpg" alt="Research team">
      <p>Additional content below the fold...</p>
      <img src="related-1.jpg" alt="Related">
      <img src="related-2.jpg" alt="Related">
      <img src="related-3.jpg" alt="Related">
    </article>
    <aside>
      <h2>Popular Articles</h2>
      <div class="widget">Popular post 1</div>
      <div class="widget">Popular post 2</div>
    </aside>
  </main>
  <script src="main.js"></script>
  <script src="comments.js"></script>
  <script src="social-share.js"></script>
</body>
</html>
```

**Identified Issues:**
1. Render-blocking scripts in `<head>` (jQuery, analytics) - use defer/async
2. Three separate CSS files loading synchronously - inline critical CSS, load rest async
3. External font loading without preconnect - add preconnect hints
4. Missing image dimensions - causes CLS
5. No lazy loading on below-fold images
6. No responsive images (srcset)
7. No resource hints (preload, preconnect)
8. No preload for hero image (LCP element)
9. Font loads render-blocking
10. No performance meta tags (viewport, charset order)

## Optimized Version

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Breaking News: AI Breakthrough - TechPress Daily</title>
  <meta name="description" content="Scientists announced a major breakthrough in artificial intelligence research.">
  <meta name="author" content="TechPress Daily">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://cdn.example.com">
  <link rel="dns-prefetch" href="https://cdn.example.com">
  
  <link rel="preload" href="hero-image.webp" as="image">
  <link rel="preload" href="/fonts/roboto.woff2" as="font" type="font/woff2" crossorigin>
  
  <style>
    /* Critical CSS - Above the fold */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    header { background: #1a1a2e; color: #fff; padding: 1rem 2rem; display: flex; align-items: center; justify-content: space-between; }
    header nav a { color: #e0e0e0; text-decoration: none; margin-left: 1.5rem; }
    header nav a:hover { color: #fff; }
    main { max-width: 1100px; margin: 0 auto; padding: 2rem; display: grid; grid-template-columns: 1fr 300px; gap: 2rem; }
    article h1 { font-size: 2.5rem; margin-bottom: 1rem; line-height: 1.2; }
    article img { max-width: 100%; height: auto; border-radius: 8px; margin: 1.5rem 0; }
    .hero-image { width: 100%; }
    aside h2 { font-size: 1.3rem; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #1a1a2e; }
    .widget { background: #f5f5f5; padding: 1rem; border-radius: 4px; margin-bottom: 1rem; }
    @media (max-width: 768px) { main { grid-template-columns: 1fr; } }
  </style>
  
  <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="styles.css"></noscript>
  <link rel="preload" href="news.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="news.css"></noscript>
  <link rel="preload" href="widgets.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="widgets.css"></noscript>
</head>
<body>
  <header>
    <img src="logo.svg" alt="TechPress Daily - Home" width="150" height="40">
    <nav aria-label="Main navigation">
      <a href="/">Home</a>
      <a href="/tech">Tech</a>
      <a href="/science">Science</a>
    </nav>
  </header>
  
  <main>
    <article>
      <h1>Breaking News: AI Breakthrough</h1>
      
      <img src="hero-image.webp" 
           alt="AI concept art showing neural network connections" 
           width="800" height="450"
           srcset="hero-image-400.webp 400w, hero-image-800.webp 800w, hero-image-1200.webp 1200w"
           sizes="(max-width: 768px) 100vw, 800px"
           loading="eager" decoding="async"
           class="hero-image">
      
      <p>Scientists announced a major breakthrough in artificial intelligence research, demonstrating a new model that can learn from significantly fewer examples than current systems...</p>
      
      <img src="chart-infographic.webp" 
           alt="Line chart showing AI model performance growth from 2020 to 2026, with a sharp increase in 2026" 
           width="800" height="500"
           loading="lazy" decoding="async">
      
      <p>More details about the discovery and its implications for the field...</p>
      
      <img src="team-photo.webp" 
           alt="Research team of 12 scientists standing in a laboratory" 
           width="800" height="533"
           loading="lazy" decoding="async">
      
      <p>Additional content below the fold continues here with more analysis...</p>
      
      <div class="related-gallery" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 2rem;">
        <img src="related-1.webp" alt="Related article thumbnail - Quantum Computing" width="250" height="167" loading="lazy" decoding="async">
        <img src="related-2.webp" alt="Related article thumbnail - Space Tech" width="250" height="167" loading="lazy" decoding="async">
        <img src="related-3.webp" alt="Related article thumbnail - Green Energy" width="250" height="167" loading="lazy" decoding="async">
      </div>
    </article>
    
    <aside>
      <h2>Popular Articles</h2>
      <div class="widget">How Quantum Computing Will Change Everything</div>
      <div class="widget">The Rise of WebAssembly in 2026</div>
      <div class="widget">Understanding Large Language Models</div>
    </aside>
  </main>
  
  <!-- Deferred scripts (load after HTML parsing) -->
  <script src="https://cdn.example.com/analytics.js" async></script>
  <script src="main.js" defer></script>
  <script src="comments.js" defer></script>
  <script src="social-share.js" defer></script>
</body>
</html>
```

## Implementation Steps

1. **Audit the unoptimized version** - Identify all performance issues
2. **Implement resource hints** - Add preconnect, dns-prefetch, preload
3. **Inline critical CSS** - Extract above-the-fold styles into `<style>` block
4. **Async CSS loading** - Use preload pattern for full CSS files
5. **Add image dimensions** - Prevent CLS on all images
6. **Implement responsive images** - Add srcset and sizes attributes
7. **Add lazy loading** - loading="lazy" on below-fold images
8. **Optimize hero image** - Preload, eager load, responsive
9. **Defer JavaScript** - Move scripts to end of body with defer/async
10. **Optimize fonts** - font-display: swap, preconnect to font origins

## Performance Testing

Run Lighthouse before and after optimization:

```bash
# Using Chrome DevTools:
# 1. Open DevTools → Lighthouse tab
# 2. Check "Performance" category
# 3. Generate report for both versions
```

Compare these metrics:
| Metric | Before | After | Target |
|--------|--------|-------|--------|
| Performance Score | | | ≥ 95 |
| LCP | | | < 2.5s |
| CLS | | | < 0.1 |
| TBT | | | < 200ms |
| SI | | | < 3.4s |

## Submission

Submit:
1. The optimized `index.html` file
2. A comparison report showing Lighthouse scores before and after optimization
3. A bullet list of all changes made and the rationale for each
