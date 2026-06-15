# Flex Shorthand - Quick Reference

## Common Values

| Value | Grow | Shrink | Basis | Description |
|-------|------|--------|-------|-------------|
| `flex: initial` | 0 | 1 | auto | Default; content-sized, can shrink |
| `flex: auto` | 1 | 1 | auto | Content-sized, can grow & shrink |
| `flex: none` | 0 | 0 | auto | Fixed content size |
| `flex: 1` | 1 | 1 | 0 | Equal distribution |
| `flex: 2` | 2 | 1 | 0 | Double growth |
| `flex: 1 1 300px` | 1 | 1 | 300px | Responsive card |

## Single Value Rules
- Single number (e.g., `flex: 1`) → sets flex-grow, basis becomes 0
- Single length (e.g., `flex: 300px`) → sets flex-basis
- Keywords: `initial`, `auto`, `none`

## Best Practice
**Always use the `flex` shorthand** instead of individual properties.
