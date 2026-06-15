# HTML Comments — Cheatsheet

## Comment Syntax

```html
<!-- This is an HTML comment -->
```

## Multi-line Comments

```html
<!--
    This is a multi-line
    HTML comment.
-->
```

## Commenting Out Code

```html
<!-- <p>This paragraph is hidden.</p> -->
```

## Common Comment Prefixes

| Prefix | Meaning | Example |
|--------|---------|---------|
| `TODO` | Unfinished task | `<!-- TODO: Add pagination -->` |
| `FIXME` | Known bug | `<!-- FIXME: Broken on mobile -->` |
| `HACK` | Workaround | `<!-- HACK: Temp fix for IE -->` |
| `NOTE` | Important note | `<!-- NOTE: Requires JS -->` |
| `REVIEW` | Needs review | `<!-- REVIEW: Optimize this -->` |
| `SECTION` | Section marker | `<!-- ===== HEADER ===== -->` |

## Section Markers

```html
<!-- ==================== -->
<!-- SECTION: HEADER       -->
<!-- ==================== -->
<header>...</header>
<!-- ==================== -->
<!-- END HEADER            -->
<!-- ==================== -->
```

## Rules
- ✅ Use comments to explain WHY
- ✅ Use section markers for large files
- ✅ Update comments when code changes
- ✅ Use prefix conventions (TODO, FIXME)
- ❌ NEVER put passwords, API keys, secrets
- ❌ Don't comment the obvious
- ❌ Don't leave commented-out code in production
- ❌ Don't nest comments

## Security Warning

```html
<!-- ❌ DANGER: These are visible in View Source! -->
<!-- Password: secret123 -->
<!-- API Key: sk-xxx -->
```

## VS Code Shortcut

Select text and press **Ctrl+/** to toggle comments.

## Minification

Most HTML minifiers remove all comments automatically. If you need to keep certain comments, check your minifier's configuration for comment preservation options.
