# CSS Pseudo-elements - Cheatsheet

## Syntax

```css
::pseudo-element-name {
  property: value;
}
```

Always use **double colon** (::) for pseudo-elements in modern CSS.

## Common Pseudo-elements

| Pseudo-element | Description | Common Properties |
|---------------|-------------|-------------------|
| `::before` | Insert content before element | `content`, `position`, `font`, `color` |
| `::after` | Insert content after element | `content`, `position`, `font`, `color` |
| `::first-letter` | First letter of block text | `font`, `color`, `margin`, `padding`, `float` |
| `::first-line` | First line of block text | `font`, `color`, `background`, `text-transform` |
| `::selection` | User-selected text | `background`, `color`, `text-shadow` |
| `::placeholder` | Input placeholder text | `color`, `font`, `text-align` |
| `::marker` | List item marker | `color`, `font-size`, `content` |
| `::backdrop` | Full-screen background | `background`, `opacity` |

## The `content` Property

| Value | Description |
|-------|-------------|
| `content: ""` | Empty string (decorative) |
| `content: "text"` | String content |
| `content: attr(data-x)` | Attribute value |
| `content: url(image.png)` | Image |
| `content: counter(name)` | CSS counter |
| `content: open-quote` | Language-appropriate opening quote |
| `content: close-quote` | Language-appropriate closing quote |

## Position Patterns

### Tooltip Arrow Triangle
```css
.tooltip::after {
  content: '';
  position: absolute;
  border: 8px solid transparent;
  border-top-color: #333;
}
```

### Decorative Corners
```css
.box::before,
.box::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
}
.box::before { top: 0; left: 0; border-top: 2px solid red; border-left: 2px solid red; }
.box::after { bottom: 0; right: 0; border-bottom: 2px solid red; border-right: 2px solid red; }
```

## Clearfix

```css
.clearfix::after {
  content: '';
  display: table;
  clear: both;
}
```

## Pseudo-element + Pseudo-class Combinations

```css
.element:hover::before { }
.element:focus::after { }
.element:first-child::first-letter { }
li:nth-child(3)::marker { }
input:focus::placeholder { }
```

## Accessibility

```css
/* Use aria-hidden for decorative content */
<div aria-hidden="true">
  <span class="decorative"></span>
</div>

/* Ensure placeholder contrast */
input::placeholder {
  color: #666;  /* Minimum contrast ratio */
}
```

## Browser-Specific Notes

```css
/* WebKit-specific */
input::-webkit-input-placeholder { }
/* Firefox-specific */
input::-moz-placeholder { }
/* Microsoft-specific */
input:-ms-input-placeholder { }
```

## Limitations

- **Void elements**: Can't use ::before/::after on `<img>`, `<input>`, `<br>`, `<hr>`, etc.
- **Replaced elements**: Limited support on `<img>`, `<video>`, `<canvas>`
- **Inline elements**: ::first-letter needs block/inline-block
- **Content property**: Only one string value in basic CSS (CSS3 allows multiple)

## Quick Reference

| Goal | Pseudo-element |
|------|---------------|
| Add icon before link | `::before` |
| Add arrow after link | `::after` |
| Drop cap paragraph | `::first-letter` |
| Bold first line | `::first-line` |
| Custom text highlight | `::selection` |
| Style input hint text | `::placeholder` |
| Color list bullets | `::marker` |
| Full-screen overlay bg | `::backdrop` |
| Clear floated children | `::after` with clearfix |
| Tooltip on hover | `::before` + `:hover` |
| Custom checkmark | `::after` on checked state |
