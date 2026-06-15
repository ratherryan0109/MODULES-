# CSS Outline — Cheatsheet
## Properties
- `outline: width style color;`
- `outline-offset: 3px;` — space between border and outline
- `outline-width`, `outline-style`, `outline-color`

## vs Border
| Outline | Border |
|---------|--------|
| Doesn't affect layout | Adds to element size |
| All sides same | Per-side styling |
| Rectangular always | Follows border-radius |
| Used for focus/debug | Used for decoration |

## Focus Accessibility
```css
/* Never do this without replacement */
:focus { outline: none; }

/* Good practice */
:focus-visible { outline: 3px solid blue; outline-offset: 2px; }
```
