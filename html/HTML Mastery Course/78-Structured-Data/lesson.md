# Module 78: Structured Data

## Introduction

Structured data is a standardized format for providing information about a webpage and classifying its content. By implementing structured data, you help search engines understand the context and meaning of your content, enabling enhanced search result features like rich snippets, knowledge panels, and carousels.

Search engines have evolved from simple keyword matching to understanding entity relationships and semantic meaning. Structured data bridges the gap between human-readable HTML content and machine-understandable metadata.

## Learning Objectives

By the end of this module, you will be able to:
- Understand what structured data is and why it matters for SEO
- Implement JSON-LD structured data on web pages
- Use Schema.org vocabulary for different content types
- Test and validate structured data markup
- Implement common schema types (Article, Product, FAQ, Event, Person, Organization)
- Understand the relationship between structured data and search engine result features

## What is Structured Data?

Structured data refers to organized information added to web pages using a standard format that search engines can parse and interpret. It uses a shared vocabulary (most commonly Schema.org) to describe entities and their relationships.

### Why Use Structured Data?

1. **Enhanced Search Results**: Rich snippets, star ratings, pricing info, event dates
2. **Knowledge Graph Integration**: Helps populate Google's Knowledge Graph
3. **Voice Search Optimization**: Structured data improves voice search accuracy
4. **Machine Readability**: Makes content understandable to automated systems
5. **Future-Proofing**: As AI advances, structured data becomes more critical

## Structured Data Formats

There are three main formats for implementing structured data:

### 1. JSON-LD (Recommended)
JSON-LD (JavaScript Object Notation for Linked Data) is Google's recommended format. It places all structured data in a `<script>` tag, separate from the visible HTML content.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Understanding Structured Data",
  "author": {
    "@type": "Person",
    "name": "John Doe"
  },
  "datePublished": "2026-06-12"
}
</script>
```

### 2. Microdata
Microdata uses HTML tag attributes to embed structured data within visible content.

```html
<div itemscope itemtype="https://schema.org/Article">
  <h1 itemprop="headline">Understanding Structured Data</h1>
  <span itemprop="author" itemscope itemtype="https://schema.org/Person">
    <span itemprop="name">John Doe</span>
  </span>
</div>
```

### 3. RDFa
RDFa (Resource Description Framework in Attributes) is an older standard that adds attributes to HTML elements.

```html
<div vocab="https://schema.org/" typeof="Article">
  <h1 property="headline">Understanding Structured Data</h1>
  <span property="author" typeof="Person">
    <span property="name">John Doe</span>
  </span>
</div>
```

---

**Why JSON-LD is Preferred:**
- Does not alter visible HTML content
- Easier to maintain and update
- Can be injected via JavaScript
- Google explicitly recommends it
- Clean separation of data from presentation

## Common Schema Types

### Article
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Bake Sourdough Bread",
  "author": {
    "@type": "Person",
    "name": "Jane Baker"
  },
  "datePublished": "2026-05-15",
  "image": "https://example.com/photos/sourdough.jpg",
  "publisher": {
    "@type": "Organization",
    "name": "Baking Weekly"
  }
}
```

### Product
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Wireless Headphones",
  "description": "Noise-cancelling Bluetooth headphones",
  "brand": {
    "@type": "Brand",
    "name": "AudioPro"
  },
  "offers": {
    "@type": "Offer",
    "price": "79.99",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "234"
  }
}
```

### FAQ
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is structured data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Structured data is a standardized format for providing information about a webpage."
      }
    },
    {
      "@type": "Question",
      "name": "Why use JSON-LD?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JSON-LD is Google's recommended format for structured data."
      }
    }
  ]
}
```

### Event
```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Web Developer Conference 2026",
  "startDate": "2026-09-15T09:00:00",
  "endDate": "2026-09-17T18:00:00",
  "location": {
    "@type": "Place",
    "name": "Convention Center",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94102"
    }
  },
  "offers": {
    "@type": "Offer",
    "url": "https://example.com/tickets",
    "price": "299",
    "priceCurrency": "USD"
  }
}
```

### Person
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jane Smith",
  "jobTitle": "Senior Web Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "TechCorp"
  },
  "url": "https://example.com/jane-smith",
  "sameAs": [
    "https://linkedin.com/in/janesmith",
    "https://github.com/janesmith"
  ]
}
```

### Organization
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TechCorp",
  "url": "https://techcorp.example.com",
  "logo": "https://techcorp.example.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-555-0199",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://facebook.com/techcorp",
    "https://twitter.com/techcorp"
  ]
}
```

### BreadcrumbList
```json
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
      "name": "Products",
      "item": "https://example.com/products"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Wireless Headphones",
      "item": "https://example.com/products/headphones"
    }
  ]
}
```

### Local Business
```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "The Gourmet Kitchen",
  "servesCuisine": "Italian",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "456 Oak Avenue",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10001"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.3",
    "reviewCount": "187"
  }
}
```

### Video
```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "HTML Tutorial for Beginners",
  "description": "Learn HTML from scratch",
  "thumbnailUrl": "https://example.com/thumbnail.jpg",
  "uploadDate": "2026-01-10",
  "duration": "PT30M15S",
  "embedUrl": "https://example.com/embed/video123"
}
```

### Recipe
```json
{
  "@context": "https://schema.org",
  "@type": "Recipe",
  "name": "Chocolate Chip Cookies",
  "author": "Chef Maria",
  "cookTime": "PT20M",
  "recipeIngredient": [
    "2 cups flour",
    "1 cup sugar",
    "1 cup chocolate chips"
  ],
  "nutrition": {
    "@type": "NutritionInformation",
    "calories": "250 calories"
  }
}
```

## Nesting and Complex Structures

Structured data can nest entities to represent complex relationships:

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "HTML Mastery Course",
  "description": "Complete guide to HTML",
  "provider": {
    "@type": "Organization",
    "name": "WebDev Academy",
    "sameAs": "https://webdevacademy.example.com"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT10H",
    "instructor": {
      "@type": "Person",
      "name": "Professor Code"
    }
  }
}
```

## Testing and Validation Tools

### Google Rich Results Test
Test your structured data for Google Search features:
- URL: https://search.google.com/test/rich-results
- Checks for valid schema types supported by Google
- Reports errors, warnings, and detected items

### Schema.org Validator
- Validates against full Schema.org vocabulary
- Shows the parsed JSON-LD output

### Google Search Console
- Monitor structured data health across your site
- Reports errors and improvement opportunities
- Tracks rich result performance

## Common Mistakes

### 1. Missing Required Properties
Each schema type has required properties. For example, `Article` requires `headline`, `author`, and `datePublished`.

### 2. Incorrect Data Types
Using string values where objects are expected, or vice versa.

### 3. Mismatched Content
Structured data must accurately reflect the visible page content (Google's guidelines on "content that is not visible to users").

### 4. Using Deprecated Schema Types
Always check Schema.org for the latest types and properties.

### 5. Marking Up Non-Existent Content
Do not mark up content that isn't present on the page.

### 6. Improper Nesting
Incorrectly nesting entities leads to invalid markup.

## Best Practices

1. **Use JSON-LD** - Always prefer JSON-LD over Microdata or RDFa
2. **Validate Everything** - Test with Google Rich Results Test before deployment
3. **Be Accurate** - Structured data must match visible page content
4. **One Type Per Page** - Use the most specific type for the main content
5. **Multiple Types** - You can include multiple schema blocks for different entities
6. **Keep Updated** - Review and update structured data when content changes
7. **Use Absolute URLs** - Always use full URLs (not relative)
8. **Follow Google Guidelines** - Check search.google.com for structured data guidelines

## Summary Notes

- Structured data helps search engines understand page content
- JSON-LD is Google's recommended format
- Schema.org is the de facto vocabulary standard
- Different content types use different schema types
- Always validate with Google Rich Results Test
- Structured data must match visible page content
- Common types: Article, Product, FAQ, Event, Person, Organization
- BreadcrumbList improves navigation in search results
- Properly implemented structured data can improve CTR by up to 30%
- JSON-LD blocks can be placed in `<head>` or `<body>` sections

## Key Takeaways

- Structured data creates a semantic layer on top of HTML
- JSON-LD separates data from presentation
- Schema.org provides a comprehensive vocabulary
- Validation is essential before deployment
- Structured data is critical for modern SEO
