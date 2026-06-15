# Color Accessibility Cheatsheet

## WCAG 2.1 Contrast Ratios

| Text Type | AA Minimum | AAA Minimum |
|-----------|-----------|-------------|
| Normal text | 4.5:1 | 7:1 |
| Large text (≥18px bold/24px) | 3:1 | 4.5:1 |
| UI components & graphics | 3:1 | 3:1 |

## Color Vision Deficiencies

| Type | Affected Colors | Population |
|------|----------------|------------|
| Deuteranopia | Green | 6% males |
| Protanopia | Red | 2% males |
| Tritanopia | Blue-Yellow | <1% |
| Achromatopsia | All | 0.003% |

## CSS Properties & Media Queries

| Feature | Code |
|---------|------|
| Forced colors detection | `@media (forced-colors: active) {}` |
| Contrast preference | `@media (prefers-contrast: high) {}` |
| Prevent forced-color override | `forced-color-adjust: none` |
| OKLCH color | `oklch(l c h / a)` |
| Color mixing | `color-mix(in oklch, color1, color2)` |
| Form accent color | `accent-color: #hex` |

## Safe Color Pairs

| Background | Text Color | Ratio |
|------------|-----------|-------|
| #FFFFFF | #595959 | 7:1 AAA |
| #FFFFFF | #767676 | 4.5:1 AA |
| #000000 | #FFFFFF | 21:1 |
| #000000 | #A0A0A0 | 10:1 |

## Testing Tools

| Tool | Purpose |
|------|---------|
| WebAIM Contrast Checker | Online contrast validation |
| Colour Contrast Analyser | Desktop tool by TPGi |
| Chrome DevTools Rendering | Simulate CVD in browser |
| axe DevTools | Automated accessibility audit |
| Lighthouse | Accessibility scoring |

## Do's and Don'ts

| Do | Don't |
|----|-------|
| Combine color with text/icons | Convey info by color alone |
| Underline links | Rely on color for links |
| Use semantic color names in CSS | Hardcode inaccessible colors |
| Test with grayscale simulation | Assume all users see color same |
| Use `focus-visible` outlines | Remove focus indicators |
