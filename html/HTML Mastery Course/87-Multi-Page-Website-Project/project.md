# Mini Project: Build a 5-Page Business Website

## Objective
Create a complete multi-page business website with 5 interconnected HTML pages, consistent navigation, and responsive design.

## Requirements

Build 5 pages:

1. **index.html** (Home)
   - Hero banner with headline, subtext, and CTA button
   - 3-column feature highlight section
   - Testimonial quote
   - Newsletter signup section

2. **about.html** (About Us)
   - Company history with timeline
   - Team section (4+ members with photos and roles)
   - Mission and vision statement
   - Company stats (years, clients, projects)

3. **services.html** (Services)
   - 4+ service cards with icons, descriptions, and learn more links
   - Pricing table with 3 tiers
   - FAQ accordion using `<details>` and `<summary>`

4. **blog.html** (Blog)
   - 3+ blog article previews with images, dates, excerpts, and "Read More" links
   - Sidebar with categories and recent posts
   - Pagination at bottom

5. **contact.html** (Contact)
   - Contact form with validation
   - Google Maps iframe placeholder
   - Office address, phone, email
   - Social media links

## Shared Components (all pages)

- **Header**: Logo, navigation with active state, sticky positioning
- **Footer**: 3-column link grid (Quick Links, Services, Legal), copyright
- **Breadcrumb** (except Home): "Home > Page Name"

## CSS Requirements
- Single external `style.css` file
- CSS custom properties for colors
- Responsive breakpoints at 480px, 768px, 1024px
- Mobile hamburger menu using checkbox hack

## Bonus Challenges
- Create a 404.html custom error page
- Add a "Back to Top" link on each page
- Implement structured data (Organization schema)
- Create a sitemap.html listing all pages
- Add a print stylesheet

## Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Professional business services">
    <title>BusinessCo - Home</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="sticky-header">
        <a href="index.html" class="logo">BusinessCo</a>
        <input type="checkbox" id="nav-toggle" class="nav-toggle">
        <label for="nav-toggle" class="nav-toggle-label">&#9776;</label>
        <nav>
            <ul>
                <li><a href="index.html" class="active">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <!-- Page content -->
    </main>
    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>
```

## Submission
Validate all pages with W3C validator. Test all internal links. Verify responsive design on mobile/tablet/desktop. Test keyboard navigation.
