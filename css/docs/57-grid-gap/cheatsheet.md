# Grid Gap — Quick Reference

## Gap Properties

| Property | Description | Example |
|----------|-------------|---------|
| `gap` | Shorthand for row-gap + column-gap | `gap: 20px` |
| `gap` (two values) | row-gap column-gap | `gap: 20px 10px` |
| `row-gap` | Vertical gap between rows | `row-gap: 30px` |
| `column-gap` | Horizontal gap between columns | `column-gap: 15px` |
| `grid-gap` | Legacy name (deprecated) | `grid-gap: 20px` |

## Common Values

| Value | Effect | Example |
|-------|--------|---------|
| `0` | No spacing (default) | `gap: 0` |
| `4px` to `8px` | Tight spacing (mobile cards) | `gap: 4px` |
| `12px` to `20px` | Medium spacing (standard layouts) | `gap: 16px` |
| `24px` to `40px` | Generous spacing (desktop) | `gap: 32px` |
| `2rem` | Relative to font size | `gap: 2rem` |
| `10%` | Percentage of container | `gap: 10%` |

## Gap vs Alternatives

| Aspect | `gap` | Margins | Padding |
|--------|-------|---------|---------|
| Applied to | Container | Items | Container |
| Between tracks | ✓ | Can be made to work | ✗ |
| At edges | ✗ | ✓ (undesired) | ✓ |
| Single declaration | ✓ | ✗ | ✓ |
| Negative values | ✗ | ✓ | ✗ |
| Flexbox support | ✓ (modern) | ✓ | ✓ |
| Grid support | ✓ | ✓ | ✓ |

## Rules of Thumb

| Rule | Why |
|------|-----|
| Use `gap` over margins for grid spacing | One property, no edge spacing, predictable |
| Add `padding` for outer container spacing | Gap doesn't create edge space |
| Use `row-gap` and `column-gap` for asymmetric layouts | Independent control of both axes |
| Increase gap at larger viewports | More space = more breathing room |
| Always use `gap` in Flexbox too | Better than margins for flex children |

## Legacy Reference

| Old Name | New Name | Browser Support |
|----------|----------|-----------------|
| `grid-gap` | `gap` | Both work in modern browsers |
| `grid-row-gap` | `row-gap` | Both work in modern browsers |
| `grid-column-gap` | `column-gap` | Both work in modern browsers |
