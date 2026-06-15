# Project: Semantic HTML E-Commerce Page

## Objective
Build a fully functional e-commerce product listing page using ONLY semantic HTML (minimal ARIA, only where native elements can't provide the semantics). The page must be fully keyboard accessible and screen reader friendly using only native HTML features.

## Requirements

### Page Structure
1. **Header** with site logo/title (h1), search form, and main navigation
2. **Breadcrumb** navigation using nav + ol + aria-current
3. **Product listing** with:
   - Product cards using <article>
   - Product images with alt text
   - Product names (h2/h3), descriptions, prices
   - "Add to cart" buttons
   - Category/tags using ul
4. **Sidebar** with:
   - Filter form using fieldset/legend
   - Category list
   - Price range (native input range)
5. **Shopping cart** (slide-over or modal using <dialog>)
6. **Pagination** using nav + ol
7. **Footer** with copyright, contact info, links

### Semantic Requirements
- No `<div>` or `<span>` used where a semantic element exists
- All interactive elements are native (<button>, <a>, <input>)
- Proper heading hierarchy (one h1, sections start at h2)
- Lists for grouped items (products, breadcrumbs, categories, pagination)
- <time> for dates, <address> for contact info
- <figure>/<figcaption> for product images
- <details>/<summary> for product descriptions (expandable)
- Native form elements with <label> and <fieldset>/<legend>
- <dialog> for the cart/modal content
- <progress> or <meter> where applicable

### Testing Requirements
1. Test with CSS disabled — content must be readable and structured
2. Test keyboard-only navigation — all features accessible
3. Test with screen reader (NVDA/VoiceOver)
4. Run Nu HTML Checker — zero errors
5. Run Lighthouse accessibility audit — 100% score
6. Document any ARIA required and why native HTML couldn't provide it

### Deliverables
- Complete semantic HTML page
- CSS (minimal, only for visual layout)
- README documenting semantic choices
- Accessibility test results
- ARIA usage justification (if any ARIA was needed)

### Evaluation Criteria
- Correct use of semantic elements (40%)
- Proper heading hierarchy (15%)
- Native keyboard support (15%)
- Valid HTML (Nu Checker zero errors) (10%)
- Screen reader usability (10%)
- Documentation quality (10%)
