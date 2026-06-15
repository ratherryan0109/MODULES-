# Mini Project: Build and Fix a Multi-Page Website with Correct Paths

## Overview

You are given a disorganized website project. Your task is to reorganize the files into a proper structure and fix all broken file paths across all pages.

## The Problem

The website has these files scattered in one folder:
- `index.html`, `about.html`, `contact.html`
- `main.css`, `style.css`
- `app.js`, `analytics.js`
- `logo.png`, `hero.jpg`, `icon1.png`, `icon2.png`

All pages reference files using incorrect paths. Your job is to:
1. Create a proper folder structure
2. Move files into correct folders
3. Fix all paths in every HTML file
4. Verify everything works

## Requirements

### New Structure
```
root/
├── index.html
├── about.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── images/
│   ├── logo.png
│   ├── hero.jpg
│   └── icons/
│       ├── icon1.png
│       └── icon2.png
```

### Path Fixes Needed

In `index.html`, these paths are broken:
```html
<link rel="stylesheet" href="main.css">         <!-- Wrong: should be css/style.css -->
<script src="app.js"></script>                  <!-- Wrong: should be js/app.js -->
<img src="logo.png" alt="Logo">                 <!-- Wrong: should be images/logo.png -->
<img src="hero.jpg" alt="Hero">                 <!-- Wrong: should be images/hero.jpg -->
```

In `about.html` (which should be in root), references are also broken.

## Solution

```html
<!-- index.html — Corrected -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home — MySite</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
  </nav>

  <img src="images/logo.png" alt="Company Logo" width="200">
  <img src="images/hero.jpg" alt="Hero banner" width="800">

  <script src="js/app.js"></script>
</body>
</html>
```

```html
<!-- about.html — Corrected -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Us — MySite</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
  </nav>

  <img src="images/icons/icon1.png" alt="Icon 1">
  <img src="images/icons/icon2.png" alt="Icon 2">

  <script src="js/app.js"></script>
</body>
</html>
```

## Verification Checklist

- [ ] All HTML files are valid
- [ ] CSS loads correctly (check in browser)
- [ ] JavaScript loads correctly
- [ ] All images display
- [ ] Navigation links work between pages
- [ ] No 404 errors in browser console/network tab
- [ ] Paths work from every page (not just index.html)

## Bonus Challenge

Add a fourth page at `blog/post.html` and make the navigation use root-relative paths so it works from the subdirectory too.
