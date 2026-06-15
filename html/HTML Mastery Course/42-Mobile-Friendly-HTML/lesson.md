# Module 42: Mobile-Friendly HTML

## Introduction

Mobile-friendly HTML refers to writing HTML code that ensures an optimal experience on mobile devices. With mobile devices accounting for over 60% of web traffic globally, creating mobile-friendly pages is no longer optional — it's essential. Mobile-friendly HTML encompasses semantic structure, touch-friendly interactions, proper viewport configuration, responsive media, and performance optimization.

Google's mobile-first indexing means Google primarily uses the mobile version of a page for indexing and ranking. If your site isn't mobile-friendly, it will be disadvantaged in search results.

## Learning Objectives

By the end of this module, you will be able to:
- Understand the requirements for mobile-friendly websites
- Implement touch-friendly target sizes and spacing
- Use semantic HTML for mobile accessibility
- Optimize forms for mobile input
- Apply mobile-first CSS patterns
- Avoid common mobile pitfalls
- Test mobile-friendliness with Google's tools

## Core Requirements for Mobile-Friendly Pages

1. **Readable text** without zooming
2. **Proper viewport** configuration (see Module 41)
3. **Touch-friendly** tap targets (minimum 48x48 CSS pixels)
4. **Responsive layout** that adapts to screen size
5. **No horizontal scrolling** or content clipping
6. **Fast loading** performance
7. **Accessible forms** with proper input types

## Touch-Friendly Design

### Minimum Target Size
Google recommends touch targets of at least 48 CSS pixels:

```css
button, a, input, .tap-target {
  min-height: 48px;
  min-width: 48px;
  padding: 12px;
}
```

### Adequate Spacing

```css
.nav-links a {
  padding: 12px 16px;
  margin: 4px;
}
```

### Preventing Accidental Touches

```css
/* Prevent double-tap zoom on buttons */
button { touch-action: manipulation; }
```

## Mobile-Optimized Forms

### Use Appropriate Input Types

```html
<!-- Email keyboard with @ and .com on mobile -->
<input type="email" name="email" placeholder="Enter email">

<!-- Numeric keyboard for phone -->
<input type="tel" name="phone" placeholder="Phone number">

<!-- Numeric keypad for numbers -->
<input type="number" name="quantity" min="1" max="10">

<!-- URL keyboard -->
<input type="url" name="website" placeholder="https://">

<!-- Date picker -->
<input type="date" name="birthday">
```

### Large Form Elements

```css
input, select, textarea {
  font-size: 16px; /* Prevents iOS zoom on focus */
  padding: 12px;
  min-height: 48px;
  width: 100%;
  box-sizing: border-box;
}
```

### Autocomplete Attributes

```html
<input type="text" name="name" autocomplete="name">
<input type="email" name="email" autocomplete="email">
<input type="tel" name="phone" autocomplete="tel">
```

## Mobile Navigation Patterns

### Hamburger Menu
```html
<nav>
  <button class="menu-toggle" aria-label="Toggle menu">☰</button>
  <ul class="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
```

### Bottom Navigation (Mobile Apps)
```html
<nav class="bottom-nav" aria-label="Main navigation">
  <a href="/" class="active">Home</a>
  <a href="/search">Search</a>
  <a href="/profile">Profile</a>
</nav>
```

## Mobile Performance

### Lazy Loading Images
```html
<img src="image.jpg" loading="lazy" alt="..." 
     width="800" height="600">
```

### Responsive Images
```html
<img src="small.jpg"
     srcset="medium.jpg 768w, large.jpg 1200w"
     sizes="100vw"
     alt="...">
```

### Limit Font Sizes
Use `font-display: swap` to prevent invisible text during font loading:

```css
@font-face {
  font-family: 'CustomFont';
  src: url('font.woff2') format('woff2');
  font-display: swap;
}
```

## Preventing Common Mobile Issues

### 1. Prevent 300ms Tap Delay (Legacy)
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Modern browsers with this tag no longer have the delay -->
```

### 2. Prevent Zoom on Input Focus (iOS)
```css
input, textarea, select {
  font-size: 16px; /* iOS won't zoom if font-size >= 16px */
}
```

### 3. Prevent Text Size Adjustment
```css
html {
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}
```

### 4. Prevent Overflow
```css
img, video, iframe {
  max-width: 100%;
  height: auto;
}
pre, code {
  overflow-x: auto;
  word-wrap: break-word;
}
```

## Mobile-First CSS Patterns

```css
/* Base: Mobile styles */
body { font-size: 16px; }
.sidebar { display: none; }
.nav-links { flex-direction: column; }

/* Tablet */
@media (min-width: 768px) {
  .sidebar { display: block; }
  .nav-links { flex-direction: row; }
}

/* Desktop */
@media (min-width: 1024px) {
  body { font-size: 18px; }
}
```

## Google Mobile-Friendly Test

Google provides a [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) that checks:

- Viewport configuration
- Font legibility
- Tap target spacing
- Content width vs. screen width
- Plugin compatibility (Flash)

## Common Mistakes

- **Fixed-width elements** causing horizontal scroll
- **Tiny tap targets** (< 48px) that frustrate touch users
- **Input font-size < 16px** (iOS zooms on focus)
- **Disabling zoom** (accessibility violation)
- **Large unoptimized images** that slow loading
- **Hover-only interactions** that don't work on touch
- **Blocked CSS, JS, or images** in robots.txt

## Best Practices

1. Always use the viewport meta tag
2. Make all touch targets at least 48x48px
3. Use `font-size: 16px` minimum on form elements
4. Use responsive images with `srcset`
5. Add `loading="lazy"` to below-fold images
6. Optimize for Core Web Vitals (LCP, FID, CLS)
7. Test on real devices, not just DevTools
8. Use `touch-action: manipulation` on buttons
9. Avoid fixed-position elements that cover content
10. Implement proper `autocomplete` on form fields

## Summary Notes

| Requirement | Implementation |
|-------------|---------------|
| **Readable text** | Viewport meta tag, responsive typography |
| **Touch targets** | 48x48px minimum |
| **Forms** | Correct input types, 16px font minimum |
| **Images** | `max-width: 100%`, `srcset`, `loading="lazy"` |
| **Navigation** | Hamburger or priority+ pattern |
| **Performance** | Optimize images, lazy load, font-display: swap |
| **Testing** | Google Mobile-Friendly Test, real devices |
