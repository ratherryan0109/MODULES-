# CSS Units Cheatsheet

## Absolute Units
```
px    — 1/96th of 1in (screen)
cm    — centimeters
mm    — millimeters
in    — inches
pt    — 1/72nd of 1in (print)
pc    — 12pt (print)
```

## Relative Units
```
%     — relative to parent
em    — relative to parent font-size
rem   — relative to root (html) font-size
ch    — width of "0" character
ex    — height of "x" character
```

## Viewport Units
```
vw    — 1% of viewport width
vh    — 1% of viewport height
vmin  — min(vw, vh)
vmax  — max(vw, vh)
svw/svh — small viewport
lvw/lvh — large viewport
dvw/dvh — dynamic viewport
```

## Grid Units
```
fr    — fraction of free space in grid container
```

## Math Functions
```css
calc(100% - 40px)           /* combine units */
min(100%, 1200px)           /* pick smaller */
max(50%, 300px)             /* pick larger */
clamp(1rem, 2.5vw, 2rem)   /* clamp between min/preferred/max */
```

## Best Practice Recommendations
```css
/* Typography */
html { font-size: 16px; }
body { font-size: 1rem; }
h1 { font-size: clamp(1.75rem, 4vw, 2.5rem); }

/* Layout */
.container { width: min(90%, 1200px); }

/* Spacing */
section { padding: clamp(1rem, 3vw, 3rem); }

/* Full-screen sections */
.hero { min-height: 100vh; }

/* Borders/shadows (always px) */
.card { border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
```
