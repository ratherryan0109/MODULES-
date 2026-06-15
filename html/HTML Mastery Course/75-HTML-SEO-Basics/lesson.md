# HTML SEO Basics

## What is SEO?
Search Engine Optimization (SEO) is the practice of optimizing web pages to rank higher in search engine results pages (SERPs). While SEO encompasses content strategy, backlinks, and technical infrastructure, a strong HTML foundation is essential for search engines to understand and properly index your content.

## How Search Engines Work
1. **Crawling**: Search engine bots (Googlebot, Bingbot) discover URLs through links and sitemaps
2. **Indexing**: Bots parse the HTML content, extract text, metadata, and structure
3. **Ranking**: Algorithms determine relevance and quality based on hundreds of signals
4. **Rendering**: Modern search engines render JavaScript to index dynamic content

Search engines read your HTML source code to understand:
- What the page is about (title, headings, content)
- How content is structured (semantic HTML)
- What elements are important (headings hierarchy)
- How the page relates to others (links, canonical)
- How the page should appear in search results (meta tags, structured data)

## Essential HTML SEO Elements

### 1. Title Tag
The `<title>` tag is the most important on-page SEO element. It appears as the clickable headline in search results and browser tabs.

```html
<title>Primary Keyword - Secondary Keyword | Brand Name</title>
```

**Best Practices:**
- Include primary keyword near the beginning
- Keep 50-60 characters (Google typically displays 60 characters)
- Write unique titles for every page
- Include brand name at the end (separated by pipe | or dash -)
- Don't keyword stuff — write for users first
- Each page should have a unique, descriptive title

### 2. Meta Description
The meta description is the summary text below the title in search results.

```html
<meta name="description" content="Learn HTML SEO basics: title tags, meta descriptions, heading structure, semantic HTML, and more. Complete guide with best practices and examples.">
```

**Best Practices:**
- 150-160 characters (Google may truncate at ~160)
- Include primary and secondary keywords naturally
- Write compelling copy that encourages clicks
- Unique description for every page
- Include a call-to-action when appropriate

### 3. Heading Structure
Headings create a content outline that search engines use to understand page structure:

```html
<h1>Primary Keyword Topic</h1>
    <h2>Supporting Keyword Section</h2>
        <h3>Sub-topic Detail</h3>
    <h2>Another Major Section</h2>
```

**SEO Rules:**
- One `<h1>` per page (most important heading)
- Headings contain relevant keywords
- Natural hierarchy (h1 → h2 → h3)
- Headings reflect content structure, not styling
- Search engines give more weight to heading content

### 4. Semantic HTML for SEO
Search engines favor semantic structure:

| Element | SEO Benefit |
|---------|-------------|
| `<article>` | Identifies self-contained content |
| `<nav>` | Identifies navigation for better crawling |
| `<main>` | Highlights primary content |
| `<header>` | Identifies page/section introduction |
| `<footer>` | Identifies footer/meta information |
| `<aside>` | Identifies supplementary content (less weight) |
| `<figure>` | Associates images with captions |

### 5. Image Optimization
```html
<!-- SEO-optimized image -->
<img src="product-name-red-widget.jpg"
     alt="Red widget product showing ergonomic design"
     loading="lazy"
     width="800"
     height="600"
     decoding="async">

<!-- Use srcset for responsive images -->
<img src="small.jpg"
     srcset="small.jpg 400w, medium.jpg 800w, large.jpg 1200w"
     sizes="(max-width: 600px) 400px, 800px"
     alt="Description with keywords">
```

**Best Practices:**
- Descriptive filenames (product-name.jpg, not IMG_001.jpg)
- Descriptive alt text (includes keywords naturally)
- Compress images (WebP preferred, with JPEG/PNG fallback)
- Use `loading="lazy"` for below-fold images
- Specify dimensions to prevent layout shift (Core Web Vitals)
- Use `decoding="async"` for faster rendering

### 6. Link Structure

**Internal Links:**
```html
<!-- Descriptive anchor text -->
<a href="/services/web-design">Professional Web Design Services</a>

<!-- Avoid generic text -->
<a href="/services/web-design">Click here</a>
```

**External Links:**
```html
<!-- Tell search engines about the relationship -->
<a href="https://partner-site.com" rel="nofollow external">Partner Site</a>

<!-- Open in new tab with security -->
<a href="https://external-site.com" target="_blank" rel="noopener noreferrer">Reference</a>
```

**Best Practices:**
- Descriptive anchor text containing relevant keywords
- Logical site structure (every page reachable within 3 clicks)
- Use `nofollow` for paid links or untrusted content
- Fix broken links (404s hurt SEO)
- Internal links pass "link juice" between pages
- XML sitemaps help search engines discover all pages

### 7. URL Structure
```html
<!-- SEO-friendly URL structure -->
<!-- Good -->
https://example.com/services/web-design
https://example.com/blog/html-seo-guide

<!-- Avoid -->
https://example.com/page?id=123&cat=5
https://example.com/2024/11/15/post-title
```

**Best Practices:**
- Use hyphens (-) not underscores (_)
- Keep URLs short and descriptive
- Include primary keyword
- Use lowercase
- Avoid unnecessary parameters
- Use canonical URLs to prevent duplicate content:
```html
<link rel="canonical" href="https://example.com/preferred-url">
```

### 8. Meta Robots
Control how search engines index your page:

```html
<!-- Index and follow links (default) -->
<meta name="robots" content="index, follow">

<!-- No index (don't show in search) -->
<meta name="robots" content="noindex">

<!-- Don't follow links on this page -->
<meta name="robots" content="noindex, nofollow">

<!-- Per-search engine control -->
<meta name="googlebot" content="index, follow">
<meta name="bingbot" content="index, follow">
```

### 9. Language and Encoding
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 10. Structured Data (Schema.org)
Structured data helps search engines understand content context and enables rich snippets:

```html
<!-- Article structured data -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "HTML SEO Basics Guide",
    "description": "Complete guide to HTML SEO best practices...",
    "author": {
        "@type": "Person",
        "name": "Author Name"
    },
    "datePublished": "2024-11-15",
    "image": "https://example.com/images/article.jpg"
}
</script>

<!-- Breadcrumb structured data -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://example.com"
    }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Guides",
        "item": "https://example.com/guides"
    }]
}
</script>
```

## Technical SEO Elements

### Viewport Meta Tag (Mobile SEO)
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
Mobile-friendliness is a ranking factor (Google's mobile-first indexing).

### Canonical Tag
```html
<link rel="canonical" href="https://example.com/preferred-page-url">
```

### Hreflang Tags (Multi-language)
```html
<link rel="alternate" hreflang="en" href="https://example.com/en/page">
<link rel="alternate" hreflang="es" href="https://example.com/es/pagina">
<link rel="alternate" hreflang="x-default" href="https://example.com/page">
```

### Preconnect and Preload (Performance)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preload" href="/css/critical.css" as="style">
<link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossorigin>
```

## HTML Validation
Valid HTML is important for SEO. Use the W3C Nu HTML Checker:
```html
<!-- Always validate -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    ...
```

## Content Structure Best Practices

### First 100-200 Words
Include primary keyword naturally within the first paragraph. Search engines give more weight to content appearing earlier in the page.

### Paragraph Length
- Keep paragraphs short (2-4 sentences)
- Use bullet points and numbered lists
- Break up content with subheadings
- Short paragraphs improve readability signals

### Keyword Density
- Natural usage, not forced
- Primary keyword in: title, h1, first paragraph, URL
- Related keywords/LSI in subheadings and body
- Avoid keyword stuffing (can result in penalties)

## Common HTML SEO Mistakes

1. **Duplicate titles/meta descriptions** across pages
2. **Missing alt text** on images
3. **Broken links** (404 errors)
4. **Non-descriptive anchor text** ("click here", "read more")
5. **Multiple h1 elements** or missing h1
6. **No meta description** or auto-generated descriptions
7. **Blocked resources** (CSS/JS blocked by robots.txt)
8. **Thin content** (very little text on page)
9. ** Keyword stuffing** in headings or content
10. **Missing canonical URLs** for similar content
11. **No sitemap.xml** submitted to search engines
12. **Slow page load** (Core Web Vitals)

## SEO Audit HTML Checklist

```
□ Unique, descriptive title tag (50-60 chars)
□ Unique meta description (150-160 chars)
□ One h1 per page with primary keyword
□ Proper heading hierarchy (h1 → h2 → h3)
□ Descriptive image alt text
□ Descriptive anchor text with keywords
□ Semantic HTML structure (header, nav, main, footer)
□ Canonical URL (if needed)
□ Meta robots (if needed)
□ Open Graph tags for social sharing
□ Structured data (Schema.org)
□ Mobile-friendly viewport meta
□ Fast loading (optimized images, lazy loading)
□ Valid HTML (no errors)
□ Secure HTTPS
□ Sitemap.xml exists
□ robots.txt properly configured
```
