# CSS Clear - Cheatsheet

## Basic Syntax

```css
element {
  clear: none | left | right | both | inherit;
}
```

## Values

| Value | Description |
|-------|-------------|
| `none` | Default. Element can be next to floats |
| `left` | Element moves below all left floats |
| `right` | Element moves below all right floats |
| `both` | Element moves below all left AND right floats |

## Clearfix (Parent Container)

### Standard Clearfix
```css
.parent::after {
  content: "";
  display: table;
  clear: both;
}
```

### Alternative: overflow
```css
.parent {
  overflow: auto;  /* or hidden */
}
```

### Modern: flow-root
```css
.parent {
  display: flow-root;
}
```

## Clear Behavior

```
┌──────────────────────────────────────┐
│  ┌──────┐    ┌──────┐               │
│  │Float │    │Float │               │
│  │ left │    │ left │               │
│  └──────┘    └──────┘               │
│  ──────────────────────────────────  │ ← clear: both
│  Content starts below all floats     │
└──────────────────────────────────────┘
```

## Common Patterns

### Row Break Example
```css
.item {
  float: left;
  width: 30%;
  margin: 1.66%;
}
.break {
  clear: both;  /* Forces new row */
}
```

### Section After Floats
```css
section {
  clear: both;
  padding-top: 20px;
}
```

## Clear Combinations

| CSS | Effect on float: left elements | Effect on float: right elements |
|-----|-------------------------------|--------------------------------|
| `clear: none` | Next to | Next to |
| `clear: left` | Below | Next to |
| `clear: right` | Next to | Below |
| `clear: both` | Below | Below |

## Important Notes

- Clear only works on **block-level** elements
- Clear only affects **preceding** floats (not subsequent)
- Clear works by increasing the element's **top margin**
- If no preceding floats exist, clear has **no effect**
- Float is ignored in Flex/Grid items, so clear is also ignored

## Clear vs Clearfix

| | Clear | Clearfix |
|--|-------|----------|
| Applied to | Individual element | Parent container |
| Purpose | Move element below floats | Contain floated children |
| Method | `clear: both` | `::after` pseudo-element |
| Use case | Section breaks | Wrapping floated layouts |

## Accessibility

- Cleared content maintains DOM order
- Screen readers follow DOM, unaffected by clear
- No special ARIA needed for cleared elements
