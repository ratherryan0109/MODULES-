# CSS Masking Cheatsheet

## Basic Mask with Gradient
```css
.element {
  mask-image: linear-gradient(to right, transparent, black);
  -webkit-mask-image: linear-gradient(to right, transparent, black);
}
```

## Radial Mask
```css
.element {
  mask-image: radial-gradient(circle, black 50%, transparent 51%);
  -webkit-mask-image: radial-gradient(circle, black 50%, transparent 51%);
}
```

## SVG Mask
```css
.element {
  mask: url(#circleMask);
  -webkit-mask: url(#circleMask);
}
```

## Mask Properties
```css
.element {
  mask-image: url(mask.png);
  mask-mode: alpha;          /* alpha | luminance | match-source */
  mask-repeat: no-repeat;    /* repeat | repeat-x | repeat-y | no-repeat */
  mask-position: center;     /* position values */
  mask-size: cover;          /* auto | contain | cover | length | percentage */
  mask-composite: add;       /* add | subtract | intersect | exclude */
}
```

## Text Masking (Gradient Text)
```css
.gradient-text {
  background: linear-gradient(135deg, #e74c3c, #3498db, #2ecc71);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## Multiple Masks
```css
.element {
  mask-image: 
    linear-gradient(to right, transparent, black),
    radial-gradient(circle at center, black 50%, transparent 51%);
  -webkit-mask-image: 
    linear-gradient(to right, transparent, black),
    radial-gradient(circle at center, black 50%, transparent 51%);
}
```

## Common Patterns

**Fade to bottom:**
```css
.fade-bottom {
  mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
}
```

**Circle reveal:**
```css
.circle-reveal {
  mask-image: radial-gradient(circle, black 60%, transparent 61%);
}
```

**Diamond shape:**
```css
.diamond {
  mask-image: linear-gradient(45deg, transparent 30%, black 30%, black 70%, transparent 70%);
}
```
