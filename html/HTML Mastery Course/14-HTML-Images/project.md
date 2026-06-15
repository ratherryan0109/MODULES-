# Mini Project: Build a Photography Portfolio Website

## Overview

Create a visually stunning photography portfolio website that showcases images in a professional gallery layout. This project focuses on advanced image techniques including responsive images, lazy loading, art direction, and CSS image styling.

## Requirements

### HTML Structure
- **Landing hero section** with a full-viewport background image using `<picture>` for art direction
- **Gallery section** with at least 12 images in a responsive grid layout
- **About section** with a profile photo (circular crop) and biography
- **Lightbox feature** — clicking a gallery image opens a larger version
- Use `<figure>` and `<figcaption>` for each gallery image
- Proper `alt` text on every image

### Image Requirements
- Use `srcset` and `sizes` for responsive resolution switching
- Use `<picture>` with format fallbacks (WebP/AVIF with JPEG fallback)
- Lazy load gallery images below the fold
- Set explicit `width` and `height` on all images
- Preload the hero image with `<link rel="preload">`

### CSS Requirements
- Responsive grid layout (auto-fill columns)
- Smooth hover effects on gallery images (scale, overlay)
- Object-fit for consistent aspect ratios
- Circular profile photo
- Fade-in animation on scroll for images

## Steps

1. Create `index.html` and `style.css`
2. Write the hero section with `<picture>` for different viewports
3. Build the responsive gallery grid with `<figure>` elements
4. Add srcset and sizes to all gallery images
5. Implement lazy loading on gallery images
6. Create the about section with circular profile photo
7. Add CSS hover effects and animations
8. Implement a simple lightbox with JavaScript (optional)
9. Add preload link for the hero image
10. Test responsiveness and image loading

## Starter Code (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Photography Portfolio</title>
  <link rel="preload" as="image" href="hero-wide.jpg">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Jane Doe Photography</h1>
    <nav>
      <a href="#gallery">Gallery</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section class="hero">
    <picture>
      <source media="(min-width: 1000px)" srcset="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80&fit=crop&h=1000">
      <source media="(min-width: 600px)" srcset="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&q=80&fit=crop&h=1200">
      <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&fit=crop&h=800" alt="Mountain landscape hero banner" fetchpriority="high">
    </picture>
    <div class="hero-content">
      <h2>Capturing Moments</h2>
      <p>Nature • Portrait • Travel</p>
    </div>
  </section>

  <!-- Gallery Section -->
  <section id="gallery">
    <h2>Gallery</h2>
    <div class="gallery-grid">
      <!-- 12 figure elements with images go here -->
    </div>
  </section>

  <!-- About Section -->
  <section id="about">
    <h2>About Me</h2>
    <div class="about-content">
      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" alt="Jane Doe photographer portrait" class="profile">
      <div class="bio">
        <p>I'm a professional photographer based in the mountains...</p>
      </div>
    </div>
  </section>

  <footer>
    <p>&copy; 2026 Jane Doe Photography</p>
  </footer>
</body>
</html>
```

## Solution Code (style.css)

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
}

/* === HEADER === */
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  color: white;
}

header h1 { font-size: 1.5em; font-weight: 300; letter-spacing: 2px; }

nav a {
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  margin-left: 25px;
  transition: color 0.3s;
}

nav a:hover { color: white; }

/* === HERO === */
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero picture,
.hero img {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: cover;
}

.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5));
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
}

.hero-content h2 {
  font-size: clamp(2rem, 6vw, 5rem);
  font-weight: 200;
  letter-spacing: 4px;
  margin-bottom: 10px;
}

.hero-content p {
  font-size: 1.2em;
  letter-spacing: 6px;
  opacity: 0.8;
}

/* === GALLERY === */
#gallery { padding: 80px 40px; max-width: 1400px; margin: 0 auto; }

#gallery h2 {
  text-align: center;
  font-size: 2.5em;
  font-weight: 200;
  letter-spacing: 3px;
  margin-bottom: 50px;
  color: #1a1a2e;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.gallery-grid figure {
  overflow: hidden;
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  aspect-ratio: 4/3;
}

.gallery-grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s;
}

.gallery-grid figure:hover img { transform: scale(1.1); }

.gallery-grid figcaption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: white;
  transform: translateY(100%);
  transition: transform 0.3s;
}

.gallery-grid figure:hover figcaption { transform: translateY(0); }

/* === ABOUT === */
#about {
  padding: 80px 40px;
  background: #1a1a2e;
  color: white;
}

#about h2 {
  text-align: center;
  font-size: 2.5em;
  font-weight: 200;
  letter-spacing: 3px;
  margin-bottom: 50px;
}

.about-content {
  display: flex;
  gap: 50px;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
}

.profile {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255,255,255,0.3);
}

.bio p { font-size: 1.1em; line-height: 1.8; opacity: 0.9; max-width: 450px; }

/* === FOOTER === */
footer {
  text-align: center;
  padding: 30px;
  color: #94a3b8;
  background: #0f0f1a;
}

/* === RESPONSIVE === */
@media (max-width: 768px) {
  header { padding: 15px 20px; flex-direction: column; gap: 10px; }
  nav a { margin: 0 10px; }
  #gallery { padding: 40px 20px; }
  .gallery-grid { grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); }
  #about { padding: 40px 20px; }
  .about-content { flex-direction: column; text-align: center; }
}
```

## Submission

Open `index.html` in your browser. Verify:
- Hero image changes crop at different viewport widths
- Gallery images load lazily as you scroll
- Hover effects work on gallery items
- Profile photo is a perfect circle
- Images scale properly on mobile
- No layout shifts during image loading
