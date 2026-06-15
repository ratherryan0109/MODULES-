# Mini Project: Optimize a Multi-Page Website's Titles

## Overview

Given a 5-page website (Home, About, Blog, Products, Contact), rewrite all page titles following SEO best practices. Create an HTML page that demonstrates proper titles, including a visual comparison of the old (bad) vs new (good) titles. Also implement dynamic title updates with JavaScript.

## Requirements

1. Create a single HTML page that demonstrates 5 page titles with explanations
2. Show the "before" (wrong) and "after" (corrected) title for each page
3. Include a browser tab mockup for each title
4. Add a JavaScript section that dynamically updates the page title
5. Write a SERP preview showing how titles appear in Google search results

## Page Titles to Fix

| Page | Bad Title | Corrected Title |
|------|-----------|-----------------|
| Home | Home | Web Design Studio — Creative Digital Agency |
| About | About Us | About Us — Our Team & Story | Web Design Studio |
| Blog | Blog | Web Design Tips & Tutorials — Blog | Studio |
| Products | Products | WordPress Themes & Plugins — Web Design Studio |
| Contact | Contact Page | Get in Touch — Contact Web Design Studio |

## Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Title Optimization Project — Web Design Studio</title>
  <style>
    body { font-family: 'Segoe UI', sans-serif; max-width: 900px; margin: 0 auto; padding: 30px; background: #f8f9fa; }
    h1 { text-align: center; color: #1a1a2e; }
    .page-card { background: white; border-radius: 10px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
    .page-card h2 { margin-bottom: 10px; color: #2c3e50; }
    .bad-title { color: #e74c3c; text-decoration: line-through; }
    .good-title { color: #2ecc71; font-weight: bold; }
    .tab-preview { background: #e8e8e8; border-radius: 6px 6px 0 0; padding: 6px 12px; font-size: 13px; display: inline-block; margin: 5px 0; }
    code { background: #ecf0f1; padding: 2px 6px; border-radius: 4px; font-size: 14px; }
    .controls { text-align: center; margin: 30px 0; }
    button { padding: 10px 20px; margin: 5px; border: none; border-radius: 6px; cursor: pointer; background: #3498db; color: white; }
  </style>
</head>
<body>
  <h1>📄 SEO Title Optimization Project</h1>
  <p style="text-align:center;color:#666;">Demonstrating proper page titles for a 5-page website</p>

  <div class="page-card">
    <h2>🏠 Homepage</h2>
    <p><span class="bad-title">❌ Home</span></p>
    <p><span class="good-title">✅ Web Design Studio — Creative Digital Agency</span></p>
    <div class="tab-preview">🔖 Web Design Studio — Creative Digital Agency</div>
    <p><code>&lt;title&gt;Web Design Studio — Creative Digital Agency&lt;/title&gt;</code></p>
  </div>

  <div class="page-card">
    <h2>👥 About Page</h2>
    <p><span class="bad-title">❌ About Us</span></p>
    <p><span class="good-title">✅ About Us — Our Team & Story | Web Design Studio</span></p>
    <div class="tab-preview">🔖 About Us — Our Team & Story | Web Design Studio</div>
    <p><code>&lt;title&gt;About Us — Our Team &amp; Story | Web Design Studio&lt;/title&gt;</code></p>
  </div>

  <div class="page-card">
    <h2>📝 Blog Page</h2>
    <p><span class="bad-title">❌ Blog</span></p>
    <p><span class="good-title">✅ Web Design Tips & Tutorials — Blog | Web Design Studio</span></p>
    <div class="tab-preview">🔖 Web Design Tips & Tutorials — Blog | Web Design Studio</div>
    <p><code>&lt;title&gt;Web Design Tips &amp; Tutorials — Blog | Web Design Studio&lt;/title&gt;</code></p>
  </div>

  <div class="page-card">
    <h2>💼 Products Page</h2>
    <p><span class="bad-title">❌ Products</span></p>
    <p><span class="good-title">✅ WordPress Themes & Plugins — Web Design Studio</span></p>
    <div class="tab-preview">🔖 WordPress Themes & Plugins — Web Design Studio</div>
    <p><code>&lt;title&gt;WordPress Themes &amp; Plugins — Web Design Studio&lt;/title&gt;</code></p>
  </div>

  <div class="page-card">
    <h2>📞 Contact Page</h2>
    <p><span class="bad-title">❌ Contact Page</span></p>
    <p><span class="good-title">✅ Get in Touch — Contact Web Design Studio</span></p>
    <div class="tab-preview">🔖 Get in Touch — Contact Web Design Studio</div>
    <p><code>&lt;title&gt;Get in Touch — Contact Web Design Studio&lt;/title&gt;</code></p>
  </div>

  <div class="controls">
    <h2>Dynamic Title Demo</h2>
    <p>Current title: <strong id="titleDisplay"></strong></p>
    <button onclick="document.title='Web Design Studio';updateDisplay()">Reset</button>
    <button onclick="document.title='(1) New Message — Web Design Studio';updateDisplay()">New Message</button>
    <button onclick="document.title='🔔 Notification — Web Design Studio';updateDisplay()">Notification</button>
    <button onclick="document.title='Come back! — Web Design Studio';updateDisplay()">Tab Hidden</button>
  </div>

  <script>
    function updateDisplay() { document.getElementById('titleDisplay').textContent = document.title; }
    updateDisplay();
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) document.title = 'Come back! — Web Design Studio';
      else document.title = 'Web Design Studio';
      updateDisplay();
    });
  </script>
</body>
</html>
```

## Submission

Open the HTML file in your browser. Verify:
- The browser tab shows the project title
- Each bad/good title comparison is clear
- The dynamic title buttons work
- The tab title changes when you switch to another tab (visibility API)
