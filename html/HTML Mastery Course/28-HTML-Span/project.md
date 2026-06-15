# Mini Project: Real-Time Preview Text Editor

## Overview

Build a real-time preview text editor where users type into a textarea and see formatted output. Use `<span>` elements for dynamic styling including bold, italic, underline, highlight, and color changes.

## Requirements

1. **Toolbar**: Buttons for Bold, Italic, Underline, Highlight, Red, Blue, Green
2. **Editor area**: A contenteditable div or textarea where users write text
3. **Preview area**: Shows the formatted output using spans
4. **Format selected text**: Users select text, click a toolbar button, and the text gets wrapped in appropriate spans
5. **Clear formatting**: Button to remove all span formatting
6. **Character and word count**: Live counter using spans

## Steps

### Step 1: HTML Structure
Create toolbar, editor div (contenteditable), preview div, and stats footer.

### Step 2: Toolbar Buttons
Each button triggers a JavaScript function that wraps the selected text in a `<span>` with appropriate class.

### Step 3: Selection Handling
Use `window.getSelection()` and `range.surroundContents()` to wrap selected text.

### Step 4: Sync Editor to Preview
Copy content from editor to preview div, preserving span structure.

### Step 5: Live Stats
Use spans to display character count, word count, and estimated reading time.

## Starter Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rich Text Editor</title>
  <style>
    /* Add styles */
  </style>
</head>
<body>
  <div class="toolbar">
    <button onclick="format('bold')"><strong>B</strong></button>
    <button onclick="format('italic')"><em>I</em></button>
    <button onclick="format('underline')"><u>U</u></button>
  </div>
  <div id="editor" contenteditable="true">
    Start typing...
  </div>
  <div id="preview"></div>
  <p>Chars: <span id="char-count">0</span> | Words: <span id="word-count">0</span></p>
  <script>
    function format(type) {
      // Selection API logic
    }
  </script>
</body>
</html>
```

## Evaluation Criteria

- Toolbar buttons correctly wrap selected text with spans
- Editor properly displays formatted content
- Preview synchronizes with editor
- Character and word counts update in real-time
- Clear formatting removes all span wrappers
- Code is clean and well-organized
