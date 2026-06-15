# Module 58: Grid Areas

## Introduction

`grid-template-areas` is one of the most expressive features in CSS Grid. Instead of placing items by numeric line numbers (which can be hard to maintain), it lets you define your layout visually using a string-based "ASCII art" representation. Each string represents a row, and each word or name within the string represents a grid cell. By using the same name across multiple cells, you create a spanning area. This approach makes your CSS layout literally look like the page structure, which is a powerful readability and maintainability tool.

Grid areas transform the way you think about layouts because the same area names can be redefined at different breakpoints, enabling responsive layout reordering without touching the HTML. This is particularly powerful for rearranging content for mobile, tablet, and desktop — all with clean, readable CSS.

## Learning Objectives

1. Define named grid areas using `grid-template-areas` with string notation
2. Assign items to named areas using the `grid-area` property
3. Create empty cells with the dot (`.`) placeholder syntax
4. Span items across multiple rows and columns by repeating area names
5. Use areas for responsive layout reordering with media queries
6. Combine area-based placement with explicit line-based placement
7. Debug area naming conflicts and misalignment errors
8. Create complex layouts with overlapping areas using `z-index`
9. Understand the rectangular constraint (areas must form rectangles)
10. Compare area-based vs line-based placement for different use cases

## Theory

### How Grid Areas Work

The `grid-template-areas` property uses a visual string-based notation:

```css
.container {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header  header  header"
        "nav     main    aside"
        "footer  footer  footer";
}
```

Each string in quotes represents one grid row. Each space-separated word in a string represents one grid cell (column). Words repeated across adjacent cells create a spanning area. All rows must have the same number of cells.

### Assigning Items with `grid-area`

```css
header { grid-area: header; }
nav    { grid-area: nav; }
main   { grid-area: main; }
aside  { grid-area: aside; }
footer { grid-area: footer; }
```

### Rules for Grid Template Areas

1. **Rectangular constraint**: Each named area must form a rectangle — L-shapes or T-shapes are not allowed
2. **Same column count**: Every row string must have the same number of cells
3. **Connected cells**: The same name in adjacent cells merges them; separated cells with the same name create TWO separate areas (error)
4. **Dot notation**: Use `.` for empty cells (multiple dots work: `...` or `......`)
5. **No areas skipped**: All cells must have a name or dot — empty strings are not valid

### Valid and Invalid Area Definitions

```css
/* ✅ VALID: All areas are rectangles */
grid-template-areas:
    "header header header"
    "main   main   aside"
    "footer footer footer";

/* ❌ INVALID: L-shaped area (navigation wraps around main) */
grid-template-areas:
    "nav nav nav"
    "nav main aside"
    "footer footer footer";

/* ✅ VALID: Empty cells using dots */
grid-template-areas:
    "header header header"
    ".      main   aside"
    "footer footer footer";
```

### Area Names with the `grid-area` Shorthand

While commonly used as a single name assignment, `grid-area` is actually a shorthand for `grid-row-start / grid-column-start / grid-row-end / grid-column-end`:

```css
.item {
    /* Assign to named area */
    grid-area: header;
    
    /* Equivalent long-hand using line numbers */
    grid-row-start: 1;
    grid-column-start: 1;
    grid-row-end: 2;
    grid-column-end: 4;
}
```

### Responsive Layout Reordering with Areas

The power of grid areas shines at different breakpoints:

```css
/* Desktop */
.container {
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header header"
        "nav    main   aside"
        "footer footer footer";
}

/* Mobile — reorder everything */
@media (max-width: 700px) {
    .container {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas:
            "header"
            "nav"
            "main"
            "aside"
            "footer";
    }
}
```

Notice how the HTML stays the same — reordering happens entirely in CSS. This is a huge advantage over older layout methods that required changing HTML source order.

## Syntax

```css
/* Basic area definition */
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
        "header header header"
        "nav    main   aside"
        "footer footer footer";
}

header  { grid-area: header; }
nav     { grid-area: nav; }
main    { grid-area: main; }
aside   { grid-area: aside; }
footer  { grid-area: footer; }

/* With empty cells */
.container {
    grid-template-areas:
        "title  title  ."
        "meta   .      content"
        ".      .      footer";
}

/* Simpler: 2-column layout */
.container {
    grid-template-columns: 1fr 300px;
    grid-template-areas:
        "header  header"
        "content sidebar"
        "footer  footer";
}

/* Using grid-area as line positioning */
.item {
    grid-area: 1 / 1 / 3 / 4;  /* row-start / col-start / row-end / col-end */
}
```

## Visual Explanation

### Area Definition Maps to Layout

```
CSS Definition:
grid-template-areas:
    "header  header  header"
    "nav     main    aside"
    "footer  footer  footer";

Result:
┌──────────────────┬──────────────────┬──────────────────┐
│                  header              │                  │
│     Row 1: spans all 3 columns       │                  │
├──────────────────┼──────────────────┼──────────────────┤
│                  │                  │                  │
│       nav        │      main        │      aside       │
│     Row 2        │    Row 2        │     Row 2        │
│                  │                  │                  │
├──────────────────┴──────────────────┴──────────────────┤
│                      footer                              │
│                  Row 3: spans all 3 columns               │
└─────────────────────────────────────────────────────────┘
```

### Responsive Area Redefinition

```
Desktop:                             Mobile:
┌──────┬────────────────┬──────┐    ┌────────────────────┐
│      │                │      │    │       header        │
│ nav  │     main       │aside │    ├────────────────────┤
│      │                │      │    │        nav          │
├──────┴────────────────┴──────┤    ├────────────────────┤
│           footer              │    │       main          │
└──────────────────────────────┘    ├────────────────────┤
                                     │       aside         │
                                     ├────────────────────┤
                                     │       footer        │
                                     └────────────────────┘
```

### Dot (Empty Cell) Usage

```
grid-template-areas:
    "header  header  ."
    ".       main    aside"
    "footer  footer  .";

┌──────────────────┬──────────────────┬──────────────────┐
│                  header             │    (empty)        │
├──────────────────┼──────────────────┼──────────────────┤
│    (empty)       │      main        │      aside       │
├──────────────────┼──────────────────┼──────────────────┤
│                  footer             │    (empty)        │
└──────────────────┴──────────────────┴──────────────────┘
```

## Common Mistakes

1. **Non-rectangular areas**: You cannot create L-shaped, T-shaped, or disconnected areas. Each named area must be a contiguous rectangle.
2. **Mismatched column counts**: Every row in `grid-template-areas` must have the same number of cells. Forgetting a name in one row breaks the layout.
3. **Duplicate area names (disconnected)**: Using the same name in two separate, non-adjacent cells creates two distinct areas with the same name — this is invalid.
4. **Forgetting to assign `grid-area` to items**: Defining the areas on the container doesn't place items — you must also set `grid-area: name` on each item.
5. **Case sensitivity**: Area names are case-insensitive, but `header` and `Header` are different areas. Best practice: use lowercase.
6. **Using special characters**: Area names can only contain letters, digits, and hyphens. They must start with a letter.
7. **Overlapping items without z-index**: If two items are placed in the same cell via areas, they overlap. Use `z-index` to control stacking.
8. **Not using quotes per row**: Each row must be its own string in quotes. Forgetting a closing quote breaks the property.

## Best Practices

- Use grid areas for **page-level layouts** (header, nav, main, aside, footer) — the visual readability is transformative
- Use line-based placement for **component-level grids** where area names add complexity
- Keep area names short but descriptive: `hd`, `sd`, `main`, `ft` instead of long names
- Always define both `grid-template-columns` and `grid-template-rows` when using areas — the area strings alone don't define sizes
- Redefine areas in media queries for responsive reordering without touching HTML
- Use dots (`.`) for empty cells rather than creating named areas for empty spaces
- Combine areas with `minmax()` and `auto` for flexible layouts
- Document complex area definitions with a comment showing the visual layout

## Accessibility Considerations

- Grid areas are **visual only** — they do not change the DOM order or screen reader navigation order
- When redefining areas for responsive layouts, ensure the visual reordering doesn't create a confusing tab order
- The `grid-area` property does not affect `aria-label` or other accessibility attributes
- Maintain logical content order in HTML; use areas for visual positioning only
- Test with keyboard navigation at all breakpoints after redefining areas
- Screen readers follow DOM order, not grid-area placement order

## Performance Considerations

- Grid area definitions are parsed once during style calculation and have no runtime performance impact
- Redefining areas in media queries triggers grid recalculation, which is efficient in modern browsers
- Complex area definitions with many named cells do not impact rendering performance
- The `grid-area` property is equally performant to line-based placement

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|----|
| `grid-template-areas` | 57+ | 52+ | 10.1+ | 16+ | Not supported |
| `grid-area` (named) | 57+ | 52+ | 10.1+ | 16+ | 10-11 (old spec) |
| `grid-area` (line shorthand) | 57+ | 52+ | 10.1+ | 16+ | 10-11 (old spec) |
| Responsive area redefinition | 57+ | 52+ | 10.1+ | 16+ | Not supported |
| Dot (`.`) for empty cells | 57+ | 52+ | 10.1+ | 16+ | Not supported |

## Summary Notes

- `grid-template-areas` uses visual string notation to define layouts
- Each string is a row; each word is a cell; same name = spanning across cells
- Dots (`.`) create empty cells
- Areas must be rectangular — no L-shapes allowed
- Assign items with `grid-item: area-name;`
- Redefine areas in media queries for responsive reordering
- The HTML source order stays the same — only CSS changes
- Combine with `grid-template-columns` and `grid-template-rows` for sizing
- Area names are case-insensitive; use lowercase for consistency
- `grid-area` is also a shorthand for row-start / col-start / row-end / col-end

## Cheat Table

| Property | Description | Example |
|----------|-------------|---------|
| `grid-template-areas` | Define named grid areas | `"header header" "main aside"` |
| `grid-area: name` | Assign item to named area | `grid-area: header` |
| `grid-area: A / B / C / D` | Line-based shorthand | `grid-area: 1 / 1 / 3 / 4` |
| `.` | Empty cell | `"header . sidebar"` |
| `...` | Multiple empty cells | `"header ... sidebar"` |
| Same name adjacent | Creates spanning area | `"header header header"` |
