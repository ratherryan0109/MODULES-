# Module 13: CSS Text

## Table of Contents
1. Introduction
2. Learning Objectives
3. Theory
   - Text Alignment
   - Text Decoration (Detailed)
   - Text Transformation
   - Text Spacing (Indent, Letter, Word, Line Height, White Space)
   - Text Shadow
   - Text Overflow and Wrapping
   - Direction and Writing Mode
   - Text Selection Styling
   - Tab Size
   - Hanging Punctuation
4. Visual Explanation
5. Common Mistakes
6. Best Practices
7. Accessibility Considerations
8. Performance Considerations
9. Browser Compatibility
10. Summary Notes

## Introduction
CSS text properties control the visual appearance of text content — alignment, decoration, spacing, transformation, shadow, and wrapping. These properties are essential for creating readable, visually appealing typography on the web. While fonts control the typeface, text properties control how the content behaves within its container.

Typography is 95% of web design. The way text is aligned, spaced, decorated, and truncated directly impacts readability, user engagement, and the overall professional feel of a website. Mastering CSS text properties is essential for any front-end developer who wants to create polished, accessible, and readable web content.

## Learning Objectives
By the end of this module, you will be able to:
- Control text alignment, decoration, and transformation
- Set text indentation and spacing (letter-spacing, word-spacing, line-height)
- Apply text shadows with precise control
- Control text overflow and wrapping behavior
- Use text direction for different writing modes (LTR/RTL)
- Style text selection with CSS
- Handle long words and URLs with overflow-wrap and word-break
- Use modern text-decoration syntax (color, style, thickness)

## Theory

### Text Alignment
Controls the horizontal alignment of text within its containing block:

```css
text-align: left;      /* Default for LTR languages (English, etc.) */
text-align: right;     /* Default for RTL languages (Arabic, Hebrew) */
text-align: center;    /* Centers text within the element */
text-align: justify;   /* Stretches text to fill full width (newspaper style) */
text-align: start;     /* Based on writing direction — left for LTR, right for RTL */
text-align: end;       /* Opposite of start */
```

**Using text-align to center inline children:**
```css
.parent {
  text-align: center;  /* Centers all inline/inline-block children */
}
```

**Justify text considerations:**
`text-align: justify` stretches lines to fill the full width by adding space between words. This can create awkward "rivers" of white space, especially on narrow screens. It should be used carefully:
```css
/* Better justified text with hyphenation */
p {
  text-align: justify;
  hyphens: auto;  /* Adds hyphens to break words, reducing gaps */
}
```

### Text Decoration
Controls decorative lines on text. Modern CSS supports multiple decoration properties:

```css
/* Basic values */
text-decoration: none;           /* Removes default link underline */
text-decoration: underline;      /* Adds underline below text */
text-decoration: overline;       /* Line above text */
text-decoration: line-through;   /* Strikethrough */

/* Modern shorthand with style and color (CSS Text Decoration Level 3) */
text-decoration: underline wavy red;
text-decoration: underline dotted blue 2px;

/* Individual properties (more control) */
text-decoration-line: underline;           /* Which line to draw */
text-decoration-style: wavy;               /* solid, double, dotted, dashed, wavy */
text-decoration-color: #e53e3e;            /* Color of the decoration */
text-decoration-thickness: 2px;            /* Thickness of the line */

/* Text-underline-offset — position of underline from baseline */
text-underline-offset: 0.25em;             /* Raises or lowers the underline */
text-underline-offset: 3px;                /* Fixed offset from baseline */
```

**Skip ink (text-decoration-skip-ink):**
Controls whether underlines skip over descenders (the parts of letters that go below the baseline, like 'g', 'j', 'p', 'q', 'y'):
```css
text-decoration-skip-ink: auto;    /* Default — skips over descenders (prettier) */
text-decoration-skip-ink: none;    /* Underline cuts through descenders */
```

### Text Transformation
Changes the case of text without changing the underlying HTML content:

```css
text-transform: uppercase;     /* ALL CAPS — EVERY LETTER IS CAPITALIZED */
text-transform: lowercase;     /* all lowercase — no capitals */
text-transform: capitalize;    /* First Letter Of Each Word Is Capitalized */
text-transform: none;          /* Default — no transformation */
```

**Important note about `text-transform`:**
- `text-transform: uppercase` is often used for headings, buttons, and labels
- Screen readers may read `text-transform: uppercase` text letter-by-letter (as acronyms) depending on the screen reader and settings
- For critical content that must be read as individual words, use actual uppercase in HTML rather than CSS transformation
- `capitalize` only capitalizes the first letter of each word — it doesn't handle special cases like "iPhone" or "eBay"

### Text Spacing
Controls the spacing within text:

```css
text-indent: 30px;             /* Indent first line (like paragraphs in books) */
text-indent: -30px;            /* Hanging indent (first line extends left) */

letter-spacing: 2px;           /* Space between characters (tracking) */
letter-spacing: -0.5px;        /* Tighter letter spacing */
letter-spacing: 0.05em;        /* Em-based — scales with font size */

word-spacing: 5px;             /* Space between words */
line-height: 1.6;              /* Space between lines (unitless = relative to font-size) */

white-space: nowrap;           /* Prevent line breaks within the element */
white-space: pre;              /* Preserve whitespace and line breaks (like <pre>) */
white-space: pre-wrap;         /* Preserve whitespace but wrap lines */
white-space: pre-line;         /* Collapse whitespace but preserve line breaks */
```

**Line-height best practices:**
- Unitless values (1.5, 1.6) are preferred because they inherit relative to the element's font-size
- Fixed values (`24px`) don't scale with font-size changes — avoid for body text
- A line-height of 1.5-1.8 is recommended for readability in body text
- Headings can use tighter line-height (1.1-1.3) since they're shorter
- Line-height for buttons should be 1 (or match the height) for vertical centering

```css
body {
  font-size: 16px;
  line-height: 1.6;  /* = 25.6px computed line height */
}

h1 {
  font-size: 2.5rem;
  line-height: 1.2;  /* Tighter for headings */
}
```

### Text Shadow
Adds shadow effects to text. The syntax is: `offset-x offset-y blur-radius color`:

```css
/* Basic shadow */
text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
/*   offset-x: 2px (right)
     offset-y: 2px (down)
     blur-radius: 4px
     color: rgba(0,0,0,0.3) */

/* No blur — hard shadow */
text-shadow: 1px 1px 0 #333;

/* Glow effect (negative blur or same-color blur) */
text-shadow: 0 0 10px rgba(0,0,255,0.5);

/* Multiple shadows — comma separated */
text-shadow:
  1px 1px 0 #000,
  2px 2px 0 #333,
  3px 3px 0 #666;

/* Letterpress effect (light shadow below, dark above) */
text-shadow:
  0 1px 0 #fff,       /* Light highlight */
  0 -1px 0 #333;      /* Dark bottom shadow */

/* Neon glow */
text-shadow:
  0 0 5px #fff,
  0 0 10px #fff,
  0 0 20px #ff00ff,
  0 0 40px #ff00ff;
```

**Performance note on text-shadow:**
- Simple text-shadows have minimal performance impact
- Complex multi-layered shadows with large blur radii can impact paint performance on mobile devices
- Animated text-shadows should be avoided — they trigger repaints on every frame

### Text Overflow and Wrapping
Controls what happens when text exceeds its container width:

```css
/* Truncate text with ellipsis (requires three properties) */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* Shows "..." when text is truncated */
}

/* Multi-line truncation (line-clamp) */
.multiline-truncate {
  display: -webkit-box;
  -webkit-line-clamp: 3;       /* Show max 3 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Word breaking */
word-break: normal;             /* Default — breaks at word boundaries */
word-break: break-all;          /* Break at any character (aggressive) */
word-break: keep-all;           /* No breaks allowed (for CJK text) */

/* Overflow-wrap (formerly word-wrap) */
overflow-wrap: normal;          /* Default — only breaks at word boundaries */
overflow-wrap: break-word;      /* Break long words if they overflow (preferred for general use) */
overflow-wrap: anywhere;         /* Break anywhere — softer than break-word */

/* Combined safe pattern for long URLs */
.long-content {
  overflow-wrap: break-word;
  word-break: break-word;       /* Deprecated but widely supported */
  hyphens: auto;                /* Adds hyphens where possible */
}
```

**Word-break vs overflow-wrap:**
- `overflow-wrap: break-word`: Only breaks if the word WOULD overflow its container. It tries to keep the word on one line first, then breaks it as a last resort.
- `word-break: break-all`: Breaks at any character boundary, even if the word would fit on the next line. More aggressive.
- Use `overflow-wrap: break-word` for general text content to avoid breaking words unnecessarily.

### Direction and Writing Mode
Controls text direction for different languages:

```css
direction: ltr;   /* Left-to-right (default for English, most European languages) */
direction: rtl;   /* Right-to-left (for Arabic, Hebrew, Persian, Urdu) */

unicode-bidi: normal;          /* Default */
unicode-bidi: embed;           /* Embeds a new directional scope */
unicode-bidi: bidi-override;   /* Overrides direction for all text */

writing-mode: horizontal-tb;   /* Default — text flows left-to-right, top-to-bottom */
writing-mode: vertical-rl;     /* Vertical text, columns go right to left (Japanese) */
writing-mode: vertical-lr;     /* Vertical text, columns go left to right */

/* Text orientation in vertical writing */
text-orientation: mixed;       /* Default — upright for CJK, rotated for Latin */
text-orientation: upright;     /* All characters upright */
text-orientation: sideways;    /* All characters rotated 90 degrees */
```

### Text Selection Styling
Controls the appearance of selected/highlighted text:

```css
/* Style text selection */
::selection {
  background: #4299e1;
  color: white;
}

/* Different styles for different text types */
p::selection {
  background: #ffeb3b;
  color: #333;
}
h1::selection {
  background: #e53e3e;
  color: white;
}
```

Only a few properties can be set on `::selection`: `color`, `background`, `background-color`, `text-shadow` (partial support), `cursor`, `outline`, `text-decoration`.

### Tab Size
Controls the width of the tab character (U+0009) in `<pre>`, `<code>`, or elements with `white-space: pre`:

```css
pre {
  tab-size: 4;     /* Show tabs as 4 spaces wide */
  tab-size: 8;     /* Default — traditional terminal width */
  tab-size: 2;     /* Compact for code samples */
}
```

### Hanging Punctuation
Controls whether punctuation marks hang outside the text box (progressive enhancement for print-like typography):

```css
p {
  hanging-punctuation: first;      /* First character can hang */
  hanging-punctuation: last;       /* Last character can hang */
  hanging-punctuation: allow-end;  /* Last character can hang if it's a punctuation */
}
```

## Visual Explanation
```
Text Decoration Positions:

  overline ──────────────────────
  (line above text)

  Text content with descenders
  like g, j, p, q, y
  ────────────────────── underline
                           ↑ text-underline-offset

  ────────────────── line-through
  (through middle of text)

Text Overflow: Ellipsis

  "This is a long text that gets truncated..."
                                   ↑↑↑
                              text-overflow: ellipsis

Line Clamp (multi-line truncation):

  Line 1: This is a long paragraph
  Line 2: that wraps to multiple
  Line 3: lines and is truncat...
                              ↑↑↑
                         -webkit-line-clamp: 3
```

## Common Mistakes
1. **Missing underline removal on links**: Anchors default to `text-decoration: underline` — always set it explicitly when styling navigation links
2. **Justify text on narrow columns**: `text-align: justify` creates large, uneven gaps between words on narrow screens
3. **Overusing text-shadow**: Multiple shadows or excessive blur can significantly reduce readability
4. **Not handling text overflow**: Long words (especially URLs) can break layouts without `overflow-wrap: break-word` or `text-overflow: ellipsis`
5. **Using `text-transform` on accessibility-critical content**: Screen readers may read uppercase text letter-by-letter
6. **Setting `line-height` in px**: Fixed line-heights don't scale with user font-size preferences — always use unitless values
7. **Forgetting `overflow: hidden` with `text-overflow: ellipsis`**: Ellipsis requires `overflow: hidden` AND `white-space: nowrap` to work
8. **Using `word-break: break-all` for normal text**: It breaks words at any character boundary, even when unnecessary — prefer `overflow-wrap: break-word`
9. **Not considering RTL support**: Hard-coding `text-align: left` breaks RTL layouts — use `start`/`end` values
10. **Removing focus outline**: Links with `text-decoration: none` and no focus outline lose both visual indicators

## Best Practices
- Use `text-decoration: none` explicitly on navigation links to remove default underlines
- Use `text-underline-offset` to fine-tune underline position for better readability
- Set `line-height` with unitless values (1.5-1.8 for body text, 1.1-1.3 for headings)
- Use `overflow-wrap: break-word` to prevent long words from breaking layouts
- Use `text-overflow: ellipsis` for truncated text that indicates "more content available"
- For multi-line truncation, use `-webkit-line-clamp` with a fallback
- Use `letter-spacing: 0.05em` for uppercase text to improve readability
- Avoid `text-shadow` on body text — reserve it for headings and decorative elements
- Use `start`/`end` values for `text-align` when supporting multi-language layouts
- Use `::selection` to create branded text selection colors
- Use `hyphens: auto` with justified text for better readability

```css
/* Recommended body text configuration */
body {
  line-height: 1.6;
  text-wrap: pretty;           /* Better line breaking (modern CSS) */
  overflow-wrap: break-word;
}

/* Readable container */
article {
  max-width: 65ch;
  margin: 0 auto;
}

/* Typographic scale with proper spacing */
h1, h2, h3, h4 {
  line-height: 1.2;
  text-wrap: balance;          /* Balanced line breaks for headings */
}
```

## Accessibility Considerations
- Ensure sufficient color contrast for text shadows that affect readability (especially behind text)
- `text-transform: uppercase` can cause screen readers to read text as individual letters — consider using uppercase HTML for truly acronymic content
- `text-align: justify` can create uneven spacing for users with dyslexia — never force justification
- `letter-spacing: 0.05em` improves readability for some users with dyslexia and cognitive disabilities
- Allow users to zoom text to at least 200% without content loss or truncation
- `text-decoration: underline` alone must have at least 3:1 contrast ratio against background
- RTL support (`direction: rtl`) is essential for Arabic, Hebrew, and Urdu content — never hard-code left alignment
- Ensure truncated text (ellipsis) doesn't hide critical information from screen readers — provide full text via `aria-label` or `title`
- Test keyboard focus visibility on links that have `text-decoration: none`

## Performance Considerations
- Simple text-shadows (1-2 layers, small blur) have negligible performance impact
- Multiple text-shadows with large blur radii can impact paint performance — avoid on animated elements
- `text-overflow: ellipsis` doesn't affect performance — the browser handles it efficiently
- `text-shadow` animations trigger repaints — avoid animating shadows on many elements simultaneously
- `letter-spacing` and `word-spacing` changes trigger text layout recalculation — batch changes
- `line-height` changes trigger reflow — avoid animating on complex layouts

## Browser Compatibility
| Property | Chrome | Firefox | Safari | Edge | Opera | IE |
|----------|--------|---------|--------|------|-------|----|
| text-align | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| text-decoration | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| text-decoration-style | 57+ | 36+ | 12.1+ | 79+ | 44+ | No |
| text-decoration-color | 57+ | 36+ | 12.1+ | 79+ | 44+ | No |
| text-decoration-thickness | 57+ | 70+ | 12.1+ | 79+ | 44+ | No |
| text-underline-offset | 57+ | 70+ | 12.1+ | 79+ | 44+ | No |
| text-decoration-skip-ink | 64+ | 70+ | 15.4+ | 79+ | 51+ | No |
| text-transform | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| letter-spacing | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| word-spacing | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| line-height | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| text-shadow | 2+ | 3.5+ | 1.1+ | 12+ | 9.5+ | 10+ |
| text-overflow | 1+ | 7+ | 1.3+ | 12+ | 9+ | 8+ |
| word-break | 1+ | 1+ | 3+ | 12+ | 12.1+ | 8+ |
| overflow-wrap | 1+ | 3.5+ | 1+ | 12+ | 10.5+ | 8+ |
| direction/unicode-bidi | 2+ | 1+ | 1.3+ | 12+ | 9+ | 5.5+ |
| writing-mode | 48+ | 41+ | 5.1+ | 79+ | 35+ | No |
| ::selection | 1+ | 62+ | 1+ | 12+ | 9.5+ | 9+ |
| -webkit-line-clamp | 6+ | 68+ | 5+ | 79+ | 50+ | No |
| hyphens | 55+ | 43+ | 5.1+ | 79+ | 44+ | No |
| tab-size | 21+ | 4+ | 7+ | 79+ | 15+ | No |

Core text properties are universally supported. Modern text-decoration properties and `line-clamp` are well-supported in current browser versions.

## Summary Notes
- `text-align` controls horizontal alignment: left, right, center, justify, start, end
- `text-decoration` adds underlines, overlines, strikethrough — modern syntax supports style, color, thickness
- `text-underline-offset` controls underline position (improves readability with descenders)
- `text-transform` changes case: uppercase, lowercase, capitalize (use uppercase HTML for true acronyms)
- `text-shadow`: `offset-x offset-y blur-radius color` — can stack multiple shadows
- `text-indent` indents the first line of text
- `text-overflow: ellipsis` shows `...` for truncated text (requires `overflow: hidden` and `white-space: nowrap`)
- `line-height` should use unitless values (1.5-1.8 for body, 1.1-1.3 for headings)
- `overflow-wrap: break-word` prevents long words from breaking layouts
- `word-break: break-all` is more aggressive than `overflow-wrap` — use carefully
- `white-space` controls wrapping: `nowrap`, `pre`, `pre-wrap`, `pre-line`
- `direction: rtl` and `writing-mode: vertical-rl` support international writing systems
- `::selection` customizes text highlight colors
- Always balance `text-decoration: none` with other visual link indicators (color, weight, icon)
- Use `start`/`end` alignment values for RTL-aware layouts
- `max-width: 65ch` for optimal reading line length
