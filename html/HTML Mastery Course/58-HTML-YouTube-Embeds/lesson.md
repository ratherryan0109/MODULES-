# Module 58: HTML YouTube Embeds

## Introduction

Embedding YouTube videos in web pages is one of the most common tasks for web developers. YouTube provides a powerful embed system using `<iframe>` elements with customizable parameters, a comprehensive JavaScript API (IFrame Player API), and support for advanced features like playlists, live streams, and 360° videos. This module covers everything from basic embedding to advanced programmatic control.

## Learning Objectives

By the end of this module, you will be able to:
- Embed YouTube videos using the standard iframe method
- Customize player appearance and behavior using URL parameters
- Control video playback programmatically with the YouTube IFrame Player API
- Implement playlists and video queues
- Handle player events (play, pause, state changes)
- Optimize embedded videos for performance and user experience

## Basic YouTube Embed

The standard method uses an `<iframe>` element with the video URL:

```html
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>
```

## Getting the Video ID

Every YouTube video has a unique ID in its URL:

```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
https://youtu.be/dQw4w9WgXcQ
https://www.youtube.com/embed/dQw4w9WgXcQ
```

The video ID is: `dQw4w9WgXcQ`

## URL Parameters

YouTube embed URLs accept query parameters to customize the player:

| Parameter | Values     | Description                                    |
|-----------|------------|------------------------------------------------|
| `autoplay`| 0 or 1     | Auto-play the video on load                    |
| `mute`    | 0 or 1     | Start video muted                              |
| `loop`    | 0 or 1     | Loop the video (requires playlist parameter)   |
| `controls`| 0 or 1     | Show player controls                           |
| `modestbranding` | 0 or 1 | Reduce YouTube branding                    |
| `rel`     | 0 or 1     | Show related videos from same channel (0) or any (1) |
| `showinfo`| 0 or 1     | Show video title and uploader (deprecated)     |
| `start`   | seconds    | Start video at a specific time                 |
| `end`     | seconds    | End video at a specific time                   |
| `playlist`| comma-separated IDs | Specify playlist IDs                |
| `cc_load_policy` | 0 or 1 | Force captions to be shown                  |
| `color`   | `red` or `white` | Progress bar color                     |
| `iv_load_policy` | 1 or 3 | Show video annotations (1=on, 3=off)    |
| `fs`      | 0 or 1     | Allow fullscreen button                       |
| `hl`      | language code | Player interface language                  |
| `enablejsapi` | 0 or 1  | Enable JavaScript API                         |
| `origin`  | domain     | Security origin for JS API                     |

### Example: Customized Embed

```html
<iframe 
  width="560" height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&modestbranding=1&rel=0"
  title="YouTube video"
  allow="autoplay; encrypted-media"
  allowfullscreen>
</iframe>
```

## Responsive YouTube Embeds

### CSS Method (Aspect Ratio Box)

```html
<style>
  .video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    max-width: 100%;
  }
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
    allowfullscreen>
  </iframe>
</div>
```

### CSS aspect-ratio Property (Modern)

```css
.video-container iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
}
```

## YouTube IFrame Player API

The IFrame Player API allows programmatic control of YouTube embeds.

### Loading the API

```html
<script>
  // Load the IFrame Player API
  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
</script>
```

### Creating a Player

```javascript
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '315',
    width: '560',
    videoId: 'dQw4w9WgXcQ',
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
  switch(event.data) {
    case YT.PlayerState.UNSTARTED:  // -1
    case YT.PlayerState.ENDED:      // 0
    case YT.PlayerState.PLAYING:    // 1
    case YT.PlayerState.PAUSED:     // 2
    case YT.PlayerState.BUFFERING:  // 3
    case YT.PlayerState.CUED:       // 5
  }
}

function onPlayerError(event) {
  console.error('Player error:', event.data);
}
```

### Player Methods

| Method                        | Description                          |
|-------------------------------|--------------------------------------|
| `playVideo()`                 | Start playback                        |
| `pauseVideo()`                | Pause playback                        |
| `stopVideo()`                 | Stop and unload video                 |
| `seekTo(seconds, allowSeekAhead)` | Seek to position                |
| `mute()`                      | Mute player                           |
| `unMute()`                    | Unmute player                         |
| `isMuted()`                   | Check if muted                         |
| `setVolume(0-100)`            | Set volume                            |
| `getVolume()`                 | Get current volume                     |
| `setPlaybackRate(speed)`      | Set playback speed                     |
| `getPlaybackRate()`           | Get playback speed                     |
| `getAvailablePlaybackRates()` | Get available speeds                   |
| `loadVideoById(videoId, startSeconds, quality)` | Load and play a video |
| `cueVideoById(videoId, startSeconds, quality)` | Queue a video (no play) |
| `loadPlaylist(playlistId, index, startSeconds)` | Load a playlist |
| `nextVideo()`                 | Next video in playlist                 |
| `previousVideo()`             | Previous video in playlist             |
| `playVideoAt(index)`          | Play specific video in playlist        |
| `setSize(width, height)`      | Resize player                          |
| `getCurrentTime()`            | Get current playback time              |
| `getDuration()`               | Get video duration                     |
| `getVideoLoadedFraction()`    | Get buffered fraction                  |
| `getPlayerState()`            | Get current player state               |
| `destroy()`                   | Destroy player instance                |

### Player Properties

| Property          | Description                              |
|-------------------|------------------------------------------|
| `player.getCurrentTime()` | Current playback position in seconds |
| `player.getDuration()`    | Total video duration in seconds    |
| `player.getVideoUrl()`    | URL of currently loaded video      |
| `player.getEmbedCode()`   | Embed code for current video       |

## Embedding Playlists

```html
<!-- Single video playlist -->
<iframe src="https://www.youtube.com/embed/VIDEO_ID?playlist=VIDEO_ID&loop=1">
</iframe>

<!-- Multiple videos -->
<iframe src="https://www.youtube.com/embed/VIDEO_ID?playlist=ID2,ID3,ID4">
</iframe>

<!-- YouTube playlist -->
<iframe src="https://www.youtube.com/embed/videoseries?list=PLAYLIST_ID">
</iframe>
```

## Privacy-Enhanced Mode

Use `www.youtube-nocookie.com` to prevent YouTube from tracking visitors:

```html
<iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
  allowfullscreen>
</iframe>
```

## Lazy Loading YouTube Embeds

Improve page load performance by loading embeds only when needed:

```html
<iframe 
  src="" 
  data-src="https://www.youtube.com/embed/VIDEO_ID"
  class="lazy-youtube"
  loading="lazy"
  allowfullscreen>
</iframe>

<script>
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const iframe = entry.target;
        iframe.src = iframe.dataset.src;
        observer.unobserve(iframe);
      }
    });
  });
  document.querySelectorAll('.lazy-youtube').forEach(el => observer.observe(el));
</script>
```

## Common Mistakes

1. **Not allowing fullscreen**: Always include `allowfullscreen` attribute.
2. **Missing allow attribute**: Required for autoplay and other features: `allow="autoplay; encrypted-media"`.
3. **Hardcoding dimensions**: Use responsive containers instead of fixed pixel sizes.
4. **Not using nocookie domain**: Consider privacy by using `youtube-nocookie.com`.
5. **Forgetting title attribute**: Accessibility requires a descriptive title.
6. **Autoplay without mute**: Autoplay works only when muted.
7. **Not handling API ready state**: Player methods called before API loads will fail.

## Best Practices

1. **Always use HTTPS**: YouTube embed URLs must use HTTPS.
2. **Responsive containers**: Use aspect ratio boxes or CSS aspect-ratio property.
3. **Lazy load off-screen embeds**: Use Intersection Observer or native loading=lazy.
4. **Minimize related videos**: Set `rel=0` to show related videos from your channel only.
5. **Use privacy-enhanced mode**: Replace `youtube.com` with `youtube-nocookie.com`.
6. **Provide a fallback thumbnail**: Show a clickable thumbnail image that loads the iframe on click.
7. **Handle API errors gracefully**: Always implement the onError event handler.
8. **Test across browsers**: Ensure embeds work in Chrome, Firefox, Safari, and Edge.
9. **Consider bandwidth**: Mobile users may prefer not to autoplay videos.

## Summary Notes

- YouTube embeds use `<iframe>` with `src="https://www.youtube.com/embed/VIDEO_ID"`
- URL parameters control autoplay, controls, looping, and more
- The IFrame Player API provides full programmatic control
- Responsive embeds require aspect ratio containers
- Privacy-enhanced mode uses `youtube-nocookie.com`
- Lazy loading improves initial page performance
- Always include `allowfullscreen` and `allow` attributes
- The API requires loading the `https://www.youtube.com/iframe_api` script
- Player states: UNSTARTED(-1), ENDED(0), PLAYING(1), PAUSED(2), BUFFERING(3), CUED(5)
- Autoplay requires the `mute` parameter in modern browsers
