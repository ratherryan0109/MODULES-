# Mini Project: Social Media-Ready Article Page

## Objective
Build a complete HTML article page that is fully optimized for social media sharing using Open Graph tags and Twitter Cards. The page should render beautifully when shared on Facebook, Twitter, LinkedIn, and other platforms.

## Requirements

1. **Document Setup**
   - Proper DOCTYPE, charset, viewport
   - Semantic HTML5 structure (header, main, article, footer)

2. **Essential OG Tags**
   - og:title (compelling, 40-60 characters)
   - og:description (2-3 sentences, under 300 characters)
   - og:image (absolute URL, 1200×630)
   - og:image:width and og:image:height
   - og:image:alt
   - og:url (absolute, matches canonical)
   - og:type (article)
   - og:site_name
   - og:locale

3. **Article-Specific OG Tags**
   - article:published_time (current date in ISO 8601)
   - article:modified_time
   - article:author
   - article:section
   - At least 3 article:tag entries

4. **Twitter Cards**
   - twitter:card (summary_large_image)
   - twitter:site
   - twitter:creator
   - twitter:title
   - twitter:description
   - twitter:image

5. **Article Content**
   - A compelling headline (<h1>)
   - Author byline and publication date
   - An image with alt text
   - At least 3 sections with headings
   - A list (ordered or unordered)
   - A blockquote

## Step-by-Step Instructions

1. Create `article.html`
2. Start with DOCTYPE and full head section with all meta tags
3. Add all OG tags and Twitter Cards
4. Build a header with site navigation
5. Create the article with all required content elements
6. Add a footer with copyright and social links
7. Validate with Facebook Sharing Debugger (or view source)

## Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Art of HTML: Building Better Websites</title>
    <!-- Add OG and Twitter Card tags -->
</head>
<body>
    <!-- Build the article layout -->
</body>
</html>
```

## Expected Output

```
┌───────────────────────────────────────┐
│  SITE HEADER / NAV                    │
│  Home | Articles | About | Contact    │
├───────────────────────────────────────┤
│                                       │
│  ARTICLE                              │
│  ┌─────────────────────────────────┐  │
│  │ H1: The Art of HTML            │  │
│  │ By Jane Smith | June 12, 2026  │  │
│  │                                 │  │
│  │ [Feature Image with Alt Text]   │  │
│  │                                 │  │
│  │ ## Introduction                 │  │
│  │ Paragraphs of content...        │  │
│  │                                 │  │
│  │ ## Key Principles               │  │
│  │ • Semantic HTML                 │  │
│  │ • Accessibility                 │  │
│  │ • Performance                   │  │
│  │                                 │  │
│  │ ## Why Semantics Matter         │  │
│  │ More content with a blockquote: │  │
│  │ > \"HTML is the foundation...\"   │  │
│  │                                 │  │
│  │ ## Conclusion                   │  │
│  │ Final thoughts...               │  │
│  └─────────────────────────────────┘  │
│                                       │
├───────────────────────────────────────┤
│  FOOTER: © 2026 | Social Links       │
└───────────────────────────────────────┘

SOCIAL SHARE CARD (when shared):
┌──────────────────────────────────────┐
│ [og:image 1200×630]                  │
│                                      │
│ HTMLMASTERY.COM                      │
│ The Art of HTML: Building Better...  │
│ Discover the key principles of...    │
└──────────────────────────────────────┘
```

## Bonus Challenges
- Add schema.org Article structured data in JSON-LD format
- Include og:video with a YouTube embed URL
- Add a "Share" section with links that use the OG URL
- Implement `fb:app_id` meta tag for Facebook Insights

## Submission
Save your file and open it in a browser. Verify all OG tags by viewing the page source. Test the URL using Facebook Sharing Debugger (if hosted) or manually inspect all tags in the head section.
