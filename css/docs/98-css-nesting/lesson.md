# CSS Nesting

## Introduction
CSS Nesting (CSS Nesting Module Level 1) allows you to nest style rules inside other rules, mirroring HTML structure. This reduces repetition, improves readability, and makes styles more maintainable — natively in the browser, without preprocessors. For years, developers relied on Sass or Less for nesting. Now, native CSS nesting provides similar capabilities with a standardized syntax that requires no build step.

---

## Learning Objectives
1. Understand CSS native nesting syntax
2. Use the `&` (nesting selector) properly
3. Nest pseudo-classes, pseudo-elements, and media queries
4. Compare native nesting with preprocessor nesting (Sass/SCSS)
5. Write clean, maintainable nested CSS
6. Understand browser support and fallbacks
7. Avoid specificity pitfalls caused by deep nesting
8. Combine nesting with `@scope` for component isolation
9. Migrate existing Sass nesting to native CSS nesting
10. Debug nested CSS specificity with browser DevTools

---

## Theory

### Basic Nesting
```css
.parent {
  color: #333;

  .child {
    color: #666;
  }
}
```

At its simplest, nesting allows you to write descendant selectors without repeating the parent selector. The above desugars to `.parent .child { color: #666; }`. Nesting follows the CSS document order — rules declared inside a nested block are equivalent to writing them later in the stylesheet with the parent selector prepended.

### The & Nesting Selector
```css
.button {
  background: #3b82f6;

  &:hover {
    background: #1d4ed8;
  }

  & .icon {
    margin-right: 8px;
  }

  &.active {
    background: #10b981;
  }
}
```

The `&` nesting selector represents the parent rule's selector. It's required when:
- Appending pseudo-classes: `&:hover`, `&:focus`
- Concatenating selectors: `&.active`, `&.disabled`
- Using sibling combinators: `& + &`, `& ~ &`
- Using child combinators: `& > .child`

When `&` is the first token, the nested selector is equivalent to the direct descendant. When `&` is not used, the nested selector implicitly starts with the parent (as a descendant selector).

### Nesting Pseudo-Elements
```css
.card {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
  }
}
```

Pseudo-elements (`::before`, `::after`, `::placeholder`) must use the `&` selector in most implementations. Some browsers may support omitting `&` for pseudo-elements, but explicitly including it is safer and more readable.

### Nesting Media Queries
```css
.card {
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
```

Nesting `@media` (and other at-rules) inside a rule keeps related responsive logic together. The browser hoists the `@media` rule to the top level while preserving the nesting relationship. You can also nest multiple media queries:

```css
.card {
  display: grid;
  gap: 16px;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
```

### Compound and Relative Selectors
CSS nesting supports compound selectors with `&` at different positions:

```css
/* & as concatenation */
.list-item {
  &.selected { background: blue; }
  &[data-active] { font-weight: bold; }
}

/* & as relative selector */
.button {
  .dark-theme & { background: white; color: black; }
}

/* Multiple & references */
.list {
  & + & { margin-top: 16px; }
  & > & { padding-left: 16px; }
}
```

### Nesting with @scope
```css
@scope (.card) {
  :scope {
    border: 1px solid #ddd;
    padding: 16px;
  }

  .title {
    font-size: 1.25rem;
  }

  & .body {
    color: #666;
  }
}
```

The `@scope` at-rule combined with nesting provides component-level style isolation. This is particularly useful for web components or component-based architectures where style leakage is a concern.

---

## Nesting vs Sass/SCSS

| Feature | CSS Nesting | Sass |
|---------|-------------|------|
| `&` selector | Required for some cases | Same |
| Deep nesting | Allowed (caution advised) | Same |
| `@media` nesting | Yes | Yes |
| Parent refs outside | Limited (only `&` prefix) | More flexible with `@at-root` |
| Property nesting | No | Yes (`font: { size: ... }`) |
| `@scope` support | Yes | No |
| Build step needed | No | Yes |
| Concatenation | `&.class` | Same, plus `#{$var}` |

### Key Syntax Differences from Sass

In Sass, you can write:
```scss
.button {
  &:hover { ... }
  .icon { ... }
  > .text { ... }
}
```

In CSS nesting, these are:
```css
.button {
  &:hover { ... }
  .icon { ... }
  > .text { ... }
}
```

The syntax is intentionally similar, making migration straightforward. However, CSS nesting does not support Sass features like:
- Property nesting (`font: { size: 16px; }`)
- Variable interpolation (`#{$name}`)
- `@extend` directive
- `@at-root` directive
- Parent selector as expression (`&--modifier` requires explicit string handling)

---

## Visual Explanation

```
Nesting Mirrors HTML Structure:

HTML:                          CSS Nesting:
┌──────────────────┐          .card {
│  .card            │           & {
│  ├─ .title        │             color: #333;
│  ├─ .body         │           }
│  │  └─ .text      │           .title {
│  └─ .footer       │             font-size: 1.5rem;
└──────────────────┘           }
                               .body {
                                 .text {
                                   color: #666;
                                 }
                               }
                               .footer { }
                             }


The & Nesting Selector — How It Resolves:

CSS Source                    Resolves To
────────────────────────────────────────────────────
.button {                     .button { }
  &          { }            → .button { }
  &:hover    { }            → .button:hover { }
  &.active   { }            → .button.active { }
  & .icon    { }            → .button .icon { }
  &::before  { }            → .button::before { }
  & + &      { }            → .button + .button { }
  & > .child { }            → .button > .child { }
}


Nesting Depth Comparison:

✅ Shallow (2-3 levels) — Recommended:

  .card {                    →  .card { }
    .title { }               →  .card .title { }
    &::before { }            →  .card::before { }
    @media (...) {           →  @media (...) {
      .title { }             →  .card .title { }
    }                        →  }
  }
  (Readable, manageable specificity)

❌ Deep nesting (5+ levels) — Avoid:

  .sidebar {                 →  .sidebar { }
    .widget {                →  .sidebar .widget { }
      .content {             →  .sidebar .widget .content { }
        .list {              →  .sidebar .widget .content .list { }
          .item {            →  .sidebar .widget .content .list .item { }
            a { }            →  .sidebar .widget .content .list .item a { }
          }
        }
      }
    }
  }
  (High specificity 0,0,5,1 — hard to override, fragile)


Nested @media — Co-located Responsive Logic:

Without nesting:              With nesting:
.card { }                     .card {
@media (max-width) {            display: grid;
  .card { }                     @media (max-width: 768px) {
}                                 grid-template-columns: 1fr;
@media (min-width) {            }
  .card { }                     @media (min-width: 1024px) {
}                                 grid-template-columns: 1fr 1fr;
}                               }
                              }
(scattered logic)            (co-located logic — easier to maintain)


@scope + Nesting for Component Isolation:

@scope (.card) {
  :scope {             →  targets .card directly
    border: 1px solid;
  }
  .title { }           →  .card .title { }
  & .body { }          →  .card .body { }
}
```

### Common Mistakes
1. **Over-nesting (3+ levels deep makes code hard to read)** — Deep nesting creates overly specific selectors and bloats the compiled CSS. Limit to 2-3 levels.
2. **Forgetting `&` when needed** — Pseudo-classes (`:hover`, `:focus`), adjacent selectors (`+`, `~`), and concatenation (`.active`) require `&`. Without it, you get a descendant selector instead.
3. **Excessive specificity from deep nesting** — `.nav .list .item .link { color: blue; }` creates unnecessary specificity that's hard to override. Keep nesting shallow.
4. **Mixing nesting with BEM methodology poorly** — BEM classes are designed to be flat and specific; nesting them unnecessarily defeats their purpose.
5. **Nesting `@keyframes` inside selectors** — `@keyframes` cannot be nested inside rule sets; they must be at the stylesheet top level.
6. **Assuming Sass-like `@at-root` behavior** — CSS nesting doesn't have `@at-root`. To break out of nesting, you must close the parent block.
7. **Using nesting for global styles** — Resets, typography defaults, and utility classes don't benefit from nesting.
8. **Not considering browser support** — CSS nesting is relatively new (2023+). Consider using PostCSS nesting for broader compatibility.

## Best Practices
- Limit nesting to 2-3 levels maximum
- Use `&` for pseudo-classes, pseudo-elements, and modifier classes
- Combine nesting with `@scope` for component isolation
- Don't nest when not needed — flat CSS is often more readable and maintainable
- Use nesting for component-level styles, not global styles
- Nest media queries inside the relevant rule for co-located responsive logic
- Always use `&::before` and `&::after` (include `&` for pseudo-elements)
- Avoid nesting inside `@keyframes` rules (not supported)
- Prefer nesting for logical grouping, not just to save keystrokes
- Test with an auto-prefixer or PostCSS plugin for backward compatibility

## Accessibility Considerations
- Nesting has no direct accessibility impact — it's a developer ergonomic feature
- However, deeply nested selectors can make inspecting elements harder in DevTools
- Ensure nested selectors don't accidentally hide focusable or interactive elements
- Screen readers and assistive technology are unaffected by nesting in the source
- Maintain clear source order — nesting should not reorder styles in a way that affects cascade

## Performance Considerations
- CSS nesting has zero runtime performance cost — the browser parses it the same way as flat CSS
- Browsers parse nested rules efficiently; there is no performance penalty for nesting
- Deeply nested selectors may increase file size slightly due to repeated selectors in the compiled output
- PostCSS plugins that transpile nesting add a build-time step but no runtime overhead
- The CSS parser handles nesting in a single pass — no additional DOM or style recalculation
- File size impact from nesting is negligible compared to images, fonts, and JavaScript bundles

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Basic nesting (no `&`) | 120+ | 117+ | 17.2+ | 120+ |
| `&` nesting selector | 120+ | 117+ | 17.2+ | 120+ |
| Nested `@media` | 120+ | 117+ | 17.2+ | 120+ |
| Nested `@supports` | 120+ | 117+ | 17.2+ | 120+ |
| `@scope` + nesting | 120+ | 118+ | 17.4+ | 120+ |

CSS Nesting is supported in Chrome 120+, Firefox 117+, Safari 17.2+, and Edge 120+. For older browsers, use the PostCSS Nesting plugin which transpiles nested CSS to flat CSS. Check [caniuse.com/css-nesting](https://caniuse.com/css-nesting) for the current support status. As of 2025, nesting has reached near-universal modern browser support.

## Summary Notes
- CSS Nesting lets you nest selectors inside parent rules, mirroring HTML structure
- The `&` nesting selector represents the parent and is required for pseudo-classes, concatenation, and some combinators
- Nest `@media` queries inside component rules for co-located responsive styles
- Limit nesting to 2-3 levels to maintain readability and avoid excessive specificity
- CSS Nesting is syntactically similar to Sass/SCSS but has important differences (no `@at-root`, no property nesting)
- Browser support: Chrome 120+, Firefox 117+, Safari 17.2+, Edge 120+
- Use PostCSS Nesting plugin for backward compatibility with older browsers
- Nesting has zero runtime performance cost — it's purely a developer experience feature
- Combine with `@scope` for component-level style isolation
- Prefer flat selectors for global styles and utility classes; use nesting for component-specific rules
