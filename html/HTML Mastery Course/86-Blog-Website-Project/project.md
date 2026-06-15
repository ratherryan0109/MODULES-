# Module 86: Blog Website Project — Build a Complete Multi-Page Blog

## Objective
Build a complete multi-page blog website called **"CodeBytes"** — a tech blog for developers. The website must include a homepage with featured and recent posts, an individual blog post page, an about page, and a contact page. All pages must share consistent header, navigation, and footer elements.

## Requirements

### Pages (4 total):
1. **index.html** — Homepage with featured post, blog grid, sidebar
2. **post.html** — Individual blog post with full article content, comments placeholder
3. **about.html** — About the author/site page
4. **contact.html** — Contact form page

### Each page must have:
- Consistent header with logo and navigation
- Footer with links and copyright
- Proper meta tags (charset, viewport, description)

### Homepage Requirements:
- Featured post section with image, title, excerpt, and "Read More" link
- Blog post grid (at least 4 post cards) with image, title, date, category, excerpt
- Sidebar with: About widget, Categories list, Recent posts list, Tags cloud
- Proper semantic structure

### Blog Post Page Requirements:
- Featured image at top
- Article title (h1), author, date, category
- Well-structured content with headings, paragraphs, a list, a blockquote
- At least one image
- Tags section
- Share buttons (placeholder)
- Comments section placeholder
- Related posts section at bottom
- Sidebar

### About Page:
- Author photo placeholder
- Bio/description
- Skills or expertise list
- Social media links

### Contact Page:
- Contact form with Name, Email, Subject, Message
- Contact information (email, phone, address placeholder)
- Form labels and proper input types

## Complete HTML Code

### File 1: index.html — Homepage

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeBytes — A Tech Blog for Developers</title>
    <meta name="description" content="CodeBytes is a tech blog covering web development, programming tutorials, and the latest in technology.">
    <meta property="og:title" content="CodeBytes — A Tech Blog for Developers">
    <meta property="og:description" content="Tech blog covering web development, programming tutorials, and technology news.">
    <meta property="og:type" content="website">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; line-height: 1.6; background: #f8f9fa; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

        /* Header */
        header { background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.08); position: sticky; top: 0; z-index: 1000; }
        header .container { display: flex; justify-content: space-between; align-items: center; padding: 18px 20px; }
        .logo { font-size: 26px; font-weight: 700; color: #2563eb; text-decoration: none; }
        .logo span { color: #333; }
        nav { display: flex; gap: 28px; align-items: center; }
        nav a { text-decoration: none; color: #555; font-weight: 500; transition: color 0.3s; font-size: 15px; }
        nav a:hover { color: #2563eb; }
        nav a.active { color: #2563eb; }
        .hamburger { display: none; font-size: 28px; cursor: pointer; background: none; border: none; }

        /* Hero/Featured */
        .featured { margin: 30px 0; position: relative; border-radius: 16px; overflow: hidden; background: linear-gradient(135deg, #1e3a5f, #2563eb); color: white; }
        .featured a { color: white; text-decoration: none; display: block; padding: 50px 40px; }
        .featured .category { background: rgba(255,255,255,0.2); padding: 5px 14px; border-radius: 20px; font-size: 13px; display: inline-block; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 1px; }
        .featured h2 { font-size: 34px; margin-bottom: 15px; max-width: 700px; }
        .featured p { font-size: 17px; opacity: 0.9; margin-bottom: 20px; max-width: 600px; }
        .featured .meta { font-size: 14px; opacity: 0.8; }
        .featured:hover h2 { text-decoration: underline; }

        /* Main Layout */
        .main-layout { display: grid; grid-template-columns: 1fr 320px; gap: 40px; margin: 40px 0; }

        /* Blog Grid */
        .blog-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; }
        .post-card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06); transition: transform 0.3s, box-shadow 0.3s; }
        .post-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
        .post-card .thumb { height: 200px; background: #e0e7ff; display: flex; align-items: center; justify-content: center; font-size: 48px; color: #2563eb; }
        .post-card .body { padding: 20px; }
        .post-card .category { font-size: 12px; color: #2563eb; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; margin-bottom: 8px; }
        .post-card h3 { font-size: 18px; margin-bottom: 10px; }
        .post-card h3 a { color: #333; text-decoration: none; }
        .post-card h3 a:hover { color: #2563eb; }
        .post-card .excerpt { color: #666; font-size: 14px; margin-bottom: 12px; }
        .post-card .meta { font-size: 13px; color: #999; }
        .post-card .meta span { margin-right: 15px; }

        /* Sidebar */
        sidebar { display: flex; flex-direction: column; gap: 30px; }
        .widget { background: white; border-radius: 12px; padding: 25px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
        .widget h3 { font-size: 18px; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 3px solid #2563eb; display: inline-block; }
        .widget p { font-size: 14px; color: #666; }
        .widget ul { list-style: none; }
        .widget ul li { padding: 8px 0; border-bottom: 1px solid #eee; font-size: 14px; }
        .widget ul li:last-child { border-bottom: none; }
        .widget ul li a { color: #555; text-decoration: none; }
        .widget ul li a:hover { color: #2563eb; }
        .widget ul li .count { float: right; color: #999; font-size: 13px; }
        .tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .tags a { background: #eef2ff; color: #2563eb; padding: 6px 14px; border-radius: 20px; font-size: 13px; text-decoration: none; transition: background 0.3s; }
        .tags a:hover { background: #2563eb; color: white; }
        .widget .about-avatar { width: 80px; height: 80px; border-radius: 50%; background: #2563eb; color: white; display: flex; align-items: center; justify-content: center; font-size: 32px; font-weight: bold; margin: 0 auto 15px; }

        /* Footer */
        footer { background: #1a1a2e; color: #aaa; padding: 50px 0 25px; margin-top: 60px; }
        footer .container { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 30px; }
        footer h4 { color: white; margin-bottom: 15px; }
        footer p { font-size: 14px; }
        footer ul { list-style: none; }
        footer ul li { margin-bottom: 8px; }
        footer ul li a { color: #aaa; text-decoration: none; font-size: 14px; }
        footer ul li a:hover { color: white; }
        .footer-bottom { grid-column: 1 / -1; text-align: center; padding-top: 25px; border-top: 1px solid #333; margin-top: 20px; font-size: 14px; }
        .social { display: flex; gap: 12px; margin-top: 10px; }
        .social a { color: #aaa; text-decoration: none; font-size: 18px; }

        /* Mobile */
        @media (max-width: 768px) {
            nav { display: none; position: absolute; top: 70px; left: 0; right: 0; background: white; padding: 20px; flex-direction: column; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
            nav.open { display: flex; }
            .hamburger { display: block; }
            .main-layout { grid-template-columns: 1fr; }
            .blog-grid { grid-template-columns: 1fr; }
            .featured a { padding: 30px 20px; }
            .featured h2 { font-size: 24px; }
            footer .container { grid-template-columns: 1fr; gap: 25px; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
            .main-layout { grid-template-columns: 1fr 260px; }
            .blog-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>

<header>
    <div class="container">
        <a href="index.html" class="logo">Code<span>Bytes</span></a>
        <button class="hamburger" onclick="document.querySelector('nav').classList.toggle('open')">☰</button>
        <nav>
            <a href="index.html" class="active">Home</a>
            <a href="post.html">Blog</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
        </nav>
    </div>
</header>

<div class="container">
    <section class="featured">
        <a href="post.html">
            <div class="category">Featured</div>
            <h2>Getting Started with Web Components: A Beginner's Guide</h2>
            <p>Learn how to build reusable custom elements with the Web Components API. Create encapsulated, interoperable components for any web project.</p>
            <div class="meta">By Sarah Chen · June 10, 2026 · 8 min read</div>
        </a>
    </section>

    <div class="main-layout">
        <main>
            <h2 style="margin-bottom: 25px; font-size: 24px;">Latest Articles</h2>
            <div class="blog-grid">
                <article class="post-card">
                    <div class="thumb">⚛️</div>
                    <div class="body">
                        <div class="category">React</div>
                        <h3><a href="post.html">Understanding React Server Components</a></h3>
                        <p class="excerpt">A deep dive into React Server Components and how they change the way we build applications.</p>
                        <div class="meta"><span>📅 June 8, 2026</span><span>⏱ 6 min</span></div>
                    </div>
                </article>
                <article class="post-card">
                    <div class="thumb">🎨</div>
                    <div class="body">
                        <div class="category">CSS</div>
                        <h3><a href="post.html">CSS Container Queries: A Practical Guide</a></h3>
                        <p class="excerpt">Container queries let you style elements based on their container size. Learn how to use them today.</p>
                        <div class="meta"><span>📅 June 5, 2026</span><span>⏱ 5 min</span></div>
                    </div>
                </article>
                <article class="post-card">
                    <div class="thumb">🚀</div>
                    <div class="body">
                        <div class="category">JavaScript</div>
                        <h3><a href="post.html">JavaScript Temporal API: Date and Time Made Easy</a></h3>
                        <p class="excerpt">The Temporal API provides modern date and time handling. Say goodbye to the Date object quirks.</p>
                        <div class="meta"><span>📅 June 2, 2026</span><span>⏱ 7 min</span></div>
                    </div>
                </article>
                <article class="post-card">
                    <div class="thumb">🔐</div>
                    <div class="body">
                        <div class="category">Security</div>
                        <h3><a href="post.html">Web Security Headers Every Developer Should Know</a></h3>
                        <p class="excerpt">Protect your web applications with security headers like CSP, HSTS, X-Frame-Options, and more.</p>
                        <div class="meta"><span>📅 May 28, 2026</span><span>⏱ 4 min</span></div>
                    </div>
                </article>
            </div>
        </main>

        <sidebar>
            <div class="widget" style="text-align:center;">
                <div class="about-avatar">CB</div>
                <h3>About CodeBytes</h3>
                <p>CodeBytes is a tech blog for developers who love learning. We cover web development, programming tutorials, and the latest tech trends.</p>
            </div>

            <div class="widget">
                <h3>Categories</h3>
                <ul>
                    <li><a href="#">HTML & CSS <span class="count">(12)</span></a></li>
                    <li><a href="#">JavaScript <span class="count">(18)</span></a></li>
                    <li><a href="#">React <span class="count">(9)</span></a></li>
                    <li><a href="#">Node.js <span class="count">(7)</span></a></li>
                    <li><a href="#">Security <span class="count">(5)</span></a></li>
                    <li><a href="#">Performance <span class="count">(6)</span></a></li>
                </ul>
            </div>

            <div class="widget">
                <h3>Recent Posts</h3>
                <ul>
                    <li><a href="post.html">Getting Started with Web Components</a></li>
                    <li><a href="post.html">Understanding React Server Components</a></li>
                    <li><a href="post.html">CSS Container Queries Guide</a></li>
                    <li><a href="post.html">JavaScript Temporal API</a></li>
                    <li><a href="post.html">Web Security Headers Guide</a></li>
                </ul>
            </div>

            <div class="widget">
                <h3>Tags</h3>
                <div class="tags">
                    <a href="#">html</a>
                    <a href="#">css</a>
                    <a href="#">javascript</a>
                    <a href="#">react</a>
                    <a href="#">node</a>
                    <a href="#">webpack</a>
                    <a href="#">api</a>
                    <a href="#">security</a>
                    <a href="#">
                    performance</a>
                    <a href="#">design</a>
                </div>
            </div>
        </sidebar>
    </div>
</div>

<footer>
    <div class="container">
        <div>
            <h4 style="font-size:22px; font-weight:700; color:white;">Code<span style="color:#2563eb;">Bytes</span></h4>
            <p>A tech blog for developers who love learning. We share tutorials, guides, and insights about web development and technology.</p>
            <div class="social">
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="GitHub">🐙</a>
                <a href="#" aria-label="LinkedIn">💼</a>
                <a href="#" aria-label="RSS">📡</a>
            </div>
        </div>
        <div>
            <h4>Quick Links</h4>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="post.html">Blog</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
        <div>
            <h4>Categories</h4>
            <ul>
                <li><a href="#">HTML & CSS</a></li>
                <li><a href="#">JavaScript</a></li>
                <li><a href="#">React</a></li>
                <li><a href="#">Node.js</a></li>
            </ul>
        </div>
        <div>
            <h4>Legal</h4>
            <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 CodeBytes. All rights reserved. Built with ❤️ and HTML.</p>
        </div>
    </div>
</footer>

</body>
</html>
```

### File 2: post.html — Blog Post Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Getting Started with Web Components — CodeBytes</title>
    <meta name="description" content="Learn how to build reusable custom elements with the Web Components API. A beginner's guide to creating encapsulated, interoperable components.">
    <meta property="og:title" content="Getting Started with Web Components: A Beginner's Guide">
    <meta property="og:description" content="Learn how to build reusable custom elements with the Web Components API.">
    <meta property="og:type" content="article">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; line-height: 1.8; background: #f8f9fa; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        header { background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.08); position: sticky; top: 0; z-index: 1000; }
        header .container { display: flex; justify-content: space-between; align-items: center; padding: 18px 20px; }
        .logo { font-size: 26px; font-weight: 700; color: #2563eb; text-decoration: none; }
        .logo span { color: #333; }
        nav { display: flex; gap: 28px; align-items: center; }
        nav a { text-decoration: none; color: #555; font-weight: 500; font-size: 15px; }
        nav a:hover, nav a.active { color: #2563eb; }
        .hamburger { display: none; font-size: 28px; cursor: pointer; background: none; border: none; }
        .post-layout { display: grid; grid-template-columns: 1fr 320px; gap: 40px; margin: 40px 0; }
        article { background: white; border-radius: 12px; padding: 40px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
        .post-image { width: 100%; height: 350px; background: #e0e7ff; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 80px; color: #2563eb; margin-bottom: 30px; }
        .post-meta { font-size: 14px; color: #888; margin-bottom: 20px; }
        .post-meta span { margin-right: 20px; }
        .post-meta .cat { color: #2563eb; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; }
        article h1 { font-size: 32px; margin-bottom: 20px; line-height: 1.3; }
        article h2 { font-size: 24px; margin: 35px 0 15px; }
        article h3 { font-size: 20px; margin: 25px 0 10px; }
        article p { margin-bottom: 18px; color: #444; font-size: 17px; }
        article ul, article ol { margin: 15px 0 20px 25px; }
        article li { margin-bottom: 8px; font-size: 16px; }
        blockquote { border-left: 4px solid #2563eb; background: #eef2ff; padding: 15px 25px; margin: 25px 0; border-radius: 0 8px 8px 0; font-style: italic; font-size: 18px; color: #444; }
        .post-tags { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; display: flex; gap: 10px; flex-wrap: wrap; align-items: center; }
        .post-tags span { font-weight: 600; color: #555; }
        .post-tags a { background: #eef2ff; color: #2563eb; padding: 5px 14px; border-radius: 20px; font-size: 13px; text-decoration: none; }
        .share-buttons { display: flex; gap: 10px; margin: 25px 0; }
        .share-buttons a { background: #f0f0f0; padding: 8px 16px; border-radius: 6px; text-decoration: none; color: #555; font-size: 14px; }
        .comments { background: white; border-radius: 12px; padding: 30px; margin-top: 30px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
        .comments h3 { margin-bottom: 20px; }
        .comments p { color: #888; }
        .related { margin: 40px 0; }
        .related h3 { margin-bottom: 20px; font-size: 22px; }
        .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .related-card { background: white; border-radius: 10px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
        .related-card h4 { font-size: 15px; margin-bottom: 8px; }
        .related-card h4 a { color: #333; text-decoration: none; }
        .related-card h4 a:hover { color: #2563eb; }
        .related-card .meta { font-size: 13px; color: #999; }
        .sidebar { display: flex; flex-direction: column; gap: 25px; }
        .widget { background: white; border-radius: 12px; padding: 25px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
        .widget h3 { font-size: 18px; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 3px solid #2563eb; display: inline-block; }
        .widget ul { list-style: none; }
        .widget ul li { padding: 8px 0; border-bottom: 1px solid #eee; font-size: 14px; }
        .widget ul li:last-child { border-bottom: none; }
        .widget ul li a { color: #555; text-decoration: none; }
        .widget ul li a:hover { color: #2563eb; }
        .tags-widget { display: flex; flex-wrap: wrap; gap: 8px; }
        .tags-widget a { background: #eef2ff; color: #2563eb; padding: 5px 12px; border-radius: 20px; font-size: 12px; text-decoration: none; }
        footer { background: #1a1a2e; color: #aaa; padding: 50px 0 25px; margin-top: 60px; }
        footer .container { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 30px; }
        footer h4 { color: white; margin-bottom: 15px; }
        footer p { font-size: 14px; }
        footer ul { list-style: none; }
        footer ul li { margin-bottom: 8px; }
        footer ul li a { color: #aaa; text-decoration: none; font-size: 14px; }
        footer ul li a:hover { color: white; }
        .footer-bottom { grid-column: 1 / -1; text-align: center; padding-top: 25px; border-top: 1px solid #333; margin-top: 20px; font-size: 14px; }
        @media (max-width: 768px) {
            nav { display: none; position: absolute; top: 70px; left: 0; right: 0; background: white; padding: 20px; flex-direction: column; }
            nav.open { display: flex; }
            .hamburger { display: block; }
            .post-layout { grid-template-columns: 1fr; }
            .related-grid { grid-template-columns: 1fr; }
            article { padding: 20px; }
            article h1 { font-size: 24px; }
            .post-image { height: 200px; font-size: 48px; }
            footer .container { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
<header>
    <div class="container">
        <a href="index.html" class="logo">Code<span>Bytes</span></a>
        <button class="hamburger" onclick="document.querySelector('nav').classList.toggle('open')">☰</button>
        <nav>
            <a href="index.html">Home</a>
            <a href="post.html" class="active">Blog</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
        </nav>
    </div>
</header>

<div class="container post-layout">
    <main>
        <article>
            <div class="post-image">🧩</div>
            <div class="post-meta">
                <span class="cat">Web Development</span>
                <span>📅 June 10, 2026</span>
                <span>✍️ Sarah Chen</span>
                <span>⏱ 8 min read</span>
            </div>
            <h1>Getting Started with Web Components: A Beginner's Guide</h1>

            <p>Web Components are a set of browser APIs that allow developers to create reusable custom HTML elements. They are framework-agnostic, meaning they work with any JavaScript library or framework—or with no framework at all. In this guide, you will learn the fundamentals of Web Components and build your first custom element.</p>

            <h2>What Are Web Components?</h2>
            <p>Web Components consist of three main technologies:</p>
            <ul>
                <li><strong>Custom Elements</strong> — Define new HTML tags with custom behavior</li>
                <li><strong>Shadow DOM</strong> — Encapsulate styles and markup to prevent conflicts</li>
                <li><strong>HTML Templates</strong> — Declare fragments of markup that are not rendered until used</li>
            </ul>

            <h2>Building Your First Custom Element</h2>
            <p>Let's create a simple custom element called <code>&lt;hello-world&gt;</code> that renders a greeting. A custom element is defined using a JavaScript class that extends <code>HTMLElement</code>.</p>

            <blockquote>"Web Components represent the platform-native way to build reusable components. They are the foundation upon which frameworks are built." — The author</blockquote>

            <h3>Step 1: Define the Element Class</h3>
            <p>Create a class that extends HTMLElement. The constructor must call super() first. Use the <code>connectedCallback</code> lifecycle method to run code when the element is added to the DOM.</p>

            <h3>Step 2: Register the Element</h3>
            <p>Use <code>customElements.define()</code> to register your element with a hyphenated name. Custom element names must contain a hyphen to avoid conflicts with built-in elements.</p>

            <h2>Adding Attributes and Properties</h2>
            <p>Custom elements can accept attributes just like built-in elements. Use the <code>observedAttributes</code> static getter and the <code>attributeChangedCallback</code> to respond to attribute changes.</p>

            <h2>Encapsulation with Shadow DOM</h2>
            <p>The Shadow DOM provides style and markup encapsulation. Styles defined inside a shadow root do not leak out, and external styles do not leak in. This is one of the most powerful features of Web Components.</p>

            <div class="post-tags">
                <span>Tags:</span>
                <a href="#">web-components</a>
                <a href="#">javascript</a>
                <a href="#">frontend</a>
                <a href="#">html</a>
                <a href="#">tutorial</a>
            </div>

            <div class="share-buttons">
                <a href="#">Share on Twitter</a>
                <a href="#">Share on Facebook</a>
                <a href="#">Share on LinkedIn</a>
                <a href="#">Copy Link</a>
            </div>
        </article>

        <section class="comments">
            <h3>💬 Comments (2)</h3>
            <p>Leave a comment below. Your email address will not be published.</p>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
                <div style="margin-bottom: 20px;">
                    <strong>Alex M.</strong> <span style="color:#999; font-size:13px;">· 2 days ago</span>
                    <p style="margin-top:5px;">Great article! I have been looking for a clear introduction to Web Components. The Shadow DOM explanation finally makes sense to me.</p>
                </div>
                <div>
                    <strong>Priya K.</strong> <span style="color:#999; font-size:13px;">· 1 day ago</span>
                    <p style="margin-top:5px;">Would love to see a follow-up on using Web Components with React or Vue. Thanks for this thorough guide!</p>
                </div>
            </div>
        </section>

        <section class="related">
            <h3>Related Articles</h3>
            <div class="related-grid">
                <div class="related-card"><h4><a href="post.html">Understanding React Server Components</a></h4><div class="meta">June 8, 2026</div></div>
                <div class="related-card"><h4><a href="post.html">CSS Container Queries: A Practical Guide</a></h4><div class="meta">June 5, 2026</div></div>
                <div class="related-card"><h4><a href="post.html">JavaScript Temporal API: Date and Time Made Easy</a></h4><div class="meta">June 2, 2026</div></div>
            </div>
        </section>
    </main>

    <aside class="sidebar">
        <div class="widget">
            <h3>About the Author</h3>
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:10px;">
                <div style="width:50px; height:50px; border-radius:50%; background:#2563eb; color:white; display:flex; align-items:center; justify-content:center; font-weight:bold;">SC</div>
                <div><strong>Sarah Chen</strong><br><span style="font-size:13px; color:#888;">Senior Frontend Developer</span></div>
            </div>
            <p style="font-size:14px;">Sarah is a frontend developer with 8+ years of experience building web applications. She specializes in JavaScript, React, and Web Components.</p>
        </div>
        <div class="widget">
            <h3>Categories</h3>
            <ul>
                <li><a href="#">HTML & CSS</a></li>
                <li><a href="#">JavaScript</a></li>
                <li><a href="#">React</a></li>
                <li><a href="#">Node.js</a></li>
            </ul>
        </div>
        <div class="widget">
            <h3>Recent Posts</h3>
            <ul>
                <li><a href="post.html">Getting Started with Web Components</a></li>
                <li><a href="post.html">Understanding React Server Components</a></li>
                <li><a href="post.html">CSS Container Queries Guide</a></li>
            </ul>
        </div>
        <div class="widget">
            <h3>Tags</h3>
            <div class="tags-widget">
                <a href="#">html</a><a href="#">css</a><a href="#">javascript</a><a href="#">react</a><a href="#">api</a>
            </div>
        </div>
    </aside>
</div>

<footer>
    <div class="container">
        <div>
            <h4 style="font-size:22px;">Code<span style="color:#2563eb;">Bytes</span></h4>
            <p>A tech blog for developers who love learning.</p>
        </div>
        <div><h4>Quick Links</h4><ul><li><a href="index.html">Home</a></li><li><a href="post.html">Blog</a></li><li><a href="about.html">About</a></li><li><a href="contact.html">Contact</a></li></ul></div>
        <div><h4>Categories</h4><ul><li><a href="#">HTML & CSS</a></li><li><a href="#">JavaScript</a></li><li><a href="#">React</a></li><li><a href="#">Node.js</a></li></ul></div>
        <div><h4>Legal</h4><ul><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms of Service</a></li></ul></div>
        <div class="footer-bottom"><p>&copy; 2026 CodeBytes. All rights reserved.</p></div>
    </div>
</footer>
</body>
</html>
```

### File 3: about.html — About Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About CodeBytes — Tech Blog for Developers</title>
    <meta name="description" content="Learn about CodeBytes, our mission, and the team behind the tech blog.">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; line-height: 1.6; background: #f8f9fa; }
        .container { max-width: 800px; margin: 0 auto; padding: 0 20px; }
        header { background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.08); position: sticky; top: 0; z-index: 1000; }
        header .container { max-width: 1200px; display: flex; justify-content: space-between; align-items: center; padding: 18px 20px; }
        .logo { font-size: 26px; font-weight: 700; color: #2563eb; text-decoration: none; }
        .logo span { color: #333; }
        nav { display: flex; gap: 28px; }
        nav a { text-decoration: none; color: #555; font-weight: 500; font-size: 15px; }
        nav a:hover, nav a.active { color: #2563eb; }
        .hamburger { display: none; font-size: 28px; cursor: pointer; background: none; border: none; }
        .about-page { background: white; border-radius: 12px; padding: 50px; margin: 40px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
        .about-page h1 { font-size: 32px; margin-bottom: 10px; }
        .about-page .subtitle { color: #888; font-size: 18px; margin-bottom: 30px; }
        .about-page .avatar { width: 120px; height: 120px; border-radius: 50%; background: #2563eb; color: white; display: flex; align-items: center; justify-content: center; font-size: 48px; font-weight: bold; margin-bottom: 25px; }
        .about-page h2 { font-size: 22px; margin: 30px 0 15px; }
        .about-page p { margin-bottom: 15px; font-size: 16px; color: #555; }
        .about-page ul { margin: 10px 0 20px 20px; }
        .about-page ul li { margin-bottom: 8px; }
        .about-page .skills { display: flex; flex-wrap: wrap; gap: 10px; margin: 15px 0; }
        .about-page .skills span { background: #eef2ff; color: #2563eb; padding: 8px 18px; border-radius: 25px; font-size: 14px; }
        .social-links { display: flex; gap: 15px; margin-top: 20px; }
        .social-links a { color: #555; text-decoration: none; font-size: 20px; }
        footer { background: #1a1a2e; color: #aaa; text-align: center; padding: 30px 0; margin-top: 40px; }
        @media (max-width: 768px) {
            nav { display: none; position: absolute; top: 70px; left: 0; right: 0; background: white; padding: 20px; flex-direction: column; }
            nav.open { display: flex; }
            .hamburger { display: block; }
            .about-page { padding: 25px; }
        }
    </style>
</head>
<body>
<header>
    <div class="container" style="max-width:1200px;">
        <a href="index.html" class="logo">Code<span>Bytes</span></a>
        <button class="hamburger" onclick="document.querySelector('nav').classList.toggle('open')">☰</button>
        <nav>
            <a href="index.html">Home</a>
            <a href="post.html">Blog</a>
            <a href="about.html" class="active">About</a>
            <a href="contact.html">Contact</a>
        </nav>
    </div>
</header>
<div class="container">
    <main class="about-page">
        <div class="avatar">CB</div>
        <h1>About CodeBytes</h1>
        <p class="subtitle">A tech blog for developers who love learning.</p>
        <p>CodeBytes was founded in 2026 with a simple mission: make complex technical topics accessible and enjoyable for developers of all skill levels. We believe that the best way to learn is by building, and our tutorials are designed to be hands-on and practical.</p>
        <h2>Our Story</h2>
        <p>What started as a small collection of notes and code snippets has grown into a thriving community of developers who share a passion for web technologies. Our writers are experienced developers who work with the technologies they write about every day.</p>
        <h2>What We Write About</h2>
        <ul>
            <li>Web development with HTML, CSS, and JavaScript</li>
            <li>Modern frameworks like React, Vue, and Next.js</li>
            <li>Backend development with Node.js and Python</li>
            <li>Web performance, security, and best practices</li>
            <li>Developer tools, workflows, and career tips</li>
        </ul>
        <h2>Our Expertise</h2>
        <div class="skills">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>TypeScript</span>
            <span>Web Performance</span>
            <span>Accessibility</span>
        </div>
        <h2>Connect With Us</h2>
        <p>Follow CodeBytes on social media for the latest tutorials, tips, and updates.</p>
        <div class="social-links">
            <a href="#" aria-label="Twitter">🐦 Twitter</a>
            <a href="#" aria-label="GitHub">🐙 GitHub</a>
            <a href="#" aria-label="LinkedIn">💼 LinkedIn</a>
            <a href="#" aria-label="RSS">📡 RSS Feed</a>
        </div>
    </main>
</div>
<footer><p>&copy; 2026 CodeBytes. All rights reserved.</p></footer>
</body>
</html>
```

### File 4: contact.html — Contact Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact CodeBytes — Get in Touch</title>
    <meta name="description" content="Get in touch with the CodeBytes team. Send us a message or find our contact information.">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; line-height: 1.6; background: #f8f9fa; }
        .container { max-width: 800px; margin: 0 auto; padding: 0 20px; }
        header { background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.08); position: sticky; top: 0; z-index: 1000; }
        header .container { max-width: 1200px; display: flex; justify-content: space-between; align-items: center; padding: 18px 20px; }
        .logo { font-size: 26px; font-weight: 700; color: #2563eb; text-decoration: none; }
        .logo span { color: #333; }
        nav { display: flex; gap: 28px; }
        nav a { text-decoration: none; color: #555; font-weight: 500; font-size: 15px; }
        nav a:hover, nav a.active { color: #2563eb; }
        .hamburger { display: none; font-size: 28px; cursor: pointer; background: none; border: none; }
        .contact-page { background: white; border-radius: 12px; padding: 50px; margin: 40px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
        .contact-page h1 { font-size: 32px; margin-bottom: 10px; }
        .contact-page .subtitle { color: #888; font-size: 18px; margin-bottom: 30px; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        .contact-info h2 { font-size: 20px; margin-bottom: 15px; }
        .contact-info p { color: #555; margin-bottom: 10px; font-size: 15px; }
        .contact-info .item { margin-bottom: 20px; }
        .contact-info .item strong { display: block; margin-bottom: 3px; }
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; font-weight: 600; margin-bottom: 5px; font-size: 14px; }
        .form-group input, .form-group textarea { width: 100%; padding: 12px 15px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 15px; font-family: inherit; transition: border-color 0.3s; }
        .form-group input:focus, .form-group textarea:focus { outline: none; border-color: #2563eb; }
        .form-group textarea { height: 150px; resize: vertical; }
        .btn { background: #2563eb; color: white; padding: 14px 35px; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; transition: background 0.3s; }
        .btn:hover { background: #1d4ed8; }
        footer { background: #1a1a2e; color: #aaa; text-align: center; padding: 30px 0; margin-top: 40px; }
        @media (max-width: 768px) {
            nav { display: none; position: absolute; top: 70px; left: 0; right: 0; background: white; padding: 20px; flex-direction: column; }
            nav.open { display: flex; }
            .hamburger { display: block; }
            .contact-grid { grid-template-columns: 1fr; }
            .contact-page { padding: 25px; }
        }
    </style>
</head>
<body>
<header>
    <div class="container" style="max-width:1200px;">
        <a href="index.html" class="logo">Code<span>Bytes</span></a>
        <button class="hamburger" onclick="document.querySelector('nav').classList.toggle('open')">☰</button>
        <nav>
            <a href="index.html">Home</a>
            <a href="post.html">Blog</a>
            <a href="about.html">About</a>
            <a href="contact.html" class="active">Contact</a>
        </nav>
    </div>
</header>
<div class="container">
    <main class="contact-page">
        <h1>Get in Touch</h1>
        <p class="subtitle">Have a question, suggestion, or just want to say hello? We would love to hear from you.</p>
        <div class="contact-grid">
            <div class="contact-info">
                <h2>Contact Information</h2>
                <div class="item"><strong>📧 Email</strong> hello@codebytes.blog</div>
                <div class="item"><strong>📱 Phone</strong> +1 (555) 123-4567</div>
                <div class="item"><strong>📍 Address</strong> 123 Developer Lane, San Francisco, CA 94102</div>
                <div class="item"><strong>🕐 Hours</strong> Monday — Friday, 9AM — 6PM EST</div>
                <h2 style="margin-top:30px;">Follow Us</h2>
                <p>Stay updated on social media:</p>
                <p style="margin-top:10px;">
                    <a href="#" style="color:#2563eb; text-decoration:none; margin-right:15px;">🐦 Twitter</a>
                    <a href="#" style="color:#2563eb; text-decoration:none; margin-right:15px;">🐙 GitHub</a>
                    <a href="#" style="color:#2563eb; text-decoration:none;">💼 LinkedIn</a>
                </p>
            </div>
            <form>
                <div class="form-group">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="John Doe" required>
                </div>
                <div class="form-group">
                    <label for="email">Your Email</label>
                    <input type="email" id="email" name="email" placeholder="john@example.com" required>
                </div>
                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="How can we help?">
                </div>
                <div class="form-group">
                    <label for="message">Your Message</label>
                    <textarea id="message" name="message" placeholder="Write your message here..." required></textarea>
                </div>
                <button type="submit" class="btn">Send Message</button>
            </form>
        </div>
    </main>
</div>
<footer><p>&copy; 2026 CodeBytes. All rights reserved.</p></footer>
</body>
</html>
```

## Expected Output
When you open `index.html`, you should see a complete blog website with:
- A sticky header with navigation active on the current page
- A featured post section with gradient background
- A 2-column blog post grid with cards
- A sidebar with About widget, Categories, Recent Posts, and Tags
- All pages have consistent header and footer
- `post.html` shows a full article with image, headings, blockquote, tags, comments, and related posts
- `about.html` shows author info, skills, and social links
- `contact.html` shows a contact form and contact information

## Bonus Challenges
- Add a search bar to the header
- Add a dark mode toggle with CSS custom properties
- Implement a "read more" truncation on post cards
- Add a cookie consent banner
- Create a 404.html page
- Add CSS transitions to sidebar links
- Implement a back-to-top button

## Submission
Create all four HTML files in a folder. Open `index.html` in a browser. Verify all links work between pages. Test responsive layout at different screen sizes. Validate HTML at https://validator.w3.org/.
