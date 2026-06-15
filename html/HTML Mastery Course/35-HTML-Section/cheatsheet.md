# HTML `<section>` Element — Cheatsheet

## Basic Syntax

```html
<section>
  <h2>Section Title</h2>
  <p>Related content grouped here.</p>
</section>
```

## Usage Decision Tree

```
Is it a thematic group of content?
├── Yes → Does it have a heading?
│       ├── Yes → Use <section>
│       └── No  → Add heading or use <div>
└── No  → Use <div>
```

## `<section>` vs. `<article>` vs. `<div>`

| Feature | `<section>` | `<article>` | `<div>` |
|---------|-------------|-------------|---------|
| Semantic meaning | Yes — thematic group | Yes — self-contained | No — generic |
| Heading required | Recommended | Recommended | No |
| Can be syndicated | No | Yes | N/A |
| ARIA role | `region` (with name) | `article` | None |
| Document outline | Creates section | Creates section | None |

## Nesting Rules

| Allowed Inside | NOT Allowed (semantically) |
|----------------|---------------------------|
| `<body>`       | `<p>` (not a container)   |
| `<main>`       | `<figcaption>`            |
| `<article>`    |                           |
| `<section>`    |                           |
| `<aside>`      |                           |
| `<div>`        |                           |
| `<form>`       |                           |

## Making Sections Accessible (Landmark)

```html
<!-- Becomes a 'region' landmark -->
<section aria-labelledby="s1">
  <h2 id="s1">Features</h2>
</section>

<!-- Also a 'region' landmark -->
<section aria-label="Features overview">
  <h2>Our Features</h2>
</section>

<!-- NOT a landmark (no accessible name) -->
<section>
  <h2>Features</h2>
</section>
```

## Heading Hierarchy for Nested Sections

```html
<section>
  <h2>Chapter 1</h2>           <!-- Level 1 -->
  <section>
    <h3>1.1 Subtopic</h3>      <!-- Level 2 -->
    <section>
      <h4>1.1.1 Detail</h4>    <!-- Level 3 -->
    </section>
  </section>
</section>
```

## Common Patterns

| Pattern | Structure |
|---------|-----------|
| Landing page | `section#hero`, `section#features`, `section#pricing` |
| Documentation | Nested sections with `h2` → `h3` → `h4` |
| Dashboard | `section` for each widget with `aria-labelledby` |
| FAQ | `section` per category, `article` per question |
| Blog | `section` for intro, `section` for body, `section` for comments |

## CSS Defaults

```css
section {
  display: block;
}
```

## ARIA Attributes

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `aria-labelledby` | References heading `id` for naming | `aria-labelledby="features-title"` |
| `aria-label` | Direct accessible name | `aria-label="Features"` |
| `aria-describedby` | References description | `aria-describedby="features-desc"` |
| `hidden` | Hides section | `hidden` |

## Best Practices Quick List

- ✅ Always include a heading (`<h1>`–`<h6>`)
- ✅ Use `aria-labelledby` to create landmarks
- ✅ Maintain proper heading levels when nesting
- ✅ Use `<article>` for self-contained content
- ✅ Use `<div>` for styling-only containers
- ❌ Don't use `<section>` for single paragraphs
- ❌ Don't nest `<section>` in `<header>` or `<footer>`
- ❌ Don't omit headings
- ❌ Don't use `<section>` for layout grids

## Browser Support

| Chrome | Firefox | Safari | Edge | IE |
|--------|---------|--------|------|-----|
| 5+     | 4+      | 5+     | 12+  | 9+* |

*IE 9-11 require HTML5 shiv for proper styling
