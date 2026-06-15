# Module 07: CSS Borders

## Table of Contents
1. Introduction
2. Learning Objectives
3. Theory
   - Border Properties
   - Border Styles (Detailed)
   - Individual Side Borders
   - Border Shorthand
   - Border-Radius
   - Border-Image
   - Border vs Outline
   - Border and Box-Sizing
   - Border Color with currentColor
4. Visual Explanation
5. Common Mistakes
6. Best Practices
7. Accessibility Considerations
8. Performance Considerations
9. Browser Compatibility
10. Summary Notes

## Introduction
Borders frame elements, separating them from surrounding content and providing visual structure. CSS borders can be styled with different widths, styles, and colors. You can apply borders to all sides or individual sides, create rounded corners with `border-radius`, and even use images for decorative borders.

Borders are one of the most frequently used CSS properties. They appear in cards, buttons, tables, form inputs, dividers, and practically every UI component. Understanding the full range of border capabilities — from simple solid lines to image-based borders and advanced corner shaping — is essential for creating polished, professional interfaces.

## Learning Objectives
By the end of this module, you will be able to:
- Set border width, style, and color individually and via shorthand
- Apply borders to individual sides (top, right, bottom, left)
- Use the border shorthand property efficiently
- Create rounded corners with border-radius (all corners and individual)
- Use border-image for decorative, non-rectangular borders
- Understand the difference between border and outline
- Control how borders affect element sizing with box-sizing
- Create circles, pills, and custom shapes with border-radius
- Use border-color with currentColor for theme-aware components

## Theory

### Border Properties
Borders have three sub-properties that can be set independently or together:

```css
/* Individual properties */
border-width: 2px;
border-style: solid;
border-color: #333;

/* Shorthand — all three in one declaration */
border: 2px solid #333;

/* Individual sides */
border-top: 1px dashed red;
border-right: 2px dotted blue;
border-bottom: 3px double green;
border-left: 4px groove purple;
```

Each side can also be broken into sub-properties:
```css
border-top-width: 2px;
border-top-style: dashed;
border-top-color: red;
```

### Border Styles
CSS provides 10 distinct border styles:
- `solid` — A single solid line (most common)
- `dashed` — A series of short dashes
- `dotted` — A series of dots (appears as dashed in some older browsers at 1px)
- `double` — Two parallel solid lines (requires at least 3px width to show clearly)
- `groove` — Carved-in effect (uses border-color as base)
- `ridge` — Raised effect (opposite of groove)
- `inset` — Embedded appearance (3D effect)
- `outset` — Raised appearance (3D effect, opposite of inset)
- `none` — No border (default, removes border)
- `hidden` — Same as none, but resolves table border conflicts differently

**Important:** The default value of `border-style` is `none`. This means a border will never appear unless you explicitly set a style, even if you set a width and color.

```css
/* This will NOT show a border — style defaults to none */
.invisible-border {
  border-width: 5px;
  border-color: red;
  /* border-style is missing — no border rendered */
}

/* This WILL show a border */
.visible-border {
  border: 5px solid red;
}
```

### Border Width Values
Width can be specified as:
- Length values: `1px`, `2px`, `0.5em`, `0.1rem`
- Keyword values: `thin` (typically 1px), `medium` (typically 3px), `thick` (typically 5px)

### Individual Side Borders
Each side can have different widths, styles, and colors:
```css
/* Different styles per side */
.card {
  border-top: 3px solid #4299e1;
  border-right: 2px solid #e2e8f0;
  border-bottom: 2px solid #e2e8f0;
  border-left: 2px solid #e2e8f0;
}
/* The result is a card with a colored top accent bar */
```

### Border Shorthand
The `border` shorthand sets all four sides at once: `border: width style color;`
```css
border: 2px solid #333;         /* All sides */
border: 0;                       /* Remove all borders */
border: 2px dashed currentColor; /* Uses text color */
```

**Side-specific shorthand:**
```css
border-top: 1px solid red;
border-right: 2px dotted blue;
border-bottom: 3px double green;
border-left: 4px groove purple;
```

**Longhand precision (for overriding specific sub-properties):**
```css
.button {
  border: 2px solid #4299e1;
}
.button--selected {
  border-color: #2b6cb0;  /* Only overrides color, keeps width/style */
}
```

### Border-Radius
Creates rounded corners. Can be specified for all corners at once or individually:

```css
/* All corners equal */
border-radius: 10px;
border-radius: 50%; /* Creates a circle (with equal width/height) */

/* Individual corners */
border-top-left-radius: 10px;
border-top-right-radius: 20px;
border-bottom-right-radius: 30px;
border-bottom-left-radius: 40px;

/* Shorthand: top-left top-right bottom-right bottom-left */
border-radius: 10px 20px 30px 40px;

/* Two values: top-left+bottom-right top-right+bottom-left */
border-radius: 10px 20px;

/* Three values: top-left top-right+bottom-left bottom-right */
border-radius: 10px 20px 30px;

/* Elliptical corners: horizontal / vertical */
border-radius: 10px / 20px;  /* Horizontal 10px, vertical 20px */
border-radius: 50% / 20%;    /* Pill shape */
```

**Common shapes with border-radius:**
```css
/* Circle */
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;       /* or 9999px */
}

/* Pill (capsule) */
.pill {
  width: 200px;
  height: 50px;
  border-radius: 9999px;    /* Large enough to be fully rounded */
}

/* Rounded square */
.rounded-square {
  width: 100px;
  height: 100px;
  border-radius: 16px;
}

/* Top rounded only */
.top-rounded {
  border-radius: 16px 16px 0 0;
}
```

### Border-Image
Allows using an image as a border instead of solid colors. The image is sliced into nine sections (four corners, four edges, and the middle):
```css
border-image: url("border.png") 30 stretch;
```
The syntax: `border-image: source slice width outset repeat;`

```css
/* Complete example */
.fancy-border {
  border: 15px solid transparent;
  border-image: url("border-frame.png") 30 round;
}

/* Different repeat options */
border-image: url("border.png") 30 stretch;  /* Edges stretch (default) */
border-image: url("border.png") 30 repeat;   /* Edges tile */
border-image: url("border.png") 30 round;    /* Edges tile and scale to fit */
```

**Note:** `border-image` is rarely used in modern web design. CSS gradients and box-shadows provide more flexible alternatives for most decorative border needs.

### Border and Box-Sizing
By default, borders add to the total width and height of an element:
```css
.box {
  width: 200px;
  border: 5px solid black;
  /* Total width = 200px (content) + 5px (left) + 5px (right) = 210px */
}

/* With border-box, border is included in the width */
.box-border {
  width: 200px;
  border: 5px solid black;
  box-sizing: border-box;
  /* Total width = 200px (content is 190px + 5px + 5px) */
}
```

### Border Color with currentColor
Borders automatically use the element's `color` value if `border-color` isn't specified:
```css
.text-element {
  color: #4299e1;
  border-bottom: 2px solid; /* Inherits #4299e1 — no need to repeat */
}

/* Explicitly using currentColor */
.callout {
  color: #e53e3e;
  border-left: 4px solid currentColor; /* Matches whatever the color is */
}
```

## Visual Explanation
```
Border on the Box Model:

  ┌───── Margin ──────────────────┐
  │  ┌─── Border ──────────────┐  │
  │  │  ┌─ Padding ──────────┐ │  │
  │  │  │  ┌─ Content ─────┐ │ │  │
  │  │  │  │               │ │ │  │
  │  │  │  │               │ │ │  │
  │  │  │  └───────────────┘ │ │  │
  │  │  └─────────────────────┘ │  │
  │  └───────────────────────────┘  │
  └──────────────────────────────────┘

  Borders live between padding and margin.

Border-Radius Effect:

  ╔═══════════════════════════════╗
  ║  border-radius: 0            ║  ← Sharp corners
  ╚═══════════════════════════════╝

  ┌─────────────────────────────────┐
  │  border-radius: 10px          │  ← Rounded corners
  └─────────────────────────────────┘

     ╭─────────────────────────────╮
      │  border-radius: 20px      │  ← More rounding
      ╰─────────────────────────────╯

        ╭──────────────────────────╮
         │  border-radius: 50%    │  ← Circular (equal w/h)
         ╰──────────────────────────╯
```

## Common Mistakes
1. **Border-style required**: A border won't render unless `border-style` is set (default is `none`). Setting only width and color produces no visible border.
2. **Missing width/color**: Width defaults to `medium` (typically 3px), color defaults to `currentColor` (element's text color). Only style is truly required — but always set all three for explicit control.
3. **Border-radius on table elements**: `border-radius` may not work correctly with `border-collapse: collapse` — use `border-collapse: separate` for rounded table corners.
4. **Forgetting box-sizing**: Borders add to element dimensions by default, often breaking layouts. Use `box-sizing: border-box` to include borders in width/height.
5. **Using border shorthand and then overriding individual sides**: The shorthand sets all four sides — subsequent side-specific rules must come after it.
6. **Assuming border-radius creates a perfect circle**: For `border-radius: 50%` to make a circle, the element must have equal width and height.
7. **Over-nesting border-image**: Complex border-image usage is often better replaced with CSS gradients or box-shadow.

## Best Practices
- Use `box-sizing: border-box` globally to include borders in element dimensions (`* { box-sizing: border-box; }`)
- Use the `border` shorthand for simplicity, then override individual sides as needed
- For colored accent bars on one side, use `border-left` or `border-top` instead of full borders
- Use `transparent` borders to create space for hover effects without layout shift:
```css
.button {
  border: 2px solid transparent; /* No visible border, but space reserved */
}
.button:hover {
  border-color: #4299e1; /* Border appears without layout jump */
}
```
- Prefer CSS gradients or box-shadow over `border-image` for modern designs
- Use `currentColor` for borders that should automatically match the surrounding text color
- For accessibility, ensure focusable elements have visible focus borders

## Accessibility Considerations
- Never remove focus outlines without providing a visible alternative (use `:focus-visible` for keyboard-only focus styles)
- Ensure focus border color contrast meets WCAG AA standards (4.5:1 minimum)
- Borders used for status indicators (success/error/warning) should not rely solely on color — add icons or text labels
- Ensure clickable elements have sufficient border or padding to make tap targets at least 44×44px
- Use `outline` (not `border`) for focus indicators to avoid affecting layout

```css
/* Accessible focus border */
button:focus-visible {
  outline: 3px solid #4299e1;
  outline-offset: 2px;
  /* Use outline instead of border for focus to avoid layout shift */
}
```

## Performance Considerations
- Borders have negligible performance impact — they're rendered quickly by the browser
- `border-radius` with large values or complex shapes should be used in moderation on elements that animate
- `border-image` requires the browser to load and slice an image — adds HTTP requests
- Multiple nested elements with borders can increase DOM complexity
- Animated border-color changes trigger repaints; prefer `opacity` or `transform` for animations
- Very thick borders (10px+) are rarely needed and can cause unexpected layout behavior

## Browser Compatibility
| Property | Chrome | Firefox | Safari | Edge | Opera | IE |
|----------|--------|---------|--------|------|-------|----|
| border-width | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| border-style | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| border-color | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| border shorthand | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| border-radius | 5+ | 1+ | 3+ | 12+ | 10.5+ | 9+ |
| border-image | 16+ | 3.5+ | 6+ | 12+ | 10.5+ | 11+ |
| border-collapse | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| Separate side borders | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |

All core border properties (width, style, color, shorthand, individual sides) are supported in every browser since IE4+. `border-radius` is supported in all modern browsers and IE9+. `border-image` has good support but is less commonly used.

## Summary Notes
- Three core properties: `border-width`, `border-style`, `border-color`
- Shorthand: `border: width style color;` — style is required; default is `none`
- Ten border styles: solid, dashed, dotted, double, groove, ridge, inset, outset, none, hidden
- Individual sides: `border-top`, `border-right`, `border-bottom`, `border-left`
- `border-radius` creates rounded corners; `50%` makes circles (with equal w/h)
- `border-radius` shorthand: top-left top-right bottom-right bottom-left (like margin)
- Elliptical corners: `border-radius: h / v` (horizontal / vertical radius)
- Border adds to element's total width/height (unless `box-sizing: border-box`)
- `border-image` uses sliced images for decorative borders (rare in modern design)
- Use `border: transparent` to reserve space for hover border effects
- Never remove focus outlines without providing a visible alternative
- `currentColor` makes borders automatically match text color
- For animated borders, prefer `box-shadow` or `transform` over border changes for performance
