# Module 109: Color Accessibility

## Introduction
Color accessibility ensures that web content is perceivable by users with various forms of color vision deficiency (CVD), which affects approximately 1 in 12 men and 1 in 200 women worldwide. This module covers how to use CSS responsibly to create inclusive designs that don't rely solely on color to convey information. Color accessibility is a fundamental pillar of web accessibility — it intersects with WCAG Success Criteria across multiple guidelines and impacts every visual element on a page.

## Learning Objectives
1. Understand the types and prevalence of color vision deficiencies
2. Apply WCAG color requirements to CSS designs
3. Use CSS techniques that maintain meaning without color alone
4. Implement accessible color palettes using CSS custom properties
5. Test and validate color accessibility with developer tools
6. Design high-contrast modes and themes
7. Combine color with patterns, icons, and text labels
8. Handle `forced-colors` and `prefers-contrast` media queries
9. Audit existing CSS for color-dependent information
10. Build a color accessibility checklist for projects

## Theory

### Beginner Level
Color accessibility means designing interfaces so information is not conveyed through color alone. Users with color blindness (deuteranopia, protanopia, tritanopia) cannot distinguish certain color combinations. The most common issue is red-green color blindness (deuteranopia), affecting approximately 6% of males. Other forms include protanopia (difficulty with red light), tritanopia (difficulty with blue-yellow, much rarer), and monochromacy (complete color blindness, very rare).

When designing with accessibility in mind, avoid these problematic color pairs:
- Red / Green (most common issue)
- Green / Brown
- Blue / Purple
- Green / Blue
- Light Green / White

### Intermediate Level
WCAG 2.1 AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text (18px bold or 24px regular). WCAG AAA requires 7:1 for normal text and 4.5:1 for large text. These ratios apply to text against its background, including text over images and gradients. The ratios are calculated using the relative luminance formula specified in WCAG 2.1.

WCAG 2.2 maintains these same contrast requirements. The upcoming WCAG 3.0 (still in development as of 2025) proposes a new contrast method called APCA (Accessible Perceptual Contrast Algorithm), which accounts for spatial frequency, font weight, and context — making contrast evaluation more nuanced and accurate.

### Advanced Level
Accessible color systems use perceptual color spaces like OKLCH or LCH rather than sRGB for even perceived brightness. Modern CSS supports `color-mix()`, `oklch()`, and relative color syntax for programmatic accessible palette generation. The `@media (forced-colors: active)` query detects Windows High Contrast Mode, and `prefers-contrast: more/less` detects user contrast preferences.

Perceptual color spaces (OKLCH, Lab, LCH) maintain consistent perceived brightness regardless of hue. This is critical for accessibility because:
- Two colors with the same lightness in OKLCH have the same perceived brightness
- Hue changes don't create unexpected contrast variations
- You can programmatically generate accessible color ramps with uniform contrast steps

### Types of Color Vision Deficiency

| Type | Prevalence (Males) | Affected Colors | Safe Alternatives |
|------|-------------------|-----------------|-------------------|
| Deuteranopia | ~6% | Red vs Green | Blue vs Orange |
| Protanopia | ~2% | Red vs Green | Blue vs Brown |
| Tritanopia | ~0.01% | Blue vs Yellow | Red vs Gray |
| Monochromacy | ~0.003% | All colors | Luminance only |

## Syntax

```css
/* CSS custom properties for accessible palette */
:root {
  --primary: oklch(50% 0.2 240);
  --primary-text: oklch(95% 0.02 240);
  --error: oklch(50% 0.25 30);
  --error-bg: oklch(90% 0.1 30);
  --success: oklch(50% 0.2 150);
  --success-bg: oklch(90% 0.08 150);
}

/* Ensure info not conveyed by color alone */
.error-message {
  color: var(--error);
  background: var(--error-bg);
}

.error-message::before {
  content: "⚠ Error: ";
  font-weight: bold;
}

/* High contrast mode support */
@media (forced-colors: active) {
  .button {
    border: 2px solid ButtonText;
  }
  .status-dot {
    forced-color-adjust: none;
  }
}

/* User preference for contrast */
@media (prefers-contrast: high) {
  :root {
    --primary: oklch(35% 0.25 240);
    --primary-text: oklch(98% 0.01 240);
  }
}

@media (prefers-contrast: less) {
  :root {
    --primary: oklch(60% 0.15 240);
    --primary-text: oklch(90% 0.02 240);
  }
}

/* Color mixing for accessible variants */
:root {
  --primary-accessible: color-mix(in oklch, var(--primary), var(--primary-text) 30%);
}

/* Relative color syntax for contrast adjustment */
.alert {
  --bg: oklch(from var(--error) l c h / 0.15);
  background: var(--bg);
}
```

## Examples

### Bad: Color-only indicators
```css
/* ❌ Relies on color alone */
.status-valid { color: green; }
.status-invalid { color: red; }
```

### Good: Color + Icon + Text
```css
/* ✅ Multiple indicators */
.status-valid {
  color: green;
}
.status-valid::before {
  content: "✓ ";
}
.status-invalid {
  color: red;
}
.status-invalid::before {
  content: "✗ ";
}
```

### Accessible Chart Colors
```css
/* Accessible color palette for charts */
.chart-series {
  --series-1: oklch(55% 0.15 240);   /* Blue */
  --series-2: oklch(60% 0.2 70);     /* Orange */
  --series-3: oklch(50% 0.1 160);    /* Teal */
  --series-4: oklch(40% 0.15 340);   /* Magenta */
  /* All distinguishable by color blindness types */
}

/* Pattern + color for bar charts */
.bar-series-1 {
  background: repeating-linear-gradient(
    45deg, transparent, transparent 4px,
    rgba(0,0,0,0.1) 4px, rgba(0,0,0,0.1) 8px
  );
}
```

### Using currentColor for Theme Consistency
```css
.icon {
  color: inherit; /* respects parent text color */
}

.button {
  color: #0066cc;
}
.button .icon {
  color: currentColor; /* matches button text */
}
```

## Visual Explanation

| Condition | Cannot Distinguish | Safe Color Pairs |
|-----------|-------------------|-----------------|
| Deuteranopia | Red vs Green | Blue vs Orange |
| Protanopia | Red vs Green | Blue vs Brown |
| Tritanopia | Blue vs Yellow | Red vs Gray |
| Monochromacy | All colors | Luminance only |

```
Accessible Color Decision Flow:

  Do you need to convey information with color?
           │
           ▼
         Yes
           │
           ▼
  Is there a text label, icon, or pattern?
           │
      ┌────┴────┐
      │         │
     Yes        No
      │         │
      │    ┌────┴────┐
      │    │  ADD A  │
      │    │  LABEL  │
      │    └─────────┘
      ▼
  Does contrast meet WCAG AA?
           │
      ┌────┴────┐
      │         │
     Yes        No
      │         │
    Done   ┌────┴────┐
           │  ADJUST │
           │  COLOR  │
           └─────────┘
```

## Common Mistakes
- Using green for "success" and red for "error" without text labels — color blind users can't distinguish them
- Low contrast text on background images without overlay — the image's varying colors make parts of the text unreadable
- Using only color to indicate required form fields (red asterisk) — use `aria-required` and text labels
- Ignoring focus indicators for keyboard users — focus rings must have sufficient contrast against all backgrounds
- Not testing with grayscale simulation — if your UI works in grayscale, it works for monochromacy and most CVD
- Using brand colors that fail contrast checks — brand colors often need accessible variants for text use
- Assuming high contrast mode takes care of everything — `forced-colors` only applies in Windows, not all users have it enabled
- Forgetting about link underline contrast — underlines can be hard to see for users with low vision
- Overlooking disabled state contrast — disabled buttons often use low-contrast colors that fail WCAG

## Best Practices
- Use the 60-30-10 rule for accessible color distribution (60% neutral, 30% primary, 10% accent)
- Provide visible labels alongside color cues — always pair color with text, icons, or patterns
- Test with simulators (Chrome DevTools Rendering tab, Colorblindly extension)
- Use tools: WebAIM Contrast Checker, Colour Contrast Analyser (CCA), axe DevTools
- Design for grayscale readability first — if it works in grayscale, it works for most color blindness
- Use `currentColor` and CSS custom properties for theme consistency
- Maintain minimum contrast ratios even for placeholder text, borders, and icons
- Provide accessible color variants for brand colors that don't meet minimum contrast
- Use OKLCH color space for perceptually uniform color ramps
- Build accessible charts with patterns, textures, and labels alongside color
- Automate color contrast testing in CI/CD pipelines

## Accessibility
- Support `prefers-contrast: more` and `prefers-contrast: less` for user contrast preferences
- Honor `forced-colors: active` for Windows High Contrast Mode — ensure information is preserved
- Use `forced-color-adjust: none` only when absolutely necessary for custom indicators (and provide accessible alternatives)
- Never disable user-agent focus styles without providing better alternatives
- Use `aria-hidden="true"` on purely decorative colored elements
- Provide `aria-label` or visible text descriptions for color-coded information
- Test with browser zoom at 400% — high contrast needs and zoom often go together
- Consider elderly users who may have both low vision and color vision deficiency

## Performance
- CSS custom properties for colors have negligible performance impact — they are resolved during style calculation
- OKLCH color space calculations are handled by the browser engine with no runtime overhead
- Media queries for accessibility preferences do not affect paint cost or reflow
- `color-mix()` function is computed at style time — no runtime penalty
- Forced-colors mode applies system colors, which may reduce paint complexity (beneficial for performance)
- Using pre-computed contrast-safe color values is more performant than runtime contrast calculation
- CSS custom properties provide better caching than Sass variables (browser-native)

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| `oklch()` | 111+ | 113+ | 15.4+ | 111+ |
| `color-mix()` | 111+ | 113+ | 16.2+ | 111+ |
| `prefers-contrast` | 96+ | 101+ | 14.1+ | 96+ |
| `forced-colors` | 89+ | 102+ | 14.1+ | 89+ |
| Relative color syntax | 111+ | 113+ | 16.2+ | 111+ |
| `currentColor` | 1+ | 1+ | 1+ | 12+ |
| `prefers-color-scheme` | 76+ | 67+ | 12.1+ | 79+ |

The OKLCH color space is supported in all modern browsers since early 2023. For older browsers, provide sRGB fallbacks: `color: oklch(50% 0.2 240); color: #0055cc;`. The `prefers-contrast` and `forced-colors` media queries have broad modern support. Consider using the `@supports` at-rule for progressive enhancement with newer color functions.

## Summary Notes
- Color accessibility ensures content is perceivable by users with color vision deficiency (1 in 12 men affected)
- Minimum contrast ratio: 4.5:1 for normal text, 3:1 for large text (WCAG AA)
- Never convey information through color alone — always pair with text, icons, or patterns
- Use modern CSS color spaces (OKLCH) for perceptual uniformity and predictable contrast
- Support `prefers-contrast`, `forced-colors`, and `prefers-color-scheme` media queries
- Test with color blindness simulators and grayscale mode in DevTools
- Use tools: WebAIM Contrast Checker, axe DevTools, Colour Contrast Analyser
- The 60-30-10 rule helps create accessible color distributions
- Automate contrast checking in CI/CD pipelines for consistent quality
- Accessible color design benefits all users, not just those with disabilities — better readability improves UX for everyone
