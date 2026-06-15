# HTML Links — Cheatsheet

## Anchor Element

```html
<a href="url" target="value" rel="value" title="text" download="filename">Link Text</a>
```

## href Values

| Value | Example | Description |
|-------|---------|-------------|
| Absolute URL | `https://example.com` | Full URL with protocol |
| Relative | `page.html` | Same directory |
| Relative | `folder/page.html` | Subdirectory |
| Relative | `../page.html` | Parent directory |
| Root-relative | `/page.html` | From site root |
| Anchor | `#section` | Same page section |
| Anchor (other) | `page.html#section` | Other page section |
| Email | `mailto:user@example.com` | Opens email client |
| Phone | `tel:+1234567890` | Calls number |
| JavaScript | `javascript:void(0)` | Placeholder (avoid) |

## target Attribute

| Value | Behavior |
|-------|----------|
| `_self` | Same tab (default) |
| `_blank` | New tab/window |
| `_parent` | Parent frame |
| `_top` | Full window (breaks frames) |

## rel Attribute Values

| Value | Purpose |
|-------|---------|
| `noopener` | Security — prevents new tab access to `window.opener` |
| `noreferrer` | Privacy — hides referrer info |
| `nofollow` | SEO — don't pass link equity |
| `external` | Indicates external site |
| `sponsored` | Paid/ sponsored links (SEO) |
| `ugc` | User-generated content (SEO) |

## Link States (CSS) — LVHA Order

```css
a:link     { /* unvisited */ }
a:visited  { /* visited */ }
a:hover    { /* mouse over */ }
a:active   { /* being clicked */ }
```

## Email Link Parameters

```html
<a href="mailto:user@example.com?subject=Subject&body=Body%20text">
```

Separate parameters with `&`, URL-encode values.

## Download Link

```html
<!-- Same origin only -->
<a href="file.pdf" download>Download</a>
<a href="file.pdf" download="custom-name.pdf">Download As</a>
```

## Accessibility

```html
<!-- Descriptive link text (NOT "click here") -->
<a href="...">Read the full documentation</a>

<!-- New tab warning -->
<a href="..." target="_blank" rel="noopener">
  Documentation (opens in new tab)
</a>

<!-- Image as link -->
<a href="...">
  <img src="..." alt="Description of destination">
</a>
```

## URL Path Reference

```
/          → root
./         → current directory
../        → parent directory
../../     → grandparent directory
```

## Security Best Practice

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Safe external link
</a>
```
