# Canonical URLs Cheatsheet

## HTML Syntax

```html
<!-- Standard canonical tag -->
<link rel="canonical" href="https://example.com/preferred-page" />

<!-- Cross-domain canonical -->
<link rel="canonical" href="https://original-source.com/article" />

<!-- HTTP Header for PDFs/non-HTML -->
Link: <https://example.com/doc.pdf>; rel="canonical"
```

## Common Implementation Scenarios

| Scenario | Canonical URL |
|----------|---------------|
| WWW vs non-WWW | Point to your preferred domain |
| HTTP vs HTTPS | Always point to HTTPS |
| Trailing slash | Pick one and redirect the other |
| URL parameters | Point to clean URL without parameters |
| Session IDs | Point to URL without session ID |
| Printer-friendly | Point to standard page |
| Syndicated content | Point to original source URL |
| Tracked URLs (UTM) | Point to clean URL |

## Canonical vs. Redirect Comparison

| Aspect | `rel="canonical"` | 301 Redirect |
|--------|-------------------|--------------|
| User experience | All URLs accessible | Users forced to canonical |
| Search engine strength | Strong hint | Strong directive |
| Link equity consolidation | Yes | Yes |
| Implementation | HTML tag | Server config |
| Multiple URLs preserved | Yes | No |
| Cross-domain support | Yes | Yes |

## Canonical Mistakes to Avoid

| Mistake | Why It's Wrong | Correct Approach |
|---------|---------------|------------------|
| Relative URLs | Ambiguous interpretation | Always use absolute URLs |
| Multiple canonicals | Search engines ignore signal | Exactly one per page |
| Canonical chains | Diluted effectiveness | Point directly to final URL |
| Canonical + noindex | Conflicts | Remove noindex or canonical |
| Dead canonicals (404) | Signal wasted | Canonical must resolve 200 |
| Redirecting canonicals | Creates chain | Point to final destination |
| Case sensitivity | URLs are case-sensitive | Be consistent |

## Canonical Verification Checklist

- [ ] Exactly one `<link rel="canonical">` per page
- [ ] Uses absolute URL (https://...)
- [ ] Points to a valid, indexable page (200 OK)
- [ ] No redirect chain from canonical URL
- [ ] Content matches the canonical URL content
- [ ] Self-referencing canonical on primary pages
- [ ] Consistent with sitemap URLs
- [ ] Consistent protocol (HTTPS)
- [ ] No mixed signals with noindex
- [ ] Cross-domain canonicals point to original source

## Tools for Canonical Testing

| Tool | URL | Purpose |
|------|-----|---------|
| Google Search Console | search.google.com/search-console | Monitor canonical coverage |
| Google URL Inspection | search.google.com/search-console | Check indexed canonical |
| Screaming Frog SEO Spider | www.screamingfrog.co.uk | Crawl canonical implementation |
| Ahrefs Site Audit | ahrefs.com | Detect canonical issues |
| Merkle Canonical Checker | merkle.com | Chrome extension for quick check |

## HTTP Status Code Reference

| Status | Meaning | Canonical Impact |
|--------|---------|-----------------|
| 200 OK | Page accessible | Valid canonical target |
| 301 Moved Permanently | URL has moved | Creates chain - avoid |
| 404 Not Found | Page missing | Invalid canonical target |
| 410 Gone | Page deleted | Invalid canonical target |
| 500 Server Error | Server issue | Temporary issue |
