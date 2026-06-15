# CSS Debugging Cheatsheet

## DevTools Shortcuts
| Action | Windows | Mac |
|--------|---------|-----|
| Open DevTools | F12 / Ctrl+Shift+I | Cmd+Option+I |
| Inspect element | Ctrl+Shift+C | Cmd+Shift+C |
| Console | Ctrl+Shift+J | Cmd+Option+J |
| Toggle device mode | Ctrl+Shift+M | Cmd+Shift+M |

## Debugging Workflow
```
1. Inspect → Right-click element → Inspect
2. Computed → Check final styles
3. Sources → Check which CSS file/line
4. Toggle → Turn off conflicting properties
5. Override → Add test styles directly
6. Verify → Check states (hover, focus)
```

## Quick Debug Techniques
```css
/* See all element boundaries */
* { outline: 1px solid red; }

/* Isolate element from inheritance */
.isolate { all: initial; }

/* Debug overflow */
*:not(body):not(html) { overflow: auto !important; }

/* Debug specificity */
/* Lower: use .class instead of #id */
/* Raise: add more classes or specificity */
```

## Common Issues & Fixes
| Issue | Symptom | Check |
|-------|---------|-------|
| Styles not applying | Strikethrough in DevTools | Specificity, loading order |
| Layout broken | Unexpected positioning | Display, position, flex/grid props |
| Overflow | Horizontal scroll | width, box-sizing, overflow-wrap |
| z-index not working | Element behind others | Position, stacking context |
| Responsive break | Misaligned at width | Media queries, viewport meta |
| Inherited color | Wrong font color | Computed → Inherited from |

## Panels Reference
| Panel | Use |
|-------|-----|
| Styles | View/add/remove CSS rules |
| Computed | Final resolved values |
| Layout | Flexbox/Grid overlays |
| Coverage | Used vs unused CSS |
| Performance | Animation/layout profiling |
| Rendering | Media emulation, paint flashing |
| Console | JavaScript errors, log CSS info |
