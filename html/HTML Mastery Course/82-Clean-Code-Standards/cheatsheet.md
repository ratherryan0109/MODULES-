# Clean Code Standards Cheatsheet

## Formatting Rules

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
</head>
<body>
  <main>
    <article>
      <h1>Heading</h1>
      <p>Content</p>
    </article>
  </main>
</body>
</html>
```

- 2-space indentation
- 80-120 character line limit
- Double quotes for attributes
- Lowercase elements and attributes
- Close all tags (even optional ones)

## BEM Naming Convention

```
.block                     → Component (card)
.block__element            → Part of component (card__title)
.block--modifier           → Variant (card--featured)
.block__element--modifier  → Variant element (card__button--primary)
```

**Examples:**
- `card`, `card__title`, `card__text`, `card__button`
- `card--featured`, `card--horizontal`
- `card__button--primary`, `card__button--secondary`
- `form`, `form__group`, `form__input`, `form__error`

## Attribute Order

```html
<input
  type="text"       /* 1. Type, src, href */
  id="username"     /* 2. id */
  class="input"     /* 3. class */
  data-validate="true" /* 4. data-* */
  aria-label="User" /* 5. aria-*, role */
  name="username"   /* 6. name, value */
  placeholder="Enter username" /* 7. placeholder, title, alt */
  required          /* 8. Boolean attributes */
>
```

## Semantic Elements Map

| Non-Semantic (Bad) | Semantic (Good) |
|--------------------|-----------------|
| `<div class="header">` | `<header>` |
| `<div class="nav">` | `<nav>` |
| `<div class="main">` | `<main>` |
| `<div class="section">` | `<section>` |
| `<div class="article">` | `<article>` |
| `<div class="sidebar">` | `<aside>` |
| `<div class="footer">` | `<footer>` |
| `<span class="heading">` | `<h1>-<h6>` |
| `<div class="caption">` | `<figcaption>` |

## Common Anti-Patterns

| Bad Practice | Problem | Solution |
|-------------|---------|----------|
| Inline styles | Maintenance, specificity | CSS classes |
| Inline event handlers | Separation of concerns | addEventListener |
| `<br>` for spacing | Presentational | CSS margin/padding |
| `<div id="header">` | No semantic meaning | `<header>` |
| Inconsistent quotes | Unprofessional | Double quotes always |
| No doctype | Quirks mode | `<!DOCTYPE html>` |
| Missing alt text | Accessibility | Alt on all images |
| Deep nesting (>4 levels) | Hard to read | Flatten structure |
| Non-unique IDs | Invalid HTML | Use classes for reuse |
| Deprecated tags | Standards violation | Modern HTML |

## EditorConfig (.editorconfig)

```ini
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```

## HTMLHint Rules (.htmlhintrc)

```json
{
  "tagname-lowercase": true,
  "attr-lowercase": true,
  "attr-value-double-quotes": true,
  "doctype-first": true,
  "tag-pair": true,
  "spec-char-escape": true,
  "id-unique": true,
  "src-not-empty": true,
  "attr-no-duplication": true,
  "title-require": true
}
```

## Commenting Guidelines

```html
<!-- ==========================================
     SECTION HEADER
     ========================================== -->
<main>
  <!-- Component: Card -->
  <article class="card">
    <!-- /Component: Card -->
  </article>
</main>
<!-- /SECTION HEADER -->

<!-- TODO: Remove this after migration (Date) -->
<div class="legacy">...</div>
```

## Code Review Checklist

- [ ] Semantic elements used appropriately
- [ ] Consistent indentation (2 spaces)
- [ ] BEM naming applied correctly
- [ ] No inline styles or event handlers
- [ ] All tags properly closed
- [ ] Unique IDs throughout
- [ ] Alt text on all images
- [ ] Form inputs have labels
- [ ] No deprecated elements
- [ ] DOCTYPE and lang present
- [ ] Data attributes for JS hooks
- [ ] ARIA attributes where needed
- [ ] Heading hierarchy maintained
- [ ] Comments explain WHY, not WHAT
- [ ] Valid HTML (W3C validation passed)
