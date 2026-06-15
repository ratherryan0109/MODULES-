# Structured Data Cheatsheet

## JSON-LD Structure

```json
{
  "@context": "https://schema.org",
  "@type": "TypeName",
  "property1": "value1",
  "property2": {
    "@type": "NestedType",
    "nestedProp": "value"
  }
}
```

## Common Schema Types and Required Properties

| Schema Type | Required Properties | Optional Key Properties |
|-------------|-------------------|------------------------|
| **Article** | headline, author, datePublished | image, description, publisher, dateModified |
| **Product** | name | description, brand, offers, aggregateRating, sku |
| **Event** | name, startDate, location | endDate, offers, performer, organizer |
| **Person** | name | jobTitle, worksFor, url, sameAs, address |
| **Organization** | name | url, logo, contactPoint, sameAs, address |
| **FAQPage** | mainEntity | (none required beyond mainEntity) |
| **BreadcrumbList** | itemListElement | (none required beyond list elements) |
| **VideoObject** | name, description, thumbnailUrl, uploadDate | duration, contentUrl, embedUrl |
| **Recipe** | name, recipeIngredient, recipeInstructions | cookTime, nutrition, aggregateRating |
| **LocalBusiness** | name | address, aggregateRating, priceRange, servesCuisine |

## Data Types Reference

| Type | Description | Example |
|------|-------------|---------|
| **Text** | Plain string | `"Hello World"` |
| **URL** | Absolute URL | `"https://example.com/page"` |
| **Date** | ISO 8601 date | `"2026-06-12"` |
| **DateTime** | ISO 8601 datetime | `"2026-06-12T14:30:00"` |
| **Duration** | ISO 8601 duration | `"PT30M15S"` (30 min 15 sec) |
| **Number** | Numeric value | `42` or `"42"` |
| **Boolean** | True/false | `true` or `false` |
| **Array** | List of items | `["item1", "item2"]` |
| **Object** | Nested entity | `{ "@type": "Person", "name": "John" }` |

## Microdata Attributes

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `itemscope` | Declares a structured data item | `<div itemscope>` |
| `itemtype` | Specifies the schema URL | `itemtype="https://schema.org/Article"` |
| `itemprop` | Maps to a schema property | `itemprop="headline"` |

## ISO 8601 Duration Format

| Pattern | Meaning | Example |
|---------|---------|---------|
| `PT{x}S` | Seconds | `PT45S` (45 seconds) |
| `PT{x}M` | Minutes | `PT5M` (5 minutes) |
| `PT{x}H` | Hours | `PT2H` (2 hours) |
| `P{x}D` | Days | `P3D` (3 days) |
| `PT{x}H{x}M{x}S` | Combined | `PT1H30M15S` (1h 30m 15s) |

## Availability Values

| Value | Meaning |
|-------|---------|
| `https://schema.org/InStock` | Currently in stock |
| `https://schema.org/OutOfStock` | Currently out of stock |
| `https://schema.org/LimitedAvailability` | Limited stock remaining |
| `https://schema.org/PreOrder` | Available for pre-order |
| `https://schema.org/Discontinued` | No longer available |

## Validation Tools

| Tool | URL | Purpose |
|------|-----|---------|
| Google Rich Results Test | search.google.com/test/rich-results | Test Google search features |
| Schema.org Validator | validator.schema.org | Full vocabulary validation |
| Google Search Console | search.google.com/search-console | Production monitoring |
| Bing Webmaster Tools | www.bing.com/webmasters | Bing-specific validation |

## Best Practices Quick Reference

1. Always use JSON-LD format
2. Validate with Google Rich Results Test
3. Use absolute URLs (not relative)
4. Match visible page content exactly
5. Include all required properties
6. Use the most specific schema type
7. Test on mobile and desktop
8. Update when content changes
9. Monitor in Search Console
10. Do not hide structured data from users
