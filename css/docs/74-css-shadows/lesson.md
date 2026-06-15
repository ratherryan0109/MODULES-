# CSS Shadows

## Module Overview
Learn how to create and control shadows in CSS using box-shadow, text-shadow, and drop-shadow() to add depth, dimension, and visual hierarchy to your web designs. Shadows are a fundamental tool in visual design, helping users understand element elevation, interactive states, and content relationships at a glance.

## Learning Objectives
- Understand the box-shadow property and its parameters
- Apply text-shadow for typographic depth
- Use the drop-shadow() filter function
- Create layered and realistic shadow effects
- Control shadow spread, blur, and positioning
- Understand the stacking context implications of shadows
- Apply inset shadows for pressed and concave effects
- Combine shadows with animations and transitions

## Topics Covered

### 1. The box-shadow Property
The `box-shadow` property adds shadow effects to elements. Its syntax accepts multiple shadow layers separated by commas, allowing for complex depth effects.

**Parameters:**
- `offset-x` — horizontal offset (positive = right, negative = left)
- `offset-y` — vertical offset (positive = down, negative = up)
- `blur-radius` — blur amount (higher = softer edges)
- `spread-radius` — shadow size (positive = expands, negative = contracts)
- `color` — shadow color
- `inset` — makes shadow appear inside the element

**Syntax Example:**
```css
/* Simple shadow */
box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);

/* With spread */
box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.3);

/* Inset shadow (concave effect) */
box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
```

**Detailed Explanation of Each Parameter:**

The `offset-x` and `offset-y` values create the directional basis of the shadow. A positive `offset-x` shifts the shadow to the right, making the light source appear to come from the left. This aligns with natural reading patterns and is commonly used in design systems.

The `blur-radius` controls how much the shadow spreads out. A value of `0` creates a sharp, hard-edged shadow (useful for "cutout" effects). As the value increases, the shadow becomes softer and more diffused. The blur is calculated using a Gaussian blur algorithm in the browser's rendering engine.

The `spread-radius` is often misunderstood. A positive value expands the shadow in all directions equally, making it larger than the element. A negative value contracts the shadow, making it smaller. When combined with a blur, the spread controls the "firmness" of the shadow core.

```css
/* Spread radius comparison */
box-shadow: 0 10px 10px -5px rgba(0,0,0,0.3);
/* The -5px spread pulls the shadow inward, creating a softer, more realistic look */
```

### 2. The text-shadow Property
The `text-shadow` property adds shadows to text characters. It accepts similar parameters to box-shadow but without spread-radius or inset.

```css
/* Subtle text shadow for depth */
text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

/* Glow effect */
text-shadow: 0 0 10px #00f, 0 0 20px #00f;

/* Embossed text effect */
text-shadow: 0 1px 0 #fff, 0 -1px 0 #333;
```

Text shadows operate at the glyph level rather than the element bounding box. This means each character generates its own shadow, creating a more natural effect for typography. The lack of spread-radius support is a key difference from box-shadow — text shadows always follow the exact shape of the glyph.

**Multiple text shadow layers** can create sophisticated typography effects:
```css
/* 3D extruded text */
text-shadow:
  1px 1px 0 #ccc,
  2px 2px 0 #bbb,
  3px 3px 0 #aaa,
  4px 4px 0 #999;
```

### 3. The drop-shadow() Filter
The `drop-shadow()` CSS function applies a shadow to the alpha channel of an image or element, respecting transparent areas (unlike box-shadow which follows the bounding box).

```css
/* Shadow that follows the shape of a PNG with transparent background */
filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));

/* Drop shadow on a cutout shape created with clip-path */
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
```

**Key difference from box-shadow:** `box-shadow` renders the shadow of the element's CSS box (the rectangular bounding box). `drop-shadow()` renders the shadow of the element's rendered content, including any transparent cutouts, clipped regions, or alpha-transparent areas in images.

### 4. Layered Shadows
Multiple shadows can be stacked by separating them with commas. This creates complex effects like realistic depth, neon glows, and 3D extrusions.

```css
/* Realistic elevation shadow (Material Design inspired) */
box-shadow:
  0 1px 3px rgba(0, 0, 0, 0.12),
  0 1px 2px rgba(0, 0, 0, 0.24);

/* High elevation (like a modal or dialog) */
box-shadow:
  0 14px 28px rgba(0, 0, 0, 0.25),
  0 10px 10px rgba(0, 0, 0, 0.22);
```

The principle behind layered shadows is that real-world objects cast shadows with multiple components: an ambient shadow (soft, wide, low-opacity) and a directional shadow (tight, offset, higher-opacity). The ambient shadow mimics diffuse light scattering, while the directional shadow represents the primary light source. This two-part shadow technique is the foundation of Material Design's elevation system and creates significantly more realistic depth than a single shadow layer.

### 5. Shadow Color and Opacity
Using semi-transparent colors (e.g., `rgba(0,0,0,0.2)`) creates more realistic shadows that blend naturally with backgrounds.

```css
/* Shadow that adapts to background */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

/* Colored shadow for creative effects */
box-shadow: 0 4px 12px rgba(255, 0, 0, 0.3);
```

Modern CSS also allows using `currentColor` or custom properties for dynamic shadow colors:
```css
:root {
  --shadow-color: rgba(0, 0, 0, 0.15);
}
.card {
  box-shadow: 0 4px 12px var(--shadow-color);
}
.dark-mode .card {
  --shadow-color: rgba(0, 0, 0, 0.4);
}
```

### 6. Inset Shadows
The `inset` keyword creates inner shadows, useful for pressed/concave effects, embossing, and depth within containers.

```css
/* Pressed button effect */
button:active {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Inner glow */
box-shadow: inset 0 0 20px rgba(0, 150, 255, 0.3);

/* Embossed panel */
box-shadow:
  inset 0 1px 2px rgba(0, 0, 0, 0.1),
  inset 0 -1px 2px rgba(255, 255, 255, 0.7);
```

Inset shadows are particularly useful for form inputs to indicate focus states. When combined with outline removal, they provide a clean, accessible focus indicator:
```css
input:focus {
  outline: none;
  box-shadow: inset 0 0 0 2px #4a90d9;
}
```

### 7. Shadows and Stacking Contexts
Shadows interact with CSS stacking contexts in important ways. A `box-shadow` is drawn behind the element's background but in front of any elements behind it in the stacking order. This means shadows can be clipped by parent elements with `overflow: hidden`, which is a common source of unexpected rendering.

```css
/* Solution: Use padding on parent instead of overflow: hidden */
.card-container {
  padding: 10px; /* Gives room for shadow to display */
}
.card {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}
```

### 8. Animating Shadows
Shadows can be transitioned and animated, though they are less performant than transforms because they trigger repaints. For hover effects, transitioning the shadow alone is usually fine; for continuous animation, consider using opacity or transform instead.

```css
.card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease;
}
.card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}
```

## Visual Explanation

```
box-shadow: 0 4px 8px rgba(0,0,0,0.2)

   ┌─────────────────────┐
   │                     │
   │    Element Box      │
   │                     │
   └─────────────────────┘
        ╰──────────╯
     Shadow (offset-y=4px)
     blur-radius=8px
     
Without shadow, elements appear flat on the page.
With shadow, elevation is visually communicated.
```

## Best Practices
- Use `rgba()` or `hsla()` colors for shadows to control opacity independently
- Prefer `box-shadow` over images for shadow effects (performance + responsiveness)
- Layer multiple shadows for realistic depth (short blur + tight, long blur + soft)
- Avoid excessive blur on text-shadow to maintain readability
- Use `will-change: transform` sparingly as it can create a new stacking context affecting shadows
- For Material Design elevation, use the standard shadow system with ambient + directional components
- Test shadows on different background colors — a shadow visible on white may disappear on dark backgrounds
- Use `filter: drop-shadow()` when you need shadows to follow non-rectangular shapes

## Common Mistakes
- Forgetting to account for stacking contexts — shadows are clipped by overflow: hidden
- Using fully opaque black instead of semi-transparent dark colors
- Overuse of heavy blur on small elements, creating muddy appearance
- Applying box-shadow to table rows (browsers may not render it correctly)
- Using box-shadow when drop-shadow() is needed for transparent images
- Setting blur to 0 when a subtle blur would look more natural
- Not testing shadows on both light and dark backgrounds

## Accessibility Considerations
- Ensure sufficient contrast between text and background when using text-shadow for depth
- Avoid using shadows as the sole indicator of interactive states (e.g., hover)
- Glowing text effects with text-shadow can reduce readability — use sparingly
- Users with visual impairments may not perceive subtle shadow depth cues
- In high-contrast mode, shadows are typically removed — ensure functionality works without them
- Motion sensitivity: avoid rapidly animating shadows that could cause distraction

## Performance Considerations
- `box-shadow` triggers repaints on changes, making it less performant than `transform` or `opacity`
- Multiple shadow layers increase painting cost — limit to 2-3 layers
- Large blur radii are more expensive to render (more pixels affected)
- Animating box-shadow in continuous loops (spinners, loading) can cause jank
- For performant shadows, consider using `::before`/`::after` pseudo-elements with opacity transitions
- `drop-shadow()` filter is generally more expensive than `box-shadow` — use sparingly
- Use `contain: paint` on elements with shadows to limit the paint area

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|-----|
| box-shadow | 10+ | 4+ | 5.1+ | 12+ | 9+ |
| text-shadow | 2+ | 3.5+ | 1.1+ | 12+ | 10+ |
| drop-shadow() filter | 18+ | 35+ | 6+ | 12+ | No |
| Multiple shadows | 10+ | 4+ | 5.1+ | 12+ | 9+ |
| Inset shadows | 10+ | 4+ | 5.1+ | 12+ | 9+ |
| HSLA shadow colors | 10+ | 4+ | 5.1+ | 12+ | 9+ |

All major features are well-supported in modern browsers. For IE 9, basic box-shadow is supported. IE 10+ adds text-shadow. The `drop-shadow()` filter function requires IE 12+ (Edge).

## Summary Notes
- `box-shadow` creates element box shadows with 6 parameters: offset-x, offset-y, blur, spread, color, and inset
- `text-shadow` creates character-level shadows without spread or inset support
- `drop-shadow()` filter respects alpha transparency in images and clipped elements
- Layer ambient and directional shadows for realistic Material Design elevation
- Always use semi-transparent colors for natural-looking shadows
- Shadows trigger repaints — prefer `transform` + `opacity` for animation-heavy contexts
- Use `inset` for inner/pressed effects on buttons and inputs
- Test shadows across light and dark themed environments
