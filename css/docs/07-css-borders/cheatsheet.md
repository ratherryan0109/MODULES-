# CSS Borders — Cheatsheet
## Properties
- `border: width style color;` (style is required)
- `border-top`, `border-right`, `border-bottom`, `border-left`
- `border-width`, `border-style`, `border-color`
- `border-radius: 10px;` (all corners), `border-radius: 10px 20px;`

## Border Styles
`solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset`, `none`

## border-radius
- 1 value: all corners
- 2 values: top-left+bottom-right top-right+bottom-left
- 3 values: top-left top-right+bottom-left bottom-right
- 4 values: top-left top-right bottom-right bottom-left
- `50%` creates circles with equal width/height

## Notes
- Border adds to element's width/height (unless `box-sizing: border-box`)
- border-style defaults to `none` — must be set explicitly
