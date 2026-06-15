# Module 11: HTML Colors

## Introduction
Colors are a fundamental part of web design. HTML provides several ways to specify colors — from color names and hexadecimal codes to RGB, HSL, and more advanced functions. Understanding how colors work in HTML and CSS is essential for creating visually appealing and accessible web pages.

## Learning Objectives
By the end of this module, you will be able to:
- Apply colors to HTML elements using various methods
- Understand hexadecimal color codes
- Use RGB, RGBA, HSL, and HSLA color values
- Choose accessible color combinations
- Use semantic color naming
- Apply colors in practical contexts

## Color Application Methods

Colors in HTML are applied through CSS properties. The main properties are:

```css
color: red;           /* Text color */
background-color: blue;   /* Background color */
border-color: green;     /* Border color */
```

## Color Value Types

### 1. Color Names (Predefined)

HTML supports 140+ standard color names.

```html
<p style="color: red;">Red text</p>
<p style="color: blue;">Blue text</p>
<p style="color: green;">Green text</p>
<p style="background-color: yellow;">Yellow background</p>
<p style="color: white; background-color: black;">White on black</p>
```

**Common Color Names:**

| Name | Hex | Preview |
|------|-----|---------|
| red | #FF0000 | 🔴 |
| blue | #0000FF | 🔵 |
| green | #008000 | 🟢 |
| yellow | #FFFF00 | 🟡 |
| black | #000000 | ⚫ |
| white | #FFFFFF | ⚪ |
| gray | #808080 | |
| purple | #800080 | 🟣 |
| orange | #FFA500 | 🟠 |
| pink | #FFC0CB | 🩷 |

### 2. Hexadecimal Colors (Hex Codes)

Hex codes use a `#` followed by 6 hexadecimal digits (0-9, A-F).

```html
<p style="color: #FF5733;">Custom orange</p>
<p style="background-color: #2ECC71;">Custom green background</p>
```

**Structure:** `#RRGGBB`

| Pair | Represents | Range |
|------|------------|-------|
| RR | Red intensity | 00 (none) to FF (full) |
| GG | Green intensity | 00 to FF |
| BB | Blue intensity | 00 to FF |

**Short Hex (3 digits):**
```css
color: #F00;  /* Same as #FF0000 (red) */
color: #0F0;  /* Same as #00FF00 (green) */
color: #00F;  /* Same as #0000FF (blue) */
```

### 3. RGB Colors

RGB defines colors using the red, green, and blue channels (0-255 each).

```html
<p style="color: rgb(255, 0, 0);">Red via RGB</p>
<p style="color: rgb(46, 204, 113);">Custom green via RGB</p>
<p style="background-color: rgb(52, 152, 219);">Blue background</p>
```

**Percentage Values:**
```css
color: rgb(100%, 0%, 0%);  /* Red */
color: rgb(50%, 50%, 50%); /* Gray */
```

### 4. RGBA Colors (With Alpha Channel)

RGBA adds an alpha channel for opacity (0 = transparent, 1 = opaque).

```html
<p style="background-color: rgba(255, 0, 0, 0.3);">30% opaque red background</p>
<p style="color: rgba(0, 0, 0, 0.5);">50% transparent black</p>
```

### 5. HSL Colors

HSL stands for Hue, Saturation, and Lightness.

```css
color: hsl(0, 100%, 50%);       /* Red */
color: hsl(120, 100%, 50%);     /* Green */
color: hsl(240, 100%, 50%);     /* Blue */
```

| Component | Range | Description |
|-----------|-------|-------------|
| Hue | 0-360 degrees | Position on color wheel |
| Saturation | 0-100% | 0% = gray, 100% = full color |
| Lightness | 0-100% | 0% = black, 50% = normal, 100% = white |

**Hue Wheel:**
```
0°   = Red
60°  = Yellow
120° = Green
180° = Cyan
240° = Blue
300° = Magenta
360° = Red (back to start)
```

### 6. HSLA Colors (With Alpha)

```css
background-color: hsla(200, 80%, 50%, 0.4);  /* 40% opaque blue */
```

### 7. Other Color Functions
```css
color: currentColor;      /* Inherits parent's color value */
background: transparent;  /* Fully transparent */
color: inherit;          /* Inherits from parent element */
```

## Recommended Usage

| Method | Best For |
|--------|----------|
| Color names | Quick prototyping, common colors |
| Hex codes | Production code, precise colors |
| RGB | Programmatic color generation |
| RGBA | Colors requiring transparency |
| HSL | Intuitive color adjustments |
| HSLA | Transparency with HSL |

## Accessible Colors

### Contrast Ratio
WCAG recommends a contrast ratio of:
- **4.5:1** for normal text (AA standard)
- **3:1** for large text (18px+ bold or 24px+ regular)
- **7:1** for enhanced accessibility (AAA standard)

### Tools for Checking Contrast
- WebAIM Contrast Checker
- Chrome DevTools contrast analysis
- Accessibility audit tools

### Example of Good vs Bad Contrast
```html
<!-- ✅ Good contrast -->
<p style="color: #333; background-color: #FFF;">Dark gray on white</p>

<!-- ❌ Poor contrast -->
<p style="color: #CCC; background-color: #FFF;">Light gray on white</p>
```

## Common Mistakes

| Mistake | Incorrect | Correct |
|---------|-----------|---------|
| Missing # in hex | `FF0000` | `#FF0000` |
| Wrong RGB range | `rgb(300, 0, 0)` | `rgb(255, 0, 0)` |
| Missing commas | `rgb(255 0 0)` | `rgb(255, 0, 0)` |
| Wrong alpha range | `rgba(255,0,0, 200)` | `rgba(255,0,0, 0.8)` |
| Poor contrast | Light text on light bg | Ensure 4.5:1 ratio |
| Color-only meaning | Red text = error only | Add icons/text labels |

## Best Practices
1. **Use hex codes for production** — most precise and widely supported
2. **Use RGBA/HSLA for transparency** — more flexible than opacity property
3. **Ensure sufficient contrast** — WCAG AA minimum 4.5:1
4. **Don't rely on color alone** — use text labels, patterns, or icons too
5. **Use CSS custom properties** — for consistent color theming
7. **Test on multiple screens** — colors look different on different monitors
8. **Consider color blindness** — ~8% of males have some form
9. **Use semantic color schemes** — red for errors, green for success

## Summary Notes
- Colors can be specified by name (140+), hex (#RRGGBB), RGB, RGBA, HSL, or HSLA
- Hex codes are the most common for production code
- RGBA/HSLA add alpha transparency (0-1)
- HSL is more intuitive for adjusting colors
- WCAG requires minimum 4.5:1 contrast ratio for text
- Don't use color as the only way to convey information
- Test colors for accessibility and on different displays
- Use CSS custom properties for maintainable color schemes
