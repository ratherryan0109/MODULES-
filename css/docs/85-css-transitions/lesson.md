# CSS Transitions

## Introduction
CSS Transitions allow elements to change property values smoothly over a given duration, providing a way to create simple animations without JavaScript. They are the foundation of interactive web experiences, enabling hover effects, state changes, and micro-interactions that guide user attention and provide visual feedback.

## Learning Objectives
1. Understand the CSS transition model and its properties
2. Apply transitions to create smooth state changes
3. Control timing functions for realistic motion
4. Use transition-delay for sequenced animations
5. Debug and optimize transition performance
6. Combine transitions with transforms for GPU-accelerated effects
7. Understand which properties can be transitioned
8. Respect user preferences for reduced motion

## Theory

### The Transition Model
A CSS transition is defined by four key components:

- **Property**: Which CSS property to animate
- **Duration**: How long the animation takes
- **Timing Function**: The acceleration curve
- **Delay**: When to start

```css
/* Full declaration */
transition-property: opacity;
transition-duration: 0.3s;
transition-timing-function: ease;
transition-delay: 0s;

/* Shorthand */
transition: opacity 0.3s ease 0s;
```

**How transitions work:**
A transition bridges two states of an element — typically a resting state and an interactive state (like `:hover`, `:focus`, or `:active`). When the element changes from one state to another, the browser calculates the intermediate values between the two states and renders them over the specified duration.

```css
.button {
  background-color: #3498db;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #2980b9; /* Animates over 0.3s */
}
```

### Transition Properties
| Property | Description | Default |
|----------|-------------|---------|
| `transition-property` | Specifies property to transition | `all` |
| `transition-duration` | Duration of transition | `0s` |
| `transition-timing-function` | Speed curve of transition | `ease` |
| `transition-delay` | Delay before transition starts | `0s` |

### Shorthand
```css
transition: property duration timing-function delay;
```

**Combined shorthand with multiple properties:**
```css
/* Single shorthand for all properties */
transition: all 0.3s ease;

/* Different durations per property */
transition: 
  transform 0.3s ease,
  opacity 0.2s ease 0.1s; /* opacity starts 0.1s after transform */
```

### Timing Functions
| Function | Description |
|----------|-------------|
| `ease` | Slow start, fast middle, slow end (default) |
| `linear` | Constant speed throughout |
| `ease-in` | Slow start, fast end |
| `ease-out` | Fast start, slow end |
| `ease-in-out` | Slow start and end, faster middle |
| `cubic-bezier(n,n,n,n)` | Custom curve with 4 control points |
| `steps(n, direction)` | Discrete stepping (not smooth) |

```css
/* Custom cubic-bezier examples */
transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55); /* Bounce effect */
transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1); /* Material Design standard */

/* Step function — for clock-like animations */
transition: opacity 0.5s steps(4, end); /* 4 discrete steps */
```

**Understanding cubic-bezier curves:**
The `cubic-bezier()` function takes four parameters: (x1, y1, x2, y2), representing two control points on a Bezier curve. The curve maps time (x-axis, 0 to 1) to progress (y-axis, typically 0 to 1, but can overshoot). Values outside 0-1 on the y-axis create spring/bounce effects.

```css
/* Common custom curves */
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
--spring: cubic-bezier(0.68, -0.55, 0.27, 1.55);
--snap: cubic-bezier(0.5, 1.5, 0.5, 1);
```

### Transitionable Properties
Most CSS properties that accept numeric or color values are transitionable:

```css
/* Visual properties — performant */
opacity: 0 → 1;
color: #000 → #333;
background-color: white → blue;
transform: scale(1) → scale(1.1);
filter: blur(0) → blur(4px);
box-shadow: 0 0 0 rgba(0,0,0,0) → 0 4px 8px rgba(0,0,0,0.2);

/* Layout properties — less performant */
width: 100px → 200px;
height: 50vh → 100vh;
margin: 0 → 20px;
padding: 10px → 20px;
top: 0 → 100px;
```

**Properties that CANNOT be transitioned:**
- `display` (none → block — use visibility + opacity instead)
- `background-image` (generally not transitionable, though gradient workarounds exist)
- `font-family` (no meaningful interpolation)
- `visibility` is transitionable but only at the end (0 → 1 discrete change)

### Multi-Step Transitions
Using transition-delay, you can create sequenced multi-step animations:

```css
.card {
  transform: translateY(0);
  opacity: 1;
  transition:
    transform 0.4s ease,
    opacity 0.3s ease 0.1s; /* opacity starts after transform */
}

.card:hover {
  transform: translateY(-10px);
  opacity: 0.8;
}

/* Staggered children */
.card-item {
  opacity: 0;
  transition: opacity 0.3s ease;
}
.card-item:nth-child(1) { transition-delay: 0ms; }
.card-item:nth-child(2) { transition-delay: 100ms; }
.card-item:nth-child(3) { transition-delay: 200ms; }
.card-item:nth-child(4) { transition-delay: 300ms; }

.card:hover .card-item {
  opacity: 1;
}
```

### Transition Events in JavaScript
The browser fires events at transition lifecycle points:

```javascript
element.addEventListener('transitionstart', () => console.log('Started'));
element.addEventListener('transitionrun', () => console.log('Running'));
element.addEventListener('transitionend', () => console.log('Ended'));
element.addEventListener('transitioncancel', () => console.log('Cancelled'));

// Reading transition duration from computed style
const duration = parseFloat(
  getComputedStyle(element).transitionDuration
);
```

### Debugging Transitions
Chrome DevTools provides several ways to debug transitions:

1. **Animations tab**: Shows all active animations/transitions with a timeline, allowing you to slow down, replay, and inspect each transition.
2. **Computed styles panel**: Shows the computed value of `transition-duration`, `transition-timing-function`, etc.
3. **Performance panel**: Record interactions to see paint, layout, and composite events triggered by transitions.

```css
/* Debugging tip: Add a visible indicator for transition target properties */
.debug-transition {
  transition: opacity 0.3s ease;
  outline: 2px solid transparent; /* Visible when inspect is needed */
}

/* Use slow motion for debugging */
.slow-motion {
  transition-duration: 2s; /* Slow down to see the entire animation */
  transition-delay: 0.5s;
}
```

### Transitioning Between Gradient Backgrounds
While `background-image` cannot be directly transitioned, you can work around this limitation by transitioning `opacity` on pseudo-elements:

```css
.button {
  position: relative;
  background: linear-gradient(135deg, #667eea, #764ba2);
  transition: opacity 0.3s ease;
  z-index: 1;
}

.button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #764ba2, #667eea);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.button:hover::before {
  opacity: 1; /* Reverse gradient fades in */
}
```

### Practical UI Micro-Interactions

**Like button animation:**
```css
.like-button {
  transform: scale(1);
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.like-button:active {
  transform: scale(1.3);
}

.like-button.liked {
  color: #e74c3c;
  transition: color 0.2s ease;
}
```

**Skeleton loading pulse:**
```css
.skeleton {
  background: linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

**Navigation underline slide:**
```css
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}
```

### Common Mistakes
1. Transitioning `all` when only specific properties needed (performance and unexpected side effects)
2. Forgetting to set initial property values (no transition without a starting state)
3. Using transition on `display: none` (not supported — use opacity + visibility)
4. Performance issues with `width`/`height` changes (triggers layout + paint)
5. Timing function mismatch with real-world motion (ease-in for objects appearing, ease-out for disappearing)
6. Transitioning too many properties simultaneously (can overwhelm the rendering pipeline)
7. Not providing a transition on the initial state (only on the changed state)
8. Using transition-delay for interactive elements (feels unresponsive)

### Best Practices
1. Use `transform` and `opacity` for GPU-accelerated animations
2. Keep durations between 200ms-500ms for UI transitions (shorter = more responsive)
3. Use `ease-out` for elements appearing, `ease-in-out` for continuous motion
4. Avoid transitioning `box-shadow` on hover (costly repaint)
5. Respect `prefers-reduced-motion`
6. Use transition-delay sparingly — it can make interfaces feel sluggish
7. Transition individual properties rather than `all` for predictable behavior
8. Combine transitions with transforms for smooth, performant animations

### Advanced Transition Patterns

**In/Out transitions with different timing:**
```css
.modal {
  opacity: 0;
  transform: scale(0.9);
  transition:
    opacity 0.2s ease-out,
    transform 0.2s ease-out;
}

.modal.open {
  opacity: 1;
  transform: scale(1);
  transition:
    opacity 0.3s ease-out,
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); /* Spring in */
}

/* Close is faster (0.2s) than open (0.3s) */
```

**Height auto transition workaround:**
```css
.accordion {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease;
}

.accordion.open {
  grid-template-rows: 1fr;
}

.accordion > .content {
  overflow: hidden;
}
```

### Accessibility
Use `@media (prefers-reduced-motion: no-preference)` to gate transitions:

```css
/* Respect user motion preferences */
@media (prefers-reduced-motion: no-preference) {
  .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  }
}

/* Alternative: reduce but don't remove completely */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    transition-duration: 0.01ms !important;
    transition-delay: 0.01ms !important;
  }
}
```

### Performance
- Prefer GPU-composited properties (`transform`, `opacity`)
- Avoid transitioning layout-affecting properties (`width`, `top`, `margin`)
- Use `will-change` sparingly (it creates new layers which consume memory)
- Transitioning `all` is a performance anti-pattern (forces the browser to check every property)

```css
/* Good — GPU composited properties only */
.card {
  will-change: transform;
  transition: transform 0.3s ease;
}

/* Bad — layout + paint on every frame */
.card {
  transition: all 0.3s ease;
}
```

### Browser Compatibility
CSS Transitions are supported in all modern browsers (IE 10+).

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|-----|
| Basic transitions | 26+ | 16+ | 9+ | 12+ | 10+ |
| cubic-bezier() | 26+ | 16+ | 9+ | 12+ | 10+ |
| Multiple transitions | 26+ | 16+ | 9+ | 12+ | 10+ |
| transitionend event | 26+ | 16+ | 9+ | 12+ | 10+ |
| Transitions on pseudo-elements | 26+ | 16+ | 9+ | 12+ | 10+ |
| prefers-reduced-motion | 74+ | 63+ | 10.1+ | 79+ | No |

All transition features have excellent browser support. IE 10 was the first IE version with transition support.

## Visual Explanation

**Transition timing function curves (x = time, y = progress):**
```
  ease (default):              linear:
  1 ┤        ╱                1 ┤            ╱
    │      ╱                    │          ╱
    │    ╱                      │        ╱
    │  ╱                        │      ╱
    │╱                          │    ╱
  0 ┤                         0 ┤  ╱
    0          1                0  ╱       1
    Slow start, fast middle,     Constant speed
    slow end                     throughout

  ease-in:                     ease-out:
  1 ┤                  ╱      1 ┤  ╱
    │              ╱            │    ╱
    │          ╱                │      ╱
    │      ╱                    │        ╱
    │  ╱                        │          ╱
  0 ┤                         0 ┤            ╱
    0          1                0            1
    Slow start, fast end        Fast start, slow end

  ease-in-out:                 cubic-bezier(0.68, -0.55, 0.27, 1.55):
  1 ┤        ╱                1 ┤╲        ╱   ← overshoots above 1
    │      ╱                    │ ╲      ╱    (bounce effect)
    │    ╱                      │  ╲    ╱
    │  ╱                        │   ╲  ╱
    │╱                          │    ╲╱
  0 ┤                         0 ┤         ╲  ← undershoots below 0
    0          1                0            1
    Symmetric slow start/end    Spring/bounce curve
```

**Transition lifecycle:**
```
  State change triggered (hover, class toggle, etc.)
         │
         ▼
  ┌────────────────┐
  │  transitionrun  │  ← fired immediately
  │  (always fires) │    (even if there's a delay)
  └────────┬───────┘
           │
           ▼  ── delay (if any) ──
           │
  ┌────────▼───────┐
  │ transitionstart │  ← fired when animation begins
  │ (fires after    │    (after delay expires)
  │  delay)         │
  └────────┬───────┘
           │
           ▼  ── duration ──
           │
  ┌────────▼───────┐
  │  transitionend  │  ← fired when complete
  │ (fires once per │    (multiple if multiple
  │  property)      │     properties transition)
  └────────────────┘

  If interrupted: transitioncancel fires
```

**Which properties trigger layout vs paint vs composite:**
```
  Property          Layout     Paint     Composite    GPU?
  ─────────────────────────────────────────────────────────
  transform          ❌        ❌        ✅          ✅
  opacity            ❌        ❌        ✅          ✅
  filter             ❌        ✅        ✅          ✅
  background-color   ❌        ✅        ✅          ❌
  color              ❌        ✅        ✅          ❌
  box-shadow         ❌        ✅        ✅          ❌
  width              ✅        ✅        ✅          ❌
  height             ✅        ✅        ✅          ❌
  margin/padding     ✅        ✅        ✅          ❌
  top/left           ✅        ✅        ✅          ❌

  Performance hierarchy: composite > paint > layout
```

**Multi-step staggered transition example:**
```
  Items fading in with increasing delays:
  
  Item 1:  delay: 0ms     ├────────────────►
  Item 2:  delay: 100ms   ──├──────────────►
  Item 3:  delay: 200ms   ────├────────────►
  Item 4:  delay: 300ms   ──────├──────────►
  
  Time:   0    100   200   300   400   500   (ms)
  
  Each item's transition starts after its delay,
  creating a cascading reveal effect
```

**Transition shorthands — property decomposition:**
```
  transition: transform 0.3s ease 0.1s, opacity 0.2s linear 0s;
       │          │        │     │          │       │     │
       │          │        │     └─ delay   │       │     └─ delay
       │          │        └─── timing fn   │       └─── duration
       │          └──────── duration        └─── timing fn
       └─── property                        └─── property

  Time diagram:
  transform: │◄─────── 0.3s ────────►│
             │  delay 0.1s           │
             └───────────────────────┘
  opacity:   │◄── 0.2s ──►│
             │ delay 0s   │
             └────────────┘
```

## Summary Notes
- Transitions animate between two states over a specified duration
- Four properties: `transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`
- Shorthand: `transition: all 0.3s ease`
- Use `cubic-bezier()` for custom timing curves
- GPU-friendly properties: `transform`, `opacity`
- Avoid transitioning layout properties (width, height, margin, padding)
- Use transition-delay for sequenced/staggered animations
- Respect `prefers-reduced-motion` for accessibility
- Supported in IE 10+ and all modern browsers
- Transition `all` is convenient but less performant — be specific
