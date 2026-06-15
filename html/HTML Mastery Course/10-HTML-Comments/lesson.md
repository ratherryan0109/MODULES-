# Module 10: HTML Comments

## Introduction
HTML comments are non-visible annotations within HTML code. They allow developers to explain code, temporarily disable sections, leave notes for other developers, and organize complex documents. Comments are completely ignored by browsers and do not affect page rendering at all.

## Learning Objectives
By the end of this module, you will be able to:
- Write HTML comments using correct syntax
- Use comments effectively for code documentation
- Debug by commenting out code sections
- Understand comment security implications
- Apply best practices for commenting

## Comment Syntax

```html
<!-- This is an HTML comment. It will not be displayed in the browser. -->
```

### Rules
- Start with `<!--`
- End with `-->`
- Can span multiple lines
- Cannot be nested inside other comments
- Can contain any text except `-->`

### Multi-line Comments
```html
<!--
    This is a multi-line comment.
    It can span several lines.
    Useful for long explanations.
-->
```

### Inline Comments
```html
<p>Visible text <!-- inline comment --> more visible text.</p>
```

## Commenting Out Code

Comments are frequently used to temporarily disable HTML code during development or debugging:

```html
<!--
<div class="debug-section">
    <p>This section is temporarily hidden.</p>
</div>
-->

<!-- <p>Single line of code disabled</p> -->
```

## Using Comments for Organization

```html
<!-- ============ HEADER SECTION ============ -->
<header>
    <h1>My Website</h1>
</header>
<!-- ============ END HEADER ============ -->

<!-- ============ MAIN CONTENT ============ -->
<main>
    <!-- Article 1 -->
    <article>
        <h2>Post Title</h2>
        <p>Content...</p>
    </article>
    
    <!-- Article 2 -->
    <article>
        <h2>Another Post</h2>
        <p>Content...</p>
    </article>
</main>
<!-- ============ END MAIN ============ -->
```

## Conditional Comments (Legacy)

For older versions of Internet Explorer:

```html
<!--[if IE]>
    <p>You are using Internet Explorer.</p>
<![endif]-->

<!--[if lt IE 9]>
    <p>Please upgrade your browser.</p>
<![endif]-->
```

These are only supported in IE10 and below. They are considered obsolete for modern development.

## Comment Security Considerations

### DO NOT put sensitive information in comments:
```html
<!-- ❌ BAD: Never put passwords, API keys, or secrets here -->
<!-- Database password: admin123 -->
<!-- API Key: sk-12345abcde -->
<!-- TODO: Remove this debug code before launch -->
```

### Why?
- Comments are visible in "View Page Source"
- Anyone can see them by pressing Ctrl+U
- Web scrapers and bots can extract comments
- They remain on the client side forever

## Comments in Other Related Technologies

### CSS Comments
```css
/* This is a CSS comment */
```

### JavaScript Comments
```javascript
// Single line JS comment
/* Multi-line JS comment */
```

## Common Mistakes

| Mistake | Incorrect | Correct |
|---------|-----------|---------|
| Nested comments | `<!-- outer <!-- inner --> -->` | Use separate comments |
| Missing dashes | `<!- comment -->` | `<!-- comment -->` |
| Unclosed comment | `<!-- comment` | `<!-- comment -->` |
| Sensitive data | `<!-- password = xyz -->` | Never put secrets in comments |
| Too many comments | Every line commented | Comment only where needed |

## Best Practices
1. **Use comments to explain WHY** — not what (the code shows what)
2. **Keep comments up to date** — outdated comments are worse than none
3. **Don't state the obvious** — `<!-- This is a paragraph -->` before `<p>` is useless
4. **Use section markers** — `<!-- HEADER -->` / `<!-- /HEADER -->` for large sections
5. **Remove debug comments before production**
6. **Never store secrets** — passwords, API keys, tokens
7. **Use TODO format** — `<!-- TODO: Refactor this section -->` for future work
8. **Document complex logic** — explain non-obvious decisions

## Good vs Bad Comments

### Bad Comments (Obvious)
```html
<!-- This is a heading -->
<h1>Title</h1>

<!-- This is a paragraph -->
<p>Text</p>

<!-- Close body -->
</body>
```

### Good Comments (Helpful)
```html
<!-- TODO: Add responsive image here when assets are ready -->
<img src="placeholder.jpg" alt="Product">

<!-- 
    This section is intentionally hidden until Phase 2 launch.
    The feature requires database changes that are not complete.
-->
<div class="phase-2-feature">...</div>

<!-- ==================== -->
<!-- FOOTER START          -->
<!-- ==================== -->
```

## Summary Notes
- HTML comments use `<!-- ... -->` syntax
- Comments are not displayed in the browser
- They are visible in View Page Source (Ctrl+U)
- Use for documentation, organizing code, and debugging
- NEVER put passwords, API keys, or sensitive data in comments
- Keep comments relevant and update them with code changes
- Avoid obvious comments — explain WHY, not WHAT
- Use section markers for large document organization
- Remove debug/commented-out code before production deployment
