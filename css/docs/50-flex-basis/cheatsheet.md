# Flex Basis - Quick Reference

## Values
| Value | Behavior |
|-------|----------|
| `auto` (default) | Uses content size or width/height |
| `0` | Starts from zero; ignores content |
| `<length>` | Fixed size (px, em, rem, %) |
| `content` | Based on content (newer, limited support) |

## Direction Effect
- `flex-direction: row` → basis = width
- `flex-direction: column` → basis = height

## Common Patterns

| Pattern | CSS |
|---------|-----|
| Equal columns | `flex: 1` (basis: 0) |
| Content-aware flexible | `flex: auto` (basis: auto) |
| Responsive card | `flex: 1 1 300px` |
| Fixed size | `flex: 0 0 200px` |
