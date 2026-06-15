# CSS Translate Cheatsheet

## Property Values

```css
/* 1 value (X only) */
translate: 50px;
translate: 50%;

/* 2 values (X Y) */
translate: 50px 100px;

/* 3 values (X Y Z) */
translate: 50px 100px 200px;

/* No translation */
translate: none;
```

## Common Patterns

```css
/* Perfect centering */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
}

/* Slide in from left */
.slide-in {
  translate: -100% 0;
  transition: translate 0.3s ease;
}
.slide-in.open {
  translate: 0 0;
}

/* 3D card stack */
.scene { perspective: 800px; }
.card1 { translate: 0 0 0; }
.card2 { translate: 0 0 50px; }
.card3 { translate: 0 0 100px; }
```

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 104+ |
| Firefox | 103+ |
| Safari | 16+ |
| Edge | 104+ |

## Fallback

```css
.element {
  transform: translate(50px, 100px);
}
@supports (translate: 0) {
  .element {
    translate: 50px 100px;
    transform: none;
  }
}
```
