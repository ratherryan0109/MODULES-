# Mini Project: Structured Data for a Local Business Website

## Project Overview

You will create a complete local business landing page for "The Coffee Bean" - a specialty coffee shop. The page will include multiple types of structured data implemented using JSON-LD format. You'll validate the structured data using Google's Rich Results Test.

## Learning Objectives

- Implement JSON-LD structured data for multiple entity types
- Use LocalBusiness, Menu, and Review schemas
- Validate structured data using Google's testing tools
- Understand how different schemas interact on a single page

## Requirements

### Business Details
- **Name**: The Coffee Bean
- **Type**: CoffeeShop (subtype of LocalBusiness)
- **Address**: 789 Brew Street, Portland, OR 97201
- **Phone**: (503) 555-0147
- **Hours**: Mon-Fri 6:00 AM - 8:00 PM, Sat-Sun 7:00 AM - 9:00 PM
- **Rating**: 4.6 stars (312 reviews)
- **Price Range**: $ (affordable)

### Structured Data Requirements

1. **LocalBusiness (CoffeeShop)** schema with:
   - Name, address, phone, opening hours
   - Price range, aggregate rating
   - Geo coordinates
   - SameAs (social media URLs)

2. **Menu** schema with at least 3 menu items:
   - Item name, description, price
   - Dietary categories (vegetarian, gluten-free options)

3. **Review** schema for at least 2 customer reviews

4. **BreadcrumbList** schema

5. The page must be visually appealing (basic CSS)

## Steps

### Step 1: Create the HTML Structure
Create `index.html` with semantic HTML5 elements: header, navigation, main content sections, footer.

### Step 2: Implement Visual Design
Add CSS for a coffee shop theme with warm colors, proper typography, and responsive layout.

### Step 3: Add LocalBusiness Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "CoffeeShop",
  "name": "The Coffee Bean",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "789 Brew Street",
    "addressLocality": "Portland",
    "addressRegion": "OR",
    "postalCode": "97201"
  },
  "telephone": "(503) 555-0147",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "06:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday"],
      "opens": "07:00",
      "closes": "21:00"
    }
  ],
  "priceRange": "$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "reviewCount": "312"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "45.5152",
    "longitude": "-122.6784"
  },
  "sameAs": [
    "https://facebook.com/thecoffeebeanpdx",
    "https://instagram.com/thecoffeebeanpdx"
  ]
}
```

### Step 4: Add Menu Schema
Create a Menu with MenuItem entries including nutrition and pricing.

### Step 5: Add Review Schema
Include UserReview objects with author, rating, and review body.

### Step 6: Add BreadcrumbList
Home > Coffee Shops > The Coffee Bean

### Step 7: Validate
Test with Google Rich Results Test and fix any errors.

## Complete Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Coffee Bean - Portland's Finest Coffee Shop</title>
  <meta name="description" content="The Coffee Bean in Portland, OR serves artisan coffee, espresso drinks, and fresh pastries. Visit us for the best coffee experience in town.">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Georgia', serif; line-height: 1.6; color: #3e2723; background: #faf3e0; }
    header { background: #4e342e; color: #ffcc80; padding: 1rem 0; text-align: center; }
    header h1 { font-size: 2.5rem; }
    nav { background: #5d4037; padding: 0.8rem; text-align: center; }
    nav a { color: #ffcc80; text-decoration: none; margin: 0 1rem; font-weight: bold; }
    nav a:hover { color: #fff; }
    .container { max-width: 1100px; margin: 0 auto; padding: 20px; }
    .hero { background: linear-gradient(rgba(78,52,46,0.8), rgba(78,52,46,0.8)), url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600'); background-size: cover; color: #fff; text-align: center; padding: 80px 20px; border-radius: 8px; margin: 20px 0; }
    .hero h2 { font-size: 2.2rem; margin-bottom: 1rem; }
    .hero p { font-size: 1.2rem; max-width: 600px; margin: 0 auto; }
    section { margin: 40px 0; }
    h2 { color: #4e342e; border-bottom: 3px solid #a1887f; padding-bottom: 10px; margin-bottom: 20px; }
    .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
    .info-card { background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .info-card h3 { color: #5d4037; margin-bottom: 10px; }
    .menu-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
    .menu-item { background: #fff; border-radius: 8px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); border-left: 4px solid #a1887f; }
    .menu-item h3 { color: #4e342e; margin-bottom: 5px; }
    .menu-item .price { color: #6d4c41; font-weight: bold; font-size: 1.1rem; }
    .menu-item .desc { color: #666; font-size: 0.9rem; margin: 5px 0; }
    .menu-item .tags { margin-top: 8px; }
    .menu-item .tag { display: inline-block; background: #efebe9; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; margin-right: 5px; }
    .review-card { background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 15px; }
    .review-card .stars { color: #f57f17; font-size: 1.2rem; }
    .review-card .author { font-weight: bold; color: #4e342e; }
    footer { background: #3e2723; color: #d7ccc8; text-align: center; padding: 20px; margin-top: 40px; }
    .breadcrumb { padding: 10px 0; color: #666; font-size: 0.9rem; }
    .breadcrumb a { color: #5d4037; text-decoration: none; }
    .breadcrumb a:hover { text-decoration: underline; }
    @media (max-width: 600px) { header h1 { font-size: 1.8rem; } .hero { padding: 40px 20px; } }
  </style>
</head>
<body>

<header>
  <div class="container">
    <h1>The Coffee Bean</h1>
    <p>Portland's Finest Coffee Since 2010</p>
  </div>
</header>

<nav>
  <a href="#about">About</a>
  <a href="#menu">Menu</a>
  <a href="#reviews">Reviews</a>
  <a href="#contact">Contact</a>
</nav>

<div class="container">
  <div class="breadcrumb">
    <a href="#">Home</a> &raquo; <a href="#">Coffee Shops</a> &raquo; The Coffee Bean
  </div>

  <div class="hero">
    <h2>Artisan Coffee, Crafted with Love</h2>
    <p>Experience the finest hand-roasted coffee in Portland. From espresso to pour-over, every cup tells a story.</p>
  </div>

  <section id="about">
    <h2>About Us</h2>
    <div class="info-grid">
      <div class="info-card">
        <h3>📍 Location</h3>
        <p>789 Brew Street<br>Portland, OR 97201</p>
      </div>
      <div class="info-card">
        <h3>🕐 Hours</h3>
        <p>Mon-Fri: 6:00 AM - 8:00 PM<br>Sat-Sun: 7:00 AM - 9:00 PM</p>
      </div>
      <div class="info-card">
        <h3>📞 Contact</h3>
        <p>(503) 555-0147<br>hello@thecoffeebeanpdx.com</p>
      </div>
      <div class="info-card">
        <h3>⭐ Rating</h3>
        <p>★★★★★ 4.6 (312 reviews)</p>
      </div>
    </div>
  </section>

  <section id="menu">
    <h2>Our Menu</h2>
    <div class="menu-grid">
      <div class="menu-item">
        <h3>Artisan Latte</h3>
        <p class="price">$4.50</p>
        <p class="desc">Double espresso with steamed oat milk and a hint of vanilla.</p>
        <div class="tags">
          <span class="tag">Vegetarian</span>
          <span class="tag">Popular</span>
        </div>
      </div>
      <div class="menu-item">
        <h3>Cold Brew</h3>
        <p class="price">$3.75</p>
        <p class="desc">24-hour steeped cold brew served over ice with optional cream.</p>
        <div class="tags">
          <span class="tag">Vegan</span>
          <span class="tag">Gluten-Free</span>
        </div>
      </div>
      <div class="menu-item">
        <h3>Blueberry Muffin</h3>
        <p class="price">$3.25</p>
        <p class="desc">Fresh-baked blueberry muffin with streusel topping.</p>
        <div class="tags">
          <span class="tag">Vegetarian</span>
        </div>
      </div>
      <div class="menu-item">
        <h3>Avocado Toast</h3>
        <p class="price">$8.50</p>
        <p class="desc">Sourdough bread with smashed avocado, cherry tomatoes, and red pepper flakes.</p>
        <div class="tags">
          <span class="tag">Vegan</span>
          <span class="tag">Healthy</span>
        </div>
      </div>
    </div>
  </section>

  <section id="reviews">
    <h2>What Our Customers Say</h2>
    <div class="review-card">
      <p class="stars">★★★★★</p>
      <p>"Best cold brew in Portland! The atmosphere is cozy and the staff is incredibly friendly."</p>
      <p class="author">- Sarah M.</p>
    </div>
    <div class="review-card">
      <p class="stars">★★★★★</p>
      <p>"Their avocado toast is amazing. A perfect spot for remote work with great coffee."</p>
      <p class="author">- James K.</p>
    </div>
  </section>

  <section id="contact">
    <h2>Find Us</h2>
    <div class="info-grid">
      <div class="info-card">
        <h3>Follow Us</h3>
        <p>📘 Facebook: @thecoffeebeanpdx<br>📸 Instagram: @thecoffeebeanpdx</p>
      </div>
    </div>
  </section>
</div>

<footer>
  <p>&copy; 2026 The Coffee Bean. All rights reserved.</p>
</footer>

<!-- Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://example.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Coffee Shops",
      "item": "https://example.com/coffee-shops"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "The Coffee Bean",
      "item": "https://example.com/the-coffee-bean"
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CoffeeShop",
  "name": "The Coffee Bean",
  "description": "Artisan coffee shop in Portland, OR serving hand-roasted coffee, espresso drinks, and fresh pastries.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "789 Brew Street",
    "addressLocality": "Portland",
    "addressRegion": "OR",
    "postalCode": "97201"
  },
  "telephone": "(503) 555-0147",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "06:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday"],
      "opens": "07:00",
      "closes": "21:00"
    }
  ],
  "priceRange": "$",
  "servesCuisine": "Coffee",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "reviewCount": "312"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "45.5152",
    "longitude": "-122.6784"
  },
  "sameAs": [
    "https://facebook.com/thecoffeebeanpdx",
    "https://instagram.com/thecoffeebeanpdx"
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": "The Coffee Bean Menu",
  "description": "Our selection of coffees and pastries",
  "hasMenuItem": [
    {
      "@type": "MenuItem",
      "name": "Artisan Latte",
      "description": "Double espresso with steamed oat milk and vanilla",
      "offers": {
        "@type": "Offer",
        "price": "4.50",
        "priceCurrency": "USD"
      },
      "suitableForDiet": "https://schema.org/VegetarianDiet"
    },
    {
      "@type": "MenuItem",
      "name": "Cold Brew",
      "description": "24-hour steeped cold brew served over ice",
      "offers": {
        "@type": "Offer",
        "price": "3.75",
        "priceCurrency": "USD"
      },
      "suitableForDiet": ["https://schema.org/VeganDiet", "https://schema.org/GlutenFreeDiet"]
    },
    {
      "@type": "MenuItem",
      "name": "Blueberry Muffin",
      "description": "Fresh-baked blueberry muffin with streusel topping",
      "offers": {
        "@type": "Offer",
        "price": "3.25",
        "priceCurrency": "USD"
      },
      "suitableForDiet": "https://schema.org/VegetarianDiet"
    },
    {
      "@type": "MenuItem",
      "name": "Avocado Toast",
      "description": "Sourdough bread with smashed avocado, cherry tomatoes, and red pepper flakes",
      "offers": {
        "@type": "Offer",
        "price": "8.50",
        "priceCurrency": "USD"
      },
      "suitableForDiet": "https://schema.org/VeganDiet"
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "CoffeeShop",
    "name": "The Coffee Bean"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Sarah M."
  },
  "reviewBody": "Best cold brew in Portland! The atmosphere is cozy and the staff is incredibly friendly."
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "CoffeeShop",
    "name": "The Coffee Bean"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "author": {
    "@type": "Person",
    "name": "James K."
  },
  "reviewBody": "Their avocado toast is amazing. A perfect spot for remote work with great coffee."
}
</script>

</body>
</html>
```

## Validation Checklist

- [ ] All JSON-LD blocks parse without syntax errors
- [ ] Google Rich Results Test shows no errors
- [ ] All required properties are present
- [ ] URLs are absolute (not relative)
- [ ] Structured data matches visible page content
- [ ] BreadcrumbList shows proper hierarchy
- [ ] AggregateRating has correct values
- [ ] Opening hours use proper format (HH:MM)
- [ ] Geo coordinates are accurate
- [ ] SameAs links are valid social media URLs

## Submission

Submit your `index.html` file and a screenshot of the Google Rich Results Test showing zero errors.
