# HTML Headings — Cheatsheet

## Heading Levels

| Tag | Default Size | Weight | Usage |
|-----|-------------|--------|-------|
| `<h1>` | 2em (32px) | Bold | Page title (one per page) |
| `<h2>` | 1.5em (24px) | Bold | Major sections |
| `<h3>` | 1.17em (19px) | Bold | Subsections |
| `<h4>` | 1em (16px) | Bold | Groups |
| `<h5>` | 0.83em (13px) | Bold | Sub-groups |
| `<h6>` | 0.67em (11px) | Bold | Minor details |

## Proper Hierarchy

```html
<h1>Page Title</h1>
  <h2>Main Section</h2>
    <h3>Sub Section</h3>
      <h4>Detail Group</h4>
  <h2>Another Section</h2>
```

## Rules
- ✅ One `<h1>` per page
- ✅ Follow hierarchy (no skipping)
- ✅ Use for structure, not size
- ❌ Don't put blocks inside headings
- ❌ Don't use for styling only
- ❌ Don't skip levels

## SEO Best Practices
- `<h1>` = primary keyword
- `<h2>` = secondary keywords
- Keep headings descriptive (3-8 words)
- Front-load keywords in headings

## Accessibility
- Screen readers navigate by headings
- Proper hierarchy = WCAG compliance
- Test with heading navigation tools
- The document outline should make sense when read alone

## Default Heading Margins

| Element | Top Margin | Bottom Margin |
|---------|-----------|---------------|
| `<h1>` | 0.67em | 0.67em |
| `<h2>` | 0.83em | 0.83em |
| `<h3>` | 1em | 1em |
| `<h4>` | 1.33em | 1.33em |
| `<h5>` | 1.67em | 1.67em |
| `<h6>` | 2.33em | 2.33em |

## Related Elements
| Element | Purpose |
|---------|---------|
| `<hgroup>` | Group heading + subheadings |
| `<header>` | Container for intro/nav |
| `<section>` | Thematic group of content |
