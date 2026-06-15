# Mini Project: Interactive 3D Product Showcase

## Objective
Build a 3D product showcase where users can rotate a product card to view it from all angles.

## Requirements
1. Create a product display with front (product image) and back (specifications)
2. Card flips on hover using rotate Y with perspective
3. Add a "spin to view all angles" button that continuously rotates the card
4. Include transform-origin variation for different pivot effects
5. Multiple products in a grid, each with flip capability

## Specs
- Use standalone `rotate` property
- Perspective on parent container
- backface-visibility for clean flips
- Smooth transitions (0.5-0.8s)
- Responsive grid layout

## Stretch Goals
- Add 3D carousel where items rotate around a central axis
- Implement mouse-tracking tilt effect using rotate X/Y with JavaScript
- Add glow/reflection effect on the card surface during rotation

## Evaluation Criteria
- 3D rotation works correctly with perspective
- Flip animation is smooth
- Multiple products display properly in grid
- Code is clean and uses standalone rotate
