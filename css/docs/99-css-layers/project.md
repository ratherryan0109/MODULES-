# Mini Project: CSS Architecture with @layer

## Objective
Organize a small website's CSS using @layer to create a clear, predictable cascade. Separate reset, base, components, and utilities into layers.

## Requirements
1. Define layer order: `@layer reset, base, layout, components, utilities, overrides;`
2. Reset layer: normalize basic elements
3. Base layer: typography, colors, body styles
4. Layout layer: grid, container, page structure
5. Components layer: buttons, cards, navigation, header, footer
6. Utilities layer: spacing, text alignment, display helpers
7. Overrides layer: any last-minute overrides
8. Use nested layers for complex components

## Stretch Goals
- Import a third-party CSS library into a 'framework' layer
- Use @scope for component-level scoping within layers
- Create a reset layer that only applies to specific sections

## Evaluation
- Clear layer order declaration
- Proper use of layer priority (not relying on !important)
- Components are isolated in their own layers
- No specificity conflicts between layers
- Works in browsers supporting @layer
