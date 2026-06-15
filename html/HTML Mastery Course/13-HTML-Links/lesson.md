# Module 13: HTML Links

## Introduction

Links are the foundation of the web. The `<a>` (anchor) element creates hyperlinks that connect web pages, documents, sections within a page, email addresses, phone numbers, and more. Without links, the web would be a collection of isolated documents rather than an interconnected network.

HTML links can point to other pages on the same website (relative links), pages on different websites (absolute links), specific sections within a page (anchor links), or trigger actions like sending emails or dialing phone numbers. Links are also critical for search engine optimization (SEO) and accessibility.

---

## Learning Objectives

By the end of this module, you will be able to:
- Create hyperlinks using the `<a>` element
- Understand the difference between absolute and relative URLs
- Use the `href` attribute to specify link destinations
- Open links in new tabs or windows using the `target` attribute
- Link to specific sections within a page using IDs
- Create email and telephone links
- Style links with CSS (including the four states: link, visited, hover, active)
- Understand the `rel` attribute for security and SEO
- Follow accessibility best practices for links

---

## Syntax

### Basic Link

```html
<a href="https://example.com">Visit Example</a>
```

The **anchor** `<a>` element wraps the text or content that becomes clickable. The **`href`** attribute specifies the destination URL.

### Complete Attribute Set

```html
<a href="url" target="value" rel="value" title="tooltip text">Link Text</a>
```

| Attribute | Purpose |
|-----------|---------|
| `href` | The link destination (URL, path, or anchor) |
| `target` | Where to open the link (`_self`, `_blank`, `_parent`, `_top`) |
| `rel` | Relationship between current page and linked page |
| `title` | Additional information shown as a tooltip |
| `download` | Suggests the linked file should be downloaded |

---

## Absolute vs Relative URLs

### Absolute URLs

An absolute URL contains the full web address including the protocol and domain.

```html
<a href="https://www.google.com">Google</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML">MDN HTML Docs</a>
```

Use absolute URLs when linking to external websites.

### Relative URLs

A relative URL is specified relative to the current page's location. No domain or protocol is needed.

```html
<!-- Same directory -->
<a href="about.html">About Us</a>

<!-- Subdirectory -->
<a href="blog/post.html">Blog Post</a>

<!-- Parent directory -->
<a href="../index.html">Home</a>

<!-- Root-relative (from site root) -->
<a href="/contact.html">Contact</a>
```

| Path Pattern | Meaning |
|-------------|---------|
| `file.html` | Same directory as current page |
| `folder/file.html` | File in a subfolder |
| `../file.html` | Parent directory |
| `../../file.html` | Grandparent directory |
| `/file.html` | Root of the website |

---

## The `target` Attribute

The `target` attribute specifies where to open the linked document.

| Value | Description |
|-------|-------------|
| `_self` | Default. Opens in the same tab/window |
| `_blank` | Opens in a new tab or window |
| `_parent` | Opens in the parent frame (for iframes/framesets) |
| `_top` | Opens in the full body of the window (breaks frames) |

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Opens in new tab
</a>
```

**Security note:** When using `target="_blank"`, always include `rel="noopener noreferrer"` to prevent the new page from accessing the original page's `window.opener` object.

---

## Linking to Sections (Anchor Links)

Use anchor links to navigate to specific sections within a page. First, give the target element an `id` attribute, then link to it with `#id`.

### Target element:
```html
<h2 id="contact-section">Contact Us</h2>
```

### Link to it:
```html
<a href="#contact-section">Jump to Contact</a>
```

### Link to a section on another page:
```html
<a href="about.html#team">View Our Team</a>
```

---

## Email and Telephone Links

### Email Links

Use the `mailto:` scheme to create email links.

```html
<a href="mailto:info@example.com">Email Us</a>
```

With subject and body prepopulated:
```html
<a href="mailto:support@example.com?subject=Help%20Request&body=Hello%2C%20I%20need%20help%20with...">
  Send Support Email
</a>
```

### Telephone Links

Use the `tel:` scheme for clickable phone numbers (mobile devices will dial directly).

```html
<a href="tel:+1234567890">Call Us: (123) 456-7890</a>
```

---

## Link States and CSS Styling

CSS pseudo-classes style links in different states:

```css
/* Unvisited link */
a:link {
  color: #2563eb;
  text-decoration: underline;
}

/* Visited link */
a:visited {
  color: #7c3aed;
}

/* Mouse hovers over link */
a:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

/* Link being clicked (active moment) */
a:active {
  color: #dc2626;
}
```

### Styling Order (LVHA)
The order of link pseudo-classes matters: **L**ink → **V**isited → **H**over → **A**ctive

```css
a:link {}
a:visited {}
a:hover {}
a:active {}
```

### Common Link Styles

```css
/* Remove underline by default, show on hover */
a {
  color: #2563eb;
  text-decoration: none;
  transition: color 0.3s, text-decoration 0.3s;
}

a:hover {
  text-decoration: underline;
  color: #1e40af;
}

/* Style as a button */
a.button {
  display: inline-block;
  padding: 12px 24px;
  background: #2563eb;
  color: white;
  text-decoration: none;
  border-radius: 6px;
}
```

---

## The `rel` Attribute

The `rel` attribute describes the relationship between the current page and the linked resource.

| Value | Description |
|-------|-------------|
| `noopener` | Prevents new page from accessing `window.opener` |
| `noreferrer` | Prevents the referrer header from being sent |
| `nofollow` | Tells search engines not to pass link equity |
| `external` | Indicates the link points to an external site |
| `next` / `prev` | Used for paginated content |
| `icon` | Used for favicons (on `<link>` not `<a>`) |

```html
<a href="https://external-site.com" rel="nofollow noopener" target="_blank">
  External Link
</a>
```

---

## Accessibility Best Practices

1. **Use descriptive link text** — Never use "click here" or "read more" without context. Link text should describe the destination.
2. **Avoid opening links in new tabs without warning** — If you use `target="_blank"`, add an icon or text like "(opens in new tab)".
3. **Ensure links are visually distinguishable** — Don't rely solely on color; use underlines or other visual cues.
4. **Use the `title` attribute sparingly** — It can supplement link text but should not be the sole source of information.
5. **Skip navigation links** — Add "Skip to main content" links for keyboard users.
6. **Keyboard accessibility** — Links must be focusable and activatable via keyboard (they are by default).

---

## Common Mistakes

1. **Missing `href` attribute** — An `<a>` without `href` is not focusable or clickable.
2. **Broken links** — Always test that URLs and paths are correct.
3. **"Click here" link text** — Bad for SEO and accessibility. Screen readers navigate by links.
4. **Not using `rel="noopener"` with `target="_blank"`** — Creates a security vulnerability.
5. **Overusing `target="_blank"`** — Users may prefer to decide where to open links.
6. **Linking to non-existent IDs** — Anchor links with wrong IDs don't work.
7. **Forgetting the protocol in absolute URLs** — `example.com` may not work without `https://`.
8. **Using `<a>` when a button is needed** — Links navigate; buttons perform actions.

---

## Visual Explanation

```
Absolute URL:
┌────────────────────────────────────────────────┐
│ https://www.example.com/blog/post.html#section │
│ └─┬─┘ └─────┬──────┘ └───┬────┘└───┬──┘└─┬──┘ │
│ Protocol    Domain       Path     File  Anchor │
└────────────────────────────────────────────────┘

Relative URL:
┌────────────────────┐
│ blog/post.html     │ → from current directory
│ ../about.html      │ → one level up
│ /images/logo.png   │ → from site root
└────────────────────┘
```

---

## Summary Notes

- The `<a>` element creates hyperlinks; `href` specifies the destination
- Absolute URLs include protocol + domain; relative URLs are path-based
- `target="_blank"` opens in a new tab; always pair with `rel="noopener noreferrer"`
- Anchor links (`#id`) navigate to sections within a page
- `mailto:` creates email links; `tel:` creates phone links
- CSS pseudo-classes style link states: `:link`, `:visited`, `:hover`, `:active` (LVHA order)
- Use descriptive link text for accessibility and SEO
- The `download` attribute hints the browser to download the linked file
- Always test links to ensure they work correctly
- `rel` attributes control security, SEO, and relationship semantics
