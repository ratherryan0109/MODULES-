# Utility-First CSS Cheatsheet

## Common Utility Categories
| Category | Examples |
|----------|---------|
| Display | flex, grid, block, hidden |
| Flexbox | flex-col, items-center, justify-between |
| Spacing | p-4, m-2, gap-4, space-y-2 |
| Typography | text-sm, text-lg, font-bold, text-center |
| Sizing | w-full, w-64, h-32, max-w-md |
| Colors | text-blue, bg-white, border-gray |
| Visual | rounded, shadow, border, opacity |
| Interactive | cursor-pointer, pointer-events-none |

## Scale Systems
| Value | Tailwind | Custom |
|-------|----------|--------|
| 4px | p-1 | p-1 |
| 8px | p-2 | p-2 |
| 12px | p-3 | p-3 |
| 16px | p-4 | p-4 |
| 20px | p-5 | p-5 |
| 24px | p-6 | p-6 |
| 32px | p-8 | p-8 |

## Responsive Prefixes
| Prefix | Min Width |
|--------|-----------|
| sm: | 640px |
| md: | 768px |
| lg: | 1024px |
| xl: | 1280px |

## State Variant Prefixes
| Prefix | Pseudo-class |
|--------|-------------|
| hover: | :hover |
| focus: | :focus |
| active: | :active |
| disabled: | :disabled |
| group-hover: | Parent :hover |

## Building a Component
```html
<!-- Utility composition -->
<div class="flex items-center gap-4 p-6 bg-white rounded shadow">
  <img class="w-12 h-12 rounded-full" src="avatar.jpg" alt="">
  <div>
    <h2 class="text-lg font-bold">Name</h2>
    <p class="text-sm text-gray">Description</p>
  </div>
</div>

<!-- Extracted component approach -->
<style>
  .user-card {
    @apply flex items-center gap-4 p-6 bg-white rounded shadow;
  }
</style>
```

## Pros vs Cons
| Pros | Cons |
|------|------|
| Rapid prototyping | Verbose HTML |
| Consistent design | Learning curve for names |
| Small CSS files | HTML readability |
| No context switching | Feels like inline styles |
| Easy responsive | Team must learn framework |
