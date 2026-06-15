# CSS Website Layout Cheatsheet

## Holy Grail Layout
```css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav    main   aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
header { grid-area: header; }
nav    { grid-area: nav; }
main   { grid-area: main; }
aside  { grid-area: aside; }
footer { grid-area: footer; }
```

## Two-Column Layout
```css
.layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  min-height: 100vh;
}
```

## Responsive without Media Queries
```css
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

## Nav with Flexbox
```css
nav ul {
  display: flex;
  gap: 20px;
  list-style: none;
}
nav ul li a {
  padding: 10px 16px;
  text-decoration: none;
}
```

## Sticky Header
```css
header {
  position: sticky;
  top: 0;
  z-index: 100;
}
```

## Mobile Reorder (Media Query)
```css
@media (max-width: 768px) {
  .layout {
    grid-template-areas:
      "header"
      "nav"
      "main"
      "aside"
      "footer";
    grid-template-columns: 1fr;
  }
}
```
