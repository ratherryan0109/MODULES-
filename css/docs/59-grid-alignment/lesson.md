# Module 59: Grid Alignment

## Introduction

CSS Grid provides a comprehensive set of alignment properties drawn from the CSS Box Alignment Module. These properties give you precise control over how items sit within their grid cells and how the entire grid sits within its container. Understanding grid alignment is essential for centering content, creating consistent layouts, and responding to different content sizes.

Alignment in CSS Grid operates on two axes — the **row axis** (justify-*) and the **column axis** (align-*) — and at two levels — **item alignment** (how items fill their cells) and **content alignment** (how the grid tracks fill the container). This creates four core alignment properties plus their individual item overrides.

## Learning Objectives

1. Distinguish between item alignment (in cells) and content alignment (of tracks)
2. Use `justify-items` and `align-items` for alignment of all items within their cells
3. Use `justify-self` and `align-self` for individual item alignment overrides
4. Use `justify-content` and `align-content` for positioning the entire grid in its container
5. Understand the difference between row (horizontal) and column (vertical) alignment axes
6. Center grid items both horizontally and vertically using alignment properties
7. Use `stretch` (default) to make items fill their cells completely
8. Use `space-between`, `space-around`, and `space-evenly` for track distribution
9. Use `place-items` and `place-content` shorthand properties
10. Debug common alignment issues in grid layouts

## Theory

### The Four Core Alignment Properties

| Property | Axis | Type | Controls |
|----------|------|------|----------|
| `justify-items` | Row (inline) | Item | Horizontal alignment of ALL items in their cells |
| `align-items` | Column (block) | Item | Vertical alignment of ALL items in their cells |
| `justify-self` | Row (inline) | Item | Horizontal alignment of ONE item |
| `align-self` | Column (block) | Item | Vertical alignment of ONE item |
| `justify-content` | Row (inline) | Content | Horizontal alignment of grid tracks in container |
| `align-content` | Column (block) | Content | Vertical alignment of grid tracks in container |

### Alignment Value Reference

| Value | Item Alignment | Content Alignment |
|-------|---------------|-------------------|
| `stretch` | Item fills cell (default) | Tracks stretch to fill container |
| `start` | Aligns to start of cell | Aligns tracks to start of container |
| `end` | Aligns to end of cell | Aligns tracks to end of container |
| `center` | Centers in cell | Centers tracks in container |
| `baseline` | Aligns by text baseline | N/A |
| `space-between` | N/A | Even distribution, no space at edges |
| `space-around` | N/A | Even distribution with half-space at edges |
| `space-evenly` | N/A | Even distribution with equal space at edges |

### Item Alignment vs Content Alignment

The critical distinction:

- **Item alignment** controls how items behave within their grid cell. It works when the item is smaller than its cell (when the grid item doesn't fill the full track).
- **Content alignment** controls how the grid tracks behave within the grid container. It only works when the total grid size is smaller than the container size.

```css
/* Item alignment: item is smaller than cell — aligns within cell */
.item {
    justify-self: center; /* Centers item horizontally in its cell */
    align-self: end;      /* Pushes item to bottom of its cell */
}

/* Content alignment: grid tracks are smaller than container */
.container {
    justify-content: center; /* Centers all tracks horizontally */
    align-content: center;   /* Centers all tracks vertically */
}
```

### Default Behavior: stretch

By default, grid items stretch to fill their entire cell:

```css
.container {
    justify-items: stretch; /* Default — items fill cell width */
    align-items: stretch;   /* Default — items fill cell height */
}
```

If you don't want this, change the alignment to `start`, `center`, `end`, or `baseline`.

### Shorthand Properties

```css
/* place-items: <align-items> <justify-items> */
place-items: center;       /* Both axes center */
place-items: center start; /* Vertical center, horizontal start */

/* place-content: <align-content> <justify-content> */
place-content: center;        /* Both axes center */
place-content: space-between center; /* Vertical space-between, horizontal center */
```

## Syntax

```css
/* Item alignment on container */
.container {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(2, 100px);
    justify-items: center;   /* Center all items horizontally */
    align-items: center;     /* Center all items vertically */
    place-items: center;     /* Both: same as above */
}

/* Individual item override */
.item-special {
    justify-self: end;       /* This item aligns to right */
    align-self: start;       /* This item aligns to top */
    place-self: center;      /* This item centered */
}

/* Content alignment */
.container {
    display: grid;
    grid-template-columns: repeat(3, 200px); /* Tracks total 600px */
    justify-content: center;   /* Center tracks in container */
    align-content: center;     /* Center tracks vertically */
    place-content: center;     /* Center both axes */
}

/* Content distribution */
.container {
    justify-content: space-evenly; /* Equal space between tracks and edges */
    align-content: space-between;  /* Space between rows, none at edges */
}
```

## Visual Explanation

### Item Alignment

```
justify-items: start            justify-items: center            justify-items: end
┌────────────┬────────────┐     ┌────────────┬────────────┐     ┌────────────┬────────────┐
│[Item]      │[Item]      │     │  [Item]    │  [Item]    │     │      [Item]│      [Item]│
│            │            │     │            │            │     │            │            │
└────────────┴────────────┘     └────────────┴────────────┘     └────────────┴────────────┘
Items aligned left               Items centered                 Items aligned right

align-items: start              align-items: center             align-items: end
┌────────────────────┐          ┌────────────────────┐          ┌────────────────────┐
│[Item]              │          │                    │          │                    │
│                    │          │      [Item]        │          │                    │
├────────────────────┤          ├────────────────────┤          ├────────────────────┤
│[Item]              │          │                    │          │      [Item]        │
│                    │          │      [Item]        │          │                    │
└────────────────────┘          └────────────────────┘          └────────────────────┘
Items aligned top                Items centered                  Items aligned bottom
```

### Content Alignment

```
Tracks total = 600px in 900px container:

justify-content: start          justify-content: center        justify-content: end
┌───────────────────┬───┬───┐  ┌──────┬───────────────────┬──┐  ┌───┬───┬───────────────────┐
│ 200  │ 200  │ 200  │   │   │      │ 200  │ 200  │ 200  │  │  │   │   │ 200  │ 200  │ 200  │
│  │  │  │   │   │  │      │  │  │  │  │  │  │   │   │  │  │  │   │   │  │  │  │ 
└───────────────────┴───┴───┘  └──────┴───────────────────┴──┘  └───┴───┴───────────────────┘
Tracks at left                    Tracks centered                Tracks at right

justify-content: space-between  justify-content: space-around  justify-content: space-evenly
┌──────┬──────┬──────┐          ┌──┬──────┬──┬──────┬──┬──────┐ ┌──┬──────┬──┬──────┬──┬──────┐
│ 200  │ 200  │ 200  │          │  │ 200  │  │ 200  │  │ 200  │ │  │ 200  │  │ 200  │  │ 200  │
│  │  │  │  │  │          │  │  │  │  │  │  │  │  │  │  │  │  │  │ 200  │  │ 200  │  │      │
└──────┴──────┴──────┘          └──┴──────┴──┴──────┴──┴──────┘ └──┴──────┴──┴──────┴──┴──────┘
Edge: 0   Between: equal        Edge: half    Between: equal    Edge: equal  Between: equal
```

### Baseline Alignment

```
align-items: baseline

┌──────────────────────┐
│ Item 1               │ ← Items aligned by text baseline
│                       │
├──────────────────────┤
│ Item 2 has more text │ ← Even though items have different
│ that wraps to two     │   heights, text aligns on same line
│ lines                 │
└──────────────────────┘
```

## Common Mistakes

1. **Confusing item and content alignment**: `justify-items` aligns items IN cells; `justify-content` aligns the grid IN the container. They solve different problems.
2. **Using content alignment when grid fills the container**: Content alignment only works when the total grid track size is smaller than the container.
3. **Expecting `justify-content` to work without explicit track sizes**: If tracks use `1fr`, they fill the container and content alignment has no visible effect.
4. **Forgetting that `stretch` is the default**: Items stretch to fill cells unless you set a different alignment.
5. **Using `justify-self: center` and wondering why it doesn't center with `auto` width**: Items with `width: auto` stretch by default. Set `width: min-content` or a specific width to see centering.
6. **Mixing up `justify-*` and `align-*`**: `justify-*` is horizontal (row axis); `align-*` is vertical (column axis). In flexbox, these are swapped for `flex-direction: column`.
7. **Not using `place-items` shorthand**: `place-items: center` is cleaner than `justify-items: center; align-items: center`.

## Best Practices

- Use `place-items: center` to center ALL items both axes — it's the simplest centering solution in CSS
- Use `place-self: center` on a single item to center just that one
- Set `justify-items: start` if you want items to size naturally rather than stretch
- Use content alignment (`justify-content`/`align-content`) when you want to position the whole grid within a larger container
- Use `space-evenly` for consistent spacing — it puts equal space everywhere
- Combine `justify-items` with `justify-self` for container-level defaults with per-item overrides
- For equal-width columns, use `1fr` rather than content alignment — it's more predictable

## Accessibility Considerations

- Alignment is purely visual and does not affect screen reader output
- Changing alignment may change visual focus indicators — ensure focused elements remain visible
- Centered text in narrow cells may wrap oddly — test with long strings
- Be careful with `baseline` alignment on interactive elements — it can shift click targets
- Ensure keyboard focus order follows a logical visual path even with centered/repositioned items

## Performance Considerations

- Alignment properties are calculated during layout and have zero runtime cost once rendered
- Changing alignment values triggers grid re-layout but modern browsers handle this efficiently
- Baseline alignment requires additional text measurement but the impact is negligible
- No animation-specific concerns — alignment values shouldn't be animated

## Browser Compatibility

| Property | Chrome | Firefox | Safari | Edge | IE |
|----------|--------|---------|--------|------|----|
| `justify-items` | 57+ | 52+ | 10.1+ | 16+ | 10-11 (partial) |
| `align-items` | 57+ | 52+ | 10.1+ | 16+ | 10-11 (partial) |
| `justify-self` | 57+ | 52+ | 10.1+ | 16+ | 10-11 (partial) |
| `align-self` | 57+ | 52+ | 10.1+ | 16+ | 10-11 (partial) |
| `justify-content` | 57+ | 52+ | 10.1+ | 16+ | 10-11 (partial) |
| `align-content` | 57+ | 52+ | 10.1+ | 16+ | 10-11 (partial) |
| `place-items` | 59+ | 53+ | 11+ | 16+ | Not supported |
| `place-content` | 59+ | 53+ | 11+ | 16+ | Not supported |
| `place-self` | 59+ | 53+ | 11+ | 16+ | Not supported |

## Summary Notes

- Two levels: item alignment (in cells) and content alignment (of tracks)
- Two axes: `justify-*` (horizontal/row) and `align-*` (vertical/column)
- Default: items `stretch`, content `start` (no special distribution)
- `place-items` = `align-items` + `justify-items`
- `place-content` = `align-content` + `justify-content`
- Content alignment only works when tracks are smaller than the container
- `justify-self` and `align-self` override the container's `justify-items`/`align-items` for one item
- `stretch` makes items fill their cell; use `start`/`center`/`end` to change this
- Distribution values (`space-between`, `space-around`, `space-evenly`) are for content alignment only
- `place-items: center` is the best centering tool in CSS Grid

## Cheat Table

| Property | Axis | Scope | Common Values |
|----------|------|-------|---------------|
| `justify-items` | Row (H) | Container | stretch, start, center, end |
| `align-items` | Column (V) | Container | stretch, start, center, end, baseline |
| `justify-self` | Row (H) | Item | stretch, start, center, end |
| `align-self` | Column (V) | Item | stretch, start, center, end, baseline |
| `justify-content` | Row (H) | Container | start, end, center, space-between, space-around, space-evenly |
| `align-content` | Column (V) | Container | start, end, center, space-between, space-around, space-evenly |
| `place-items` | Both | Container | center, start end, stretch |
| `place-content` | Both | Container | center, space-between start |
| `place-self` | Both | Item | center, start, end, stretch |
