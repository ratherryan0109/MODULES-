# Mini Project: Build a Full E-Commerce Store Frontend

## Objective
Create a complete e-commerce store frontend with 6 HTML pages, product catalog, shopping cart, and checkout flow.

## Requirements

Build 6 pages:

1. **index.html** (Home)
   - Hero banner with seasonal promotion
   - Featured products grid (4-6 products)
   - Category showcase (3 categories with images)
   - Newsletter signup

2. **category.html** (Product Listing)
   - Sidebar with filters: categories (checkboxes), price range (range input), ratings
   - Product grid with 9+ products (3x3)
   - Sort by dropdown (price, name, rating)
   - Pagination

3. **product.html** (Product Detail)
   - Large product image with thumbnail gallery
   - Product title, price (with sale badge if applicable), rating
   - Size/color selector (radio buttons styled as swatches)
   - Quantity selector and Add to Cart button
   - Product description, features list, specifications table
   - Customer reviews section (3+ reviews)
   - Related products section

4. **cart.html** (Shopping Cart)
   - Table with: product image, name, price, quantity (number input), subtotal, remove button
   - Coupon code input and Apply button
   - Order summary: subtotal, shipping, tax, total
   - "Proceed to Checkout" button
   - "Continue Shopping" link

5. **checkout.html** (Checkout)
   - Step indicator (1-3)
   - Shipping information form (with autocomplete)
   - Payment information form (card number, expiry, CVV)
   - Billing address (with "Same as shipping" checkbox toggle)
   - Order summary (readonly)
   - Place Order button

6. **confirmation.html** (Order Confirmation)
   - Success indicator (checkmark)
   - Order number
   - Order summary (items, totals)
   - Shipping address
   - Estimated delivery date
   - "Continue Shopping" button

## Shared Components
- Header with logo, search bar, cart count badge, account link
- Footer with 4-column grid (Shop, Customer Service, About, Follow Us)
- Breadcrumb navigation on all pages

## CSS Requirements
- Single style.css
- CSS Grid for product layouts
- Flexbox for navigation
- Custom checkbox/radio styling
- Responsive breakpoints

## Bonus Challenges
- Add Schema.org Product structured data
- Implement a wishlist toggle on product cards
- Create a product quick-view modal
- Add image zoom on product detail
- Include a shipping cost calculator

## Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Shop the best products online">
    <title>ShopName - Home</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <a href="index.html" class="logo">ShopName</a>
        <form action="search.html" method="GET"><input type="search" placeholder="Search..." name="q"></form>
        <nav>
            <ul>
                <li><a href="cart.html">Cart (0)</a></li>
                <li><a href="account.html">Account</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <!-- Page content -->
    </main>
    <footer>
        <div class="footer-grid">
            <div class="col"><h4>Shop</h4><ul><li><a href="category.html?cat=all">All Products</a></li></ul></div>
            <div class="col"><h4>Help</h4><ul><li><a href="#">FAQ</a></li><li><a href="#">Shipping</a></li></ul></div>
            <div class="col"><h4>About</h4><ul><li><a href="#">Our Story</a></li><li><a href="#">Careers</a></li></ul></div>
            <div class="col"><h4>Follow Us</h4><ul><li><a href="#">Facebook</a></li><li><a href="#">Instagram</a></li></ul></div>
        </div>
        <p class="copyright">&copy; 2026 ShopName</p>
    </footer>
</body>
</html>
```

## Submission
Validate all pages, test the complete user flow (Home → Category → Product → Cart → Checkout → Confirmation), verify responsive design, test all forms with validation.
