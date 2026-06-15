# E-Commerce Frontend Project — Cheatsheet

## File Structure

```
ecommerce/
├── index.html          (Home/Products)
├── product.html        (Product Detail)
├── category.html       (Category Listing)
├── cart.html           (Shopping Cart)
├── checkout.html       (Checkout)
├── confirmation.html   (Order Confirmation)
├── account.html        (My Account)
└── assets/
    ├── css/style.css
    ├── images/
    └── js/script.js
```

## Product Card Template

```html
<article class="product-card">
    <div class="product-image">
        <img src="assets/images/product.jpg" alt="Product Name">
        <span class="badge sale">Sale!</span>
    </div>
    <div class="product-info">
        <h3><a href="product.html?id=1">Product Name</a></h3>
        <div class="rating" aria-label="4 out of 5 stars">★★★★☆</div>
        <p class="price"><span class="current">$49.99</span></p>
        <button class="add-to-cart" data-id="1">Add to Cart</button>
    </div>
</article>
```

## Product Grid

| CSS Grid Property | Value |
|-------------------|-------|
| `grid-template-columns` | `repeat(auto-fill, minmax(280px, 1fr))` |
| `gap` | `1.5rem` |

## Cart Table Structure

| Element | Purpose |
|---------|---------|
| `<table class="cart-table">` | Cart items container |
| `<thead><tr><th>` | Column headers |
| `<tbody><tr>` | Each cart item |
| Quantity `<input type="number">` | Update quantity |
| Remove `<button>` | Remove item |

## Checkout Form Sections

| Section | Fields |
|---------|--------|
| Shipping | Name, email, address, city, ZIP, country |
| Payment | Card number, expiry, CVV, cardholder |
| Billing | Same as shipping toggle + address fields |
| Review | Order summary with readonly totals |

## Structured Data (Schema.org)

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Product Name",
    "image": "product.jpg",
    "description": "Product description",
    "sku": "12345",
    "offers": {
        "@type": "Offer",
        "price": "49.99",
        "priceCurrency": "USD"
    }
}
</script>
```

## Best Practices
- ✅ Use `<article>` for each product card
- ✅ Include structured data for SEO
- ✅ Show stock availability
- ✅ Use consistent currency formatting
- ✅ Add breadcrumb navigation
- ✅ Optimize product images
- ❌ Don't use generic alt text
- ❌ Don't forget mobile responsive grid
- ❌ Don't skip form validation on checkout
