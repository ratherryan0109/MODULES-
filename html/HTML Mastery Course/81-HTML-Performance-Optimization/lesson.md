# Module 81: HTML Performance Optimization

## Introduction

HTML performance optimization is the practice of writing and delivering HTML in ways that minimize page load time, reduce bandwidth usage, and improve the user experience. Performance directly impacts user engagement, conversion rates, and search engine rankings. Google's Core Web Vitals have made performance a critical ranking factor, making optimization skills essential for every web developer.

## Learning Objectives

By the end of this module, you will be able to:
- Understand how HTML affects page load performance
- Implement critical rendering path optimizations
- Optimize HTML for Core Web Vitals (LCP, FID, CLS)
- Use performance optimization techniques (minification, compression, caching)
- Implement resource hints (preload, prefetch, preconnect)
- Optimize images, scripts, and fonts in HTML
- Measure and analyze HTML performance

## How Browsers Render HTML

Understanding the critical rendering path is essential for performance optimization:

```
HTML → DOM → Render Tree → Layout → Paint → Composite
CSS → CSSOM → 
```

1. **HTML is parsed** into the Document Object Model (DOM)
2. **CSS is parsed** into the CSS Object Model (CSSOM)
3. **DOM + CSSOM = Render Tree** (visible elements only)
4. **Layout** calculates element positions and sizes
5. **Paint** fills pixels on the screen
6. **Composite** layers are combined

## Core Web Vitals

### Largest Contentful Paint (LCP)
Measures perceived load speed. The largest visible element (image, text block) should load within 2.5 seconds.

**HTML Factors:**
- Image loading priority
- Font loading
- Render-blocking resources

### First Input Delay (FID)
Measures interactivity. The time from user interaction to browser response should be under 100ms.

**HTML Factors:**
- JavaScript loading and execution
- Long tasks on the main thread

### Cumulative Layout Shift (CLS)
Measures visual stability. Unexpected layout shifts should be under 0.1.

**HTML Factors:**
- Missing dimensions on images
- Dynamic content injection
- Web font loading causes layout shifts

## Performance Optimization Techniques

### 1. Minimize HTML Size

**Minification** removes unnecessary whitespace, comments, and formatting:

```html
<!-- Before (430 bytes) -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Welcome</h1>
  </header>
</body>
</html>

<!-- After (320 bytes - minified) -->
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Page Title</title><link rel="stylesheet" href="styles.css"></head><body><header><h1>Welcome</h1></header></body></html>
```

### 2. Optimize CSS Delivery

Critical CSS inlines above-the-fold styles:

```html
<head>
  <!-- Inline critical CSS for above-the-fold content -->
  <style>
    /* Above-the-fold styles only */
    header { background: #333; color: #fff; padding: 1rem; }
    .hero { font-size: 2.5rem; margin: 2rem 0; }
  </style>
  
  <!-- Load non-critical CSS asynchronously -->
  <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="styles.css"></noscript>
</head>
```

### 3. Defer Render-Blocking JavaScript

```html
<!-- Bad: blocks rendering -->
<script src="app.js"></script>

<!-- Good: deferred execution -->
<script src="app.js" defer></script>

<!-- Good: async for independent scripts -->
<script src="analytics.js" async></script>
```

### 4. Optimize Images with HTML Attributes

```html
<!-- Specify dimensions to prevent CLS -->
<img src="photo.jpg" width="800" height="600" alt="Description">

<!-- Lazy load below-the-fold images -->
<img src="photo.jpg" alt="Description" loading="lazy" decoding="async">

<!-- Responsive images with srcset -->
<img src="photo-800.jpg"
     srcset="photo-400.jpg 400w, photo-800.jpg 800w, photo-1200.jpg 1200w"
     sizes="(max-width: 600px) 100vw, 800px"
     alt="Description"
     loading="lazy"
     width="800" height="600">
```

### 5. Resource Hints

Resource hints tell the browser to perform actions early:

```html
<!-- Preload critical resources -->
<link rel="preload" href="fonts/inter.woff2" as="font" type="font/woff2" crossorigin>

<!-- Preconnect to third-party origins -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://analytics.example.com">

<!-- Prefetch resources for future navigation -->
<link rel="prefetch" href="/next-page/" as="document">

<!-- Prerender entire page (use sparingly) -->
<link rel="prerender" href="/next-page/">

<!-- DNS-prefetch for external domains -->
<link rel="dns-prefetch" href="https://cdn.example.com">
```

### 6. Font Optimization

```html
<!-- Preload critical fonts -->
<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>

<!-- Font display swap prevents invisible text -->
<style>
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/inter-var.woff2') format('woff2');
    font-display: swap; /* Show fallback text immediately */
  }
</style>

<!-- Subset fonts to only needed characters -->
<!-- Use woff2 format (best compression) -->
```

### 7. Structural Performance

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Performance Optimized Page</title>
  
  <!-- Critical CSS inlined -->
  <style>/* critical styles */</style>
  
  <!-- Preconnect to origins -->
  <link rel="preconnect" href="https://api.example.com">
  
  <!-- Preload hero image -->
  <link rel="preload" href="hero.webp" as="image">
</head>
<body>
  <!-- Critical content first -->
  <header><!-- above the fold --></header>
  <main>
    <section class="hero"><!-- LCP element --></section>
  </main>
  
  <!-- Deferred scripts -->
  <script src="app.js" defer></script>
</body>
</html>
```

### 8. Compression

Enable Gzip or Brotli compression on the server:

```
Accept-Encoding: gzip, deflate, br
Content-Encoding: br  (Brotli, best compression)
```

HTML typically compresses 70-90% with Brotli.

### 9. Caching

Use HTTP cache headers for HTML and resources:

```
Cache-Control: public, max-age=3600, must-revalidate
ETag: "abc123"
```

### 10. Reduce DOM Size

Large DOM trees increase memory usage and layout time:

```html
<!-- Bad: deeply nested, many elements -->
<div><div><div><div><span>Text</span></div></div></div></div>

<!-- Good: flat structure -->
<span>Text</span>
```

**Target: < 1500 total DOM nodes, depth < 32 levels**

## Performance Metrics

| Metric | Target | Description |
|--------|--------|-------------|
| LCP | < 2.5s | Largest element render time |
| FID | < 100ms | First interaction delay |
| CLS | < 0.1 | Layout shift score |
| TTFB | < 800ms | Time to first byte |
| FCP | < 1.8s | First contentful paint |
| TBT | < 200ms | Total blocking time |
| SI | < 3.4s | Speed index |

## Common Mistakes

| Mistake | Impact | Fix |
|---------|--------|-----|
| Render-blocking JS | Increases LCP | Use defer/async |
| Missing image dimensions | Causes CLS | Add width/height |
| Unoptimized images | Large LCP | Compress, use WebP |
| Too many HTTP requests | Slow loading | Bundle, inline |
| No resource hints | Slow discovery | Preload key resources |
| Large DOM size | Slow rendering | Reduce nesting |
| Synchronous font loading | Invisible text | font-display: swap |
| No compression | Large file sizes | Enable Brotli/gzip |

## Summary Notes

- Performance optimization starts with HTML structure
- Minimize render-blocking resources (CSS and JS)
- Always specify image dimensions to prevent CLS
- Use loading="lazy" for below-the-fold images
- Preload critical resources (fonts, hero images)
- Preconnect to third-party origins
- Inline critical CSS, defer non-critical
- Use defer for scripts, async for independent ones
- Enable compression (Brotli > Gzip)
- Set proper cache headers
- Monitor Core Web Vitals
- Small DOM size = better performance
