# CSS Shadows Cheatsheet

## box-shadow
```css
/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 10px 10px 20px 0 rgba(0,0,0,0.3);

/* Inset shadow */
box-shadow: inset 0 2px 8px rgba(0,0,0,0.15);

/* Multiple shadows */
box-shadow:
  0 2px 4px rgba(0,0,0,0.1),
  0 8px 16px rgba(0,0,0,0.1);

/* No spread (most common) */
box-shadow: 0 4px 12px rgba(0,0,0,0.15);
```

## text-shadow
```css
/* offset-x | offset-y | blur | color */
text-shadow: 2px 2px 4px rgba(0,0,0,0.3);

/* Glow effect */
text-shadow: 0 0 8px rgba(231,76,60,0.6);

/* 3D extrusion (layered) */
text-shadow:
  1px 1px 0 #ccc,
  2px 2px 0 #bbb,
  3px 3px 0 #aaa;
```

## drop-shadow() Filter
```css
/* Follows alpha mask (transparency-aware) */
filter: drop-shadow(4px 8px 12px rgba(0,0,0,0.3));

/* Use on transparent images/SVGs */
img.avatar {
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
}
```

## Common Patterns

**Material-style elevation:**
```css
.elevation-1 { box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); }
.elevation-2 { box-shadow: 0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12); }
.elevation-4 { box-shadow: 0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10); }
.elevation-8 { box-shadow: 0 14px 28px rgba(0,0,0,0.20), 0 10px 10px rgba(0,0,0,0.15); }
```

**Neon glow:**
```css
.glow {
  box-shadow:
    0 0 5px #0ff,
    0 0 10px #0ff,
    0 0 20px #0ff,
    0 0 40px #0ff;
}
```

**Inner shadow / recessed:**
```css
.recessed { box-shadow: inset 0 2px 8px rgba(0,0,0,0.15); }
```

**Shadow on only one side:**
```css
.top-shadow { box-shadow: 0 -4px 6px -4px rgba(0,0,0,0.2); }
.right-shadow { box-shadow: 4px 0 6px -4px rgba(0,0,0,0.2); }
.bottom-shadow { box-shadow: 0 4px 6px -4px rgba(0,0,0,0.2); }
.left-shadow { box-shadow: -4px 0 6px -4px rgba(0,0,0,0.2); }
```
