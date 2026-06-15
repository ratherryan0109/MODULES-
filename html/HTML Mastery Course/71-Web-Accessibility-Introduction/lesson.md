# Module 71: Web Accessibility Introduction

## Introduction

Web accessibility means designing and developing websites that can be used by people with disabilities. This includes people with visual, auditory, physical, speech, cognitive, and neurological disabilities. Accessibility is not just about accommodating disabilities — it improves the experience for all users, including those on mobile devices, slow connections, or temporary limitations.

The Web Content Accessibility Guidelines (WCAG) provide an internationally recognized standard for web accessibility. Understanding and implementing these guidelines is a fundamental skill for modern web developers.

## Learning Objectives

By the end of this module, you will be able to:

- Understand the importance and legal requirements of web accessibility
- Explain the four principles of WCAG: Perceivable, Operable, Understandable, Robust
- Identify common accessibility barriers and their solutions
- Use automated and manual testing tools
- Implement basic accessibility improvements
- Understand the business case for accessibility

## The Four Principles of WCAG (POUR)

### 1. Perceivable
Information and UI components must be presentable to users in ways they can perceive.

- **Text alternatives**: Provide alt text for images, captions for audio/video
- **Adaptable content**: Content can be presented in different ways without losing meaning
- **Distinguishable**: Make it easy to see and hear content

### 2. Operable
UI components and navigation must be operable.

- **Keyboard accessible**: All functionality available via keyboard
- **Enough time**: Users can adjust time limits
- **Seizures**: Don't design content that causes seizures
- **Navigable**: Help users navigate and find content

### 3. Understandable
Information and UI must be understandable.

- **Readable**: Text is readable and understandable
- **Predictable**: Web pages appear and operate predictably
- **Input assistance**: Help users avoid and correct mistakes

### 4. Robust
Content must be robust enough to be interpreted by a wide variety of user agents (including assistive technologies).

- **Compatible**: Maximize compatibility with current and future user agents

## WCAG Conformance Levels

| Level | Description | Example Requirements |
|-------|-------------|---------------------|
| **A** | Minimum level | Alt text on images, keyboard access |
| **AA** | Acceptable level (legal standard) | Color contrast 4.5:1, captions on videos |
| **AAA** | Highest level | Sign language interpretation, extended descriptions |

## Common Accessibility Barriers

| Barrier | Impact | Solution |
|---------|--------|----------|
| Images without alt text | Screen reader users can't understand images | Add descriptive alt attributes |
| Poor color contrast | Low-vision users can't read text | Ensure 4.5:1 contrast ratio |
| Keyboard traps | Users can't navigate without mouse | Ensure all elements are keyboard accessible |
| Missing form labels | Screen reader users don't know what input is for | Use label elements or aria-label |
| Auto-playing video | Distracting for screen reader users | Allow users to control media playback |
| Complex navigation | Users with cognitive disabilities get lost | Clear structure, breadcrumbs, skip links |

## Accessibility Testing Tools

### Automated Tools
- **WAVE** (wave.webaim.org)
- **axe DevTools** (browser extension)
- **Lighthouse** (built into Chrome DevTools)
- **Accessibility Insights** (Microsoft)
- **Pa11y** (CLI tool)

### Manual Testing
- Keyboard-only navigation
- Screen reader testing (NVDA, VoiceOver, JAWS)
- Zoom to 200% and 400%
- Disable CSS and check content order
- Check focus indicators

## Quick Wins

```html
<!-- Add alt text to images -->
<img src="chart.png" alt="Bar chart showing sales growth from 2020 to 2024">

<!-- Use semantic HTML -->
<nav>...</nav>
<main>...</main>
<button>Click Me</button> <!-- Not <div> -->

<!-- Add labels to form inputs -->
<label for="email">Email Address</label>
<input type="email" id="email">

<!-- Use ARIA landmarks -->
<header role="banner">...</header>
<nav role="navigation">...</nav>
<main role="main">...</main>

<!-- Ensure keyboard accessibility -->
<button onclick="submit()">Submit</button>
<!-- Avoid: <div onclick="submit()">Submit</div> -->
```

## Legal Requirements

Many countries have laws requiring web accessibility:
- **US**: Americans with Disabilities Act (ADA), Section 508
- **EU**: European Accessibility Act (EAA)
- **UK**: Equality Act 2010
- **Canada**: Accessible Canada Act
- **Australia**: Disability Discrimination Act 1992

## The Business Case

- **Larger audience**: ~15% of the world's population has some disability
- **SEO benefits**: Accessible sites rank higher
- **Legal risk**: Lawsuits are increasing
- **Better UX**: Accessibility improvements benefit all users
- **Brand reputation**: Demonstrates social responsibility

## Summary Notes

- Web accessibility ensures websites work for people with disabilities
- WCAG has four principles: Perceivable, Operable, Understandable, Robust
- Three conformance levels: A, AA (legal standard), AAA
- Use both automated and manual testing methods
- Semantic HTML is the foundation of accessibility
- Keyboard accessibility is essential
- ARIA supplements HTML when native semantics aren't enough
- Accessibility is not optional — it's a fundamental human right
- Accessible websites benefit all users, not just those with disabilities
- Legal requirements for accessibility are increasing worldwide
