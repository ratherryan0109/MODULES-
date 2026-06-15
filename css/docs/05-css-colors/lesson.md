# Module 05: CSS Colors

## Table of Contents
1. Introduction
2. Learning Objectives
3. Theory
   - Color Formats in CSS
   - Hexadecimal (HEX) Colors
   - HEX with Alpha Channel
   - RGB and RGBA
   - HSL and HSLA
   - The `currentColor` Keyword
   - Opacity vs Alpha
   - CSS Custom Properties for Colors
   - Modern CSS Color Functions (oklch, color-mix, hwb)
4. Syntax
5. Visual Explanation
6. Common Mistakes
7. Best Practices
8. Accessibility Considerations
9. Performance Considerations
10. Browser Compatibility
11. Summary Notes

## Introduction
Color is one of the most powerful tools in web design. It conveys mood, establishes brand identity, guides attention, and improves usability. CSS provides multiple ways to specify colors — from simple named colors to advanced functions like `rgb()`, `hsl()`, and hex codes, as well as modern spaces like `oklch()` and `color()`. Understanding how to use colors effectively is essential for creating visually appealing, accessible, and on-brand websites.

Color perception varies across devices, lighting conditions, and users. Modern CSS color features address these variations with wider gamuts, better perceptual uniformity, and color space management. This module covers everything from basic color formats to advanced color theory in CSS.

## Learning Objectives
By the end of this module, you will be able to:
- Use named colors, HEX, RGB, RGBA, HSL, and HSLA color values
- Understand when to use each color format for different scenarios
- Apply opacity and transparency with alpha channels
- Set text, background, and border colors properly
- Ensure sufficient color contrast for WCAG accessibility compliance
- Use the `currentColor` keyword effectively in components
- Apply colors with CSS custom properties for theming
- Understand modern CSS color functions like `oklch()` and `color-mix()`
- Create accessible color palettes that work for all users

## Theory

### Color Formats in CSS

| Format | Syntax | Example | Use Case |
|--------|--------|---------|----------|
| Named | `color: red;` | 140+ names | Quick prototyping |
| HEX | `#ff0000` | 6-digit or 3-digit shorthand | Most common format |
| HEX Alpha | `#ff000080` | 8-digit (CSS Color Level 4) | Adding transparency to hex |
| RGB | `rgb(255,0,0)` | Functional notation | When precision matters |
| RGBA | `rgba(255,0,0,0.5)` | RGB + alpha | Transparency needed |
| HSL | `hsl(0,100%,50%)` | Hue, Saturation, Lightness | Intuitive color adjustment |
| HSLA | `hsla(0,100%,50%,0.5)` | HSL + alpha | Transparency + intuitive |
| HWB | `hwb(0,0%,0%)` | Hue, Whiteness, Blackness | Simpler than HSL |
| oklch | `oklch(0.5,0.2,0)` | Perceptually uniform | Modern, accurate colors |
| color() | `color(display-p3 1 0 0)` | Wide gamut | HDR and P3 displays |

### Hexadecimal (HEX) Colors
Hex uses base-16 notation: digits 0-9 and letters A-F (case-insensitive). The format is `#RRGGBB` where each pair represents the red, green, and blue channels.
- `#ff0000` = red (R=255, G=0, B=0)
- `#00ff00` = green (R=0, G=255, B=0)
- `#0000ff` = blue (R=0, G=0, B=255)
- `#000000` = black (all channels at minimum)
- `#ffffff` = white (all channels at maximum)
- Shorthand: `#f00` = `#ff0000`, `#fff` = `#ffffff`, `#abc` = `#aabbcc`

**HEX to Decimal Conversion:**
Each hex pair converts to a decimal value 0-255:
- `ff` = 15×16 + 15 = 255
- `a0` = 10×16 + 0 = 160
- `33` = 3×16 + 3 = 51

### HEX with Alpha Channel
CSS Color Level 4 introduced 8-digit and 4-digit hex with alpha:
```css
/* 8-digit: #RRGGBBAA */
color: #ff000080;  /* Red at 50% opacity */
color: #00ff00ff;  /* Green at 100% opacity */

/* 4-digit shorthand: #RGBA */
color: #f008;      /* Red at 50% opacity (shorthand) */
```

### RGB and RGBA
The `rgb()` function defines colors using the red, green, and blue channels. Values range from 0 to 255 for each channel, or 0% to 100%.
```css
color: rgb(255, 0, 0);        /* Pure red */
color: rgb(0, 255, 0);        /* Pure green */
color: rgb(0, 0, 255);        /* Pure blue */
color: rgb(0, 0, 0);          /* Black */
color: rgb(255, 255, 255);    /* White */
color: rgb(128, 128, 128);    /* Gray (equal values) */

/* RGBA — adds alpha (0 to 1) */
color: rgba(255, 0, 0, 0.5);  /* Red at 50% opacity */
color: rgba(255, 0, 0, 1);    /* Fully opaque */
color: rgba(255, 0, 0, 0);    /* Fully transparent */

/* Modern syntax — no comma (CSS Color Level 4) */
color: rgb(255 0 0 / 0.5);    /* Red at 50% opacity */
background: rgb(0 0 0 / 0.1); /* Subtle black overlay */
```

### HSL and HSLA
HSL (Hue, Saturation, Lightness) is more intuitive for humans than RGB because it maps to how we think about color:
- **Hue**: Position on the color wheel, 0-360 degrees (0=red, 120=green, 240=blue)
- **Saturation**: Intensity of the color, 0% (gray) to 100% (full vibrancy)
- **Lightness**: Brightness, 0% (black) to 100% (white), 50% is pure color

```css
color: hsl(0, 100%, 50%);       /* Pure red */
color: hsl(120, 100%, 50%);     /* Pure green */
color: hsl(240, 100%, 50%);     /* Pure blue */
color: hsl(0, 0%, 50%);         /* Medium gray */
color: hsl(0, 0%, 0%);          /* Black */
color: hsl(0, 0%, 100%);        /* White */

/* Tints (adding white): increase lightness */
color: hsl(0, 100%, 70%);       /* Light red (pink) */

/* Shades (adding black): decrease lightness */
color: hsl(0, 100%, 30%);       /* Dark red (burgundy) */

/* Tones (adding gray): decrease saturation */
color: hsl(0, 50%, 50%);        /* Muted red */

/* With alpha */
color: hsla(0, 100%, 50%, 0.5); /* Red at 50% opacity */

/* Modern syntax */
color: hsl(0 100% 50% / 0.5);
```

**Why HSL is powerful for theming:**
```css
:root {
  --primary-hue: 210;
}
.button {
  background: hsl(var(--primary-hue), 80%, 50%);
}
.button:hover {
  background: hsl(var(--primary-hue), 80%, 40%); /* Darker on hover */
}
.button:active {
  background: hsl(var(--primary-hue), 80%, 30%); /* Darkest when active */
}
```
By changing just the hue variable, you can generate an entire color scheme.

### The `currentColor` Keyword
`currentColor` inherits the computed value of the `color` property from the same element or its parent. It's incredibly useful for creating components whose decorative elements automatically match the text color.
```css
.button { color: blue; }
.button:hover { color: red; }
.button svg { fill: currentColor; } /* Automatically matches button text — no extra hover rule needed */

/* Border using currentColor */
.callout {
  color: #333;
  border-left: 4px solid currentColor; /* Border matches text color */
}

/* More complex usage */
.icon-link {
  color: #4299e1;
  text-decoration: none;
}
.icon-link:hover {
  color: #2b6cb0;
}
.icon-link svg,
.icon-link::before {
  fill: currentColor; /* Icon follows text color on hover automatically */
}
```

### Opacity vs Alpha
This is a critical distinction that many beginners misunderstand:
- `opacity: 0.5;` affects the **entire element** (background, text, borders, children — everything)
- Alpha in `rgba()` or `hsla()` affects **only that specific property**

```css
/* Opacity affects everything */
.overlay {
  background: black;
  color: white;
  opacity: 0.5; /* Background AND text AND children are semi-transparent */
}

/* Alpha affects only the property it's applied to */
.overlay-better {
  background: rgba(0, 0, 0, 0.5); /* Only background is translucent */
  color: white;                     /* Text remains fully opaque */
}
```

### CSS Custom Properties for Colors
Custom properties (CSS variables) are ideal for managing color palettes consistently:
```css
:root {
  /* Brand colors */
  --color-primary: #4299e1;
  --color-primary-dark: #2b6cb0;
  --color-primary-light: #bee3f8;
  --color-secondary: #ed8936;
  --color-accent: #9f7aea;

  /* Semantic colors */
  --color-success: #48bb78;
  --color-warning: #ecc94b;
  --color-error: #f56565;
  --color-info: #4299e1;

  /* Neutral colors */
  --color-text: #1a202c;
  --color-text-muted: #718096;
  --color-bg: #ffffff;
  --color-bg-muted: #f7fafc;
  --color-border: #e2e8f0;
}

.button--primary {
  background: var(--color-primary);
  color: white;
}
.button--primary:hover {
  background: var(--color-primary-dark);
}
```

### Modern CSS Color Functions

**HWB (Hue, Whiteness, Blackness):**
Simpler than HSL for some use cases — you specify hue, then add white or black.
```css
color: hwb(0, 0%, 0%);    /* Pure red */
color: hwb(0, 50%, 0%);   /* Pink (50% white added) */
color: hwb(0, 0%, 50%);   /* Dark red (50% black added) */
```

**oklch() — Perceptually Uniform Color:**
OKLCH is a modern color space designed for perceptual uniformity — a 10% change in lightness looks the same regardless of hue. This makes it ideal for color manipulation.
```css
color: oklch(0.5, 0.2, 0);     /* Red with perceptual lightness of 50% */
color: oklch(0.7, 0.1, 120);   /* Green at 70% lightness */
```

**color-mix() — Mixing Colors:**
```css
/* Mix two colors in a given space */
background: color-mix(in srgb, red 50%, blue);
background: color-mix(in hsl, var(--color-primary), white 20%);
```

**color() — Wide Gamut Colors:**
```css
/* Display P3 wide gamut (brighter colors on supported displays) */
background: color(display-p3 1 0 0);
```

## Syntax
```css
/* Named colors */
color: red;
color: transparent;
color: currentColor;

/* HEX */
color: #ff0000;
color: #f00;           /* Shorthand */
color: #ff000080;      /* 50% opacity red (CSS Color Level 4) */

/* RGB / RGBA */
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5);
color: rgb(255 0 0 / 0.5);  /* Modern comma-less syntax */

/* HSL / HSLA */
color: hsl(0, 100%, 50%);
color: hsla(0, 100%, 50%, 0.5);
color: hsl(0 100% 50% / 0.5);  /* Modern syntax */

/* HWB */
color: hwb(0, 0%, 0%);

/* OKLCH */
color: oklch(0.5 0.2 0);

/* currentColor in various properties */
border-color: currentColor;
background-color: currentColor;
box-shadow: 0 2px 4px currentColor;
```

## Visual Explanation
### Color Wheel (Hue Values)
```
       0° Red
       │
  300° Purple  60° Yellow
       │        │
 240° Blue ──── 120° Green
       │        │
  180° Cyan

HSL visualization:
  0°       Red
  30°      Orange
  60°      Yellow
  120°     Green
  180°     Cyan
  240°     Blue
  270°     Purple
  300°     Magenta
  360°     Red (full circle)
```

### Color Mixing Concepts
```
Tint:    HSL(0, 100%, 50%) → HSL(0, 100%, 70%)   [Add white/lightness]
Shade:   HSL(0, 100%, 50%) → HSL(0, 100%, 30%)   [Add black/darkness]
Tone:    HSL(0, 100%, 50%) → HSL(0, 50%, 50%)    [Add gray/reduce saturation]
```

## Common Mistakes
1. **Forgetting the `#` in hex**: `ff0000` should be `#ff0000` — browsers parse `ff0000` as a keyword, not a hex color
2. **Insufficient color contrast**: Light gray text (#ccc) on white background (#fff) has a contrast ratio of ~1.6:1 — far below WCAG AA minimum of 4.5:1
3. **Using `opacity` on parent elements expecting child opacity independence**: `opacity` affects children — use `rgba()` or `hsla()` on the background instead
4. **Confusing RGB values**: Values must be 0-255, not percentages (unless using the newer `rgb()` syntax that accepts percentages)
5. **Color blindness issues**: Don't rely solely on color to convey information — red/green color blindness affects ~8% of males
6. **Using too many colors**: More than 5-7 distinct colors in a UI creates visual noise
7. **Not providing fallback colors**: When using `color-mix()` or `oklch()`, provide fallbacks for older browsers
8. **Assuming all monitors display colors identically**: Color varies by monitor calibration, gamut, and viewing conditions
9. **Using `#000000` for text**: Pure black on pure white causes eye strain — use dark gray (#1a202c) instead
10. **Ignoring the difference between `transparent` and `rgba(0,0,0,0)`**: They render the same but behave differently with `currentColor`

## Best Practices
- Use HEX for solid colors (most compressed representation), RGBA/HSLA when transparency is needed
- Use HSL for color palettes and theming (easier to adjust lightness/hue systematically)
- Define colors as CSS custom properties for consistent theming across the project
- Maintain a color palette with 3-5 colors maximum for brand consistency
- Use a contrast checker tool (WebAIM, axe DevTools) to verify WCAG compliance
- Prefer named colors only for quick prototyping (limited range of 140 names)
- Use `currentColor` for SVGs, borders, and pseudo-elements to keep components color-agnostic
- Prefer dark gray (`#1a202c`) over pure black (`#000`) for body text
- Use modern `oklch()` for color manipulation when browser support allows
- Add fallback colors for modern CSS color functions
- Test color palettes with grayscale conversion to check reliance on color alone
- Use color scales (50-900) like Tailwind or custom-designed scales for consistent variation

## Accessibility Considerations
- WCAG AA requires 4.5:1 contrast ratio for normal text, 3:1 for large text (18px+ bold or 24px+ regular)
- WCAG AAA requires 7:1 for normal text, 4.5:1 for large text
- Never convey information through color alone (use icons, text labels, patterns, or underlines too)
- Test with color blindness simulators (Chrome DevTools has built-in vision deficiency simulation)
- Provide high-contrast mode support via `prefers-contrast: more` media query
- Use `forced-colors: active` media query for Windows High Contrast Mode support
- Ensure focus indicators have sufficient contrast against all backgrounds
- Consider dark mode with `prefers-color-scheme: dark`
- Avoid using red/green combinations for critical state indicators
- Provide visible labels alongside color-coded status indicators

```css
/* High contrast mode support */
@media (prefers-contrast: more) {
  :root {
    --color-text: #000000;
    --color-bg: #ffffff;
    --color-primary: #1a56db;
  }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #1a202c;
    --color-text: #e2e8f0;
  }
}
```

## Performance Considerations
- Color values have negligible performance impact — all color formats resolve with the same rendering cost
- Using CSS custom properties for colors simplifies theme changes without performance cost
- RGBA/HSLA are computed with the same performance as hex
- `currentColor` may have a minor performance cost as the browser must resolve inheritance
- Too many gradient color stops can impact rendering performance on mobile GPUs
- `oklch()` and `color()` may have slightly higher computation cost on older browsers

## Browser Compatibility
| Format | Chrome | Firefox | Safari | Edge | Opera | IE |
|--------|--------|---------|--------|------|-------|----|
| Named colors | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| HEX (#RRGGBB) | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| HEX shorthand (#RGB) | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| rgb() / rgba() | 1+ | 1+ | 1+ | 12+ | 3.5+ | 9+ |
| hsl() / hsla() | 1+ | 1+ | 3.1+ | 12+ | 3.5+ | 9+ |
| 8-digit HEX (#RRGGBBAA) | 62+ | 49+ | 10+ | 79+ | 49+ | No |
| HWB | 101+ | 96+ | 15+ | 101+ | 87+ | No |
| color-mix() | 111+ | 113+ | 16.2+ | 111+ | 97+ | No |
| oklch() | 111+ | 113+ | 15.4+ | 111+ | 97+ | No |
| color() | 111+ | 113+ | 15+ | 111+ | 97+ | No |
| currentColor | 1+ | 1+ | 1+ | 12+ | 3.5+ | 9+ |

## Summary Notes
- Named colors: 140+ predefined names (limited but useful for prototyping)
- HEX: `#RRGGBB` or `#RGB` (3-digit shorthand), also `#RRGGBBAA` for alpha
- RGB: `rgb(0-255, 0-255, 0-255)` or modern `rgb(0-255 0-255 0-255 / alpha)`
- HSL: `hsl(0-360°, 0-100%, 0-100%)` — most intuitive for human color understanding
- Alpha: Add a 4th value/component for transparency (RGBA, HSLA, 8-digit HEX)
- `currentColor` inherits the element's text color — useful for borders, SVGs, pseudo-elements
- `opacity` affects the entire element and its children; alpha affects only that specific property
- WCAG contrast ratios: 4.5:1 (AA normal), 3:1 (AA large), 7:1 (AAA normal)
- HSL is best for theming — adjust lightness for hover/active states by changing one value
- Modern `oklch()` offers perceptual uniformity for advanced color manipulation
- Use CSS custom properties for maintainable, themeable color systems
- Test with color blindness simulators and grayscale to ensure accessibility
- Always provide fallback colors for modern CSS color functions in production
