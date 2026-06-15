# CSS Syntax — Cheatsheet

## Rule Structure
```
selector {
  property: value;
  property: value;
}
```

## Components
| Part | Example | Description |
|------|---------|-------------|
| Selector | `h1`, `.class`, `#id` | Targets HTML elements |
| Property | `color`, `font-size` | What to style |
| Value | `red`, `16px` | The style setting |
| Declaration | `color: red;` | Property: value pair |

## Punctuation
- `{ }` — Curly braces enclose declarations
- `:` — Colon separates property from value
- `;` — Semicolon ends each declaration
- `,` — Comma separates grouped selectors

## Grouping Selectors
```css
h1, h2, h3 { color: blue; }
```

## Shorthand Properties
| Property | Order | Example |
|----------|-------|---------|
| margin | top right bottom left | `margin: 10px 20px;` |
| padding | top right bottom left | `padding: 10px 20px;` |
| border | width style color | `border: 1px solid black;` |
| background | color image repeat position | `background: #fff url(i.jpg) no-repeat;` |
| font | style weight size/line-height family | `font: bold 16px/1.5 Arial;` |

## Comments
```css
/* Single-line */
/* Multi-line
   comment */
```

## Vendor Prefixes
```css
-webkit-  /* Chrome, Safari */
-moz-     /* Firefox */
-ms-      /* Internet Explorer, Edge */
-o-       /* Old Opera */
```

## Common Mistakes
- ❌ Missing semicolons between declarations
- ❌ Using `=` instead of `:`
- ❌ Unclosed curly braces
- ❌ Commas inside margin/padding values
- ❌ Forgetting quotes on multi-word fonts

## Valid CSS Syntax Rules
- Properties and values are case-insensitive (but use lowercase)
- Whitespace is ignored (use for readability)
- One declaration per line recommended
- Last declaration's semicolon is optional (but always include it)
