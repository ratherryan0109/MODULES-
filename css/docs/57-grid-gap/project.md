# Mini Project: Content Platform Dashboard

## Objective
Build a content platform dashboard (e.g., blog admin panel) that demonstrates mastery of the `gap` property. The dashboard must use gap for internal spacing, padding for breathing room, and responsive gap changes across breakpoints.

## Context
You are building the admin dashboard for a content publishing platform. The dashboard shows stats, recent posts, a publishing queue, and analytics. The spacing between dashboard widgets must feel intentional and proportional.

## Design Specifications

### Desktop Layout (1200px+)
```
┌───────────────────┬───────────────────┬───────────────────┐
│                   │                   │                   │
│   Total Views     │  Published Posts  │   Pending Queue   │
│   (stats card)    │   (stats card)    │   (stats card)    │
│                   │                   │                   │
├───────────────────┴───────────────────┼───────────────────┤
│                                       │                   │
│     Recent Posts (full-width list)    │   Quick Actions   │
│                                       │                   │
├───────────────────┬───────────────────┴───────────────────┤
│                   │                                       │
│  Traffic Chart    │        Analytics Breakdown              │
│                   │                                       │
└───────────────────┴───────────────────────────────────────┘
```

## Requirements

1. **Gap strategy**: Use `gap: 12px` on mobile, `gap: 20px` on tablet (≥768px), and `gap: 28px` on desktop (≥1200px)
2. **Container padding**: Add matching `padding` values that increase with viewport (16px → 24px → 32px)
3. **Grid structure**: 3-column grid for stats row, 2-column for the middle section (main + sidebar), 2-column for the bottom row
4. **Stats cards**: 3 equal-width cards across the top using `grid-template-columns: repeat(3, 1fr)`
5. **Main content**: Recent posts list spanning 2 columns, quick actions sidebar in column 3
6. **Bottom section**: Chart (1fr) + Analytics (1fr)
7. **Responsive**: At 768px, switch to 2 columns for stats, stack middle section, keep bottom 2 columns. At 480px, single column everything.

## Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: 'Inter', -apple-system, sans-serif;
            background: #0f0f23;
            color: #eee;
            padding: 16px;
        }

        .dashboard {
            display: grid;
            max-width: 1400px;
            margin: 0 auto;
            gap: 12px; /* Mobile default */
            /* TODO: Add responsive gap and padding via media queries */
        }

        /* === Stats Row: 3 cards === */
        .stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            /* TODO: Add appropriate gap for this row */
        }

        .stat-card {
            background: #1a1a3e;
            padding: 24px;
            border-radius: 10px;
        }

        .stat-card h3 { font-size: 14px; color: #888; margin-bottom: 8px; }
        .stat-card .number { font-size: 32px; font-weight: bold; color: #4ecdc4; }

        /* === Middle Section === */
        .middle {
            display: grid;
            /* TODO: Define 2-column layout with quick actions sidebar */
            gap: inherit; /* Match parent gap */
        }

        .recent-posts {
            background: #1a1a3e;
            padding: 24px;
            border-radius: 10px;
        }

        .post-item {
            padding: 12px 0;
            border-bottom: 1px solid #333;
            display: flex;
            justify-content: space-between;
        }

        .quick-actions {
            background: #1a1a3e;
            padding: 24px;
            border-radius: 10px;
        }

        .action-btn {
            display: block;
            width: 100%;
            padding: 12px;
            margin-bottom: 8px;
            background: #6c5ce7;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            text-align: center;
        }

        /* === Bottom Section === */
        .bottom {
            display: grid;
            /* TODO: Define 2 equal columns */
            gap: inherit;
        }

        .chart, .analytics {
            background: #1a1a3e;
            padding: 24px;
            border-radius: 10px;
            min-height: 200px;
        }

        /* === Responsive Media Queries === */
        /* TODO: Add responsive breakpoints */

        /* === Responsive Helpers === */
        @media (max-width: 768px) {
            .stats { grid-template-columns: repeat(2, 1fr); }
            .middle { grid-template-columns: 1fr; }
        }

        @media (max-width: 480px) {
            .stats { grid-template-columns: 1fr; }
            .bottom { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <div class="dashboard">
        <div class="stats">
            <div class="stat-card"><h3>Total Views</h3><div class="number">128.4K</div></div>
            <div class="stat-card"><h3>Published</h3><div class="number">342</div></div>
            <div class="stat-card"><h3>Pending</h3><div class="number">12</div></div>
        </div>

        <div class="middle">
            <div class="recent-posts">
                <h2>Recent Posts</h2>
                <div class="post-item"><span>Getting Started with CSS Grid</span><span>2 hrs ago</span></div>
                <div class="post-item"><span>Understanding Gap Property</span><span>5 hrs ago</span></div>
                <div class="post-item"><span>Advanced Flexbox Techniques</span><span>1 day ago</span></div>
                <div class="post-item"><span>Responsive Design Best Practices</span><span>2 days ago</span></div>
            </div>
            <div class="quick-actions">
                <h2>Quick Actions</h2>
                <button class="action-btn">New Post</button>
                <button class="action-btn">Edit Pages</button>
                <button class="action-btn">Manage Users</button>
                <button class="action-btn">View Analytics</button>
            </div>
        </div>

        <div class="bottom">
            <div class="chart"><h2>Traffic</h2><p style="color:#888;margin-top:40px;">[Chart placeholder]</p></div>
            <div class="analytics"><h2>Analytics</h2><p style="color:#888;margin-top:40px;">[Analytics breakdown]</p></div>
        </div>
    </div>
</body>
</html>
```

## Tasks

1. Set `gap` on `.dashboard` to 12px (mobile), 20px (tablet ≥768px), and 28px (desktop ≥1200px)
2. Add `padding` on `body` or `.dashboard` that also scales: 16px mobile, 24px tablet, 32px desktop
3. Use `gap: inherit;` on `.middle` and `.bottom` sub-grids to match the parent
4. Set `.middle` grid-template-columns to `2fr 1fr` (main:sidebar ratio)
5. Add minimal styling for stats numbers and post items
6. Ensure the dashboard adapts gracefully from 1 column (phone) to complex multi-section (desktop)

## Bonus Challenges

- Use CSS custom properties to define a spacing scale: `--gap-sm: 12px`, `--gap-md: 20px`, `--gap-lg: 28px`
- Add hover effects on stat cards and action buttons
- Use `grid-auto-flow: dense` to fill any odd-shaped gaps
- Add a transition on the gap when resizing
- Animate stat numbers on page load

## Evaluation Criteria

| Criteria | Points |
|----------|--------|
| Three-tier responsive gap strategy | 20 |
| Container padding scales with viewport | 15 |
| Stats row has 3 equal columns | 10 |
| Middle section uses 2fr/1fr split | 10 |
| Bottom section has 2 equal columns | 10 |
| Sub-grids inherit parent gap | 10 |
| Responsive behavior at all breakpoints | 15 |
| Clean, organized CSS with comments | 10 |

## Expected Output Description

The finished dashboard should feel professionally spaced at every screen size:
- On desktop: generous 28px gap with 32px padding gives clear separation between sections
- On tablet: 20px gap balances density with readability on smaller screens
- On mobile: 12px gap keeps related elements connected while not feeling cramped
- All sub-sections maintain consistent spacing with the parent dashboard gap
- Stats cards, posts list, and action buttons have clear visual hierarchy through spacing
