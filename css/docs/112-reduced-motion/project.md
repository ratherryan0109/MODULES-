# Mini Project: Motion-Safe Marketing Landing Page

## Objective
Build a marketing landing page with rich animations that gracefully degrade to a fully functional static experience when users prefer reduced motion.

## Requirements

### 1. Page Sections
Create a one-page landing with these animated sections:

**Hero Section**
- Full-viewport background with parallax effect
- Floating decorative elements (geometric shapes)
- Animated text reveal (staggered letter/word entrance)
- CTA button with hover animation

**Features Section**
- Cards that animate into view on scroll (Intersection Observer)
- Card hover effects (lift, shadow, border highlight)
- Decorative background particles or gradients

**Testimonials Section**
- Auto-rotating carousel with slide transitions
- Star ratings with pulse animation
- Quote fade transitions

**Stats Counter Section**
- Animated number counters that count up on view
- Progress bars with fill animation
- Checkmark reveal animations

**Footer**
- Accordion menu for mobile
- Social icon hover animations

### 2. Reduced Motion Implementation
For each animation, provide:
- Full animation for `no-preference`
- Reduced fallback that preserves meaning
- No loss of content or functionality

### 3. Motion Preference Toggle
- Detect system `prefers-reduced-motion`
- Provide a manual toggle button (Moon/Sun icon metaphor)
- Persist preference in localStorage
- Toggle affects all animations on the page

### 4. Performance
- Use only `transform` and `opacity` animations
- No layout-triggering properties during animation
- Use `will-change` appropriately
- Test on low-end devices

### 5. Testing & Documentation
- Test with OS reduced motion enabled
- Test with manual toggle
- Document all animation fallbacks in a table
- Note which animations are functional vs decorative

## Deliverables
- `index.html` - Complete landing page
- `styles.css` - All styles with reduced motion support
- `animations.js` - Scroll-triggered animation logic
- `docs.md` - Animation inventory and accessibility notes

## Evaluation Criteria
- All animations respond to reduced motion preference
- No content is hidden or lost when animations are disabled
- Functional animations (progress, loading) remain
- Manual toggle works correctly
- Page is fully usable with keyboard navigation
- All WCAG reduced motion criteria are met
