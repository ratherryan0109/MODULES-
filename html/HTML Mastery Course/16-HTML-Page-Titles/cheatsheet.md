# HTML Page Titles — Cheatsheet

## Basic Syntax

```html
<head>
  <title>Page Title — Brand Name</title>
</head>
```

## Title Patterns

| Page Type | Recommended Pattern | Example |
|-----------|-------------------|---------|
| Homepage | `Brand — Tagline` | `SiteName — Web Tutorials` |
| Article | `Article — Site` | `How to Center a Div — SiteName` |
| Category | `Category — Site` | `CSS Guides — SiteName` |
| Product | `Product — Brand` | `Nike Air Max — Nike` |
| Search | `"Query" — Site` | `"blue shoes" — StoreName` |
| 404 | `Page Not Found — Site` | `404: Page Not Found — SiteName` |
| Checkout | `Step X of Y — Store` | `Checkout — Step 2 of 3 — Store` |

## SEO Best Practices

```
✅ Put primary keywords first
✅ Keep under 60 characters
✅ Use unique titles per page
✅ Include brand name at the end
✅ Write for humans first
✅ Use pipe (|) or em dash (—) as separator
✅ Match title to page content

❌ Don't keyword stuff
❌ Don't use default titles like "Untitled"
❌ Don't reuse the same title on multiple pages
❌ Don't exceed 60 characters (truncation risk)
❌ Don't use excessive special characters
```

## Length Guide

| Platform | Display Limit |
|----------|--------------|
| Google Desktop | ~60 chars / 600px |
| Google Mobile | ~45-55 chars |
| Bing | ~65 chars |
| Browser Tab | ~20-40 chars (depends on tab width) |
| Bookmarks | Full title shown in dropdown |

## Dynamic Titles (JavaScript)

```javascript
// Set title
document.title = "New Title";

// Notification badge
function setUnread(n) {
  document.title = n > 0
    ? `(${n}) Inbox — MailApp`
    : "Inbox — MailApp";
}

// Tab visibility change
document.addEventListener('visibilitychange', () => {
  document.title = document.hidden
    ? "Come back! — SiteName"
    : "SiteName";
});
```

## Required for Valid HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Your Page Title Here</title>
</head>
<body>
  ...
</body>
</html>
```

Without `<title>`, the HTML document is **not valid**.

## Accessibility

- Screen readers announce the page title first
- Include current section/step for multi-page processes
- Use clear, descriptive text (not "Page 1" or "Untitled")
- Separate content from brand for context

## Common Pitfalls

| Mistake | Impact |
|---------|--------|
| Missing `<title>` | Invalid HTML, "Untitled" in tab |
| Same title everywhere | Poor SEO, confusing UX |
| Title too long | Truncated in SERPs |
| Keyword stuffing | SEO penalty |
| Special characters | Display issues |
