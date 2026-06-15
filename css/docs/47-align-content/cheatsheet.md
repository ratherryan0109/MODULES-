# Align Content - Quick Reference

## Values

| Value | Behavior |
|-------|----------|
| `normal`/`stretch` (default) | Lines stretch to fill cross-axis space |
| `flex-start` | Lines packed at cross-axis start |
| `flex-end` | Lines packed at cross-axis end |
| `center` | Lines centered on cross axis |
| `space-between` | First line at start, last at end, equal spacing |
| `space-around` | Equal spacing around each line |
| `space-evenly` | Completely equal distribution |

## Requirements
- Must have `flex-wrap: wrap` or `wrap-reverse`
- Multiple lines of items
- Extra space on the cross axis

## align-content vs align-items

| Property | Affects | Requires |
|----------|---------|----------|
| `align-content` | Distribution of lines | Multi-line container |
| `align-items` | Alignment of items within their line | Any flex container |
