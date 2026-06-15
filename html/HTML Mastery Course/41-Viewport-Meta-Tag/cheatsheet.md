# Viewport Meta Tag — Cheatsheet

## Standard Tag (Required)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Properties

| Property | Values | Description |
|----------|--------|-------------|
| `width` | `device-width`, pixel value | Layout viewport width |
| `initial-scale` | `0.1` to `10.0` | Initial zoom level (1.0 = 100%) |
| `minimum-scale` | `0.1` to `10.0` | Minimum zoom allowed |
| `maximum-scale` | `0.1` to `10.0` | Maximum zoom allowed |
| `user-scalable` | `yes`, `no` | Allow user zoom |
| `viewport-fit` | `auto`, `contain`, `cover` | Notched device handling |

## ❌ Bad Practices (Accessibility Violations)

```html
<!-- NEVER do these -->
<meta name="viewport" content="width=device-width, user-scalable=no">
<meta name="viewport" content="width=device-width, maximum-scale=1.0">
<meta name="viewport" content="width=980">
```

## ✅ Best Practice

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## For Notched Devices

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
```

```css
body {
  padding:
    env(safe-area-inset-top, 20px)
    env(safe-area-inset-right, 0px)
    env(safe-area-inset-bottom, 0px)
    env(safe-area-inset-left, 0px);
}
```

## Dynamic Viewport Units

| Unit | Description |
|------|-------------|
| `100vh` | Traditional viewport height |
| `100dvh` | Dynamic viewport height (changes with chrome) |
| `100svh` | Small viewport height (chrome visible) |
| `100lvh` | Large viewport height (chrome hidden) |

## Without vs. With Viewport

| Scenario | Layout Width | Result |
|----------|-------------|--------|
| No viewport tag | 980px (default) | Tiny text, needs zoom |
| `width=device-width` | Device width (375px) | Readable, responsive |

## iOS Input Zoom Fix

```css
input, textarea, select {
  font-size: 16px; /* Prevents iOS zoom on focus */
}
```

## Multiple Tags

Only the first `viewport` meta tag is used. Additional ones are ignored.

## Browser Support

| Chrome | Firefox | Safari | Edge | IE |
|--------|---------|--------|------|-----|
| All    | All     | All    | All  | 10+ |
