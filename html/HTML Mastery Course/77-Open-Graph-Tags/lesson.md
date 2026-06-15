# Module 77: Open Graph Tags

## Introduction
Open Graph (OG) tags are HTML meta tags that control how web pages appear when shared on social media platforms like Facebook, LinkedIn, Pinterest, and Twitter (when used with Twitter Cards). The Open Graph protocol, introduced by Facebook in 2010, allows any web page to become a rich object in a social graph. By implementing OG tags, you ensure that shared links display with a title, description, image, and other structured data rather than just a bare URL. This dramatically improves click-through rates and brand presentation across social platforms.

## Learning Objectives
By the end of this module, you will be able to:
- Explain the Open Graph protocol and its purpose for social sharing
- Implement all essential OG meta tags (og:title, og:description, og:image, og:url, og:type)
- Configure advanced OG properties including locale, site_name, and audio/video
- Distinguish between Open Graph and Twitter Cards
- Use Open Graph for different content types (article, website, product, video)
- Debug and validate OG tags using platform-specific debuggers
- Implement dynamic OG tags in single-page applications
- Understand image size requirements for optimal social sharing previews

## What is the Open Graph Protocol?
The Open Graph protocol enables any web page to become a rich object in a social graph. It uses RDFa (Resource Description Framework in Attributes) syntax within HTML meta tags to define structured data about a page. When someone shares a URL on a platform that supports OG tags (Facebook, LinkedIn, Pinterest, Slack, Discord, WhatsApp, and more), the platform reads these tags and generates a rich preview.

### How It Works
```
User shares URL on Facebook
        ↓
Facebook crawler fetches the page
        ↓
Reads <meta property="og:*"> tags
        ↓
Generates rich preview card
        ↓
Displays: Image + Title + Description + Site Name
```

## Essential Open Graph Tags

### 1. og:title — The Title of Your Content
```html
<meta property="og:title" content="Complete Guide to Open Graph Tags">
```
- Should be 40-60 characters for optimal display
- Should match the page's `<title>` tag but can be customized for social
- Avoid branding in the title (e.g., "MySite | Article Title")

### 2. og:description — The Description
```html
<meta property="og:description" content="Learn how to implement Open Graph tags to control how your content appears on social media. Complete guide with examples.">
```
- 2-4 sentences (around 200-300 characters)
- Should entice clicks and summarize the content
- Most platforms truncate around 300 characters

### 3. og:image — The Preview Image
```html
<meta property="og:image" content="https://example.com/images/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="A descriptive alt text for the image">
```

Image requirements:
| Platform | Recommended Size | Ratio |
|----------|-----------------|-------|
| Facebook | 1200×630 | 1.91:1 |
| LinkedIn | 1200×627 | 1.91:1 |
| Twitter | 1200×675 | 16:9 |
| WhatsApp | 1200×630 | 1.91:1 |
| Minimum | 600×315 | 1.91:1 |

### 4. og:url — The Canonical URL
```html
<meta property="og:url" content="https://example.com/blog/open-guide">
```
- Must be the absolute canonical URL
- Prevents duplicate content issues when shared
- Use the same URL as your `<link rel="canonical">` tag

### 5. og:type — The Content Type
```html
<meta property="og:type" content="article">
```

Common OG types:
| Type | Description |
|------|-------------|
| `website` | Default for general web pages |
| `article` | News articles, blog posts |
| `video.movie` | Movies |
| `video.episode` | TV episodes |
| `video.tv_show` | TV shows |
| `music.song` | Music tracks |
| `music.album` | Music albums |
| `book` | Books |
| `profile` | Person profiles |
| `product` | Product pages (used by some platforms) |

### 6. og:site_name — The Site Name
```html
<meta property="og:site_name" content="HTML Mastery Course">
```
- Usually displayed above the title in the share card
- Should be consistent across all pages of a website

### 7. og:locale — The Language and Locale
```html
<meta property="og:locale" content="en_US">
<meta property="og:locale:alternate" content="fr_FR">
```
- Format: language_TERRITORY
- Common: en_US, en_GB, fr_FR, de_DE, es_ES, ja_JP

## Advanced Open Graph Tags

### Article-Specific Tags
```html
<meta property="article:published_time" content="2026-01-15T10:00:00+00:00">
<meta property="article:modified_time" content="2026-01-20T14:30:00+00:00">
<meta property="article:author" content="https://facebook.com/authorprofile">
<meta property="article:section" content="Technology">
<meta property="article:tag" content="HTML">
<meta property="article:tag" content="Social Media">
```

### Video/Audio Tags
```html
<meta property="og:video" content="https://example.com/video.mp4">
<meta property="og:video:width" content="1920">
<meta property="og:video:height" content="1080">
<meta property="og:video:type" content="video/mp4">
<meta property="og:audio" content="https://example.com/audio.mp3">
<meta property="og:audio:type" content="audio/mpeg">
```

### Profile Tags
```html
<meta property="profile:first_name" content="John">
<meta property="profile:last_name" content="Doe">
<meta property="profile:username" content="johndoe">
<meta property="profile:gender" content="male">
```

## Open Graph vs Twitter Cards

| Feature | Open Graph | Twitter Cards |
|---------|-----------|---------------|
| Attribute | `property` | `name` |
| Prefix | `og:` | `twitter:` |
| Primary Use | Facebook, LinkedIn, Pinterest, others | Twitter |
| Image Card | og:image | twitter:image |
| Card Types | N/A (controlled by og:type) | summary, summary_large_image, app, player |
| Fallback | N/A | Twitter falls back to OG tags if no twitter: tags exist |

## Visual Diagram: Social Share Card Anatomy

```
┌─────────────────────────────────────────────┐
│                                             │
│   ┌─────────────────────────────────────┐   │
│   │                                     │   │
│   │         og:image (1200×630)         │   │
│   │                                     │   │
│   └─────────────────────────────────────┘   │
│                                             │
│   og:site_name                               │
│   og:title  (bold, large text)               │
│   og:description (smaller, preview text)     │
│                                             │
└─────────────────────────────────────────────┘
```

## Common Mistakes

| Mistake | Incorrect | Correct |
|---------|-----------|---------|
| Using name instead of property | `<meta name="og:title">` | `<meta property="og:title">` |
| Relative image URL | `<meta property="og:image" content="/img/share.jpg">` | `<meta property="og:image" content="https://example.com/img/share.jpg">` |
| Image too small | 400×200 image | Minimum 600×315, recommended 1200×630 |
| Missing og:url | No og:url tag | Always include absolute canonical URL |
| Title too long | 120 character title | Keep under 60 characters |
| No fallback image | No og:image at all | Always provide at least one image |
| Wrong content type | og:type="blog" | og:type="article" |
| Missing alt text | No og:image:alt | Required for accessibility |

## Best Practices
1. **Always use absolute URLs** for og:url, og:image, og:video, and og:audio.
2. **Optimize images** — 1200×630px at 1.91:1 ratio, under 1MB, with og:image:width and og:image:height.
3. **Use `https://`** — Social crawlers prefer secure URLs.
4. **Include all basic tags** — og:title, og:description, og:image, og:url, og:type.
5. **Match og:title to page title** — They should be consistent, though og:title can be slightly more compelling.
6. **Test with debuggers** — Facebook Sharing Debugger, LinkedIn Post Inspector, Twitter Card Validator.
7. **Add unique OG tags per page** — Each page should have its own og:title, og:description, and og:image.
8. **Provide fallbacks** — If Twitter Cards are not defined, Twitter falls back to OG tags.
9. **Cache awareness** — Social platforms cache OG data. Use their debuggers to clear caches after updating.
10. **Use og:image:alt** for accessibility compliance.

## Summary Notes
- Open Graph protocol controls how pages appear when shared on social media.
- Essential OG tags: og:title, og:description, og:image, og:url, og:type.
- Use `property` attribute (not `name`) for OG tags.
- Always use absolute HTTPS URLs for images and resources.
- Recommended OG image size is 1200×630 pixels at 1.91:1 ratio.
- Different content types use different og:type values (article, website, video, etc.).
- Twitter Cards use `name` attribute but can fall back to OG tags.
- Article-specific OG tags include published_time, author, section, and tags.
- Use platform debuggers to test and clear cached OG data.
- Each page should have unique, descriptive OG tags for optimal social sharing.
