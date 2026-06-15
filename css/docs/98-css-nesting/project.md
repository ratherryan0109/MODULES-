# Mini Project: Refactor Stylesheet with CSS Nesting

## Objective
Take a flat CSS stylesheet and refactor it to use native CSS Nesting to improve readability and organization.

## Requirements
1. Start with a flat CSS file (provided below)
2. Refactor to use CSS Nesting (max 3 levels deep)
3. Use & for pseudo-classes and modifiers
4. Nest media queries inside rules
5. Nest pseudo-elements (::before, ::after)
6. Verify the output produces equivalent CSS

## Starting CSS (Refactor This)
```css
.card { background: #1a1a2e; border-radius: 12px; padding: 20px; }
.card .title { color: #ffd700; font-size: 1.2rem; }
.card .desc { color: #94a3b8; }
.card.featured { border-color: #3b82f6; }
.card.featured .title { color: #3b82f6; }
.card:hover { transform: translateY(-4px); }
@media (max-width: 768px) { .card { padding: 12px; } }
```

## Stretch Goals
- Add @scope blocks for component isolation
- Combine with @layer for Cascade control
- Create a nested file structure (components nested within sections)

## Evaluation
- All nesting is valid CSS (not Sass)
- No more than 3 levels deep
- All original styles are preserved
- Clean, readable organization
- Works in browsers supporting CSS Nesting
