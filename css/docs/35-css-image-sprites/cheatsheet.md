# CSS Image Sprites Cheatsheet

## Basic Sprite Usage
```css
.icon {
  width: 50px;
  height: 50px;
  background: url('sprite.png') no-repeat;
}

/* Each icon is 50px wide */
.icon-home { background-position: 0 0; }        /* 1st icon */
.icon-search { background-position: -50px 0; }  /* 2nd icon */
.icon-user { background-position: -100px 0; }   /* 3rd icon */
.icon-settings { background-position: -150px 0; } /* 4th icon */
```

## Hover States (2nd Row)
```css
.icon-home:hover { background-position: 0 -50px; }
.icon-search:hover { background-position: -50px -50px; }
```

## 2D Grid Sprite
```css
/* 4 columns x 3 rows, each 32x32 */
.cell {
  width: 32px;
  height: 32px;
  background: url('grid-sprite.png') no-repeat;
}
/* Row 1 */
.cell-1 { background-position: 0 0; }
.cell-2 { background-position: -32px 0; }
.cell-3 { background-position: -64px 0; }
.cell-4 { background-position: -96px 0; }
/* Row 2 */
.cell-5 { background-position: 0 -32px; }
/* etc. */
```

## Formula
```
background-position: -(colIndex × iconWidth) -(rowIndex × iconHeight);
```

## Modern Alternatives
```html
<!-- SVG icons (inline) -->
<svg><!-- ... --></svg>

<!-- Icon fonts -->
<i class="fa fa-home"></i>

<!-- CSS-only icons -->
<div class="icon-home"></div>
```
