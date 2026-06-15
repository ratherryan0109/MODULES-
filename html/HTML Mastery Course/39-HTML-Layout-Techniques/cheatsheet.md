# HTML Layout Techniques — Cheatsheet

## Flexbox (One-Dimensional)

```css
.container { display: flex; flex-direction: row/column; flex-wrap: wrap; }
```

| Property | Values | Purpose |
|----------|--------|---------|
| `justify-content` | `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly` | Main axis alignment |
| `align-items` | `stretch`, `center`, `flex-start`, `flex-end`, `baseline` | Cross axis alignment |
| `align-content` | `stretch`, `center`, `flex-start`, `flex-end`, `space-between`, `space-around` | Multi-line cross axis |
| `gap` | `<length>` | Spacing between items |
| `flex` | `grow shrink basis` | Item sizing (e.g., `flex: 1`) |
| `order` | `<number>` | Visual order (-1, 0, 1) |
| `align-self` | Same as `align-items` | Per-item alignment |

## CSS Grid (Two-Dimensional)

```css
.container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
```

| Property | Values | Purpose |
|----------|--------|---------|
| `grid-template-columns` | `1fr 1fr`, `repeat(3, 1fr)`, `auto-fit minmax(250px, 1fr)` | Column tracks |
| `grid-template-rows` | `auto 1fr auto` | Row tracks |
| `grid-template-areas` | `"h h h" "n m a" "f f f"` | Named areas |
| `gap` | `<length>` | Spacing between tracks |
| `justify-items` | `start`, `center`, `end`, `stretch` | Item alignment in row |
| `align-items` | `start`, `center`, `end`, `stretch` | Item alignment in column |
| `grid-column` | `span 2`, `1 / 3` | Item column placement |
| `grid-row` | `span 2`, `1 / 3` | Item row placement |

## Positioning

```css
.relative { position: relative; top: 10px; }
.absolute { position: absolute; top: 0; right: 0; }
.fixed { position: fixed; bottom: 0; width: 100%; }
.sticky { position: sticky; top: 0; }
```

## Technique Selection

| You need... | Use |
|-------------|-----|
| Navigation bar | Flexbox |
| Centering content | Flexbox |
| Equal-height columns | Flexbox or Grid |
| Page layout (header, main, footer) | CSS Grid |
| Photo gallery | CSS Grid |
| Overlapping elements | Position absolute |
| Fixed header/footer | Position fixed |
| Text wrapping around image | Float |
| Magazine-style columns | Multi-column (`column-count`) |

## Responsive Grid Without Media Queries

```css
.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

## Centering Cheatsheet

```css
/* Horizontal centering */
.center-x { margin: 0 auto; }
.block { text-align: center; }
.flex { display: flex; justify-content: center; }

/* Vertical centering */
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Absolute centering */
.abs-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```
