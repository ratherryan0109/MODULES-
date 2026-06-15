# Mini Project: Canonical URL Audit and Implementation

## Project Overview

You will audit a fictional website with multiple duplicate content issues, then implement a comprehensive canonical URL strategy. The website is an online magazine called "TechInsider" that has accumulated technical debt leading to widespread duplicate content problems.

## Learning Objectives

- Identify duplicate content scenarios in a real-world website
- Implement correct canonical tags for each scenario
- Create a canonical URL strategy document
- Validate canonical implementation using testing tools

## The Scenario

TechInsider is a tech news and review website. Due to multiple CMS migrations and development teams, the site has accumulated these issues:

- **WWW and non-WWW** both serve content
- **HTTP and HTTPS** both accessible (no HSTS)
- **URL parameters** for tracking, sorting, and printing
- **Category and tag archives** overlap significantly
- **Syndicated content** with partner sites
- **AMP pages** with incorrect canonicalization
- **Pagination** with thin content on later pages
- **Session IDs** in URLs from legacy code

## Requirements

### Part 1: Audit Document
Create a document listing all identified duplicate content scenarios with:
1. The duplicate URLs found
2. The preferred canonical URL
3. The reasoning for each choice

### Part 2: Implementation
For each page type, implement the correct canonical tag:

1. **Homepage** - Handle www/non-www, http/https
2. **Article pages** - Handle print version, AMP, mobile subdomain
3. **Category pages** - Handle pagination, faceted filters
4. **Syndicated articles** - Cross-domain canonical
5. **Search results** - noindex + canonical strategy

### Part 3: Validation
Test using Google's URL Inspection tool and document results.

## Page Types and Canonical Strategy

### Homepage
```html
<!-- URL: https://www.techinsider.com/ -->
<link rel="canonical" href="https://techinsider.com/" />
```

### Article Page
```html
<!-- URL: https://www.techinsider.com/articles/ai-future-2026 -->
<link rel="canonical" href="https://techinsider.com/articles/ai-future-2026" />

<!-- URL: https://www.techinsider.com/articles/ai-future-2026?print=1 -->
<link rel="canonical" href="https://techinsider.com/articles/ai-future-2026" />

<!-- AMP URL: https://www.techinsider.com/amp/articles/ai-future-2026 -->
<link rel="canonical" href="https://techinsider.com/articles/ai-future-2026" />

<!-- Mobile subdomain URL: https://m.techinsider.com/articles/ai-future-2026 -->
<link rel="canonical" href="https://techinsider.com/articles/ai-future-2026" />
```

### Category Page
```html
<!-- URL: https://techinsider.com/category/tech-news -->
<link rel="canonical" href="https://techinsider.com/category/tech-news" />

<!-- URL: https://techinsider.com/category/tech-news?page=2 -->
<!-- Thin content on page 2+ -->
<link rel="canonical" href="https://techinsider.com/category/tech-news" />

<!-- URL: https://techinsider.com/category/tech-news?author=jdoe -->
<link rel="canonical" href="https://techinsider.com/category/tech-news" />
```

### Tag Overlap
```html
<!-- These tag pages have identical or overlapping content -->
<!-- URL: https://techinsider.com/tag/javascript -->
<link rel="canonical" href="https://techinsider.com/category/programming" />

<!-- URL: https://techinsider.com/tag/js -->
<link rel="canonical" href="https://techinsider.com/category/programming" />
```

## Complete Implementation

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TechInsider - Technology News & Reviews</title>
  
  <!-- Self-referencing canonical (preferred version) -->
  <link rel="canonical" href="https://techinsider.com/articles/ai-future-2026" />
  
  <!-- AMP HTML alternate -->
  <link rel="amphtml" href="https://techinsider.com/amp/articles/ai-future-2026" />
  
  <!-- Mobile alternate -->
  <link rel="alternate" media="only screen and (max-width: 640px)" href="https://m.techinsider.com/articles/ai-future-2026" />
  
  <meta name="description" content="Explore the future of artificial intelligence in 2026 and beyond.">
  <meta name="robots" content="index, follow">
</head>
<body>
  <header>
    <h1>The Future of AI in 2026</h1>
    <p>By Sarah Chen | Published: June 1, 2026</p>
  </header>
  
  <article>
    <p>Artificial intelligence continues to transform industries...</p>
    <!-- Full article content -->
  </article>
  
  <footer>
    <p>&copy; 2026 TechInsider</p>
  </footer>
</body>
</html>
```

## Audit Findings Template

| Issue | Duplicate URLs | Canonical URL | Reasoning |
|-------|---------------|---------------|-----------|
| WWW vs non-WWW | techinsider.com, www.techinsider.com | techinsider.com | Non-www is preferred for branding |
| HTTP vs HTTPS | http://techinsider.com, https://techinsider.com | https://techinsider.com | Security best practice |
| Print version | /articles/ai-future-2026, /articles/ai-future-2026?print=1 | /articles/ai-future-2026 | Print is subset of main content |
| Tracking params | ?utm_source=twitter, ?ref=newsletter | Clean URL | Parameters add no content value |
| Tag overlap | /tag/javascript, /tag/js | /category/programming | Same content, different tags |
| Pagination (thin) | /category/tech-news/page/2/ | /category/tech-news | Page 2 has no unique content |
| Syndication | partner-site.com/reprint | techinsider.com/original | Original source should get credit |
| Session ID | ?sid=abc123 | Clean URL | Changes per visitor, no value |
| AMP | /amp/articles/ai-future-2026 | /articles/ai-future-2026 | AMP is an alternate format |
| Mobile subdomain | m.techinsider.com | techinsider.com | Responsive is preferred |

## Validation

After implementing, use these methods to verify:

1. **Google Search Console** - Check the "Pages" report for canonical issues
2. **URL Inspection Tool** - Verify Google's chosen canonical matches yours
3. **Manual check** - View page source to confirm single canonical tag
4. **Screaming Frog** - Crawl to find any canonicalization errors
5. **Browser DevTools** - Check `<head>` section rendering

## Submission

Submit:
1. A complete `index.html` file for the article page with all canonical implementations
2. The audit document showing all identified issues and solutions
3. A screenshot of validation results
