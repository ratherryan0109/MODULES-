# CSS Variables (Custom Properties)

## Module Overview
Learn how to use CSS custom properties (variables) to create maintainable, themeable, and dynamic stylesheets. Master variable declaration, inheritance, fallbacks, and JavaScript integration. CSS custom properties are a cornerstone of modern CSS architecture, enabling design token systems that adapt at runtime without preprocessor compilation.

## Learning Objectives
- Declare and use CSS custom properties
- Understand inheritance and the cascade with variables
- Provide fallback values
- Modify variables with JavaScript
- Create theme systems with variables
- Use variables with calc() and other CSS functions
- Understand the difference between CSS variables and preprocessor variables
- Debug and inspect custom property values

## Topics Covered

### 1. Declaration and Usage
CSS custom properties are declared with `--` prefix and accessed with the `var()` function:

```css
:root {
  --primary: #3498db;
  --secondary: #2ecc71;
  --text-color: #333;
  --spacing-unit: 8px;
}

.element {
  color: var(--primary);
  margin: var(--spacing-unit);
}
```

Custom property names are case-sensitive (`--Primary` and `--primary` are different) and can contain hyphens, underscores, and even emoji. By convention, names use kebab-case (`--font-size-large`, `--color-primary`).

### 2. The :root Selector
Declaring variables on `:root` makes them globally available throughout the document. The `:root` pseudo-class matches the document's root element (`<html>`), and due to CSS inheritance, all elements inherit variables declared on `:root`.

```css
:root {
  --font-body: 'Inter', sans-serif;
  --color-bg: #ffffff;
  --color-text: #1a1a1a;
  --border-radius: 4px;
  --max-width: 1200px;
}
```

Multiple documents or components can use the same variable names with different values, enabling consistent theming across the entire codebase.

### 3. Inheritance and Scoping
Custom properties inherit naturally through the DOM. Declaring on a specific element scopes the variable to that subtree.

```css
.card {
  --card-padding: 16px;
  --card-bg: #f5f5f5;
  padding: var(--card-padding);
  background: var(--card-bg);
}

.card h2 {
  margin-bottom: calc(var(--card-padding) / 2);
  /* Inherits from .card context */
}

.card.highlighted {
  --card-bg: #fff3cd; /* Overrides only in this subtree */
}
```

**Scoping rules:**
- Variables inherit from parent to child (like any CSS property)
- A variable's value for a given element is the computed value from the nearest ancestor with a declaration
- Unlike Sass/SCSS variables which are scoped lexically, CSS custom properties follow the DOM tree
- This makes them ideal for component-based architectures

```css
/* Scope to specific section */
.sidebar {
  --link-color: #2c3e50;
  --link-hover: #3498db;
}

.main-content {
  --link-color: #2980b9;
  --link-hover: #e74c3c;
}

/* Both sections use the same class but get different colors due to scoping */
.link {
  color: var(--link-color);
}
.link:hover {
  color: var(--link-hover);
}
```

### 4. The var() Function
The `var()` function accepts a fallback value:

```css
color: var(--unknown, blue);  /* uses blue if --unknown not defined */

/* Nested variables */
color: var(--primary, var(--fallback-color, red));
```

The `var()` function takes two arguments:
1. The custom property name (required)
2. A fallback value (optional) — used if the custom property is not defined or contains an invalid value

Fallback values can themselves contain `var()` references, enabling chain fallbacks. However, the fallback is not applied if the variable is defined but contains an invalid value for the property context — in that case, the property uses its inherited or initial value.

### 5. Fallback Values
Provide multiple fallback strategies for robust variable usage, especially when working with third-party code.

```css
/* Simple fallback */
.button {
  background: var(--button-bg, #3498db);
}

/* Chain fallback */
.button {
  background: var(--button-bg, var(--color-primary, #3498db));
}

/* Fallback with calc */
.element {
  padding: calc(var(--spacing, 1rem) * 2);
}
```

**Fallback behavior details:**
- If the variable is defined (even if it's an empty value), the fallback is NOT used
- If the variable is not defined, the fallback IS used
- If the variable is defined but has a value invalid for the property, the property's initial/inherited value is used (NOT the fallback)

### 6. JavaScript Integration
Use `getPropertyValue()` and `setProperty()` to read and write CSS custom properties from JavaScript.

```javascript
// Read a custom property
const root = document.documentElement;
const primary = getComputedStyle(root).getPropertyValue('--primary').trim();

// Write a custom property
root.style.setProperty('--primary', '#e74c3c');

// Remove a custom property
root.style.removeProperty('--primary');

// Dynamic theme switching
function setTheme(theme) {
  const themes = {
    light: {
      '--bg': '#ffffff',
      '--text': '#1a1a1a',
    },
    dark: {
      '--bg': '#1a1a1a',
      '--text': '#ffffff',
    },
  };
  
  const root = document.documentElement;
  Object.entries(themes[theme]).forEach(([prop, val]) => {
    root.style.setProperty(prop, val);
  });
}
```

**Key JavaScript methods:**
- `getComputedStyle(element).getPropertyValue('--name')` — reads current value
- `element.style.setProperty('--name', value)` — sets value on specific element
- `element.style.removeProperty('--name')` — removes variable, reverting to inherited value

### 7. Dynamic Theming
Variables enable runtime theme switching without CSS reloading. Change a single variable to update entire component trees.

```css
/* Theme definition */
:root[data-theme="light"] {
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --text-primary: #1a1a1a;
  --text-secondary: #666;
  --accent: #3498db;
  --border: #e0e0e0;
}

:root[data-theme="dark"] {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --text-primary: #f5f5f5;
  --text-secondary: #aaa;
  --accent: #5dade2;
  --border: #404040;
}

/* Usage throughout stylesheet */
body {
  background: var(--bg-primary);
  color: var(--text-primary);
}

.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  color: var(--text-primary);
}

a {
  color: var(--accent);
}
```

**Advanced theming with media queries:**
```css
/* Automatic dark mode based on system preference */
:root {
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #1a1a1a;
    --text-primary: #f5f5f5;
  }
}

/* Allow user override via data attribute */
:root[data-theme="light"] {
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
}

:root[data-theme="dark"] {
  --bg-primary: #1a1a1a;
  --text-primary: #f5f5f5;
}
```

### 8. Variables in Media Queries and calc()
While you can't declare variables inside media queries to change other variable values in standard CSS, you can override variables within media query blocks.

```css
:root {
  --container-padding: 20px;
}

@media (min-width: 768px) {
  :root {
    --container-padding: 40px;
  }
}

.container {
  padding: var(--container-padding);
}
```

You CANNOT use `var()` inside media query conditions:
```css
/* This does NOT work */
@media (min-width: var(--breakpoint)) { }
```

**Variables with calc():**
```css
:root {
  --base-size: 1rem;
  --scale-ratio: 1.25;
}

h1 { font-size: calc(var(--base-size) * var(--scale-ratio) * var(--scale-ratio)); }
h2 { font-size: calc(var(--base-size) * var(--scale-ratio)); }
p { font-size: var(--base-size); }
```

### 9. CSS Variables vs Preprocessor Variables

| Aspect | CSS Custom Properties | Sass/SCSS Variables |
|--------|----------------------|---------------------|
| Runtime | Dynamic (change at runtime) | Static (compile-time) |
| Inheritance | DOM-based inheritance | Lexical scope only |
| JavaScript | Readable/writable via JS | Not accessible from JS |
| Media queries | Can be overridden in media queries | Cannot be changed in media queries |
| Animations | Can animate with @property | Cannot animate (compile-time) |
| Cascade | Follow CSS cascade rules | Does not follow cascade |
| Browser support | Modern browsers only | Requires preprocessor |

### 10. Debugging Custom Properties
CSS custom properties can be inspected in browser DevTools:

```css
/* View computed values */
.element {
  --debug-bg: var(--bg-primary);
  background: var(--debug-bg);
}

/* For debugging fallback issues */
.element {
  background: var(--bg-primary, hotpink); /* hotpink = visible fallback */
}
```

In Chrome/Firefox DevTools, custom properties appear in the Styles panel. You can see which properties are defined, which are inherited, and their computed values. Firefox displays unused variable definitions with strikethrough styling.

## Best Practices
- Use descriptive names with consistent naming conventions (`--color-primary`, `--spacing-md`)
- Declare global variables on `:root`
- Provide fallback values for defensive coding
- Use variables for design tokens (colors, spacing, typography)
- Group related variables logically
- Use kebab-case for variable names
- Document variable usage in design system documentation
- Avoid using `var()` in `calc()` when simpler values would work
- Scope component-level variables to the component selector, not `:root`
- Use `@property` (see Module 81) for variables that need type checking or animation

## Common Mistakes
- Confusing custom properties with Sass/SCSS variables (CSS variables are dynamic, not compile-time)
- Using variables in media query conditions (not supported in standard CSS)
- Forgetting fallback values when variables might be undefined
- Overriding variables unintentionally due to inheritance
- Using `--` prefix inconsistently (names are case-sensitive!)
- Using variables without fallbacks in third-party contexts
- Expecting variables to work in `@media` query condition expressions
- Overriding `:root` variables inside selectors instead of creating scoped overrides

## Accessibility Considerations
- Theme variables must maintain 4.5:1 contrast ratio in all themes
- Test both light and dark themes for readability
- Users may have custom stylesheets — variables should layer well
- Ensure focus indicators are visible in all themes
- Test with forced colors mode (Windows High Contrast)
- Custom property-driven animations should respect `prefers-reduced-motion`
- Provide visible theme toggle for users who need specific contrast levels

## Performance Considerations
- CSS custom properties have negligible performance impact on rendering
- The browser resolves `var()` references during the cascade, not during layout or paint
- Using many unique custom properties does not significantly affect performance
- The `var()` function itself has O(1) lookup performance
- JavaScript-driven variable changes trigger style recalculations, not full reflows
- Theme switching via custom properties is more performant than class swapping (fewer selectors to evaluate)
- Avoid deeply nested variable chains (variable → var → var) for maintainability, not performance

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|-----|
| Custom properties | 49+ | 31+ | 9.1+ | 79+ | No |
| var() function | 49+ | 31+ | 9.1+ | 79+ | No |
| JavaScript setProperty | 49+ | 31+ | 9.1+ | 79+ | No |
| inherit/initial with var | 49+ | 31+ | 9.1+ | 79+ | No |
| var() in calc() | 49+ | 31+ | 9.1+ | 79+ | No |

CSS custom properties are supported in all modern browsers. Internet Explorer has NO support at any version. For IE 11, use a polyfill or rely on fallback values in the `var()` function.

## Visual Explanation

**Variable scope and inheritance through the DOM tree:**
```
  :root                          --global-bg: #fff
   │                             --global-text: #333
   │
   ├── body                     inherits --global-bg, --global-text
   │    │
   │    ├── .sidebar              --link-color: #2c3e50
   │    │    │                    (scoped override)
   │    │    ├── a                color: var(--link-color) = #2c3e50
   │    │    └── p                background: var(--global-bg) = #fff
   │    │
   │    └── .main-content         --link-color: #2980b9
   │         │                    (different scoped override)
   │         └── a                color: var(--link-color) = #2980b9
   │
   └── .card                     --card-padding: 16px
        │                        --card-bg: #f5f5f5
        │
        ├── .card__title         margin: calc(var(--card-padding) / 2)
        │                        = 8px  (inherited from .card)
        │
        └── .card.highlighted    --card-bg: #fff3cd
             │                    (overrides only in this subtree)
             └── .card__body     background: var(--card-bg) = #fff3cd
```

**var() fallback chain resolution:**
```
  color: var(--a, var(--b, var(--c, blue)))

  Step 1: Is --a defined?     ─YES──→ use --a value
                               │
                               NO
                               │
                               ▼
  Step 2: Is --b defined?     ─YES──→ use --b value
                               │
                               NO
                               │
                               ▼
  Step 3: Is --c defined?     ─YES──→ use --c value
                               │
                               NO
                               │
                               ▼
                             use "blue"
```

**Custom properties vs Sass variables — runtime behavior:**
```
  CSS Custom Properties:           Sass Variables:
  ┌──────────────────────┐        ┌──────────────────────┐
  │   Runtime dynamic    │        │   Compile-time fixed │
  │                      │        │                      │
  │  --primary: #3498db  │        │  $primary: #3498db   │
  │       │              │        │       │              │
  │       ▼  JS changes  │        │       ▼  compiled    │
  │  --primary: #e74c3c  │        │  color: #3498db      │
  │       │              │        │  (cannot change)     │
  │       ▼  all using   │        │                      │
  │  color updates       │        │  @media → NO         │
  │  without recompile   │        │  change possible     │
  └──────────────────────┘        └──────────────────────┘
```

**JavaScript read/write bridge:**
```
  ┌─────────────────────────────────────────────────┐
  │  JavaScript              CSS                     │
  │                                               │
  │  getComputedStyle(root)  ──reads──→  --primary │
  │    .getPropertyValue(                          │
  │      '--primary')                              │
  │                                               │
  │  root.style              ──writes──→  --primary │
  │    .setProperty(                               │
  │      '--primary',                              │
  │      '#e74c3c')                                │
  └─────────────────────────────────────────────────┘
```

## Summary Notes
- Declare with `--name`, access with `var(--name, fallback)`
- Variables inherit through the DOM — scope them for component isolation
- CSS variables are dynamic (unlike preprocessor variables), changeable at runtime
- JavaScript can read/write variables via `getPropertyValue` / `setProperty`
- Themes are the primary use case — swap variable groups for instant restyling
- Use `:root` for global variables, component selectors for scoped variables
- Provide fallback values for defensive CSS coding
- Variables work inside `calc()` for dynamic calculations
- Cannot use `var()` inside `@media` query conditions
- Supported in all modern browsers; not supported in IE
