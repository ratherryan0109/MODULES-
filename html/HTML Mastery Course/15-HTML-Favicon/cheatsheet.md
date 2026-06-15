# HTML Favicon — Cheatsheet

## Basic Favicon Link

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
```

## Modern Complete Setup

```html
<!-- SVG (modern browsers) -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg">

<!-- PNG fallbacks -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

<!-- Apple iOS -->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">

<!-- Safari pinned tab -->
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2563eb">

<!-- PWA -->
<link rel="manifest" href="/site.webmanifest">

<!-- Windows -->
<meta name="msapplication-TileColor" content="#2563eb">
<meta name="msapplication-TileImage" content="/mstile-144x144.png">

<!-- Browser theme -->
<meta name="theme-color" content="#ffffff">
```

## Standard Sizes

| Size | Usage |
|------|-------|
| 16×16 | Browser tab, address bar |
| 32×32 | Taskbar, shortcuts |
| 48×48 | Windows shortcuts |
| 180×180 | Apple touch icon (iOS) |
| 192×192 | Android Chrome (PWA) |
| 512×512 | PWA splash screen |

## File Formats

| Format | MIME Type | Pros | Cons |
|--------|-----------|------|------|
| ICO | `image/x-icon` | Universal support | Large file, legacy |
| PNG | `image/png` | Good quality, wide support | Separate files per size |
| SVG | `image/svg+xml` | Scalable, small file | Limited Safari support |
| GIF | `image/gif` | Animation possible | Low color, large |

## Emoji Favicon (Data URI)

```html
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>">
```

## Web Manifest (site.webmanifest)

```json
{
  "name": "My Site",
  "short_name": "Site",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ],
  "theme_color": "#2563eb",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

## Best Practices

1. Place `favicon.ico` in website root for auto-discovery
2. Use SVG as primary with PNG fallbacks
3. Generate all sizes using RealFaviconGenerator
4. Keep file size under 10KB
5. Use simple, recognizable designs
6. Set far-future cache headers
7. Use transparent backgrounds
8. Test across browsers and devices
9. Use versioned URLs when updating (`favicon.ico?v=2`)
10. Include theme-color meta tag

## Debug Checklist

- [ ] File exists at the specified path
- [ ] Correct `<link>` attributes (rel, href, type, sizes)
- [ ] `<link>` is in `<head>`, not `<body>`
- [ ] MIME type matches the file format
- [ ] No 404 errors in Network tab
- [ ] Browser cache cleared (hard reload)
- [ ] Check mobile devices separately
