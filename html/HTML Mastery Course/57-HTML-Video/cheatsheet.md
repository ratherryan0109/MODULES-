# HTML Video — Cheatsheet

## Basic Syntax

```html
<!-- Simple video with native controls -->
<video controls width="640" height="360">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <p>Your browser does not support video.</p>
</video>

<!-- Background video -->
<video autoplay loop muted playsinline>
  <source src="bg.mp4" type="video/mp4">
</video>

<!-- Video with captions -->
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track src="captions.vtt" kind="captions" srclang="en" label="English" default>
</video>
```

## Attributes Quick Reference

| Attribute     | Values                    | Description                             |
|---------------|---------------------------|-----------------------------------------|
| `controls`    | (boolean)                 | Shows native controls                   |
| `autoplay`    | (boolean)                 | Auto-starts (requires muted)            |
| `loop`        | (boolean)                 | Repeats indefinitely                    |
| `muted`       | (boolean)                 | Starts muted                            |
| `poster`      | URL                       | Preview image                           |
| `width`       | pixels                    | Display width                           |
| `height`      | pixels                    | Display height                          |
| `preload`     | `none` `metadata` `auto`  | What data to download before play       |
| `playsinline` | (boolean)                 | Inline playback on iOS                  |
| `src`         | URL                       | Direct video source                     |

## Video Formats & MIME Types

| Format       | Codec      | MIME Type                                | Support           |
|--------------|------------|------------------------------------------|-------------------|
| MP4          | H.264      | `video/mp4`                              | Universal         |
| MP4          | HEVC/H.265 | `video/mp4; codecs="hev1"`              | Safari, iOS, Edge |
| WebM         | VP8        | `video/webm; codecs="vp8"`               | FF, Ch, Op        |
| WebM         | VP9        | `video/webm; codecs="vp9"`               | FF, Ch, Op        |
| OGG          | Theora     | `video/ogg; codecs="theora"`             | FF, Ch (legacy)   |
| AV1          | AV1        | `video/mp4; codecs="av01"`              | FF, Ch, Op (new)  |

## Track Attributes

| Attribute  | Values                                    | Description          |
|------------|--------------------------------------------|----------------------|
| `kind`     | `captions` `subtitles` `descriptions` `chapters` `metadata` | Track type |
| `label`    | string                                     | Display name         |
| `srclang`  | language code (e.g., `en`, `es`)          | Language             |
| `default`  | boolean                                    | Default track        |

## JavaScript API

### Properties

| Property        | Type      | Description                          |
|-----------------|-----------|--------------------------------------|
| `currentTime`   | Number    | Position in seconds (get/set)        |
| `duration`      | Number    | Total length (read-only)             |
| `volume`        | 0.0–1.0   | Volume level                         |
| `muted`         | Boolean   | Mute state                           |
| `paused`        | Boolean   | Is paused?                           |
| `ended`         | Boolean   | Has ended?                           |
| `playbackRate`  | Number    | Speed multiplier                     |
| `loop`          | Boolean   | Loop state                           |
| `videoWidth`    | Number    | Intrinsic width (read-only)          |
| `videoHeight`   | Number    | Intrinsic height (read-only)         |
| `poster`        | String    | Poster image URL                     |
| `readyState`    | 0–4       | Data readiness level                 |
| `buffered`      | TimeRanges| Buffered time ranges                 |
| `seekable`      | TimeRanges| Seekable time ranges                 |
| `played`        | TimeRanges| Time ranges already played           |
| `error`         | MediaError| Error object (if any)                |

### Codec Detection

```javascript
const v = document.createElement('video');
v.canPlayType('video/mp4; codecs="avc1.42E01E"');  // H.264 baseline
v.canPlayType('video/webm; codecs="vp9"');           // VP9
v.canPlayType('video/mp4; codecs="hev1"');           // H.265
```

### Events

| Event             | Fires When                              |
|-------------------|-----------------------------------------|
| `loadstart`       | Browser starts loading                  |
| `durationchange`  | Duration changed                        |
| `loadedmetadata`  | Dimensions & duration available         |
| `loadeddata`      | First frame loaded                      |
| `canplay`         | Enough data to play                     |
| `canplaythrough`  | Can play entire file without buffering  |
| `play`            | Playback started                        |
| `pause`           | Playback paused                         |
| `playing`         | Playback actually resumes               |
| `timeupdate`      | currentTime changed (~4Hz)              |
| `ended`           | Playback completed                      |
| `waiting`         | Buffering data                          |
| `seeking`         | Seek started                            |
| `seeked`          | Seek completed                          |
| `progress`        | Download progress                       |
| `error`           | Error occurred                          |
| `suspend`         | Loading suspended                       |
| `abort`           | Loading aborted                         |
| `emptied`         | Media element emptied                   |
| `stalled`         | Data stalled                            |

## Fullscreen API

```javascript
// Enter fullscreen
element.requestFullscreen();

// Exit fullscreen
document.exitFullscreen();

// Check fullscreen element
document.fullscreenElement;

// Events
document.addEventListener('fullscreenchange', handler);
document.addEventListener('fullscreenerror', handler);
```

## Picture-in-Picture API

```javascript
// Enter PiP
await video.requestPictureInPicture();

// Exit PiP
await document.exitPictureInPicture();

// Check PiP element
document.pictureInPictureElement;

// Events
video.addEventListener('enterpictureinpicture', handler);
video.addEventListener('leavepictureinpicture', handler);
```

## Custom Controls Pattern

```javascript
const video = document.querySelector('video');

// Play/Pause
playBtn.addEventListener('click', () => {
  video.paused ? video.play() : video.pause();
});
video.addEventListener('play', () => playBtn.textContent = '⏸');
video.addEventListener('pause', () => playBtn.textContent = '▶');

// Seek
video.addEventListener('timeupdate', () => {
  seekBar.value = (video.currentTime / video.duration) * 100;
});
seekBar.addEventListener('input', () => {
  video.currentTime = (seekBar.value / 100) * video.duration;
});

// Volume
volumeBar.addEventListener('input', () => {
  video.volume = parseFloat(volumeBar.value);
});
```

## CSS for Responsive Video

```css
video {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Aspect ratio container */
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
}
.video-container video {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
}
```

## Media Source Extensions (MSE)

```javascript
const mediaSource = new MediaSource();
video.src = URL.createObjectURL(mediaSource);

mediaSource.addEventListener('sourceopen', () => {
  const sourceBuffer = mediaSource.addSourceBuffer('video/mp4; codecs="avc1.42E01E"');
  fetch('segment.m4s')
    .then(r => r.arrayBuffer())
    .then(buf => sourceBuffer.appendBuffer(buf));
});
```

## Detection Example

```javascript
const v = document.createElement('video');
const support = {
  mp4: v.canPlayType('video/mp4'),
  webm: v.canPlayType('video/webm'),
  h264: v.canPlayType('video/mp4; codecs="avc1.42E01E"'),
  vp9: v.canPlayType('video/webm; codecs="vp9"'),
};
```
