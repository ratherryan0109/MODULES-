# Meta Tags — Cheatsheet

## Essential Meta Tags

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Page Title</title>
<meta name="description" content="Page description under 160 characters">
<meta name="robots" content="index, follow">
```

## Viewport Parameters

| Parameter | Values | Description |
|-----------|--------|-------------|
| `width` | `device-width` or pixels | Viewport width |
| `initial-scale` | `0.1` – `10.0` | Initial zoom level |
| `minimum-scale` | `0.1` – `10.0` | Minimum zoom |
| `maximum-scale` | `0.1` – `10.0` | Maximum zoom |
| `user-scalable` | `yes` / `no` | Allow user zoom |

## SEO Meta Tags

| Tag | Purpose |
|-----|---------|
| `<meta name="description" content="...">` | Search result snippet (150-160 chars) |
| `<meta name="robots" content="...">` | Indexing directives |
| `<meta name="author" content="...">` | Page author |
| `<link rel="canonical" href="...">` | Preferred URL |
| `<meta name="googlebot" content="...">` | Google-specific control |

## Robots Directives

| Directive | Effect |
|-----------|--------|
| `index` | Allow indexing |
| `noindex` | Prevent indexing |
| `follow` | Follow links |
| `nofollow` | Do not follow links |
| `noarchive` | No cached copy |
| `nosnippet` | No text snippet |
| `noimageindex` | No image indexing |
| `max-snippet:-1` | No snippet limit |
| `max-image-preview:large` | Large image previews |

## Open Graph Meta Tags

```html
<meta property="og:title" content="Title">
<meta property="og:description" content="Description">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:url" content="https://example.com/page">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Site Name">
<meta property="og:locale" content="en_US">
```

## Twitter Card Meta Tags

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@username">
<meta name="twitter:title" content="Title">
<meta name="twitter:description" content="Description">
<meta name="twitter:image" content="https://example.com/image.jpg">
```

## http-equiv Meta Tags

| Tag | Purpose |
|-----|---------|
| `<meta http-equiv="refresh" content="30">` | Auto-refresh every 30s |
| `<meta http-equiv="refresh" content="5; url=...">` | Redirect after 5s |
| `<meta http-equiv="X-UA-Compatible" content="IE=edge">` | IE latest engine |
| `<meta http-equiv="Content-Security-Policy" content="...">` | Security policy |
| `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">` | MIME type |

## Mobile / App Meta Tags

| Tag | Platform |
|-----|----------|
| `<meta name="theme-color" content="#hex">` | Chrome, Firefox, Edge |
| `<meta name="apple-mobile-web-app-capable" content="yes">` | iOS Safari |
| `<meta name="apple-mobile-web-app-status-bar-style" content="black">` | iOS Safari |
| `<meta name="apple-mobile-web-app-title" content="App Name">` | iOS Safari |
| `<meta name="msapplication-TileColor" content="#hex">` | Windows |
| `<meta name="msapplication-TileImage" content="/icon.png">` | Windows |
| `<meta name="application-name" content="App Name">` | General |

## Quick Reference: Common Mistakes

| Mistake | Fix |
|---------|-----|
| Missing charset tag | Add `<meta charset="UTF-8">` first |
| Missing viewport | Add `<meta name="viewport" content="width=device-width, initial-scale=1.0">` |
| Description too long | Keep under 160 characters |
| Multiple viewport tags | Keep only one |
| Meta tags in body | Move all to `<head>` |
| Using keywords meta tag | Remove; it is ignored by Google |
| Wrong attribute for OG tags | Use `property` not `name` for Open Graph |

## Correct Order in `<head>`

1. `<meta charset="UTF-8">`
2. `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
3. `<title>Page Title</title>`
4. `<meta name="description" content="...">`
5. `<meta name="robots" content="index, follow">`
6. `<meta name="author" content="...">`
7. Open Graph `<meta property="og:*">` tags
8. Twitter Card `<meta name="twitter:*">` tags
9. `<meta name="theme-color" content="...">`
10. `<link rel="canonical" href="...">`
11. Other `<meta http-equiv="...">` tags
