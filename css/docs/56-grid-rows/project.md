# Mini Project: Full-Page Portfolio Layout

## Objective
Build a complete portfolio page layout using CSS Grid rows for vertical structure. The page must include a fixed top banner, a flexible work section with multiple rows, a testimonial section, and a footer.

## Context
You are designing a portfolio website for a designer. The page needs distinct vertical sections that flow from one to the next while maintaining consistent grid alignment.

## Design Specifications

### Desktop Layout
```
┌─────────────────────────────────────┐
│            Hero Banner               │ ← auto (content-sized)
│    Name, tagline, CTA button         │
├─────────────────────────────────────┤
│   ┌───────┐ ┌───────┐ ┌───────┐    │
│   │ Work 1 │ │ Work 2 │ │ Work 3 │    │ ← minmax(200px, 1fr)
│   └───────┘ └───────┘ └───────┘    │
├─────────────────────────────────────┤
│   ┌───────┐ ┌───────┐ ┌───────┐    │
│   │ Work 4 │ │ Work 5 │ │ Work 6 │    │ ← minmax(200px, 1fr)
│   └───────┘ └───────┘ └───────┘    │
├─────────────────────────────────────┤
│      Testimonial (spans full width)  │ ← auto (content-sized)
├─────────────────────────────────────┤
│            Footer                    │ ← auto (content-sized)
│     Contact, social, copyright       │
└─────────────────────────────────────┘
```

## Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Layout</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: 'Inter', -apple-system, sans-serif;
            color: #333;
            background: #fafafa;
        }

        .portfolio {
            display: grid;
            max-width: 1200px;
            margin: 0 auto;
            /* TODO: Define row structure */
            /* Hint: auto for sized sections, fr for flexible ones */
        }

        .hero {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 80px 40px;
            text-align: center;
        }

        .hero h1 { font-size: 3em; margin-bottom: 10px; }
        .hero p { font-size: 1.2em; opacity: 0.9; }

        .work-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            padding: 40px;
            background: #fff;
        }

        .work-item {
            background: #f0f0f0;
            padding: 40px;
            border-radius: 12px;
            text-align: center;
            min-height: 180px;
            transition: transform 0.2s;
        }

        .work-item:hover { transform: translateY(-4px); }
        .work-item h3 { margin-bottom: 8px; color: #667eea; }

        .testimonial {
            background: #2d3436;
            color: white;
            padding: 60px 40px;
            text-align: center;
            font-style: italic;
            font-size: 1.4em;
            /* TODO: Make this span all columns */
        }

        .footer {
            background: #1a1a2e;
            color: #ccc;
            padding: 30px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="portfolio">
        <div class="hero">
            <h1>Jane Designer</h1>
            <p>Creating beautiful digital experiences through thoughtful design.</p>
            <button style="margin-top:20px;padding:12px 30px;border:none;border-radius:6px;background:#fff;color:#667eea;font-weight:bold;cursor:pointer;">View My Work</button>
        </div>

        <div class="work-grid">
            <div class="work-item"><h3>Project Alpha</h3><p>Brand design</p></div>
            <div class="work-item"><h3>Project Beta</h3><p>Web application</p></div>
            <div class="work-item"><h3>Project Gamma</h3><p>Mobile app</p></div>
            <div class="work-item"><h3>Project Delta</h3><p>Dashboard</p></div>
            <div class="work-item"><h3>Project Epsilon</h3><p>E-commerce</p></div>
            <div class="work-item"><h3>Project Zeta</h3><p>Landing page</p></div>
        </div>

        <div class="testimonial">
            "Jane delivered beyond expectations. Our users love the new interface."
        </div>

        <div class="footer">
            <p>© 2025 Jane Designer. All rights reserved.</p>
            <p style="margin-top:8px;color:#888;">hello@janedesigner.com</p>
        </div>
    </div>
</body>
</html>
```

## Requirements

1. **Row structure**: Define rows using `grid-template-rows` with `auto` for content-sized sections and `minmax()` for the work grid area
2. **Work grid**: Should be in a `minmax(200px, 1fr)` row that can grow with content
3. **Three-column grid**: Inside work-grid, use `grid-template-columns: repeat(3, 1fr)`
4. **Testimonial full-width**: Make the testimonial span across the entire page width
5. **No explicit height**: The page should grow naturally with content using `auto` rows
6. **Work items layout**: Add a responsive breakpoint at 768px where work items become 2 columns, and at 480px where they become 1 column

## Bonus Challenges

- Add a sticky navigation bar as the first row
- Use `grid-auto-rows` to allow future work items to be added without layout breaking
- Add gap between the major sections (hero, work, testimonial, footer)
- Use CSS Grid areas in the work items for image, title, description layout inside each card
- Add a background pattern or gradient to the hero section

## Evaluation Criteria

| Criteria | Points |
|----------|--------|
| Correct row structure with auto/fr/minmax | 25 |
| Work grid uses three-column layout | 15 |
| Testimonial spans full width | 15 |
| Responsive breakpoints (2 col at 768px, 1 col at 480px) | 20 |
| No hardcoded heights — content determines sizing | 10 |
| Clean, organized CSS with comments | 10 |
| Visual polish and spacing | 5 |

## Expected Output Description

The completed portfolio should be a vertically scrolling page where:
- The hero banner spans full width with gradient background
- 6 work items display in a 3-column grid below the hero
- Each work item has a hover lift effect
- The testimonial spans the full width with a dark background
- The footer sits at the bottom with contact info
- On smaller screens, the work grid adjusts to fewer columns
- The page gracefully handles any amount of content without breaking
