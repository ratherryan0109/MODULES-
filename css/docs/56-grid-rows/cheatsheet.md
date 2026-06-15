# Grid Rows — Quick Reference

## Row Definition with `grid-template-rows`

| Pattern | Description | Example |
|---------|-------------|---------|
| Single value | One row | `grid-template-rows: 1fr` |
| Multiple values | N rows from N values | `grid-template-rows: auto 1fr auto` |
| `repeat(N, value)` | Creates N copies of value | `repeat(3, 1fr)` |
| `repeat(auto-fill, ...)` | Fills container with rows | `repeat(auto-fill, minmax(100px, 1fr))` |

## Row Sizing Units

| Unit | Example | Behavior |
|------|---------|----------|
| `px` | `80px` | Fixed pixel height |
| `em` | `5em` | Relative to element's font-size |
| `rem` | `3rem` | Relative to root font-size |
| `%` | `20%` | Percentage of container height (needs explicit height) |
| `fr` | `1fr` | Fraction of remaining vertical space |
| `auto` | `auto` | Sizes to content height |
| `min-content` | `min-content` | Minimum height to contain content without overflow |
| `max-content` | `max-content` | Height needed for all content |
| `fit-content(N)` | `fit-content(200px)` | Clamped between min-content and N |

## The `minmax()` Function for Rows

| Syntax | Description |
|--------|-------------|
| `minmax(100px, 1fr)` | At least 100px, grows to fill space |
| `minmax(auto, 1fr)` | Content-sized minimum, flexible maximum |
| `minmax(200px, auto)` | Fixed minimum, content-determined maximum |
| `minmax(0, 1fr)` | No minimum, pure flexible |

## Item Spanning — `grid-row`

| Syntax | Description | Example |
|--------|-------------|---------|
| `grid-row: span N` | Spans N rows | `grid-row: span 2` |
| `grid-row: A / B` | From line A to line B | `grid-row: 1 / 3` |
| `grid-row: A / span N` | Start at A, span N rows | `grid-row: 2 / span 3` |
| `grid-row: 1 / -1` | Full vertical span | `grid-row: 1 / -1` |
| `grid-row-start` | Start line only | `grid-row-start: 2` |
| `grid-row-end` | End line only | `grid-row-end: span 2` |

## Implicit Tracks

| Property | Description | Example |
|----------|-------------|---------|
| `grid-auto-rows` | Sizes implicit rows | `grid-auto-rows: 150px` |
| `grid-auto-rows` (multiple) | Alternating pattern | `grid-auto-rows: 80px 120px` |

## Common Patterns

| Pattern | Use Case |
|---------|----------|
| `auto 1fr auto` | Full page with sticky footer |
| `80px 1fr 60px` | Fixed header/footer page |
| `repeat(3, 1fr)` | Equal-height rows (needs container height) |
| `auto 1fr` | Header + flexible content |
| `minmax(200px, 1fr)` | Minimum row height with flexibility |
| `repeat(2, 200px)` | Two fixed-height rows |

## Key Differences from Columns

| Aspect | Rows | Columns |
|--------|------|---------|
| Axis | Vertical | Horizontal |
| Sizing property | `grid-template-rows` | `grid-template-columns` |
| Item spanning | `grid-row` | `grid-column` |
| Implicit sizing | `grid-auto-rows` | `grid-auto-columns` |
| Needs container size | Height | Width (always available) |
