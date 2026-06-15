# Flex Shrink - Quick Reference

## Values
- **Default**: `1` (items shrink equally)
- **Range**: Any non-negative number
- **`flex-shrink: 0`**: Item won't shrink (maintains basis)

## Key Points
- Items shrink when total basis > container size
- Higher shrink = more reduction
- Won't shrink below content size unless `min-width: 0`

## Common Patterns

| Pattern | CSS |
|---------|-----|
| Fixed sidebar | `flex: 0 0 250px` |
| Shrinkable content | `flex: 1 1 auto` |
| Don't shrink | `flex-shrink: 0` |
| Shrink more | `flex-shrink: 3` |
