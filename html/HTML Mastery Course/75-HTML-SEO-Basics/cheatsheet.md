# HTML SEO Basics - Cheatsheet

## Essential HTML SEO Elements

### Title Tag (Most Important)
```html
<title>Primary Keyword - Secondary Keyword | Brand</title>
```
- 50-60 characters
- Primary keyword near beginning
- Unique per page
- Include brand at end

### Meta Description
```html
<meta name="description" content="150-160 char description with keywords and call-to-action">
```
- 150-160 characters
- Unique per page
- Include keywords naturally
- Write for clicks, not just SEO

### Heading Structure
```html
<h1>Primary Keyword (ONE per page)</h1>
    <h2>Section Keywords</h2>
        <h3>Sub-topic Keywords</h3>
```
- One h1 only
- No skipping levels
- Headings = content structure

### Image SEO
```html
<img src="descriptive-filename.jpg"
     alt="Descriptive text with keywords"
     loading="lazy"
     width="800" height="600"
     decoding="async">
```

### Link Optimization
```html
<!-- Internal -->
<a href="/services/seo">SEO Services</a>
<!-- External -->
<a href="https://example.com" rel="nofollow external">Reference</a>
<!-- Sponsored -->
<a href="https://sponsor.com" rel="sponsored">Sponsor</a>
```

## Meta Tags

| Tag | Purpose |
|-----|---------|
| `charset="UTF-8"` | Character encoding |
| `name="viewport"` | Mobile responsiveness |
| `name="robots"` | Indexing control |
| `name="description"` | Search snippet |
| `rel="canonical"` | Preferred URL |
| `rel="alternate" hreflang="en"` | Language variants |

## Robots Directives
```
index, follow     → Index page, follow links (default)
noindex           → Don't show in search results
nofollow          → Don't crawl links on page
nosnippet         → Don't show description
notranslate       → Don't offer translation
noimageindex      → Don't index images
```

## Structured Data (Schema.org)
```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Page Title",
    "description": "Page description",
    "author": {"@type": "Person", "name": "Author"},
    "datePublished": "2024-01-01",
    "publisher": {"@type": "Organization", "name": "Brand"}
}
</script>
```

## Technical SEO
- HTTPS required
- Mobile-first (viewport meta)
- Fast loading (Core Web Vitals)
- XML sitemap
- robots.txt
- Clean URL structure

## Common Mistakes
| Issue | Fix |
|-------|-----|
| Missing title | Add unique, descriptive title |
| Duplicate titles | Make each page unique |
| Missing meta description | Add compelling, unique description |
| Multiple h1 | Use one h1, rest h2-h6 |
| Broken links | Fix or remove |
| Missing alt text | Add descriptive alt attributes |
| Non-descriptive links | Use keyword-rich anchor text |
| Slow loading | Optimize images, reduce scripts |

## URL Structure
✅ `example.com/services/web-design`
❌ `example.com/p=123&cat=5`
❌ `example.com/2024/11/15/post-title`
❌ `example.com/Product_Page`

## Core Web Vitals Targets
- LCP: < 2.5s (loading)
- FID/INP: < 100ms (interactivity)
- CLS: < 0.1 (visual stability)
