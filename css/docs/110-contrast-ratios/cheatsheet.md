# Contrast Ratios Cheatsheet

## WCAG 2.1 Requirements

| Text / Component | AA | AAA |
|-----------------|-----|------|
| Normal text | 4.5:1 | 7:1 |
| Large text (≥18px bold / 24px) | 3:1 | 4.5:1 |
| UI components & graphics | 3:1 | — |
| Logos (text in logo) | No requirement | — |

## Luminance Formula

```
Linearize: v' = v/255; if v' <= 0.03928: v'/12.92 else ((v'+0.055)/1.055)^2.4
Luminance: L = 0.2126*R + 0.7152*G + 0.0722*B
Contrast:  (L1 + 0.05) / (L2 + 0.05)   where L1 > L2
```

## Common Color Ratios (on white)

| Color | Hex | Ratio | Status |
|-------|-----|-------|--------|
| Black | #000000 | 21:1 | AAA |
| Dark gray | #333333 | 10.6:1 | AAA |
| Medium gray | #595959 | 7:1 | AAA |
| Gray | #767676 | 4.5:1 | AA |
| Light gray | #999999 | 2.8:1 | FAIL |
| Lighter gray | #BBBBBB | 1.8:1 | FAIL |

## CSS Techniques

| Goal | Technique |
|------|-----------|
| Improve text-over-image contrast | `text-shadow: 0 2px 4px rgba(0,0,0,0.5)` |
| Dark overlay for text on images | `::after { background: rgba(0,0,0,0.5) }` |
| User contrast preference | `@media (prefers-contrast: more) { }` |
| Forced colors support | `@media (forced-colors: active) { }` |
| High contrast toggle | `.high-contrast { --text: #000; --bg: #fff }` |

## Testing Tools

| Tool | Type | Link |
|------|------|------|
| WebAIM Contrast Checker | Online | webaim.org/resources/contrastchecker/ |
| Whocanuse | Online | whocanuse.com |
| Colour Contrast Analyser | Desktop | tpgicontrastchecker.com |
| Chrome DevTools | Browser | Elements → Styles → Color picker |
| axe DevTools | Extension | Browser extension |
| Lighthouse | Automated | DevTools → Lighthouse |

## Safe Design Practices

- Start with #767676 as minimum text on white
- Use #595959 for better readability (AAA)
- On dark backgrounds, use #CCCCCC minimum
- Test all interactive states (hover, focus, active, disabled)
- Check contrast for placeholder, helper, and error text
- Maintain 3:1 for icons and UI components
