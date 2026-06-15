# Mini Project: Style a Blog Page with Advanced Selectors

## Project Overview
Create a fully styled blog page that demonstrates mastery of CSS selectors. Your stylesheet should use a wide variety of selectors to target different elements, states, and relationships.

## Requirements

### HTML Structure
Create a blog page (`blog.html`) with:
1. **Header** with site title and navigation (Home, Blog, About, Contact)
2. **Featured post** (larger, with special styling)
3. **Blog post list** with at least 3 posts (title, date, excerpt, "Read More" link)
4. **Sidebar** with categories, recent posts, and an about section
5. **Footer** with copyright and social links

### CSS Requirements (`style.css`)
- **Element selectors**: Base typography (body, headings, paragraphs)
- **Class selectors**: Reusable components (cards, buttons, badges)
- **ID selector**: Main layout sections (#header, #main, #sidebar, #footer)
- **Combinators**: Navigation items (child >), article elements (descendant)
- **Attribute selectors**: External links, file types, form inputs
- **Pseudo-classes**: Hover, focus, first-child, last-child, nth-child
- **Pseudo-elements**: Decorative ::before/::after content, drop caps
- **Grouping**: Group related selectors for DRY code

### Design Guidelines
- Clean, modern blog aesthetic
- Max-width container (960px)
- Proper spacing and typography
- Responsive considerations

## Rubric
- 6+ different selector types used (25%)
- Correct syntax and proper application (25%)
- Interactive states (hover, focus) properly styled (15%)
- Pseudo-elements used meaningfully (15%)
- Code organization and comments (10%)
- Visual design quality (10%)

## Stretch Goals
- Add a CSS-only dropdown navigation menu using selectors
- Implement a dark/light theme toggle using CSS custom properties
- Use `:target` pseudo-class for smooth scrolling
- Add print styles using `@media print`
