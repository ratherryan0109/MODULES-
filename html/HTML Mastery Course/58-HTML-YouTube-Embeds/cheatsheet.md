# HTML YouTube Embeds — Cheatsheet

## Basic Embed

```html
<iframe 
  width="560" height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
```

## Privacy-Enhanced (No Cookies)

```html
<iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID" ...></iframe>
```

## URL Parameters

| Parameter          | Values     | Description                                |
|--------------------|------------|--------------------------------------------|
| `autoplay`         | 0, 1       | Auto-play (requires mute)                  |
| `mute`             | 0, 1       | Start muted                                |
| `loop`             | 0, 1       | Loop (requires playlist param)             |
| `playlist`         | ID list    | Comma-separated video IDs for loop/playlist|
| `controls`         | 0, 1       | Show player controls                       |
| `modestbranding`   | 0, 1       | Minimal YouTube branding                   |
| `rel`              | 0, 1       | Related videos: 0=same channel             |
| `start`            | seconds    | Start position                             |
| `end`              | seconds    | End position                               |
| `cc_load_policy`   | 0, 1       | Force captions display                     |
| `color`            | red, white | Progress bar color                         |
| `iv_load_policy`   | 1, 3       | Annotations: 1=show, 3=hide                |
| `fs`               | 0, 1       | Allow fullscreen button                    |
| `hl`               | code       | Interface language (e.g., en, es)          |
| `enablejsapi`      | 0, 1       | Enable JavaScript API                      |
| `origin`           | domain     | Security origin for API                    |
| `playsinline`      | 0, 1       | Inline playback on iOS                     |

## Query String Combinator

```
https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=0&modestbranding=1&rel=0&start=30&end=60
```

## Responsive Embed

```css
/* Method 1: Padding trick (traditional) */
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
}
.video-container iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
}

/* Method 2: aspect-ratio (modern) */
iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
}
```

## IFrame Player API

### Loading the API

```html
<script src="https://www.youtube.com/iframe_api"></script>
```

### Creating a Player

```javascript
let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('elementId', {
    height: '315',
    width: '560',
    videoId: 'VIDEO_ID',
    playerVars: {
      'autoplay': 1,
      'controls': 1,
      'rel': 0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
      'onError': onPlayerError
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  // event.data = YT.PlayerState constant
}

function onPlayerError(event) {
  console.error('Error:', event.data);
}
```

### Player States

| Constant                       | Value | Description    |
|--------------------------------|-------|----------------|
| `YT.PlayerState.UNSTARTED`     | -1    | Not started    |
| `YT.PlayerState.ENDED`         | 0     | Finished       |
| `YT.PlayerState.PLAYING`       | 1     | Playing        |
| `YT.PlayerState.PAUSED`        | 2     | Paused         |
| `YT.PlayerState.BUFFERING`     | 3     | Buffering      |
| `YT.PlayerState.CUED`          | 5     | Video cued     |

### Methods

| Method                                      | Description                |
|---------------------------------------------|----------------------------|
| `playVideo()`                               | Start playback             |
| `pauseVideo()`                              | Pause playback             |
| `stopVideo()`                               | Stop and unload            |
| `seekTo(seconds, allowSeekAhead)`           | Seek to position           |
| `mute()` / `unMute()`                       | Toggle mute                |
| `isMuted()`                                 | Check mute state           |
| `setVolume(0-100)`                          | Set volume                 |
| `getVolume()`                               | Get volume                 |
| `setPlaybackRate(speed)`                    | Set speed (0.25–100)       |
| `getPlaybackRate()`                         | Get current speed          |
| `getAvailablePlaybackRates()`               | Array of supported speeds  |
| `loadVideoById(id, start, quality)`         | Load and play video        |
| `cueVideoById(id, start, quality)`          | Load without playing       |
| `loadPlaylist(idOrArray, index, start)`     | Load playlist              |
| `nextVideo()` / `previousVideo()`           | Navigate playlist          |
| `playVideoAt(index)`                        | Play specific in playlist  |
| `getCurrentTime()`                          | Current position (seconds) |
| `getDuration()`                             | Video duration (seconds)   |
| `getVideoLoadedFraction()`                  | Buffered fraction (0-1)    |
| `getPlayerState()`                          | Current state integer      |
| `getIframe()`                               | Get the iframe element     |
| `destroy()`                                 | Destroy player instance    |

### Error Codes

| Code | Description                          |
|------|--------------------------------------|
| 2    | Invalid parameter value              |
| 5    | HTML5 player error                   |
| 100  | Video not found or removed           |
| 101  | Embedding not allowed                |
| 150  | Embedding not allowed (same as 101)  |

## Thumbnail URLs

```
https://img.youtube.com/vi/VIDEO_ID/default.jpg        # 120x90
https://img.youtube.com/vi/VIDEO_ID/mqdefault.jpg       # 320x180
https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg       # 480x360
https://img.youtube.com/vi/VIDEO_ID/sddefault.jpg       # 640x480
https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg   # 1280x720
```

## Lazy Loading

```html
<iframe 
  src="" 
  data-src="https://www.youtube.com/embed/VIDEO_ID"
  loading="lazy"
  title="YouTube video">
</iframe>

<script>
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
});
document.querySelectorAll('iframe[data-src]').forEach(el => observer.observe(el));
</script>
```

## Accessibility

```html
<iframe 
  title="Descriptive video title"
  aria-label="YouTube video: Video Title"
  ...
>
```

## Media Session with YouTube

```javascript
if ('mediaSession' in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: 'Video Title',
    artist: 'Channel Name',
    artwork: [{ src: 'https://img.youtube.com/vi/ID/maxresdefault.jpg', sizes: '1280x720' }]
  });
}
```
