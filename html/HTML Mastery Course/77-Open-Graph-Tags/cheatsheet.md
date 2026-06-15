# Open Graph Tags — Cheatsheet

## Essential OG Tags

```html
<meta property="og:title" content="Page Title (40-60 chars)">
<meta property="og:description" content="Description (under 300 chars)">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:url" content="https://example.com/page">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Site Name">
<meta property="og:locale" content="en_US">
```

## OG Image Requirements

| Platform | Size | Ratio | Format |
|----------|------|-------|--------|
| Facebook | 1200×630 | 1.91:1 | JPG/PNG |
| LinkedIn | 1200×627 | 1.91:1 | JPG/PNG |
| Twitter | 1200×675 | 16:9 | JPG/PNG |
| Minimum | 600×315 | 1.91:1 | JPG/PNG |

## Content Types (og:type)

| Type | Use Case |
|------|----------|
| `website` | Homepages, landing pages |
| `article` | Blog posts, news |
| `profile` | User profiles |
| `video.movie` | Movies |
| `video.episode` | TV episodes |
| `video.tv_show` | TV shows |
| `music.song` | Songs |
| `music.album` | Albums |
| `book` | Books |
| `product` | Products (non-standard but supported) |

## Article-Specific Tags

```html
<meta property="article:published_time" content="2026-01-15T10:00:00+00:00">
<meta property="article:modified_time" content="2026-01-20T14:30:00+00:00">
<meta property="article:author" content="https://facebook.com/author">
<meta property="article:section" content="Technology">
<meta property="article:tag" content="HTML">
```

## Twitter Cards

| Tag | Purpose |
|-----|---------|
| `<meta name="twitter:card" content="summary_large_image">` | Card type |
| `<meta name="twitter:site" content="@username">` | Website Twitter handle |
| `<meta name="twitter:creator" content="@username">` | Content creator handle |
| `<meta name="twitter:title" content="Title">` | Card title |
| `<meta name="twitter:description" content="Description">` | Card description |
| `<meta name="twitter:image" content="https://...">` | Card image |

## Twitter Card Types

| Type | Description |
|------|-------------|
| `summary` | Small image (120×120), title, description |
| `summary_large_image` | Large image (1200×675), title, description |
| `app` | Mobile app download card |
| `player` | Video/audio player card |

## Video/Audio OG Tags

```html
<meta property="og:video" content="https://example.com/video.mp4">
<meta property="og:video:width" content="1920">
<meta property="og:video:height" content="1080">
<meta property="og:video:type" content="video/mp4">
<meta property="og:video:secure_url" content="https://example.com/video.mp4">
<meta property="og:audio" content="https://example.com/audio.mp3">
<meta property="og:audio:type" content="audio/mpeg">
```

## Profile Tags

```html
<meta property="profile:first_name" content="John">
<meta property="profile:last_name" content="Doe">
<meta property="profile:username" content="johndoe">
<meta property="profile:gender" content="male">
```

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Using `name` instead of `property` | Use `<meta property="og:*">` |
| Relative image URL | Use absolute URL with https:// |
| Image too small (<600×315) | Use 1200×630 minimum |
| Missing og:url | Always include canonical absolute URL |
| No og:image | Always provide at least one image |
| og:title too long (>60 chars) | Keep under 60 characters |
| Missing og:description | Always include 2-4 sentences |
| Wrong og:type for content | Use article for blog posts, website for generic |

## Debugging Tools

| Platform | Tool |
|----------|------|
| Facebook | developers.facebook.com/tools/debug |
| Twitter | cards-dev.twitter.com/validator |
| LinkedIn | linkedin.com/post-inspector |
| Pinterest | developers.pinterest.com/tools/url-debugger |
| General | View page source, check `<head>` |

## Locale Codes

| Code | Language |
|------|----------|
| en_US | English (US) |
| en_GB | English (UK) |
| fr_FR | French |
| es_ES | Spanish |
| de_DE | German |
| ja_JP | Japanese |
| pt_BR | Portuguese (Brazil) |
| zh_CN | Chinese (Simplified) |

## Key Reminders

- Always use `property` attribute for OG tags
- Always use absolute HTTPS URLs for images and resources
- Keep og:title between 40-60 characters
- Match og:url to the canonical URL
- Test with Facebook Sharing Debugger after adding/updating OG tags
- Twitter falls back to OG tags if Twitter Cards are missing
- Use og:image:alt for accessibility
- Include og:image:width and og:image:height for faster rendering
