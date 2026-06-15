# Module 41: Viewport Meta Tag

## Introduction

The viewport meta tag is one of the most important HTML elements for responsive web design. It controls the layout viewport on mobile browsers, instructing them how to scale and display the page. Without it, mobile browsers render pages at a typical desktop screen width (usually 980px) and then scale them down, making text appear tiny and requiring users to pinch-zoom.

The viewport meta tag was introduced by Apple in the iPhone in 2007 and has since been adopted by all mobile browsers as the standard way to control viewport behavior.

## Learning Objectives

By the end of this module, you will be able to:
- Understand the viewport concept and how mobile browsers handle it
- Implement the viewport meta tag correctly
- Configure `width`, `initial-scale`, and related properties
- Understand the difference between layout viewport and visual viewport
- Troubleshoot common viewport issues
- Apply viewport settings for different scenarios

## Basic Syntax

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

This is the standard viewport meta tag used in virtually all responsive websites. Let's break it down:

### `width=device-width`
Sets the layout viewport width to the device's width in CSS pixels. Without this, mobile browsers use a default width (typically 980px).

### `initial-scale=1.0`
Sets the initial zoom level to 1.0 (100%). This prevents mobile browsers from zooming out to show the full desktop-width page.

## Complete Set of Properties

| Property | Values | Description |
|----------|--------|-------------|
| `width` | `device-width` or pixel value | Width of the viewport |
| `initial-scale` | 0.1 to 10.0 | Initial zoom level |
| `minimum-scale` | 0.1 to 10.0 | Minimum allowed zoom |
| `maximum-scale` | 0.1 to 10.0 | Maximum allowed zoom |
| `user-scalable` | `yes` or `no` | Whether user can zoom |
| `viewport-fit` | `auto`, `contain`, `cover` | For notched devices |

## Important Accessibility Note

Avoid using `user-scalable=no` or `maximum-scale=1.0` as they prevent users from zooming, which violates WCAG 2.1 Success Criterion 1.4.4 (Resize Text). Users with visual impairments rely on zooming to read content.

```html
<!-- ❌ Bad: prevents zooming -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">

<!-- ✅ Good: allows zooming -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Layout Viewport vs. Visual Viewport

### Layout Viewport
The area within which the page is rendered. Controlled by the viewport meta tag. CSS layouts are based on this.

### Visual Viewport
The portion of the page currently visible on screen. Changes as the user zooms or scrolls.

```
┌───────────────────────┐ ← Device screen (visual viewport)
│                       │
│  ┌─────────────────┐  │
│  │ Layout Viewport │  │
│  │ (content area)  │  │
│  └─────────────────┘  │
│                       │
└───────────────────────┘
```

On mobile, without the viewport meta tag:
- Layout viewport = 980px (default)
- Visual viewport = 375px (typical phone)
- Result: browser scales 980px to fit 375px, text is tiny

With `width=device-width`:
- Layout viewport = 375px
- Visual viewport = 375px
- Result: 1:1 mapping, text is readable

## Without vs. With Viewport Meta Tag

```
Without:                              With:
┌──────────────────────┐              ┌──────────────────────┐
│ Content at 980px     │              │ Content at 375px     │
│ scaled down to fit   │              │ responsive layout    │
│ [tiny text]          │              │ [readable text]      │
└──────────────────────┘              └──────────────────────┘
```

## Additional Techniques

### `viewport-fit` for Notched Devices

For devices with rounded corners or notches (iPhone X+):

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
```

Combine with CSS:

```css
body {
  padding: env(safe-area-inset-top) env(safe-area-inset-right) 
           env(safe-area-inset-bottom) env(safe-area-inset-left);
}
```

### Dynamic Viewport Units (CSS)

Modern CSS provides dynamic viewport units that account for mobile browser chrome:

```css
.element {
  height: 100dvh; /* Dynamic viewport height */
  height: 100svh; /* Small viewport height */
  height: 100lvh; /* Large viewport height */
}
```

## Common Mistakes

- **Forgetting the viewport meta tag entirely** — most common responsive design mistake
- **Using `user-scalable=no`** — accessibility violation
- **Setting `maximum-scale=1.0`** — prevents pinch-zoom
- **Using fixed pixel values for width** — `width=375` instead of `width=device-width`
- **Multiple viewport meta tags** — only the first is used

## Best Practices

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- For notched devices: -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
```

1. Always include the viewport meta tag in the `<head>`
2. Always use `width=device-width, initial-scale=1.0`
3. Never disable user scaling (`user-scalable=no`)
4. Place it early in `<head>`, before CSS links
5. Use CSS environment variables for safe areas
6. Test on real mobile devices

## Summary Notes

| Aspect | Details |
|--------|---------|
| **Purpose** | Controls layout viewport on mobile browsers |
| **Standard value** | `width=device-width, initial-scale=1.0` |
| **Without it** | Mobile browsers use 980px default viewport |
| **Accessibility** | Never disable zoom (`user-scalable=no`) |
| **Placement** | In `<head>`, before stylesheets |
| **Notched devices** | Use `viewport-fit=cover` + `env(safe-area-inset-*)` |
| **CSS fallback** | `100vh` is not enough; use `100dvh` for dynamic sizing |
