# CSS Box Model — Cheatsheet
## Layers (Inside → Outside)
1. **Content** — The actual content (text, images)
2. **Padding** — Space between content and border (shows background)
3. **Border** — Line around padding
4. **Margin** — Space outside border (transparent)

## Box-Sizing
- `content-box` (default): width/height = content only
- `border-box`: width/height = content + padding + border

## Width Calculation
**content-box:** total = width + padding(L+R) + border(L+R) + margin(L+R)
**border-box:** total = width + margin(L+R)

## Universal Reset
```css
* { box-sizing: border-box; }
```
