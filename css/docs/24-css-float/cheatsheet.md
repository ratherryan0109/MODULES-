# CSS Float - Cheatsheet

## Property Values

```css
float: left | right | none | inherit;
```

| Value | Description |
|-------|-------------|
| `left` | Element floats to left, text wraps on right |
| `right` | Element floats to right, text wraps on left |
| `none` | Default. No float |

## Requirements for Float

- Set an **explicit width** on floated elements
- Floated elements become `display: block` automatically

## Clearfix

### Standard Clearfix
```css
.parent::after {
  content: "";
  display: table;
  clear: both;
}
```

### Alternative Clearfix (overflow)
```css
.parent {
  overflow: auto;  /* or hidden */
}
```

## Clear Property (for siblings)

```css
.element {
  clear: left;   /* Move below left floats */
  clear: right;  /* Move below right floats */
  clear: both;   /* Move below all floats */
  clear: none;   /* Default */
}
```

## Common Use Cases

| Use Case | Example | Status |
|----------|---------|--------|
| Text wrapping images | Article images | ✅ Still best |
| Drop caps | `::first-letter` with float | ✅ Great |
| Pull quotes | Side quotes in articles | ✅ Good |
| Page layout | Columns, grids | ❌ Use Flexbox/Grid |
| Navigation bars | Horizontal nav | ❌ Use Flexbox |

## Float Behavior Summary

| Aspect | Behavior |
|--------|----------|
| Normal flow | Removed from flow |
| Text | Wraps around |
| Block elements | Ignore float (overlap) |
| Parent height | Collapses (needs clearfix) |
| Display value | Becomes `block` |
| Flex/Grid items | Float ignored |

## Float vs Modern CSS

### Use Float For:
- Wrapping text around images
- Drop caps
- Pull quotes
- Legacy code maintenance

### Use Flexbox For:
- Navigation bars
- Centering content
- Equal-height columns
- One-dimensional layouts

### Use Grid For:
- Full page layouts
- Two-dimensional layouts
- Complex grid systems
- Template areas

## Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Parent collapses | All children floated | Add clearfix |
| Unexpected layout | No width set | Set explicit width |
| Float ignored | Element is flex/grid item | Don't use float |
| Overlapping content | Block element after float | Add clear |
| Responsive breakage | Fixed widths | Use percentage widths |

## Accessibility Notes

- Logical reading order should match DOM order
- Test with screen readers
- Ensure content is not hidden behind floats at zoom levels
- Provide clear visual separation between floated elements
