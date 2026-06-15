# Module 57: HTML Video

## Introduction

The HTML `<video>` element enables web developers to embed video content directly into web pages without requiring third-party plugins like Flash. Introduced in HTML5, the video element has become the standard way to deliver video on the modern web, supporting multiple formats, adaptive streaming, accessibility features, and full programmatic control via the JavaScript Video API.

## Learning Objectives

By the end of this module, you will be able to:
- Embed video files using the `<video>` element with multiple source formats
- Configure playback controls, poster images, sizing, and preloading
- Manipulate video programmatically using JavaScript
- Implement custom video controls and overlays
- Handle cross-browser compatibility with format fallbacks
- Optimize video delivery for performance and accessibility

## Syntax and Attributes

### Basic Syntax

```html
<video controls width="640" height="360">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <source src="video.ogv" type="video/ogg">
  Your browser does not support the video element.
</video>
```

### Core Attributes

| Attribute     | Value         | Description                                          |
|---------------|---------------|------------------------------------------------------|
| `controls`    | (boolean)     | Displays browser-native video controls               |
| `autoplay`    | (boolean)     | Starts playback automatically (requires muted)       |
| `loop`        | (boolean)     | Repeats the video indefinitely                       |
| `muted`       | (boolean)     | Starts video in a muted state                        |
| `poster`      | URL           | Image shown before video starts                      |
| `width`       | pixels        | Video display width                                  |
| `height`      | pixels        | Video display height                                 |
| `preload`     | none/metadata/auto | Hints what to load before playback               |
| `playsinline` | (boolean)     | Play inline on mobile (no fullscreen)                |
| `src`         | URL           | Direct video file URL (alternative to `<source>`)    |

### Supported Video Formats

| Format | Codec    | Browser Support                                      |
|--------|----------|------------------------------------------------------|
| MP4    | H.264    | Universal                                            |
| WebM   | VP8/VP9  | Firefox, Chrome, Opera                                |
| OGV    | Theora   | Firefox, Chrome (legacy)                              |
| MP4    | HEVC/H.265| Safari, iOS, Edge                                   |

## JavaScript Video API

### HTMLVideoElement Properties

| Property        | Type    | Description                           |
|-----------------|---------|---------------------------------------|
| `currentTime`   | float   | Get/set playback position in seconds  |
| `duration`      | float   | Total duration (read-only)            |
| `volume`        | 0.0-1.0 | Get/set volume                        |
| `paused`        | boolean | Is paused? (read-only)                |
| `ended`         | boolean | Has video ended? (read-only)          |
| `muted`         | boolean | Get/set muted state                   |
| `playbackRate`  | float   | Playback speed multiplier             |
| `loop`          | boolean | Loop state                            |
| `videoWidth`    | pixels  | Intrinsic video width (read-only)     |
| `videoHeight`   | pixels  | Intrinsic video height (read-only)    |
| `poster`        | URL     | Poster image URL                      |
| `readyState`    | 0-4     | How much data is buffered             |
| `buffered`      | TimeRanges | Buffered time ranges               |
| `seekable`      | TimeRanges | Seekable time ranges               |

### Methods

| Method     | Description                               |
|------------|-------------------------------------------|
| `play()`   | Start/resume playback (returns Promise)   |
| `pause()`  | Pause playback                            |
| `load()`   | Reload the video element                  |
| `canPlayType(type)` | Check codec support            |

### Events

| Event           | Description                               |
|-----------------|-------------------------------------------|
| `loadedmetadata`| Duration and dimensions loaded            |
| `loadeddata`    | First frame of video loaded               |
| `canplay`       | Enough data to play                       |
| `canplaythrough`| Can play entire file without buffering    |
| `play`          | Playback started                          |
| `pause`         | Playback paused                           |
| `timeupdate`    | Current position changed                  |
| `ended`         | Playback completed                        |
| `waiting`       | Buffering data                            |
| `progress`      | Download progress                         |
| `fullscreenchange`| Fullscreen state changed               |
| `error`         | An error occurred                         |

## Examples

### Example 1: Basic Video

```html
<video controls width="640" height="360">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  <p>Your browser does not support video. <a href="movie.mp4">Download</a></p>
</video>
```

### Example 2: Video with Poster Image

```html
<video controls poster="thumbnail.jpg" width="640" height="360">
  <source src="movie.mp4" type="video/mp4">
</video>
```

### Example 3: Autoplay, Loop, Muted (Background Video)

```html
<video autoplay loop muted playsinline>
  <source src="bg-video.mp4" type="video/mp4">
</video>
```

### Example 4: Multiple Quality Sources

```html
<video controls>
  <source src="video-1080p.mp4" type="video/mp4" media="(min-width: 1200px)">
  <source src="video-720p.mp4" type="video/mp4" media="(min-width: 768px)">
  <source src="video-480p.mp4" type="video/mp4">
  <p>Fallback content</p>
</video>
```

## Custom Video Player

```html
<div class="video-wrapper">
  <video id="myVideo" width="100%">
    <source src="video.mp4" type="video/mp4">
  </video>
  <div class="controls">
    <button id="playBtn">▶</button>
    <input type="range" id="seekBar" value="0">
    <span id="current">0:00</span> / <span id="duration">0:00</span>
    <input type="range" id="volumeBar" min="0" max="1" step="0.05">
    <button id="fullscreenBtn">⛶</button>
  </div>
</div>
```

## Fullscreen API

```javascript
const video = document.querySelector('video');
const fsBtn = document.getElementById('fullscreenBtn');

fsBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});
```

## Picture-in-Picture

```javascript
const pipBtn = document.getElementById('pipBtn');

pipBtn.addEventListener('click', async () => {
  try {
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      await video.requestPictureInPicture();
    }
  } catch (err) {
    console.error('PiP error:', err);
  }
});
```

## Common Mistakes

1. **Not providing WebM fallback for MP4**: Safari/iOS prefer MP4/H.264, but Firefox/Chrome prefer WebM (VP9). Always provide both.

2. **Forgetting muted with autoplay**: All major browsers block autoplay with sound. Add both `autoplay` and `muted`.

3. **Not setting poster image**: The first frame showing as a black rectangle is unappealing. Always use a poster image.

4. **Ignoring playsinline on mobile**: Without `playsinline`, iOS Safari opens the video in fullscreen mode by default.

5. **Missing dimensions**: Not setting width/height causes layout shifts (CLS). Always specify dimensions.

6. **Overriding controls without fallback**: If you build custom controls, ensure keyboard accessibility.

7. **Not handling play() rejection**: Always `.catch()` the Play Promise to handle autoplay failures.

## Best Practices

1. **Provide multiple formats**: MP4 (H.264) + WebM (VP9) covers all modern browsers.

2. **Use responsive video sizing**: Set `max-width: 100%; height: auto` via CSS.

3. **Optimize video files**: Compress with FFmpeg, use appropriate bitrates, consider resolution.

4. **Implement lazy loading**: Load videos only when they enter the viewport using Intersection Observer.

5. **Add captions and subtitles**: Use the `<track>` element with WebVTT for accessibility.

```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track src="captions-en.vtt" kind="captions" srclang="en" label="English">
  <track src="subtitles-es.vtt" kind="subtitles" srclang="es" label="Spanish">
</video>
```

6. **Use Media Source Extensions (MSE)** for adaptive streaming (HLS/DASH).

7. **Implement keyboard shortcuts** for custom players.

8. **Test across devices**: iOS Safari, Android Chrome, desktop browsers.

9. **Consider bandwidth**: Use the Network Information API to serve appropriate quality.

10. **Enable Picture-in-Picture** for an enhanced user experience.

## Summary Notes

- `<video>` is the HTML5 standard for embedding video content
- MP4 (H.264) + WebM (VP9) provides the best format coverage
- The `controls` attribute provides native UI for playback
- Autoplay requires `muted` in modern browsers
- `playsinline` prevents automatic fullscreen on iOS
- `poster` provides a preview image before playback
- The JavaScript Video API mirrors the Audio API
- `video.play()` returns a Promise — always handle errors
- WebVTT tracks provide captions, subtitles, and chapters
- Picture-in-Picture and Fullscreen APIs enhance the viewing experience
- Always set dimensions to prevent Cumulative Layout Shift (CLS)
