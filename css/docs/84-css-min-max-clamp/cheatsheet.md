# CSS min(), max(), clamp() Cheatsheet

## min()
```css
/* Selects the smallest value */
.element {
  width: min(100%, 1200px);       /* responsive max-width */
  padding: min(2rem, 5vw);        /* fluid padding cap */
  font-size: min(3rem, 8vw);      /* heading size cap */
}
```

## max()
```css
/* Selects the largest value */
.element {
  width: max(300px, 50%);         /* minimum width */
  padding: max(1rem, 3vw);        /* minimum padding */
  font-size: max(1rem, 2vw);      /* minimum font size */
}
```

## clamp()
```css
/* Constrains between min and max */
.element {
  width: clamp(300px, 60%, 1200px);            /* responsive width */
  font-size: clamp(1rem, 3vw, 2rem);            /* fluid typography */
  padding: clamp(0.5rem, 2vw, 2rem);            /* fluid spacing */
  gap: clamp(0.5rem, 2vw, 1.5rem);              /* fluid gap */
  border-radius: clamp(4px, 1vw, 16px);         /* fluid radius */
}
```

## Common Patterns

### Responsive Container
```css
.container {
  width: min(90%, 1200px);
  margin: 0 auto;
}
```

### Fluid Card Grid
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(clamp(200px, 30vw, 350px), 1fr));
  gap: clamp(0.5rem, 2vw, 2rem);
}
```

### Full Fluid Component
```css
.card {
  width: clamp(280px, 50%, 600px);
  padding: clamp(1rem, 3vw, 2rem);
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  border-radius: clamp(8px, 1vw, 16px);
  margin: clamp(0.5rem, 2vw, 2rem);
}
```

### Comparison Table

| Function | Behavior | Best For |
|----------|----------|----------|
| `min(A, B)` | Uses the smaller value | Max bounds (like max-width) |
| `max(A, B)` | Uses the larger value | Min bounds (like min-width) |
| `clamp(MIN, PREF, MAX)` | Keeps PREF between MIN and MAX | Fluid values with constraints |

## Notes
- All arguments can be any CSS value with compatible units
- Can be nested: `min(max(300px, 50%), 1200px)`
- Combine with calc(): `clamp(1rem, calc(1rem + 1vw), 2rem)`
- No need for media queries when clamp() handles the sizing
