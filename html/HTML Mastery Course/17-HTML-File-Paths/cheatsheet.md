# HTML File Paths — Cheatsheet

## Path Types

| Type | Example | Description |
|------|---------|-------------|
| Absolute | `https://site.com/file.jpg` | Full URL with protocol and domain |
| Relative | `images/file.jpg` | Relative to current document |
| Root-relative | `/images/file.jpg` | From website root (starts with /) |
| Same dir | `file.jpg` or `./file.jpg` | Same directory as current page |

## Path Symbols

| Symbol | Meaning |
|--------|---------|
| `/` | Forward slash — directory separator |
| `./` | Current directory (optional) |
| `../` | Parent directory (one level up) |
| `../../` | Two levels up |

## Common Patterns

```
Current page:  /index.html
CSS:           css/style.css
Image:         images/photo.jpg
JS:            js/script.js

Current page:  /pages/blog/post.html
CSS:           ../../css/style.css
Image:         ../../images/photo.jpg
Back to home:  ../../index.html
```

## Project Structure Best Practice

```
project/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── logo.png
│   └── icons/
│       └── icon.svg
└── pages/
    ├── about.html
    └── blog/
        └── post.html
```

## DOs and DON'Ts

| ✅ Do | ❌ Don't |
|-------|----------|
| Use forward slashes `/` | Use backslashes `\` |
| Use lowercase with hyphens | Use spaces in filenames |
| Use root-relative for shared nav | Hardcode absolute paths internally |
| Test paths on all pages | Forget case sensitivity |
| Use `../` to go to parent | Overuse `../` (go too far up) |
| Organize files in folders | Put all files in root |

## CSS Path Caution

```css
/* In css/style.css — paths are relative to the CSS file, NOT the HTML */
background-image: url('../images/bg.jpg');  /* Goes up from css/ to root then into images/ */
```

## HTML Examples

```html
<!-- Same directory -->
<img src="photo.jpg">
<a href="about.html">

<!-- Subdirectory -->
<img src="images/photo.jpg">
<link rel="stylesheet" href="css/style.css">

<!-- Parent directory -->
<img src="../images/photo.jpg">
<a href="../index.html">

<!-- Root-relative -->
<img src="/images/photo.jpg">
<a href="/pages/about.html">

<!-- Absolute (external) -->
<img src="https://cdn.example.com/photo.jpg">
<a href="https://google.com">
```

## Quick Reference from /pages/blog/post.html

| Target | Path |
|--------|------|
| Home | `../../index.html` |
| CSS | `../../css/style.css` |
| JS | `../../js/script.js` |
| Logo | `../../images/logo.png` |
| About | `../../about.html` |
