# Mini Project: Magazine Homepage Layout

## Objective
Build a magazine-style homepage layout using CSS Grid columns with mixed sizing, spanning items, and responsive behavior.

## Context
You are designing the homepage for an online magazine. The layout needs a featured article section, a grid of regular articles, and a sidebar. The layout must adapt from mobile (single column) to tablet (2-3 columns) to desktop (multi-column with sidebar).

## Design Specifications

### Desktop Layout (1200px+)
```
┌───────────────────────┬──────────┐
│                       │          │
│   Featured Article    │  Sidebar │
│   (spans 2 columns)   │  300px   │
│                       │          │
├────────┬──────────────┤          │
│ Article │   Article    │          │
│    2    │      3       │          │
├────────┴──────────────┤          │
│    Featured Quote      │          │
│    (spans 2 columns)   │          │
├────────┬──────────────┤          │
│ Article │   Article    │          │
│    4    │      5       │          │
└────────┴──────────────┴──────────┘
```

### Tablet Layout (768px–1199px)
```
┌────────────────────────────┐
│      Featured Article       │
│      (2-column span)        │
├───────────┬────────────────┤
│  Article  │    Article     │
│    2      │      3         │
├───────────┴────────────────┤
│      Featured Quote         │
├───────────┬────────────────┤
│  Article  │    Article     │
│    4      │      5         │
└───────────┴────────────────┘
```

### Mobile Layout (<768px)
```
┌────────────────────────────┐
│      Featured Article       │
├────────────────────────────┤
│         Article 2           │
├────────────────────────────┤
│         Article 3           │
├────────────────────────────┤
│       Featured Quote        │
├────────────────────────────┤
│         Article 4           │
├────────────────────────────┤
│         Article 5           │
└────────────────────────────┘
```

## Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Magazine Homepage</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Georgia', serif;
            background: #f5f5f5;
            color: #333;
            padding: 20px;
        }

        .magazine {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            /* TODO: Define your column layout */
            gap: 20px;
        }

        .featured {
            /* TODO: Make this span appropriately */
            background: #2c3e50;
            color: white;
            padding: 30px;
            border-radius: 8px;
            min-height: 200px;
        }

        .sidebar {
            background: #ecf0f1;
            padding: 20px;
            border-radius: 8px;
        }

        .quote {
            background: #e74c3c;
            color: white;
            padding: 20px;
            border-radius: 8px;
            font-style: italic;
            font-size: 1.2em;
        }

        .article {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            min-height: 120px;
        }

        .article h3 {
            color: #2c3e50;
            margin-bottom: 8px;
        }

        /* TODO: Add responsive breakpoints for tablet and mobile */
    </style>
</head>
<body>
    <div class="magazine">
        <div class="featured">
            <h2>Featured: The Future of Web Design</h2>
            <p>CSS Grid has transformed how we build layouts...</p>
        </div>
        <div class="article"><h3>Article 2</h3><p>Understanding the fr unit.</p></div>
        <div class="article"><h3>Article 3</h3><p>Responsive patterns without media queries.</p></div>
        <div class="quote">"Design is not just what it looks like — design is how it works." — Steve Jobs</div>
        <div class="article"><h3>Article 4</h3><p>Advanced column spanning techniques.</p></div>
        <div class="article"><h3>Article 5</h3><p>Combining Grid and Flexbox effectively.</p></div>
        <div class="sidebar">
            <h3>Sidebar</h3>
            <p>Popular topics this week...</p>
        </div>
    </div>
</body>
</html>
```

## Requirements

1. **Desktop layout** (1200px+): Use `grid-template-columns` with the sidebar as a fixed 300px column and the main area divided into 2 flexible columns (e.g., `1fr 1fr 300px`)
2. **Featured article**: Spans both main columns on desktop and tablet
3. **Quote**: Spans both main columns on desktop and tablet
4. **Responsive breakpoints**:
   - At 1199px and below: Hide the sidebar (or move it below)
   - At 767px and below: Single column layout (all items stack)
   - Use media queries to change `grid-template-columns`
5. **Grid column spanning**: Use `grid-column: span 2` or `grid-column: 1 / -1` for full-width items where appropriate

## Bonus Challenges

- Add `grid-auto-flow: dense` for optimal packing
- Use named grid lines for the column definitions
- Add hover effects on articles using CSS transitions
- Include a sticky sidebar that scrolls with the page
- Use `minmax()` in the column definition for responsive column min-width

## Evaluation Criteria

| Criteria | Points |
|----------|--------|
| Correct column definition with mixed units (fr + fixed) | 15 |
| Featured article spans correctly | 15 |
| Quote spans correctly | 10 |
| Responsive breakpoints with correct column redefinition | 25 |
| Sidebar hidden/repositioned on tablet | 10 |
| Single column layout on mobile | 10 |
| Clean CSS with comments and organized properties | 10 |
| Bonus features (each) | 5 |

## Expected Output Description

The completed page should display a magazine-style layout where:
- On desktop: Sidebar sits to the right with featured content spanning main columns
- On tablet: Content fills full width with sidebar stacked at the bottom or hidden
- On mobile: All content stacks in a single column
- The layout gracefully adjusts between breakpoints without overlapping or awkward gaps
- Items visually align with consistent spacing throughout
