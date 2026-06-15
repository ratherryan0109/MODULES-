# Mini Project: SEO-Optimized Blog Post Page

## Objective
Build a fully SEO-optimized HTML page for a blog post. This project will test your ability to implement meta tags for search engines, social media sharing, mobile responsiveness, and browser configuration.

## Requirements
Your page must include:

1. **Essential Meta Tags**
   - Proper charset (UTF-8) as the first element
   - Viewport meta tag for responsive design
   - Unique, descriptive page title
   - Meta description (150-160 characters)

2. **SEO Meta Tags**
   - Robots meta tag allowing indexing and link following
   - Author meta tag
   - Canonical URL using `<link rel="canonical">`

3. **Open Graph Tags**
   - og:title
   - og:description
   - og:image (use a placeholder URL)
   - og:url
   - og:type (set to "article")
   - og:site_name
   - og:locale

4. **Twitter Card Tags**
   - twitter:card (summary_large_image)
   - twitter:title
   - twitter:description
   - twitter:image

5. **Mobile Meta Tags**
   - theme-color matching a brand color

6. **Content**
   - A blog article with `<article>`, headings, paragraphs, and a list
   - A header with site navigation
   - A footer with copyright

## Step-by-Step Instructions

1. Create a new file called `blog-post.html`
2. Start with `<!DOCTYPE html>` and the basic HTML skeleton
3. Add `<meta charset="UTF-8">` as the first element in `<head>`
4. Add the viewport meta tag
5. Write a compelling page title (55-60 characters)
6. Write a meta description under 160 characters that includes keywords
7. Add robots, author, and canonical tags
8. Add complete Open Graph tags for Facebook/LinkedIn sharing
9. Add Twitter Card tags
10. Add theme-color
11. Build the visible blog content with semantic HTML
12. Validate using Facebook Sharing Debugger or Google Rich Results Test

## Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Start with charset -->
    <title>Your Blog Post Title</title>
    <!-- Add all required meta tags -->
</head>
<body>
    <!-- Build the blog post layout -->
</body>
</html>
```

## Expected Output Structure

```
┌──────────────────────────────────────┐
│            HEADER / NAV              │
│  Home | Blog | About | Contact       │
├──────────────────────────────────────┤
│                                      │
│   ARTICLE                            │
│   ┌──────────────────────────────┐   │
│   │  H1: Blog Post Title         │   │
│   │  By Author | Date            │   │
│   │                              │   │
│   │  [Featured Image]            │   │
│   │                              │   │
│   │  Introduction paragraph...   │   │
│   │                              │   │
│   │  ## Section Heading          │   │
│   │  More content here...        │   │
│   │                              │   │
│   │  ## Key Points               │   │
│   │  • Point one                 │   │
│   │  • Point two                 │   │
│   │  • Point three               │   │
│   └──────────────────────────────┘   │
│                                      │
│   <aside> Related Posts              │
│   • Post 1  • Post 2  • Post 3      │
│                                      │
├──────────────────────────────────────┤
│   FOOTER: © 2026 | Social Links     │
└──────────────────────────────────────┘
```

## Bonus Challenges
- Add `<meta name="referrer" content="strict-origin-when-cross-origin">`
- Include `<link rel="preconnect" href="https://fonts.googleapis.com">` for performance
- Add a `<script type="application/ld+json">` with structured data (Article schema)

## Submission
Save your file and open it in a browser. Right-click and select "View Page Source" to verify all meta tags are present and correctly placed in `<head>`. Validate your Open Graph tags using the Facebook Sharing Debugger at https://developers.facebook.com/tools/debug/.
