# Blog Website Project — Cheatsheet

## Blog Page Structure

| Page | Purpose | Key Elements |
|------|---------|--------------|
| index.html | Homepage | Featured post, blog grid, sidebar |
| post.html | Full article | Article content, tags, comments, related posts |
| about.html | Author info | Bio, skills, social links |
| contact.html | Contact form | Form fields, contact info |

## Semantic HTML Structure

```html
<header>
    <nav>
        <a href="index.html" class="logo">Blog Name</a>
        <a href="index.html">Home</a>
        <a href="post.html">Blog</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
    </nav>
</header>

<main>
    <article>
        <h1>Blog Post Title</h1>
        <div class="meta">By Author · Date · Category</div>
        <p>Content...</p>
        <h2>Section Heading</h2>
        <p>More content...</p>
        <blockquote>Quote from article</blockquote>
        <div class="tags">
            <a href="#">tag1</a>
            <a href="#">tag2</a>
        </div>
    </article>
</main>

<aside>
    <!-- Sidebar widgets -->
    <div class="widget">
        <h3>Categories</h3>
        <ul>
            <li><a href="#">Category (count)</a></li>
        </ul>
    </div>
    <div class="widget">
        <h3>Recent Posts</h3>
        <ul>
            <li><a href="post.html">Post Title</a></li>
        </ul>
    </div>
</aside>

<footer>
    <p>&copy; 2026 Blog Name. All rights reserved.</p>
</footer>
```

## CSS Quick Reference

### Blog Card Grid
```css
.blog-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 25px; }
@media (max-width: 768px) { .blog-grid { grid-template-columns: 1fr; } }
```

### Content + Sidebar Layout
```css
.main-layout { display: grid; grid-template-columns: 1fr 320px; gap: 40px; }
@media (max-width: 768px) { .main-layout { grid-template-columns: 1fr; } }
```

### Blog Card Hover Effect
```css
.post-card { transition: transform 0.3s, box-shadow 0.3s; }
.post-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
```

### Sticky Header
```css
header { position: sticky; top: 0; z-index: 1000; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); }
```

### Readable Typography
```css
article { max-width: 750px; }
article p { font-size: 17px; line-height: 1.8; color: #444; }
article h1 { font-size: 32px; }
article h2 { font-size: 24px; margin: 35px 0 15px; }
article h3 { font-size: 20px; margin: 25px 0 10px; }
```

### Blockquote Styling
```css
blockquote { border-left: 4px solid #2563eb; background: #eef2ff; padding: 15px 25px; margin: 25px 0; border-radius: 0 8px 8px 0; font-style: italic; }
```

### Tags Cloud
```css
.tags { display: flex; flex-wrap: wrap; gap: 8px; }
.tags a { background: #eef2ff; color: #2563eb; padding: 5px 14px; border-radius: 20px; font-size: 13px; text-decoration: none; }
.tags a:hover { background: #2563eb; color: white; }
```

### Responsive Images
```css
img { max-width: 100%; height: auto; border-radius: 8px; }
```

## JavaScript Quick Reference

### Scroll Progress Bar
```js
window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    document.getElementById('progress').style.width = (window.scrollY / h * 100) + '%';
});
```

### Fade-In on Scroll (Intersection Observer)
```js
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
```

### Dark Mode Toggle with localStorage
```js
document.getElementById('themeToggle').addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});
```

## Key Reminders

- One `<h1>` per page (the post title)
- Use proper heading hierarchy (h1 → h2 → h3)
- Semantic HTML: `<article>`, `<main>`, `<aside>`, `<nav>`, `<header>`, `<footer>`
- Consistent header and footer across all pages
- Mobile-responsive with hamburger menu
- Alt text on all images
- Optimize images for performance
- Valid HTML at W3C Validator
- Meta description and Open Graph tags per page
- Internal links between related posts
