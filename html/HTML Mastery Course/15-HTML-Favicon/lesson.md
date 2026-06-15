# Module 15: HTML Favicon

## Introduction

A favicon (short for "favorite icon") is a small icon associated with a website. It appears in browser tabs, bookmarks, history, address bars, and search results. Despite its tiny size (typically 16×16 or 32×32 pixels), the favicon plays an important role in brand recognition and user experience.

When users have multiple tabs open, the favicon helps them quickly identify and navigate to your site. A well-designed favicon reinforces your brand and adds a professional touch to your website.

---

## Learning Objectives

By the end of this module, you will be able to:
- Add a favicon to an HTML page using the `<link>` element
- Understand different favicon file formats and sizes
- Create favicons for different devices and platforms
- Use modern SVG favicons
- Implement multi-resolution favicons with the `sizes` attribute
- Understand iOS/Android app icon integration

---

## Syntax

### Basic Favicon

```html
<link rel="icon" href="favicon.ico" type="image/x-icon">
```

The `<link>` element is placed in the `<head>` section. For a basic favicon, you need:
- `rel="icon"` — Specifies this is a favicon
- `href` — Path to the icon file
- `type` — MIME type of the icon file

### Modern Favicon

```html
<link rel="icon" type="image/svg+xml" href="favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16.png">
```

---

## Favicon File Formats

| Format | Extension | MIME Type | Use Case |
|--------|-----------|-----------|----------|
| ICO | `.ico` | `image/x-icon` | Legacy, all sizes in one file |
| PNG | `.png` | `image/png` | Modern browsers, multiple sizes |
| SVG | `.svg` | `image/svg+xml` | Scalable, modern browsers |
| GIF | `.gif` | `image/gif` | Animated favicons (rare) |

**ICO format** is the traditional favicon format that can contain multiple sizes (16×16, 32×32, 48×48) in a single file. It has the widest browser support.

**PNG format** is recommended for modern websites. Use multiple sizes for different contexts.

**SVG format** is the most modern approach — it scales perfectly and works in modern browsers.

---

## Standard Sizes

| Size | Context |
|------|---------|
| 16×16 | Browser tab, address bar |
| 32×32 | Taskbar, shortcuts |
| 48×48 | Windows desktop shortcuts |
| 64×64 | High-resolution displays |
| 180×180 | Apple touch icon (iOS) |
| 192×192 | Android Chrome (PWA) |
| 512×512 | Android splash screen (PWA) |

---

## Complete Favicon Setup

```html
<head>
  <!-- Main favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">

  <!-- PNG fallback for modern browsers -->
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

  <!-- Apple Touch Icon (iOS Safari) -->
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">

  <!-- Android Chrome (PWA) -->
  <link rel="manifest" href="/site.webmanifest">
</head>
```

---

## Apple Touch Icons

Apple devices use `apple-touch-icon` for bookmarks and the home screen when users "Add to Home Screen."

```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

Sizes for Apple devices:
- iPad Pro: 167×167
- iPad Retina: 152×152
- iPhone/iPod: 120×120
- iPhone 6+ / iPad Pro: 180×180

---

## SVG Favicons

SVG favicons are resolution-independent and work in modern browsers (Chrome, Firefox, Edge).

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
```

**Advantages:**
- Scales perfectly to any size
- Supports animations (if desired)
- Very small file size
- Works on retina screens

---

## Web Manifest (PWA)

For Progressive Web Apps, provide a `site.webmanifest` file that links to various icon sizes:

**site.webmanifest:**
```json
{
  "name": "My Website",
  "short_name": "Site",
  "icons": [
    { "src": "/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png" }
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

```html
<link rel="manifest" href="/site.webmanifest">
```

---

## Emoji Favicons (Quick Hack)

For development or personal projects, you can use an emoji as a favicon using a data URI:

```html
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>">
```

---

## Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| ICO format | ✅ | ✅ | ✅ | ✅ |
| PNG favicon | ✅ | ✅ | ✅ | ✅ |
| SVG favicon | ✅ | ✅ | ⚠️ (limited) | ✅ |
| Animated GIF | ✅ | ✅ | ❌ | ✅ |
| Apple touch icon | N/A | N/A | ✅ | N/A |

---

## Best Practices

1. **Create multiple sizes** — Cover all devices and contexts
2. **Use SVG as the primary** — With PNG fallbacks for maximum compatibility
3. **Place files in the root** — Browsers automatically request `/favicon.ico` from the root
4. **Keep it simple** — A small square design works best at tiny sizes
5. **Use transparent backgrounds** — So it looks good on any colored tab
6. **Test across browsers** — What looks good in Chrome may differ in Safari
7. **Cache the favicon** — Set far-future expiry headers for performance
8. **Use the realfavicongenerator** — Tool to generate all required sizes

---

## Common Mistakes

1. **Forgetting the favicon entirely** — Browser shows a blank page icon
2. **Using the wrong path** — Broken favicon link
3. **Using complex designs** — At 16×16, details become a blur
4. **Only providing .ico** — Other sizes needed for modern devices
5. **Not testing on iOS** — Apple devices need apple-touch-icon
6. **Oversized file** — Favicons should be under 10KB
7. **Missing MIME type** — Some browsers need the type attribute

---

## Summary Notes

- A favicon is a small icon displayed in browser tabs, bookmarks, and shortcuts
- Add it with `<link rel="icon" href="favicon.ico">` in the `<head>`
- Use multiple sizes for different contexts (16×16, 32×32, 180×180, 192×192, 512×512)
- Preferred formats: SVG (modern), PNG (wide support), ICO (legacy)
- Apple devices need `<link rel="apple-touch-icon">`
- Use a web manifest for PWA icon support
- SVG favicons scale perfectly and work in modern browsers
- Place favicon.ico in the website root for automatic discovery
- Use online generators to produce all required sizes
- Keep the design simple for recognizability at small sizes
