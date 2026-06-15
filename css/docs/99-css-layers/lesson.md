# CSS Layers (@layer)

## Introduction
CSS Cascade Layers (`@layer`) give explicit control over the cascade order. They let you define layers (e.g., reset, framework, components, utilities) and control which takes precedence — solving specificity wars without `!important`. For years, developers struggled with specificity conflicts between third-party CSS, design system styles, and override rules. Cascade Layers provide a clean, standards-based solution that makes the cascade predictable.

---

## Learning Objectives
1. Understand cascade layers and the `@layer` rule
2. Define and order layers for predictable specificity
3. Add styles to layers from multiple sources
4. Use anonymous and named layers
5. Layer `@import` statements
6. Manage layer priority effectively
7. Understand how layers interact with the cascade
8. Combine layers with `@scope` for complete cascade control
9. Migrate existing projects to use cascade layers
10. Debug layer ordering with browser DevTools

---

## Theory

### The Cascade Order (top wins)
The CSS cascade determines which styles apply when multiple rules target the same element. The full cascade order is:

1. **Normal declarations** (lowest priority) — includes layered and unlayered styles
2. **Animation** — keyframe animations
3. **!important** — reversed order (origin and layer order invert)
4. **Transition** (highest priority) — CSS transitions

Within normal declarations, the order is:
1. User-agent styles (browser defaults)
2. User styles (browser settings, custom CSS)
3. Author styles — layered styles in declaration order, then unlayered styles

### Layer Priority
Later layers override earlier layers regardless of specificity.

```css
@layer reset, base, components, utilities;

@layer reset {
  * { margin: 0; padding: 0; }
}

@layer components {
  .btn { padding: 12px 24px; }
}

@layer utilities {
  .mt-4 { margin-top: 16px; }
}
```

In this example, `utilities` overrides `components`, which overrides `base`, which overrides `reset`. A utility class `.mt-4` will override a component's margin even if the component selector has higher specificity. This is the key value proposition of cascade layers: **layer order beats specificity**.

### How Layer Priority Works
When the browser encounters conflicting declarations:
1. First, it compares origins (user-agent, user, author)
2. Within the author origin, it compares layer order
3. Later layers override earlier layers
4. Within the same layer, normal specificity rules apply
5. Unlayered styles sit between the last declared layer and animations

This means unlayered styles always override layered styles (unless `!important` is involved). This is intentional — it allows quick overrides without worrying about layer order.

```css
@layer base {
  .card { background: gray; } /* specificity: 0,1,0 */
}

/* Unlayered — overrides layered */
.card { background: white; } /* Same specificity, but unlayered wins */
```

### Layer Features

**Named layers:** `@layer name { ... }`
```css
@layer theme {
  :root { --primary: #3b82f6; }
}
```

**Anonymous layers:** `@layer { ... }`
```css
@layer {
  .debug { border: 1px solid red; }
}
```
Anonymous layers are assigned an internal name and cannot be referenced later.

**Import layers:** `@import url(style.css) layer(framework);`
```css
@import url('bootstrap.css') layer(bootstrap);
@import url('custom.css') layer(components);
```

**Nested layers:** `@layer framework { @layer theme { ... } }`
```css
@layer framework {
  @layer theme {
    .btn { background: blue; }
  }
}
```
This creates a two-level layer name: `framework.theme`. Nested layers are separated by dots in the layer name.

**Layer reassignment** — currently a proposal, not yet widely supported.

### The @layer Statement
The `@layer` statement (without a block) declares the layer order:
```css
@layer reset, base, components, utilities, overrides;
```
This single line establishes the full layer order before any styles are loaded. It can appear multiple times — each statement adds new layers to the end of the layer list. If a layer is already declared, subsequent `@layer` statements don't change its position.

### Layers vs !important
```css
@layer base {
  .btn { background: blue !important; }
}
@layer utilities {
  .btn { background: red !important; }
}
```
With `!important`, the cascade order reverses: earlier layers override later layers. This prevents `!important` abuse by ensuring that utility layers can't override important base styles.

---

## Examples

```css
/* Define layer order — must come before any layered styles */
@layer reset, base, layout, components, utilities, overrides;

/* Layer with multiple blocks — all contribute to the same layer */
@layer components {
  .card { background: white; border-radius: 8px; }
  .btn { padding: 12px 24px; background: #3b82f6; }
}

/* Layer can be extended from another file */
/* In components.css: */
@layer components {
  .badge { font-size: 0.75rem; }
}

/* Unlayered styles go before all layers in cascade */
body { font-family: system-ui; }

/* Revert layers — undoes the cascade for a layer */
.element {
  all: revert-layer;
}

/* Practical reset + base + components pattern */
@layer reset {
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
  }
}

@layer base {
  html { font-size: 100%; }
  body { line-height: 1.6; color: #333; }
  h1 { font-size: 2rem; }
}

@layer components {
  .btn { display: inline-flex; padding: 0.5rem 1rem; }
  .card { padding: 1.5rem; border-radius: 8px; }
}

/* Wrapping third-party CSS in a layer */
@import url('https://cdn.example.com/widget.css') layer(widget);
```

---

## Visual Explanation

```
Cascade Order with Layers:

 ┌──────────────────────────────────────┐
 │  User-agent styles    (lowest)       │
 ├──────────────────────────────────────┤
 │  User styles                         │
 ├──────────────────────────────────────┤
 │  @layer reset           ─┐           │
 │  @layer base             │ Author    │
 │  @layer components       │ styles    │
 │  @layer utilities        │ layered   │
 │  @layer overrides        ─┘           │
 ├──────────────────────────────────────┤
 │  Unlayered author styles             │ ← Wins over all layers
 ├──────────────────────────────────────┤
 │  Animations                          │
 ├──────────────────────────────────────┤
 │  !important (reversed)               │
 ├──────────────────────────────────────┤
 │  Transitions          (highest)      │
 └──────────────────────────────────────┘

Within a single layer, normal cascade rules apply:

 @layer components {
   .card { color: blue; }           /* higher specificity wins */
   div.card.featured { color: red; }
 }
```

---

## Common Mistakes
1. **Declaring layer order inconsistently** — If you declare `@layer utilities, components` and later `@layer base, utilities`, the layer order becomes `utilities, components, base` — not what you intended. Always declare all layers at the top of your stylesheet.
2. **Unlayered styles overriding layered ones** — Unlayered styles come after all layers in the cascade. If you have unlayered styles, they will override layered ones regardless of specificity. This surprises developers who expect layers to control everything.
3. **Over-relying on layers for poorly structured CSS** — Layers are not a substitute for well-organized CSS. If a single layer has 5,000 lines, the layer order won't fix the internal mess.
4. **Not understanding that layers affect the entire cascade** — Layer order applies to the entire document, not just individual components. A utility in one layer overrides components in another layer across the entire site.
5. **Using too many layers (10+)** — More layers create cognitive overhead. Most projects need 3-6 layers maximum.
6. **Forgetting `@import layer()` syntax** — When importing third-party CSS, wrap it in a layer to prevent it from becoming unlayered and overriding your styles.
7. **Confusing layer order with file order** — `@layer` statements are order-dependent, not file-dependent. The first declaration of a layer's order matters.
8. **Not using `revert-layer` when intentionally overriding** — Use `revert-layer` to reset a property to the previous layer's value instead of using `initial` or `unset`.

## Best Practices
- Plan layer order before writing styles — declare all layers with `@layer` statement at the top of your stylesheet
- Use 3-5 layers maximum for most projects (e.g., reset, base, components, utilities, overrides)
- Combine with `@scope` for complete cascade control — layers handle global priority, scope handles component isolation
- Document layer strategy in team projects — a README or comment explaining layer order prevents confusion
- Wrap third-party CSS in layers: `@import url(...) layer(vendor)`
- Use unlayered styles sparingly — reserve them for quick overrides during development
- Avoid `!important` wherever possible — layers should make `!important` unnecessary
- Use `revert-layer` to deliberately cascade to the previous layer
- Keep each layer focused on a single concern (separation of concerns)
- Test layer behavior in browser DevTools — the Styles panel shows which layer a rule belongs to

## Accessibility Considerations
- Cascade layers have no direct accessibility impact
- However, predictable style application improves the reliability of focus indicators and contrast — layers help ensure accessibility styles aren't accidentally overridden
- Ensure focus and accessibility styles (like `:focus-visible`) are in the appropriate layer (typically the topmost layer) so they can't be overridden
- Screen readers are unaffected by cascade layer ordering
- Use layers to guarantee that accessibility-related overrides take precedence over component styles

## Performance Considerations
- Cascade layers have zero performance cost — they are a CSS parsing feature, not a runtime feature
- The browser resolves layer order during the cascade step, which is already part of the style calculation phase
- Layers do not affect memory usage, paint time, or layout cost
- Importing CSS with `@import layer()` uses the same network loading as regular `@import`
- The `revert-layer` keyword is resolved at compute time and has negligible performance impact
- Layers may actually improve performance by reducing the need for overly specific selectors (which take slightly longer to match)

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| `@layer` (named) | 99+ | 97+ | 15.4+ | 99+ |
| `@layer` (anonymous) | 99+ | 97+ | 15.4+ | 99+ |
| `@import layer()` | 99+ | 97+ | 15.4+ | 99+ |
| Nested layers | 99+ | 97+ | 15.4+ | 99+ |
| `revert-layer` | 99+ | 97+ | 15.4+ | 99+ |

All modern browsers support cascade layers since early 2022. IE 11 and legacy browsers do not support `@layer`. For projects needing legacy browser support, use a PostCSS plugin that transpiles `@layer` to browser-compatible CSS, or provide a fallback stylesheet. Check caniuse.com for the latest support data.

## Summary Notes
- `@layer` defines explicit cascade priority: later layers override earlier ones regardless of specificity
- Declare layer order first with `@layer reset, base, components, utilities;` — then populate layers
- Unlayered styles override all layered styles (they sit above layers in the cascade)
- Wrap third-party CSS in `@import url(...) layer(name)` to prevent cascade conflicts
- Use 3-5 layers for most projects; avoid over-fragmentation
- Combine `@layer` with `@scope` for both global priority and component isolation
- `!important` reverses layer priority (earlier layers win) — use sparingly
- `revert-layer` resets a property to the previous layer's value
- Browser support: Chrome 99+, Firefox 97+, Safari 15.4+, Edge 99+
- Layers have zero runtime performance cost and improve CSS architecture maintainability
