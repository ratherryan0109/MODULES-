# HTML Audio — Cheatsheet

## Basic Syntax

```html
<!-- Simple audio with native controls -->
<audio controls>
  <source src="file.mp3" type="audio/mpeg">
  <source src="file.ogg" type="audio/ogg">
  <source src="file.wav" type="audio/wav">
  Fallback text for unsupported browsers
</audio>

<!-- Audio with all attributes -->
<audio src="file.mp3" controls autoplay loop muted preload="metadata">
  Your browser does not support audio.
</audio>
```

## Attributes Quick Reference

| Attribute  | Values                        | Description                              |
|------------|-------------------------------|------------------------------------------|
| `controls` | (boolean)                     | Shows native play/pause/volume controls  |
| `autoplay` | (boolean)                     | Starts playback on load (requires muted) |
| `loop`     | (boolean)                     | Repeats audio indefinitely               |
| `muted`    | (boolean)                     | Starts audio muted                       |
| `preload`  | `none` `metadata` `auto`      | What data to download before play        |
| `src`      | URL                           | Direct audio source URL                  |

## Audio Formats & MIME Types

| Format | MIME Type              | Support   |
|--------|------------------------|-----------|
| MP3    | `audio/mpeg`           | Universal |
| OGG    | `audio/ogg`            | FF, Ch, Op|
| WAV    | `audio/wav`            | Universal |
| AAC    | `audio/aac`            | Safari, iOS|
| FLAC   | `audio/flac`           | FF, Ch, Op|
| WebM   | `audio/webm; codecs="opus"` | Ch, FF, Op|

## JavaScript API

### Creating Audio

```javascript
// Method 1: Constructor
const audio = new Audio('file.mp3');

// Method 2: DOM element
const audio = document.createElement('audio');
audio.src = 'file.mp3';

// Method 3: Query existing
const audio = document.querySelector('audio');
```

### Properties

| Property        | Type      | Description                          |
|-----------------|-----------|--------------------------------------|
| `currentTime`   | Number    | Position in seconds (get/set)        |
| `duration`      | Number    | Total length in seconds (read-only)  |
| `volume`        | 0.0–1.0   | Volume level (get/set)               |
| `muted`         | Boolean   | Mute state (get/set)                 |
| `paused`        | Boolean   | Is paused? (read-only)               |
| `ended`         | Boolean   | Has playback ended? (read-only)      |
| `playbackRate`  | Number    | Speed multiplier (0.5–2.0+)          |
| `loop`          | Boolean   | Loop state (get/set)                 |
| `src`           | String    | Source URL (get/set)                 |
| `preload`       | String    | Preload behavior (get/set)           |
| `seeking`       | Boolean   | Is user seeking? (read-only)         |

### Methods

| Method                        | Returns   | Description                  |
|-------------------------------|-----------|------------------------------|
| `play()`                      | Promise   | Start/resume playback        |
| `pause()`                     | void      | Pause playback               |
| `load()`                      | void      | Reload media                 |
| `canPlayType(type)`           | String    | Check format support         |

### Events

| Event             | Fires When                              |
|-------------------|-----------------------------------------|
| `loadstart`       | Browser starts loading                  |
| `loadedmetadata`  | Duration and dimensions available       |
| `loadeddata`      | First frame of media loaded             |
| `canplay`         | Enough data to play                     |
| `canplaythrough`  | Can play entire file without buffering  |
| `play`            | Playback started                        |
| `pause`           | Playback paused                         |
| `playing`         | Playback actually resumes               |
| `timeupdate`      | currentTime changed                     |
| `ended`           | Playback completed                      |
| `volumechange`    | Volume or mute changed                  |
| `seeking`         | Seek operation started                  |
| `seeked`          | Seek operation completed                |
| `waiting`         | Buffering due to insufficient data      |
| `error`           | Media error occurred                    |
| `abort`           | Loading aborted                         |

## Error Handling

```javascript
audio.play().catch(err => {
  if (err.name === 'NotAllowedError') {
    console.log('Autoplay blocked');
  }
});

audio.addEventListener('error', () => {
  switch (audio.error.code) {
    case MediaError.MEDIA_ERR_ABORTED:       // 1
    case MediaError.MEDIA_ERR_NETWORK:       // 2
    case MediaError.MEDIA_ERR_DECODE:        // 3
    case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED: // 4
  }
});
```

## Web Audio API Integration

```javascript
const audioCtx = new AudioContext();
const audio = new Audio('file.mp3');
const source = audioCtx.createMediaElementSource(audio);
const analyser = audioCtx.createAnalyser();

source.connect(analyser);
analyser.connect(audioCtx.destination);

// Resume on user gesture
document.addEventListener('click', () => {
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
});
```

## Media Session API

```javascript
if ('mediaSession' in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: 'Track Title',
    artist: 'Artist Name',
    album: 'Album Name',
    artwork: [{ src: 'cover.jpg', sizes: '512x512', type: 'image/jpeg' }]
  });

  navigator.mediaSession.setActionHandler('play', () => audio.play());
  navigator.mediaSession.setActionHandler('pause', () => audio.pause());
  navigator.mediaSession.setActionHandler('previoustrack', () => prev());
  navigator.mediaSession.setActionHandler('nexttrack', () => next());
}
```

## Custom Controls Pattern

```javascript
// HTML: <div id="controls"><button id="playBtn">▶</button><input type="range" id="seekBar"></div>

const audio = new Audio('file.mp3');
const isSeeking = false;

// Play/Pause
playBtn.addEventListener('click', () => {
  audio.paused ? audio.play() : audio.pause();
});

// Sync seek bar
audio.addEventListener('timeupdate', () => {
  if (!isSeeking) {
    seekBar.value = (audio.currentTime / audio.duration) * 100;
  }
});

// Seek on input
seekBar.addEventListener('input', () => { isSeeking = true; });
seekBar.addEventListener('change', () => {
  audio.currentTime = (seekBar.value / 100) * audio.duration;
  isSeeking = false;
});
```

## Format Detection

```javascript
const a = document.createElement('audio');
const support = {
  mp3:  a.canPlayType('audio/mpeg'),
  ogg:  a.canPlayType('audio/ogg; codecs="vorbis"'),
  wav:  a.canPlayType('audio/wav'),
  aac:  a.canPlayType('audio/aac'),
  flac: a.canPlayType('audio/flac'),
  opus: a.canPlayType('audio/webm; codecs="opus"')
};
```

## AudioContext States

| State       | Description                              |
|-------------|------------------------------------------|
| `suspended` | Context exists but no audio (default)    |
| `running`   | Audio is processing normally             |
| `closed`    | Context has been closed, cannot restart  |
