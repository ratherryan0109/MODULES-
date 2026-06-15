# Flex Grow - Quick Reference

## Values
- **Default**: `0` (items don't grow)
- **Range**: Any non-negative number
- **Behavior**: Proportional distribution of extra space

## Growth Calculation
```
Extra space × (item_grow / total_grow)
```

## Common Patterns

| Pattern | CSS |
|---------|-----|
| Equal columns | `flex: 1` (grow: 1, basis: 0) |
| Proportional (1:2:1) | `flex: 1`, `flex: 2`, `flex: 1` |
| Sidebar + Content | sidebar: `flex: 1`, content: `flex: 3` |
| Fixed + Flexible | fixed: `flex: 0 0 200px`, flex: `flex: 1` |

## Key Points
- Only works when there's free space
- Items with same grow + basis 0 are equal width
- Higher grow = larger share of extra space
