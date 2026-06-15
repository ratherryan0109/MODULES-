# Module 88: E-Commerce Frontend Project

## Introduction
Building an e-commerce frontend is one of the most practical web development projects you can undertake. This module guides you through creating a complete e-commerce store interface using HTML5, including product listings, product details, shopping cart, and checkout pages.

## Learning Objectives
By the end of this module, you will be able to:
- Structure an e-commerce website with HTML
- Create product listing grids and product detail pages
- Build a shopping cart interface
- Design a checkout form with validation
- Implement a product filtering sidebar
- Create responsive product cards
- Structure a complete e-commerce user flow

## E-Commerce Site Architecture

### Page Structure
```
ecommerce-site/
├── index.html            (Home / Products)
├── product.html          (Product Detail)
├── category.html         (Category Listing)
├── cart.html             (Shopping Cart)
├── checkout.html         (Checkout)
├── account.html          (My Account)
├── search.html           (Search Results)
└── assets/
    ├── css/
    │   └── style.css
    ├── images/
    └── js/
```

### User Flow
```
Home Page → Category → Product Detail → Add to Cart → Cart → Checkout → Confirmation
     ↑          ↑            ↑                            ↓
     └──────────┴────────────┴────────────────────────────┘ (Continue Shopping)
```

## Product Card Component

```html
<article class="product-card">
    <div class="product-image">
        <img src="product.jpg" alt="Product Name">
        <span class="badge sale">Sale!</span>
    </div>
    <div class="product-info">
        <h3><a href="product.html?id=123">Product Name</a></h3>
        <p class="price">
            <span class="current">$49.99</span>
            <span class="original">$69.99</span>
        </p>
        <div class="rating">★★★★☆</div>
        <button class="add-to-cart">Add to Cart</button>
    </div>
</article>
```

## Product Grid Layout

```html
<section class="products">
    <div class="container">
        <aside class="sidebar">
            <!-- Filters -->
            <div class="filter-section">
                <h3>Category</h3>
                <ul>
                    <li><a href="category.html?cat=electronics">Electronics</a></li>
                    <li><a href="category.html?cat=clothing">Clothing</a></li>
                    <li><a href="category.html?cat=home">Home & Garden</a></li>
                </ul>
            </div>
            <div class="filter-section">
                <h3>Price Range</h3>
                <form>
                    <input type="range" min="0" max="1000" value="500">
                </form>
            </div>
        </aside>
        <main class="product-grid">
            <div class="grid-controls">
                <p>Showing 1-12 of 48 items</p>
                <select name="sort">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>
            </div>
            <div class="grid">
                <!-- Product cards -->
            </div>
            <nav class="pagination">
                <a href="#" class="active">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
            </nav>
        </main>
    </div>
</section>
```

## Shopping Cart

```html
<section class="cart">
    <h1>Shopping Cart</h1>
    <table class="cart-table">
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="product-info">
                    <img src="product-thumb.jpg" alt="">
                    <a href="product.html">Product Name</a>
                </td>
                <td class="price">$49.99</td>
                <td class="quantity">
                    <input type="number" value="2" min="1" max="99">
                </td>
                <td class="subtotal">$99.98</td>
                <td><button class="remove">✕</button></td>
            </tr>
        </tbody>
    </table>
    <div class="cart-summary">
        <div class="coupon">
            <input type="text" placeholder="Coupon code">
            <button>Apply</button>
        </div>
        <div class="totals">
            <p>Subtotal: <span>$99.98</span></p>
            <p>Shipping: <span>$5.99</span></p>
            <p class="total">Total: <span>$105.97</span></p>
            <a href="checkout.html" class="btn-checkout">Proceed to Checkout</a>
        </div>
    </div>
</section>
```

## Visual Explanation

```
┌──────────────────────────────────────────────────────┐
│  HEADER: [Logo] Search Bar | Cart(3) | Account       │
├──────────────────────────────────────────────────────┤
│  SIDEBAR     │  PRODUCT GRID                        │
│  Categories  │  ┌─────┐ ┌─────┐ ┌─────┐            │
│  ☐ Electronics│  │Card │ │Card │ │Card │            │
│  ☐ Clothing   │  └─────┘ └─────┘ └─────┘            │
│  ☐ Home       │  ┌─────┐ ┌─────┐ ┌─────┐            │
│  Price Range  │  │Card │ │Card │ │Card │            │
│  ─────●────   │  └─────┘ └─────┘ └─────┘            │
│  Rating       │  Pages: 1 2 3 ...                   │
├───────────────┴──────────────────────────────────────┤
│  FOOTER: Links | Newsletter | Social | Copyright     │
└──────────────────────────────────────────────────────┘
```

## Common Mistakes
- Inconsistent product card heights
- Missing alt text on product images
- Cart not showing quantity update options
- Checkout form missing validation
- Poor mobile responsiveness
- Missing sale/discount badges

## Best Practices
- ✅ Use semantic HTML5 for product cards (`<article>`)
- ✅ Include structured data (Schema.org) for products
- ✅ Use descriptive alt text for product images
- ✅ Show stock availability status
- ✅ Implement clear call-to-action buttons
- ✅ Add breadcrumb navigation
- ✅ Use consistent pricing display
- ✅ Include product rating/review system
- ✅ Optimize images for fast loading

## Summary Notes
- Plan the complete user flow before coding
- Use `<article>` for each product card
- Implement sidebar filtering with proper form elements
- Build cart as a table with quantity controls
- Design checkout form with validation
- Include structured data for SEO
- Make all pages responsive
- Test the complete purchase flow
