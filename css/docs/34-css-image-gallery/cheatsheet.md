# CSS Image Gallery Cheatsheet

## Responsive Grid Gallery
```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
}
.gallery img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
}
```

## Hover Effects
```css
.gallery img {
  transition: transform 0.3s, box-shadow 0.3s;
}
.gallery img:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}
```

## Caption Overlay
```css
.card {
  position: relative;
  overflow: hidden;
}
.card .caption {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  background: rgba(0,0,0,0.7);
  color: #fff;
  padding: 12px;
  transform: translateY(100%);
  transition: transform 0.3s;
}
.card:hover .caption {
  transform: translateY(0);
}
```

## Masonry Span Classes
```css
.gallery .tall { grid-row: span 2; }
.gallery .wide { grid-column: span 2; }
```

## Image Optimization
```html
<img src="photo.jpg" alt="Description" loading="lazy" width="400" height="300">
```

```css
img {
  aspect-ratio: 4 / 3;
  object-fit: cover;
}
```
