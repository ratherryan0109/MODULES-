# Mini Project: Centered Hero Section with Feature Cards

## Objective
Build a landing page hero section that demonstrates mastery of grid alignment. The hero must have centered content, a grid of feature cards with mixed alignment, and a call-to-action that uses alignment overrides.

## Context
This project tests your understanding of both item-level and content-level alignment in CSS Grid. You'll create a hero section that is perfectly centered in the viewport, with feature cards below that use different alignment strategies.

## Design Specifications

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│                    Hero Section                          │
│              (place-content: center)                     │
│                                                          │
│                      Logo                               │
│              Headline (centered)                        │
│           Subtitle (centered text)                     │
│              [CTA] [Learn More]                        │
│                                                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐        │
│  │ Feature 1  │  │ Feature 2  │  │ Feature 3  │        │
│  │ (left)     │  │ (center)   │  │ (right)   │        │
│  └────────────┘  └────────────┘  └────────────┘        │
│                                                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  Testimonial (full-width, place-self: center)           │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Requirements

1. The hero section should fill the viewport with `place-content: center` — the entire section content is centered
2. The logo and heading text should be centered using `text-align` or grid alignment
3. Feature cards should be in a 3-column grid using `justify-items` with different per-card overrides (item 1: start, item 2: center, item 3: end)
4. The bottom testimonial should span full width and have its content centered with `place-self: center`
5. Use `gap: 24px` between sections
6. The page should have no scrollbars initially — hero fills viewport, features stack below

## Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hero Alignment</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; }

        .page {
            display: grid;
            /* Full page grid */
            min-height: 100vh;
        }

        .hero {
            display: grid;
            height: 100vh;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            /* Center all content within hero */
        }

        .hero-content {
            text-align: center;
        }

        .hero h1 { font-size: 3em; margin-bottom: 12px; }
        .hero p { font-size: 1.2em; opacity: 0.9; margin-bottom: 24px; max-width: 600px; }
        .buttons { display: flex; gap: 12px; justify-content: center; }
        .btn { padding: 12px 32px; border-radius: 6px; text-decoration: none; font-weight: bold; }
        .btn-primary { background: #fff; color: #667eea; }
        .btn-secondary { background: transparent; border: 2px solid white; color: white; }

        .features-section {
            padding: 60px 20px;
            max-width: 1000px;
            margin: 0 auto;
        }

        .features {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            /* Default alignment for all cards */
        }

        .feature-card {
            background: #f8f9fa;
            padding: 30px;
            border-radius: 12px;
            max-width: 280px;
        }

        .feature-card.left { /* justify-self: start */ }
        .feature-card.center { /* justify-self: center */ }
        .feature-card.right { /* justify-self: end */ }
        .feature-card h3 { color: #667eea; margin-bottom: 8px; }

        .testimonial-section {
            background: #2d3436;
            color: white;
            padding: 60px 20px;
        }

        .testimonial {
            max-width: 600px;
            margin: 0 auto;
            text-align: center;
            font-style: italic;
            font-size: 1.3em;
            /* Use place-self to center this content */
        }
    </style>
</head>
<body>
    <div class="page">
        <section class="hero">
            <div class="hero-content">
                <h1>Build Amazing Products</h1>
                <p>Modern tools for modern teams. Ship faster with our platform.</p>
                <div class="buttons">
                    <a href="#" class="btn btn-primary">Get Started</a>
                    <a href="#" class="btn btn-secondary">Learn More</a>
                </div>
            </div>
        </section>

        <section class="features-section">
            <div class="features">
                <div class="feature-card left">
                    <h3>🚀 Fast</h3>
                    <p>Lightning performance that scales with your business.</p>
                </div>
                <div class="feature-card center">
                    <h3>🔒 Secure</h3>
                    <p>Enterprise-grade security with end-to-end encryption.</p>
                </div>
                <div class="feature-card right">
                    <h3>📊 Analytics</h3>
                    <p>Real-time insights to make data-driven decisions.</p>
                </div>
            </div>
        </section>

        <section class="testimonial-section">
            <div class="testimonial">
                "This platform transformed how our team collaborates."
            </div>
        </section>
    </div>
</body>
</html>
```

## Tasks

1. Make `.hero` use `place-content: center` to center content in the viewport
2. Constrain `.hero-content` with `max-width` and center the buttons with `justify-content: center`
3. Set `.features` to align items to `start` (left) by default
4. Override each card: `.left` stays start, `.center` uses `justify-self: center`, `.right` uses `justify-self: end`
5. Make `.testimonial` use `place-self: center` to center in its section
6. Ensure no horizontal scroll and hero fills viewport initially

## Bonus Challenges

- Add `align-items: center` to features to vertically center cards of different heights
- Use `space-evenly` for the buttons to distribute them evenly
- Add responsive breakpoint where features go to 1 column and all cards center
- Add a sticky footer at the bottom using `align-self: end` on the testimonial section

## Evaluation Criteria

| Criteria | Points |
|----------|--------|
| Hero uses place-content: center | 20 |
| Feature cards have different justify-self overrides | 25 |
| Testimonial uses place-self: center | 15 |
| No horizontal scroll / clean layout | 10 |
| Responsive behavior | 15 |
| Code quality and comments | 15 |
