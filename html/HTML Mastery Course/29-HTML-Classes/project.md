# Mini Project: Component Library with Class System

## Overview

Build a small CSS component library using a class-based system. Create reusable components like buttons, cards, badges, alerts, and forms, all styled through classes. The library should demonstrate BEM naming, utility classes, and state modifiers.

## Requirements

1. **Button Component**: Base `.btn` class with modifiers for primary, secondary, success, danger, size (small, large), and disabled state
2. **Card Component**: `.card` with `.card__header`, `.card__body`, `.card__footer` and `.card--featured` modifier
3. **Badge Component**: `.badge` with color modifiers and `.badge--pill` shape
4. **Alert Component**: `.alert` with `.alert--info`, `.alert--success`, `.alert--warning`, `.alert--error` modifiers, and dismissible state
5. **Form Classes**: `.form-group`, `.form-label`, `.form-input`, `.form-input--error`, `.form-input--success`
6. **Utility Classes**: `.text-center`, `.text-left`, `.fw-bold`, `.mt-2`, `.mb-2`, `.p-2`, `.d-flex`, `.gap-2`

## Steps

### Step 1: Base Button
Create `.btn` with padding, border-radius, cursor, transition. Add `.btn--primary`, `.btn--secondary`, `.btn--success`, `.btn--danger`.

### Step 2: Button Sizes and States
Add `.btn--small`, `.btn--large`, `.btn--disabled`. Disabled should reduce opacity and remove pointer events.

### Step 3: Card Component
Create `.card` with border, shadow, overflow. Add `.card__header`, `.card__body`, `.card__footer`. Style `.card--featured` with gold border.

### Step 4: Badge Component
`.badge` with small padding, border-radius, font-size. Color modifiers: `.badge--red`, `.badge--blue`, `.badge--green`. `.badge--pill` for fully rounded.

### Step 5: Alert Component
`.alert` with padding, border-radius, icon area. Modifiers for info (blue), success (green), warning (yellow), error (red). Add dismiss button.

### Step 6: Form Classes
`.form-group` for spacing, `.form-label` for labels, `.form-input` for inputs with focus styles, `.form-input--error` for red border, `.form-input--success` for green.

### Step 7: Utility Classes
Create a small set of spacing and text utilities.

## Starter Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Library</title>
  <link rel="stylesheet" href="library.css">
</head>
<body>
  <h1>Component Library</h1>
  <!-- Demo each component here -->
</body>
</html>
```

## Evaluation Criteria

- BEM naming is correctly used
- Components are reusable and composable
- Modifiers properly extend base styles
- CSS specificity is managed properly
- Utility classes work as intended
- No ID selectors used for styling
- Components are responsive
