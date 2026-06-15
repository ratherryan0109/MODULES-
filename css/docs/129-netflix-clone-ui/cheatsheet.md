# CSS Cheatsheet — Netflix Clone UI

## Hero with Gradient Overlay
```css
.hero {
  min-height: 80vh;
  background: linear-gradient(to top, #141414 0%, transparent 50%, rgba(20,20,20,0.3) 100%),
              url('hero.jpg') center/cover no-repeat;
  display: flex;
  align-items: flex-end;
  padding: 6rem 4rem 4rem;
}
```

## Horizontal Scrollable Row
```css
.row {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 0.5rem 0;
}
.row::-webkit-scrollbar { height: 8px; }
.row::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
```

## Thumbnail with Hover Scale
```css
.thumbnail {
  flex: 0 0 200px;
  scroll-snap-align: start;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.3s ease;
}
.thumbnail:hover {
  transform: scale(1.4);
  z-index: 10;
  box-shadow: 0 0 20px rgba(0,0,0,0.8);
}
```

## Thumbnail Overlay
```css
.thumbnail-overlay {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
  padding: 2rem 0.75rem 0.75rem;
  opacity: 0;
  transition: opacity 0.3s;
}
.thumbnail:hover .thumbnail-overlay { opacity: 1; }
```

## Navigation (Fixed with Scroll Detection)
```css
.nav {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 100;
  height: 68px;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  background: linear-gradient(to bottom, rgba(20,20,20,0.7) 0%, transparent 100%);
  transition: background 0.3s;
}
.nav.scrolled { background: #141414; }
```

## Buttons
```css
.btn-play { background: white; color: #141414; padding: 0.75rem 2rem; border-radius: 4px; font-weight: 600; }
.btn-info { background: rgba(109,109,110,0.7); color: white; padding: 0.75rem 2rem; border-radius: 4px; }
```

## Responsive
```css
@media (max-width: 768px) {
  .thumbnail { flex: 0 0 140px; }
  .thumbnail:hover { transform: scale(1.2); }
  .hero { padding: 4rem 1.5rem 2rem; min-height: 60vh; }
}
```
