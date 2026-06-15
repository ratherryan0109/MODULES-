# Module 04: CSS Comments

## Table of Contents
1. Introduction
2. Learning Objectives
3. Theory
4. Syntax
5. Examples
6. Visual Explanation
7. Common Mistakes
8. Best Practices
9. Accessibility Considerations
10. Performance Considerations
11. Browser Compatibility
12. Summary Notes

## Introduction
CSS comments are annotations in your stylesheet that the browser ignores. They exist solely for humans — to explain code, organize sections, disable rules temporarily, or leave notes for other developers. While they don't affect visual output, well-commented CSS is a hallmark of professional, maintainable code. Comments become invaluable when you revisit code months later or when working in a team.

Comments serve as documentation embedded directly in the source code. In large-scale projects with thousands of lines of CSS, comments act as signposts that help developers navigate the stylesheet, understand the purpose of specific rules, and identify where certain components begin and end. They also facilitate collaboration by communicating intent, known issues, and pending tasks to other team members.

## Learning Objectives
By the end of this module, you will be able to:
- Write single-line and multi-line CSS comments using `/* */`
- Use comments to organize stylesheets into logical sections
- Temporarily disable CSS rules with comments for debugging
- Understand what cannot be commented in CSS
- Follow commenting best practices for team collaboration
- Generate documentation-style comments for complex CSS
- Use comments effectively in preprocessor environments (Sass, Less)
- Leverage comment-based annotations for automated documentation tools

## Theory
CSS comments use the `/* */` syntax. They can span single or multiple lines. The browser completely ignores everything between `/*` and `*/`. This makes comments completely invisible to the rendered output — they exist purely as source-code metadata.

**Types of comments:**
1. **Section headers**: Organize stylesheet into logical blocks (e.g., `/* ===== TYPOGRAPHY ===== */`)
2. **Inline explanations**: Clarify complex or non-obvious rules (e.g., `/* Negative margin offsets the icon positioning */`)
3. **Disabled code**: Temporarily remove styles without deleting them permanently
4. **TODO/FIXME markers**: Flag areas needing attention or known bugs
5. **Documentation**: Describe parameters, expected behavior, and usage patterns
6. **License and copyright notices**: Required for open-source or third-party code
7. **Debugging annotations**: Mark rules added during troubleshooting that should be reviewed later

**What comments CANNOT do:**
- Nest inside other comments (`/* /* */ */` fails because the inner `*/` closes the entire outer comment)
- Span across `<style>` tags (each `<style>` block or external stylesheet is independent)
- Be used in HTML (`<!-- -->` is for HTML, not CSS — using HTML comments inside a `<style>` tag will not hide CSS)
- Be used inside property values or selectors (comments can only appear between CSS statements)

**Commenting out entire rules:**
```css
/*
.btn-primary {
  background: blue;
  color: white;
}
*/
```

**Commenting inside rule blocks:**
```css
.card {
  /* Background uses a subtle gradient for depth */
  background: linear-gradient(180deg, #fff 0%, #f5f5f5 100%);
  padding: 16px;
  border-radius: 8px;
  /* TODO: Add box-shadow once design team approves values */
}
```

**Note on preprocessors:** Sass and Less support `//` single-line comments that don't appear in compiled output. In vanilla CSS, only `/* */` works. In Sass, `//` comments are stripped during compilation while `/* */` comments are preserved in the output CSS — a useful distinction when you want internal developer notes versus documentation that survives to production.

**CSS-in-JS and modern tooling:** In CSS-in-JS solutions (styled-components, Emotion), comments follow JavaScript syntax (`//` for single-line, `/* */` for multi-line). Some CSS-in-JS libraries support template literal comments as well.

## Syntax
```css
/* This is a CSS comment */
/* This is a
   multi-line comment */

/* ===== SECTION HEADER ===== */
/* --- Sub-section --- */

.element {
  /* Inline comment explaining this property */
  property: value;
}

/* Disabled rule block */
/*
.disabled-rule {
  color: red;
}
*/

/* TODO: Refactor this section for better performance */
.performance-sensitive {
  will-change: transform;
}

/* FIXME: This has a known bug on Safari 14 */
.safari-bug-workaround {
  display: flex;
}
```

## Examples

### Example 1: Full Stylesheet Structure
```css
/* ===== 1. RESET & BASE ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ===== 2. TYPOGRAPHY ===== */
body {
  font-family: 'Segoe UI', sans-serif;
  color: #333;
  line-height: 1.6;
}

/* Headings use a refined scale */
h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.75rem; }

/* ===== 3. LAYOUT ===== */
/* Hero section — uses gradient background */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* TODO: Replace with optimized image for slow connections */
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ===== 4. COMPONENTS ===== */
/* FIXME: This hover effect doesn't work on touch devices */
.btn:hover {
  transform: scale(1.05);
  transition: transform 0.2s ease;
}

/* ===== 5. UTILITIES ===== */
/* Visually hidden but accessible to screen readers */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
```

### Example 2: Documentation-Style Comment Block
```css
/**
 * Button Component
 *
 * Usage: <button class="btn btn--primary">Click</button>
 *
 * Modifiers:
 *   .btn--primary   - Solid primary color background
 *   .btn--secondary - Outlined style
 *   .btn--large     - Increased padding and font size
 *
 * States:
 *   :hover   - Darkens background
 *   :active  - Adds inset shadow
 *   :disabled - Reduces opacity
 */
.btn {
  display: inline-block;
  padding: 10px 24px;
  font-size: 1rem;
  border-radius: 6px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
}
```

### Example 3: Comment Annotations for Maintenance
```css
/* [2024-03-15] Added sticky header per ticket #3421 */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
}

/* [2024-06-01] Temp fix: override button color for promo banner */
/* REVIEW: Remove after promotion ends */
.btn-banner {
  background: #e53e3e !important;
}
```

## Visual Explanation
```
CSS File Structure with Comments:

/* ===== 1. RESET & BASE ===== */    ← Section header — clearly marks the start of a section
  ... reset rules ...

/* ===== 2. TYPOGRAPHY ===== */      ← Section header — aids navigation in long files
  ... font rules ...

  /* --- Headings --- */             ← Sub-section — breaks down a section
    ... h1, h2, h3 rules ...

  /* --- Paragraphs --- */           ← Sub-section
    ... p rules ...

/* ===== 3. COMPONENTS ===== */      ← Section header
  ... component styles ...

  /* Card Component */
  /* TODO: Add responsive card grid */
  .card { ... }

The visual hierarchy of comments helps developers quickly locate
the section they need to edit, especially in stylesheets with
1000+ lines of CSS.
```

## Common Mistakes
1. **Nested comments**: `/* /* */ */` fails because the first `*/` ends the outer comment. There is no way to nest comments in CSS without using preprocessor variables or workarounds.
2. **Using HTML comments**: `<!-- -->` inside CSS (within `<style>` tags or `.css` files) doesn't work and may cause parsing errors in strict mode.
3. **Over-commenting obvious code**: Don't explain what the code does (`/* This sets the color to red */`); explain WHY (`/* Red draws attention to the error state */`).
4. **Stale/outdated comments**: Comments that contradict the actual code are worse than no comments. Always update comments when code changes.
5. **Commenting large blocks without markers**: When disabling large sections, use clear start/end delimiters so it's obvious what's disabled.
6. **Leaving commented-out code in production**: Remove dead code before deployment. Use version control history instead of commented-out code.
7. **Inconsistent comment formatting**: Mixing different comment styles within the same project creates confusion.
8. **Using `//` in vanilla CSS**: This is invalid in standard CSS and will cause the rule after the comment to fail.
9. **Forgetting that SCSS `//` comments are stripped**: In Sass, `//` comments don't appear in compiled CSS, which surprises developers who expect them to be visible in output.

## Best Practices
- Use consistent section header formats (e.g., `/* ===== SECTION ===== */` or `/* --- Sub-section --- */`)
- Write comments that explain WHY, not WHAT (the code shows what it does; comments should explain intent)
- Keep comments brief and relevant — avoid verbosity
- Update comments when updating code (stale comments erode trust)
- Use TODO and FIXME consistently for tracking unfinished work
- Add comments for browser-specific hacks or polyfills explaining WHY the hack is needed
- Remove commented-out code before committing (rely on git history)
- Use a style guide for comment formatting in teams
- Consider using documentation-block comments (`/** ... */`) for complex components
- Date-stamp significant comments (`/* 2024-01-15: ... */`) for traceability
- Use a comment linter (like stylelint's `comment-empty-line-before` rule) to enforce consistency

## Accessibility Considerations
CSS comments don't directly affect accessibility, but well-structured comments help maintainers ensure accessibility standards are met by making it easier to find and update relevant styles. For example, a comment like `/* Focus styles for keyboard users */` helps developers quickly locate and verify focus indicators.

When commenting out styles, be aware that disabling accessibility-related CSS (such as focus outlines, high-contrast adjustments, or screen-reader-only utilities) can inadvertently harm accessibility. Always flag disabled accessibility code with comments like `/* ACCESSIBILITY: Restore focus outline before release */`.

Inline comments can also document ARIA-related styling decisions:
```css
/* Ensures the skip-link is visible when focused (keyboard accessibility) */
.skip-link:focus {
  position: static;
  width: auto;
  height: auto;
  clip: auto;
}
```

## Performance Considerations
Comments increase file size, but the impact is minimal for development. For production:
- Remove comments using CSS minification tools (CSSNano, CleanCSS, UglifyCSS)
- Tools like cssnano and clean-css strip comments during build
- Development stylesheets can keep comments for readability
- Gzip compression minimizes the bandwidth impact of comments (repeated text compresses well)
- Source maps preserve development comments while serving minified CSS to users
- For large CSS codebases (5000+ lines), comments can add 10-20KB uncompressed — negligible after minification and gzip

**Build tool integration:**
```json
// PostCSS config (postcss.config.js)
{
  "plugins": [
    require("cssnano")({
      preset: ["default", { discardComments: { removeAll: true } }]
    })
  ]
}
```

## Browser Compatibility
| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|----|
| `/* */` comments | 1+ | 1+ | 1+ | 12+ | 4+ |
| Nested comments | Not supported | Not supported | Not supported | Not supported | Not supported |

CSS comments using the `/* */` syntax are supported in every CSS-capable browser since CSS1 (1996). There are zero compatibility concerns — this is one of the most stable features in all of CSS. The syntax has not changed in over 25 years of web development.

## Summary Notes
- CSS comments use `/* content */` syntax — single or multi-line
- The browser ignores everything between `/*` and `*/`
- Use for: organization, explanation, disabling code, TODOs, documentation
- Cannot nest comments — `/* /* */ */` will break
- Preprocessors (Sass/Less) support `//` single-line comments (stripped in output)
- Minify/remove comments in production for smaller file sizes
- Write WHY, not WHAT — explain intent, not mechanics
- Keep comments up-to-date — stale comments are misleading
- Use consistent formatting across the project
- Date-stamp significant annotations for traceability
- Always flag disabled accessibility code with comments
- Documentation-style comments (`/** */`) help with automated documentation generation
