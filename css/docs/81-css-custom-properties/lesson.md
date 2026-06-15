# CSS Custom Properties — Advanced

## Module Overview
Dive deeper into CSS custom properties with advanced techniques: the `@property` rule, typed custom properties, animation with custom properties, and custom property composition patterns. This module builds on the fundamentals from Module 80, exploring how registered custom properties unlock smooth animations and type-safe design systems.

## Learning Objectives
- Use the @property rule for registered custom properties
- Understand custom property syntax, inherits, and initial-value
- Animate custom properties in keyframes and transitions
- Compose multiple custom properties for complex effects
- Detect and use custom property support with @supports
- Master custom properties with Shadow DOM and Web Components
- Understand the difference between registered and unregistered properties

## Topics Covered

### 1. The @property Rule
The `@property` rule registers a custom property with a defined type, inheritance behavior, and initial value. This enables the browser to properly animate and interpolate the property.

```css
@property --gradient-angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}
```

**Why registration matters:**
Unregistered custom properties are treated as strings by the browser. Since the browser doesn't understand what type of value they hold, it cannot interpolate them during transitions or keyframe animations. Registering with `@property` gives the browser the type information it needs for proper interpolation and animation.

### 2. Registered Custom Properties

**Syntax (type) options:**
- `<length>` — lengths with units
- `<number>` — numeric values
- `<percentage>` — percentage values
- `<color>` — color values
- `<angle>` — angle values (deg, rad, turn)
- `<time>` — time values (s, ms)
- `<resolution>` — resolution values
- `<custom-ident>` — custom identifiers
- `<transform-function>` — transform functions
- `<transform-list>` — list of transform functions
- `<image>` — image values
- `*` — any valid value (default)

```css
/* Typed custom property examples */
@property --rotation {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}

@property --scale-factor {
  syntax: '<number>';
  inherits: true;
  initial-value: 1;
}

@property --theme-color {
  syntax: '<color>';
  inherits: true;
  initial-value: #3498db;
}

@property --spacing {
  syntax: '<length>';
  inherits: true;
  initial-value: 16px;
}
```

**Descriptor details:**

`syntax`: Defines what type of value the property accepts. Can be a single type (`<length>`), multiple types separated by `|` (`<color> | <number>`), or the universal `*`. Multiple types allow for fallback patterns like `<color> | <number>` where the number could be used as a fallback.

`inherits`: Controls whether the property inherits from parent to child. Set to `true` for theme-like properties that should cascade, `false` for properties that should be scoped to individual elements (like animation progress).

`initial-value`: The default value used when no value is explicitly assigned. This must be a valid value for the declared `syntax`. Without an `initial-value`, the property starts as "guaranteed invalid" (no value).

### 3. Animating Custom Properties
Unregistered custom properties cannot be animated because the browser doesn't understand their type. Registering with `@property` gives the browser the type information needed for interpolation.

```css
/* BEFORE @property — this does NOT animate smoothly */
.element {
  --rotation: 0deg;
  transition: --rotation 1s;
}
.element:hover {
  --rotation: 360deg; /* Snaps, doesn't animate */
}

/* AFTER @property — this animates smoothly */
@property --rotation {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}

.element {
  --rotation: 0deg;
  transition: --rotation 1s;
}
.element:hover {
  --rotation: 360deg; /* Smooth spin! */
}
```

**Keyframe animation with @property:**
```css
@property --hue {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}

@keyframes rainbow {
  from { --hue: 0deg; }
  to { --hue: 360deg; }
}

.element {
  background: linear-gradient(
    45deg,
    hsl(var(--hue), 100%, 50%),
    hsl(calc(var(--hue) + 60deg), 100%, 50%)
  );
  animation: rainbow 3s linear infinite;
}
```

**Why this is revolutionary for CSS animation:**
Before `@property`, animating a CSS gradient required complex workarounds (transitioning between gradient images, using pseudo-elements, or JavaScript). With registered custom properties, you can animate individual components of a gradient — the angle, color stops, positions — by storing them in typed variables.

### 4. Custom Property Composition
Combine multiple custom properties using `calc()`, `var()`, and other CSS functions to build complex reactive values.

```css
/* Design token composition */
:root {
  --base-unit: 0.25rem;
  --spacing-xs: calc(var(--base-unit) * 1);
  --spacing-sm: calc(var(--base-unit) * 2);
  --spacing-md: calc(var(--base-unit) * 4);
  --spacing-lg: calc(var(--base-unit) * 8);
  --spacing-xl: calc(var(--base-unit) * 16);
}

/* Responsive property composition */
:root {
  --fluid-min: 16px;
  --fluid-max: 24px;
  --fluid-pref: 3vw;
}

h1 {
  font-size: clamp(var(--fluid-min), var(--fluid-pref), var(--fluid-max));
}
```

**Composing transform properties:**
```css
@property --translate-x {
  syntax: '<length-percentage>';
  inherits: false;
  initial-value: 0px;
}

@property --translate-y {
  syntax: '<length-percentage>';
  inherits: false;
  initial-value: 0px;
}

@property --rotate-angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}

.element {
  transform: translate(var(--translate-x), var(--translate-y)) rotate(var(--rotate-angle));
  transition: --translate-x 0.3s, --translate-y 0.3s, --rotate-angle 0.3s;
}

.element:hover {
  --translate-x: 20px;
  --translate-y: -10px;
  --rotate-angle: 10deg;
}
```

This technique allows independent animation of each transform component, something that's impossible with the standard `transform` property alone (since transforms are applied as a single string value).

### 5. Feature Detection with @supports
Use `@supports` to detect custom property support and provide fallbacks.

```css
/* Provide enhanced experience when @property is supported */
@supports (--custom: property) {
  @property --animation-progress {
    syntax: '<number>';
    inherits: false;
    initial-value: 0;
  }
  
  .animated-element {
    --animation-progress: 0;
    transition: --animation-progress 1s;
  }
  
  .animated-element:hover {
    --animation-progress: 1;
  }
}

/* Fallback for browsers without support */
.animated-element {
  transition: opacity 1s;
}
```

**Specific @property detection:**
```css
/* Check if a specific @property rule is supported */
@supports (--angle: 0deg) {
  /* Browser supports typed custom properties */
}
```

Note that feature detection for `@property` is tricky. The `@supports (--custom: property)` approach detects if the browser supports the `var()` function, not `@property` specifically. For true `@property` detection, you may need to test with a specific syntax descriptor.

### 6. Custom Properties and Shadow DOM
Custom properties can penetrate Shadow DOM boundaries, making them ideal for component theming in Web Components.

```javascript
// Web Component that uses CSS custom properties for theming
class ThemedCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .card {
          background: var(--card-bg, #fff);
          color: var(--card-text, #333);
          border: 1px solid var(--card-border, #ddd);
          border-radius: var(--card-radius, 8px);
          padding: var(--card-padding, 16px);
        }
        .card h2 {
          color: var(--card-heading, #111);
        }
      </style>
      <div class="card">
        <h2><slot name="title"></slot></h2>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('themed-card', ThemedCard);
```

```css
/* Consumer styles — penetrates Shadow DOM */
themed-card {
  --card-bg: #f0f4ff;
  --card-text: #2c3e50;
  --card-border: #c8d6e5;
  --card-heading: #1a1a2e;
  --card-radius: 12px;
}
```

**How Shadow DOM inheritance works with custom properties:**
- CSS custom properties ALWAYS penetrate Shadow DOM boundaries (by specification)
- This is the ONLY CSS property behavior that penetrates shadow DOM
- It provides a clean API surface for Web Component theming
- Components expose variables as theming API, consumers set values from outside
- This is the recommended approach for styling Web Components

### 7. Conditional Values with Custom Properties
Custom properties can create conditional-like behavior in CSS:

```css
/* Toggle-like pattern using 0 and 1 values */
:root {
  --is-dark: 0; /* 0 = light, 1 = dark */
}

body {
  --bg: hsl(0, 0%, calc((1 - var(--is-dark)) * 100%));
  --text: hsl(0, 0%, calc(var(--is-dark) * 100%));
}

/* With JavaScript toggle */
body.dark-mode {
  --is-dark: 1;
}
```

This pattern works by using mathematical relationships. When `--is-dark` is 0, the background becomes 100% lightness (white). When it's 1, the text becomes 100% lightness (white) and background becomes 0% (black). While clever, this approach can create hard-to-debug code and should be used sparingly.

### 8. Invalid Custom Property Behavior
Understanding how browsers handle invalid custom property values:

```css
:root {
  --invalid-value: 16px;
}

.element {
  --color-primary: 42; /* Not a valid color, but stored anyway */
  color: var(--color-primary); /* Invalid for 'color' — uses inherited value */
  font-size: var(--invalid-value); /* Valid for font-size — works fine */
}
```

**Key behavior rules:**
1. Custom properties accept ANY value — they are never invalid at declaration time
2. When `var()` resolves a value that's invalid for the target property, the property uses its initial or inherited value (NOT the fallback!)
3. This is a common source of confusion — the fallback only applies when the variable is NOT DEFINED

## Best Practices
- Register custom properties that need animation with @property
- Always provide `initial-value` in @property registration
- Use `inherits: true` for theme-like properties
- Use `inherits: false` for properties that should be scoped
- Combine registered and unregistered properties strategically
- Use `@supports` for progressive enhancement with @property
- Leverage Shadow DOM penetration for Web Component theming
- Keep composition chains readable — don't over-nest var() references
- Document all registered custom properties in your design system
- Use specific syntax types rather than `*` when possible

## Common Mistakes
- Trying to animate unregistered custom properties (they snap, not interpolate)
- Forgetting the `syntax` descriptor in @property (defaults to `*`)
- Not providing an `initial-value`, causing fallback loops
- Over-registering when simple `var()` usage is sufficient
- Confusing fallback behavior (fallback works when undefined, not when invalid)
- Expecting @property to work in browsers that don't support it (e.g., Safari 15-)
- Setting `inherits: false` when the property should cascade to children
- Using `@property` for properties that don't need animation or type safety

## Accessibility Considerations
- Animated custom properties should respect `prefers-reduced-motion`
- Theme properties controlled via custom properties must maintain contrast in all states
- Test @property-driven animations with accessibility tools
- Ensure custom property themes don't remove focus indicators
- Color transformations via custom properties should preserve readable contrast

## Performance Considerations
- `@property` registration itself has negligible performance cost
- Animated custom properties are GPU-accelerated when animating compositable properties
- Animating custom properties that affect layout properties (width, height) triggers reflow
- Prefer animating visual properties (color, transform components) over layout properties
- Registered custom properties with `syntax: '<number>'` or `'<angle>'` are most efficient
- Complex composition chains (var → calc → var) are resolved at computed-value time

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|-----|
| @property rule | 85+ | 128+ | 15.4+ | 85+ | No |
| @property with <color> | 85+ | 128+ | 15.4+ | 85+ | No |
| @property with <angle> | 85+ | 128+ | 15.4+ | 85+ | No |
| @property with <number> | 85+ | 128+ | 15.4+ | 85+ | No |
| Animation of @property | 85+ | 128+ | 15.4+ | 85+ | No |
| Shadow DOM var() | 53+ | 49+ | 10+ | 79+ | No |

The `@property` rule is supported in all modern browsers as of late 2023 (Safari 15.4+, Chrome 85+, Firefox 128+). Older versions of these browsers treat `@property` as unknown and ignore it, which means the custom property remains unregistered (string-based).

## Visual Explanation

**Unregistered vs registered @property animation:**
```
  UNREGISTERED custom property:

  --rotation: 0deg ─────transition─────→ --rotation: 360deg
       │                                          │
       │  browser sees "string"                   │
       ▼  cannot interpolate                      ▼
  [value: "0deg"]                         [value: "360deg"]
       │                                          │
       └────────────── SNAP! ─────────────────────┘
                  (no smooth animation)

  REGISTERED with @property:

  @property --rotation {
    syntax: '<angle>';
    inherits: false;
    initial-value: 0deg;
  }

  --rotation: 0deg ─────transition─────→ --rotation: 360deg
       │                                          │
       │  browser knows type = angle              │
       ▼  interpolates smoothly                   ▼
  [0deg] ──→ [90deg] ──→ [180deg] ──→ [270deg] ──→ [360deg]
                smooth continuous animation
```

**How @property registration enables gradient animation:**
```
  Before @property (gradient snaps):
  ┌─────────────────────────────────────┐
  │  background: linear-gradient(       │
  │    var(--angle, 0deg), ...          │
  │  )                                  │
  │  transition: --angle 1s; ←─── NO OP │  <-- angle treated as string
  └─────────────────────────────────────┘

  After @property (gradient animates):
  ┌─────────────────────────────────────┐
  │  @property --angle {               │
  │    syntax: '<angle>';              │  <-- browser now understands
  │    inherits: false;                │
  │    initial-value: 0deg;            │
  │  }                                 │
  │  .element {                        │
  │    --angle: 0deg;                  │
  │    background: linear-gradient(    │
  │      var(--angle, 0deg), ...       │
  │    );                              │
  │    transition: --angle 1s;  ←── ✓  │  <-- smooth animation!
  └─────────────────────────────────────┘
```

**Shadow DOM variable penetration:**
```
  ┌─────────────────────────────────────┐
  │  Consumer page                      │
  │  ─────────────                      │
  │  themed-card {                      │
  │    --card-bg: #f0f4ff;              │  <-- sets variable
  │    --card-text: #2c3e50;            │      from outside
  │  }                                  │
  │                                     │
  │  ┌─────────────────────────────┐    │
  │  │ Shadow DOM (component)      │    │
  │  │  ────────────────────       │    │
  │  │  .card {                    │    │
  │  │    background: var(         │    │
  │  │      --card-bg, #fff);      │    │  <-- reads variable
  │  │    color: var(              │    │      from outside!
  │  │      --card-text, #333);    │    │
  │  │  }                          │    │
  │  └─────────────────────────────┘    │
  │                                     │
  │  Variables PENETRATE shadow DOM     │
  │  This is the ONLY CSS property      │
  │  that crosses shadow boundaries     │
  └─────────────────────────────────────┘
```

**Composing transform from individual registered properties:**
```
  @property --tx { syntax: '<length>'; }    ──┐
  @property --ty { syntax: '<length>'; }    ──┤
  @property --rot { syntax: '<angle>'; }    ──┤
                                               ▼
  transform: translate(var(--tx), var(--ty)) rotate(var(--rot))
              │                │                  │
              ▼                ▼                  ▼
  Independently animatable — each transitions separately!
  Without @property: transform: translate(0,0) rotate(0deg)
                    → "all-in-one string" → cannot animate parts
```

## Summary Notes
- `@property` registers custom properties with types, enabling smooth animation
- Required descriptors: `syntax`, `inherits`, `initial-value`
- Supported syntax types include `<length>`, `<number>`, `<color>`, `<angle>`, `<percentage>`, and more
- Only registered custom properties can be animated in transitions and keyframes
- Custom properties naturally penetrate Shadow DOM — ideal for Web Component APIs
- Use `@supports` to provide progressive enhancement for @property support
- Invalid custom property values at use-time fall back to inherited/initial value, NOT the var() fallback
- Combine properties with calc() for composable design tokens
- @property is supported in Chrome 85+, Safari 15.4+, Firefox 128+
