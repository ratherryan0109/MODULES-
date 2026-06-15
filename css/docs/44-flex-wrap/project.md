# Mini Project: Responsive Image Gallery

## Objective
Create a responsive image gallery using `flex-wrap: wrap` that displays placeholder images in a grid that adapts to screen size.

## Requirements
1. Use `flex-wrap: wrap` on the gallery container
2. Each image should have a flexible `flex-basis` (e.g., 200px)
3. Images should grow to fill space but maintain minimum size
4. Proper gap between images
5. At least 12 placeholder images

## Layout Diagram
```
Desktop (1200px+):
[img] [img] [img] [img] [img]
[img] [img] [img] [img] [img]
[img] [img]

Tablet (768px+):
[img] [img] [img]
[img] [img] [img]
[img] [img] [img]
[img] [img] [img]

Mobile (< 480px):
[img]
[img]
[img]
...
```

## Specifications
- Gallery container: max-width 1200px, centered
- Items: `flex: 1 1 200px` or similar
- Gap: 1rem
- Each image should have a caption using `figure` and `figcaption`
- Use placeholder images (via CSS gradients or data URIs)

## Bonus Challenges
- Add a lightbox effect on click (modal)
- Add filter buttons (All, Nature, People, Tech)
- Implement lazy loading with loading="lazy"

## Evaluation Criteria
- Correct use of flex-wrap: wrap
- Responsive behavior without media queries
- Proper gap usage
- Clean HTML structure
- Visual polish with captions
