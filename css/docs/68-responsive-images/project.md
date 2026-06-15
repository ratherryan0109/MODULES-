# Mini Project: Image-Heavy Portfolio Page

## Objective
Build a photographer or graphic designer portfolio page that showcases responsive image techniques in a real-world scenario.

## Requirements

### Layout
- **Hero** full-viewport image with overlay text
- **Portfolio grid** with 12-16 project thumbnails
- **Lightbox modal** for image detail view
- **About section** with headshot
- **Contact form**

### Image Requirements
1. **Hero**: Full art direction (different crops for mobile/tablet/desktop)
2. **Thumbnails**: srcset with 3 widths, lazy loading, WebP/AVIF format selection
3. **Lightbox**: High-resolution images with loading state
4. **Headshot**: Responsive with object-fit cover
5. **Background images**: CSS image-set() in hero overlay
6. **All images**: Width/height attributes for CLS prevention
7. **Gallery**: aspect-ratio containers for consistent grid

### Technical Specifications
- Server 3 image sizes per asset (small: 400px, medium: 800px, large: 1600px)
- Use `<picture>` with type for AVIF/WebP/JPEG chain
- Loading strategy: hero eager + high priority, thumbnails lazy
- Fallback for browsers without srcset support (base <img>)
- CSS image-set() for hero background fallback
- Debug panel showing which image loaded (optional)

### Performance Targets
- No images wider than the display size
- 30-50% bandwidth savings vs single-image approach
- Lighthouse Performance score > 90
- Zero Cumulative Layout Shift (CLS)

## Deliverables
- `index.html` - portfolio page
- Images can be placeholder SVGs or from a free image API (picsum.photos)

## Bonus Challenges
- Implement progressive image loading (blur-up technique)
- Add a "filter by category" feature for the gallery
- Create an image comparison slider (before/after)
- Implement pinch-to-zoom on the lightbox
- Add CSS art or decorative image masks

## Evaluation Criteria
- All 7 image requirements implemented
- Correct use of srcset with w descriptors
- Art direction via <picture> on hero
- Format selection (AVIF/WebP/JPEG fallback)
- Lazy loading on gallery, eager on hero
- No layout shift during image loading
- Accessible alt text on all images
- Works and performs well on mobile
