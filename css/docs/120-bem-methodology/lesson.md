# Professional CSS: BEM Methodology

## Table of Contents
1. [Introduction](#introduction)
2. [Learning Objectives](#learning-objectives)
3. [Theory](#theory)
4. [Syntax](#syntax)
5. [Visual Explanation](#visual-explanation)
6. [Common Mistakes](#common-mistakes)
7. [Best Practices](#best-practices)
8. [Accessibility Considerations](#accessibility-considerations)
9. [Performance Considerations](#performance-considerations)
10. [Browser Compatibility](#browser-compatibility)
11. [Summary Notes](#summary-notes)

## Introduction
BEM (Block Element Modifier) is a naming convention that makes CSS more predictable, maintainable, and self-documenting. It creates a clear relationship between HTML structure and CSS classes, solving the global namespace problem in CSS. Originated at Yandex, BEM has become one of the most widely adopted CSS methodologies because it's simple to learn, easy to enforce, and scales effectively from small component libraries to enterprise design systems.

## Learning Objectives
1. Understand BEM: Block, Element, Modifier
2. Apply BEM naming to HTML components
3. Distinguish between blocks, elements, and modifiers
4. Handle nested components with BEM
5. Use BEM with CSS preprocessors
6. Implement BEM in component frameworks
7. Combine BEM with utility classes
8. Manage BEM in large projects
9. Understand when to use each BEM component
10. Recognize anti-patterns in BEM usage

## Theory

### BEM Concepts
| Concept | Syntax | Example | Description |
|---------|--------|---------|-------------|
| Block | `.block` | `.card` | Standalone component |
| Element | `.block__element` | `.card__title` | Part of a block |
| Modifier | `.block--modifier` | `.card--featured` | Variant/state of block |
| Element Modifier | `.block__element--modifier` | `.card__title--large` | Modified element |

### The Problem BEM Solves
CSS has a global namespace — any class name you define is visible throughout the entire document. In a large project, this means:
- `.title` could be defined in five different places, each overriding the others
- `.button` styles from one component leak into another component's buttons
- Naming collisions require increasingly specific selectors (`.header .nav .link`)
- No clear relationship between HTML structure and CSS classes

BEM solves this by encoding the component structure into the class name itself. When you see `.card__title--large`, you know immediately: this is a title element inside a card block, with a large modifier. No guessing, no inspection needed.

### Block: The Component Root
A **Block** is a standalone component that has meaning on its own. Examples: `.card`, `.btn`, `.nav`, `.header`, `.form`, `.modal`. A block should be self-contained — it should work in any context without depending on parent styles.

### Element: A Dependent Part
An **Element** is a part of a block that has no standalone meaning. Examples: `.card__title`, `.card__body`, `.card__footer`, `.btn__icon`, `.form__label`. Elements are always tied to their parent block — you should never use `.card__title` outside of a `.card` context.

### Modifier: A Variant or State
A **Modifier** changes the appearance, behavior, or state of a block or element. Examples: `.card--featured`, `.card--compact`, `.btn--primary`, `.btn--large`, `.card__title--large`. Modifiers should be additive — they change specific properties of the base block/element without resetting everything.

### The BEM File Structure
In a BEM-based project, the file structure often mirrors the naming convention:

```
styles/
  blocks/
    card/
      _card.scss          # Block styles
      card__title.scss    # Element styles (optional, can be in block file)
      card--featured.scss # Modifier styles (optional)
    btn/
      _btn.scss
      btn--primary.scss
    nav/
      _nav.scss
      nav__list.scss
      nav__item.scss
      nav__link.scss
```

This makes it easy to find all styles related to a specific block — just look in the block's directory.

### When to Use Each
- **Block**: The root of a component (`.card`, `.btn`, `.nav`). Anything that could be reused independently.
- **Element**: A part that has no meaning outside the block (`.card__title`, `.card__body`, `.card__footer`).
- **Modifier**: A variant or state change (`.card--featured`, `.btn--primary`, `.nav--sticky`).

A good rule of thumb: if you're unsure whether something should be an element or a separate block, ask "Could this be used independently?" If yes, it's a block. If no, it's an element.

## Syntax

```css
/* Block */
.card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Element */
.card__title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.3;
}

.card__body {
  color: #666;
  line-height: 1.6;
}

.card__actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.card__image {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 1rem;
}

/* Modifier */
.card--featured {
  border: 2px solid #0055CC;
  box-shadow: 0 4px 12px rgba(0,85,204,0.15);
}
.card--compact {
  padding: 1rem;
}
.card--horizontal {
  display: flex;
  gap: 1rem;
  align-items: center;
}

/* Element modifier (rare but valid) */
.card__title--large {
  font-size: 1.5rem;
}
.card__title--muted {
  color: #999;
  font-weight: 400;
}

/* HTML usage */
/*
<div class="card card--featured">
  <img class="card__image" src="photo.jpg" alt="">
  <h2 class="card__title card__title--large">Title</h2>
  <p class="card__body">Description text here.</p>
  <div class="card__actions">
    <button class="btn btn--primary">Action</button>
  </div>
</div>
*/
```

### BEM with Preprocessors (SCSS)
```scss
// BEM with SCSS nesting using & selector
.card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;

  &__title {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;

    &--large { font-size: 1.5rem; }
    &--muted { color: #999; }
  }

  &__body {
    color: #666;
    line-height: 1.6;
  }

  &__actions {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  &--featured {
    border: 2px solid #0055CC;
    box-shadow: 0 4px 12px rgba(0,85,204,0.15);
  }

  &--compact {
    padding: 1rem;
  }
}
```

The `&` prefix creates `.card__title` from `&__title` and `.card--featured` from `&--featured`. This keeps the block name in one place and makes refactoring easier — change the block name once and all elements and modifiers update.

### BEM in Component Frameworks (React)
```jsx
// React component with BEM classes
function Card({ title, children, variant = 'default', className }) {
  const classNames = [
    'card',
    variant !== 'default' && `card--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      <h2 className="card__title">{title}</h2>
      <div className="card__body">{children}</div>
    </div>
  );
}
```

## Visual Explanation

```
BEM Structure Diagram:

┌─────────────────────────────────┐
│           .card (Block)         │
│  ┌───────────────────────────┐  │
│  │  .card__image (Element)   │  │
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │  .card__title (Element)   │  │
│  │  .card__title--large (Mod)│  │
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │  .card__body (Element)    │  │
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │  .card__actions (Element) │  │
│  │  ┌─────┐ ┌─────┐         │  │
│  │  │.btn │ │.btn │         │  │
│  │  └─────┘ └─────┘         │  │
│  │  (Nested Blocks)          │  │
│  └───────────────────────────┘  │
│     card--featured (Modifier)   │
└─────────────────────────────────┘
```

## Common Mistakes
1. **Using element inside element** (`.card__title__icon`): BEM is flat — only one level of element nesting. `.card__title-icon` or a nested block inside the element is the correct approach.
2. **Modifier on element without the block** (`.card__title--large` used without `.card` present): The block is the namespace — without it, the modifier class has no context.
3. **Over-nesting**: Blocks inside blocks should be separate. A button inside a card should be a `.btn` block, not `.card__btn`. The card merely contains a button; it doesn't own it.
4. **Using block name in element names** (`.card-card__title` or `.cardTitle`): BEM uses double underscore for elements. Adding the block name again is redundant — `.card__title` already implies "card's title."
5. **Too many modifiers creating combinatorial explosion**: If you have `.card--primary`, `.card--secondary`, `.card--large`, `.card--small`, `.card--featured`, `.card--horizontal`, `.card--vertical`, `.card--bordered`, you may need separate components instead.
6. **Modifiers that don't extend the base**: A modifier that completely changes the component's visual appearance should probably be a new block.
7. **CSS specificity with BEM**: While BEM keeps specificity flat (all classes), deeply nested SCSS can create `.card__body .card__title` selectors if you're not careful. Keep nesting flat.
8. **Using element names outside the block**: Writing `<div class="card__title">` without a surrounding `.card` block breaks the BEM contract and creates confusing, non-portable markup.

## Best Practices
1. **Blocks can contain other blocks** (nested components): A `.card` can contain a `.btn` and a `.form`. They remain independent blocks.
2. **Elements are always part of a block**: Never use element classes without their parent block class. This couples the HTML structure to the BEM naming.
3. **Modifiers can be applied to blocks or elements**: Both `.card--featured` and `.card__title--large` are valid. Modifiers should change specific properties, not everything.
4. **Keep flat structure — no element of element**: If you feel you need `.card__body__title`, either use a nested block or combine: `.card__body-title` or restructure your component.
5. **Use meaningful names, not visual descriptions**: `.card__title` is better than `.card__big-bold-text`. Name by purpose, not appearance.
6. **Don't over-modify — create new block if too different**: If you find yourself writing `.btn--primary--large--rounded--with-icon`, you probably need a different component.
7. **BEM works with all CSS architectures**: BEM is a naming convention, not an architecture. It works with ITCSS, SMACSS, OOCSS, and utility-first approaches.
8. **Use `&` in SCSS for clean BEM**: The `&__element` and `&--modifier` patterns keep your BEM blocks DRY and easy to refactor.
9. **Combine BEM with utility classes**: BEM for component structure, utilities for one-off adjustments. `.card { ... }` with `class="card mt-4 text-center"` is a common, practical pattern.
10. **Document your BEM conventions**: Create a CONTRIBUTING.md section that explains your BEM conventions, especially how you handle edge cases like nested blocks.

## Accessibility Considerations
- **BEM classes don't affect accessibility**: BEM is a CSS naming convention — it has no impact on screen readers or assistive technology. Focus on semantic HTML alongside BEM.
- **Use ARIA attributes within BEM structure**: A `.modal` block should have `role="dialog"` and `aria-labelledby` pointing to `.modal__title`.
- **State modifiers should reflect actual states**: If `.btn--disabled` modifies appearance, also use the `disabled` HTML attribute and `aria-disabled="true"`.
- **BEM doesn't replace semantic HTML**: `.card__title` should still be an `<h2>` or `<h3>`, not a `<div>`. BEM names are for CSS, not for replacing semantic elements.
- **Focus indicators on modifiers**: When creating focus styles for BEM components, ensure `.block--focused` or `:focus-visible` has sufficient contrast and visibility.

## Performance Considerations
- **BEM selectors are fast**: Class-only selectors match quickly — the browser doesn't need to traverse the DOM tree. All BEM selectors are at the same specificity level (0,0,1,0).
- **Long class names increase HTML size**: `.card__title--large-with-icon` is a long class name. With thousands of elements, this adds up. Gzip handles this well, but it's worth considering at scale.
- **No deep descendant selectors**: BEM eliminates `.card .body .title a` patterns, which means the browser doesn't need to do ancestor checks during style matching.
- **SCSS `&` compilation produces flat CSS**: When you write BEM with SCSS `&`, the compiled output is flat class selectors — no nesting overhead in the final CSS.
- **PurgeCSS works well with BEM**: Since BEM classes follow a predictable pattern, PurgeCSS can effectively tree-shake unused BEM classes from production builds.

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|-----|
| Class selectors | All | All | All | All | All |
| Attribute selectors | All | All | All | All | All |
| `:hover` | All | All | All | All | All |
| `:focus-visible` | 86+ | 85+ | 15.4+ | 86+ | — |

BEM uses only CSS class selectors, which have been supported in every browser since the early days of CSS. There are zero browser compatibility concerns with BEM itself — it's purely a naming convention. However, if you use CSS features like custom properties or `@container` within your BEM components, those features will have their own browser requirements.

## Summary Notes
- **Block = component root, Element = child part, Modifier = variant/state**
- **No element-of-element** (`.block__element__sub` is wrong) — BEM is strictly flat, one level of element nesting
- **Nested blocks are independent** — a `.card__btn` is better as a separate `.btn` block inside the card
- **Modifiers replace the original**, don't layer multiple — `.card--featured` should be one modifier, not `.card` + `.featured` + `.highlighted`
- **BEM solves specificity** by keeping all selectors at class level (0,0,1,0)
- **BEM works with CSS Modules, preprocessors, and frameworks** — it's universally compatible
- **Combine BEM with utility classes** for maximum flexibility — BEM handles component structure, utilities handle one-off adjustments
- **SCSS `&` prefix** (`&__element`, `&--modifier`) makes BEM cleaner and more maintainable
- **Name by purpose, not appearance** — `.card__title` not `.card__large-bold-text`
- **BEM file structure** mirrors the naming convention, making files easy to locate
- **BEM doesn't affect semantics** — always use proper HTML elements alongside BEM classes
- **One block, one file** — keep each block's styles in a dedicated file
- **BEM is a naming convention, not a complete architecture** — pair it with ITCSS or SMACSS for file organization
- **Document your conventions** — even BEM has edge cases, and your team needs to agree on how to handle them
