# CSS Z-index

## Introduction
The `z-index` property controls the stacking order of positioned elements along the z-axis (depth). It determines which elements appear in front of or behind others when they overlap. Understanding z-index and stacking contexts is essential for creating layered interfaces like modals, dropdowns, and complex UI components.

## Learning Objectives
1. Understand the z-axis and stacking order concept
2. Master the z-index property syntax and values
3. Comprehend stacking contexts and how they are created
4. Identify common z-index pitfalls and solutions
5. Use z-index effectively in complex layouts
6. Debug stacking issues using browser DevTools
7. Apply best practices for managing z-index across large projects
8. Understand the relationship between positioning and stacking
9. Implement layered UI patterns (modals, tooltips, dropdowns)
10. Manage z-index in responsive and dynamic interfaces

## Theory

### What is Z-index?
The `z-index` property specifies the stack order of an element along the z-axis (perpendicular to the screen). Higher values appear closer to the viewer (on top of lower values). Z-index only works on positioned elements — elements with `position` set to anything other than `static` (i.e., `relative`, `absolute`, `fixed`, or `sticky`).

### The Z-Axis
```
          ┌──────────┐  ← z-index: 100 (closest to user)
          │  Modal    │
          ├──────────┤
          │  Overlay  │  ← z-index: 50
          ├──────────┤
          │  Navbar   │  ← z-index: 10
          ├──────────┤
          │  Content  │  ← z-index: auto (default)
          └──────────┘
```

### The Difference Between Z-Index and Stack Order
Without any `z-index`, elements stack in DOM order — elements that appear later in the HTML render on top of earlier elements. Z-index overrides this natural order but only within the same stacking context. Understanding this distinction is critical for debugging stacking issues.

## Syntax

```css
.element {
  z-index: auto | number | inherit | initial | unset;
}
```

### Values

| Value | Description |
|-------|-------------|
| `auto` | Default. Stack level same as parent. No stacking context created |
| `<number>` | Integer (positive or negative). Higher values = closer to viewer |
| `inherit` | Inherits z-index from parent element |

## Theory: Stacking Context

A stacking context is a group of elements that share a common parent and are stacked together. Elements within a stacking context are painted from back to front in this order:

1. Background and borders of the root element
2. Negative z-index elements (and their children)
3. Non-positioned elements (normal flow)
4. Floating elements
5. Inline elements and inline blocks
6. Auto z-index (positioned with z-index: auto or z-index: 0)
7. Positive z-index elements

### Creating a Stacking Context

A stacking context is created by any of these properties:
- `position: relative/absolute/fixed/sticky` with `z-index` value other than auto
- `opacity` less than 1
- `transform` other than none
- `filter` other than none
- `isolation: isolate`
- `mix-blend-mode` other than normal
- `contain: layout` or `contain: paint`
- `perspective` other than none
- `will-change` with any value that creates a stacking context

One of the most surprising sources of stacking contexts is `opacity` values below 1. Applying `opacity: 0.99` to an element to make it "almost opaque" can unintentionally create a stacking context and change the visual stacking of child elements. Similarly, using CSS `transform` for hardware acceleration can inadvertently create stacking contexts.

### How Stacking Contexts Cascade
Stacking contexts are hierarchical. When an element creates a stacking context, its children are stacked entirely within that context. They cannot interleave with elements outside the parent's context, no matter how high their `z-index`. This is the most common source of "z-index not working" bugs.

### The Isolation Property
The `isolation: isolate` property explicitly creates a new stacking context without affecting the visual appearance of the element. This is useful for component-based architectures where you want to ensure a widget's stacking does not interfere with other page elements.

## Examples

### Basic Z-index
```css
.box1 { position: relative; z-index: 1; background: red; }
.box2 { position: relative; z-index: 2; background: blue; } /* On top */
.box3 { position: relative; z-index: 3; background: green; } /* On top of all */
```

### Negative Z-index
```css
.box { position: relative; z-index: -1; } /* Behind parent background */
```

Negative z-index values place an element behind its parent's background. This is useful for creating decorative elements that appear to sit behind the main content.

### Stacking Context Isolation
```css
.parent { position: relative; z-index: 1; }
.child { position: relative; z-index: 999; } /* Only inside parent's context */
```

In this example, the child's `z-index: 999` only applies within `.parent`'s stacking context. If another element with `z-index: 2` exists outside `.parent`, it will still render above `.parent` and its child (even though the child has a higher z-index).

### Using Isolation
```css
.component {
  isolation: isolate; /* Creates a stacking context without side effects */
}
.card {
  position: relative;
  z-index: auto;
}
```

## Visual Explanation

### Without Z-index (DOM Order)
```
┌─────────────────────────┐
│  Element 1 (DOM first)  │  ← On top (painted last)
├─────────────────────────┤
│  Element 2 (DOM second) │  ← Behind (painted first)
└─────────────────────────┘
```

### With Z-index
```
┌─────────────────────────┐
│  Element 3 (z-index: 3) │  ← On top
├─────────────────────────┤
│  Element 1 (z-index: 2) │
├─────────────────────────┤
│  Element 2 (z-index: 1) │  ← Behind
└─────────────────────────┘
```

### Stacking Context Isolation
```
┌───────────────────────────┐
│  Parent A (z-index: 1)    │
│  ┌─────────────────────┐  │
│  │ Child A (z-index:999)│  │
│  └─────────────────────┘  │
├───────────────────────────┤
│  Parent B (z-index: 2)    │  ← On top of Parent A (and all children of A)
│  └─────────────────────┘  │
└───────────────────────────┘
```

### Debugging Stacking Contexts in DevTools
In Chrome DevTools, open the Elements panel, select an element, and look for the "Stacking context" badge in the Computed pane. This shows you the element's stacking context root, z-index, and position type. In Firefox, the DevTools layout panel provides a similar visualization.

## Common Mistakes

1. **Z-index not working**: Element doesn't have a position value set (other than static)
2. **Stacking context isolation**: Child z-index only works within parent's stacking context
3. **Using huge z-index values**: `z-index: 999999` instead of organized values
4. **Forgetting opacity**: `opacity` < 1 creates a stacking context
5. **Transform surprise**: CSS `transform` creates a new stacking context
6. **Overwriting z-index accidentally**: Third-party components or CSS resets may set z-index values that interfere with your layering
7. **Assuming higher z-index always wins**: A child with `z-index: 9999` inside a parent with `z-index: 1` will still appear below a sibling parent with `z-index: 2`
8. **Not considering will-change**: The `will-change` property can create stacking contexts as a side effect

## Best Practices

1. Use a z-index scale system (e.g., 10-100 for UI, 100-1000 for overlays)
2. Keep z-index values in a single CSS custom properties file
3. Avoid z-index: 99999 - use organized tiers
4. Understand when elements create stacking contexts
5. Use `isolation: isolate` to contain stacking within components
6. Debug stacking with browser DevTools
7. Document z-index values in your team's style guide
8. Prefer lower values and logical grouping
9. Use `isolation: isolate` on web components and third-party widgets to prevent stacking conflicts
10. Test z-index behavior at different viewport sizes, especially for responsive overlays

### Suggested Z-index Scale

```css
:root {
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-overlay: 400;
  --z-modal: 500;
  --z-toast: 600;
  --z-tooltip: 700;
}
```

Using CSS custom properties for z-index values makes it easy to adjust the entire scale system-wide and prevents ad-hoc values from creeping in.

## Accessibility

- Ensure z-index doesn't trap keyboard focus behind other elements
- Test that interactive elements remain accessible at 200% zoom
- Ensure high-contrast mode works with layered interfaces
- Announce layered content changes with ARIA live regions
- For modal dialogs with high z-index, ensure focus is trapped inside the modal while it is open
- Elements with `z-index` that overlay content should not obscure focusable elements without a mechanism to dismiss or bypass them
- Test with screen readers that content behind overlays is not announced

## Performance

- Z-index itself doesn't impact performance
- Creating many stacking contexts can increase paint time
- Combining z-index with transforms uses GPU compositing
- Use `will-change: transform` carefully on positioned elements
- Avoid nesting many stacking contexts unnecessarily
- Each stacking context creates a separate compositing layer in some browsers, which can improve paint performance at the cost of increased memory usage
- Modals and overlays should use `contain: strict` where possible to limit paint and layout recalculations

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|----|
| z-index | ✓ | ✓ | ✓ | ✓ | ✓ |
| Stacking contexts | ✓ | ✓ | ✓ | ✓ | Partial |
| `isolation: isolate` | ✓ | ✓ | ✓ | ✓ | ✗ |
| Negative z-index | ✓ | ✓ | ✓ | ✓ | ✓ |

All modern browsers support z-index fully. The main compatibility concern is `isolation: isolate`, which is not supported in Internet Explorer. For projects that need IE support, you can create stacking contexts using `position: relative` + `z-index: 0` as a fallback.

## Summary Notes

- z-index only works on positioned elements (non-static)
- Higher value = closer to viewer
- `auto` inherits stacking context from parent
- Each stacking context isolates its children
- `opacity`, `transform`, `filter` create stacking contexts
- Use CSS variables for organized z-index values
- Debug with browser DevTools → Computed → Stacking context
- Negative z-index goes behind parent background
- `isolation: isolate` creates a clean stacking context boundary
- Stacking contexts are hierarchical — children cannot escape their parent's context
- Use a z-index scale system to avoid arbitrary values
- Test stacking behavior across viewport sizes and with dynamic content changes
- Remember that `transform`, `opacity`, and `filter` all create stacking contexts implicitly
