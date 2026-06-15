# CSS Scroll Behavior Cheatsheet

## Property

| Property | Values | Default | Applies To |
|----------|--------|---------|------------|
| `scroll-behavior` | `auto` \| `smooth` | `auto` | Scroll containers |

## Usage

```css
/* Global smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Per-container smooth scrolling */
.sidebar {
  overflow-y: auto;
  scroll-behavior: smooth;
}
```

## What Smooth Scrolling Affects

| ✅ Affected (navigational) | ❌ NOT Affected (user-initiated) |
|---------------------------|--------------------------------|
| Anchor link clicks: `<a href="#section">` | Mouse wheel scrolling |
| `element.scrollIntoView()` | Touch/gesture scrolling |
| `window.scrollTo()` | Scrollbar dragging |
| `window.scrollBy()` | Keyboard arrow/page keys |
| `element.scrollTo()` | Browser find-in-page |

## scroll-margin for Fixed Headers

```css
/* Single section */
#section-2 {
  scroll-margin-top: 80px; /* Fixed header height */
}

/* All sections with IDs */
section[id] {
  scroll-margin-top: 80px;
}

/* Using CSS custom property */
:root { --header-height: 60px; }
section[id] {
  scroll-margin-top: calc(var(--header-height) + 20px);
}
```

## Accessibility

```css
/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  /* Disable all animations */
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## JavaScript Integration

```javascript
// Scroll to element
element.scrollIntoView({
  behavior: 'smooth',
  block: 'start'
});

// Scroll to coordinates
window.scrollTo({
  top: 500,
  left: 0,
  behavior: 'smooth'
});

// Scroll by offset
window.scrollBy({
  top: 200,
  behavior: 'smooth'
});

// Listen for scroll completion
element.addEventListener('scrollend', () => {
  console.log('Scroll completed');
});

// Feature detection
if ('scrollBehavior' in document.documentElement.style) {
  // Smooth scrolling supported
}
```

## Target Highlight Animation

```css
:target {
  animation: highlight 2s ease;
}

@keyframes highlight {
  0% { background-color: rgba(59, 130, 246, 0.15); }
  100% { background-color: transparent; }
}
```

## Common Patterns

```css
/* Back to top button */
html { scroll-behavior: smooth; }

/* TOC navigation */
.toc a {
  text-decoration: none;
}
section[id] {
  scroll-margin-top: 80px;
}

/* Chat/message scroll */
.chat-window {
  height: 400px;
  overflow-y: auto;
  scroll-behavior: smooth;
}
```

## Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 61+ | Full |
| Firefox | 60+ | Full |
| Safari | 15.4+ | Late addition |
| Edge | 79+ | Full (Chromium) |
| Opera | 48+ | Full |
| Samsung Internet | 8.0+ | Full |
| IE | — | None |
