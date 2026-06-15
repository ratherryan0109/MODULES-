# Module 56: HTML Audio

## Introduction

The HTML `<audio>` element allows web developers to embed sound content directly into web pages without requiring third-party plugins. Since its introduction in HTML5, the audio element has revolutionized how we deliver music, podcasts, notifications, and other sound experiences on the web. This module covers everything from basic audio embedding to advanced programmatic control using JavaScript.

## Learning Objectives

By the end of this module, you will be able to:
- Embed audio files using the `<audio>` element with multiple source formats
- Configure playback controls, autoplay, looping, and preloading
- Manipulate audio programmatically using the JavaScript Audio API
- Implement audio visualizations and custom controls
- Handle cross-browser compatibility with source fallbacks
- Optimize audio delivery for performance and accessibility

## Syntax and Attributes

### Basic Syntax

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
```

### Core Attributes

| Attribute     | Value         | Description                                          |
|---------------|---------------|------------------------------------------------------|
| `controls`    | (boolean)     | Displays browser-native playback controls            |
| `autoplay`    | (boolean)     | Starts playback automatically (subject to policies)  |
| `loop`        | (boolean)     | Repeats the audio indefinitely                       |
| `muted`       | (boolean)     | Starts audio in a muted state                        |
| `preload`     | none/metadata/auto| Hints what to load before playback               |
| `src`         | URL           | Direct audio file URL (alternative to `<source>`)    |

### The `<source>` Element

The `<source>` element provides multiple format options for fallback:

```html
<source src="file.mp3" type="audio/mpeg">
<source src="file.ogg" type="audio/ogg">
<source src="file.wav" type="audio/wav">
```

### Supported Audio Formats

| Format | Codec   | Browser Support                                      |
|--------|---------|------------------------------------------------------|
| MP3    | AAC     | Universal                                            |
| OGG    | Vorbis  | Firefox, Chrome, Opera                                |
| WAV    | PCM     | Universal                                            |
| AAC    | AAC     | Safari, iOS                                          |
| FLAC   | FLAC    | Chrome, Firefox, Opera                                |
| WebM   | Opus    | Chrome, Firefox, Opera                                |

## Examples

### Example 1: Basic Audio with Controls

```html
<audio controls>
  <source src="music.mp3" type="audio/mpeg">
  <source src="music.ogg" type="audio/ogg">
  <p>Your browser does not support HTML5 audio.</p>
</audio>
```

### Example 2: Autoplay with Loop (Muted Required)

```html
<audio autoplay loop muted>
  <source src="background.mp3" type="audio/mpeg">
</audio>
```

Browsers block autoplay with sound. The `muted` attribute allows autoplay to function.

### Example 3: Preloading Strategies

```html
<audio controls preload="metadata">
  <source src="podcast.mp3" type="audio/mpeg">
</audio>
```

- `none`: Do not load anything until play is clicked
- `metadata`: Load only metadata (duration, etc.)
- `auto`: Load the entire audio file

### Example 4: Multiple Audio Sources

```html
<audio controls preload="auto">
  <source src="track.mp3" type="audio/mpeg">
  <source src="track.ogg" type="audio/ogg">
  <source src="track.wav" type="audio/wav">
  <source src="track.m4a" type="audio/mp4">
  <p>Download <a href="track.mp3">the audio file</a>.</p>
</audio>
```

## JavaScript Audio API

### The HTMLAudioElement Object

```javascript
const audio = new Audio('music.mp3');
audio.play();

// Or access existing element
const audioEl = document.querySelector('audio');
audioEl.play();
```

### Key Properties

| Property       | Type    | Description                           |
|----------------|---------|---------------------------------------|
| `currentTime`  | float   | Get/set playback position in seconds  |
| `duration`     | float   | Total duration of audio (read-only)   |
| `volume`       | 0.0-1.0 | Get/set volume level                  |
| `paused`       | boolean | Is audio paused? (read-only)          |
| `ended`        | boolean | Has audio finished? (read-only)       |
| `muted`        | boolean | Get/set muted state                   |
| `playbackRate` | float   | Playback speed (0.5 = half, 2.0 = twice) |
| `loop`         | boolean | Get/set looping state                 |

### Key Methods

| Method     | Description                               |
|------------|-------------------------------------------|
| `play()`   | Start or resume playback (returns Promise)|
| `pause()`  | Pause playback                            |
| `load()`   | Reload the audio element                  |
| `canPlayType(type)` | Check format support           |

### Key Events

| Event           | Description                               |
|-----------------|-------------------------------------------|
| `canplay`       | Enough data to play through               |
| `canplaythrough`| Can play entire file without buffering     |
| `loadedmetadata`| Duration and dimensions loaded            |
| `timeupdate`    | Current playback position changed         |
| `ended`         | Playback completed                        |
| `play`          | Playback started                          |
| `pause`         | Playback paused                           |
| `volumechange`  | Volume or mute changed                    |
| `error`         | An error occurred                         |

## Custom Audio Player

```html
<div class="custom-player">
  <button id="playBtn">▶</button>
  <input type="range" id="seek" value="0" step="0.1">
  <span id="current">0:00</span> / <span id="duration">0:00</span>
  <input type="range" id="volume" min="0" max="1" step="0.05">
</div>

<script>
  const audio = new Audio('track.mp3');
  const playBtn = document.getElementById('playBtn');
  const seek = document.getElementById('seek');

  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = '⏸';
    } else {
      audio.pause();
      playBtn.textContent = '▶';
    }
  });

  audio.addEventListener('timeupdate', () => {
    seek.value = (audio.currentTime / audio.duration) * 100;
    document.getElementById('current').textContent =
      formatTime(audio.currentTime);
  });

  audio.addEventListener('loadedmetadata', () => {
    document.getElementById('duration').textContent =
      formatTime(audio.duration);
  });

  seek.addEventListener('input', () => {
    audio.currentTime = (seek.value / 100) * audio.duration;
  });

  function formatTime(s) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  }
</script>
```

## Audio Visualization with Canvas

```javascript
const audio = new Audio('track.mp3');
const context = new AudioContext();
const source = context.createMediaElementSource(audio);
const analyser = context.createAnalyser();
source.connect(analyser);
analyser.connect(context.destination);

const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

function visualize() {
  requestAnimationFrame(visualize);
  analyser.getByteFrequencyData(dataArray);
  // Draw frequency bars on canvas
  canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
  const barWidth = (canvas.width / bufferLength) * 2.5;
  dataArray.forEach((value, i) => {
    const barHeight = value / 2;
    canvasCtx.fillStyle = `rgb(${barHeight + 100}, 50, 200)`;
    canvasCtx.fillRect(i * barWidth, canvas.height - barHeight, barWidth, barHeight);
  });
}
```

## Common Mistakes

1. **Forgetting muted attribute for autoplay**: Modern browsers block autoplay with sound. Always add `muted` if you need autoplay.

2. **Not providing multiple source formats**: MP3 alone excludes some Firefox/Chrome users who prefer OGG. Always provide at least MP3 and OGG.

3. **Ignoring the Promise from play()**: `audio.play()` returns a Promise that can reject if autoplay is denied. Always catch errors:

```javascript
audio.play().catch(err => console.warn('Autoplay blocked:', err));
```

4. **Using preload="auto" on every audio**: This wastes bandwidth on pages with many audio files. Use `metadata` or `none` for non-critical audio.

5. **Not setting correct MIME types**: Wrong MIME types cause browser to reject sources. Always use `audio/mpeg` for MP3, `audio/ogg` for OGG.

6. **Overriding browser controls without fallback**: If you hide `controls` and build custom ones, ensure they work without JavaScript.

7. **Not handling the context restriction**: AudioContext requires user interaction before resuming in most browsers.

## Best Practices

1. **Always provide fallback text** between `<audio>` tags for accessibility and legacy browsers.

2. **Use `preload="metadata"` by default** to balance performance with user experience.

3. **Compress audio files** using tools like FFmpeg to reduce loading times without sacrificing quality.

4. **Respect user preferences** — never autoplay audio with sound without explicit consent.

5. **Use the Web Audio API** for advanced audio processing, not just the `<audio>` element.

6. **Implement keyboard shortcuts** (space for play/pause) for custom players.

7. **Test across browsers** — Safari handles audio differently than Chrome and Firefox.

8. **Provide download links** as a fallback for users whose browsers don't support audio.

9. **Use analytics to detect autoplay failures** via the Promise rejection path.

10. **Consider using Media Session API** to integrate with system media controls:

```javascript
if ('mediaSession' in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: 'Song Title',
    artist: 'Artist Name',
    album: 'Album Name',
    artwork: [{ src: 'cover.jpg', sizes: '512x512', type: 'image/jpeg' }]
  });
}
```

## Summary Notes

- The `<audio>` element is the HTML5 standard for embedding sound
- Use multiple `<source>` elements with different formats for cross-browser support
- MP3 + OGG covers nearly all browsers
- Autoplay requires the muted attribute in modern browsers
- The JavaScript Audio API provides full programmatic control
- `audio.play()` returns a Promise — always handle rejection
- Web Audio API is separate from the `<audio>` element for advanced processing
- Preloading strategies balance performance against user experience
- Custom controls need keyboard and screen-reader accessibility
- Always test audio across multiple browsers and devices
