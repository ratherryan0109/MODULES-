# Tailwind CSS Cheatsheet

## Common Utilities
| Category | Examples |
|----------|---------|
| Layout | container, flex, grid, block, hidden |
| Flexbox | flex-col, items-center, justify-between, flex-1 |
| Grid | grid-cols-3, gap-4, col-span-2 |
| Spacing | p-4, px-6, py-2, m-4, mx-auto, gap-4 |
| Typography | text-sm, text-lg, font-bold, text-center, leading-relaxed |
| Sizing | w-full, w-64, h-32, max-w-4xl, min-h-screen |
| Colors | text-gray-900, bg-blue-500, border-gray-200 |
| Background | bg-white, bg-gradient-to-r, bg-cover |
| Borders | border, border-2, rounded, rounded-lg, shadow |
| Transitions | transition-all, duration-300, ease-in-out |

## Responsive Prefixes
| Prefix | Min Width | Example |
|--------|-----------|---------|
| sm: | 640px | sm:text-lg |
| md: | 768px | md:flex-row |
| lg: | 1024px | lg:w-1/3 |
| xl: | 1280px | xl:gap-8 |
| 2xl: | 1536px | 2xl:max-w-7xl |

## State Variant Prefixes
`hover:` `focus:` `active:` `disabled:` `group-hover:` `focus-within:` `dark:`

## Configuration Structure
```js
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: { brand: { 500: '#0055CC' } },
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      spacing: { 18: '4.5rem' },
    },
  },
  plugins: [],
}
```

## Production Setup
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
# Configure content paths
# Build with: npx tailwindcss -i input.css -o output.css --minify
```

## Common Patterns
```html
<!-- Centered container -->
<div class="container mx-auto px-4">

<!-- Card -->
<div class="bg-white rounded-lg shadow-md p-6">

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<!-- Button with states -->
<button class="bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:outline-none text-white font-bold py-2 px-4 rounded transition-colors">

<!-- Dark mode -->
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">

<!-- Group hover -->
<div class="group">
  <h3 class="group-hover:text-blue-500">Title</h3>
</div>
```
