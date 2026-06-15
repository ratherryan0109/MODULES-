# Module 58 Mini Project: YouTube Video Hub

## Project Overview

Build a **YouTube Video Hub** — a single-page application that presents a curated collection of embedded videos in a responsive grid, with a featured video player, category filtering, search, and a "Watch Later" playlist using the YouTube IFrame Player API.

## Learning Objectives

- Master YouTube embed techniques (basic, privacy-enhanced, customized)
- Implement the IFrame Player API for programmatic control
- Build responsive video grid layouts
- Implement search and filtering functionality
- Create a persistent "Watch Later" queue
- Integrate keyboard shortcuts and Media Session API

## Requirements

### Featured Player
- Large video player with custom overlay controls
- Video information display (title, channel)
- Play/Pause, seek bar, volume, fullscreen
- IFrame Player API integration for state management

### Video Grid
- Curated collection of at least 8 videos
- Responsive grid layout (4 columns → 2 → 1)
- Each card shows thumbnail, title, channel, duration
- Click to load video in the featured player

### Categories/Filtering
- Category filter buttons (e.g., Music, Tech, Education, Entertainment)
- Filter videos by category with smooth transitions

### Search
- Real-time search filtering as user types
- Search by title or channel name

### Watch Later Queue
- Add videos to a "Watch Later" list
- Queue stored in localStorage for persistence
- Auto-play next video from queue when current ends
- Remove items from queue

## Project Structure

```
youtube-hub/
├── index.html       # Main HTML
├── style.css        # Styles
└── script.js        # JavaScript
```

## Step-by-Step Implementation

### Step 1: HTML Structure
1. Header with app title and search input
2. Featured player section with video player div and info
3. Category filter buttons
4. Video grid container
5. Watch Later sidebar or bottom section

### Step 2: Video Data
Create an array of video objects:
```javascript
const videos = [
  { id: 'dQw4w9WgXcQ', title: 'Never Gonna Give You Up', channel: 'Rick Astley', category: 'music', duration: '3:32' },
  // ... more videos
];
```

### Step 3: CSS Styling
1. Dark theme with accent colors
2. Responsive grid using CSS Grid
3. Card hover effects
4. Active filter button styling
5. Smooth transitions

### Step 4: JavaScript
1. **YouTube API**: Load API, create player, handle events
2. **Grid Rendering**: Dynamically render video cards based on current filter/search
3. **Search/Filter**: Real-time filtering with debouncing
4. **Queue Management**: Add/remove/persist/auto-play
5. **Keyboard Shortcuts**: Space for play/pause, arrows for seek
6. **Media Session**: Update metadata when video changes

## Complete Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>YouTube Video Hub</title>
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, -apple-system, sans-serif; background: #0f0f14; color: white; }
.app { max-width: 1200px; margin: 0 auto; padding: 20px; }
header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; flex-wrap: wrap; gap: 12px; }
header h1 { font-size: 24px; background: linear-gradient(90deg, #FF0000, #e94560); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
header input { padding: 10px 16px; background: #1a1a2e; border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; color: white; font-size: 14px; width: 280px; outline: none; }
header input:focus { border-color: #e94560; }
.featured { margin-bottom: 24px; }
.player-wrap { position: relative; padding-bottom: 56.25%; background: #000; border-radius: 12px; overflow: hidden; }
.player-wrap > div { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
.video-info { padding: 12px 0; display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px; }
.video-info h2 { font-size: 20px; font-weight: 600; }
.video-info p { color: rgba(255,255,255,0.5); font-size: 14px; }
.video-info button { background: #e94560; border: none; color: white; padding: 8px 16px; border-radius: 8px; cursor: pointer; font-size: 13px; transition: 0.2s; }
.video-info button:hover { opacity: 0.85; }
.filters { display: flex; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; }
.filters button { background: #1a1a2e; border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.6); padding: 8px 18px; border-radius: 20px; cursor: pointer; font-size: 13px; transition: 0.2s; }
.filters button:hover { border-color: #e94560; color: white; }
.filters button.active { background: #e94560; border-color: #e94560; color: white; }
.video-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; margin-bottom: 24px; }
.video-card { background: #1a1a2e; border-radius: 10px; overflow: hidden; cursor: pointer; transition: transform 0.2s; }
.video-card:hover { transform: translateY(-4px); }
.video-card img { width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block; }
.video-card .card-info { padding: 10px 12px; }
.video-card .card-info h3 { font-size: 14px; font-weight: 500; margin-bottom: 4px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.video-card .card-info p { font-size: 12px; color: rgba(255,255,255,0.4); }
.video-card .card-info .duration { float: right; }
.watch-later { background: #1a1a2e; border-radius: 12px; padding: 16px; }
.watch-later h3 { font-size: 16px; margin-bottom: 12px; display: flex; justify-content: space-between; }
.watch-later h3 button { background: none; border: none; color: #e94560; cursor: pointer; font-size: 13px; }
.wl-item { display: flex; align-items: center; gap: 10px; padding: 8px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
.wl-item:hover { background: rgba(255,255,255,0.05); }
.wl-item img { width: 60px; height: 34px; border-radius: 4px; object-fit: cover; }
.wl-item .info { flex: 1; min-width: 0; }
.wl-item .info .title { font-size: 13px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.wl-item .info .channel { font-size: 11px; color: rgba(255,255,255,0.4); }
.wl-item .remove { background: none; border: none; color: rgba(255,255,255,0.3); cursor: pointer; font-size: 14px; }
.wl-item .remove:hover { color: #e94560; }
.empty { color: rgba(255,255,255,0.3); font-size: 13px; padding: 16px; text-align: center; }
@media (max-width: 600px) { header input { width: 100%; } }
</style>
</head>
<body>
<div class="app">
  <header>
    <h1>▶ Video Hub</h1>
    <input type="text" id="searchInput" placeholder="Search videos..." oninput="filterVideos()">
  </header>
  
  <div class="featured">
    <div class="player-wrap"><div id="player"></div></div>
    <div class="video-info">
      <div>
        <h2 id="videoTitle">Select a video to play</h2>
        <p id="videoChannel"></p>
      </div>
      <button id="wlBtn" onclick="addToWatchLater()">+ Watch Later</button>
    </div>
  </div>
  
  <div class="filters" id="filters"></div>
  <div class="video-grid" id="grid"></div>
  
  <div class="watch-later">
    <h3>📋 Watch Later <button onclick="clearWatchLater()">Clear All</button></h3>
    <div id="wlList"></div>
  </div>
</div>

<script src="https://www.youtube.com/iframe_api"></script>
<script>
const allVideos = [
  { id: 'dQw4w9WgXcQ', title: 'Never Gonna Give You Up', channel: 'Rick Astley', category: 'music', duration: '3:32' },
  { id: 'jNQXAC9IVRw', title: 'Me at the zoo', channel: 'jawed', category: 'entertainment', duration: '0:19' },
  { id: '9bZkp7q19f0', title: 'GANGNAM STYLE', channel: 'officialpsy', category: 'music', duration: '4:13' },
  { id: 'kJQP7kiw5Fk', title: 'Despacito', channel: 'LuisFonsiVEVO', category: 'music', duration: '4:41' },
  { id: 'RgKAFK5djSk', title: 'See You Again', channel: 'WizKhalifa', category: 'music', duration: '3:57' },
  { id: 'OPf0YbXqDm0', title: 'Uptown Funk', channel: 'MarkRonsonVEVO', category: 'music', duration: '4:30' },
  { id: 'HP-MbfHFUqs', title: 'Blinding Lights', channel: 'TheWeekndVEVO', category: 'music', duration: '3:22' },
  { id: 'hT_nvWreIhg', title: 'React JS Crash Course', channel: 'Traversy Media', category: 'tech', duration: '1:20:00' },
  { id: 'Ke90Tje7VS0', title: 'CSS Grid Tutorial', channel: 'freeCodeCamp', category: 'education', duration: '1:01:00' },
  { id: 'wZniZEbPAzk', title: 'JavaScript Array Methods', channel: 'Web Dev Simplified', category: 'education', duration: '10:00' },
];

let currentId = allVideos[0].id;
let currentCategory = 'all';
let watchLater = JSON.parse(localStorage.getItem('watchLater') || '[]');

// Player
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: currentId,
    playerVars: { rel: 0, modestbranding: 1, controls: 1 },
    events: {
      onReady: () => { loadVideo(currentId); },
      onStateChange: (e) => { if (e.data === YT.PlayerState.ENDED) playNextWL(); }
    }
  });
}

function loadVideo(id) {
  currentId = id;
  const v = allVideos.find(x => x.id === id);
  if (v) {
    document.getElementById('videoTitle').textContent = v.title;
    document.getElementById('videoChannel').textContent = v.channel;
  }
  if (player && player.loadVideoById) player.loadVideoById(id);
  updateMediaSession(v);
}

function updateMediaSession(v) {
  if ('mediaSession' in navigator && v) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: v.title, artist: v.channel,
      artwork: [{ src: `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`, sizes: '1280x720' }]
    });
    navigator.mediaSession.setActionHandler('play', () => player.playVideo());
    navigator.mediaSession.setActionHandler('pause', () => player.pauseVideo());
  }
}

// Filters
const categories = ['all', 'music', 'tech', 'education', 'entertainment'];
const filterEl = document.getElementById('filters');
categories.forEach(c => {
  const btn = document.createElement('button');
  btn.textContent = c.charAt(0).toUpperCase() + c.slice(1);
  btn.className = c === 'all' ? 'active' : '';
  btn.onclick = () => {
    filterEl.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = c;
    filterVideos();
  };
  filterEl.appendChild(btn);
});

// Grid
function filterVideos() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const filtered = allVideos.filter(v => {
    const matchCategory = currentCategory === 'all' || v.category === currentCategory;
    const matchSearch = v.title.toLowerCase().includes(q) || v.channel.toLowerCase().includes(q);
    return matchCategory && matchSearch;
  });
  renderGrid(filtered);
}

function renderGrid(videos) {
  const grid = document.getElementById('grid');
  if (videos.length === 0) {
    grid.innerHTML = '<p class="empty">No videos found</p>';
    return;
  }
  grid.innerHTML = videos.map(v => `
    <div class="video-card" onclick="loadVideo('${v.id}')">
      <img src="https://img.youtube.com/vi/${v.id}/mqdefault.jpg" alt="${v.title}">
      <div class="card-info">
        <h3>${v.title}</h3>
        <p>${v.channel} <span class="duration">${v.duration}</span></p>
      </div>
    </div>
  `).join('');
}

// Watch Later
function addToWatchLater() {
  const v = allVideos.find(x => x.id === currentId);
  if (v && !watchLater.find(w => w.id === v.id)) {
    watchLater.push(v);
    localStorage.setItem('watchLater', JSON.stringify(watchLater));
    renderWL();
  }
}

function removeWL(id) {
  watchLater = watchLater.filter(w => w.id !== id);
  localStorage.setItem('watchLater', JSON.stringify(watchLater));
  renderWL();
}

function clearWatchLater() {
  watchLater = [];
  localStorage.setItem('watchLater', JSON.stringify(watchLater));
  renderWL();
}

function playNextWL() {
  if (watchLater.length > 0) {
    const next = watchLater.shift();
    localStorage.setItem('watchLater', JSON.stringify(watchLater));
    renderWL();
    loadVideo(next.id);
  }
}

function renderWL() {
  const el = document.getElementById('wlList');
  if (watchLater.length === 0) {
    el.innerHTML = '<div class="empty">No videos in your Watch Later list</div>';
    return;
  }
  el.innerHTML = watchLater.map(v => `
    <div class="wl-item" onclick="loadVideo('${v.id}')">
      <img src="https://img.youtube.com/vi/${v.id}/mqdefault.jpg" alt="">
      <div class="info">
        <div class="title">${v.title}</div>
        <div class="channel">${v.channel}</div>
      </div>
      <button class="remove" onclick="event.stopPropagation();removeWL('${v.id}')">×</button>
    </div>
  `).join('');
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT') return;
  if (e.key === ' ') { e.preventDefault(); const s = player.getPlayerState(); s === 1 ? player.pauseVideo() : player.playVideo(); }
  if (e.key === 'ArrowLeft') player.seekTo(Math.max(0, player.getCurrentTime() - 5), true);
  if (e.key === 'ArrowRight') player.seekTo(Math.min(player.getDuration(), player.getCurrentTime() + 5), true);
});

// Init
filterVideos();
renderWL();
</script>
</body>
</html>
```

## Bonus Challenges

1. **Trending Views Counter**: Simulate view counts with random number generation
2. **Video Player Themes**: Add light/dark mode toggle
3. **Drag & Drop Queue**: Allow reordering Watch Later items
4. **Playlist Sharing**: Generate a shareable link that encodes the playlist
5. **YouTube Data API**: Replace mock data with real YouTube search results
6. **Infinite Scroll**: Load more results as user scrolls down

## Submission Checklist

- [ ] Featured player loads and plays videos correctly
- [ ] Video grid displays all curated videos
- [ ] Category filters work correctly
- [ ] Search filters in real-time
- [ ] Clicking a video loads it in the featured player
- [ ] Watch Later button adds current video
- [ ] Watch Later list persists across page reloads
- [ ] Auto-play next from Watch Later
- [ ] Responsive layout works on mobile
- [ ] Keyboard shortcuts function properly
- [ ] Media Session API integrated
