# CSS Cheatsheet — E-Commerce Store UI

## Product Grid
```css
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}
```

## Product Card
```css
.product-card {
  background: white;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.product-card:hover { transform: translateY(-4px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
.product-image { aspect-ratio: 1; overflow: hidden; }
.product-image img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.product-card:hover .product-image img { transform: scale(1.05); }
```

## Badge
```css
.product-badge {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  background: #ef4444;
  color: white;
  padding: 0.25rem 0.6rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
}
```

## Cart Drawer
```css
.cart-drawer {
  position: fixed;
  top: 0; right: 0; bottom: 0;
  width: 400px;
  max-width: 100vw;
  background: white;
  z-index: 201;
  padding: 1.5rem;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}
.cart-drawer.open { transform: translateX(0); }
.cart-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  z-index: 200;
  display: none;
}
.cart-overlay.open { display: block; }
```

## Shop Layout (Grid + Sidebar)
```css
.shop-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 768px) {
  .shop-layout { grid-template-columns: 250px 1fr; }
}
```

## Sticky Filters
```css
.filters {
  position: sticky;
  top: 5rem;
  max-height: calc(100vh - 7rem);
  overflow-y: auto;
}
```

## Rating Stars
```css
.stars { color: #f59e0b; }
.product-rating { display: flex; align-items: center; gap: 0.25rem; font-size: 0.8rem; }
```

## Price
```css
.product-price { font-size: 1.125rem; font-weight: 700; }
.product-price .original {
  text-decoration: line-through;
  color: #64748b;
  font-weight: 400;
  font-size: 0.875rem;
  margin-left: 0.5rem;
}
```

## Buttons
```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-primary { background: #2563eb; color: white; }
.btn-primary:hover { background: #1d4ed8; transform: translateY(-1px); }
```

## Responsive
```css
@media (max-width: 768px) {
  .search-bar { display: none; }
}
```
