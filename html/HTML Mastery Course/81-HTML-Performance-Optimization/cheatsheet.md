# HTML Performance Optimization Cheatsheet

## Core Web Vitals Targets

| Metric | Target | Description |
|--------|--------|-------------|
| LCP | < 2.5s | Largest Contentful Paint |
| FID | < 100ms | First Input Delay |
| CLS | < 0.1 | Cumulative Layout Shift |
| TTFB | < 800ms | Time to First Byte |
| FCP | < 1.8s | First Contentful Paint |
| TBT | < 200ms | Total Blocking Time |
| SI | < 3.4s | Speed Index |

## Critical Rendering Path

```
HTML  →  DOM      →  Render Tree  →  Layout  →  Paint → Composite
CSS   →  CSSOM ↗
```

## Resource Priority

| Priority | Resource Type |
|----------|---------------|
| Highest | CSS (render-blocking), fonts, hero images |
| High | Scripts (defer), critical images |
| Medium | Non-critical images, async scripts |
| Low | Prefetch, preconnect, analytics |

## Optimized HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Optimized Page</title>
  <meta name="description" content="...">
  
  <!-- Preconnect -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://cdn.example.com" crossorigin>
  <link rel="dns-prefetch" href="https://cdn.example.com">
  
  <!-- Preload critical resources -->
  <link rel="preload" href="hero.webp" as="image">
  <link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
  
  <!-- Inline critical CSS -->
  <style>/* above-the-fold styles */</style>
  
  <!-- Async non-critical CSS -->
  <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="styles.css"></noscript>
</head>
<body>
  <!-- Critical content first -->
  <header><!-- above the fold --></header>
  <main>
    <section><!-- LCP element --></section>
  </main>
  
  <!-- Deferred JavaScript -->
  <script src="app.js" defer></script>
  <script src="analytics.js" async></script>
</body>
</html>
```

## Image Optimization

```html
<!-- Standard optimized image -->
<img src="photo.webp" 
     alt="Description"
     width="800" height="600"
     loading="lazy" 
     decoding="async">

<!-- Responsive with srcset -->
<img src="photo-800.webp"
     srcset="photo-400.webp 400w, photo-800.webp 800w, photo-1200.webp 1200w"
     sizes="(max-width: 600px) 100vw, 800px"
     alt="Description"
     width="800" height="600"
     loading="lazy">

<!-- Art direction with picture -->
<picture>
  <source media="(min-width: 800px)" srcset="hero-wide.webp">
  <source media="(min-width: 400px)" srcset="hero-tablet.webp">
  <img src="hero-mobile.webp" alt="Hero" width="400" height="600" loading="eager">
</picture>

<!-- Hero image (do not lazy load) -->
<img src="hero.webp" alt="Hero" width="1200" height="600" loading="eager">
```

## Script Loading Comparison

| Method | Download | Execute | Order | Best For |
|--------|----------|---------|-------|----------|
| Normal | Blocks parser | Immediately | Document order | Avoid |
| `defer` | Parallel | After parse | Document order | DOM-dependent scripts |
| `async` | Parallel | When ready | Any order | Independent scripts |
| `type="module"` | Parallel | After parse | Document order | ES6 modules |

## Resource Hints Reference

| Hint | What It Does | Use Case |
|------|-------------|----------|
| `preconnect` | DNS + TCP + TLS handshake | Known third-party origins |
| `dns-prefetch` | DNS resolution only | Fallback for older browsers |
| `preload` | High-priority fetch | Current page critical resources |
| `prefetch` | Low-priority idle fetch | Likely next page resources |
| `prerender` | Full page prerender | Very likely next page |

## Font Optimization

```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter.woff2') format('woff2');
  font-display: swap;          /* Show fallback immediately */
  font-weight: 400 700;        /* Variable font range */
}
```

## Performance Budget

| Resource | Budget |
|----------|--------|
| HTML size | < 30KB (minified) |
| Total page weight | < 500KB |
| Total requests | < 50 |
| DOM nodes | < 1500 |
| DOM depth | < 32 levels |
| JavaScript | < 200KB (gzipped) |
| CSS | < 50KB (gzipped) |
| Images | < 200KB (total) |

## Common Mistakes

| Mistake | Impact | Fix |
|---------|--------|-----|
| Render-blocking JS (head) | Delays LCP by 1-3s | Add defer/async |
| No image dimensions | CLS score > 0.1 | Add width + height |
| Uncompressed images | +200-500KB page weight | Use WebP/AVIF |
| Missing preconnect | +100-300ms latency | Preconnect to origins |
| Synchronous fonts | FOIT up to 3s | font-display: swap |
| Large DOM | +50-200ms layout time | Reduce to < 1500 nodes |
| No caching | Every visit is cold | Cache-Control headers |
| Render-blocking CSS | +500-1500ms render delay | Inline critical CSS |

## Tools

| Tool | URL | Purpose |
|------|-----|---------|
| Google Lighthouse | Chrome DevTools | Performance audits |
| PageSpeed Insights | pagespeed.web.dev | Lab + field data |
| WebPageTest | webpagetest.org | Detailed waterfall |
| Chrome DevTools | Built-in | Real-time analysis |
| BundlePhobia | bundlephobia.com | NPM package costs |
| Squoosh | squoosh.app | Image optimization |
| CSS Triggers | csstriggers.com | Layout/paint costs |
