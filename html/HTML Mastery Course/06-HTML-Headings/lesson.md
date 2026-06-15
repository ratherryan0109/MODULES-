# Module 6: HTML Headings

## Introduction
HTML headings define the hierarchy and structure of content on a web page. There are six levels of headings, from `<h1>` (most important) to `<h6>` (least important). Headings are not just for making text big or bold — they create a semantic outline that helps users, search engines, and assistive technologies understand the organization of your content.

## Learning Objectives
By the end of this module, you will be able to:
- Use all six heading levels correctly
- Create a proper heading hierarchy
- Understand the SEO and accessibility impact of headings
- Avoid common heading mistakes
- Style headings and understand their default browser styles

## Heading Levels

```html
<h1>Main Page Title</h1>
<h2>Section Heading</h2>
<h3>Sub-section Heading</h3>
<h4>Sub-sub-section Heading</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>
```

### Visual Hierarchy

```
<h1> Main Title (largest, most important)
  <h2> Section
    <h3> Sub-section
      <h4> Group
        <h5> Sub-group
          <h6> Detail (smallest)
```

### Default Browser Styles
| Element | Font Size | Weight | Margin |
|---------|-----------|--------|--------|
| `<h1>` | 2em (32px) | Bold | 0.67em top/bottom |
| `<h2>` | 1.5em (24px) | Bold | 0.83em top/bottom |
| `<h3>` | 1.17em (19px) | Bold | 1em top/bottom |
| `<h4>` | 1em (16px) | Bold | 1.33em top/bottom |
| `<h5>` | 0.83em (13px) | Bold | 1.67em top/bottom |
| `<h6>` | 0.67em (11px) | Bold | 2.33em top/bottom |

## Heading Hierarchy Rules

### Correct Hierarchy
```html
<h1>My Website</h1>
    <h2>About Me</h2>
        <h3>My Background</h3>
        <h3>My Skills</h3>
    <h2>My Projects</h2>
        <h3>Project 1</h3>
            <h4>Technologies Used</h4>
        <h3>Project 2</h3>
```

### Incorrect Hierarchy (Skip Levels)
```html
<h1>My Website</h1>
    <h4>Skipped h2 and h3</h4>   <!-- ❌ Bad -->
```

## SEO and Accessibility

### SEO Impact
- Search engines use headings to understand page structure
- `<h1>` carries the most SEO weight — should contain primary keywords
- Headings create the "outline" that appears in search results
- Well-structured headings improve organic search ranking

### Accessibility Impact
- Screen reader users navigate by headings
- The browser generates a document outline from headings
- Proper hierarchy allows quick jumping between sections
- WCAG 2.0 Guideline 1.3.1 requires headings to convey structure

## Common Mistakes

| Mistake | Incorrect | Correct |
|---------|-----------|---------|
| Multiple `<h1>` | `<h1>Title</h1><h1>Subtitle</h1>` | One `<h1>`, use `<h2>` for sections |
| Skipping levels | `<h1>Title</h1><h3>Section</h3>` | `<h1>Title</h1><h2>Section</h2>` |
| Using `<h1>` for logo | `<h1><img src="logo.png"></h1>` | Use `<div>` or `<span>` |
| Using headings for size only | `<h3>Small text I want big</h3>` | Use CSS font-size instead |
| Empty headings | `<h2></h2>` | Always include meaningful content |
| Too many `<h1>` tags | Multiple per page | Best practice: one `<h1>` per page |

## Best Practices
1. **One `<h1>` per page** — represents the main topic
2. **Don't skip levels** — go `<h1>`, `<h2>`, `<h3>` in order
3. **Use headings for structure, not size** — use CSS for font sizing
4. **Keep headings descriptive and concise**
5. **Include target keywords** — especially in `<h1>` and `<h2>`
6. **Nest headings logically** — like a book's table of contents
7. **Avoid empty headings**
8. **Test with a screen reader** — ensure navigation makes sense

## Summary Notes
- Six levels: `<h1>` (most important) to `<h6>` (least important)
- Headings create a document outline for SEO and accessibility
- One `<h1>` per page is the best practice
- Follow hierarchy without skipping levels
- Use CSS for styling, not inappropriate heading levels
- Screen readers use headings for navigation
