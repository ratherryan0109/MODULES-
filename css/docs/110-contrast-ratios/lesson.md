# Module 110: Contrast Ratios

## Introduction
Contrast ratio is the measure of luminance difference between foreground and background colors. Proper contrast is fundamental to web accessibility — low contrast makes text unreadable for users with low vision, color deficiencies, or poor lighting conditions. This module teaches the mathematics, tools, and CSS techniques for achieving compliant contrast ratios. Understanding contrast is essential for any professional web developer, as it directly impacts readability, user engagement, and legal compliance with accessibility standards.

## Learning Objectives
1. Understand the W3C formula for relative luminance and contrast ratio
2. Calculate contrast ratios mathematically
3. Apply WCAG AA and AAA contrast thresholds to designs
4. Use CSS techniques to improve contrast dynamically
5. Test contrast with browser DevTools and automated tools
6. Handle contrast for text over images and gradients
7. Implement high-contrast mode support with CSS
8. Design accessible data visualizations with sufficient contrast
9. Audit and fix contrast issues in existing projects
10. Build automated contrast checking into workflows

## Theory

### Beginner Level
Contrast ratio compares the brightness difference between two colors. WCAG defines a ratio range from 1:1 (identical colors) to 21:1 (black on white). The minimum acceptable ratio for readable text is 4.5:1. Light gray text on white (#ccc on #fff) has only ~1.6:1 ratio — far too low for readability. The 4.5:1 threshold is not arbitrary — it's based on research showing that people with 20/40 vision (typical for older adults) can read text at this contrast level without difficulty.

Color combinations that commonly fail contrast:
- Gray text on white backgrounds (#999 on #fff = 2.8:1)
- Yellow text on white backgrounds (#ff0 on #fff = 1.1:1)
- Light blue on white (#aaddff on #fff = 1.3:1)
- Dark text on dark images without overlay
- Placeholder text (often 50-60% opacity on white)

### Intermediate Level
The contrast formula uses relative luminance (L), calculated as: L = 0.2126R + 0.7152G + 0.0722B, where R/G/B are gamma-corrected (linearized) sRGB values. The contrast ratio = (L1 + 0.05) / (L2 + 0.05), where L1 is the lighter color. This is defined in WCAG 2.1 section 1.4.3.

The gamma correction step (also called "linearization"): each sRGB channel value (0-255) is divided by 255, then:
- If the value ≤ 0.04045: linearize by dividing by 12.92
- If the value > 0.04045: linearize by ((value + 0.055) / 1.055)^2.4

The resulting linear values are used in the luminance formula. This is why `#777777` on `#ffffff` fails (2.2:1) while intuition might suggest it's readable.

### Advanced Level
Modern CSS can compute contrast ratios at build time or runtime. The `color-contrast()` function (experimental, defined in CSS Color Level 6) selects a color that meets contrast requirements from a palette. Pre-processors like Sass can implement contrast ratio calculations with custom functions. For images, use pseudo-elements with semi-transparent overlays to ensure text contrast regardless of the underlying image.

The APCA (Advanced Perceptual Contrast Algorithm), proposed for WCAG 3.0, improves on the WCAG 2.x formula by:
- Accounting for font size and weight (thinner text needs more contrast)
- Using perceptually uniform color spaces (L*, not linear luminance)
- Weighting contrast by spatial frequency (small details need more contrast)
- Producing negative values for light-on-dark combinations (directional contrast)

### WCAG Thresholds Summary

| Level | Normal Text | Large Text (18px bold / 24px regular) | UI Components |
|-------|-------------|--------------------------------------|---------------|
| AA    | 4.5:1       | 3:1                                  | 3:1           |
| AAA   | 7:1         | 4.5:1                                | —             |

## Syntax

```css
/* Text over image with contrast overlay */
.hero {
  position: relative;
  background-image: url('hero.jpg');
}
.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}
.hero-content {
  position: relative;
  z-index: 1;
  color: #fff;
}

/* Dynamic contrast with CSS variables */
:root {
  --bg: #ffffff;
  --text: #333333;
}
@media (prefers-contrast: more) {
  :root {
    --bg: #ffffff;
    --text: #000000;
  }
}
@media (prefers-contrast: less) {
  :root {
    --bg: #f5f5f5;
    --text: #595959;
  }
}

/* Text shadow for contrast on varying backgrounds */
.text-overlay {
  color: white;
  text-shadow:
    0 0 4px rgba(0,0,0,0.5),
    0 2px 4px rgba(0,0,0,0.3);
}

/* Large text has relaxed requirements */
.large-text {
  font-size: 1.5rem;
  font-weight: 700;
  /* AA minimum: 3:1 for large text */
}

/* Gradient overlay for text readability */
.gradient-overlay {
  position: relative;
}
.gradient-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0,0,0,0.7) 0%,
    rgba(0,0,0,0.3) 50%,
    transparent 100%
  );
}

/* CSS custom property fallback for contrast-safe colors */
:root {
  --text-color: #333333;
  --text-safe: oklch(from var(--text-color) l c h);
}
```

## Examples

### Calculating Contrast Ratio
```javascript
// JavaScript contrast ratio calculator
function getContrastRatio(hex1, hex2) {
  const l1 = getLuminance(hexToRgb(hex1));
  const l2 = getLuminance(hexToRgb(hex2));
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

// Helper to get relative luminance
function getLuminance([r, g, b]) {
  const [linR, linG, linB] = [r, g, b].map(c => {
    const s = c / 255;
    return s <= 0.04045
      ? s / 12.92
      : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * linR + 0.7152 * linG + 0.0722 * linB;
}
```

### Sass Contrast Function
```scss
@function luminance($color) {
  $colors: (red($color), green($color), blue($color));
  $values: ();
  @each $c in $colors {
    $s: $c / 255;
    @if $s <= 0.04045 {
      $values: append($values, $s / 12.92);
    } @else {
      $values: append($values, Math.pow(($s + 0.055) / 1.055, 2.4));
    }
  }
  @return 0.2126 * nth($values, 1) + 0.7152 * nth($values, 2) + 0.0722 * nth($values, 3);
}

@function contrast-ratio($c1, $c2) {
  $l1: luminance($c1);
  $l2: luminance($c2);
  @if $l1 > $l2 {
    @return ($l1 + 0.05) / ($l2 + 0.05);
  } @else {
    @return ($l2 + 0.05) / ($l1 + 0.05);
  }
}
```

## Visual Explanation

| Example | Foreground | Background | Ratio | WCAG |
|---------|-----------|------------|-------|------|
| Excellent | #000000 | #FFFFFF | 21:1 | AAA |
| Good | #333333 | #FFFFFF | 10.6:1 | AAA |
| AA Pass | #595959 | #FFFFFF | 7:1 | AAA |
| AA Pass | #767676 | #FFFFFF | 4.5:1 | AA |
| Fail | #999999 | #FFFFFF | 2.8:1 | ❌ |
| Fail | #CCCCCC | #FFFFFF | 1.6:1 | ❌ |

```
Visualizing Luminance Steps:

  #FFFFFF ─── L = 1.000 (brightest)
  #DDDDDD ─── L = 0.705
  #BBBBBB ─── L = 0.483
  #999999 ─── L = 0.302
  #777777 ─── L = 0.166
  #555555 ─── L = 0.074
  #333333 ─── L = 0.025
  #000000 ─── L = 0.000 (darkest)

  WCAG thresholds on white (#fff):
  4.5:1 needs L ≤ 0.087  (≈ #6B6B6B)
  3:1   needs L ≤ 0.175  (≈ #888888)
  7:1   needs L ≤ 0.040  (≈ #4A4A4A)
```

## Common Mistakes
- Using brand colors that don't meet contrast minimums — brand guidelines often prioritize aesthetics over accessibility; create accessible brand color variants
- Ignoring contrast on hover/focus states — focus indicators and hover states must also meet WCAG contrast requirements
- Thin fonts (100-300 weight) with insufficient contrast — thin strokes reduce perceived legibility; use heavier weights or higher contrast for thin text
- Text over busy background images — without an overlay, contrast varies unpredictably across the image
- Not testing disabled states (which often have reduced contrast) — disabled buttons typically use faded colors that may fall below minimum contrast
- Assuming "web safe" colors are accessible — web safe colors have no relation to contrast ratios
- Using opacity to create "lighter" colors — `opacity: 0.5` on black text over white creates gray, but the actual contrast depends on the background
- Not testing in different lighting conditions — bright outdoor light reduces perceived contrast
- Forgetting about icon and chart contrast — icons need minimum 3:1 ratio against their background
- Relying on automated tools alone — some contrast issues (text on gradients, overlapping elements) require manual inspection

## Best Practices
- Start with accessible brand colors, then use light/dark variants for different contexts
- Use a contrast checker before finalizing any design system color
- Maintain 4.5:1 minimum even for placeholder text (WCAG 2.1 clarifies placeholder text is included)
- For icons, use 3:1 minimum against background (WCAG 2.1 Non-text Contrast, SC 1.4.11)
- Provide a "high contrast" toggle for complex UIs as a supplement to system-level preferences
- Test with actual color-blindness simulators (not just contrast checkers)
- Use CSS custom properties for all text colors — makes global contrast adjustments straightforward
- Build contrast checking into your CI/CD pipeline with tools like axe-core or Pa11y
- Create accessible color ramps where each step has a predictable contrast ratio from adjacent steps
- For text over images, ensure the overlay provides sufficient contrast across the entire image area

## Accessibility
- Users with low vision (20/40 or worse) need 4.5:1 minimum — this affects ~15% of adults over 50
- Users with cataracts benefit from 7:1 or higher — cataracts scatter light and reduce perceived contrast
- Glare on mobile screens outdoors requires high contrast — test designs in bright sunlight conditions
- Dark mode needs equally careful contrast ratios — pure white text on pure black (#fff on #000) causes eye strain (halation effect); use off-white (#e0e0e0) on dark gray (#1a1a1a) instead
- Consider reading distance: farther text (TV screens, presentations) needs higher contrast
- Cognitive disabilities: users with dyslexia or reading difficulties benefit from higher contrast
- Always respect `prefers-contrast: more` and `prefers-contrast: less` system preferences
- The `forced-colors: active` media query in Windows High Contrast Mode overrides all page colors — ensure content is still understandable

## Performance
- Contrast ratio calculations are done at design time, not runtime — CSS doesn't compute contrast dynamically (yet)
- CSS `text-shadow` for contrast improvement has minimal performance cost (composited in modern browsers)
- Using `mix-blend-mode` for contrast overlays may affect paint performance — use `background: rgba()` instead for better performance
- Multiple semi-transparent overlays can increase the number of compositing layers and GPU memory usage
- The `prefers-contrast` media query has zero performance impact — it's evaluated once on load
- CSS custom property changes that affect contrast (switching themes) may trigger repaints but are generally efficient
- Pre-computing contrast-safe color values at build time avoids any runtime calculation overhead

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| `prefers-contrast` | 96+ | 101+ | 14.1+ | 96+ |
| `forced-colors` | 89+ | 102+ | 14.1+ | 89+ |
| `color-contrast()` | ❌ | ❌ | ❌ | ❌ |
| CSS Relative Colors | 111+ | 113+ | 16.2+ | 111+ |
| `prefers-color-scheme` | 76+ | 67+ | 12.1+ | 79+ |
| `text-shadow` | 2+ | 3.5+ | 1+ | 12+ |

The `color-contrast()` function is still experimental and not yet supported in any browser as of 2025. The `prefers-contrast` media query has broad support. For the most robust cross-browser solution, pre-compute contrast-safe values at design time or build time using tools or pre-processors. The Windows High Contrast Mode (`forced-colors`) is supported in all modern browsers on Windows.

## Summary Notes
- Contrast ratio formula is standardized by WCAG: (L1 + 0.05) / (L2 + 0.05)
- 4.5:1 is the WCAG AA minimum for normal text; 3:1 for large text; 7:1 for AAA
- Test text over images using pseudo-element overlays (`rgba(0,0,0,0.5)` and similar)
- Use CSS custom properties (`--text`, `--bg`) to manage contrast across themes and preference states
- Support `prefers-contrast` for both `more` and `less` user preferences
- Automated tools catch ~80% of contrast issues; manual visual testing catches the rest
- The APCA algorithm (WCAG 3.0) will use perceptual color spaces and account for font size/weight
- Always test disabled states, focus indicators, placeholder text, and non-text elements
- Build accessible brand color variants from the start — don't retrofit accessibility
- Good contrast benefits all users, not just those with disabilities — it improves readability in all conditions
