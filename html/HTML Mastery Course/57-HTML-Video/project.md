# Module 57 Mini Project: Video Streaming Dashboard

## Project Overview

Build a **Video Streaming Dashboard** — a single-page web application that loads videos, displays them with a custom player, provides playlist management, thumbnail preview scrubbing, and supports Picture-in-Picture mode. This project demonstrates mastery of the `<video>` element, custom controls, the Fullscreen and PiP APIs, and responsive video design.

## Learning Objectives

- Implement video playback with multiple source formats and fallbacks
- Build a fully custom video player with overlay controls
- Implement thumbnail preview on seek (frame scrubbing)
- Integrate Picture-in-Picture and Fullscreen APIs
- Manage playlists with auto-advance
- Handle video lifecycle events and error states
- Create responsive video layouts

## Requirements

### Video Player
- Custom overlay controls that fade on inactivity
- Play/Pause with large center button overlay
- Seek bar with time display (current / total)
- Volume slider with mute toggle
- Playback speed selector (0.5x, 1x, 1.5x, 2x)
- Fullscreen toggle
- Picture-in-Picture toggle

### Thumbnail Scrubbing
- Seek bar generates a thumbnail preview while dragging
- Use a hidden canvas element to capture video frames
- Preview pops up above the seek bar thumb

### Playlist
- Sidebar playlist with at least 6 demo video entries
- Click to load and play a video
- Currently playing item highlighted
- Auto-advance to next video on end
- Loop playlist

### Advanced Features
- Keyboard shortcuts (Space, arrows, M, F, P)
- Media Session API integration
- Buffering indicator (spinner when waiting)
- Error state with retry option
- Responsive layout (sidebar collapses on mobile)

## Project Structure

```
video-dashboard/
├── index.html       # Main HTML file
├── style.css        # Styling (inline or separate)
└── script.js        # JavaScript (inline or separate)
```

## Step-by-Step Implementation

### Step 1: HTML Structure
1. Main layout: player area on left/center, playlist sidebar on right
2. Hidden video element connected to custom controls overlay
3. Canvas element for thumbnail preview (hidden by default)
4. Playlist container with video items
5. Loading spinner overlay

### Step 2: CSS Styling
1. Dark theme with glass-morphism effect on controls
2. Controls positioned at bottom with gradient background
3. Thumbnail preview positioned above seek bar
4. Sidebar playlist with scroll
5. Smooth animations for control visibility
6. Mobile-responsive breakpoints

### Step 3: JavaScript Implementation
1. **Player Engine**: Video events, custom control wiring, seek/volume management
2. **Thumbnail Generator**: Canvas-based frame capture on seek input
3. **Playlist Engine**: Array of video objects, render, selection, auto-advance
4. **Fullscreen & PiP**: API integration with button states
5. **Keyboard Shortcuts**: Keydown event handler
6. **Media Session**: Metadata and action handlers
7. **Buffering State**: Show/hide spinner based on waiting event
8. **Error Handling**: Display error overlay with retry option

### Step 4: Testing
1. Test all player controls individually
2. Verify thumbnail scrubbing works smoothly
3. Test playlist navigation and auto-advance
4. Test fullscreen and PiP modes
5. Test keyboard shortcuts
6. Verify responsive layout
7. Test error states (invalid URL, network failure)

## Complete Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Video Streaming Dashboard</title>
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0f0f14; color: white; overflow: hidden; height: 100vh; }
.dashboard { display: flex; height: 100vh; }
.player-section { flex: 1; display: flex; flex-direction: column; position: relative; background: #000; }
.video-container { flex: 1; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
.video-container video { width: 100%; height: 100%; object-fit: contain; }
.center-play { position: absolute; font-size: 72px; color: rgba(255,255,255,0.7); cursor: pointer; transition: all 0.2s; opacity: 0; }
.video-container:hover .center-play { opacity: 1; }
.center-play:hover { transform: scale(1.1); color: white; }
.controls-overlay { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.9)); padding: 30px 20px 16px; transition: opacity 0.3s; }
.controls-overlay.hidden { opacity: 0; pointer-events: none; }
.controls-row { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; flex-wrap: wrap; }
.controls-row:last-child { margin-bottom: 0; }
.controls-row button { background: none; border: none; color: white; font-size: 18px; cursor: pointer; padding: 6px; opacity: 0.85; transition: 0.2s; }
.controls-row button:hover { opacity: 1; transform: scale(1.1); }
#playBtn { font-size: 24px; }
.seek-container { display: flex; align-items: center; gap: 10px; flex: 1; position: relative; }
.seek-container input[type="range"] { flex: 1; height: 5px; -webkit-appearance: none; background: rgba(255,255,255,0.2); border-radius: 3px; outline: none; cursor: pointer; }
.seek-container input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; width: 16px; height: 16px; background: #e94560; border-radius: 50%; cursor: pointer; }
.time { font-size: 13px; color: rgba(255,255,255,0.7); font-variant-numeric: tabular-nums; min-width: 35px; }
.volume-wrap { display: flex; align-items: center; gap: 6px; }
.volume-wrap input[type="range"] { width: 80px; height: 4px; }
#speedSelect { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; cursor: pointer; }
#thumbnailPreview { position: absolute; bottom: 40px; left: 0; width: 160px; height: 90px; border: 2px solid white; border-radius: 6px; display: none; box-shadow: 0 4px 20px rgba(0,0,0,0.5); pointer-events: none; background: #000; z-index: 10; }
.spinner { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 48px; height: 48px; border: 4px solid rgba(255,255,255,0.2); border-top-color: #e94560; border-radius: 50%; animation: spin 0.8s linear infinite; display: none; z-index: 5; }
@keyframes spin { to { transform: translate(-50%, -50%) rotate(360deg); } }
.error-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.85); display: none; align-items: center; justify-content: center; flex-direction: column; gap: 16px; z-index: 20; }
.error-overlay p { font-size: 18px; color: #ff6b6b; }
.error-overlay button { background: #e94560; color: white; border: none; padding: 10px 24px; border-radius: 8px; cursor: pointer; font-size: 14px; }
.sidebar { width: 300px; background: #1a1a2e; display: flex; flex-direction: column; border-left: 1px solid rgba(255,255,255,0.05); }
.sidebar h2 { padding: 16px 20px; font-size: 16px; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.05); }
.playlist { flex: 1; overflow-y: auto; }
.playlist::-webkit-scrollbar { width: 6px; }
.playlist::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }
.track { display: flex; align-items: center; gap: 12px; padding: 12px 20px; cursor: pointer; transition: 0.2s; border-bottom: 1px solid rgba(255,255,255,0.03); }
.track:hover { background: rgba(255,255,255,0.05); }
.track.active { background: rgba(233,69,96,0.15); border-left: 3px solid #e94560; }
.track .thumb { width: 80px; height: 45px; background: #2a2a3e; border-radius: 4px; flex-shrink: 0; overflow: hidden; }
.track .thumb img { width: 100%; height: 100%; object-fit: cover; }
.track .info { flex: 1; min-width: 0; }
.track .info .title { font-size: 13px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.track .info .meta { font-size: 11px; color: rgba(255,255,255,0.4); margin-top: 2px; }
@media (max-width: 768px) { .sidebar { display: none; } }
#pipBtn.active, #fsBtn.active { color: #e94560; }
</style>
</head>
<body>
<div class="dashboard">
  <div class="player-section">
    <div class="video-container" id="videoContainer">
      <video id="mainVideo" preload="metadata">
        <source src="" type="video/mp4">
      </video>
      <div class="center-play" id="centerPlay">▶</div>
      <div class="spinner" id="spinner"></div>
      <div class="error-overlay" id="errorOverlay">
        <p>⚠️ Playback Error</p>
        <button onclick="retryPlayback()">Retry</button>
      </div>
      <canvas id="thumbnailPreview"></canvas>
      <div class="controls-overlay" id="controls">
        <div class="controls-row">
          <button id="playBtn">▶</button>
          <div class="seek-container">
            <span class="time" id="currentTime">0:00</span>
            <input type="range" id="seekBar" value="0" min="0" max="100" step="0.1">
            <span class="time" id="totalTime">0:00</span>
          </div>
        </div>
        <div class="controls-row">
          <div class="volume-wrap">
            <button id="muteBtn">🔊</button>
            <input type="range" id="volumeBar" min="0" max="1" step="0.05" value="0.7">
          </div>
          <select id="speedSelect">
            <option value="0.5">0.5x</option>
            <option value="1" selected>1x</option>
            <option value="1.5">1.5x</option>
            <option value="2">2x</option>
          </select>
          <button id="pipBtn" title="Picture-in-Picture">📌</button>
          <button id="fsBtn" title="Fullscreen">⛶</button>
        </div>
      </div>
    </div>
  </div>
  <div class="sidebar">
    <h2>📋 Playlist</h2>
    <div class="playlist" id="playlist"></div>
  </div>
</div>

<script>
// Video data (using freely available test videos)
const videos = [
  { title: 'Big Buck Bunny', src: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '0:10' },
  { title: 'Sample Video 1', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp4', duration: '3:45' },
  { title: 'Sample Video 2', src: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '0:10' },
  { title: 'Demo Reel', src: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '0:10' },
  { title: 'Tutorial Preview', src: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '0:10' },
  { title: 'Product Showcase', src: 'https://www.w3schools.com/html/mov_bbb.mp4', duration: '0:10' },
];

const video = document.getElementById('mainVideo');
const playBtn = document.getElementById('playBtn');
const centerPlay = document.getElementById('centerPlay');
const seekBar = document.getElementById('seekBar');
const volumeBar = document.getElementById('volumeBar');
const muteBtn = document.getElementById('muteBtn');
const fsBtn = document.getElementById('fsBtn');
const pipBtn = document.getElementById('pipBtn');
const speedSelect = document.getElementById('speedSelect');
const currentTime = document.getElementById('currentTime');
const totalTime = document.getElementById('totalTime');
const controls = document.getElementById('controls');
const playlistEl = document.getElementById('playlist');
const spinner = document.getElementById('spinner');
const errorOverlay = document.getElementById('errorOverlay');
const thumbnailCanvas = document.getElementById('thumbnailPreview');
const thumbCtx = thumbnailCanvas.getContext('2d');
const videoContainer = document.getElementById('videoContainer');

let currentTrack = 0;
let isSeeking = false;
let hideTimer = null;

thumbnailCanvas.width = 160;
thumbnailCanvas.height = 90;

function renderPlaylist() {
  playlistEl.innerHTML = '';
  videos.forEach((v, i) => {
    const div = document.createElement('div');
    div.className = 'track' + (i === currentTrack ? ' active' : '');
    div.innerHTML = `
      <div class="thumb"><img src="https://picsum.photos/seed/vid${i}/160/90" alt=""></div>
      <div class="info">
        <div class="title">${v.title}</div>
        <div class="meta">${v.duration} • MP4</div>
      </div>
    `;
    div.addEventListener('click', () => loadTrack(i));
    playlistEl.appendChild(div);
  });
}

function loadTrack(index) {
  currentTrack = index;
  const v = videos[index];
  video.src = v.src;
  video.currentTime = 0;
  video.play().catch(() => {});
  renderPlaylist();
  updateMediaSession(v);
}

function togglePlay() {
  if (video.paused) { video.play().catch(() => {}); } else { video.pause(); }
}

playBtn.addEventListener('click', togglePlay);
centerPlay.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);

video.addEventListener('play', () => { playBtn.textContent = '⏸'; centerPlay.style.display = 'none'; });
video.addEventListener('pause', () => { playBtn.textContent = '▶'; centerPlay.style.display = 'block'; });

video.addEventListener('loadedmetadata', () => {
  totalTime.textContent = formatTime(video.duration);
  seekBar.max = video.duration || 100;
});
video.addEventListener('timeupdate', () => {
  if (!isSeeking) {
    seekBar.value = video.currentTime;
    currentTime.textContent = formatTime(video.currentTime);
  }
});
seekBar.addEventListener('input', () => {
  isSeeking = true;
  const t = parseFloat(seekBar.value);
  currentTime.textContent = formatTime(t);
  video.currentTime = t;
  thumbCtx.drawImage(video, 0, 0, 160, 90);
});
seekBar.addEventListener('change', () => { isSeeking = false; });
seekBar.addEventListener('mouseenter', () => { thumbnailCanvas.style.display = 'block'; });
seekBar.addEventListener('mouseleave', () => { thumbnailCanvas.style.display = 'none'; });

volumeBar.addEventListener('input', () => { video.volume = parseFloat(volumeBar.value); muteBtn.textContent = video.volume === 0 ? '🔇' : '🔊'; });
muteBtn.addEventListener('click', () => { video.muted = !video.muted; muteBtn.textContent = video.muted ? '🔇' : '🔊'; });
speedSelect.addEventListener('change', () => { video.playbackRate = parseFloat(speedSelect.value); });

fsBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) { videoContainer.requestFullscreen(); } else { document.exitFullscreen(); }
});
pipBtn.addEventListener('click', () => {
  if (document.pictureInPictureElement) { document.exitPictureInPicture(); } else { video.requestPictureInPicture().catch(() => {}); }
});
video.addEventListener('enterpictureinpicture', () => pipBtn.classList.add('active'));
video.addEventListener('leavepictureinpicture', () => pipBtn.classList.remove('active'));
document.addEventListener('fullscreenchange', () => { fsBtn.classList.toggle('active', !!document.fullscreenElement); });

video.addEventListener('ended', () => {
  const next = (currentTrack + 1) % videos.length;
  loadTrack(next);
});

video.addEventListener('waiting', () => { spinner.style.display = 'block'; });
video.addEventListener('playing', () => { spinner.style.display = 'none'; });
video.addEventListener('canplay', () => { spinner.style.display = 'none'; });

video.addEventListener('error', () => { errorOverlay.style.display = 'flex'; });
function retryPlayback() { errorOverlay.style.display = 'none'; loadTrack(currentTrack); }

function updateMediaSession(v) {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: v.title,
      artist: 'Video Dashboard',
      album: 'HTML Mastery Course',
    });
    navigator.mediaSession.setActionHandler('play', () => video.play());
    navigator.mediaSession.setActionHandler('pause', () => video.pause());
    navigator.mediaSession.setActionHandler('previoustrack', () => loadTrack((currentTrack - 1 + videos.length) % videos.length));
    navigator.mediaSession.setActionHandler('nexttrack', () => loadTrack((currentTrack + 1) % videos.length));
  }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
  switch(e.key) {
    case ' ': e.preventDefault(); togglePlay(); break;
    case 'ArrowLeft': video.currentTime = Math.max(0, video.currentTime - 5); break;
    case 'ArrowRight': video.currentTime = Math.min(video.duration, video.currentTime + 5); break;
    case 'm': case 'M': muteBtn.click(); break;
    case 'f': case 'F': fsBtn.click(); break;
    case 'p': case 'P': pipBtn.click(); break;
    case 'n': case 'N': loadTrack((currentTrack + 1) % videos.length); break;
  }
});

// Auto-hide controls
function resetHideTimer() { controls.classList.remove('hidden'); clearTimeout(hideTimer); hideTimer = setTimeout(() => { if (!video.paused) controls.classList.add('hidden'); }, 3000); }
videoContainer.addEventListener('mousemove', resetHideTimer);
videoContainer.addEventListener('mouseenter', () => controls.classList.remove('hidden'));
videoContainer.addEventListener('mouseleave', () => { if (!video.paused) controls.classList.add('hidden'); });

function formatTime(s) {
  if (isNaN(s) || !isFinite(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60).toString().padStart(2, '0');
  return `${m}:${sec}`;
}

renderPlaylist();
loadTrack(0);
</script>
</body>
</html>
```

## Bonus Challenges

1. **Playlist Drag & Drop**: Allow reordering playlist items via drag and drop
2. **Video Chapters**: Add chapter markers on the seek bar based on a WebVTT file
3. **Speed Preview**: Show a real-time speed indicator when changing playback rate
4. **Equalizer Overlay**: Add a canvas-based equalizer overlay on the video
5. **Keyboard Seek Preview**: Show thumbnail when seeking with arrow keys
6. **Picture-in-Picture Controls**: Add custom controls overlay for PiP window

## Submission Checklist

- [ ] Custom video player with all controls functional
- [ ] Thumbnail scrubbing works on seek bar hover/drag
- [ ] Playlist displays and navigates correctly
- [ ] Auto-advance to next video works
- [ ] Fullscreen and Picture-in-Picture modes functional
- [ ] Keyboard shortcuts work
- [ ] Media Session API integrated
- [ ] Buffering indicator shows during loading
- [ ] Error state displays and retry works
- [ ] Responsive layout works on mobile
- [ ] Controls auto-hide on inactivity
