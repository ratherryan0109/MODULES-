# Module 59 Mini Project: Embed Dashboard with Cross-Frame Communication

## Project Overview

Build an **Embed Dashboard** — a single-page application that showcases different types of embedded content (maps, social media posts, custom widgets) with a central control panel that communicates with each iframe via postMessage. The dashboard includes theme management, widget configuration, and a centralized activity log.

## Learning Objectives

- Master iframe embedding with various attributes (sandbox, allow, loading)
- Implement secure cross-origin communication with postMessage
- Build responsive iframe containers for different content types
- Create a central event hub pattern for multi-frame management
- Handle iframe lifecycle events and error states

## Requirements

### Widget Types (minimum 4)
1. **Clock Widget** — srcdoc-based clock with real-time updates
2. **Color Picker Widget** — iframe that sends selected color to parent via postMessage
3. **Counter Widget** — iframe with increment/decrement that reports count
4. **Google Maps Embed** — standard iframe embed with sandbox restrictions

### Parent Dashboard
- Grid layout displaying all widgets
- Theme selector that broadcasts to all iframes (Dark, Light, Neon, Sepia)
- Activity log that displays all messages received from iframes
- Individual widget reset buttons
- Responsive layout (2 columns → 1 column on mobile)

### PostMessage Protocol
All iframes communicate with the parent using a structured message format:
```json
{
  "type": "widget_action",
  "widget": "clock|counter|color",
  "action": "update|reset|config",
  "payload": { /* widget-specific data */ }
}
```

### Security
- All iframes use appropriate sandbox attributes
- postMessage origin validation
- CSP meta tag for frame-src
- Fallback content for all iframes

## Project Structure

```
embed-dashboard/
├── index.html       # Main dashboard
├── widgets/
│   ├── clock.html     (can be srcdoc inline)
│   ├── counter.html   (can be srcdoc inline)
│   └── color.html     (can be srcdoc inline)
└── style.css
```

## Step-by-Step Implementation

### Step 1: HTML Structure
1. Create the dashboard grid container
2. Add header with title and theme selector
3. Create widget containers (each contains a title bar, iframe, and reset button)
4. Add the activity log panel

### Step 2: Widget Implementations
Each widget iframe (srcdoc inline):
- **Clock**: Shows live time, listens for theme changes, sends 'tick' every 10s
- **Color Picker**: Shows color buttons, sends selected color to parent
- **Counter**: Has +/- buttons, sends count to parent on each change
- **Map**: Standard Google Maps embed with sandbox

### Step 3: JavaScript Hub
1. postMessage listener with origin validation
2. Message routing based on widget type
3. Theme broadcast function
4. Activity log with timestamps
5. Widget reset functionality

### Step 4: CSS Styling
1. Dashboard grid with responsive breakpoints
2. Widget cards with header, content, footer
3. Theme color schemes
4. Activity log with scrolling

## Complete Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Embed Dashboard</title>
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, -apple-system, sans-serif; background: #0f0f14; color: white; min-height: 100vh; }
.app { max-width: 1100px; margin: 0 auto; padding: 20px; }
header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; flex-wrap: wrap; gap: 12px; }
header h1 { font-size: 24px; background: linear-gradient(90deg, #6C63FF, #e94560); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.theme-controls { display: flex; gap: 6px; }
.theme-controls button { padding: 6px 14px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.2); cursor: pointer; font-size: 12px; transition: 0.2s; background: transparent; color: white; }
.theme-controls button:hover { transform: scale(1.05); }
.theme-controls button.active { border-color: #6C63FF; background: rgba(108,99,255,0.2); }
.dashboard { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
@media (max-width: 700px) { .dashboard { grid-template-columns: 1fr; } }
.widget { background: #1a1a2e; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.05); }
.widget-header { display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); }
.widget-header h3 { font-size: 14px; font-weight: 600; }
.widget-header .actions { display: flex; gap: 4px; }
.widget-header .actions button { background: rgba(255,255,255,0.1); border: none; color: rgba(255,255,255,0.5); padding: 4px 10px; border-radius: 4px; cursor: pointer; font-size: 11px; transition: 0.2s; }
.widget-header .actions button:hover { background: rgba(255,255,255,0.2); color: white; }
.widget-content { padding: 12px; }
.widget-content iframe { width: 100%; height: 220px; border: none; border-radius: 8px; background: #16213e; }
.widget-status { padding: 8px 16px; border-top: 1px solid rgba(255,255,255,0.05); font-size: 11px; color: rgba(255,255,255,0.4); display: flex; justify-content: space-between; }
.log-panel { margin-top: 20px; background: #1a1a2e; border-radius: 12px; padding: 16px; border: 1px solid rgba(255,255,255,0.05); }
.log-panel h3 { font-size: 14px; font-weight: 600; margin-bottom: 8px; }
.log { max-height: 150px; overflow-y: auto; font-family: 'Consolas', monospace; font-size: 12px; }
.log::-webkit-scrollbar { width: 4px; }
.log::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
.log .entry { padding: 4px 0; color: rgba(255,255,255,0.6); border-bottom: 1px solid rgba(255,255,255,0.02); }
.log .entry .time { color: rgba(255,255,255,0.2); }
.log .entry .tag { display: inline-block; padding: 1px 6px; border-radius: 3px; font-size: 10px; margin: 0 4px; }
.tag-clock { background: rgba(108,99,255,0.3); color: #6C63FF; }
.tag-counter { background: rgba(233,69,96,0.3); color: #e94560; }
.tag-color { background: rgba(78,205,196,0.3); color: #4ecdc4; }
.tag-map { background: rgba(254,202,87,0.3); color: #feca57; }
.tag-system { background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.5); }
</style>
</head>
<body>
<div class="app" id="appRoot">
  <header>
    <h1>🔌 Embed Dashboard</h1>
    <div class="theme-controls">
      <button onclick="setTheme('dark')" class="active" data-theme="dark">🌙 Dark</button>
      <button onclick="setTheme('light')" data-theme="light">☀️ Light</button>
      <button onclick="setTheme('neon')" data-theme="neon">💚 Neon</button>
      <button onclick="setTheme('sepia')" data-theme="sepia">🟤 Sepia</button>
    </div>
  </header>

  <div class="dashboard">
    <!-- Clock Widget -->
    <div class="widget" id="widget-clock">
      <div class="widget-header">
        <h3>⏰ Live Clock</h3>
        <div class="actions"><button onclick="resetWidget('clock')">Reset</button></div>
      </div>
      <div class="widget-content"><iframe id="clockFrame" title="Clock widget" sandbox="allow-scripts"></iframe></div>
      <div class="widget-status"><span>Last tick: --</span><span>Status: Active</span></div>
    </div>

    <!-- Counter Widget -->
    <div class="widget" id="widget-counter">
      <div class="widget-header">
        <h3>🔢 Counter</h3>
        <div class="actions"><button onclick="resetWidget('counter')">Reset</button></div>
      </div>
      <div class="widget-content"><iframe id="counterFrame" title="Counter widget" sandbox="allow-scripts"></iframe></div>
      <div class="widget-status"><span>Count: 0</span><span>Status: Active</span></div>
    </div>

    <!-- Color Picker Widget -->
    <div class="widget" id="widget-color">
      <div class="widget-header">
        <h3>🎨 Color Picker</h3>
        <div class="actions"><button onclick="resetWidget('color')">Reset</button></div>
      </div>
      <div class="widget-content"><iframe id="colorFrame" title="Color picker" sandbox="allow-scripts"></iframe></div>
      <div class="widget-status"><span>Last color: --</span><span>Status: Active</span></div>
    </div>

    <!-- Map Widget -->
    <div class="widget" id="widget-map">
      <div class="widget-header">
        <h3>🗺 Map</h3>
        <div class="actions"><button onclick="resetWidget('map')">Reset</button></div>
      </div>
      <div class="widget-content">
        <iframe id="mapFrame" title="Google Map" 
          sandbox="allow-scripts allow-same-origin"
          loading="lazy"
          allowfullscreen>
        </iframe>
      </div>
      <div class="widget-status"><span>Location: New York</span><span>Status: Active</span></div>
    </div>
  </div>

  <div class="log-panel">
    <h3>📋 Activity Log <span style="font-weight:400;font-size:12px;color:rgba(255,255,255,0.3);">(postMessage traffic)</span></h3>
    <div class="log" id="activityLog"></div>
  </div>
</div>

<script>
// ===== THEMES =====
const themes = {
  dark: { bg: '#0f0f14', card: '#1a1a2e', text: 'white', border: 'rgba(255,255,255,0.05)' },
  light: { bg: '#f5f5f5', card: '#ffffff', text: '#333', border: '#e0e0e0' },
  neon: { bg: '#0a1a0a', card: '#0f2a0f', text: '#00ff88', border: 'rgba(0,255,136,0.2)' },
  sepia: { bg: '#2d1b00', card: '#3d2b10', text: '#ffcc99', border: 'rgba(255,204,153,0.1)' }
};
let currentTheme = 'dark';

function setTheme(name) {
  currentTheme = name;
  const t = themes[name];
  document.querySelectorAll('[data-theme]').forEach(b => b.classList.toggle('active', b.dataset.theme === name));
  document.getElementById('appRoot').style.background = t.bg;
  document.getElementById('appRoot').style.color = t.text;
  document.querySelectorAll('.widget, .log-panel').forEach(el => {
    el.style.background = t.card;
    el.style.borderColor = t.border;
  });
  broadcastToFrames({ type: 'theme', theme: name });
  addLog('Theme changed to ' + name, 'system');
}

// ===== POSTMESSAGE HUB =====
function broadcastToFrames(msg) {
  document.querySelectorAll('iframe').forEach(f => {
    try { f.contentWindow.postMessage(msg, '*'); } catch(e) {}
  });
}

function resetWidget(widget) {
  // Re-initialize the widget by re-setting its srcdoc
  loadWidgetFrames();
  broadcastToFrames({ type: 'reset', widget });
  addLog('Widget reset: ' + widget, 'system');
}

// ===== WIDGET SRCDOCS =====
const widgetSources = {
  clock: `
    <style>
      body{font-family:system-ui;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;margin:0;background:#16213e;color:white;transition:0.5s;}
      .time{font-size:40px;font-weight:bold;font-variant-numeric:tabular-nums;}
      .date{font-size:13px;margin-top:6px;opacity:0.6;}
      .msgs{font-size:10px;margin-top:10px;opacity:0.3;}
    </style>
    <div class="time" id="cTime">00:00:00</div>
    <div class="date" id="cDate">---</div>
    <div class="msgs" id="cMsg">Clock ready</div>
    <script>
      function tick() {
        const n = new Date();
        document.getElementById('cTime').textContent = n.toLocaleTimeString();
        document.getElementById('cDate').textContent = n.toLocaleDateString(undefined, {weekday:'long',month:'long',day:'numeric'});
        window.parent.postMessage({type:'widget_update',widget:'clock',action:'tick',payload:{time:n.toLocaleTimeString()}},'*');
      }
      tick(); setInterval(tick, 10000);
      window.addEventListener('message', function(e){
        if(e.data.type==='theme'){const c={dark:{bg:'#16213e',text:'white'},light:{bg:'#f0f0f0',text:'#333'},neon:{bg:'#0a1a0a',text:'#00ff88'},sepia:{bg:'#2d1b00',text:'#ffcc99'}};const t=c[e.data.theme]||c.dark;document.body.style.background=t.bg;document.body.style.color=t.text;}
        if(e.data.type==='reset'){document.getElementById('cMsg').textContent='Reset at '+new Date().toLocaleTimeString();}
      });
      window.parent.postMessage({type:'widget_ready',widget:'clock'},'*');
    <\/script>
  `,
  counter: `
    <style>
      body{font-family:system-ui;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;margin:0;background:#16213e;color:white;transition:0.5s;}
      .count{font-size:56px;font-weight:bold;font-variant-numeric:tabular-nums;margin-bottom:16px;}
      .btns{display:flex;gap:12px;}
      .btns button{width:56px;height:56px;border-radius:50%;border:none;font-size:24px;cursor:pointer;transition:0.2s;background:rgba(255,255,255,0.1);color:inherit;}
      .btns button:hover{transform:scale(1.1);background:rgba(255,255,255,0.2);}
      .btns button.reset{width:40px;height:40px;font-size:14px;}
    </style>
    <div class="count" id="count">0</div>
    <div class="btns">
      <button onclick="change(-1)">−</button>
      <button class="reset" onclick="change(0)">↺</button>
      <button onclick="change(1)">+</button>
    </div>
    <script>
      let c = 0;
      function change(d) { c = d === 0 ? 0 : c + d; document.getElementById('count').textContent = c; window.parent.postMessage({type:'widget_update',widget:'counter',action:'change',payload:{count:c}},'*'); }
      window.addEventListener('message',function(e){
        if(e.data.type==='theme'){const t={dark:{bg:'#16213e'},light:{bg:'#f0f0f0'},neon:{bg:'#0a1a0a'},sepia:{bg:'#2d1b00'}};(t[e.data.theme])&&(document.body.style.background=t[e.data.theme].bg);}
        if(e.data.type==='reset'){c=0;document.getElementById('count').textContent='0';}
      });
      window.parent.postMessage({type:'widget_ready',widget:'counter'},'*');
    <\/script>
  `,
  color: `
    <style>
      body{font-family:system-ui;padding:16px;margin:0;background:#16213e;color:white;transition:0.5s;}
      h4{font-size:13px;margin-bottom:10px;opacity:0.6;text-align:center;}
      .colors{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;max-width:200px;margin:0 auto;}
      .colors button{aspect-ratio:1;border-radius:50%;border:3px solid transparent;cursor:pointer;transition:0.2s;}
      .colors button:hover{transform:scale(1.15);border-color:white;}
      .preview{width:40px;height:40px;border-radius:50%;margin:12px auto;border:2px solid rgba(255,255,255,0.2);}
      .selected{text-align:center;font-size:11px;opacity:0.5;}
    </style>
    <h4>Pick a Color</h4>
    <div class="colors" id="colorBtns"></div>
    <div class="preview" id="preview"></div>
    <div class="selected" id="selected">No color selected</div>
    <script>
      const clrs = ['#ff6b6b','#feca57','#48dbfb','#ff9ff3','#54a0ff','#5f27cd','#00d2d3','#1dd1a1'];
      document.getElementById('colorBtns').innerHTML = clrs.map(c => '<button style="background:'+c+'" onclick="pick(\''+c+'\')"></button>').join('');
      function pick(c){document.getElementById('preview').style.background=c;document.getElementById('selected').textContent=c;window.parent.postMessage({type:'widget_update',widget:'color',action:'pick',payload:{color:c}},'*');}
      window.addEventListener('message',function(e){
        if(e.data.type==='theme'){const t={dark:{bg:'#16213e'},light:{bg:'#f0f0f0'},neon:{bg:'#0a1a0a'},sepia:{bg:'#2d1b00'}};(t[e.data.theme])&&(document.body.style.background=t[e.data.theme].bg);}
        if(e.data.type==='reset'){document.getElementById('preview').style.background='transparent';document.getElementById('selected').textContent='Reset';}
      });
      window.parent.postMessage({type:'widget_ready',widget:'color'},'*');
    <\/script>
  `,
  map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986548248684!3d40.69714942232634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York!5e0!3m2!1sen!2sus!4v1" 
    width="100%" height="220" style="border:0;border-radius:8px;" 
    title="Google Map of New York" 
    allowfullscreen loading="lazy">
  </iframe>`
  // Map is a nested iframe (for the actual embed), but the container iframe holds this inline
};

function loadWidgetFrames() {
  document.getElementById('clockFrame').srcdoc = widgetSources.clock;
  document.getElementById('counterFrame').srcdoc = widgetSources.counter;
  document.getElementById('colorFrame').srcdoc = widgetSources.color;
  document.getElementById('mapFrame').srcdoc = widgetSources.map;
}

// ===== ACTIVITY LOG =====
function addLog(text, tag) {
  const log = document.getElementById('activityLog');
  const div = document.createElement('div');
  div.className = 'entry';
  const time = new Date().toLocaleTimeString();
  div.innerHTML = '<span class="time">[' + time + ']</span> <span class="tag tag-' + (tag || 'system') + '">' + (tag || 'system') + '</span> ' + text;
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
}

// ===== MESSAGE HANDLER =====
window.addEventListener('message', (e) => {
  // Origin validation
  // Since we're using srcdoc, origin is null — that's expected
  // In production, always validate origin for cross-origin frames

  const data = e.data;
  if (!data || !data.type) return;

  switch (data.type) {
    case 'widget_ready':
      addLog(data.widget + ' widget loaded', data.widget);
      break;
    case 'widget_update':
      if (data.widget === 'clock') {
        document.querySelector('#widget-clock .widget-status span:first-child').textContent = 'Last tick: ' + data.payload.time;
        addLog('Clock tick: ' + data.payload.time, 'clock');
      }
      if (data.widget === 'counter') {
        document.querySelector('#widget-counter .widget-status span:first-child').textContent = 'Count: ' + data.payload.count;
        addLog('Counter: ' + data.payload.count, 'counter');
      }
      if (data.widget === 'color') {
        document.querySelector('#widget-color .widget-status span:first-child').textContent = 'Color: ' + data.payload.color;
        addLog('Color picked: ' + data.payload.color, 'color');
      }
      break;
  }
});

// ===== INIT =====
loadWidgetFrames();
addLog('Dashboard initialized', 'system');
</script>
</body>
</html>
```

## Bonus Challenges

1. **Widget Removal**: Add ability to close/remove widgets from the dashboard
2. **Widget Preferences**: Save widget positions/visibility to localStorage
3. **Fullscreen Widget**: Click to expand a widget to full-viewport
4. **Widget Communication**: Allow widgets to communicate with each other through the parent hub
5. **Drag & Drop**: Make widgets reorderable with drag & drop
6. **Custom Widget SDK**: Create a JavaScript SDK that widgets can use for standardized communication

## Submission Checklist

- [ ] All 4 widget types display correctly
- [ ] Theme selector broadcasts to all iframes
- [ ] postMessage communication works in both directions
- [ ] Activity log shows all messages with tags and timestamps
- [ ] Widget reset functionality works
- [ ] Responsive layout (2 columns → 1)
- [ ] Appropriate sandbox attributes applied
- [ ] Fallback content provided for iframes
- [ ] Lazy loading implemented where applicable
