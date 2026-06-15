# Module 14: CSS Fonts

## Table of Contents
1. Introduction
2. Learning Objectives
3. Theory
   - Font Family
   - Generic Font Families
   - Font Size (Units and Techniques)
   - Font Weight
   - Font Style and Variant
   - Line Height
   - Font Shorthand
   - Web Fonts with @font-face
   - Google Fonts and Web Font Services
   - Font-Display
   - Variable Fonts
   - Font Loading Strategies
   - System Font Stack
4. Visual Explanation
5. Common Mistakes
6. Best Practices
7. Accessibility Considerations
8. Performance Considerations
9. Browser Compatibility
10. Summary Notes

## Introduction
CSS fonts control the typeface, size, weight, style, and other typographic characteristics of text. Choosing and styling fonts properly is crucial for readability, brand identity, and user experience. CSS provides extensive control over web typography including custom web fonts, variable fonts, and fine-grained control over how fonts are loaded and rendered.

Typography is the visual representation of language. On the web, fonts directly impact content readability, brand perception, page performance, and accessibility. Modern CSS font capabilities — from `@font-face` to variable fonts to `font-display` — give developers unprecedented control over the typographic experience.

## Learning Objectives
By the end of this module, you will be able to:
- Set `font-family` with proper fallback stacks for reliable rendering
- Control font size, weight, style, and variant with appropriate units
- Use the font shorthand property efficiently
- Import and use web fonts with `@font-face`
- Understand web-safe fonts and generic families
- Use Google Fonts and other web font services
- Implement `font-display` for optimal performance and user experience
- Work with variable fonts for file-size-efficient typographic variety
- Choose between system fonts, web fonts, and icon fonts
- Create responsive typography with `clamp()` and viewport units

## Theory

### Font Family
The `font-family` property specifies a prioritized list of font family names and/or generic family names. The browser uses the first font it recognizes:

```css
/* Font stack with fallbacks */
font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
font-family: Georgia, 'Times New Roman', Times, serif;
font-family: 'Courier New', Courier, monospace;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

**How font stacks work:**
The browser tries each font in order. If the first font is installed on the user's system, it's used. If not, it tries the next, and so on. Always end with a generic family (sans-serif, serif, monospace) to ensure the browser always has a valid font to use.

```css
/* Good — ends with generic family */
font-family: 'Open Sans', Arial, sans-serif;

/* Bad — no fallback; browser may use default serif */
font-family: 'ObscureFont';
```

**Quoting font names:**
- Font names with spaces MUST be quoted: `'Open Sans'`, `"Times New Roman"`
- Single-word font names don't need quotes: `Arial`, `Georgia`
- Generic families should NOT be quoted: `sans-serif` (not `'sans-serif'`)

### Generic Font Families
CSS defines five generic families that serve as ultimate fallbacks:

| Generic Family | Characteristics | Examples |
|----------------|-----------------|----------|
| `serif` | Small strokes (serifs) at letter ends | Times New Roman, Georgia, Garamond |
| `sans-serif` | Clean, no serif strokes | Arial, Helvetica, Verdana, Open Sans |
| `monospace` | Fixed-width characters | Courier New, Consolas, Monaco |
| `cursive` | Handwriting style | Comic Sans MS, Brush Script MT |
| `fantasy` | Decorative/ornamental | Papyrus, Impact |

**Choosing the right generic fallback:**
- `serif` — for print-like, traditional, or long-form reading experiences
- `sans-serif` — for modern interfaces, body text on screens (most common choice)
- `monospace` — for code, data, tabular figures
- `cursive` — rarely used; mainly for decorative headings
- `fantasy` — rarely used; highly unpredictable across systems

### Font Size
CSS provides many ways to size fonts:

```css
/* Absolute (fixed) sizes */
font-size: 16px;          /* Pixels — most common absolute unit */
font-size: 12pt;          /* Points — print layout (1pt = 1/72 inch) */

/* Relative sizes (scale with context) */
font-size: 1.2em;         /* Relative to PARENT's font-size */
font-size: 1.2rem;        /* Relative to ROOT (html) font-size */
font-size: 120%;          /* Percentage of parent's font-size */

/* Viewport-relative sizes */
font-size: 2vw;           /* 2% of viewport width */
font-size: 5vh;           /* 5% of viewport height */
font-size: 3vmin;         /* 3% of smaller viewport dimension */
font-size: 3vmax;         /* 3% of larger viewport dimension */

/* Keyword sizes */
font-size: xx-small;
font-size: x-small;
font-size: small;
font-size: medium;        /* Default (~16px) */
font-size: large;
font-size: x-large;
font-size: xx-large;

/* Relative keywords */
font-size: smaller;       /* Relative to parent — one step down */
font-size: larger;        /* Relative to parent — one step up */

/* Clamp — responsive with min/max */
font-size: clamp(16px, 2vw, 32px);  /* Responsive, never below 16px or above 32px */
```

**rem vs em vs px — which to use?**
- `rem` — BEST for most use cases. Respects user's browser font-size setting. Consistent across the page.
- `em` — Use for components that should scale relative to their container (buttons, cards, modular components). Can cause compounding issues in nested elements.
- `px` — Use for borders, shadows, and fixed-size UI elements. NOT recommended for font sizes (overrides user preferences).
- `vw`/`vh` — Use for responsive typography with `clamp()` for bounds.

```css
/* Recommended font-size strategy */
html {
  font-size: 100%;        /* Respect user's default (typically 16px) */
}

body {
  font-size: 1rem;        /* 16px by default */
}

h1 {
  font-size: clamp(1.75rem, 4vw, 3rem);  /* Responsive heading */
}

small {
  font-size: 0.875rem;    /* 14px if root is 16px */
}
```

### Font Weight
Controls the thickness/boldness of text:

```css
font-weight: normal;    /* 400 — default */
font-weight: bold;      /* 700 — standard bold */
font-weight: lighter;   /* Lighter than parent element */
font-weight: bolder;    /* Bolder than parent element */

/* Numeric weights (100-900) */
font-weight: 100;       /* Thin / Hairline */
font-weight: 200;       /* Extra Light */
font-weight: 300;       /* Light */
font-weight: 400;       /* Normal / Regular */
font-weight: 500;       /* Medium */
font-weight: 600;       /* Semi Bold / Demi Bold */
font-weight: 700;       /* Bold */
font-weight: 800;       /* Extra Bold */
font-weight: 900;       /* Black / Heavy */
```

**Important:** The font must have a weight variant installed for the numeric weight to work. If the font only has Regular (400) and Bold (700), requesting `font-weight: 300` will typically fall back to 400. Variable fonts solve this problem by allowing continuous weight adjustment.

### Font Style and Variant

```css
/* Font style */
font-style: normal;      /* Default */
font-style: italic;      /* Italic version of the font */
font-style: oblique;     /* Oblique (slanted) version */
font-style: oblique 15deg;  /* Oblique with specific angle (modern CSS) */

/* Font variant */
font-variant: normal;
font-variant: small-caps; /* Lowercase letters appear as small uppercase characters */

/* font-variant sub-properties (more control) */
font-variant-ligatures: common-ligatures;     /* Standard ligatures like "fi", "fl" */
font-variant-numeric: lining-nums;            /* Number styles */
font-variant-numeric: oldstyle-nums;          /* Old-style (lowercase) numbers */
font-variant-numeric: tabular-nums;           /* Fixed-width numbers (for tables) */
```

### Line Height
Controls the amount of space above and below text (the line box height):

```css
line-height: 1.5;        /* Unitless — RECOMMENDED. 1.5 × font-size */
line-height: 24px;       /* Fixed — NOT recommended. Doesn't scale */
line-height: 150%;       /* Percentage — OK but not recommended */
line-height: normal;     /* Default — browser-specific (typically 1.2) */
```

**Why unitless is best:**
`line-height: 1.5` means 1.5 times the element's computed font-size. When set on a parent, child elements inherit the `1.5` value (not a computed pixel value), so the line-height scales correctly with each child's font-size.

### Font Shorthand
The `font` shorthand combines multiple font properties:

```css
/* Complete syntax: style weight size/line-height family */
font: italic bold 16px/1.5 'Open Sans', Arial, sans-serif;

/* Minimal: size and family are REQUIRED */
font: 16px/1.5 Arial;

/* Other valid patterns */
font: bold 16px 'Open Sans', sans-serif;
font: italic small-caps bold 16px/1.5 Georgia, serif;
font: 1.2rem 'Courier New', monospace;
```

**Required properties in shorthand:**
- `font-size` and `font-family` are mandatory
- If `line-height` is omitted, it defaults to `normal`
- If `font-weight`, `font-style`, or `font-variant` are omitted, they default to `normal`

### Web Fonts with @font-face
`@font-face` allows you to use custom fonts that aren't installed on the user's system:

```css
@font-face {
  font-family: 'MyCustomFont';
  src: url('myfont.woff2') format('woff2'),      /* WOFF2 — best format */
       url('myfont.woff') format('woff');          /* WOFF — fallback */
  font-weight: normal;
  font-style: normal;
  font-display: swap;                               /* Controls loading behavior */
}

@font-face {
  font-family: 'MyCustomFont';
  src: url('myfont-bold.woff2') format('woff2');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
```

**Using the custom font:**
```css
body {
  font-family: 'MyCustomFont', Arial, sans-serif;
}

h1 {
  font-family: 'MyCustomFont', Georgia, serif;
  font-weight: bold;   /* Uses myfont-bold.woff2 */
}
```

**Font formats:**
| Format | File Extension | Compression | Browser Support |
|--------|---------------|-------------|-----------------|
| WOFF2 | .woff2 | Best (30-50% smaller than WOFF) | Chrome, Firefox, Safari, Edge |
| WOFF | .woff | Good | All modern browsers |
| TTF/OTF | .ttf/.otf | None | All browsers (larger files) |
| EOT | .eot | Poor | IE only (legacy) |
| SVG | .svg | None | Safari (legacy, deprecated) |

**Best practice:** Use WOFF2 with WOFF fallback. Modern browsers handle this perfectly.

### Google Fonts and Web Font Services
Google Fonts is the most popular web font service — free, open-source, and CDN-hosted:

```html
<!-- In HTML <head> — load the font -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

```css
/* In CSS */
body { font-family: 'Roboto', Arial, sans-serif; }
```

**Optimizing Google Fonts:**
1. Request only the weights you need (`wght@400;700` rather than `wght@400;500;600;700;800;900`)
2. Use `display=swap` parameter for better performance
3. Preconnect to Google Fonts servers for faster loading
4. Consider self-hosting for critical fonts or GDPR compliance

```html
<!-- Preconnect to Google Fonts servers -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Subset the font request to only needed characters -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&text=HelloWorld" rel="stylesheet">
```

**Other web font services:**
- Adobe Fonts (Typekit) — subscription-based, high-quality fonts
- Fontsource — open-source, npm-installable fonts
- Bunny Fonts — GDPR-compliant Google Fonts alternative

### Font-Display
Controls how fonts are rendered during loading — critical for user experience:

| Value | Behavior | FOIT/FOUT |
|-------|----------|-----------|
| `auto` | Browser default (usually `block`) | FOIT |
| `block` | Invisible text for 3s, then swap to custom font | FOIT (3s) |
| `swap` | Fallback font immediately, swap when custom loads | FOUT (immediate text) |
| `fallback` | Very short block (~100ms), then fallback for ~3s | Short FOIT |
| `optional` | Optional load — browser may skip if network is slow | No FOUT (uses fallback) |

```css
@font-face {
  font-family: 'MyFont';
  src: url('myfont.woff2');
  font-display: swap;   /* Recommended for most cases — text visible immediately */
}
```

**FOIT vs FOUT:**
- **FOIT (Flash of Invisible Text)**: Text is invisible while the font loads — creates blank space.
- **FOUT (Flash of Unstyled Text)**: Text appears in fallback font first, then swaps to the custom font — causes a layout shift.
- **`font-display: swap`** is usually preferred because users can read text immediately. The layout shift from the swap is a reasonable trade-off for seeing content right away.

### Variable Fonts
Variable fonts are a single font file that contains multiple variations (weight, width, slant, etc.):

```css
/* Using a variable font */
body {
  font-family: 'Roboto Flex', sans-serif;
  font-weight: 400;           /* Any value 100-1000 works */
  font-stretch: 100%;         /* Any percentage */
}

/* Fine-grained control with font-variation-settings */
.title {
  font-family: 'Roboto Flex', sans-serif;
  font-variation-settings:
    'wght' 700,       /* Weight axis */
    'wdth' 80,        /* Width axis */
    'slnt' -5;        /* Slant axis */
}
```

**Advantages of variable fonts:**
- One file replaces multiple weight/style files (much smaller total download)
- Continuous variation — you can use any weight value between min and max (not just 100, 200, 300...)
- Creative possibilities with axes like width, slant, optical size
- Fewer HTTP requests

**Supported axes (common):**
| Axis Tag | Property | Description |
|----------|----------|-------------|
| wght | font-weight | Weight (100-900) |
| wdth | font-stretch | Width (50-200%) |
| slnt | font-style: oblique | Slant angle |
| ital | font-style: italic | Italic on/off |
| opsz | font-optical-sizing | Optical size for different display contexts |

### System Font Stack
For maximum performance, use the system's native font:
```css
/* macOS/iOS system font */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
             Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

/* Tailwind CSS system font stack */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
             'Helvetica Neue', Arial, sans-serif;

/* GitHub's system font stack */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
             Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
```

**Advantages of system fonts:**
- Zero additional download (instant rendering)
- No FOIT/FOUT
- Matches the operating system's native look and feel
- Better performance (no HTTP requests, no parsing)

## Visual Explanation
```
Font Fallback Stack:

  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;

  1. Try 'Open Sans'         → Installed? Use it. ✓
  2. Not installed? Try next → 'Helvetica Neue' installed? Use it.
  3. Not installed? Try next → Arial installed? Use it.
  4. Not installed? Use ANY  → sans-serif system default.

Font Loading with font-display:

  Time → 0ms     100ms     300ms      3s
          │         │         │         │
  block   │ (invisible text)  │   swap → use custom font
          │                   │
  swap    │→ fallback font immediately → swap to custom when loaded
          │
  fallback│→ short block → fallback → if custom loads in 3s, swap; else keep fallback

Variable Fonts vs Static Fonts:

  Static:   regular.woff2 (400) + bold.woff2 (700) + italic.woff2 (400i)
            = 3 files, ~90KB total

  Variable: RobotoFlex.woff2 (100-900 weight, 0-15deg slant, etc.)
            = 1 file, ~50KB total, with MORE variation possibilities
```

## Common Mistakes
1. **Missing fallback fonts**: Always end font-family stacks with a generic family (sans-serif, serif, monospace)
2. **Using too many web fonts**: Each font weight/style is an extra HTTP request — limit to 2-3 families and only needed weights
3. **Not requesting font-weight variants**: Only included weights are available — if you request 400 but use 700, the browser fakes it (often poorly)
4. **Using `px` for font-size**: `px` overrides user browser settings — use `rem` for accessibility
5. **Forgetting `font-display`**: Without it, browsers default to FOIT (invisible text for up to 3 seconds)
6. **Loading entire Google Fonts without subsetting**: Requesting all Unicode characters when you only need Latin — wasteful
7. **Using too many font files**: Each additional weight, style, or family adds HTTP requests and KBs
8. **Faking bold/italic**: When a font doesn't have a bold variant, the browser fakes it — this usually looks bad. Use proper font weights.
9. **Not considering rendering differences**: Fonts render differently across OSes — test on Windows, macOS, and Linux
10. **Overusing `font-weight: bold` on thin fonts**: Not all fonts have visually distinct bold versions — test before committing

## Best Practices
- Use `rem` for font sizes (respects user's browser font-size setting)
- Limit to 2-3 font families per page for performance
- Use system font stacks for performance-critical interfaces (dashboards, admin panels)
- Prefer WOFF2 format for web fonts (best compression)
- Use `font-display: swap` to prevent invisible text during font loading
- Set a base font-size on `html` — `font-size: 100%` (respects user defaults)
- Use `clamp(min, preferred, max)` for responsive font sizes
- Preload critical fonts for faster initial rendering
- Use variable fonts when possible (one file, many variations)
- Test font rendering across operating systems (Windows often renders text differently than macOS)
- Subset fonts to include only the characters you need (especially for CJK fonts)
- Use `font-optical-sizing: auto` for variable fonts to auto-adopt optical size

```css
/* Responsive typography system */
:root {
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-heading: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace;
}

html {
  font-size: 100%; /* 16px default */
}

body {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
}

/* Fluid typography with clamp */
h1 { font-size: clamp(1.75rem, 4vw + 1rem, 3rem); }
h2 { font-size: clamp(1.5rem, 3vw + 0.5rem, 2.25rem); }
```

## Accessibility Considerations
- Always use relative units (`rem`) for font sizes to respect user browser settings
- Ensure minimum font size of 16px for body text (some guidelines suggest 18px for readability)
- Test with browser zoom at 200% — text should not be clipped or overlap
- Avoid using `text-transform: uppercase` on large amounts of body text
- Long line lengths reduce readability — aim for 45-75 characters per line (use `max-width: 65ch`)
- Ensure sufficient line-height (1.5+) for users with dyslexia and visual impairments
- Avoid using fonts that are too similar in weight — differentiation helps scanning
- Provide alternative styling when custom fonts fail to load (fallback should look intentional, not broken)
- Some font families affect readability for users with dyslexia — sans-serif with good letter-spacing is preferred
- Test with Windows High Contrast Mode — custom fonts should still be legible

## Performance Considerations
- Web fonts are one of the biggest performance bottlenecks — each font file is an HTTP request and KBs of data
- WOFF2 typically reduces file size by 30-50% compared to WOFF and 50-70% compared to TTF
- Use `font-display: swap` or `optional` to prevent FOIT
- Preconnect to font CDNs to reduce connection setup time
- Preload critical fonts with `<link rel="preload">`
- Subset fonts to only include the characters needed (especially important for CJK fonts)
- Use variable fonts to replace multiple static font files with one file
- Limit to 2-3 font families and only the weight variants you actually use
- Self-host fonts for complete control over caching and delivery
- Consider service workers for caching fonts offline

```html
<!-- Preloading a critical font -->
<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
```

## Browser Compatibility
| Feature | Chrome | Firefox | Safari | Edge | Opera | IE |
|---------|--------|---------|--------|------|-------|----|
| font-family | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| font-size | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| font-weight | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| font-style | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| font-variant | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| font shorthand | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| @font-face | 5+ | 3.5+ | 3.1+ | 12+ | 10+ | 9+ |
| font-display | 49+ | 46+ | 11.1+ | 79+ | 36+ | No |
| WOFF | 6+ | 3.6+ | 5.1+ | 12+ | 11.1+ | 9+ |
| WOFF2 | 36+ | 39+ | 10+ | 14+ | 23+ | No |
| Variable fonts | 62+ | 62+ | 11+ | 79+ | 49+ | No |
| font-variation-settings | 62+ | 62+ | 11+ | 79+ | 49+ | No |
| font-optical-sizing | 62+ | 62+ | 11+ | 79+ | 49+ | No |
| clamp() | 79+ | 75+ | 13.1+ | 79+ | 66+ | No |
| font-variant-numeric | 52+ | 41+ | 9.1+ | 79+ | 39+ | No |

Basic font properties are universally supported. @font-face is supported since IE9 and in all modern browsers. Variable fonts have excellent modern support (2021+).

## Summary Notes
- `font-family` specifies fonts with fallbacks — always end with a generic family (serif, sans-serif, monospace)
- `rem` is preferred for font sizes (progressive, accessible scaling)
- `font-weight` ranges 100-900 (normal = 400, bold = 700) — font must have the weight variant installed
- Unitless `line-height` (1.5-1.6) is best practice — scales correctly with font size
- `font` shorthand: `style weight size/line-height family` (size and family are required)
- `@font-face` loads custom fonts — provide WOFF2 with WOFF fallback
- `font-display: swap` prevents FOIT (Flash of Invisible Text) — users see fallback font immediately
- Always include a generic family as final fallback in every font stack
- WOFF2 is the most efficient web font format — 30-50% smaller than WOFF
- Variable fonts offer continuous variation with single-file efficiency
- Limit to 2-3 font families per page for performance
- Preconnect, preload, and subset fonts for optimal loading
- System font stacks provide zero-cost, instant-rendering typography
- Test font rendering across Windows, macOS, and Linux
