# CSS Scroll Snap

## Introduction

CSS Scroll Snap is a powerful layout module that transforms scrolling from a passive, continuous motion into structured, destination-based navigation. Before Scroll Snap, creating app-like scroll experiences — think image carousels, full-screen presentation decks, or horizontal category browsers — required complex JavaScript libraries like Swiper, Flickity, or custom intersection observer implementations. These libraries added bundle weight, required careful state management, and often produced janky scroll behavior. CSS Scroll Snap solves this at the browser level, delivering silky-smooth, native scrolling performance with just a few CSS declarations.

The core concept is elegantly simple: you define a scroll container, specify snap positions on its children, and the browser automatically aligns the nearest snap point when the user stops scrolling. The `scroll-snap-type` property controls the axis (x, y, block, inline, or both) and the strictness (mandatory always snaps, proximity snaps when near). On child elements, `scroll-snap-align` determines which edge (start, center, or end) aligns to the snap position. This creates experiences like full-screen section scrollers where each section lands perfectly in view, carousels where each card centers precisely, or product galleries where the browser naturally stops at item boundaries.

Beyond the basics, CSS Scroll Snap offers sophisticated control through `scroll-padding` and `scroll-margin` for offset adjustments, `scroll-snap-stop` for preventing users from scrolling past important items, and keyboard accessibility support out of the box. The module works seamlessly with both horizontal and vertical scrolling, flexbox and grid-based layouts, and responds to dynamic content changes. Combined with `scroll-behavior: smooth`, it creates polished, app-quality scroll experiences that previously required significant JavaScript investment — all with near-zero performance overhead and full GPU acceleration.

## Learning Objectives

1. Understand the scroll snap model: snap container vs snap children
2. Master `scroll-snap-type` with axis (x, y, both) and strictness (mandatory, proximity) combinations
3. Control child alignment with `scroll-snap-align` (start, center, end)
4. Use `scroll-padding` and `scroll-margin` for offset adjustments (e.g., fixed headers)
5. Build horizontal and vertical carousels with CSS-only scroll snapping
6. Create full-screen presentation-style section scrollers
7. Apply `scroll-snap-stop` to prevent skipping important items
8. Ensure scroll snap is keyboard-accessible and works with assistive technology
9. Handle dynamic content changes (added/removed items) in snap containers
10. Debug scroll snap issues using browser DevTools scroll snapping overlays

## Theory

### The Scroll Snap Model

CSS Scroll Snap involves two roles:

1. **Scroll Container**: The element with `overflow: scroll/auto` that sets the snapping behavior
2. **Snap Targets**: Child elements (or deeper descendants) that define snap positions

```
┌─── Scroll Container ─────────────────────┐
│  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐    │
│  │  1  │  │  2  │  │  3  │  │  4  │    │
│  │snap │  │snap │  │snap │  │snap │    │
│  └─────┘  └─────┘  └─────┘  └─────┘    │
│  ▲         ▲         ▲         ▲        │
│  └── snap positions snap to container   │
└──────────────────────────────────────────┘
```

### scroll-snap-type

This property is set on the scroll container and has two components:

```
scroll-snap-type: [axis] [strictness];

Axis values:       x | y | block | inline | both
Strictness values: mandatory | proximity
```

| Value | Behavior |
|-------|----------|
| `x mandatory` | Horizontal snap, always snaps to nearest point |
| `y proximity` | Vertical snap, snaps only when near a point |
| `both mandatory` | Both axes, always snaps |
| `block proximity` | Block axis (vertical in LTR), snaps when near |
| `inline mandatory` | Inline axis (horizontal in LTR), always snaps |

**mandatory vs proximity:**

- **mandatory**: The browser always snaps to the nearest snap position when the user stops scrolling. Best for strict layouts like full-screen sections where every position must align perfectly. **Warning**: Can trap users if content changes dynamically.

- **proximity**: The browser snaps to a snap position only when the scroll position is close enough. More relaxed, better for content browsing where users should be able to stop at any point if desired.

### scroll-snap-align

Set on snap target children. Determines which edge of the child aligns to the snap position:

```css
.child {
  scroll-snap-align: start;   /* Top/left edge aligns */
  scroll-snap-align: center;  /* Center aligns */
  scroll-snap-align: end;     /* Bottom/right edge aligns */
  scroll-snap-align: none;    /* No snapping for this child */
}
```

Visual representation for a horizontal carousel:

```
scroll-snap-align: start        scroll-snap-align: center
┌──────────┬──────────┐        ┌──────────┬──────────┐
│          │          │        │          │          │
│  CHILD   │  CHILD   │        │  CHILD   │  CHILD   │
│  ────►   │          │        │  ◄──►    │  ◄──►    │
│          │          │        │          │          │
└──────────┴──────────┘        └──────────┴──────────┘
Snaps to start edge            Snaps to center
```

### scroll-padding and scroll-margin

These properties offset the snap position from the container/child edges:

```css
.scroll-container {
  scroll-padding: 40px;              /* All sides */
  scroll-padding: 40px 20px;         /* Vertical, horizontal */
  scroll-padding-inline-start: 80px; /* Account for fixed sidebar */
  scroll-padding-block-start: 60px;  /* Account for fixed header */
}

.snap-child {
  scroll-margin: 20px;               /* All sides */
  scroll-margin-inline: 10px;        /* Inline axis only */
}
```

**scroll-padding** adds padding inside the scroll container that affects where the snap position is calculated. Useful for offsetting content behind fixed headers.

**scroll-margin** adds margin outside snap targets that affects their effective snap position. Useful for creating gaps between snapped items.

### scroll-snap-stop

Controls whether the scroll container can "skip over" snap positions:

```css
.child {
  scroll-snap-stop: normal;   /* Default - scroll past items */
  scroll-snap-stop: always;   /* Force stop at every item */
}
```

Use `always` for critical content like terms-of-service checkboxes or form steps that users shouldn't accidentally skip.

### Complete Carousel Example

```css
.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch; /* iOS smoothness */
}

.carousel-item {
  flex: 0 0 100%;          /* Each item fills the container */
  scroll-snap-align: start;
}

/* Partial visibility carousel (peek at next item) */
.carousel-peek {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x proximity;
  scroll-padding-inline: 20px; /* Offset from edges */
  gap: 16px;
}

.carousel-peek-item {
  flex: 0 0 80%;           /* Shows 80% of next item */
  scroll-snap-align: start;
}
```

### Full-Screen Section Scroller

```css
html {
  scroll-behavior: smooth;
}

.sections-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.section {
  height: 100vh;            /* Each section = full viewport */
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}
```

### Grid-Based Scroll Snap

```css
.grid-scroll {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(6, 300px);
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: 40px;
}

.grid-item {
  scroll-snap-align: start;
}
```

### Nested Scroll Snap

```css
/* Outer: horizontal section navigation */
.horizontal-sections {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  width: 100vw;
  height: 100vh;
}

.outer-section {
  flex: 0 0 100vw;
  scroll-snap-align: start;
  overflow-y: auto;
  scroll-snap-type: y proximity; /* Inner: vertical snap */
}

.inner-section {
  height: 100vh;
  scroll-snap-align: start;
}
```

## Syntax Reference

### Container Properties

| Property | Values | Description |
|----------|--------|-------------|
| `scroll-snap-type` | `none` \| `x` \| `y` \| `block` \| `inline` \| `both` [`mandatory` \| `proximity`] | Defines snap behavior for container |
| `scroll-padding` | 1-4 `<length>` \| `<percentage>` \| `auto` | Offset inside container for snap alignment |
| `scroll-padding-inline-start` | `<length>` \| `<percentage>` \| `auto` | Inline-start padding for snap |
| `scroll-padding-block-end` | `<length>` \| `<percentage>` \| `auto` | Block-end padding for snap |
| `scroll-snap-stop` | `normal` \| `always` | Whether snap positions can be skipped |

### Child Properties

| Property | Values | Description |
|----------|--------|-------------|
| `scroll-snap-align` | `none` \| `start` \| `end` \| `center` {1-2 values} | Which edge aligns to snap position |
| `scroll-margin` | 1-4 `<length>` \| `<percentage>` | Margin outside child for snap alignment |
| `scroll-snap-stop` | `normal` \| `always` | Force stop at this child |

## Visual Explanation

### Snap Axis Diagram

```
Horizontal Snap (scroll-snap-type: x mandatory)
┌──────────────────────────────────────────────────┐
│ Scroll Container                                 │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐   │
│ │  A   │ │  B   │ │  C   │ │  D   │ │  E   │   │
│ │snap  │ │snap  │ │snap  │ │snap  │ │snap  │   │
│ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘   │
│        scroll direction →                        │
└──────────────────────────────────────────────────┘
         ● ← Snap positions at start of each child

Vertical Snap (scroll-snap-type: y mandatory)
┌────────────────────┐
│ ┌────────────────┐ │
│ │   Section 1    │ │ ← snap
│ └────────────────┘ │
│ ┌────────────────┐ │
│ │   Section 2    │ │ ← snap
│ └────────────────┘ │
│ ┌────────────────┐ │
│ │   Section 3    │ │ ← snap
│ └────────────────┘ │
│        scroll ↓     │
└────────────────────┘
```

### scroll-snap-align Comparison

```
start (horizontal)          center (horizontal)       end (horizontal)
┌────────────────────┐     ┌────────────────────┐    ┌────────────────────┐
│     ┌──┐           │     │     ┌──┐           │    │     ┌──┐           │
│     │A │ ← snaps   │     │     │A │           │    │     │A │  → snaps │
│     └──┘ to start  │     │  ┌──┴──┴──┐        │    │     └──┘ to end   │
│                    │     │  │ center │ snaps  │    │                    │
│                    │     │  └───────┘         │    │                    │
└────────────────────┘     └────────────────────┘    └────────────────────┘
```

### scroll-padding Effect

```
Without scroll-padding:           With scroll-padding-inline-start: 80px:
┌────────────────────┐           │← 80px padding →┌────────────────────┐
│ ┌──┐ ┌──┐ ┌──┐    │           │                 │ ┌──┐ ┌──┐ ┌──┐    │
│ │A │ │B │ │C │    │           │                 │ │A │ │B │ │C │    │
│ └──┘ └──┘ └──┘    │           │                 │ └──┘ └──┘ └──┘    │
│ snap here          │           │          snap here (offset)         │
└────────────────────┘           └────────────────────────────────────┘
```

## Common Mistakes

1. **Using mandatory snapping on dynamic content**: If items are added/removed while the user is scrolling, `mandatory` can trap users at unexpected positions. Use `proximity` for dynamic lists.

2. **Forgetting `overflow` property**: Scroll snap requires `overflow-x: auto` or `overflow-y: auto` (or `scroll`). Without it, the container won't scroll and snap won't activate.

3. **Not considering fixed headers with scroll-padding**: If you have a fixed navigation bar, sections will snap behind it. Use `scroll-padding-block-start` to offset the snap position.

4. **Ignoring keyboard accessibility**: Tab key navigation within scroll snap containers should work naturally. Ensure focusable elements are within snap targets and test keyboard scroll behavior.

5. **Using scroll-snap-align inconsistently**: All children in a scroll container should use the same alignment. Mixing start, center, and end creates unpredictable snap behavior.

6. **Poor performance with large DOM + snap**: Scrolling through hundreds of snap items can cause jank. Virtualize or limit the number of items in scroll snap containers.

7. **Not testing on touch devices**: Touch scrolling behavior differs from desktop. Test with both mouse wheel and touch/swipe gestures. `-webkit-overflow-scrolling: touch` helps on iOS.

8. **Overusing mandatory on horizontal carousels**: Users expect to be able to scroll freely through content. `proximity` is often more user-friendly for browsing experiences.

9. **Forgetting `scroll-snap-type` for child elements**: Nested scroll containers need their own `scroll-snap-type`. A child of a snap container doesn't automatically inherit snapping.

10. **Not providing visible scroll indicators**: Especially for horizontal carousels, users need visual cues (dots, arrows, scrollbar) to understand that more content exists and can be scrolled to.

## Best Practices

1. **Prefer `proximity` over `mandatory` for content browsing**: Unless every position must align (full-screen sections, slideshows), `proximity` provides a better user experience by not forcing snap positions.

2. **Use `scroll-padding` to account for fixed UI elements**: Always account for headers, sidebars, and other fixed elements that might overlap snapped content.

3. **Combine with `scroll-behavior: smooth` for polish**: Smooth scrolling between snap positions creates a polished, app-like feel.

4. **Provide visible navigation indicators**: Dots, arrows, scrollbars, or progress bars help users understand their position in a scroll snap container.

5. **Test with keyboard and screen reader**: Ensure Tab navigation moves through snap targets logically, and that snapped regions are announced by screen readers using ARIA roles.

6. **Use `scroll-snap-stop: always` sparingly**: Reserve this for mandatory items like form steps, age verification, or legal checkboxes where users must not skip content.

7. **Design for different input methods**: Touch, mouse wheel, keyboard arrows, and scrollbar dragging all interact with scroll snap differently. Test each.

8. **Keep performance in mind**: Limit scroll snap containers to a reasonable number of items (under 100). For larger sets, implement lazy loading or virtual scrolling.

9. **Use CSS Grid for structured snap layouts**: Grid with `grid-auto-flow: column` combined with scroll snap creates maintainable, predictable horizontal scrolling layouts.

10. **Add `scroll-margin` for visual breathing room**: Small gaps between snapped items improve visual clarity, especially for cards in a horizontal carousel.

## Accessibility Considerations

- **Keyboard navigation**: Ensure all snap targets are reachable via Tab. Use `tabindex="0"` on non-interactive snap items that need focus. Arrow keys should navigate between items naturally.
- **Focus management**: When a snap container scrolls programmatically (e.g., via JavaScript `scrollIntoView`), ensure keyboard focus follows the scroll position.
- **ARIA roles**: Use `role="region"` and `aria-label` on scroll snap sections. For carousels, consider `role="list"` with `role="listitem"` children and `aria-roledescription="carousel"`.
- **Skip links**: For long scroll containers, provide skip links that let users bypass the snap region entirely.
- **Reduced motion**: While scroll snap is navigational (not decorative animation), some users may experience motion sensitivity. Respect `prefers-reduced-motion` by disabling `scroll-behavior: smooth` when requested.
- **Content overflow**: Ensure text content doesn't overflow snap targets at different zoom levels, which could cause readability issues.
- **Screen reader announcements**: Use `aria-live` regions to announce when the visible snap item changes, helping users understand their context.
- **Touch targets**: Ensure snap items have adequate touch target sizes (minimum 44×44px) for mobile accessibility.

## Performance Considerations

- **Native browser implementation**: CSS Scroll Snap is implemented at the browser compositor level, delivering 60fps scrolling without JavaScript overhead.
- **GPU acceleration**: Modern browsers composite scroll snap operations on the GPU, resulting in smooth, jank-free scrolling even on mid-range devices.
- **Avoid expensive layouts**: Avoid triggering layout recalculations (e.g., reading `offsetTop` in scroll handlers) inside scroll snap containers, as this can cause jank.
- **Image loading**: Lazy-load images in scroll snap items to prevent layout shifts as images load. Use `aspect-ratio` and `loading="lazy"` attributes.
- **Content visibility**: Apply `content-visibility: auto` on scroll snap items below the visible area to defer rendering and improve initial load performance.
- **Limit DOM size**: For scroll snap containers with many items, consider windowing (only rendering visible items) to keep DOM size manageable.
- **will-change**: Avoid using `will-change: scroll-position` unless absolutely necessary, as it can consume significant GPU memory.

## Browser Compatibility

| Property | Chrome | Edge | Firefox | Safari | Opera |
|----------|--------|------|---------|--------|-------|
| `scroll-snap-type` | 69+ | 79+ | 68+ | 11+ | 56+ |
| `scroll-snap-align` | 69+ | 79+ | 68+ | 11+ | 56+ |
| `scroll-padding` | 69+ | 79+ | 68+ | 11+ | 56+ |
| `scroll-margin` | 69+ | 79+ | 68+ | 11+ | 56+ |
| `scroll-snap-stop` | 75+ | 79+ | 103+ | 15+ | 62+ |
| CSS Scroll Snap (legacy) | 49+ | 79+ | 39+ | 11+ | 36+ |

**Note**: Safari implemented an older version of the spec (Scroll Snap Points) before the standardization. The modern spec is supported in Safari 11+. For maximum compatibility, avoid `scroll-snap-stop` which has later support.

## Summary Notes

- Scroll snap makes scrollable containers snap to defined positions on child elements
- Two roles: **scroll container** (sets snap type) and **snap targets** (set alignment)
- `scroll-snap-type` combines an axis (`x`, `y`, `both`, `inline`, `block`) with strictness (`mandatory`, `proximity`)
- `scroll-snap-align` on children: `start`, `center`, `end` — determines which edge snaps
- `scroll-padding` offsets snap position inside the container (great for fixed headers)
- `scroll-margin` offsets snap position around children (creates gaps)
- `scroll-snap-stop: always` forces the container to stop at every snap position
- `proximity` is more user-friendly than `mandatory` for most content browsing
- Works with flexbox, grid, and block layouts for both horizontal and vertical scroll
- Requires `overflow` property set to `auto` or `scroll` on the container
- Excellent browser support in all modern browsers (Chrome 69+, Safari 11+, Firefox 68+)
- Native performance — GPU-composited, no JavaScript framework overhead
- Combine with `scroll-behavior: smooth` for polished user experience
- Always test on touch devices and with keyboard navigation
- Provide visible scroll indicators for horizontal scroll containers
- Respect `prefers-reduced-motion` for scroll behavior
