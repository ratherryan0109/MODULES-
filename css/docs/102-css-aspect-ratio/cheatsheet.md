# CSS Aspect Ratio Cheatsheet

## Syntax

```css
/* Single value (ratio by division) */
aspect-ratio: 1;           /* 1:1 square */
aspect-ratio: 2;           /* 2:1 panorama */

/* Two values (explicit ratio) */
aspect-ratio: 16 / 9;      /* 16:9 widescreen */
aspect-ratio: 4 / 3;       /* 4:3 standard */

/* Auto (intrinsic ratio) */
aspect-ratio: auto;        /* Uses element's natural ratio */

/* Auto with fallback */
aspect-ratio: auto 16 / 9; /* Intrinsic if available, else 16:9 */
```

## Common Ratios Reference

| Ratio | Name | Usage | Height calc (for 400px wide) |
|-------|------|-------|------------------------------|
| 1:1 | Square | Avatars, thumbnails, icons | 400px |
| 4:3 | Standard | Photos, tablets, monitors | 300px |
| 16:9 | Widescreen | Video, modern displays | 225px |
| 3:2 | Photo | 35mm photography | 266px |
| 2:1 | Panoramic | Cinematic, banners | 200px |
| 21:9 | Ultrawide | Cinema displays | 171px |
| 9:16 | Vertical | TikTok, Stories | 711px |
| 3:4 | Portrait | Vertical photos | 533px |

## Priority Order

When multiple sizing properties are set:

1. Explicit `width` + explicit `height` → aspect-ratio ignored
2. Explicit `width` + `aspect-ratio` → height calculated
3. Explicit `height` + `aspect-ratio` → width calculated
4. Intrinsic dimensions + `aspect-ratio: auto`
5. No constraints → aspect-ratio has no effect

## Object-Fit Combinations

```css
/* Fill the box completely (may distort) */
object-fit: fill;

/* Fill and crop to maintain ratio */
object-fit: cover;

/* Show all content, may letterbox */
object-fit: contain;

/* Show at natural size, clip if needed */
object-fit: none;

/* Scale down if larger than container */
object-fit: scale-down;
```

## Padding-Bottom Hack Reference

| Target Ratio | Padding % | Formula |
|-------------|-----------|---------|
| 16:9 | 56.25% | 9/16 × 100 |
| 4:3 | 75% | 3/4 × 100 |
| 1:1 | 100% | 1/1 × 100 |
| 2:1 | 50% | 1/2 × 100 |
| 21:9 | 42.85% | 9/21 × 100 |
| 3:2 | 66.67% | 2/3 × 100 |
| 3:4 | 133.33% | 4/3 × 100 |

## Quick Reference Patterns

```css
/* Responsive video */
.video {
  width: 100%;
  aspect-ratio: 16 / 9;
}

/* Square avatar */
.avatar {
  width: 48px;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
}

/* Image gallery item */
.gallery-item {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 8px;
}

/* Hero banner */
.hero {
  width: 100%;
  aspect-ratio: 21 / 9;
  background: url('hero.jpg') center/cover;
}

/* Card image */
.card-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

/* Loading skeleton */
.skeleton {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

/* Decorative divider */
.divider {
  width: 100%;
  aspect-ratio: 6 / 1;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 0 0 50% 50%;
}
```

## Fallback for Legacy Browsers

```css
/* Modern approach */
.modern-element {
  width: 100%;
  aspect-ratio: 16 / 9;
}

/* Fallback wrapped in @supports */
@supports not (aspect-ratio: 16 / 9) {
  .fallback-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    height: 0;
  }
  .fallback-wrapper > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
```

## Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 89+ | Full |
| Firefox | 87+ | Full |
| Safari | 15+ | Full |
| Edge | 89+ | Full |
| Opera | 75+ | Full |
| Samsung Internet | 15+ | Full |
| IE | — | None |
