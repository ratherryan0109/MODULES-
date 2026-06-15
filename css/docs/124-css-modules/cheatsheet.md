# CSS Modules - Quick Reference

## Setup & Configuration

### Webpack
```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true } }
        ]
      }
    ]
  }
}
```

### Vite
```js
// vite.config.js — built-in, no extra config needed
// Just use .module.css files and import as objects
```

### Next.js
```js
// Built-in — name files as *.module.css
// Next.js handles CSS Modules automatically
```

## File Naming Convention
| File | Type |
|------|------|
| `Button.module.css` | CSS Module (scoped) |
| `styles.css` | Global CSS (unscoped) |
| `Button.module.scss` | SCSS Module (scoped + preprocessor) |

## Import Syntax

### React
```jsx
import styles from './Button.module.css';
// Use: <button className={styles.primary}>Click</button>
```

### Vue
```vue
<style module>
.btn { color: blue; }
</style>
<template>
  <button :class="$style.btn">Click</button>
</template>
```

## Class Name Access Patterns

| Pattern | JSX | Description |
|---------|-----|-------------|
| Single class | `className={styles.btn}` | Dot notation (camelCase required) |
| Hyphenated class | `className={styles['btn-primary']}` | Bracket notation |
| Multiple classes | `` className={`${styles.btn} ${styles.large}`} `` | Template literals |
| Conditional | `className={isActive ? styles.active : ''}` | Ternary |
| With classnames lib | `className={cx(styles.btn, { [styles.active]: isActive })}` | Using clsx/classnames |
| With global class | `` className={`${styles.btn} global-class`} `` | Mix module + global |

## CSS Module Syntax

### Local Scoping (default)
```css
/* All classes are local by default */
.button { background: blue; }
/* Output: .Button_button_1a2b3 { background: blue; } */
```

### Composes (within same module)
```css
.base {
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.primary {
  composes: base;
  background: #0055CC;
  color: white;
}
```

### Composes (from another module)
```css
.cardHeader {
  composes: heading spacing from './shared.module.css';
}
```

### Global Styles Escape
```css
/* Target global class without hashing */
:global(.container) {
  max-width: 1200px;
  margin: 0 auto;
}

/* Mix local and global selectors */
.localClass :global(.globalClass) {
  color: red;
}
```

### Local Selector Explicit
```css
:local(.heading) {
  font-size: 1.25rem;
}
```

### Scoped @keyframes
```css
/* Animation names are also hashed */
@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

.element {
  animation: slideIn 0.3s ease;
}
```

## SCSS Modules
```scss
// Card.module.scss
$radius: 8px;

.card {
  border-radius: $radius;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  &__title {
    font-size: 1.25rem;
    composes: heading from './shared.module.scss';
  }
}
```

## TypeScript Support

### Global Declaration
```ts
// global.d.ts
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
```

### Generated Declarations
```ts
// Button.module.css.d.ts (auto-generated)
export const base: string;
export const primary: string;
export const secondary: string;
```

## Common Patterns

### Button Variants with Composes
```css
.base {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  min-height: 44px;
}
.primary { composes: base; background: blue; color: white; }
.secondary { composes: base; background: gray; color: white; }
.danger { composes: base; background: red; color: white; }
```

### Conditional Classes in React
```jsx
function Button({ variant = 'primary', disabled, children }) {
  return (
    <button
      className={[
        styles.base,
        styles[variant],
        disabled ? styles.disabled : ''
      ].filter(Boolean).join(' ')}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
```

### Using clsx Library
```jsx
import clsx from 'clsx';

function Alert({ type, show }) {
  return (
    <div className={clsx(styles.alert, styles[type], !show && styles.hidden)}>
      Alert message
    </div>
  );
}
```

## Build Tools Support

| Tool | Support | Config Needed |
|------|---------|---------------|
| Webpack | ✅ Full | css-loader with modules: true |
| Vite | ✅ Full | None (built-in) |
| Next.js | ✅ Full | None (built-in) |
| Parcel | ✅ Full | None (built-in) |
| Rollup | ✅ Via plugin | @rollup/plugin-postcss |
| Esbuild | ✅ Via plugin | esbuild-css-modules-plugin |

## Best Practices
- Use `camelCase` class names for easy JS access (`styles.myClass` not `styles['my-class']`)
- Keep one component per `.module.css` file (co-located with component)
- Use `composes` for style reuse instead of repeating properties
- Use `:global()` sparingly — prefer component-level styles when possible
- Co-locate `.module.css` files next to their component files
- Combine with SCSS for variables, mixins, and nesting
- Use generated `.d.ts` files or a global module declaration for TypeScript
- In production, class names are minified — debug with readable names in dev mode

## DevTools Tips
- In development, class names show as `ComponentName_className_hash` for easy debugging
- Search for class names by component name in DevTools
- Check that class names are hashed in production (short strings like `_1a2b3`)
- Use the `computed` styles panel to trace composed styles

## Production Considerations
- CSS Modules produce smaller bundles than CSS-in-JS (no runtime)
- Class name minification reduces CSS file size in production
- Code-split CSS is automatically extracted per component/chunk
- CSS Modules work with CSS extraction plugins (MiniCssExtractPlugin)
