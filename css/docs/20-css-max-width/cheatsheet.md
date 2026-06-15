# CSS Max-Width — Cheatsheet
## Properties
- `max-width: 800px;` — maximum width
- `min-width: 200px;` — minimum width
- `width: 100%;` — flexible width

## Responsive Pattern
```css
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}
```

## Responsive Images
```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

## Readable Text
```css
article { max-width: 65ch; } /* ~65 characters per line */
```

## Key Points
- max-width sets upper limit (element can be smaller)
- Always pair with width: 100% for responsiveness
- Use margin: 0 auto for centering
- min-width sets lower boundary
