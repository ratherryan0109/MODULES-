# Module 2: HTML Editors

## Introduction
An HTML editor is a software application designed for creating and editing HTML code. While you can write HTML in any plain text editor, dedicated HTML editors provide features like syntax highlighting, auto-completion, live preview, and debugging tools that significantly improve productivity. Choosing the right editor is one of the first and most important decisions a web developer makes.

## Learning Objectives
By the end of this module, you will be able to:
- Distinguish between text editors, code editors, and WYSIWYG editors
- Identify features to look for in an HTML editor
- Write and preview HTML in different editors
- Set up a professional development environment
- Configure essential extensions and plugins for web development

## Types of HTML Editors

### 1. Plain Text Editors
Simple editors with no special HTML features. Suitable for quick edits but not for serious development.

| Editor | Platform | Notes |
|--------|----------|-------|
| Notepad | Windows | Built-in, very basic |
| TextEdit | macOS | Use "Make Plain Text" mode |
| gedit | Linux | Basic syntax highlighting |

### 2. Code Editors (Most Popular)
Designed for programming with syntax highlighting, extensions, and integrated terminals.

| Editor | Platform | Key Features |
|--------|----------|--------------|
| VS Code | Cross-platform | IntelliSense, Live Server, Extensions |
| Sublime Text | Cross-platform | Fast, distraction-free, Package Control |
| Atom | Cross-platform | Hackable, GitHub integration |
| Brackets | Cross-platform | Live Preview, Extract (Adobe) |

### 3. WYSIWYG Editors (What You See Is What You Get)
Visual editors that let you design pages without writing code directly.

| Editor | Notes |
|--------|-------|
| Adobe Dreamweaver | Industry standard for visual design |
| BlueGriffon | Open-source WYSIWYG editor |
| SeaMonkey Composer | Free, basic WYSIWYG |

### 4. Online HTML Editors
Browser-based tools for quick prototyping and testing.

| Editor | URL |
|--------|-----|
| CodePen | https://codepen.io |
| JSFiddle | https://jsfiddle.net |
| CodeSandbox | https://codesandbox.io |
| HTML Online | https://html-online.com/editor/ |

## Setting Up VS Code (Recommended)

VS Code is the most widely used editor for web development. Here's how to set it up:

### Installation
1. Download from https://code.visualstudio.com
2. Run the installer (Windows/macOS/Linux)
3. Launch VS Code

### Essential Extensions for HTML Development

| Extension | Purpose |
|-----------|---------|
| **Live Server** | Launch a local server with live reload |
| **HTML CSS Support** | Auto-completion for CSS classes in HTML |
| **Prettier** | Automatic code formatting |
| **Auto Rename Tag** | Automatically rename paired tags |
| **HTML Boilerplate** | Quickly insert HTML template |
| **IntelliSense for CSS** | CSS class name completion |
| **Path Intellisense** | Autocomplete file paths |
| **Emmet** | Built-in — fast HTML/CSS shorthand |

### Using Emmet in VS Code
Emmet allows you to write HTML quickly using abbreviations:

| Abbreviation | Expands To |
|-------------|------------|
| `!` + Tab | Full HTML5 boilerplate |
| `h1{Hello}` | `<h1>Hello</h1>` |
| `ul>li*3` | `<ul><li></li><li></li><li></li></ul>` |
| `a[href="#"]` | `<a href="#"></a>` |
| `div#main` | `<div id="main"></div>` |
| `.container` | `<div class="container"></div>` |

## Creating and Previewing HTML

### Method 1: Direct File Open
1. Create an `index.html` file
2. Right-click → "Open with" → Your Browser
3. Refresh the browser after each edit

### Method 2: Live Server (Recommended)
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html` → "Open with Live Server"
3. The page auto-reloads on every save

### Method 3: Browser Developer Tools
1. Open any webpage in Chrome/Firefox/Edge
2. Press F12 or Ctrl+Shift+I
3. Use the "Elements" tab to inspect and edit HTML live

## Keyboard Shortcuts (VS Code)

| Shortcut | Action |
|----------|--------|
| `!` + Tab | Insert HTML boilerplate |
| Ctrl+S | Save file |
| Ctrl+Shift+P | Command Palette |
| Alt+Up/Down | Move line up/down |
| Ctrl+D | Select next occurrence |
| Ctrl+/ | Toggle comment |
| Shift+Alt+F | Format document |
| Ctrl+B | Toggle sidebar |

## Best Practices for Using Editors

1. **Use a code editor** — not a word processor or plain text editor
2. **Enable autosave** — saves time and prevents data loss
3. **Learn keyboard shortcuts** — dramatically improves speed
4. **Use Emmet** — write HTML 10x faster
5. **Format your code** — use Prettier or built-in formatters
6. **Use version control** — integrate Git with your editor
7. **Customize your theme** — dark themes reduce eye strain
8. **Keep extensions minimal** — too many slow down your editor

## Common Mistakes

| Mistake | Solution |
|---------|----------|
| Using Word/Google Docs | They add hidden formatting |
| Not using live preview | Slows down the development cycle |
| Ignoring syntax errors | Use the built-in error checker |
| No version control | Use Git integration |
| Not learning Emmet | Memorize 5-10 common abbreviations |

## Summary Notes
- Plain text editors work but lack productivity features
- VS Code is the industry-standard code editor for web development
- Live Server provides automatic browser refreshing
- Emmet shorthand can drastically speed up HTML writing
- WYSIWYG editors are useful for designers but not recommended for learning
- Browser DevTools allow real-time HTML inspection and editing
- Always format your code for consistency and readability
