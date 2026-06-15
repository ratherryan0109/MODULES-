# SCSS Cheatsheet

## Variables
```scss
$primary: #0055CC;
$spacing: 1rem;
$font-stack: system-ui, sans-serif;
```

## Nesting
```scss
.card {
  background: white;
  &__title { font-size: 1.25rem; }
  &--featured { border: 2px solid $primary; }
  .btn { margin-top: $spacing; }
}
```

## Mixins
```scss
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
@mixin respond-to($bp) {
  @media (min-width: $bp) { @content; }
}
@include flex-center;
@include respond-to(768px) { grid-template-columns: 1fr 1fr; }
```

## Functions
```scss
@function rem($px) { @return $px / 16 * 1rem; }
font-size: rem(16); // → 1rem
```

## Extend
```scss
%btn-base { display: inline-flex; padding: 0.5rem 1rem; }
.btn-primary { @extend %btn-base; background: $primary; }
```

## Control Directives
```scss
@if $dark { background: black; } @else { background: white; }
@for $i from 1 through 4 { .col-#{$i} { width: 25% * $i; } }
@each $color in blue, red, green { .text-#{$color} { color: $color; } }
```

## Maps
```scss
$breakpoints: (sm: 640px, md: 768px, lg: 1024px);
$bp: map-get($breakpoints, md);
@each $name, $px in $breakpoints { ... }
```

## File Architecture
```
scss/
├── abstracts/
│   ├── _variables.scss
│   └── _mixins.scss
├── base/
│   ├── _reset.scss
│   └── _typography.scss
├── components/
│   ├── _button.scss
│   └── _card.scss
├── layout/
│   ├── _header.scss
│   └── _grid.scss
└── main.scss  // @use 'abstracts/variables'; etc.
```

## Commands
```bash
# Install
npm install -D sass

# Watch
npx sass --watch scss/main.scss css/main.css

# Build (compressed)
npx sass scss/main.scss css/main.css --style compressed

# Sourcemaps
npx sass scss/main.scss css/main.css --source-map
```
