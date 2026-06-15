# Professional CSS: SCSS Introduction

## Table of Contents
1. [Introduction](#introduction)
2. [Learning Objectives](#learning-objectives)
3. [Theory](#theory)
4. [Syntax](#syntax)
5. [Common Mistakes](#common-mistakes)
6. [Best Practices](#best-practices)
7. [Accessibility Considerations](#accessibility-considerations)
8. [Performance Considerations](#performance-considerations)
9. [Browser Compatibility](#browser-compatibility)
10. [Summary Notes](#summary-notes)

## Introduction
SCSS (Sass) is a CSS preprocessor that extends CSS with variables, nesting, mixins, functions, and more. It compiles to standard CSS and helps write more maintainable and DRY (Don't Repeat Yourself) stylesheets. As one of the most mature CSS preprocessors (first released in 2006), Sass has a rich ecosystem, extensive documentation, and is supported by all major build tools. SCSS is the newer syntax (from Sass v3) with curly braces and semicolons, making it more familiar to CSS developers than the original indented Sass syntax.

## Learning Objectives
1. Install and configure Sass/SCSS
2. Use SCSS variables and nesting
3. Create and use mixins
4. Use functions and control directives
5. Implement partials and @import/@use
6. Extend styles with @extend
7. Write modular SCSS architecture
8. Debug SCSS with sourcemaps
9. Use SCSS maps for grouped data
10. Understand SCSS vs CSS custom properties

## Theory

### SCSS vs CSS
| Feature | CSS | SCSS |
|---------|-----|------|
| Variables | `--var: value` (custom props) | `$var: value` |
| Nesting | Manual | `.parent { .child {} }` |
| Mixins | Not available | `@mixin` / `@include` |
| Functions | `calc()` only | Custom `@function` |
| Control flow | Not available | `@if`, `@for`, `@each` |
| Math | `calc()` | Arithmetic operators |
| Partials | CSS imports | `_partial.scss` |

### How SCSS Compiles to CSS
SCSS is a **preprocessor** — it doesn't run in the browser. You write SCSS, and a compiler (Dart Sass, Node Sass, or the Ruby gem) transforms it into standard CSS. The compilation process:

1. **Parse**: Read `.scss` files and build an Abstract Syntax Tree
2. **Resolve**: Process imports, calculate variable values, expand mixins
3. **Generate**: Output standard CSS with all SCSS features replaced by their computed values

```bash
# Install and compile with Dart Sass (recommended)
npm install -D sass
npx sass src/styles.scss dist/styles.css

# Watch mode for development
npx sass --watch src/styles.scss dist/styles.css

# With sourcemaps
npx sass --source-map src/styles.scss dist/styles.css
```

### Variables vs CSS Custom Properties
SCSS variables (`$var`) are **compile-time** — they are replaced with their values during compilation. CSS custom properties (`--var`) are **runtime** — they exist in the browser and can be changed dynamically.

```scss
// SCSS variable — static, compiled away
$primary: #0055CC;
.button { background: $primary; }
// Compiles to: .button { background: #0055CC; }

// CSS custom property — dynamic, stays in the browser
:root { --primary: #0055CC; }
.button { background: var(--primary); }
// In browser: .button { background: var(--primary); }
```

Use SCSS variables for compile-time configuration (breakpoints, math operations). Use CSS custom properties for runtime theming (dark mode, user preferences). They are complementary — use both.

### Nesting Depth and Specificity
Nesting in SCSS mirrors HTML structure, but deep nesting creates high-specificity selectors:

```scss
// Avoid deep nesting
.nav {
  ul {
    li {
      a {
        color: blue;
        // Compiles to: .nav ul li a { color: blue; }
        // Specificity: 0,0,0,4 — hard to override
      }
    }
  }
}

// Prefer shallow nesting
.nav {
  &-list { list-style: none; }
  &-item { display: inline; }
  &-link { color: blue; }
  // All compile to 0,0,1,0 specificity
}
```

The industry standard is a maximum of 3 levels of nesting. Beyond that, the compiled CSS becomes overly specific and hard to maintain.

### The @use and @forward Module System
Sass v3 replaced `@import` (which is deprecated) with `@use` and `@forward`:

```scss
// _variables.scss
$primary: #0055CC;
$font-stack: system-ui, sans-serif;

// _buttons.scss
@use 'variables' as v;
.button {
  background: v.$primary;
  font-family: v.$font-stack;
}

// main.scss
@use 'buttons';
@use 'variables';
// Note: variables from _variables.scss are NOT available here
// You must @use them explicitly

// With @forward — re-export for convenient access
// _index.scss
@forward 'variables';
@forward 'buttons';
// Now @use 'index' gives access to both
```

`@use` creates a module namespace by default (e.g., `variables.$primary`). You can customize it: `@use 'variables' as v;` or make everything global: `@use 'variables' as *;` (though the latter is discouraged).

### Maps and Loops
SCSS maps enable grouped data that can be iterated over:

```scss
// SCSS map (like an object/ dictionary)
$breakpoints: (
  'sm': 640px,
  'md': 768px,
  'lg': 1024px,
  'xl': 1280px,
);

// @each loop to generate responsive utilities
@each $name, $value in $breakpoints {
  @media (min-width: $value) {
    .#{$name}\:text-center { text-align: center; }
    .#{$name}\:flex { display: flex; }
  }
}

// @for loop for generating spacing scale
@for $i from 1 through 12 {
  .mt-#{$i} { margin-top: #{$i * 0.25}rem; }
}

// @if control directive for conditional styles
@mixin responsive($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media (min-width: map-get($breakpoints, $breakpoint)) {
      @content;
    }
  } @else {
    @error "Breakpoint #{$breakpoint} not found.";
  }
}
```

## Syntax

```scss
// Variables
$primary: #0055CC;
$spacing-unit: 1rem;
$breakpoint-md: 768px;
$font-stack: system-ui, -apple-system, sans-serif;
$colors: (
  'primary': #0055CC,
  'success': #16A34A,
  'danger': #DC2626,
  'warning': #F59E0B,
);

// Nesting
.card {
  background: white;
  border-radius: 8px;
  padding: $spacing-unit;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &__title {
    font-size: 1.25rem;
    color: #333;
    font-weight: 600;

    &--large {
      font-size: 1.5rem;
    }
  }

  &__body {
    color: #666;
    line-height: 1.6;
  }

  &--featured {
    border: 2px solid $primary;
  }
}

// Mixin with @content block
@mixin respond-to($breakpoint) {
  @media (min-width: $breakpoint) {
    @content;
  }
}

// Use mixin
.container {
  display: grid;
  grid-template-columns: 1fr;

  @include respond-to(768px) {
    grid-template-columns: 1fr 1fr;
  }

  @include respond-to(1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

// Functions
@function spacing($multiplier) {
  @return $spacing-unit * $multiplier;
}

.section {
  padding: spacing(2);  // 2rem
  margin-bottom: spacing(4);  // 4rem
}

// Extend (use sparingly)
%button-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-primary { @extend %button-base; background: $primary; color: white; }
.btn-secondary { @extend %button-base; background: transparent; border: 1px solid #ccc; }

// Partials and modules
// _variables.scss — variables and config
// _mixins.scss — reusable mixins
// _components.scss — component styles
// main.scss — entry point that imports everything

// main.scss
@use 'variables';
@use 'mixins';
@use 'components';
```

## Common Mistakes
1. **Deep nesting (over 3 levels)**: Creates overly specific selectors (.nav ul li a) that are hard to override. Limit nesting to 3 levels max.
2. **Overusing @extend**: `@extend` groups selectors together in the compiled CSS, which can create unexpected selector combinations and bloated output. Prefer mixins for parameterized reuse.
3. **Mixing SCSS variables with CSS custom properties incorrectly**: SCSS variables are compile-time, CSS custom properties are runtime. Don't try to use SCSS variables for dynamic theming.
4. **Using @import instead of @use**: `@import` is deprecated in Dart Sass. It makes all variables globally available, leading to naming conflicts. Use `@use` for explicit module scoping.
5. **No sourcemaps in development**: Without sourcemaps, DevTools show compiled CSS line numbers instead of SCSS line numbers, making debugging much harder.
6. **Putting too much logic in SCSS**: Functions and control directives can make SCSS hard to reason about. Use them for generating utilities and repeated patterns, not for complex application logic.
7. **Not using partials**: Putting everything in one `.scss` file defeats SCSS's modularity. Split your code into focused partials.
8. **Over-reliance on nesting for organization**: Nesting should mirror HTML structure, not serve as a CSS organization tool. Use partials and `@use` for organization instead.

## Best Practices
1. **Use partials for modular organization**: Each component or concern gets a `_partial.scss` file. Import them via `@use` in a main entry file.
2. **Limit nesting depth to 3 levels**: Beyond that, the compiled CSS becomes needlessly specific. The `&` parent selector doesn't count as a nesting level.
3. **Prefer mixins over @extend for parameterized reuse**: Mixins accept arguments and generate fresh CSS each time. `@extend` groups selectors, which can cause unexpected side effects.
4. **Use variables for all design tokens**: Colors, spacing, fonts, breakpoints — all go in a `_variables.scss` partial.
5. **Name partials with leading underscore**: `_variables.scss` tells Sass this is a partial that should be imported, not compiled independently.
6. **Use maps for grouped values**: Breakpoints, color palettes, and configuration data should be stored in maps and accessed with `map-get()`.
7. **Generate sourcemaps for debugging**: Add `--source-map` to your Sass compile command to map compiled CSS back to SCSS in DevTools.
8. **Use `@use` over deprecated `@import`**: Module-based imports prevent variable leakage and make dependencies explicit.
9. **Use interpolation for dynamic properties**: `#{$name}` inside selectors, property names, or string values enables dynamic generation.
10. **Keep arithmetic simple**: Use SCSS for basic math (multiplying spacing, calculating percentages). For complex calculations, consider CSS `calc()` which works at runtime.

## Accessibility Considerations
- **SCSS doesn't add accessibility automatically**: It's a preprocessor — the compiled CSS is still just CSS. Accessibility depends on how you use the generated styles.
- **Use SCSS to enforce accessible patterns**: Create mixins for accessible focus indicators, skip links, and screen-reader-only content that can't be accidentally omitted.
- **Dark mode with SCSS variables**: Combine SCSS loops with CSS custom properties to generate dark mode themes systematically.
- **Reduced motion mixin**: Create a reusable mixin for `prefers-reduced-motion` so all team members easily respect accessibility preferences.

```scss
// Accessibility mixins
@mixin sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

@mixin focus-ring {
  &:focus-visible {
    outline: 2px solid $primary;
    outline-offset: 2px;
  }
}

@mixin reduced-motion {
  @media (prefers-reduced-motion: reduce) {
    @content;
  }
}
```

## Performance Considerations
- **SCSS compilation is a build-time cost**: It doesn't affect runtime performance. The compiled CSS is standard CSS.
- **Compile time scales with file size**: For large projects, compilation can take seconds. Use `--watch` in development for incremental compilation.
- **`@extend` can bloat CSS**: When you use `@extend`, Sass groups selectors. In large projects, this can create long, unexpected selector lists that are hard to debug and may increase file size.
- **Deep nesting creates long selectors**: `.page .sidebar .widget .title a` is longer in bytes than `.widget-title a`. Every nesting level adds bytes to the compiled CSS.
- **Sourcemaps add development overhead**: Sourcemap files can be large (2-3x the CSS size). Don't ship them to production.
- **Minify compiled CSS**: Always run the compiled CSS through a minifier (like cssnano or clean-css) in production builds.

```bash
# Production compilation with minification
npx sass src/styles.scss dist/styles.css --style=compressed --no-source-map
```

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|-----|
| SCSS output (standard CSS) | All | All | All | All | All |
| Sourcemaps | 57+ | 52+ | 12+ | 79+ | — |
| CSS Custom Properties | 49+ | 31+ | 9.1+ | 79+ | — |

SCSS compiles to standard CSS. There are zero browser compatibility concerns with SCSS itself — the output is whatever CSS features you choose to use. If you use modern CSS features (custom properties, Grid, `gap`) in your SCSS, those have their own browser requirements. If you need IE11 support, write SCSS that compiles to IE-compatible CSS. Remember that SCSS `@extend` and `@mixin` are compile-time features — they produce standard CSS group selectors and repeated declarations, respectively, which work in every browser.

## Summary Notes
- **SCSS compiles to standard CSS** — it's a build-time tool, not a runtime library
- **Variables (`$var`) are compile-time** vs CSS custom properties (`var(--)`) which are runtime — they complement each other
- **Nesting mirrors HTML structure** but limit to 3 levels to avoid specificity problems
- **Mixins provide reusable style patterns** with parameters — they're the most powerful SCSS feature
- **`@extend` shares compiled CSS** by grouping selectors — use sparingly as it can create bloated output
- **Partials (`_filename.scss`) enable modular file organization** — each component gets its own file
- **Sourcemaps map compiled CSS back to SCSS** in DevTools for easier debugging
- **Control directives (`@if`, `@for`, `@each`) enable logic in stylesheets** — great for generating utility classes
- **Arithmetic operations work on values** — `$base * 2`, `$base + 0.5rem`
- **`@use` and `@forward` replace old `@import`** — module-based system prevents naming conflicts
- **Maps (`$map: (key: value)`) store grouped data** accessible with `map-get()` and iterable with `@each`
- **The `&` parent selector** enables BEM-style naming: `&__element`, `&--modifier`
- **`@content` blocks** allow mixins to wrap arbitrary styles (like media query mixins)
- **Compile with `--style=compressed`** for production and always include sourcemaps in development
- **SCSS doesn't change CSS semantics or browser support** — the output is still just CSS

---

## Visual Explanation

```
SCSS Nesting → CSS Compilation
=================================

SCSS Input (.scss):                  CSS Output (.css):
┌──────────────────────────────┐    ┌──────────────────────────────┐
│ .card {                      │    │ .card {                      │
│   background: white;         │    │   background: white;         │
│   padding: 1rem;             │    │   padding: 1rem;             │
│                              │    │ }                            │
│   &__title {                 │    │ .card__title {               │
│     font-size: 1.25rem;      │    │   font-size: 1.25rem;        │
│     color: #333;             │→→→│   color: #333;                │
│                              │    │ }                            │
│     &--large {               │    │ .card__title--large {        │
│       font-size: 1.5rem;     │    │   font-size: 1.5rem;         │
│     }                        │    │ }                            │
│   }                          │    │                              │
│                              │    │ .card__body {                │
│   &__body {                  │    │   color: #666;               │
│     color: #666;             │    │   line-height: 1.6;          │
│     line-height: 1.6;        │    │ }                            │
│   }                          │    │                              │
│                              │    │ .card--featured {            │
│   &--featured {              │    │   border: 2px solid #0055CC; │
│     border: 2px solid $prim  │    │ }                            │
│   }                          │    └──────────────────────────────┘
│ }                            │
└──────────────────────────────┘
  & = parent selector (.card)       Nesting is expanded; & is replaced

Variable Processing (compile-time)
═════════════════════════════════════

  $primary: #0055CC;               CSS custom properties
  .btn { background: $primary; }   (runtime, browser):
  ↓ compile                        :root { --primary: #0055CC; }
  .btn { background: #0055CC; }    .btn { background: var(--primary); }
  └── Value baked in at build ──┘  └── Value resolved at runtime ──┘

Mixin Expansion
════════════════

  @mixin respond-to($bp) {         @include respond-to(768px) {
    @media (min-width: $bp) {        @media (min-width: 768px) {
      @content;                        .container {
    }                                    display: grid; }
  }                                   }
                                    }
  ↓ compile
  @media (min-width: 768px) {
    .container { display: grid; }
  }

Module System (@use vs deprecated @import)
════════════════════════════════════════════

  _variables.scss                    _buttons.scss
  ┌─────────────────┐               ┌─────────────────────────┐
  │ $primary: blue  │               │ @use 'variables' as v; │
  │ $radius: 4px    │               │ .btn {                  │
  └─────────────────┘               │   background: v.$primary│
          │                         │ }                       │
          │ @use                    └─────────────────────────┘
          ▼                                 │
  main.scss                                 │ @use
  ┌────────────────────────────┐            ▼
  │ @use 'variables';          │     Compiled CSS:
  │ @use 'buttons';            │     .btn { background: blue; }
  │ // variables NOT available │
  │ // here unless explicitly   │
  │ // @used                     │
  └────────────────────────────┘
```
