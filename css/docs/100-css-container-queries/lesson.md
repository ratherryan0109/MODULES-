# CSS Container Queries

## Introduction
CSS Container Queries allow elements to respond to their container's size (rather than the viewport). This enables truly reusable, context-aware components that adapt to whatever container they're placed in. Container queries are one of the most significant CSS advances in recent years — they solve a fundamental problem that media queries couldn't address: making components responsive to their parent, not the viewport.

---

## Learning Objectives
1. Understand container queries vs media queries
2. Define containment contexts using `container-type`
3. Write container queries with `@container`
4. Use container query units (cqw, cqh, cqi, cqb, cqmin, cqmax)
5. Build responsive components without viewport dependence
6. Handle container query fallbacks
7. Name containers for complex layouts
8. Combine container queries with media queries
9. Debug container queries with browser DevTools
10. Understand the containment model and its performance implications

---

## Theory

### Container vs Media Queries
| Aspect | Media Query | Container Query |
|--------|-------------|-----------------|
| Based on | Viewport size | Container size |
| Component reuse | Limited | High |
| Context awareness | No | Yes |
| Syntax | `@media` | `@container` |
| Use case | Page layout | Component adaptation |
| Reusability | One layout per breakpoint | Component responds to any parent |

The key insight: a media query checks the entire viewport, so a component inside a 300px sidebar and the same component inside a 900px main content area would render identically. Container queries fix this — the component adapts to its actual container size.

### Setting Up Containers

```css
/* Define containment */
.container {
  container-type: inline-size;
  container-name: sidebar;
}

/* Query by container */
@container sidebar (min-width: 400px) {
  .card {
    flex-direction: row;
  }
}

/* Query any container — queries the nearest named or anonymous container */
@container (min-width: 300px) {
  .card-title {
    font-size: 1.2rem;
  }
}
```

### The container Shorthand
```css
.element {
  container: sidebar / inline-size;
}
```
The `container` shorthand combines `container-name` and `container-type`. The name comes before the slash, the type after. This is the most concise way to set up a containment context.

### Container Types

- `container-type: inline-size` — Queries respond to the inline size (width in horizontal writing modes). Most common use case.
- `container-type: size` — Queries respond to both inline and block size. Requires the element to have `contain: layout style size` applied.
- `container-type: normal` — No containment. Used when you only want to name the container without establishing a queryable context.

### Container Query Units
| Unit | Description |
|------|-------------|
| `cqw` | 1% of container width |
| `cqh` | 1% of container height |
| `cqi` | 1% of container inline size |
| `cqb` | 1% of container block size |
| `cqmin` | Smaller of `cqi` or `cqb` |
| `cqmax` | Larger of `cqi` or `cqb` |

Container query units are relative to the nearest named or anonymous container. If no container is found, they fall back to the initial containing block (viewport). These units are useful for:
- Fluid typography based on container size: `font-size: clamp(1rem, 3cqi, 2rem);`
- Padding that scales with the container: `padding: 2cqi;`
- Child element sizing: `width: 50cqi;`

### How Container Queries Work

The browser creates a "containment context" for elements with `container-type`. When the container's size changes (due to viewport resize, layout changes, or dynamic content), the browser evaluates all `@container` rules that reference that container. Elements inside the container that match the query selectors are re-styled.

Containment is related to the CSS `contain` property. Setting `container-type: inline-size` implicitly applies `contain: layout style inline-size`. This tells the browser that the element's children don't affect layout outside the container, enabling size queries without triggering a full page layout.

### Fallback Pattern

Since container queries are newer than media queries, always provide fallback styles:

```css
.card {
  /* Fallback for browsers without container query support */
  display: block;
}

/* Container query enhancement */
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
}
```

Use `@supports (container-type: inline-size)` for feature detection:
```css
@supports (container-type: inline-size) {
  .card-container {
    container-type: inline-size;
  }
}
```

---

## Examples

```css
/* Responsive card component */
.card-container {
  container-type: inline-size;
}

.card {
  display: grid;
  gap: 16px;
}

@container (min-width: 400px) {
  .card {
    grid-template-columns: 200px 1fr;
  }
  .card-image {
    width: 100%;
    height: auto;
  }
}

@container (min-width: 600px) {
  .card {
    grid-template-columns: 300px 1fr;
  }
  .card-title { font-size: 2rem; }
  .card-text { font-size: 1rem; }
}

/* Named containers for multiple contexts */
.sidebar-panel {
  container: sidebar / inline-size;
}
.main-area {
  container: main / inline-size;
}

@container sidebar (max-width: 300px) {
  .widget { display: none; }
}

@container main (min-width: 800px) {
  .widget { display: block; }
}

/* Fluid typography with container units */
.component-title {
  font-size: clamp(1.25rem, 4cqi, 2.5rem);
}

.component-padding {
  padding: 2cqi;
}

/* Product grid — container-aware */
.product-grid {
  container-type: inline-size;
  display: grid;
  gap: 16px;
}

@container (min-width: 600px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@container (min-width: 900px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Form adaptation */
.form-container {
  container-type: inline-size;
}

.form-row {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

@container (min-width: 500px) {
  .form-row {
    flex-direction: row;
    align-items: center;
  }

  .form-row label {
    flex: 0 0 150px;
  }

  .form-row input {
    flex: 1;
  }
}
```

---

## Visual Explanation

```
Container Query vs Media Query:

Media Query (viewport-based):

  300px sidebar     900px main
  ┌────────┐        ┌──────────────────────┐
  │ Card   │        │ Card                 │
  │ ┌────┐ │        │ ┌────┐  Content      │
  │ │ img│ │        │ │ img│  Here         │
  │ └────┘ │        │ └────┘               │
  │ Text   │        │ Text here            │
  └────────┘        └──────────────────────┘
  Both render the same because viewport > 768px

Container Query (container-based):

  300px sidebar     900px main
  ┌────────┐        ┌──────────────────────┐
  │ Card   │        │ ┌────┐ ──────────┐   │
  │ ┌────┐ │        │ │img │ │ Text     │   │
  │ │ img│ │        │ └────┘ │ here     │   │
  │ └────┘ │        │        └──────────│   │
  │ Text   │        └──────────────────────┘
  └────────┘
  Sidebar: stacked   Main: side-by-side
  (container < 400px)  (container > 400px)

Container Query Units — relative to container size:

  ┌── Container (600px wide) ──┐
  │                            │
  │  50cqi = 300px             │
  │  25cqi = 150px             │
  │  10cqi = 60px              │
  │                            │
  └────────────────────────────┘
```

---

## Common Mistakes
1. **Forgetting `container-type` (query won't work)** — Without `container-type: inline-size` or `size`, the element isn't a queryable container. `@container` queries will have no effect.
2. **Using container queries when media queries suffice** — If a component only appears in one layout context, a media query is simpler and more widely supported.
3. **Circular dependencies (container sizing based on content)** — If a container's size depends on its content and the content changes based on the container query, you get a circular dependency that may cause layout instability.
4. **Not providing fallbacks for unsupported browsers** — Container queries are supported in Chromium-based browsers since 2022, but Firefox and Safari support came later. Always provide fallback styles.
5. **Over-querying causing complexity** — Too many container breakpoints (5+) in a single component make the CSS hard to maintain. Stick to 2-3 breakpoints per component.
6. **Forgetting `container-name` in complex layouts** — When you have nested containers, `@container` queries without a name query the nearest ancestor container, which may not be the one you intended.
7. **Using `container-type: size` unnecessarily** — `size` containment prevents the container from being sized by its children, which can break layouts. Use `inline-size` unless you specifically need block-size queries.
8. **Animating container size** — Container queries evaluate after layout, so animating a container's size while querying it can cause jank.

## Best Practices
- Use container queries for truly reusable components that appear in multiple layout contexts
- Combine with media queries for layout-level responsiveness — media queries for page structure, container queries for component adaptation
- Name containers for clarity in complex layouts with multiple nesting levels
- Test containers in different contexts (sidebar, main content, full-width hero)
- Provide fallback styles for browsers without container query support
- Use `@supports (container-type: inline-size)` for progressive enhancement
- Limit to 2-3 container breakpoints per component for maintainability
- Use container query units for fluid typography and spacing: `font-size: clamp(1rem, 3cqi, 2rem)`
- Prefer `container: name / inline-size` shorthand for clean setup
- Name containers semantically (sidebar, main, widget) not based on visual properties (wide, narrow)

## Accessibility Considerations
- Container queries themselves have no accessibility impact
- However, container-adapted layouts must preserve content order and focus order
- Ensure that container queries don't hide content from screen readers by changing `display` or `visibility` on focusable elements
- Responsive components that change layout must maintain logical tab order (don't visually reorder without DOM reordering)
- Test container-adapted layouts at different zoom levels — container queries respond to the container, not the viewport
- Consider that users with zoom may see different component layouts at the same viewport size

## Performance Considerations
- Container queries trigger style recalculations when the container's size changes
- The `container-type: inline-size` property implicitly applies `contain: layout style inline-size`, which scopes style and layout recalculation to the container's subtree
- This containment is actually a performance win — the browser can limit style recalculation to the container's subtree instead of re-calculating the entire page
- Container query units (`cqi`, `cqw`, etc.) are resolved during the style calculation phase — they don't add significant overhead
- Deeply nested container queries may increase style recalculations on resize — avoid nesting containers more than 2-3 levels deep
- Resize-heavy containers (like resizable panels) with container queries may trigger more recalculations
- On low-end devices, container queries may cause jank during rapid resize — use `resize` event debouncing if combined with JavaScript-driven resizing
- Chrome DevTools Performance panel can help identify container query-related style recalculations

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| `container-type` | 105+ | 110+ | 16.0+ | 105+ |
| `container-name` | 105+ | 110+ | 16.0+ | 105+ |
| `container` shorthand | 105+ | 110+ | 16.0+ | 105+ |
| `@container` | 105+ | 110+ | 16.0+ | 105+ |
| Container query units | 105+ | 110+ | 16.0+ | 105+ |
| `container-type: size` | 105+ | 110+ | 16.2+ | 105+ |

Container queries are supported in Chrome 105+, Firefox 110+, Safari 16.0+, and Edge 105+. For older browsers, provide fallback styles that work without container queries. Use PostCSS container-query polyfills for legacy support during the transition period. As of 2025, container queries have reached broad modern browser support.

## Summary Notes
- Container queries allow components to respond to their parent container's size, not the viewport
- Use `container-type: inline-size` to establish a containment context (most common)
- Use `@container (min-width: ...)` to write queries against the nearest container
- Name containers with `container-name` for specificity in nested layouts
- Container query units (`cqi`, `cqw`, `cqmin`, etc.) are relative to the container's size
- Always provide fallback styles for browsers without container query support
- Combine container queries with media queries: use media queries for page layout, container queries for components
- Container queries implicitly apply `contain: layout style inline-size` for performance isolation
- Use `container: name / type` shorthand for concise container setup
- Test components in multiple layout contexts to verify container query behavior
