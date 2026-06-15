# Module 136: Complete Multi-Page Website

## Introduction
This capstone module combines all previous skills into a complete multi-page website. You'll build a site with a consistent design system, navigation across pages, and reusable components.

## Learning Objectives
- Architect a multi-page site with consistent CSS
- Create a shared design system (variables, components)
- Build navigation that works across pages
- Implement reusable component classes
- Manage CSS organization across files

## Architecture
The site has 5 pages: Home, About, Services, Blog, Contact. A shared `style.css` contains the design system (variables, reset, typography, utilities) and component styles. Each page has its own page-specific CSS or uses utility classes.

## Design System Structure
```css
/* style.css */
:root { /* Colors, fonts, spacing, breakpoints */ }
/* Reset */ /* Typography */ /* Layout utilities */ /* Components */
/* Button, Card, Nav, Header, Footer, Form, Grid */
```

## Navigation Pattern
The active page is highlighted using a class or body data-attribute:
```css
.nav a[aria-current="page"] { color: var(--primary); border-bottom: 2px solid var(--primary); }
```

## Responsive Approach
- Shared breakpoints in custom properties
- Mobile nav (hamburger) consistent across pages
- Reusable responsive grid classes
- Component-level media queries

## Accessibility
- Consistent skip link across all pages
- aria-current on active nav links
- Landmark roles on every page
- Consistent focus management

## Summary Notes
- CSS custom properties ensure design consistency
- One shared stylesheet + page-specific sheets
- Reusable components reduce code duplication
- Navigation must clearly indicate current page
- Test all pages for consistent branding
