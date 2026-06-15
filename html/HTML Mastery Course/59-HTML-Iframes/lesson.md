# Module 59: HTML Iframes

## Introduction

The HTML `<iframe>` (inline frame) element allows web developers to embed another HTML document within the current page. Iframes are fundamental to modern web development — powering embedded content from YouTube, Google Maps, payment forms, social media widgets, and entire third-party applications. This module covers iframe attributes, security considerations, communication between frames, and best practices.

## Learning Objectives

By the end of this module, you will be able to:
- Embed external content using iframes with proper attributes
- Control iframe security with the sandbox attribute
- Communicate between parent and iframe using postMessage
- Implement responsive iframes for various content types
- Handle iframe loading, errors, and performance optimization
- Apply Content Security Policy (CSP) for iframe governance

## Basic Syntax

```html
<iframe 
  src="https://example.com/page"
  width="600" 
  height="400"
  title="Embedded content">
</iframe>
```

## Core Attributes

| Attribute         | Values                     | Description                                   |
|-------------------|----------------------------|-----------------------------------------------|
| `src`            | URL                        | The URL of the page to embed                  |
| `srcdoc`         | HTML string                | Inline HTML to render instead of src          |
| `width`          | pixels                     | Width of the iframe                           |
| `height`         | pixels                     | Height of the iframe                          |
| `title`          | text                       | Accessible label (required for WCAG)          |
| `name`           | text                       | Name for targeting (forms, links)             |
| `allow`          | feature policy             | Permissions for the iframe (camera, mic, etc.)|
| `sandbox`        | space-separated tokens     | Restricts capabilities of the content         |
| `loading`        | `eager` `lazy`             | Defer loading until near viewport             |
| `referrerpolicy` | `no-referrer` `origin` etc.| Controls referrer header                      |
| `allowfullscreen`| (boolean)                  | Allow fullscreen mode                         |
| `importance`     | `auto` `high` `low`        | Hint for iframe loading priority              |

## The sandbox Attribute

The `sandbox` attribute applies extra restrictions to content in the iframe. Values:

| Token                    | Restriction Removed When Present           |
|--------------------------|--------------------------------------------|
| (empty, no tokens)       | All restrictions apply                     |
| `allow-scripts`          | Allows JavaScript execution                |
| `allow-same-origin`      | Treats content as same origin              |
| `allow-forms`            | Allows form submission                     |
| `allow-popups`           | Allows popup windows                       |
| `allow-modals`           | Allows modal dialogs (alert, confirm)      |
| `allow-orientation-lock` | Allows screen orientation lock             |
| `allow-pointer-lock`     | Allows pointer lock API                    |
| `allow-presentation`     | Allows presentation mode                   |
| `allow-top-navigation`   | Allows navigation of top-level window      |
| `allow-top-navigation-by-user-activation` | Navigation only with user gesture|

```html
<!-- Most restrictive: no scripts, no forms, no popups -->
<iframe src="page.html" sandbox></iframe>

<!-- Allow scripts but everything else restricted -->
<iframe src="page.html" sandbox="allow-scripts"></iframe>

<!-- Allow scripts and same-origin (risky) -->
<iframe src="page.html" sandbox="allow-scripts allow-same-origin"></iframe>
```

## The allow Attribute (Permissions Policy)

Controls access to browser features:

```html
<iframe 
  src="app.html"
  allow="camera 'none'; microphone 'none'; fullscreen 'self'; geolocation 'src'">
</iframe>
```

## The srcdoc Attribute

Instead of loading an external URL, embed inline HTML:

```html
<iframe srcdoc="<h1>Hello World</h1><p>This content is inline.</p>"
  width="400" height="200" title="Inline content">
</iframe>
```

Cross-browser note: `srcdoc` takes priority over `src`. If `srcdoc` is not supported, the browser falls back to `src`.

## Responsive Iframes

```css
/* Aspect ratio container */
.iframe-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
}
.iframe-container iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
}
```

## Window.postMessage()

Cross-origin communication between parent and iframe:

### In the parent page:

```javascript
// Send message to iframe
const iframe = document.querySelector('iframe');
iframe.contentWindow.postMessage({ type: 'GREETING', payload: 'Hello!' }, 'https://example.com');

// Receive message from iframe
window.addEventListener('message', (event) => {
  // Always check origin for security
  if (event.origin !== 'https://example.com') return;
  console.log('Received:', event.data);
});
```

### In the iframe page:

```javascript
// Send message to parent
window.parent.postMessage({ type: 'RESPONSE', payload: 'Hi back!' }, 'https://parent.com');

// Receive from parent
window.addEventListener('message', (event) => {
  if (event.origin !== 'https://parent.com') return;
  // Handle message
});
```

## Iframe Loading and Events

```javascript
const iframe = document.querySelector('iframe');

// Load event
iframe.addEventListener('load', () => {
  console.log('Iframe loaded');
});

// Error handling
iframe.addEventListener('error', () => {
  console.log('Iframe failed to load');
});

// Check iframe content
try {
  const doc = iframe.contentDocument || iframe.contentWindow.document;
} catch (e) {
  // Cross-origin access will throw
}
```

## Content Security Policy (CSP)

Control which iframes can be embedded on your site and which sources your site can embed:

```http
# Allow framing only from specific sources
Content-Security-Policy: frame-ancestors 'self' https://trusted.com;

# Restrict what can be embedded in iframes
Content-Security-Policy: frame-src 'self' https://*.youtube.com;
```

As meta tag:
```html
<meta http-equiv="Content-Security-Policy" content="frame-src 'self' https://*.youtube.com;">
```

## Common Mistakes

1. **Missing title attribute**: WCAG failure — screen readers cannot identify iframe content without a title.

2. **Not using sandbox for untrusted content**: Embedding third-party pages without sandbox exposes users to scripts, popups, and navigation changes.

3. **Ignoring postMessage origin validation**: Always check `event.origin` to prevent cross-site scripting attacks.

4. **Hardcoded dimensions**: Fixed pixel sizes break on mobile. Always use responsive containers.

5. **No loading="lazy"**: Off-screen iframes should use lazy loading to improve performance.

6. **Forgetting fallback content**: Some browsers may block iframes. Provide fallback text.

## Best Practices

1. **Always include title attribute** for accessibility.

2. **Use sandbox for untrusted content**: Start with the most restrictive sandbox and add only needed permissions.

3. **Implement postMessage with origin validation**: Never trust messages without checking event.origin.

4. **Use lazy loading for off-screen iframes**: `loading="lazy"` defers loading until near the viewport.

5. **Make iframes responsive**: Use aspect ratio containers or CSS aspect-ratio property.

6. **Set appropriate referrerpolicy**: Use `no-referrer` or `strict-origin-when-cross-origin` for privacy.

7. **Apply Permissions Policy**: Use the `allow` attribute to restrict feature access.

8. **Consider the X-Frame-Options header**: Websites can prevent being iframed with `X-Frame-Options: DENY` or `SAMEORIGIN`.

9. **Use CSP frame-ancestors**: Protect your site from being embedded by malicious sites.

10. **Provide fallback content**: Text or link inside the iframe for browsers that cannot render it.

## Summary Notes

- `<iframe>` embeds another HTML document within the current page
- The `sandbox` attribute provides security restrictions
- `postMessage()` enables cross-origin communication
- `srcdoc` allows inline HTML content instead of a URL
- The `allow` attribute controls feature permissions (Permissions Policy)
- `loading="lazy"` defers iframe loading for performance
- Always validate `event.origin` in postMessage handlers
- CSP headers control iframe embedding policies
- Responsive iframes require aspect ratio containers
- The `name` attribute allows targeting forms and links
- X-Frame-Options headers prevent clickjacking
