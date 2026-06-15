# CSS Margins — Cheatsheet
## Values
- `margin: 10px;` — all sides
- `margin: 10px 20px;` — top/bottom left/right
- `margin: 10px 20px 30px 40px;` — top right bottom left
- `margin: auto;` — browser calculates
- `margin: 0 auto;` — center horizontally

## Properties
- `margin-top`, `margin-right`, `margin-bottom`, `margin-left`

## Collapsing
- Vertical margins collapse to the larger value
- Only vertical (top/bottom), not horizontal (left/right)
- Only between block elements (not inline-block/flex/grid)

## Notes
- Negative margins pull elements in opposite directions
- Margins are always transparent
- Inline elements only respect left/right margins
