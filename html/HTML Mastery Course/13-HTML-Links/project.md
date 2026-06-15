# Mini Project: Build a Personal Blog with Navigation

## Overview

Create a multi-page personal blog with a navigation system that connects all pages. The blog will have a home page, about page, blog post page, and a contact page. This project focuses on linking between pages, using anchor links, creating email/phone links, and styling all link states.

## Requirements

### Pages
1. **index.html** — Blog home page with a list of recent posts (linked to full posts)
2. **about.html** — About the author page
3. **post.html** — A sample blog post with table of contents (anchor links)
4. **contact.html** — Contact page with email and phone links

### Navigation Requirements
- Consistent navigation bar on all pages linking to Home, About, Blog, Contact
- Highlight the current page in the navigation
- Breadcrumb navigation on the blog post page
- Table of contents with anchor links on the blog post (at least 4 sections)
- Email link on contact page with subject pre-filled
- External links open in new tabs with `rel="noopener noreferrer"`
- "Back to top" links at the end of each section

### CSS Requirements
- Style all four link states (link, visited, hover, active)
- Navigation links with underline animation on hover
- External links styled differently (with an icon)
- Breadcrumb styling
- Active page indicator in nav

## Steps

1. Create the four HTML pages
2. Build the navigation component (copy to all pages)
3. Write the blog post with multiple sections and IDs
4. Add anchor link table of contents
5. Implement the contact page with mailto and tel links
6. Write the CSS with link states, hover effects, and animations
7. Add breadcrumb navigation to the blog post page
8. Style the active navigation item
9. Test all links work correctly

## Solution Code (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Blog</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <a href="index.html" class="logo">My Blog</a>
    <nav>
      <a href="index.html" class="active">Home</a>
      <a href="about.html">About</a>
      <a href="post.html">Blog</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

  <main>
    <h1>Recent Posts</h1>
    <div class="posts">
      <article>
        <h2><a href="post.html">Getting Started with HTML</a></h2>
        <p class="meta">Posted on June 12, 2026</p>
        <p>HTML is the foundation of the web. Learn the basics of structuring content...</p>
        <a href="post.html" class="read-more">Read More →</a>
      </article>
      <article>
        <h2><a href="post.html">CSS Tips for Beginners</a></h2>
        <p class="meta">Posted on June 10, 2026</p>
        <p>Cascading Style Sheets bring your HTML to life. Discover essential tips...</p>
        <a href="post.html" class="read-more">Read More →</a>
      </article>
    </div>
  </main>

  <footer>
    <p>&copy; 2026 My Blog. All rights reserved.</p>
  </footer>
</body>
</html>
```

## Solution Code (style.css)

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #f8f9fa;
}

/* === HEADER / NAV === */
header {
  background: #1a1a2e;
  color: white;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  color: white;
  text-decoration: none;
  font-size: 1.5em;
  font-weight: bold;
}

.logo:visited { color: white; }
.logo:hover { color: #e94560; }

nav a {
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  margin-left: 25px;
  padding: 5px 0;
  position: relative;
  transition: color 0.3s;
}

nav a:link { color: rgba(255,255,255,0.8); }
nav a:visited { color: rgba(255,255,255,0.6); }
nav a:hover { color: white; }
nav a:active { color: #e94560; }

nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #e94560;
  transition: width 0.3s;
}

nav a:hover::after { width: 100%; }

nav a.active {
  color: white;
}

nav a.active::after {
  width: 100%;
}

/* === MAIN === */
main {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
}

h1 { margin-bottom: 30px; color: #1a1a2e; }

article {
  background: white;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
}

article h2 a {
  color: #1a1a2e;
  text-decoration: none;
}

article h2 a:hover { color: #e94560; }

.meta {
  color: #94a3b8;
  font-size: 14px;
  margin-bottom: 10px;
}

.read-more {
  display: inline-block;
  margin-top: 10px;
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}

.read-more:hover { color: #e94560; }

/* === EXTERNAL LINK ICON === */
a[href^="http"]:not(.logo):not(.no-icon)::after {
  content: ' ↗';
  font-size: 0.8em;
}

/* === FOOTER === */
footer {
  text-align: center;
  padding: 30px;
  color: #94a3b8;
  border-top: 1px solid #e2e8f0;
  margin-top: 40px;
}
```

## Post Page (post.html) Key Features

```html
<!-- Breadcrumb -->
<nav class="breadcrumb">
  <a href="index.html">Home</a>
  <span>/</span>
  <a href="post.html">Blog</a>
  <span>/</span>
  <span>Getting Started with HTML</span>
</nav>

<!-- Table of Contents -->
<div class="toc">
  <h3>Table of Contents</h3>
  <ul>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#elements">HTML Elements</a></li>
    <li><a href="#attributes">Attributes</a></li>
    <li><a href="#conclusion">Conclusion</a></li>
  </ul>
</div>

<!-- Section with Anchor -->
<section id="introduction">
  <h2>Introduction</h2>
  <p>Content here...</p>
  <a href="#top" class="back-to-top">Back to Top</a>
</section>
```

## Contact Page (contact.html) Key Features

```html
<section class="contact-info">
  <h2>Get in Touch</h2>

  <p>
    <strong>Email:</strong>
    <a href="mailto:hello@myblog.com?subject=Blog%20Inquiry">hello@myblog.com</a>
  </p>

  <p>
    <strong>Phone:</strong>
    <a href="tel:+1234567890">(123) 456-7890</a>
  </p>

  <p>
    <strong>GitHub:</strong>
    <a href="https://github.com/myblog" target="_blank" rel="noopener noreferrer">
      Visit our GitHub
    </a>
  </p>
</section>
```

## Submission

Ensure all four HTML pages exist and are linked together. Test every link to confirm it works. Open each page in a browser and verify the active navigation state is correct. Customize the colors, content, and design to your preference.
