# CSS Scroll Behavior

## Introduction

The `scroll-behavior` CSS property is a simple yet powerful tool that controls the scrolling behavior of a scrollable element. With just one line of CSS — `html { scroll-behavior: smooth; }` — you can transform jarring, instant page jumps into smooth, animated scrolls that guide the user's eye naturally across the page. This property affects all navigational scrolling, including anchor links (`<a href="#section">`), JavaScript's `scrollIntoView()`, `Element.scrollTo()`, and browser find-in-page functionality.

Before `scroll-behavior`, smooth scrolling required JavaScript libraries or manual scroll animation implementations. Developers would write complex requestAnimationFrame loops or use libraries like smooth-scroll-js to achieve what is now a native browser capability. The CSS approach is fundamentally superior: it runs on the browser's compositor thread (not the main JavaScript thread), uses zero JavaScript bundle size, and provides consistent behavior across all navigational scrolling methods. However, it's important to understand what `scroll-behavior` does NOT do — it does not affect user-initiated scrolling like mouse wheel, touch gestures, or scrollbar dragging. Those interactions remain under the user's direct control, which is the correct behavior for accessibility.

The property's simplicity belies its impact on user experience. Smooth scrolling provides spatial orientation — users can track their movement through the page, understanding where content is in relation to other sections. This is particularly valuable for long-form content, documentation pages, single-page applications, and table-of-contents navigation. When combined with `scroll-margin` (to offset for fixed headers) and CSS Scroll Snap, it creates polished, app-quality scroll experiences that feel intentional and designed.

## Learning Objectives

1. Understand the `scroll-behavior` property and what types of scrolling it affects
2. Enable smooth scrolling globally on the document using `html { scroll-behavior: smooth; }`
3. Differentiate between navigational scrolling (affected by smooth) and user scrolling (not affected)
4. Combine `scroll-behavior` with `scroll-margin` for accurate anchor positioning with fixed headers
5. Use `scroll-behavior` on container-specific scrolling (sidebars, modal overlays)
6. Implement accessibility best practices including `prefers-reduced-motion` overrides
7. Compare CSS smooth scroll vs JavaScript scroll libraries for performance and features
8. Control smooth scroll programmatically from JavaScript via `scrollIntoView({ behavior: 'smooth' })`
9. Debug scrolling issues using browser DevTools
10. Understand browser-specific implementations and supported versions

## Theory

### How scroll-behavior Works

The `scroll-behavior` property applies to scroll containers and controls how navigational scrolling animations are performed. When set to `smooth`, the browser:

1. Intercepts the scroll command (anchor click, `scrollIntoView()`, etc.)
2. Calculates the distance to the target position
3. Animates the scroll position using a browser-defined timing function and duration
4. Completes the scroll at the target position

The browser controls the animation parameters — you cannot customize the duration or timing function. This is intentional: it ensures consistent, performant scrolling across all content.

### What Smooth Scrolling Affects

| Trigger | Affected by smooth? | Notes |
|---------|-------------------|-------|
| Anchor link click (`<a href="#section">`) | ✅ Yes | Most common use case |
| `Element.scrollIntoView()` | ✅ Yes | Only with `behavior: smooth` parameter |
| `Element.scrollTo()` | ✅ Yes | Only with `behavior: smooth` parameter |
| `Element.scrollBy()` | ✅ Yes | Only with `behavior: smooth` parameter |
| `window.scrollTo()` | ✅ Yes | Only with `behavior: smooth` parameter |
| Browser find-in-page | ✅ Usually | Browser-dependent |
| Mouse wheel scrolling | ❌ No | Deliberately excluded |
| Touch/gesture scrolling | ❌ No | Deliberately excluded |
| Scrollbar dragging | ❌ No | Deliberately excluded |
| Keyboard arrow/page keys | ❌ No | Generally not affected |

### scroll-margin for Fixed Header Offset

When using smooth scrolling with anchor links, a common problem is that the target section scrolls behind a fixed header. The solution is `scroll-margin`:

```css
/* Target section */
#section-2 {
  scroll-margin-top: 80px; /* Offsets for fixed 80px header */
}

/* Or use :target pseudo-class */
:target {
  scroll-margin-top: 80px;
}

/* Global approach for all sections */
section[id] {
  scroll-margin-top: calc(var(--header-height, 60px) + 20px);
}
```

### scroll-behavior on Specific Containers

While `html` or `body` is the most common target, you can apply smooth scrolling to any scrollable element:

```css
/* Global smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Sidebar navigation */
.sidebar {
  height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;
}

/* Chat window */
.chat-messages {
  height: 400px;
  overflow-y: auto;
  scroll-behavior: smooth;
}

/* Modal with long content */
.modal-body {
  max-height: 60vh;
  overflow-y: auto;
  scroll-behavior: smooth;
}
```

### JavaScript Integration

```javascript
// Smooth scroll to element
element.scrollIntoView({
  behavior: 'smooth',
  block: 'start',
  inline: 'nearest'
});

// Smooth scroll to coordinates
window.scrollTo({
  top: 500,
  left: 0,
  behavior: 'smooth'
});

// Smooth scroll by offset
window.scrollBy({
  top: 200,
  behavior: 'smooth'
});

// Check if smooth scrolling is supported
if ('scrollBehavior' in document.documentElement.style) {
  console.log('Smooth scrolling supported!');
}

// Detect when smooth scroll completes
element.addEventListener('scrollend', () => {
  console.log('Scroll animation completed');
});
```

### scroll-behavior vs JavaScript Libraries Comparison

| Aspect | CSS scroll-behavior | JS Libraries (smooth-scroll) |
|--------|-------------------|------------------------------|
| Bundle size | 0 bytes | ~5-50 KB |
| Performance | Compositor thread (no jank) | Main thread (can jank) |
| Custom easing | ❌ Browser-defined | ✅ Custom cubic-bezier |
| Custom duration | ❌ Browser-defined | ✅ Configurable |
| Wheel events | Not affected | Can be affected |
| Touch/mobile | Not affected | Can affect |
| Browser support | Modern browsers | All browsers with JS |
| Accessibility | respects prefers-reduced-motion | Must implement manually |
| API surface | 3 CSS properties | Full API |

### Creating a "Back to Top" Button

```css
.back-to-top {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #3b82f6;
  color: white;
  border: none;
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s, transform 0.3s;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.back-to-top.visible {
  opacity: 1;
  transform: translateY(0);
}
```

```javascript
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 300);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
```

### Table of Contents Navigation

```css
.toc a {
  color: #64748b;
  text-decoration: none;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s;
}

.toc a:hover {
  background: #f1f5f9;
  color: #0f172a;
}
```

```html
<nav class="toc">
  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#configuration">Configuration</a></li>
    <li><a href="#usage">Usage</a></li>
  </ul>
</nav>
```

## Syntax Reference

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| `scroll-behavior` | `auto` \| `smooth` | `auto` | Controls scroll animation for navigational scrolling |

## Visual Explanation

### Smooth Scroll Animation

```
Without scroll-behavior: smooth (auto)
┌─────────────────────────────────────┐
│ Viewport                             │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ Click "Go to Section 3"       │  │
│  └───────────────────────────────┘  │
│                                     │
│       ⚡ JUMP ⚡                    │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ Section 3 (instant)           │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘

With scroll-behavior: smooth
┌─────────────────────────────────────┐
│ Viewport                             │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ Click "Go to Section 3"       │  │
│  └───────────────────────────────┘  │
│                                     │
│      ─── smooth animation ───→      │
│        (browser controlled)          │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ Section 3 (after animation)   │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

### scroll-margin for Fixed Header

```
Without scroll-margin:                With scroll-margin-top: 80px:
┌──────────────────────┐             ┌──────────────────────┐
│ Fixed Header (80px)  │             │ Fixed Header (80px)  │
├──────────────────────┤             ├──────────────────────┤
│ ░░░░░░░░░░░░░░░░░░░░░│             │                      │
│ ░░░ Section 3 ░░░░░░░│             │  (scroll-margin area) │
│ ░░░ (partially ░░░░░░│             ├──────────────────────┤
│ ░░░ hidden)   ░░░░░░░│             │ Section 3 (visible)  │
│ ░░░░░░░░░░░░░░░░░░░░░│             │                      │
│                      │             │                      │
│                      │             │                      │
└──────────────────────┘             └──────────────────────┘
Section 3 scrolls behind              Section 3 stops 80px
the fixed header!                     below the fixed header!
```

## Common Mistakes

1. **Expecting `scroll-behavior` to work on user-initiated scroll**: Mouse wheel, touch gestures, and scrollbar dragging are NOT affected by `scroll-behavior`. This is intentional for accessibility.

2. **Not setting `scroll-margin` for fixed headers**: Anchor links will scroll target sections behind fixed headers. Always add `scroll-margin-top` equal to or greater than the header height.

3. **Forgetting `prefers-reduced-motion`**: Some users experience motion sickness from smooth scrolling. Override with `scroll-behavior: auto` when `prefers-reduced-motion: reduce` is set.

4. **Applying to `body` instead of `html`**: For page-level smooth scroll, apply to the `html` element (or `:root`), not `body`. Some browsers need it on `html` to work correctly.

5. **Overriding smooth scroll with JavaScript scroll methods**: Programmatic scroll calls without the `behavior: 'smooth'` option will use instant scroll, even with the CSS property set.

6. **Using on elements without overflow**: `scroll-behavior` has no effect on non-scrollable elements. The element must have overflow content and `overflow: auto` or `scroll`.

7. **Customizing duration or easing**: There's no CSS way to change the scroll animation timing. The browser controls this for consistency and performance.

8. **Not testing on all browsers**: Safari 15.4+ only recently supports `scroll-behavior`. Older versions fall back to `auto` (instant scroll).

9. **Using smooth scrolling on rapid-interaction elements**: For UI elements that users interact with frequently (like tab panels), smooth scrolling can feel sluggish. Consider `auto` for these cases.

10. **Confusing `scroll-behavior` with CSS Scroll Snap**: They're complementary but different. Scroll snap controls where you land; scroll behavior controls how you get there.

## Best Practices

1. **Enable globally on the `html` element**: Set `html { scroll-behavior: smooth; }` for consistent smooth scrolling across all navigation.

2. **Always combine with `scroll-margin` for anchor targets**: Fixed headers will obscure target sections without proper `scroll-margin-top` offsets.

3. **Respect `prefers-reduced-motion`**: Always provide a media query override for users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

4. **Use for table of contents and documentation navigation**: These are the ideal use cases — long-form content where users navigate between sections.

5. **Consider performance implications**: While smooth scrolling is composited, rapid-fire scroll commands can still cause queuing delays. Debounce scroll buttons if needed.

6. **Provide visual feedback for scroll targets**: Highlight the `:target` section briefly after scrolling to help users orient themselves:

```css
:target {
  animation: highlight 2s ease;
}

@keyframes highlight {
  0% { background-color: rgba(59, 130, 246, 0.1); }
  100% { background-color: transparent; }
}
```

7. **Use `scroll-behavior: auto` for UI panels**: For fast navigation in sidebars, tabs, or accordions where smooth scrolling would feel slow.

8. **Combine with CSS Scroll Snap for polished experiences**: Smooth scroll handles the animation; scroll snap handles the landing position.

9. **Test with keyboard navigation**: Ensure Tab + Enter on anchor links produces smooth scroll. Test with `:focus-visible` styles on targets.

10. **Document scroll behavior in your style guide**: Make sure the team knows when to use `smooth` vs `auto` for different containers.

## Accessibility Considerations

- **Motion sensitivity**: Smooth scrolling can cause nausea, dizziness, and vestibular disorders in some users. Always respect `prefers-reduced-motion: reduce`.
- **`scroll-margin` and keyboard focus**: When navigating with Tab key, the focused element should be visible. `scroll-margin` helps ensure focused elements aren't hidden behind fixed headers.
- **Focus-visible on scroll targets**: Use `:focus-visible` to provide visible focus indicators on sections that users scroll to.
- **Skip navigation links**: Provide a "Skip to main content" link at the top of the page for users who navigate with keyboard or screen readers.
- **Scroll anchoring**: Modern browsers prevent unexpected page jumps when content loads above the viewport. This complements smooth scrolling.
- **`scrollend` event**: The `scrollend` event fires when a scroll animation completes. Use it to trigger accessibility announcements or state updates.
- **Screen reader interaction**: Screen readers typically don't participate in visual smooth scrolling, but anchor navigation still works correctly.

## Performance Considerations

- **Zero bundle size**: Unlike JavaScript scroll libraries, `scroll-behavior` adds no bytes to your bundle.
- **Compositor thread**: Smooth scroll animations run on the browser's compositor thread, not the main JavaScript thread, preventing jank.
- **GPU acceleration**: Modern browsers leverage GPU compositing for smooth scroll animations, resulting in 60fps performance.
- **No layout thrashing**: Native smooth scroll doesn't trigger forced layouts or style recalculations during the animation.
- **Avoid scroll event listeners**: Attaching scroll event listeners during smooth scrolling can cause performance degradation. Listen for `scrollend` instead.
- **Memory efficient**: Native smooth scrolling uses negligible memory compared to JavaScript-based alternatives with their animation frame loops.

## Browser Compatibility

| Browser | Version | Support | Notes |
|---------|---------|---------|-------|
| Chrome | 61+ | Full | Supported on `html` and scroll containers |
| Firefox | 60+ | Full | Supported on `html` and scroll containers |
| Safari | 15.4+ | Full | Late addition — older Safari falls back to `auto` |
| Edge | 79+ | Full | Based on Chromium |
| Opera | 48+ | Full | |
| Samsung Internet | 8.0+ | Full | |
| IE | — | No | Not supported |

### Feature Detection

```css
/* Use @supports for progressive enhancement */
@supports (scroll-behavior: smooth) {
  html {
    scroll-behavior: smooth;
  }
}
```

```javascript
// JavaScript feature detection
if ('scrollBehavior' in document.documentElement.style) {
  // Smooth scrolling is supported
}
```

## Summary Notes

- `scroll-behavior: smooth` enables animated scrolling for navigational scroll actions
- Only affects programmatic scrolls (anchor links, `scrollIntoView`, `scrollTo`)
- Does NOT affect user-initiated scrolling (mouse wheel, touch, scrollbar)
- Apply to `html` element for page-level smooth scrolling
- Combine with `scroll-margin-top` to offset for fixed headers
- Respect `prefers-reduced-motion: reduce` for accessibility
- Cannot customize animation duration or easing (browser-controlled)
- Zero bundle size — native browser implementation
- Runs on the compositor thread for 60fps performance
- Safari 15.4+ is the latest to add support (check compatibility)
- Use `window.scrollTo({ top: 0, behavior: 'smooth' })` for back-to-top
- JavaScript integration: `element.scrollIntoView({ behavior: 'smooth' })`
- Listen for `scrollend` event to detect when animation completes
- Complement with CSS Scroll Snap for polished section navigation
- Provide visual `:target` highlighting to orient users after scrolling
