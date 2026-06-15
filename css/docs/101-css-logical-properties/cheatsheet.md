# CSS Logical Properties Cheatsheet

## Axis Terminology

| Term | Meaning | In LTR | In RTL | In Vertical |
|------|---------|--------|--------|-------------|
| **inline** | Along text line direction | horizontal | horizontal | vertical |
| **block** | Perpendicular to text lines | vertical | vertical | horizontal |
| **start** | Beginning of axis | left | right | top |
| **end** | End of axis | right | left | bottom |

## Margin & Padding

| Logical Property | Physical Equivalent | Shorthand |
|-----------------|-------------------|-----------|
| `margin-inline-start` | `margin-left` | `margin-inline: <start> <end>` |
| `margin-inline-end` | `margin-right` | `margin-inline: <all>` |
| `margin-block-start` | `margin-top` | `margin-block: <start> <end>` |
| `margin-block-end` | `margin-bottom` | `margin-block: <all>` |
| `padding-inline-start` | `padding-left` | `padding-inline: <start> <end>` |
| `padding-inline-end` | `padding-right` | `padding-inline: <all>` |
| `padding-block-start` | `padding-top` | `padding-block: <start> <end>` |
| `padding-block-end` | `padding-bottom` | `padding-block: <all>` |

## Borders

| Logical Property | Physical Equivalent |
|-----------------|-------------------|
| `border-inline-start` | `border-left` |
| `border-inline-end` | `border-right` |
| `border-block-start` | `border-top` |
| `border-block-end` | `border-bottom` |
| `border-inline` | `border-left` + `border-right` |
| `border-block` | `border-top` + `border-bottom` |

## Border Radius

| Logical Property | Physical (LTR) | Physical (RTL) |
|-----------------|----------------|----------------|
| `border-start-start-radius` | top-left | top-right |
| `border-start-end-radius` | top-right | top-left |
| `border-end-start-radius` | bottom-left | bottom-right |
| `border-end-end-radius` | bottom-right | bottom-left |

## Sizing

| Logical Property | Physical Equivalent |
|-----------------|-------------------|
| `inline-size` | `width` |
| `block-size` | `height` |
| `min-inline-size` | `min-width` |
| `min-block-size` | `min-height` |
| `max-inline-size` | `max-width` |
| `max-block-size` | `max-height` |

## Positioning (Inset)

| Logical Property | Physical Equivalent |
|-----------------|-------------------|
| `inset-inline-start` | `left` |
| `inset-inline-end` | `right` |
| `inset-block-start` | `top` |
| `inset-block-end` | `bottom` |
| `inset-inline` | `left` + `right` |
| `inset-block` | `top` + `bottom` |
| `inset` (1-4 values) | `top` + `right` + `bottom` + `left` |

## Overflow

| Logical Property | Physical Equivalent |
|-----------------|-------------------|
| `overflow-inline` | `overflow-x` |
| `overflow-block` | `overflow-y` |

## Text Alignment

| Logical Value | LTR Effect | RTL Effect |
|--------------|------------|------------|
| `text-align: start` | left | right |
| `text-align: end` | right | left |

## Quick Reference Patterns

```css
/* Center element horizontally */
.element {
  margin-inline: auto;
}

/* Horizontal centering + vertical margin */
.element {
  margin-inline: auto;
  margin-block: 16px 0;
}

/* Card with accent border */
.card {
  border-inline-start: 4px solid blue;
  padding-inline: 20px;
  padding-block: 16px;
}

/* Fixed navbar */
.navbar {
  position: fixed;
  inset: 0 0 auto 0; /* top: 0, right: 0, left: 0 */
  padding-inline: 24px;
}

/* Sticky sidebar */
.sidebar {
  position: sticky;
  inset-block-start: 20px;
}

/* Full-width separator */
.divider {
  border-block-end: 1px solid #ccc;
  margin-block: 16px;
}

/* Responsive container */
.container {
  max-inline-size: 1200px;
  margin-inline: auto;
  padding-inline: 24px;
}
```

## Browser Support Quick Reference

| Property Set | Chrome | Firefox | Safari | Edge |
|-------------|--------|---------|--------|------|
| margin/padding/border | 69+ | 41+ | 12.1+ | 79+ |
| inline/block-size | 57+ | 41+ | 12.1+ | 79+ |
| inset | 87+ | 66+ | 14.1+ | 87+ |
| border-radius (logical) | 69+ | 66+ | 12.1+ | 79+ |
| overflow (logical) | 87+ | 66+ | 16+ | 87+ |
| text-align start/end | Full | Full | Full | Full |

## Fallback Pattern

```css
/* Provide fallback, then override with @supports */
.element {
  margin-left: 16px;
}

@supports (margin-inline-start: 0) {
  .element {
    margin-left: unset;
    margin-inline-start: 16px;
  }
}
```
