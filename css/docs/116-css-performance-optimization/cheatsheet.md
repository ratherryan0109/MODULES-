# CSS Performance Cheatsheet

## Critical Rendering Path
```
HTML → DOM
          → Render Tree → Layout → Paint → Composite
CSS  → CSSOM
```

## Load Strategies
| Method | Render-blocking | Use Case |
|--------|----------------|----------|
| `<link>` in `<head>` | Yes | Critical CSS |
| Inline `<style>` | Yes (minimal) | Critical above-fold CSS |
| `<link rel="preload">` | No | Non-critical CSS |
| `<link media="print">` | No | Print styles |
| `<link media="none">` | No | Async CSS |

## Animation Performance
| Property | Cost | Recommendation |
|----------|------|---------------|
| `transform` | GPU composite | ✅ Best |
| `opacity` | GPU composite | ✅ Best |
| `filter` | GPU composite | ✅ Good |
| `color` | Paint | ⚠️ OK |
| `background` | Paint | ⚠️ OK |
| `width`/`height` | Layout | ❌ Avoid |
| `top`/`left` | Layout | ❌ Avoid |
| `margin`/`padding` | Layout | ❌ Avoid |

## CSS Code Patterns
```css
/* Critical CSS in <head> */
<style>
  .header { ... }
  .hero { ... }
</style>

/* Async non-critical CSS */
<link rel="preload" href="styles.css" as="style" onload="this.rel='stylesheet'">

/* Lazy render below-fold */
.lazy-section {
  content-visibility: auto;
  contain-intrinsic-size: 600px;
}

/* Font loading */
@font-face {
  font-family: 'Custom';
  font-display: swap;
  src: url('font.woff2');
}

/* Performance budget hints */
.will-animate {
  will-change: transform;
}
```

## Tools
| Tool | Purpose |
|------|---------|
| Chrome DevTools Coverage | Find unused CSS |
| Lighthouse | Performance audit |
| PurgeCSS | Remove unused CSS |
| CSSNano | Minification |
| webpack/css-minimizer | Build-time optimization |

## Metrics to Track
- **CSS file size** (target < 100KB)
- **First Contentful Paint** (FCP)
- **CSS coverage %** (target > 80% used)
- **Render-blocking time**
- **Style recalculation time**
