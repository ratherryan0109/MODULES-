# HTML Iframes — Cheatsheet

## Basic Syntax

```html
<!-- Basic iframe -->
<iframe src="https://example.com" width="600" height="400" title="Description" allowfullscreen></iframe>

<!-- Inline HTML (no external URL) -->
<iframe srcdoc="<h1>Hello</h1><p>Inline content</p>" title="Inline"></iframe>

<!-- Highly secure (sandboxed) -->
<iframe src="https://thirdparty.com" sandbox="allow-scripts" title="Secure embed"></iframe>
```

## Attributes Quick Reference

| Attribute           | Values                                   | Description                           |
|---------------------|------------------------------------------|---------------------------------------|
| `src`              | URL                                      | Page to embed                         |
| `srcdoc`           | HTML string                              | Inline HTML content                   |
| `width`            | pixels                                   | Width of the iframe                   |
| `height`           | pixels                                   | Height of the iframe                  |
| `title`            | text                                     | Accessible label (required)           |
| `name`             | text                                     | Target name for links/forms           |
| `sandbox`          | tokens (see below)                       | Security restrictions                 |
| `allow`            | feature policy string                    | Permissions for features              |
| `loading`          | `eager` \| `lazy`                       | Load behavior                         |
| `referrerpolicy`   | `no-referrer` \| `origin` \| `unsafe-url` etc. | Referrer header control      |
| `allowfullscreen`  | (boolean)                                | Allow fullscreen API                  |
| `importance`       | `auto` \| `high` \| `low`              | Loading priority hint                 |

## Sandbox Tokens

| Token                                    | Description                           |
|------------------------------------------|---------------------------------------|
| (empty — no tokens)                      | All restrictions apply                |
| `allow-scripts`                          | Enables JavaScript                    |
| `allow-same-origin`                      | Allows same-origin access             |
| `allow-forms`                            | Enables form submission               |
| `allow-popups`                           | Enables popup windows                 |
| `allow-modals`                           | Enables alert/confirm/prompt          |
| `allow-orientation-lock`                 | Allows screen orientation lock        |
| `allow-pointer-lock`                     | Allows Pointer Lock API               |
| `allow-presentation`                     | Allows Presentation API               |
| `allow-top-navigation`                   | Navigates top-level window            |
| `allow-top-navigation-by-user-activation`| Top navigation only on user gesture   |

### Security Warning

```
sandbox="allow-scripts allow-same-origin"  ← DANGEROUS: nullifies sandbox
```

## postMessage API

### Parent → Iframe

```javascript
// Send
const iframe = document.querySelector('iframe');
iframe.contentWindow.postMessage({ key: 'value' }, 'https://target-origin.com');

// Receive
window.addEventListener('message', (event) => {
  // ALWAYS validate origin!
  if (event.origin !== 'https://trusted.com') return;
  console.log(event.data);
});
```

### Iframe → Parent

```javascript
// Send
window.parent.postMessage({ key: 'value' }, 'https://parent-origin.com');

// Receive
window.addEventListener('message', (event) => {
  if (event.origin !== 'https://parent.com') return;
  // Handle message
});
```

## CSP for Iframes

```http
# Restrict what this page can embed (outgoing)
Content-Security-Policy: frame-src 'self' https://*.youtube.com;

# Restrict where this page can be embedded (incoming, anti-clickjacking)
Content-Security-Policy: frame-ancestors 'self' https://trusted.com;
```

```html
<!-- As meta tag -->
<meta http-equiv="Content-Security-Policy" content="frame-src 'self' https://*.youtube.com;">
```

## Responsive Iframe

```css
/* Method 1: Padding trick */
.iframe-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
}
.iframe-container iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  border: none;
}

/* Method 2: aspect-ratio (modern) */
iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
  border: none;
}
```

## Permissions Policy (allow attribute)

```
allow="camera 'none'; microphone 'none'; fullscreen; geolocation 'src'"
```

| Directive       | Description                        |
|-----------------|------------------------------------|
| `camera`        | Access to video camera              |
| `microphone`    | Access to audio microphone          |
| `fullscreen`    | Allow fullscreen API                |
| `geolocation`   | Access to location data             |
| `accelerometer` | Access to device motion sensors     |
| `gyroscope`     | Access to gyroscope sensor          |
| `magnetometer`  | Access to magnetometer sensor       |
| `payment`       | Access to Payment Request API       |
| `picture-in-picture` | Picture-in-Picture mode        |

## Referrer Policy Values

| Value                                | Referrer Sent               |
|--------------------------------------|------------------------------|
| `no-referrer`                        | Never                        |
| `no-referrer-when-downgrade`         | No on HTTPS→HTTP (default)   |
| `origin`                             | Only origin                  |
| `origin-when-cross-origin`           | Origin if cross-origin       |
| `same-origin`                        | Only same-origin             |
| `strict-origin`                      | Origin on HTTPS only         |
| `strict-origin-when-cross-origin`    | Origin is cross-origin HTTPS |
| `unsafe-url`                         | Full URL (insecure)          |

## Iframe Events

```javascript
const iframe = document.querySelector('iframe');

// Load success
iframe.addEventListener('load', () => {
  console.log('Iframe loaded');
});

// Load error (not universally supported)
iframe.addEventListener('error', () => {
  console.log('Iframe failed');
});

// Cross-origin access (throws SecurityError)
try {
  const doc = iframe.contentDocument;
} catch (e) {
  console.log('Cross-origin iframe — cannot access');
}
```

## Common Security Headers

| Header                 | Value                        | Purpose                    |
|------------------------|------------------------------|----------------------------|
| `X-Frame-Options`      | `DENY` \| `SAMEORIGIN`      | Clickjacking prevention    |
| `Content-Security-Policy` | `frame-ancestors 'self'`  | Clickjacking prevention    |
| `Cross-Origin-Opener-Policy` | `same-origin`          | Cross-origin isolation     |
| `Cross-Origin-Embedder-Policy` | `require-corp`      | Cross-origin isolation     |

## Lazy Loading

```html
<!-- Native lazy loading -->
<iframe src="page.html" loading="lazy" title="Lazy iframe"></iframe>

<!-- Intersection Observer (for older browsers) -->
<script>
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
});
document.querySelectorAll('iframe[data-src]').forEach(el => observer.observe(el));
</script>
```

## Frame-Breaking (Anti-Clickjacking)

```javascript
// Prevent page from being framed
if (window.top !== window.self) {
  window.top.location = window.self.location;
}
```

## Accessing Iframe Content

```javascript
// Same-origin access
const iframe = document.getElementById('myFrame');
const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
iframDoc.body.style.background = 'red';

// Cross-origin access (NOT POSSIBLE)
// Access via postMessage only
```
