# CSS Links — Cheatsheet
## LVHA Order
```css
a:link    /* Unvisited */
a:visited /* Visited */
a:hover   /* Mouse over */
a:active  /* Being clicked */
```

## Common Patterns
```css
a { text-decoration: none; color: #333; }
a:hover { color: blue; text-decoration: underline; }
a:focus { outline: 2px solid blue; outline-offset: 2px; }
```

## Button-style Links
```css
.btn-link {
  display: inline-block;
  padding: 12px 24px;
  background: blue;
  color: white;
  text-decoration: none;
  border-radius: 6px;
}
.btn-link:hover { background: darkblue; }
```

## Accessibility
- Never remove `:focus` outline without replacement
- Use `:focus-visible` for keyboard-only focus
- Ensure sufficient color contrast in all states
- Use underlines or other indicators (not just color) to identify links
