# CSS Comments — Cheatsheet

## Syntax
```css
/* Single-line comment */
/* Multi-line
   comment */
```

## Common Uses
- Section headers: `/* ===== HEADER ===== */`
- Sub-sections: `/* --- Navigation --- */`
- Inline explanations: `color: blue; /* brand color */`
- Disable code: wrap rules in `/* */`
- TODOs: `/* TODO: Add responsive styles */`
- FIXMEs: `/* FIXME: Breaks in IE11 */`
- HACKs: `/* HACK: Negative margin compensates for... */`

## Best Practices
- ✅ Explain WHY, not WHAT
- ✅ Use consistent section header formats
- ✅ Keep comments brief and relevant
- ✅ Update comments when updating code
- ✅ Remove commented-out code before deployment
- ❌ Don't state the obvious (`color: red; /* makes text red */`)
- ❌ Don't use nested comments (`/* /* */ */`)
- ❌ Don't use stale/outdated comments

## Production
- Minify CSS to strip comments in production
- Tools: CSSNano, CleanCSS, UglifyCSS
- Keep comments only in development files
