# Grid Alignment — Quick Reference

## Property Overview

| Property | Axis | Level | Controls |
|----------|------|-------|----------|
| `justify-items` | Row (horizontal) | Container | Horizontal alignment of items in cells |
| `align-items` | Column (vertical) | Container | Vertical alignment of items in cells |
| `justify-self` | Row (horizontal) | Item | Horizontal alignment of ONE item in cell |
| `align-self` | Column (vertical) | Item | Vertical alignment of ONE item in cell |
| `justify-content` | Row (horizontal) | Container | Horizontal distribution of tracks |
| `align-content` | Column (vertical) | Container | Vertical distribution of tracks |

## Shorthand Properties

| Shorthand | Expands To | Example |
|-----------|------------|---------|
| `place-items` | `align-items` + `justify-items` | `place-items: center` |
| `place-content` | `align-content` + `justify-content` | `place-content: center start` |
| `place-self` | `align-self` + `justify-self` | `place-self: end center` |

## Values Reference

| Value | Item Alignment | Content Alignment |
|-------|---------------|-------------------|
| `stretch` | ✓ (default) | ✓ |
| `start` | ✓ | ✓ |
| `center` | ✓ | ✓ |
| `end` | ✓ | ✓ |
| `baseline` | ✓ | ✗ |
| `space-between` | ✗ | ✓ |
| `space-around` | ✗ | ✓ |
| `space-evenly` | ✗ | ✓ |

## Memory Aid

| Phrase | Property |
|--------|----------|
| "Justify my writing" (horizontal) | `justify-*` = row/inline axis |
| "Align vertically" (vertical) | `align-*` = column/block axis |
| "Items in cells" | `*-items` / `*-self` = item level |
| "Content fills container" | `*-content` = track/container level |

## Common Patterns

| Goal | CSS |
|------|-----|
| Center all items in their cells | `place-items: center` |
| Center one item in its cell | `place-self: center` |
| Center the whole grid in container | `place-content: center` |
| Items at bottom of cells | `align-items: end` |
| Grid tracks at bottom of container | `align-content: end` |
| Equal space between tracks | `justify-content: space-evenly` |
| Stretch items to fill cells | Default behavior |

## Value Quick Guide

```
stretch ────┬─── Item fills cell (default)
start  ─────┼─── Align to beginning
center ─────┼─── Align to center
end    ─────┼─── Align to end
baseline ───┴─── Align text baselines  (items only)

space-between ───┬─── Space between, none at edges
space-around  ───┼─── Space between, half at edges  (content only)
space-evenly  ───┴─── Equal space everywhere         (content only)
```
