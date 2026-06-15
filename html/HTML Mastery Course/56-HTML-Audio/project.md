# Module 56 Mini Project: Audio Dashboard

## Project Overview

Build a fully functional **Audio Dashboard** — a single-page web application that combines an audio player with a playlist, a real-time frequency visualizer, and keyboard shortcuts. This project will test your understanding of the `<audio>` element, the Web Audio API, Canvas visualization, and custom UI development.

## Learning Objectives

- Implement audio playback with multiple source fallbacks
- Build custom controls with JavaScript
- Connect audio to the Web Audio API for visualization
- Render real-time frequency data on Canvas
- Handle audio lifecycle, errors, and state management
- Integrate keyboard shortcuts and Media Session API

## Requirements

### Player Controls
- Play/Pause button with icon toggle
- Seek slider (range input) synchronized with playback
- Current time and total duration display (format: m:ss)
- Volume slider with mute toggle
- Playback speed selector (0.5x, 1x, 1.5x, 2x)

### Playlist
- Minimum 4 tracks (use free SoundHelix URLs)
- Visual indicator showing currently playing track
- Click to select and play a track
- Auto-advance to next track when current ends
- Loop back to first track after last

### Visualizer
- Canvas-based frequency bar visualization
- At least 128 frequency bins
- Color gradient based on frequency range (HSL)
- Responsive to window resizing

### Keyboard Shortcuts
- `Space`: Play/Pause
- `Left Arrow`: Seek back 5 seconds
- `Right Arrow`: Seek forward 5 seconds
- `M`: Mute/Unmute
- `N`: Next track
- `P`: Previous track
- `+` / `-`: Volume up/down

### Polish
- Smooth transitions and hover effects
- Loading state when audio is buffering
- Error handling with user-friendly messages
- Media Session API integration for system controls
- Responsive design (works on mobile and desktop)

## Project Structure

```
audio-dashboard/
├── index.html       # Main HTML file
├── style.css        # Styles (can be inline)
└── script.js        # JavaScript logic (can be inline)
```

## Step-by-Step Implementation

### Step 1: HTML Structure
1. Create the main layout: header, player section, playlist section, visualizer canvas
2. Add the audio element (hidden) with source fallbacks
3. Build custom control buttons, sliders, and time displays
4. Create the playlist container

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Audio Dashboard</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="dashboard">
        <header>
            <h1>Audio Dashboard</h1>
            <div class="now-playing">No track selected</div>
        </header>

        <div class="visualizer-container">
            <canvas id="visualizer"></canvas>
        </div>

        <div class="player-controls">
            <div class="controls-row">
                <button id="prevBtn" title="Previous">⏮</button>
                <button id="playBtn" title="Play/Pause">▶</button>
                <button id="nextBtn" title="Next">⏭</button>
            </div>
            <div class="seek-row">
                <span id="currentTime">0:00</span>
                <input type="range" id="seekBar" value="0" min="0" max="100" step="0.1">
                <span id="totalTime">0:00</span>
            </div>
            <div class="controls-row">
                <div class="volume-control">
                    <button id="muteBtn" title="Mute">🔊</button>
                    <input type="range" id="volumeBar" min="0" max="1" step="0.05" value="0.7">
                </div>
                <select id="speedSelect">
                    <option value="0.5">0.5x</option>
                    <option value="1" selected>1x</option>
                    <option value="1.5">1.5x</option>
                    <option value="2">2x</option>
                </select>
            </div>
        </div>

        <div class="playlist" id="playlist"></div>
    </div>

    <audio id="audioPlayer" preload="metadata">
        <source src="track1.mp3" type="audio/mpeg">
        <source src="track1.ogg" type="audio/ogg">
        Your browser does not support audio.
    </audio>

    <script src="script.js"></script>
</body>
</html>
```

### Step 2: CSS Styling
1. Dark theme with gradient backgrounds
2. Glassmorphism effects for controls
3. Smooth hover and active states
4. Responsive grid layout
5. Canvas fills available width with fixed height

### Step 3: JavaScript Logic
1. **Audio Setup**: Get audio element reference, set up event listeners
2. **Playlist**: Array of track objects, render function, click handlers
3. **Controls**: Wire play/pause, seek, volume, speed, mute
4. **Visualizer**: AudioContext, AnalyserNode, requestAnimationFrame loop
5. **Keyboard shortcuts**: keydown event listener
6. **Media Session**: Set metadata and action handlers
7. **Error handling**: Catch play() rejections, audio error events

### Step 4: Testing
1. Test each control individually
2. Verify visualizer responds to audio
3. Test keyboard shortcuts
4. Test mobile layout
5. Test playlist navigation and auto-advance

## Complete Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Audio Dashboard</title>
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { 
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  color: white; min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px;
}
.dashboard { max-width: 700px; width: 100%; background: rgba(255,255,255,0.05); backdrop-filter: blur(20px); border-radius: 24px; padding: 30px; border: 1px solid rgba(255,255,255,0.1); }
header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px; }
header h1 { font-size: 22px; font-weight: 700; background: linear-gradient(90deg, #667eea, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.now-playing { color: rgba(255,255,255,0.6); font-size: 14px; }
.visualizer-container { background: rgba(0,0,0,0.3); border-radius: 16px; overflow: hidden; margin-bottom: 20px; }
#visualizer { width: 100%; height: 200px; display: block; }
.player-controls { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 20px; margin-bottom: 20px; }
.controls-row { display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 12px; flex-wrap: wrap; }
.controls-row:last-child { margin-bottom: 0; }
.controls-row button { background: rgba(255,255,255,0.1); border: none; color: white; width: 44px; height: 44px; border-radius: 50%; font-size: 16px; cursor: pointer; transition: all 0.2s; }
.controls-row button:hover { background: rgba(255,255,255,0.2); transform: scale(1.05); }
#playBtn { width: 56px; height: 56px; font-size: 20px; background: linear-gradient(135deg, #667eea, #764ba2); }
.seek-row { display: flex; align-items: center; gap: 12px; }
.seek-row span { font-size: 13px; color: rgba(255,255,255,0.7); font-variant-numeric: tabular-nums; min-width: 35px; }
.seek-row input[type="range"] { flex: 1; }
.volume-control { display: flex; align-items: center; gap: 8px; }
.volume-control button { width: 36px; height: 36px; font-size: 14px; }
.volume-control input[type="range"] { width: 100px; }
#speedSelect { background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; padding: 6px 12px; font-size: 13px; cursor: pointer; }
input[type="range"] { -webkit-appearance: none; appearance: none; height: 6px; background: rgba(255,255,255,0.2); border-radius: 3px; outline: none; }
input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 16px; height: 16px; background: white; border-radius: 50%; cursor: pointer; }
.playlist { background: rgba(255,255,255,0.05); border-radius: 16px; overflow: hidden; }
.track { display: flex; justify-content: space-between; align-items: center; padding: 14px 18px; cursor: pointer; transition: all 0.2s; border-bottom: 1px solid rgba(255,255,255,0.05); }
.track:last-child { border-bottom: none; }
.track:hover { background: rgba(255,255,255,0.08); }
.track.active { background: rgba(102,126,234,0.2); border-left: 3px solid #667eea; }
.track .title { font-size: 14px; }
.track .duration { font-size: 12px; color: rgba(255,255,255,0.5); }
</style>
</head>
<body>

<div class="dashboard">
  <header>
    <h1>Audio Dashboard</h1>
    <div class="now-playing" id="nowPlaying">No track selected</div>
  </header>

  <div class="visualizer-container">
    <canvas id="visualizer"></canvas>
  </div>

  <div class="player-controls">
    <div class="controls-row">
      <button id="prevBtn" title="Previous (P)">⏮</button>
      <button id="playBtn" title="Play/Pause (Space)">▶</button>
      <button id="nextBtn" title="Next (N)">⏭</button>
    </div>
    <div class="seek-row">
      <span id="currentTime">0:00</span>
      <input type="range" id="seekBar" value="0" min="0" max="100" step="0.1">
      <span id="totalTime">0:00</span>
    </div>
    <div class="controls-row">
      <div class="volume-control">
        <button id="muteBtn" title="Mute (M)">🔊</button>
        <input type="range" id="volumeBar" min="0" max="1" step="0.05" value="0.7">
      </div>
      <select id="speedSelect">
        <option value="0.5">0.5x</option>
        <option value="1" selected>1x</option>
        <option value="1.5">1.5x</option>
        <option value="2">2x</option>
      </select>
    </div>
  </div>

  <div class="playlist" id="playlist"></div>
</div>

<audio id="audioPlayer" preload="metadata"></audio>

<script>
const tracks = [
  { title: 'Ambient Waves', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', duration: '3:45' },
  { title: 'Electric Dreams', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', duration: '4:12' },
  { title: 'Urban Sunset', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', duration: '5:02' },
  { title: 'Deep Space', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', duration: '3:30' },
  { title: 'Morning Light', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', duration: '4:45' },
];

const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const seekBar = document.getElementById('seekBar');
const volumeBar = document.getElementById('volumeBar');
const muteBtn = document.getElementById('muteBtn');
const speedSelect = document.getElementById('speedSelect');
const currentTimeEl = document.getElementById('currentTime');
const totalTimeEl = document.getElementById('totalTime');
const nowPlaying = document.getElementById('nowPlaying');
const playlistEl = document.getElementById('playlist');
const canvas = document.getElementById('visualizer');
const ctx = canvas.getContext('2d');

let currentTrack = 0;
let isSeeking = false;
let audioCtx = null;
let analyser = null;
let source = null;
let animId = null;

// Initialize
function initAudio() {
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  source = audioCtx.createMediaElementSource(audio);
  analyser = audioCtx.createAnalyser();
  analyser.fftSize = 256;
  source.connect(analyser);
  analyser.connect(audioCtx.destination);
}

function loadTrack(index) {
  currentTrack = index;
  audio.src = tracks[index].src;
  audio.currentTime = 0;
  nowPlaying.textContent = `Now Playing: ${tracks[index].title}`;
  renderPlaylist();
  audio.play().catch(() => {});
}

function renderPlaylist() {
  playlistEl.innerHTML = '';
  tracks.forEach((t, i) => {
    const div = document.createElement('div');
    div.className = 'track' + (i === currentTrack ? ' active' : '');
    div.innerHTML = `<span class="title">${i+1}. ${t.title}</span><span class="duration">${t.duration}</span>`;
    div.addEventListener('click', () => loadTrack(i));
    playlistEl.appendChild(div);
  });
}

// Controls
playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play().catch(() => {});
  } else {
    audio.pause();
  }
});

audio.addEventListener('play', () => { playBtn.textContent = '⏸'; startViz(); });
audio.addEventListener('pause', () => { playBtn.textContent = '▶'; stopViz(); });
audio.addEventListener('ended', () => {
  const next = (currentTrack + 1) % tracks.length;
  loadTrack(next);
});

audio.addEventListener('loadedmetadata', () => {
  totalTimeEl.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
  if (!isSeeking) {
    seekBar.value = (audio.currentTime / audio.duration) * 100 || 0;
    currentTimeEl.textContent = formatTime(audio.currentTime);
  }
});

seekBar.addEventListener('input', () => { isSeeking = true; });
seekBar.addEventListener('change', () => {
  audio.currentTime = (seekBar.value / 100) * audio.duration;
  isSeeking = false;
});

volumeBar.addEventListener('input', () => {
  audio.volume = parseFloat(volumeBar.value);
  muteBtn.textContent = audio.volume === 0 ? '🔇' : '🔊';
});

muteBtn.addEventListener('click', () => {
  audio.muted = !audio.muted;
  muteBtn.textContent = audio.muted ? '🔇' : '🔊';
});

speedSelect.addEventListener('change', () => {
  audio.playbackRate = parseFloat(speedSelect.value);
});

prevBtn.addEventListener('click', () => {
  const prev = (currentTrack - 1 + tracks.length) % tracks.length;
  loadTrack(prev);
});

nextBtn.addEventListener('click', () => {
  const next = (currentTrack + 1) % tracks.length;
  loadTrack(next);
});

// Visualizer
function startViz() {
  if (animId) return;
  if (!audioCtx) initAudio();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  canvas.width = canvas.offsetWidth;
  canvas.height = 200;

  function draw() {
    animId = requestAnimationFrame(draw);
    analyser.getByteFrequencyData(dataArray);
    ctx.clearRect(0, 0, canvas.width, 200);
    const barWidth = (canvas.width / bufferLength) * 2;
    let x = 0;
    for (let i = 0; i < bufferLength; i++) {
      const val = dataArray[i];
      const barHeight = (val / 255) * 200;
      const hue = (i / bufferLength) * 300;
      ctx.fillStyle = `hsl(${hue}, 90%, ${40 + (val / 255) * 40}%)`;
      ctx.fillRect(x, 200 - barHeight, barWidth - 1, barHeight);
      x += barWidth;
    }
  }
  draw();
}

function stopViz() {
  if (animId) {
    cancelAnimationFrame(animId);
    animId = null;
  }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
  switch(e.key) {
    case ' ': e.preventDefault(); playBtn.click(); break;
    case 'ArrowLeft': audio.currentTime = Math.max(0, audio.currentTime - 5); break;
    case 'ArrowRight': audio.currentTime = Math.min(audio.duration, audio.currentTime + 5); break;
    case 'm': case 'M': muteBtn.click(); break;
    case 'n': case 'N': nextBtn.click(); break;
    case 'p': case 'P': prevBtn.click(); break;
    case '+': audio.volume = Math.min(1, audio.volume + 0.1); break;
    case '-': audio.volume = Math.max(0, audio.volume - 0.1); break;
  }
});

// Media Session
if ('mediaSession' in navigator) {
  navigator.mediaSession.setActionHandler('play', () => audio.play());
  navigator.mediaSession.setActionHandler('pause', () => audio.pause());
  navigator.mediaSession.setActionHandler('previoustrack', () => prevBtn.click());
  navigator.mediaSession.setActionHandler('nexttrack', () => nextBtn.click());
}

// Window resize
window.addEventListener('resize', () => {
  if (canvas) canvas.width = canvas.offsetWidth;
});

function formatTime(s) {
  if (isNaN(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60).toString().padStart(2, '0');
  return `${m}:${sec}`;
}

// Init
renderPlaylist();
loadTrack(0);
</script>
</body>
</html>
```

## Bonus Challenges

1. **Drag and Drop**: Allow users to drag audio files into the dashboard to play them
2. **Equalizer**: Add a 3-band equalizer using BiquadFilterNodes
3. **Waveform Display**: Show a waveform visualization alongside the frequency bars
4. **Lyrics Display**: Add a synchronized lyrics panel (requires timed text input)
5. **Audio Recording**: Add a record button that captures microphone input and adds it as a playlist item
6. **Theme Switcher**: Add light/dark mode toggle

## Submission Checklist

- [ ] Player controls work (play, pause, seek, volume, speed)
- [ ] Playlist displays and navigates correctly
- [ ] Visualizer shows real-time frequency bars
- [ ] Keyboard shortcuts function as expected
- [ ] Media Session API integrated
- [ ] Responsive design on mobile and desktop
- [ ] Error states handled gracefully
- [ ] Code is clean, commented, and well-organized
