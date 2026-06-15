# Module 19: CSS Display

## Table of Contents
1. Introduction
2. Learning Objectives
3. Theory
   - Display Values Overview
   - Block Elements
   - Inline Elements
   - Inline-Block Elements
   - Display: None vs Visibility: Hidden
   - Display: Flex (Introduction)
   - Display: Grid (Introduction)
   - Display: Flow-Root
   - Display: Contents
   - Display: Table Values
   - Common Display Changes
   - Display and Accessibility
   - Display and Animation
4. Visual Explanation
5. Common Mistakes
6. Best Practices
7. Accessibility Considerations
8. Performance Considerations
9. Browser Compatibility
10. Summary Notes

## Introduction
The `display` property controls how an element is rendered in the document flow. It's one of the most important CSS properties because it determines whether elements sit side-by-side or stack vertically, whether they can have width/height, and how they interact with other elements. Understanding display values is fundamental to CSS layout.

The `display` property is the single most influential CSS property for layout. The choice of `block`, `inline`, `inline-block`, `flex`, `grid`, or `none` determines the entire rendering behavior of an element and its children. Modern CSS layout systems (Flexbox and Grid) are activated through display values, making this property the gateway to all advanced layout techniques.

## Learning Objectives
By the end of this module, you will be able to:
- Understand block, inline, and inline-block display behavior
- Use display: none vs visibility: hidden appropriately
- Apply display: flex and display: grid for modern layouts
- Understand how display affects the box model
- Use display table values for table-like layouts
- Change display for specific HTML elements
- Understand flow-root for creating new block formatting contexts
- Use display: contents to remove wrapper elements visually
- Consider accessibility implications of display changes

## Theory

### Display Values Overview
The `display` property accepts many values that fall into several categories:

```css
/* Basic box types */
display: block;         /* Takes full width, respects all box model */
display: inline;        /* Flows inline, ignores width/height */
display: inline-block;  /* Inline flow but block-like box model */
display: none;          /* Removes from document flow entirely */

/* Modern layout models */
display: flex;          /* Flexbox container */
display: inline-flex;   /* Inline flexbox container */
display: grid;          /* Grid container */
display: inline-grid;   /* Inline grid container */

/* Table values */
display: table;         /* Behaves like <table> */
display: table-cell;    /* Behaves like <td> */
display: table-row;     /* Behaves like <tr> */
display: table-caption; /* Behaves like <caption> */

/* Other values */
display: flow-root;     /* New block formatting context (modern clearfix) */
display: contents;      /* Container disappears, children take its place */
display: list-item;     /* Behaves like <li> */
```

### Block Elements
Block-level elements form the building blocks of most layouts:

**Characteristics:**
- Stack vertically — each block element starts on a new line
- Take up the full available width by default (width: auto fills containing block)
- Respect all box model properties: width, height, margin, padding on all sides
- Can contain both block and inline elements

**Common block elements:**
`div`, `p`, `h1`-`h6`, `ul`, `ol`, `li`, `section`, `article`, `nav`, `header`, `footer`, `aside`, `main`, `figure`, `figcaption`, `blockquote`, `pre`, `table`, `form`, `hr`

```css
.block-demo {
  display: block;
  width: 200px;        /* Can set width */
  height: 100px;       /* Can set height */
  margin: 10px 0;      /* Vertical margins respected */
  padding: 20px;       /* All padding respected */
}
```

**Block formatting context (BFC):** Block elements participate in a block formatting context, where boxes are laid out vertically one after another. The distance between them is determined by margins (subject to margin collapsing).

### Inline Elements
Inline elements flow within the text content:

**Characteristics:**
- Flow horizontally like text within a line
- Do NOT start on a new line
- Ignore `width` and `height` properties (sized by content)
- Only respect horizontal margins/padding (left/right)
- Top/bottom padding adds to background area but doesn't affect line box height
- Top/bottom margins are completely ignored

**Common inline elements:**
`span`, `a`, `strong`, `em`, `b`, `i`, `u`, `code`, `small`, `sub`, `sup`, `label`, `q`, `cite`, `abbr`, `time`

```css
.inline-demo {
  display: inline;
  width: 200px;        /* IGNORED — stays content-width */
  height: 100px;       /* IGNORED — stays content-height */
  margin: 20px;        /* Only left/right margins apply */
  padding: 10px;       /* Left/right work; top/bottom extend background but don't affect line height */
}
```

**Replaced inline elements:** Some inline elements are "replaced" — they have intrinsic dimensions and behave differently:
- `<img>`, `<input>`, `<button>`, `<textarea>`, `<select>`, `<video>`, `<canvas>`
- These elements accept `width` and `height` even with `display: inline`
- They also respect vertical margins

### Inline-Block Elements
Inline-block is a hybrid that combines inline flow with block-like box model:

**Characteristics:**
- Flow inline (sit next to each other, can wrap)
- Respect `width`, `height`, `margin`, and `padding` on ALL sides
- Can have vertical margins (unlike inline)
- Baseline alignment with surrounding text

```css
.inline-block-demo {
  display: inline-block;
  width: 150px;          /* Respected */
  height: 100px;         /* Respected */
  margin: 10px;          /* All sides respected */
  padding: 15px;         /* All sides respected */
  vertical-align: top;   /* Control vertical alignment */
}
```

**Inline-block gap issue:**
When using `display: inline-block` for horizontal layouts, whitespace in HTML (spaces, newlines between elements) creates visual gaps:
```html
<!-- The newline between elements creates a 4px gap -->
<div class="box"></div>
<div class="box"></div>
```

Solutions:
1. Use `font-size: 0` on parent, reset on children (hacky, affects rem units)
2. Remove whitespace in HTML (hard to maintain)
3. Use `display: flex` instead (cleanest solution)
4. Use negative margins (brittle, font-size dependent)

```css
/* Font-size trick */
.parent { font-size: 0; }
.parent > * { font-size: 1rem; }

/* Flexbox (recommended) */
.parent { display: flex; }
```

### Display: None vs Visibility: Hidden
These two properties are frequently confused but behave very differently:

```css
display: none;           /* Element COMPLETELY removed from document flow */
visibility: hidden;      /* Element hidden but STILL OCCUPIES space in layout */
visibility: visible;     /* Default */
```

**Comparison:**

| Aspect | display: none | visibility: hidden |
|--------|---------------|-------------------|
| Layout space | Removed entirely | Preserved (element invisible but takes space) |
| Children | All children hidden | Can override with `visibility: visible` on children |
| Screen readers | Element not announced | Element not announced |
| Animation | Cannot animate to/from | Can animate opacity |
| Accessibility | Focusable if visible | Hidden from all users |
| Performance | Triggers reflow | Only triggers repaint |

**Use cases:**
- `display: none` — Toggling entire sections on/off, responsive menus, modal dialogs
- `visibility: hidden` — Tooltip visibility toggles, loading states where layout should be preserved, hiding elements for staggered animations

```css
/* Visibility with visible child */
.hidden-parent {
  visibility: hidden;
}
.hidden-parent .visible-child {
  visibility: visible;   /* Child becomes visible within hidden parent */
}

/* This is NOT possible with display: none */
```

### Display: Flex (Introduction)
Flexbox is a one-dimensional layout model activated by `display: flex`:

```css
.flex-container {
  display: flex;           /* Block-level flex container */
  /* or */
  display: inline-flex;    /* Inline-level flex container */

  /* Main axis direction */
  flex-direction: row;           /* Default — left to right */
  flex-direction: column;        /* Top to bottom */

  /* Main axis alignment */
  justify-content: center;       /* Center along main axis */
  justify-content: space-between;/* Even space between items */

  /* Cross axis alignment */
  align-items: center;           /* Center along cross axis */
  align-items: stretch;          /* Stretch to fill (default) */

  /* Wrapping */
  flex-wrap: wrap;               /* Allow items to wrap */

  /* Gap between items */
  gap: 20px;                     /* Row and column gap */
}
```

Flexbox is ideal for:
- Navigation bars
- Centering content
- Equal-height columns
- Dynamic spacing between items
- Reordering elements

### Display: Grid (Introduction)
CSS Grid is a two-dimensional layout model activated by `display: grid`:

```css
.grid-container {
  display: grid;             /* Block-level grid container */
  /* or */
  display: inline-grid;      /* Inline-level grid container */

  /* Define columns and rows */
  grid-template-columns: 1fr 1fr 1fr;  /* Three equal columns */
  grid-template-columns: repeat(3, 1fr); /* Same, using repeat() */
  grid-template-rows: auto 1fr auto;    /* Header, content, footer */

  /* Gaps */
  gap: 20px;                 /* Row and column gap */
  row-gap: 16px;
  column-gap: 24px;
}

/* Place items in specific grid areas */
.grid-item {
  grid-column: 1 / 3;        /* Span from column line 1 to 3 */
  grid-row: 1 / 2;           /* Span row line 1 to 2 */
}
```

Grid is ideal for:
- Full page layouts
- Card grids
- Complex two-dimensional layouts
- Overlapping elements
- Dashboard and gallery layouts

### Display: Flow-Root
`display: flow-root` creates a new Block Formatting Context (BFC) without side effects:

```css
.clearfix {
  display: flow-root;  /* Creates a new BFC */
}
```

**Uses of flow-root:**
1. **Containing floats** — replaces the clearfix hack:
```css
/* Old clearfix hack */
.clearfix::after {
  content: '';
  display: table;
  clear: both;
}

/* Modern approach */
.clearfix {
  display: flow-root;
}
```

2. **Preventing margin collapse:**
```css
.parent {
  display: flow-root;  /* Margins of children won't collapse through parent */
}
```

3. **Creating a container that respects all children:**
```css
.card {
  display: flow-root;  /* Card will expand to include floated or overflowing children */
}
```

**Other ways to create BFC:** `overflow: hidden`, `overflow: auto`, `position: absolute`, `float: left/right`, `display: inline-block`, `display: table-cell`. However, these have side effects (clipping content, changing layout, etc.). `flow-root` is the cleanest option.

### Display: Contents
`display: contents` makes the element's container disappear from the accessibility tree and layout, while its children render as if the container never existed:

```css
/* Without display: contents */
<div class="wrapper">
  <span>Item</span>
</div>
/* Wrapper is a visible block containing the span */

/* With display: contents */
<div class="wrapper" style="display: contents">
  <span>Item</span>
</div>
/* Wrapper is invisible; span renders as if it's a direct child of wrapper's parent */
```

**Use cases:**
- Removing unnecessary wrapper elements for styling purposes without changing HTML
- Flex/grid children that need to be direct descendants (wrappers break this)
- Semantic HTML structures that need different visual layering

**Important note:** `display: contents` removes the element from the accessibility tree — screen readers won't see it. Use carefully and test with assistive technology.

### Display: Table Values
CSS can make any element behave like a table without using HTML table elements:

```css
.table        { display: table; }
.table-row    { display: table-row; }
.table-cell   { display: table-cell; }
.table-caption { display: table-caption; }
.table-header-group { display: table-header-group; }
.table-footer-group { display: table-footer-group; }
```

**Use case: vertical centering (pre-flexbox method):**
```css
.parent {
  display: table;
  width: 100%;
  height: 400px;
}
.child {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
```

### Common Display Changes
Some of the most frequent display property changes in real projects:

```css
/* Horizontal navigation: change list items from block to inline */
li { display: inline; }
/* Or better: */
.nav { display: flex; }

/* Make links into clickable buttons */
a { display: inline-block; padding: 10px 20px; }

/* Hide element (for toggles, modals, menus) */
.hidden { display: none; }

/* Make span behave as a heading */
span { display: block; font-size: 1.5rem; font-weight: bold; }

/* Responsive: show/hide elements at different breakpoints */
.mobile-only { display: block; }
.desktop-only { display: none; }

@media (min-width: 768px) {
  .mobile-only { display: none; }
  .desktop-only { display: block; }
}

/* Form layout: align labels and inputs */
.form-group { display: flex; align-items: center; gap: 12px; }
```

### Display and Animation
Display values interact with CSS animations and transitions:

```css
/* You CANNOT animate display: none to display: block directly */
.element {
  display: none;
  /* transition: display 1s; — does NOT work */
}

/* Workaround: use visibility + height */
.element {
  visibility: hidden;
  opacity: 0;
  height: 0;
  overflow: hidden;
  transition: opacity 0.3s, visibility 0.3s, height 0.3s;
}
.element.visible {
  visibility: visible;
  opacity: 1;
  height: auto;
}
```

### Display and Accessibility
Changing display affects how screen readers perceive content:
- `display: none` — Element and its children are removed from the accessibility tree
- `visibility: hidden` — Element is hidden from screen readers but still takes space
- `display: contents` — Element is removed from accessibility tree (its children remain visible)
- Changing `display` from `block` to `table` or `flex` may affect how screen readers interpret the element's role

## Visual Explanation
```
Display Values Visualized:

  block:
  ┌──────────────────────────────┐
  │  Takes full width             │
  │  Starts new line              │
  │  Width, height, margin OK     │
  └──────────────────────────────┘
  ┌──────────────────────────────┐
  │  Each block on new line      │
  └──────────────────────────────┘

  inline:
  Text text text [inline] text text
  [inline] more text [inline] text
  └── No width/height, no vertical margin

  inline-block:
  Text [inline-block] text [inline-block]
  └── Width, height, all margins OK
       Inline flow ──→

  none vs hidden:

  display: none     visibility: hidden
  ┌──────────┐      ┌──────────┐
  │          │      │          │
  │ REMOVED  │      │ INVISIBLE│
  │          │      │ (still   │
  │          │      │  takes   │
  │          │      │  space)  │
  └──────────┘      └──────────┘
  Next element      Next element
  moves up           stays put
```

## Common Mistakes
1. **Using `display: none` when `visibility: hidden` is better**: If the element should keep its space in the layout (e.g., a placeholder), use `visibility: hidden`
2. **Expecting inline elements to accept width/height**: They don't — use `inline-block`, `block`, `flex`, or `grid`
3. **Inline-block gap issue**: Whitespace in HTML creates gaps between inline-block elements — use flexbox instead
4. **Forgetting to reset default display**: `<li>` defaults to `block`; `<a>` defaults to `inline`; `<span>` defaults to `inline` — always specify when the context changes
5. **Not understanding that inline ignores top/bottom margins**: This is a common source of unexpected spacing
6. **Overriding display on flex/grid children**: Setting `display: block` on flex items is usually fine, but changing to `inline` breaks the flex layout
7. **Using `display: contents` without accessibility testing**: The element disappears from the accessibility tree — test with screen readers
8. **Animating display**: You cannot animate from `display: none` to `display: block` — use opacity, visibility, and height workarounds
9. **Not accounting for flex/grid on `<fieldset>` or `<legend>` elements**: Browser support varies
10. **Using `display: table` for layout instead of CSS grid/flexbox**: Table display values are for special cases, not general layout

## Best Practices
- Use `display: flex` for one-dimensional layouts (rows or columns)
- Use `display: grid` for two-dimensional layouts (rows AND columns)
- Use `display: inline-block` sparingly — prefer flexbox for most horizontal layouts
- Use `display: flow-root` for creating new BFCs (replaces clearfix hacks)
- Use `display: contents` carefully — it removes the element from the accessibility tree
- Use `display: none` for toggling visibility of entire sections
- Use `visibility: hidden` when the element should preserve its layout space
- Always test display changes with keyboard navigation and screen readers
- Use `display: block` on `<a>` and `<span>` elements when you need them to fill a container

```css
/* Recommended display patterns */

/* Horizontal navigation */
nav ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 0;
}

/* Centered content */
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Card grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

/* Visually hidden but accessible */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
  padding: 0;
  margin: -1px;
}
```

## Accessibility Considerations
- `display: none` removes content from the accessibility tree — screen readers won't announce it
- `visibility: hidden` also hides from screen readers (though space is preserved)
- Changing display to `flex` or `grid` doesn't change the semantic meaning of elements (a `<nav>` is still a navigation)
- `display: table` on non-table elements may confuse screen readers — use semantic HTML for data tables
- `display: contents` removes the container from the accessibility tree — children remain but lose their accessible grouping context
- Always provide visible focus indicators on interactive elements regardless of display value
- The `sr-only` technique (visually hidden but accessible) uses specific CSS that preserves accessibility

```css
/* Screen reader only utility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

## Performance Considerations
- Changing `display` triggers layout recalculation (reflow) — the most expensive CSS operation
- `display: none` removes elements from the rendering tree — they don't paint or receive events
- `visibility: hidden` elements still paint (they're invisible but the paint happens)
- Flexbox and grid layout computations are slightly more expensive than block/inline for very large DOM trees
- For large lists (100+ items), prefer `display: block` or use CSS containment
- `display: contents` can improve performance by removing wrapper elements from the tree
- Avoid toggling `display: none` → `display: block` frequently in animations — use `opacity`/`transform`

## Browser Compatibility
| Value | Chrome | Firefox | Safari | Edge | Opera | IE |
|-------|--------|---------|--------|------|-------|----|
| block | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| inline | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| inline-block | 1+ | 3+ | 1+ | 12+ | 7+ | 8+ |
| none | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| flex | 29+ | 20+ | 9+ | 12+ | 16+ | 11+ (partial) |
| inline-flex | 29+ | 20+ | 9+ | 12+ | 16+ | 11+ (partial) |
| grid | 57+ | 52+ | 10.1+ | 16+ | 44+ | No |
| inline-grid | 57+ | 52+ | 10.1+ | 16+ | 44+ | No |
| flow-root | 58+ | 53+ | 13+ | 79+ | 45+ | No |
| contents | 65+ | 60+ | 11.1+ | 79+ | 52+ | No |
| table values | 1+ | 1+ | 1+ | 12+ | 4+ | 8+ |
| list-item | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |

Core display values (block, inline, inline-block, none) are universally supported. Flexbox has excellent modern support (IE11 has partial support with known bugs). Grid has no support in IE but is supported in all modern browsers. `flow-root` and `contents` require modern browsers.

## Summary Notes
- `display: block` — Full width, stack vertically, respect all box model properties
- `display: inline` — Flow horizontally within text, ignore width/height, only horizontal margin/padding
- `display: inline-block` — Inline flow but block-like box model (all sides respected)
- `display: none` — Element completely removed from document flow AND accessibility tree
- `display: contents` — Container visually removed, children inherit container's parent layout
- `visibility: hidden` — Element hidden but space preserved (different from `display: none`)
- `display: flex` — One-dimensional layout (row or column), powerful alignment
- `display: grid` — Two-dimensional layout (rows and columns), grid-based positioning
- `display: flow-root` — Creates new block formatting context (modern clearfix, prevents margin collapse)
- Cannot animate `display: none` → `display: block` directly — use opacity + visibility workaround
- Default display varies by HTML element type — know the defaults
- Changing display doesn't change semantic meaning for accessibility
- Flex and grid override child display behaviors (flex/grid items have different box model rules)
- Always specify element display when debugging layout issues
- `display: inline-block` causes whitespace gaps — use flexbox for modern layouts
