# Justify Content - Cheatsheet

## Values

| Value | Behavior | Diagram |
|-------|----------|---------|
| `flex-start` | Pack at start | `[1][2][3]      ` |
| `flex-end` | Pack at end | `      [1][2][3]` |
| `center` | Center | `   [1][2][3]   ` |
| `space-between` | Space between items | `[1]   [2]   [3]` |
| `space-around` | Space around each item | `  [1]  [2]  [3] ` |
| `space-evenly` | Equal spacing everywhere | ` [1]  [2]  [3]  ` |

## Syntax
```css
.container {
  display: flex;
  justify-content: flex-start; /* default */
}
```

## Space Distribution Comparison

| Value | Before Item 1 | Between Items | After Last Item |
|-------|-------------|--------------|----------------|
| `flex-start` | 0 | gap | 0 |
| `flex-end` | 0 | gap | 0 |
| `center` | 0 | gap | 0 |
| `space-between` | 0 | ✓ equal | 0 |
| `space-around` | ✓ half | ✓ equal | ✓ half |
| `space-evenly` | ✓ equal | ✓ equal | ✓ equal |

## Safe Alignment
```css
justify-content: safe center; /* prevents clipping on overflow */
justify-content: unsafe center; /* allows clipping (default) */
```

## Alignment Properties Overview
```
justify-content  → main axis
align-items      → cross axis (single line)
align-content    → cross axis (multi-line)
align-self       → cross axis (single item)
```
