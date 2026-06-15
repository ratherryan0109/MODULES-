# CSS Container Queries Cheatsheet

## Setting Up Containers
```css
/* Create containment context */
.container {
  container-type: inline-size; /* or size for both axes */
}

/* Named container */
.sidebar {
  container-type: inline-size;
  container-name: sidebar;
}

/* Shorthand */
.element {
  container: sidebar / inline-size;
}
```

## Writing Queries
```css
/* Any container */
@container (min-width: 400px) { ... }

/* Named container */
@container sidebar (min-width: 300px) { ... }
```

## Container Query Units
| Unit | Description |
|------|-------------|
| `cqw` | 1% of container width |
| `cqh` | 1% of container height |
| `cqi` | 1% of container inline size |
| `cqb` | 1% of container block size |
| `cqmin` | Smaller of cqi or cqb |
| `cqmax` | Larger of cqi or cqb |

## Example
```css
@container (min-width: 400px) {
  .card { grid-template-columns: 100px 1fr; }
}
@container (min-width: 600px) {
  .card { grid-template-columns: 200px 1fr; }
  .title { font-size: clamp(1rem, 4cqi, 2rem); }
}
```

## Fallback
```css
@supports (container-type: inline-size) {
  /* container query styles */
}
/* Default styles outside @container */
```

## Browser Support
Chrome 105+, Firefox 110+, Safari 16+, Edge 105+
