# Module 16: HTML Page Titles

## Introduction

The page title, defined by the `<title>` element in the `<head>` section, is one of the most important metadata elements on any web page. It appears in the browser tab, search engine results (SERPs), bookmarks, social media shares, and browser history. A well-crafted title improves SEO, accessibility, and user experience.

The `<title>` element is required for valid HTML documents and should be unique for every page on a website.

---

## Learning Objectives

By the end of this module, you will be able to:
- Add a `<title>` element to an HTML page
- Write effective, SEO-friendly page titles
- Understand where the title appears in browsers and search results
- Follow title best practices for accessibility
- Create unique titles for each page on a site
- Understand title length limits for search engines

---

## Syntax

```html
<head>
  <title>Page Title Goes Here</title>
</head>
```

The `<title>` element must be placed inside the `<head>` section. It contains plain text only — no HTML tags allowed.

---

## Where the Title Appears

1. **Browser Tab** — The title is displayed on the browser tab
2. **Search Engine Results (SERP)** — The title is the clickable headline
3. **Bookmarks / Favorites** — Default name when bookmarking
4. **Browser History** — Identifies pages in history
5. **Social Media Shares** — Default title when sharing links
6. **Screen Readers** — First element announced when navigating

---

## SEO Best Practices

### Title Format

```
Primary Keyword — Secondary Keyword | Brand Name
```

### Examples

```
HTML Tutorial for Beginners — Learn Web Development | SiteName
10 Best CSS Frameworks in 2026 — Comparison Guide
About Us — Company Name
```

### Guidelines

| Factor | Recommendation |
|--------|---------------|
| Length | 50-60 characters (Google displays ~600px) |
| Keywords | Place important keywords at the beginning |
| Uniqueness | Each page must have a unique title |
| Branding | Include brand name at the end (or beginning for homepage) |
| Readability | Write for humans first, search engines second |
| Accuracy | Title must accurately describe the page content |

### Title Length

Google typically displays the first 50-60 characters of a title. Longer titles get truncated with an ellipsis (`...`). Bing displays up to 65 characters.

```
✅ Good: "CSS Flexbox Tutorial: Complete Guide with Examples | SiteName"
❌ Too long: "CSS Flexbox Tutorial: The Complete Guide to Flexible Box Layouts with Real-World Examples and Code Snippets"
```

---

## Accessibility

- The title is the first thing screen readers announce when loading a page
- A descriptive title helps users understand the page context
- Include the page name first, followed by the site name
- For multi-step processes, include the current step

```
Good: "Checkout — Step 2 of 3: Shipping Address | StoreName"
Bad:  "Step 2"
```

---

## Dynamic Titles with JavaScript

You can change the page title dynamically using JavaScript:

```javascript
document.title = "New Page Title";
```

This is useful for single-page applications, notification counts, or real-time updates.

```javascript
// Update title with unread count
function updateUnreadCount(count) {
  if (count > 0) {
    document.title = `(${count}) Inbox — Mail App`;
  } else {
    document.title = "Inbox — Mail App";
  }
}
```

---

## Title Patterns by Page Type

| Page Type | Title Pattern | Example |
|-----------|---------------|---------|
| Homepage | Brand Name — Tagline | "SiteName — Web Development Tutorials" |
| Article | Article Title — Site Name | "How to Center a Div — SiteName" |
| Category | Category — Site Name | "CSS Tutorials — SiteName" |
| Product | Product Name — Brand | "Nike Air Max 270 — Nike Official" |
| Search | Search Query — Site Name | "blue widgets — WidgetStore" |
| Error 404 | Page Not Found — Site Name | "404: Page Not Found — SiteName" |
| User Profile | Username's Profile — Site Name | "JohnDoe's Profile — SocialApp" |

---

## Common Mistakes

1. **Missing `<title>`** — HTML is invalid without it
2. **Default titles** — "Untitled Document" or "New Tab"
3. **Same title on every page** — Hurts SEO and usability
4. **Too long titles** — Get truncated in SERPs
5. **Keyword stuffing** — "Buy Shoes, Cheap Shoes, Running Shoes"
6. **Special characters** — Can cause display issues
7. **No brand mention** — Missed branding opportunity
8. **Inaccurate titles** — Misleading users increases bounce rate

---

## Summary Notes

- The `<title>` element defines the page title and is required in HTML
- Place it inside `<head>`; it must contain text only (no HTML)
- Titles appear in tabs, search results, bookmarks, and history
- Keep titles 50-60 characters for optimal SERP display
- Place primary keywords first, brand name last
- Each page must have a unique, descriptive title
- Write for users first, then search engines
- Use JavaScript `document.title` for dynamic updates
- A good title improves SEO, accessibility, and click-through rates
- Screen readers announce the title first — make it descriptive
