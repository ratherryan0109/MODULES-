# CSS Backgrounds — Cheatsheet
## Properties
- `background-color`: Sets solid color
- `background-image`: url('path.jpg')
- `background-repeat`: repeat, no-repeat, repeat-x, repeat-y
- `background-position`: center, top left, 50% 50%, 20px 30px
- `background-size`: auto, cover, contain, 100px 50px
- `background-attachment`: scroll, fixed, local
- `background-clip`: border-box, padding-box, content-box
- `background-origin`: border-box, padding-box, content-box

## Shorthand
`background: color image repeat position / size attachment;`

## Gradients
- `linear-gradient(direction, color1, color2)`
- `radial-gradient(shape size at position, color1, color2)`
- `repeating-linear-gradient(...)`
- `repeating-radial-gradient(...)`

## Multiple Backgrounds
`background: url(img1.png) no-repeat top, url(img2.png) repeat bottom, #f0f0f0;`

## Tips
- Always pair background-image with background-color (fallback)
- Use `cover` for hero sections, `contain` for logos/patterns
- Gradients replace images for simple patterns (faster loading)
