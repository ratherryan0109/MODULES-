# CSS Navigation Bar Cheatsheet

## HTML Structure
```html
<nav>
  <ul>
    <li><a href="#" class="active">Home</a></li>
    <li><a href="#">About</a></li>
  </ul>
</nav>
```

## Reset List Styles
```css
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
```

## Horizontal Nav (Flexbox)
```css
nav ul {
  display: flex;
  background: #333;
}
nav li a {
  display: block;
  padding: 14px 20px;
  color: #fff;
  text-decoration: none;
}
```

## Vertical Nav
```css
nav ul {
  width: 200px;
  background: #f1f1f1;
}
nav li a {
  display: block;
  padding: 12px 16px;
  border-bottom: 1px solid #ddd;
}
```

## Navigation States
```css
nav li a:hover    { background: #575757; }
nav li a:active   { background: #222; }
nav li a.active   { background: #04aa6d; }
```

## Sticky Nav
```css
nav {
  position: sticky;
  top: 0;
  z-index: 100;
}
```

## Accessibility
- Use `<nav>` for semantic structure
- Add `aria-current="page"` to active link
- Ensure minimum touch target size of 44×44px
