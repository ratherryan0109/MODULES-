# CSS Z-index - Cheatsheet

## Basic Syntax

```css
z-index: auto | <integer> | inherit | initial | unset;
```

## Values

| Value | Description |
|-------|-------------|
| `auto` | Default. No stacking context created. Same level as parent |
| `<integer>` | Positive, negative, or zero. Higher = closer to viewer |
| `inherit` | Takes same z-index as parent |

## Requirements for z-index

- Element must have `position: relative`, `absolute`, `fixed`, or `sticky`
- `position: static` elements ignore z-index

## Stacking Context Creators

These properties create a new stacking context:

| Property | Trigger Value |
|----------|---------------|
| `position` + `z-index` | Any non-static position with z-index value |
| `opacity` | Less than 1 |
| `transform` | Any value other than `none` |
| `filter` | Any value other than `none` |
| `isolation` | `isolate` |
| `mix-blend-mode` | Any value other than `normal` |
| `perspective` | Any value other than `none` |
| `will-change` | Any of the above values |
| `contain` | `layout` or `paint` |

## Painting Order (Back to Front)

1. Background and borders of root
2. Negative z-index elements
3. Non-positioned elements (normal flow)
4. Floating elements
5. Inline / inline-block elements
6. Positioned with z-index: auto / 0
7. Positive z-index elements

## Recommended Z-index Scale

```css
:root {
  --z-back: -10;
  --z-content: 1;
  --z-sticky: 100;
  --z-dropdown: 200;
  --z-fixed: 300;
  --z-overlay: 400;
  --z-modal: 500;
  --z-toast: 600;
  --z-tooltip: 700;
}
```

## Debugging Z-index

1. **Check if element is positioned** (non-static)
2. **Check parent stacking contexts**
3. **Check for transforms, opacity, filters** on ancestors
4. **Use DevTools** → Elements → Computed → Stacking context
5. **Try `isolation: isolate`** to create clean boundaries

## Common Issues & Fixes

| Problem | Cause | Fix |
|---------|-------|-----|
| z-index not working | Element is `position: static` | Add `position: relative` |
| Element stays behind despite high z-index | Parent is in a lower stacking context | Adjust parent z-index or use `isolation: isolate` |
| Modal behind content | Modal's parent has `transform` | Move modal to document body |
| Unexpected stacking | `opacity` or `transform` creates context | Set `isolation: isolate` or restructure |

## Notes

- Maximum integer: 2147483647 (2³¹-1)
- z-index does NOT work with flex items or grid items natively (but does work with positioned flex/grid items)
- `isolation: isolate` is a clean way to create a stacking context without side effects
- Each stacking context is independent - children can't break out
