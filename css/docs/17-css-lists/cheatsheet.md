# CSS Lists — Cheatsheet
## Properties
- `list-style-type: disc | circle | square | none | decimal | lower-alpha | lower-roman`
- `list-style-position: outside | inside`
- `list-style: type position;` (shorthand)

## Custom Markers
```css
li::marker { color: red; content: "▶ "; }
```

## Horizontal Lists
```css
ul { display: flex; gap: 20px; list-style: none; }
```

## Custom Counters
```css
ol { counter-reset: item; list-style: none; }
ol li { counter-increment: item; }
ol li::before { content: counter(item) ". "; }
```
