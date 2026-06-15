# CSS Filters Cheatsheet

## Filter Functions

### blur()
```css
filter: blur(4px);
filter: blur(0.5rem);
```

### brightness()
```css
filter: brightness(0);    /* black */
filter: brightness(0.5);  /* 50% brightness */
filter: brightness(1);    /* normal */
filter: brightness(1.5);  /* 150% brightness */
```

### contrast()
```css
filter: contrast(0);    /* gray */
filter: contrast(0.5);  /* reduced contrast */
filter: contrast(1);    /* normal */
filter: contrast(2);    /* high contrast */
```

### grayscale()
```css
filter: grayscale(0);  /* full color */
filter: grayscale(0.5); /* partial */
filter: grayscale(1);  /* fully grayscale */
```

### sepia()
```css
filter: sepia(0);    /* no sepia */
filter: sepia(0.8);  /* warm vintage tone */
filter: sepia(1);    /* fully sepia */
```

### hue-rotate()
```css
filter: hue-rotate(90deg);
filter: hue-rotate(0.25turn);
filter: hue-rotate(200grad);
```

### saturate()
```css
filter: saturate(0);   /* desaturated */
filter: saturate(1);   /* normal */
filter: saturate(2);   /* oversaturated */
filter: saturate(0.5); /* reduced saturation */
```

### invert()
```css
filter: invert(0);  /* normal */
filter: invert(1);  /* fully inverted */
```

### opacity()
```css
filter: opacity(0);    /* transparent */
filter: opacity(0.5);  /* 50% opaque */
filter: opacity(1);    /* fully opaque */
```

### drop-shadow()
```css
filter: drop-shadow(4px 8px 12px rgba(0,0,0,0.3));
```

## Combined Filters
```css
filter: brightness(1.2) contrast(1.1) saturate(1.3);
filter: grayscale(0.5) sepia(0.3) blur(2px);
```

## backdrop-filter
```css
.glass {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px) saturate(1.4);
  -webkit-backdrop-filter: blur(10px) saturate(1.4);
  border: 1px solid rgba(255,255,255,0.2);
}
```

## Animated Filters
```css
.element {
  transition: filter 0.3s ease;
}
.element:hover {
  filter: brightness(1.2) saturate(1.3);
}

@keyframes pulse {
  0%, 100% { filter: brightness(1) saturate(1); }
  50% { filter: brightness(1.3) saturate(1.8); }
}
.animated {
  animation: pulse 3s ease-in-out infinite;
}
```
