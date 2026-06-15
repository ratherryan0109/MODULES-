# CSS Basics — Cheatsheet

## Three Ways to Apply CSS

| Method | Syntax | Use Case |
|--------|--------|----------|
| Inline | `<p style="color:red">` | Quick testing |
| Internal | `<style>...</style>` in `<head>` | Single page |
| External | `<link rel="stylesheet" href="style.css">` | Production / multi-page |

## Selectors

| Selector | Syntax | Example |
|----------|--------|---------|
| Universal | `*` | `* { margin: 0; }` |
| Element | `element` | `p { color: blue; }` |
| Class | `.classname` | `.highlight { }` |
| ID | `#idname` | `#header { }` |
| Grouping | `a, b` | `h1, h2 { }` |
| Descendant | `a b` | `div p { }` |
| Child | `a > b` | `ul > li { }` |
| Attribute | `[attr]` | `[type="text"] { }` |
| Pseudo-class | `a:b` | `a:hover { }` |

## Specificity (highest to lowest)

| Type | Weight |
|------|--------|
| Inline style | 1,0,0,0 |
| ID | 0,1,0,0 |
| Class / attribute / pseudo-class | 0,0,1,0 |
| Element / pseudo-element | 0,0,0,1 |
| Universal / combinators | 0,0,0,0 |

## Box Model

```
┌─────────────────────────────────┐
│          MARGIN (outside)       │
│  ┌─────────────────────────┐    │
│  │       BORDER            │    │
│  │  ┌─────────────────┐    │    │
│  │  │    PADDING      │    │    │
│  │  │  ┌─────────┐    │    │    │
│  │  │  │ CONTENT │    │    │    │
│  │  │  └─────────┘    │    │    │
│  │  └─────────────────┘    │    │
│  └─────────────────────────┘    │
└─────────────────────────────────┘
```

## Common CSS Properties

### Text & Font
| Property | Values |
|----------|--------|
| `color` | `red`, `#ff0000`, `rgb(255,0,0)`, `hsl(0,100%,50%)` |
| `font-family` | `'Segoe UI', Arial, sans-serif` |
| `font-size` | `16px`, `1.2rem`, `100%`, `large` |
| `font-weight` | `400` (normal), `700` (bold), `900` |
| `text-align` | `left`, `center`, `right`, `justify` |
| `text-decoration` | `underline`, `line-through`, `none` |
| `line-height` | `1.5`, `24px`, `150%` |

### Background
| Property | Values |
|----------|--------|
| `background-color` | `#f0f0f0`, `transparent` |
| `background-image` | `url('img.png')` |
| `background-size` | `cover`, `contain`, `100px` |
| `background-repeat` | `no-repeat`, `repeat-x`, `repeat-y` |
| `background-position` | `center`, `top left`, `50% 50%` |

### Spacing & Sizing
| Property | Values |
|----------|--------|
| `margin` | `10px`, `10px 20px`, `0 auto` |
| `padding` | `10px`, `10px 20px 30px` |
| `width` | `500px`, `50%`, `auto`, `100vw` |
| `height` | `300px`, `auto`, `100vh` |
| `max-width` | `1200px`, `100%` |

### Border
| Property | Example |
|----------|---------|
| `border` | `2px solid black` |
| `border-radius` | `8px`, `50%` |
| `border-style` | `solid`, `dashed`, `dotted`, `double` |

### Display & Visibility
| Property | Values |
|----------|--------|
| `display` | `block`, `inline`, `inline-block`, `flex`, `grid`, `none` |
| `visibility` | `visible`, `hidden` |
| `opacity` | `0` (transparent) to `1` (opaque) |

## Shorthand Patterns (clockwise: top right bottom left)

```css
margin: 10px;                    /* all sides */
margin: 10px 20px;               /* top/bottom, left/right */
margin: 10px 20px 30px;          /* top, left/right, bottom */
margin: 10px 20px 30px 40px;     /* top, right, bottom, left */
```

## Units

| Unit | Type | Relative to |
|------|------|-------------|
| `px` | Absolute | 1/96th of an inch |
| `rem` | Relative | Root font-size (16px default) |
| `em` | Relative | Parent font-size |
| `%` | Relative | Parent element |
| `vw` | Relative | Viewport width |
| `vh` | Relative | Viewport height |
| `ch` | Relative | Width of "0" character |

## CSS Reset Snippet

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

## Color Formats

| Format | Example | Notes |
|--------|---------|-------|
| Named | `red`, `blue`, `transparent` | 147 named colors |
| Hex | `#ff0000`, `#f00` | 3- or 6-digit hexadecimal |
| RGB | `rgb(255, 0, 0)` | 0-255 per channel |
| RGBA | `rgba(255, 0, 0, 0.5)` | Alpha 0-1 |
| HSL | `hsl(0, 100%, 50%)` | Hue 0-360, Saturation/Lightness 0-100% |
| HSLA | `hsla(0, 100%, 50%, 0.5)` | With alpha |
