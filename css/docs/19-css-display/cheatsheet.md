# CSS Display — Cheatsheet
## Common Values
- `block` — full width, vertical stacking
- `inline` — horizontal flow, no width/height
- `inline-block` — inline flow with block box model
- `none` — removed from document flow
- `flex` — flexbox container (1D layout)
- `grid` — grid container (2D layout)

## Visibility vs Display
| Display: none | Visibility: hidden |
|---------------|-------------------|
| Removed from flow | Preserves space |
| Not interactive | Not interactive |
| Space reclaimed | Space still occupied |

## Default Display Values
| Block | Inline |
|-------|--------|
| div, p, h1-h6, ul, ol, li | span, a, strong, em |
| section, article, header | img (inline-block actually) |
| nav, footer, main | label, input |

## Common Patterns
```css
li { display: inline; }           /* Horizontal nav */
a { display: inline-block; }      /* Button links */
.hidden { display: none; }        /* Hide element */
```
