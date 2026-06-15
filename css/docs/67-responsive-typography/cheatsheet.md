# Responsive Typography Cheatsheet

## Fluid Typography with clamp()

```css
/* Body text */
body { font-size: clamp(1rem, 0.5rem + 1vw, 1.25rem); }

/* Headings */
h1 { font-size: clamp(2rem, 1rem + 4vw, 4rem); }
h2 { font-size: clamp(1.5rem, 1rem + 3vw, 3rem); }
h3 { font-size: clamp(1.25rem, 0.8rem + 2vw, 2.5rem); }
```

## CSS Units for Typography

| Unit | Relative To | Usage |
|------|-------------|-------|
| `px` | Device pixel | Absolute, avoid for typography |
| `em` | Parent font-size | Component-local sizing |
| `rem` | Root font-size | Global consistent sizing |
| `vw` | Viewport width (1/100) | Fluid scaling |
| `ch` | Width of `0` character | Line length control |
| `ex` | Height of `x` character | Vertical measure |

## Readability Guidelines

| Property | Body Text | Headings |
|----------|-----------|----------|
| Font size | 16px–20px (1rem–1.25rem) | 1.5rem–4rem |
| Line height | 1.5–1.8 | 1.1–1.3 |
| Line length | 45–75 characters (`65ch`) | Any |
| Letter spacing | normal | -0.02em to normal |
| Font weight | 400 | 600–700 |

## Modular Type Scales

| Ratio | Name | Step ×1.25 | Step ×1.333 |
|-------|------|------------|-------------|
| 1.200 | Minor Third | 1.2 | 1.333 |
| 1.250 | Major Third | 1.25 | 1.333 |
| 1.333 | Perfect Fourth | 1.333 | 1.333 |
| 1.500 | Perfect Fifth | 1.5 | 1.333 |

### Scale Example (1.25 Major Third)

```css
.ms--1 { font-size: 0.8rem; }  /* Small text */
.ms-0  { font-size: 1rem; }     /* Base */
.ms-1  { font-size: 1.25rem; }  /* h4 */
.ms-2  { font-size: 1.563rem; } /* h3 */
.ms-3  { font-size: 1.953rem; } /* h2 */
.ms-4  { font-size: 2.441rem; } /* h1 */
.ms-5  { font-size: 3.052rem; } /* Hero */
```

## System Font Stack

```css
font-family: system-ui, -apple-system, 'Segoe UI', Roboto,
  'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
  'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
```

## @font-face Best Practices

```css
@font-face {
  font-family: 'MyFont';
  src: url('myfont.woff2') format('woff2');
  font-display: swap;
  size-adjust: 100%;
}
```

## Letter Spacing for Accessibility

```css
/* Dyslexia-friendly */
p { letter-spacing: 0.12em; word-spacing: 0.16em; }

/* All-caps readability */
.caps { letter-spacing: 0.1em; }
```

## Line Length Control

```css
/* Optimal reading width */
article { max-width: 65ch; }

/* Fluid max-width */
article { max-width: min(65ch, 100%); }
```

## CSS Functions for Typography

```css
/* Fluid with fallback */
font-size: min(max(16px, 4vw), 48px);

/* Modern fluid */
font-size: clamp(1rem, 2.5vw, 2rem);

/* Viewport-relative */
font-size: calc(16px + 0.5vw);
```

## Performance Tips
- Use system fonts when possible
- Subset web fonts (remove unused glyphs)
- Use `font-display: swap`
- Prefer variable fonts over multiple weight files
- Preload critical fonts: `<link rel="preload">`
- Use `size-adjust` to prevent layout shift
