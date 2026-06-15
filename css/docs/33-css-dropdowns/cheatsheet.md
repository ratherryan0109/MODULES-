# CSS Dropdowns Cheatsheet

## Basic Dropdown Structure
```html
<div class="dropdown">
  <button>Trigger</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
  </div>
</div>
```

## CSS
```css
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 160px;
  background: #fff;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
```

## Animated Dropdown
```css
.dropdown-content {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
}
.dropdown:hover .dropdown-content {
  opacity: 1;
  visibility: visible;
}
```

## Multi-Level Dropdown
```css
.dropdown-content li {
  position: relative;
}
.dropdown-content li ul {
  top: 0;
  left: 100%;
}
```

## Smooth Slide Animation
```css
.dropdown-content {
  transform: translateY(-10px);
  transition: opacity 0.3s, transform 0.3s;
}
.dropdown:hover .dropdown-content {
  transform: translateY(0);
}
```
