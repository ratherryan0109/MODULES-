# Module 17: HTML File Paths

## Introduction

File paths specify the location of files referenced in an HTML document — images, stylesheets, scripts, links to other pages, and more. Understanding file paths is fundamental to building websites that work correctly. An incorrect file path results in broken links, missing images, and broken functionality.

There are two types of file paths: **absolute** (full URL) and **relative** (based on the current document's location). Choosing the right path type depends on context, project structure, and where the files are hosted.

---

## Learning Objectives

By the end of this module, you will be able to:
- Distinguish between absolute and relative file paths
- Navigate directories using relative path syntax
- Use root-relative paths correctly
- Avoid common file path mistakes
- Organize project files with proper path references

---

## Absolute File Paths

An absolute path includes the full URL from the protocol to the file.

```html
<img src="https://www.example.com/images/photo.jpg">
<a href="https://www.example.com/about.html">
<link rel="stylesheet" href="https://www.example.com/css/style.css">
```

**Use when:** Linking to resources on external domains, or when you need a fixed reference regardless of page location.

## Relative File Paths

A relative path specifies the location relative to the current document.

### Same Directory

```html
<img src="photo.jpg">
<a href="about.html">
```

If current page is `https://example.com/index.html`, these reference `https://example.com/photo.jpg` and `https://example.com/about.html`.

### Subdirectory

```html
<img src="images/photo.jpg">
<a href="pages/about.html">
```

Navigates into a child directory from the current page's location.

### Parent Directory

```html
<img src="../images/photo.jpg">
<a href="../about.html">
```

`../` moves one directory level up. `../../` moves two levels up.

### Root-Relative Paths

```html
<img src="/images/photo.jpg">
<a href="/about.html">
```

Starts from the website root (domain root), regardless of the current page's location. The leading `/` means "start from the root."

---

## Path Traversal Examples

```
Project Structure:
website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── logo.png
│   └── gallery/
│       └── photo.jpg
└── pages/
    ├── about.html
    └── blog/
        └── post.html
```

### From `index.html` (root)
| Target | Relative Path |
|--------|--------------|
| `style.css` | `css/style.css` |
| `script.js` | `js/script.js` |
| `logo.png` | `images/logo.png` |
| `photo.jpg` | `images/gallery/photo.jpg` |
| `about.html` | `pages/about.html` |
| `post.html` | `pages/blog/post.html` |

### From `post.html` (nested: pages/blog/)
| Target | Relative Path |
|--------|--------------|
| `style.css` | `../../css/style.css` |
| `logo.png` | `../../images/logo.png` |
| `index.html` | `../../index.html` |
| `about.html` | `../../about.html` |

---

## Common Mistakes

1. **Wrong number of `../`** — Going too far up or not far enough
2. **Case sensitivity** — Some servers are case-sensitive (`Photo.jpg` ≠ `photo.jpg`)
3. **Missing file extensions** — `image` instead of `image.jpg`
4. **Using backslashes** — Windows uses `\` but web URLs use `/`
5. **Spaces in filenames** — Use hyphens or underscores instead
6. **Relative paths in CSS** — CSS file paths are relative to the CSS file, not the HTML page
7. **Hotlinking** — Using absolute paths to other people's resources without permission

---

## Best Practices

1. **Use relative paths** for internal resources — they work in development and production
2. **Use root-relative paths** for shared resources (headers, footers, global CSS)
3. **Use absolute paths** only for external resources
4. **Keep filenames lowercase** with hyphens (`my-image.jpg` not `My Image.jpg`)
5. **Organize files logically** — Group by type (css/, js/, images/)
6. **Test all paths** — Check for broken references
7. **Use URL encoding** for special characters in filenames

---

## Summary Notes

- Absolute paths = full URL: `https://example.com/file.jpg`
- Relative paths = relative to current file: `images/file.jpg`
- Root-relative paths = from site root: `/images/file.jpg`
- `./` = current directory, `../` = parent directory
- Always use forward slashes `/` for web paths
- Be careful with case sensitivity on Linux servers
- Organize project files with a clear directory structure
- Test all file paths in both development and production
- Relative paths are portable between environments
- CSS file references are relative to the CSS file, not the HTML
