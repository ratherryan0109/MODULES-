# CSS Translate

## Introduction
The `translate` CSS property is a standalone property (part of CSS Transforms Module Level 2) that allows moving elements along X, Y, and Z axes independently without using the `transform` function. It provides better performance hints and cleaner syntax when you only need to move an element, separating movement from other transforms like rotation and scaling.

## Learning Objectives
1. Understand the standalone translate property vs transform: translate()
2. Apply translateX, translateY, and translateZ
3. Combine translate with other transform properties
4. Use percentage values for responsive positioning
5. Optimize performance with individual transforms
6. Create centering and offset patterns with translate
7. Understand 3D translate and GPU compositing

## Theory

### Standalone Translate Property
```css
translate: 50px 100px;    /* X and Y */
translate: 50% 50%;       /* Percentage of element dimensions */
translate: 0 0 100px;     /* X, Y, Z (3D) */
translate: none;          /* Default */
```

The standalone `translate` property follows the CSS Transforms Module Level 2 specification, which introduces individual transform properties (`translate`, `rotate`, `scale`) as first-class CSS properties. These properties are applied after `transform` in the rendering pipeline but maintain a clear separation of concerns.

```css
/* Simple movement */
.element {
  translate: 20px 30px;
}

/* Percentage-based — relative to element's own dimensions */
.element {
  translate: 50% -50%;  /* Move right by 50% of width, up by 50% of height */
}

/* 3D movement */
.element {
  translate: 0 0 100px;  /* Move 100px toward the viewer */
}
```

### Comparison: transform vs Individual Properties

| Aspect | transform: translate() | translate property |
|--------|----------------------|-------------------|
| Syntax | Function-based | Value-based (cleaner) |
| Compositing | GPU accelerated | GPU accelerated |
| CSS specificity | Same | Same |
| Animation | Via transform | Direct property |
| Browser support | Universal (IE 9+) | Newer browsers (Chrome 104+) |
| Combine with rotate/scale | Single transform string | Separate properties |
| Override risk | Easy to overwrite | Harder to overwrite |
| Animating individually | Requires multiple declarations | Each property independent |

### Values
- **Length**: `px`, `em`, `rem`, `vh`, `vw`
- **Percentage**: Relative to element's own dimensions
- **3D**: Add third value for Z-axis

```css
/* Various unit examples */
translate: 2rem 2em;           /* Relative units */
translate: 5vw 5vh;            /* Viewport units */
translate: calc(100% - 20px);  /* Calculations */
translate: 0 0 50px;           /* 3D — moves toward viewer */
```

**Percentage behavior:**
Unlike `position: relative` with percentage-based `top`/`left` (which are relative to the parent's dimensions), `translate` percentages are relative to the element's own dimensions. This is crucial for centering:
- `translate(50%, 50%)` moves the element right by 50% of its width and down by 50% of its height
- `translate(-50%, -50%)` moves it left and up by half its size

### Centering with Translate
```css
.centered-element {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  /* This works because:
     - top: 50% is relative to parent height
     - left: 50% is relative to parent width
     - translate(-50%, -50%) is relative to element's own dimensions
     - Net result: perfect centering regardless of element size
  */
}
```

### Combining with Other Transform Properties
```css
.element {
  translate: 100px 50px;    /* Move */
  rotate: 45deg;            /* Rotate */
  scale: 1.5;               /* Scale */
}

/* Equivalent transform: */
.element {
  transform: translate(100px, 50px) rotate(45deg) scale(1.5);
}
```

**Application order with individual properties:**
The individual properties (`translate`, `rotate`, `scale`) are applied in a specific order by the browser:
1. `translate` first (move the element to its final position)
2. `rotate` second (rotate around the transform-origin)
3. `scale` third (scale from the transform-origin)

This order is FIXED and predictable, unlike the `transform` property where you control the order manually. This is both a convenience and a limitation:

```css
/* Individual properties — fixed order */
.element {
  translate: 100px 0;
  rotate: 45deg;
  scale: 1.5;
}
/* Always applied: translate → rotate → scale */

/* Equivalent transform */
.element {
  transform: translate(100px, 0) rotate(45deg) scale(1.5);
}
```

**When you need custom order:**
If you need a different application order, use the `transform` property instead of individual properties.

### 3D Translate and GPU Compositing
```css
/* Trigger GPU compositing with translateZ(0) */
.element {
  translate: 0 0 0; /* Or translateZ(0) — forces GPU layer */
}

/* 3D movement with perspective */
.parent {
  perspective: 800px;
}
.child {
  translate: 0 0 200px; /* Appears 200px closer to viewer */
}
```

**The translateZ pattern for GPU acceleration:**
Before the standalone `translate` property, developers used `transform: translateZ(0)` as a hack to force GPU compositing. This trick worked because 3D transforms are always GPU-accelerated. The standalone `translate` property achieves the same effect more cleanly:

```css
/* Old way — CSS hack */
.smooth-animation {
  transform: translateZ(0); /* Force GPU layer */
  transition: transform 0.3s ease;
}

/* New way — cleaner */
.smooth-animation {
  translate: 0; /* Force GPU layer */
  transition: translate 0.3s ease;
}
```

### Practical Patterns

**Offset animations:**
```css
.pulse-offset {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { translate: 0 0; }
  50% { translate: 0 -10px; }
}
```

**Slide-in reveal:**
```css
.slide-in {
  translate: -100% 0;
  transition: translate 0.4s ease-out;
}

.slide-in.visible {
  translate: 0 0;
}
```

**Tooltip positioning:**
```css
.tooltip {
  position: absolute;
  left: 50%;
  bottom: 100%;
  translate: -50% -8px;
  white-space: nowrap;
}
```

**Scroll-triggered parallax:**
```css
.parallax-layer {
  translate: 0 calc(-10px * var(--scroll-progress));
}
```

## Visual Explanation

```
Translation Along Axes:

    Y- (up)
     │
     │  ┌────┐
  X──┼──│orig│── X+ (right)
     │  └────┘
     │          ┌────┐
    Y+ (down)   │trans│ ← translate(30, 30)
                └────┘


Single-Axis Translation:

translateX(50px)          translateY(50px)
┌────┐                    ┌────┐
│    │──→                 │    │
└────┘                    │    │
                          │    │
                          └────┘
                             ↓


Percentage Translation (relative to element's own size):

Element is 200px × 100px:
┌────────────────────┐
│                    │
│  ┌──────────────┐  │  translate(50%, 50%)
│  │   moves 100px│  │  → 100px right (50% of 200px)
│  │   right and  │  │  → 50px down (50% of 100px)
│  │   50px down  │  │
│  └──────────────┘  │
│                    │
└────────────────────┘


Perfect Centering Pattern:

┌─────────────────────────┐
│       parent            │
│                         │
│         ┌─────┐         │  top: 50%
│         │child│         │  left: 50%
│         └─────┘         │  translate(-50%, -50%)
│                         │
│                         │
└─────────────────────────┘


Fixed Application Order (Individual Properties):

  translate → rotate → scale

  1. translate(100px, 0)   2. rotate(45deg)      3. scale(1.5)
  ┌────┐                   ┌────┐                ┌────┐
  │    │  →  ┌────┐        │    │  →  ┌─┐        │    │  →  ┌──┐
  └────┘     │    │        └────┘    ┌┘ └┐       └────┘    ┌┘  └┐
             └────┘                 └┐ ┌┘                 └┐  ┌┘
              moved                   rotated               └──┘
                                                             scaled


3D translateZ with Perspective:

  Parent: perspective: 800px

        ┌────┐        ← translateZ(0) at screen plane
        │    │
        └────┘

    ┌────────────┐     ← translateZ(200px) — closer to viewer
    │            │
    └────────────┘

           ┌────┐     ← translateZ(-200px) — farther from viewer
           │    │
           └────┘
```

### Common Mistakes
1. Using translate on non-positioned elements incorrectly (works, but may be unexpected if assuming it works like `top`/`left`)
2. Confusing percentage (element's size) with parent size (percentage in translate is relative to the element, not the parent)
3. Not accounting for 3D rendering context with Z values (needs perspective on parent)
4. Overwriting when trying to combine with transform (using both `translate` and `transform` — they can coexist)
5. Expecting translate to affect document flow (it doesn't, like all transforms)
6. Using `translate` with `position: static` when `position: relative` might be more appropriate
7. Not testing translate at different element sizes when using percentage values

### Best Practices
1. Use translate for simple movement, transform for complex chains
2. Prefer percentage for centering techniques
3. Use translateZ to trigger GPU compositing
4. Combine individual transforms for clarity when order doesn't matter
5. Use the `transform` property when you need explicit control over application order
6. Animate translate with transitions for smooth movement
7. Use `calc()` inside translate for dynamic positioning: `translate(calc(100% - 20px), 0)`

### Performance
All translate operations are GPU-composited and trigger only composite (not layout/paint).

```css
/* Translate is as performant as transform: translate() */
.element {
  transition: translate 0.3s ease;
}
.element:hover {
  translate: 20px 0;
}
/* No layout or paint triggered — 60fps animation */
```

### Accessibility
- Moving elements with translate should not cause motion sickness — respect `prefers-reduced-motion`
- Translate does not affect screen reader position reporting (element is still in the original layout position)
- Don't use translate to hide content from screen readers
- Animated movement should have a purpose, not just decoration

### Browser Compatibility
| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|-----|
| Standalone translate | 104+ | 103+ | 16+ | 104+ | No |
| 3D translate values | 104+ | 103+ | 16+ | 104+ | No |
| Percentage values | 104+ | 103+ | 16+ | 104+ | No |

Standalone translate is supported in Chrome 104+, Firefox 103+, Safari 16+. For wider browser support, use `transform: translate()` which has universal support (IE 9+).

### Practical Example: Staggered List Animation
```css
.list-item {
  translate: -100% 0;
  transition: translate 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.list-item:nth-child(1) { transition-delay: 0ms; }
.list-item:nth-child(2) { transition-delay: 50ms; }
.list-item:nth-child(3) { transition-delay: 100ms; }
.list-item:nth-child(4) { transition-delay: 150ms; }
.list-item:nth-child(5) { transition-delay: 200ms; }

.list.visible .list-item {
  translate: 0 0;
}
```

### Translate vs position: relative
Both `translate()` and `position: relative` move elements, but with important differences:

| Aspect | translate() | position: relative |
|--------|-------------|-------------------|
| Performance | GPU composited | Triggers layout + paint |
| Flow impact | No (original space preserved) | No (original space preserved) |
| Measurement unit | % relative to element | % relative to parent |
| Animation | Smooth at 60fps | Can cause jank |
| Stacking context | Creates new context | Does not create context |
| Overflow | Not clipped by parent overflow | Clipped by parent overflow |

### Scroll-Based Translate with Intersection Observer
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.translate = '0 0';
    }
  });
});

document.querySelectorAll('.animate-in').forEach(el => {
  el.style.translate = '0 50px';
  observer.observe(el);
});
```

### Summary Notes
- Standalone `translate` separates movement from other transforms
- Works with X, Y, Z axes (3D with Z value)
- Percentage based on element's OWN dimensions (not parent)
- GPU accelerated — triggers only composite, not layout or paint
- Combine with `rotate`, `scale` individual properties for clean code
- Fixed application order: translate → rotate → scale
- Use `translateZ(0)` to force GPU compositing without visible movement
- Supported in Chrome 104+, Firefox 103+, Safari 16+
- Use `transform: translate()` for broader browser compatibility
- Perfect for centering: `position: absolute; top: 50%; left: 50%; translate: -50% -50%`

