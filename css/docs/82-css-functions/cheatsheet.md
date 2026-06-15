# CSS Functions Cheatsheet

## Math Functions

### calc()
```css
.element {
  width: calc(100% - 40px);
  padding: calc(1rem + 2vw);
  font-size: calc(1rem + 0.5vw);
}
```

### min() / max()
```css
.element {
  width: min(100%, 1200px);        /* the smaller */
  width: max(300px, 50%);          /* the larger */
  padding: min(2rem, 5vw);
}
```

### clamp()
```css
.element {
  font-size: clamp(1rem, 3vw, 2rem);
  width: clamp(300px, 60%, 1200px);
}
```

## Color Functions

### rgb() / rgba()
```css
.element {
  color: rgb(231, 76, 60);
  background: rgba(52, 152, 219, 0.5);
}
```

### hsl() / hsla()
```css
.element {
  color: hsl(200, 70%, 50%);
  background: hsla(120, 60%, 50%, 0.3);
}
```

### hwb()
```css
.element {
  color: hwb(200 20% 10%);
}
```

## Transform Functions

```css
.element {
  transform: translate(10px, 20px);           /* move */
  transform: scale(1.5);                       /* resize */
  transform: rotate(45deg);                    /* spin */
  transform: skew(10deg, 5deg);                /* slant */
  transform: translate(10px, 5px) scale(1.1) rotate(15deg);  /* combined */
}
```

## Gradient Functions

```css
.element {
  background: linear-gradient(135deg, red, blue);
  background: radial-gradient(circle, yellow, orange);
  background: conic-gradient(red, yellow, green, blue);
}
```

## Reference Functions

```css
.element {
  color: var(--primary, #3498db);      /* custom property */
  background: url('bg.png');           /* URL reference */
}

.element::after {
  content: attr(data-label);           /* attribute value */
}

.element {
  padding: env(safe-area-inset-top);   /* environment variable */
}
```

## Filter Functions

```css
.element {
  filter: blur(4px);
  filter: brightness(1.2) contrast(1.1);
  filter: drop-shadow(4px 4px 8px rgba(0,0,0,0.3));
}
```

## Shape Functions

```css
.element {
  clip-path: circle(50%);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  shape-outside: circle(50%);
}
```
