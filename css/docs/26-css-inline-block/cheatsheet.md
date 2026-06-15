# CSS Inline-Block - Cheatsheet

## Basic Syntax

```css
.box {
  display: inline-block;
}
```

## Display Values Comparison

| Property | inline | block | inline-block |
|----------|--------|-------|-------------|
| Starts new line | No | Yes | No |
| Width/height | Ignored | Applied | Applied |
| Margin top/bottom | Ignored | Applied | Applied |
| Padding | Horizontal only | All sides | All sides |
| Whitespace gap | No | No | Yes |
| Default width | Content width | 100% parent | Content width |

## Whitespace Gap Fixes

### Method 1: font-size: 0
```css
.parent {
  font-size: 0;
}
.child {
  display: inline-block;
  font-size: 16px;  /* Restore */
}
```

### Method 2: HTML Comments
```html
<div class="box"></div><!--
--><div class="box"></div>
```

### Method 3: No Whitespace
```html
<div class="box"></div><div class="box"></div>
```

### Method 4: Negative Margin
```css
.box {
  display: inline-block;
  margin-right: -4px;  /* Adjust for gap */
}
```

## Vertical Alignment

```css
.box {
  display: inline-block;
  vertical-align: top;      /* Align to top */
  vertical-align: middle;   /* Align to middle */
  vertical-align: bottom;   /* Align to bottom */
  vertical-align: baseline; /* Align to text baseline (default) */
}
```

## Centering Inline-Block Elements

```css
.parent {
  text-align: center;
  font-size: 0;  /* Optional: remove gaps */
}
.child {
  display: inline-block;
  text-align: left;  /* Restore text alignment */
  font-size: 16px;   /* Restore font size */
}
```

## Common Use Cases

| Use Case | Example |
|----------|---------|
| Navigation bars | Horizontal menu items |
| Button groups | Segmented controls |
| Card grids | Product listings |
| Stats display | Followers, posts counts |
| Icon lists | Social media links |
| Form layouts | Label + input pairs |

## Inline-Block vs Flexbox

### Use Inline-Block When:
- Simple horizontal arrangement
- Text-wrapping behavior needed
- Maximum browser compatibility needed
- Elements should wrap naturally

### Use Flexbox When:
- Complex alignment needed
- Equal-height columns
- Dynamic spacing/distribution
- Reordering content
- Complex responsive behavior

## Notes

- Inline-block creates a block formatting context
- No clearfix needed (unlike float)
- Elements wrap when container is too narrow
- Works with text-align for centering
- Supported in all browsers (IE8+)
- Can be less predictable than Flexbox for complex layouts
