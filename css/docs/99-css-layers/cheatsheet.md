# CSS Layers Cheatsheet

## Defining Layer Order
```css
@layer reset, base, components, utilities, overrides;
```

## Adding Styles to Layers
```css
@layer reset {
  * { margin: 0; padding: 0; box-sizing: border-box; }
}

@layer components {
  .btn { padding: 12px 24px; background: #3b82f6; border: none; }
}
```

## Layered @import
```css
@import url('bootstrap.css') layer(framework);
```

## Nested Layers
```css
@layer components {
  @layer buttons { /* ... */ }
  @layer cards { /* ... */ }
}
```

## Cascade Priority (ascending)
1. Unlayered styles
2. @layer reset (earliest)
3. @layer base
4. @layer components
5. @layer utilities
6. @layer overrides (latest)
7. !important (reverses order)

## Anonymous Layers
```css
@layer {
  /* No name - can't be referenced later */
}
```

## Key Points
- **Order matters**: Declare layer order before adding styles
- **Specificity works within layers** but layers beat specificity
- **!important** reverses the order (earlier layers win)
- **Unlayered styles** go before all layers (lowest priority)

## Browser Support
Chrome 99+, Firefox 97+, Safari 15.4+, Edge 99+
