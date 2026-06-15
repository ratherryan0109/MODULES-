# Grid Columns — Quick Reference

## Column Definition with `grid-template-columns`

| Pattern | Description | Example |
|---------|-------------|---------|
| Single value | One column | `grid-template-columns: 1fr` |
| Multiple values | N columns from N values | `grid-template-columns: 200px 1fr 200px` |
| `repeat(N, value)` | Creates N copies of value | `repeat(3, 1fr)` = `1fr 1fr 1fr` |
| `repeat(N, pattern)` | Repeats a multi-value pattern | `repeat(2, 100px 1fr)` = `100px 1fr 100px 1fr` |
| `repeat(auto-fill, ...)` | Fills row with as many tracks as fit | `repeat(auto-fill, minmax(200px, 1fr))` |
| `repeat(auto-fit, ...)` | Fills row and collapses empty tracks | `repeat(auto-fit, minmax(200px, 1fr))` |

## Sizing Units for Columns

| Unit | Example | Description |
|------|---------|-------------|
| `px` | `200px` | Fixed pixel width |
| `em` | `20em` | Relative to element's font-size |
| `rem` | `15rem` | Relative to root font-size |
| `%` | `25%` | Percentage of container width |
| `fr` | `1fr` | Fraction of remaining space (flexible) |
| `auto` | `auto` | Sizes to content width |
| `min-content` | `min-content` | Narrowest possible without overflow |
| `max-content` | `max-content` | Width needed for content without wrapping |
| `fit-content(N)` | `fit-content(300px)` | Clamps between min-content and N |

## The `minmax()` Function

| Syntax | Description | Example |
|--------|-------------|---------|
| `minmax(min, max)` | Track between min and max | `minmax(200px, 1fr)` |
| `minmax(auto, 1fr)` | Auto minimum, flexible maximum | `minmax(auto, 1fr)` |
| `minmax(100px, auto)` | Minimum enforced, grows with content | `minmax(100px, auto)` |
| `minmax(0, 1fr)` | No minimum, pure flexible | `minmax(0, 1fr)` |

## Item Spanning — `grid-column`

| Syntax | Description | Example |
|--------|-------------|---------|
| `grid-column: span N` | Spans N columns from auto position | `grid-column: span 2` |
| `grid-column: A / B` | Spans from line A to line B | `grid-column: 1 / 3` |
| `grid-column: A / span N` | Starts at line A, spans N columns | `grid-column: 2 / span 3` |
| `grid-column: 1 / -1` | Full width (first to last line) | `grid-column: 1 / -1` |
| `grid-column-start` | Start line only | `grid-column-start: 2` |
| `grid-column-end` | End line only | `grid-column-end: span 2` |

## Named Grid Lines

| Syntax | Description | Example |
|--------|-------------|---------|
| `[name]` | Names a line | `[sidebar] 250px [content] 1fr [end]` |
| `[name-start]` / `[name-end]` | Paired naming convention | `[main-start] 1fr [main-end]` |
| Multiple names | Space-separated names | `[sidebar main-start] 250px` |

## Common Responsive Patterns

| Pattern | Use Case |
|---------|----------|
| `repeat(3, 1fr)` | Three equal columns (desktop) |
| `repeat(auto-fit, minmax(250px, 1fr))` | Responsive cards without media queries |
| `200px 1fr 200px` | Holy Grail layout (sidebar/content/sidebar) |
| `1fr 2fr` | Two-column with main content double width |
| `repeat(2, 1fr 2fr)` | Alternating wide/narrow pattern |
| `minmax(200px, 1fr) minmax(300px, 2fr)` | Column-specific minmax constraints |

## Key Differences

| Concept | Column Property | Row Equivalent |
|---------|----------------|----------------|
| Track definition | `grid-template-columns` | `grid-template-rows` |
| Item spanning | `grid-column` | `grid-row` |
| Start line | `grid-column-start` | `grid-row-start` |
| End line | `grid-column-end` | `grid-row-end` |
| Implicit track size | `grid-auto-columns` | `grid-auto-rows` |
