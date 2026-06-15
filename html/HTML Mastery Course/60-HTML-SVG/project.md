# Module 60 Mini Project: SVG Infographic Dashboard

## Project Overview

Build an **SVG Infographic Dashboard** — a single-page application that displays data visualizations using pure SVG. The dashboard includes interactive charts, animated data displays, and a responsive layout. All graphics must be vector-based (SVG), resolution-independent, and interactive.

## Learning Objectives

- Create complex SVG graphics with shapes, paths, and groups
- Build responsive data visualizations (bar charts, donut charts, line graphs)
- Animate SVG elements with CSS and SMIL
- Make SVG elements interactive with JavaScript
- Implement accessibility for SVG graphics
- Systematize reusable SVG components

## Requirements

### Data Visualizations (minimum 4)
1. **Animated Bar Chart** — 12 bars representing monthly data, with hover tooltips
2. **Donut/Donut Chart** — 4-segment donut with percentage labels and animated fill
3. **Line Graph** — Multi-line chart showing trends with data point circles
4. **Stat Cards** — 3-4 metric cards (value, label, icon, trend indicator)

### Interactivity
- Hover on chart elements shows tooltips
- Click on donut segments to highlight (explode view)
- Animated counters on stat cards (count up on load)
- Resize-responsive (viewBox-based)

### Features
- Legend for charts
- Grid lines and axis labels
- Color-coded data segments
- Smooth animations on load
- Keyboard navigable

## Project Structure

```
svg-dashboard/
├── index.html       # Main dashboard
└── style.css        # Styles (minimal — SVG handles styling)
```

## Step-by-Step Implementation

### Step 1: Data Preparation
Create JavaScript objects for chart data (monthly sales, category distribution, trend data).

### Step 2: SVG Layout
Design the dashboard grid using HTML/CSS layout, with SVG elements inside each widget container.

### Step 3: Chart Implementation
- **Bar Chart**: `<rect>` elements with animated height
- **Donut Chart**: `<path>` arcs with `stroke-dasharray` animation
- **Line Chart**: `<polyline>` or `<path>` with data point `<circle>`s

### Step 4: Interactivity
- SVG tooltips using `<g>` positioned absolutely
- Click handlers on `<g>` groups
- CSS hover effects on data points

## Complete Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SVG Infographic Dashboard</title>
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, -apple-system, sans-serif; background: #0f0f14; color: white; padding: 20px; }
.dashboard { max-width: 1200px; margin: 0 auto; }
h1 { font-size: 24px; margin-bottom: 20px; color: #6C63FF; }
.grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
@media (max-width: 700px) { .grid { grid-template-columns: 1fr; } }
.card { background: #1a1a2e; border-radius: 12px; padding: 20px; border: 1px solid rgba(255,255,255,0.05); }
.card h2 { font-size: 14px; color: rgba(255,255,255,0.5); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; }
.card svg { width: 100%; height: auto; display: block; }
.card.full { grid-column: span 2; }
@media (max-width: 700px) { .card.full { grid-column: span 1; } }
.stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 16px; }
@media (max-width: 700px) { .stats { grid-template-columns: repeat(2, 1fr); } }
.stat { background: #1a1a2e; border-radius: 12px; padding: 16px; text-align: center; border: 1px solid rgba(255,255,255,0.05); }
.stat .value { font-size: 28px; font-weight: bold; color: #6C63FF; }
.stat .label { font-size: 12px; color: rgba(255,255,255,0.4); margin-top: 4px; }
.stat .trend { font-size: 11px; margin-top: 4px; }
.trend.up { color: #4ecdc4; }
.trend.down { color: #e94560; }
.tooltip { position: absolute; background: rgba(0,0,0,0.85); color: white; padding: 6px 10px; border-radius: 6px; font-size: 11px; pointer-events: none; display: none; z-index: 10; white-space: nowrap; }
.chart-container { position: relative; }
</style>
</head>
<body>
<div class="dashboard">
  <h1>📊 SVG Infographic Dashboard</h1>

  <!-- Stat Cards -->
  <div class="stats">
    <div class="stat"><div class="value" id="statRevenue">$0</div><div class="label">Revenue</div><div class="trend up">↑ 12.5%</div></div>
    <div class="stat"><div class="value" id="statUsers">0</div><div class="label">Active Users</div><div class="trend up">↑ 8.3%</div></div>
    <div class="stat"><div class="value" id="statOrders">0</div><div class="label">Orders</div><div class="trend down">↓ 2.1%</div></div>
    <div class="stat"><div class="value" id="statConversion">0%</div><div class="label">Conversion</div><div class="trend up">↑ 1.4%</div></div>
  </div>

  <div class="grid">
    <!-- Bar Chart -->
    <div class="card"><h2>📈 Monthly Revenue</h2>
      <div class="chart-container">
        <svg viewBox="0 0 500 250" id="barChart"></svg>
        <div class="tooltip" id="barTooltip"></div>
      </div>
    </div>

    <!-- Donut Chart -->
    <div class="card"><h2>🎯 Category Distribution</h2>
      <div class="chart-container">
        <svg viewBox="0 0 300 300" id="donutChart"></svg>
        <div class="tooltip" id="donutTooltip"></div>
      </div>
    </div>

    <!-- Card full - Line Chart -->
    <div class="card full"><h2>📉 Growth Trends</h2>
      <div class="chart-container">
        <svg viewBox="0 0 800 300" id="lineChart"></svg>
        <div class="tooltip" id="lineTooltip"></div>
      </div>
    </div>
  </div>
</div>

<script>
const SVG_NS = 'http://www.w3.org/2000/svg';

// ===== DATA =====
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const revenueData = [45, 52, 38, 65, 58, 72, 68, 85, 78, 92, 88, 105];
const donutData = [
  { label: 'Electronics', value: 35, color: '#6C63FF' },
  { label: 'Clothing', value: 25, color: '#e94560' },
  { label: 'Food', value: 22, color: '#4ecdc4' },
  { label: 'Books', value: 18, color: '#feca57' }
];
const lineData1 = [30, 45, 42, 55, 50, 65, 58, 70, 68, 78, 72, 85];
const lineData2 = [20, 28, 32, 38, 42, 48, 52, 55, 60, 62, 68, 72];

// ===== ANIMATE COUNTERS =====
function animateCount(el, target, suffix = '', duration = 1500) {
  let start = 0;
  const step = target / (duration / 16);
  const interval = setInterval(() => {
    start += step;
    if (start >= target) { start = target; clearInterval(interval); }
    el.textContent = suffix === '$' ? '$' + Math.floor(start).toLocaleString() : 
                     suffix === '%' ? Math.floor(start) + '%' : Math.floor(start).toLocaleString();
  }, 16);
}
animateCount(document.getElementById('statRevenue'), 128450, '$');
animateCount(document.getElementById('statUsers'), 8450);
animateCount(document.getElementById('statOrders'), 2340);
animateCount(document.getElementById('statConversion'), 68, '%');

// ===== BAR CHART =====
(function() {
  const svg = document.getElementById('barChart');
  const tooltip = document.getElementById('barTooltip');
  const w = 500, h = 250;
  const padding = { top: 20, right: 20, bottom: 30, left: 40 };
  const chartW = w - padding.left - padding.right;
  const chartH = h - padding.top - padding.bottom;
  const barWidth = chartW / months.length - 4;
  const maxVal = Math.max(...revenueData);
  
  // Y axis
  for (let i = 0; i <= 4; i++) {
    const val = (maxVal / 4) * i;
    const y = padding.top + chartH - (val / maxVal) * chartH;
    svg.innerHTML += `<line x1="${padding.left}" y1="${y}" x2="${w - padding.right}" y2="${y}" stroke="rgba(255,255,255,0.05)" />`;
    svg.innerHTML += `<text x="${padding.left - 8}" y="${y + 4}" text-anchor="end" font-size="10" fill="rgba(255,255,255,0.3)">${Math.round(val)}</text>`;
  }
  
  // Bars
  revenueData.forEach((val, i) => {
    const x = padding.left + (chartW / months.length) * i + 2;
    const y = padding.top + chartH - (val / maxVal) * chartH;
    const height = (val / maxVal) * chartH;
    
    const bar = document.createElementNS(SVG_NS, 'rect');
    bar.setAttribute('x', x);
    bar.setAttribute('y', y);
    bar.setAttribute('width', barWidth);
    bar.setAttribute('height', 0);
    bar.setAttribute('fill', '#6C63FF');
    bar.setAttribute('rx', '3');
    bar.setAttribute('data-value', val);
    bar.setAttribute('data-label', months[i]);
    bar.style.cursor = 'pointer';
    bar.style.transition = 'height 0.5s ease';
    
    bar.addEventListener('mouseenter', (e) => {
      tooltip.textContent = `${months[i]}: $${val}K`;
      tooltip.style.display = 'block';
      const rect = svg.getBoundingClientRect();
      tooltip.style.left = (e.clientX - rect.left) + 'px';
      tooltip.style.top = (e.clientY - rect.top - 30) + 'px';
    });
    bar.addEventListener('mousemove', (e) => {
      const rect = svg.getBoundingClientRect();
      tooltip.style.left = (e.clientX - rect.left) + 'px';
      tooltip.style.top = (e.clientY - rect.top - 30) + 'px';
    });
    bar.addEventListener('mouseleave', () => { tooltip.style.display = 'none'; });
    
    svg.appendChild(bar);
    
    // X labels
    const lx = padding.left + (chartW / months.length) * i + barWidth / 2 + 2;
    const ly = h - padding.bottom + 15;
    const text = document.createElementNS(SVG_NS, 'text');
    text.setAttribute('x', lx);
    text.setAttribute('y', ly);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('font-size', '9');
    text.setAttribute('fill', 'rgba(255,255,255,0.3)');
    text.textContent = months[i];
    svg.appendChild(text);
    
    // Animate height
    setTimeout(() => {
      bar.setAttribute('height', height);
      bar.setAttribute('y', y);
    }, 200 + i * 80);
  });
})();

// ===== DONUT CHART =====
(function() {
  const svg = document.getElementById('donutChart');
  const tooltip = document.getElementById('donutTooltip');
  const cx = 150, cy = 150, radius = 100, strokeW = 40;
  const circumference = 2 * Math.PI * radius;
  let total = donutData.reduce((s, d) => s + d.value, 0);
  let currentOffset = 0;
  let exploded = -1;

  donutData.forEach((d, i) => {
    const percent = d.value / total;
    const length = circumference * percent;
    const offset = -currentOffset * circumference;
    
    const circle = document.createElementNS(SVG_NS, 'circle');
    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r', radius);
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', d.color);
    circle.setAttribute('stroke-width', strokeW);
    circle.setAttribute('stroke-dasharray', `${length} ${circumference - length}`);
    circle.setAttribute('stroke-dashoffset', circumference);
    circle.setAttribute('transform', `rotate(-90 ${cx} ${cy})`);
    circle.setAttribute('data-index', i);
    circle.style.transition = 'stroke-dashoffset 1s ease, transform 0.3s';
    circle.style.cursor = 'pointer';
    
    circle.addEventListener('mouseenter', () => {
      tooltip.textContent = `${d.label}: ${d.value}%`;
      tooltip.style.display = 'block';
    });
    circle.addEventListener('mousemove', (e) => {
      const rect = svg.getBoundingClientRect();
      tooltip.style.left = (e.clientX - rect.left) + 'px';
      tooltip.style.top = (e.clientY - rect.top - 30) + 'px';
    });
    circle.addEventListener('mouseleave', () => { tooltip.style.display = 'none'; });
    circle.addEventListener('click', () => {
      exploded = exploded === i ? -1 : i;
      donutData.forEach((_, j) => {
        const c = svg.querySelectorAll('circle')[j];
        if (exploded === j) {
          const angle = (donutData.slice(0, j).reduce((s, d) => s + d.value, 0) + donutData[j].value / 2) / total * 360 - 90;
          const rad = angle * Math.PI / 180;
          c.setAttribute('transform', `rotate(-90 ${cx} ${cy}) translate(${Math.cos(rad) * 8}, ${Math.sin(rad) * 8})`);
        } else {
          c.setAttribute('transform', `rotate(-90 ${cx} ${cy})`);
        }
      });
    });
    
    svg.appendChild(circle);
    currentOffset += percent;
    
    // Animate
    setTimeout(() => {
      circle.setAttribute('stroke-dashoffset', offset);
    }, 300 + i * 200);
    
    // Label
    const angle = (donutData.slice(0, i).reduce((s, d) => s + d.value, 0) + d.value / 2) / total * 360 - 90;
    const rad = angle * Math.PI / 180;
    const labelR = radius + strokeW / 2 + 20;
    const lx = cx + Math.cos(rad) * labelR;
    const ly = cy + Math.sin(rad) * labelR;
    const text = document.createElementNS(SVG_NS, 'text');
    text.setAttribute('x', lx);
    text.setAttribute('y', ly);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('dominant-baseline', 'central');
    text.setAttribute('font-size', '11');
    text.setAttribute('fill', 'rgba(255,255,255,0.6)');
    text.textContent = `${d.label} ${d.value}%`;
    svg.appendChild(text);
  });
  
  // Center text
  const center = document.createElementNS(SVG_NS, 'text');
  center.setAttribute('x', cx);
  center.setAttribute('y', cy - 10);
  center.setAttribute('text-anchor', 'middle');
  center.setAttribute('font-size', '28');
  center.setAttribute('font-weight', 'bold');
  center.setAttribute('fill', 'white');
  center.textContent = '100%';
  svg.appendChild(center);
  const centerLabel = document.createElementNS(SVG_NS, 'text');
  centerLabel.setAttribute('x', cx);
  centerLabel.setAttribute('y', cy + 16);
  centerLabel.setAttribute('text-anchor', 'middle');
  centerLabel.setAttribute('font-size', '11');
  centerLabel.setAttribute('fill', 'rgba(255,255,255,0.4)');
  centerLabel.textContent = 'Total';
  svg.appendChild(centerLabel);
})();

// ===== LINE CHART =====
(function() {
  const svg = document.getElementById('lineChart');
  const tooltip = document.getElementById('lineTooltip');
  const w = 800, h = 300;
  const pad = { top: 20, right: 20, bottom: 30, left: 50 };
  const cw = w - pad.left - pad.right;
  const ch = h - pad.top - pad.bottom;
  const maxVal = Math.max(...lineData1, ...lineData2);
  
  // Grid
  for (let i = 0; i <= 4; i++) {
    const val = (maxVal / 4) * i;
    const y = pad.top + ch - (val / maxVal) * ch;
    svg.innerHTML += `<line x1="${pad.left}" y1="${y}" x2="${w - pad.right}" y2="${y}" stroke="rgba(255,255,255,0.05)" />`;
    svg.innerHTML += `<text x="${pad.left - 8}" y="${y + 4}" text-anchor="end" font-size="10" fill="rgba(255,255,255,0.3)">${Math.round(val)}</text>`;
  }

  function drawLine(data, color, offset) {
    const points = data.map((val, i) => {
      const x = pad.left + (cw / (data.length - 1)) * i;
      const y = pad.top + ch - (val / maxVal) * ch;
      return `${x},${y}`;
    }).join(' ');
    
    // Line
    const path = document.createElementNS(SVG_NS, 'path');
    path.setAttribute('d', `M${pad.left},${pad.top + ch} ${points.split(' ').map(p => `L${p}`).join(' ')}`);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', color);
    path.setAttribute('stroke-width', '2.5');
    path.setAttribute('stroke-linejoin', 'round');
    path.setAttribute('stroke-linecap', 'round');
    const length = path.getTotalLength();
    path.setAttribute('stroke-dasharray', length);
    path.setAttribute('stroke-dashoffset', length);
    path.style.transition = 'stroke-dashoffset 1.5s ease';
    svg.appendChild(path);
    
    setTimeout(() => { path.setAttribute('stroke-dashoffset', 0); }, offset);
    
    // Area fill
    const areaPoints = data.map((val, i) => {
      const x = pad.left + (cw / (data.length - 1)) * i;
      const y = pad.top + ch - (val / maxVal) * ch;
      return `${x},${y}`;
    }).join(' ');
    const area = document.createElementNS(SVG_NS, 'path');
    area.setAttribute('d', `M${pad.left},${pad.top + ch} ${areaPoints} L${pad.left + cw},${pad.top + ch} Z`);
    area.setAttribute('fill', color);
    area.setAttribute('opacity', '0.08');
    svg.appendChild(area);
    
    // Dots
    data.forEach((val, i) => {
      const x = pad.left + (cw / (data.length - 1)) * i;
      const y = pad.top + ch - (val / maxVal) * ch;
      const dot = document.createElementNS(SVG_NS, 'circle');
      dot.setAttribute('cx', x);
      dot.setAttribute('cy', y);
      dot.setAttribute('r', '4');
      dot.setAttribute('fill', color);
      dot.setAttribute('data-value', val);
      dot.setAttribute('data-label', months[i]);
      dot.style.cursor = 'pointer';
      dot.setAttribute('opacity', '0');
      
      dot.addEventListener('mouseenter', (e) => {
        tooltip.textContent = `${months[i]}: ${val}`;
        tooltip.style.display = 'block';
      });
      dot.addEventListener('mousemove', (e) => {
        const rect = svg.getBoundingClientRect();
        tooltip.style.left = (e.clientX - rect.left) + 'px';
        tooltip.style.top = (e.clientY - rect.top - 30) + 'px';
      });
      dot.addEventListener('mouseleave', () => { tooltip.style.display = 'none'; });
      
      svg.appendChild(dot);
      setTimeout(() => { dot.setAttribute('opacity', '1'); }, offset + i * 50);
    });
  }
  
  drawLine(lineData1, '#6C63FF', 200);
  drawLine(lineData2, '#4ecdc4', 600);
  
  // X labels
  months.forEach((m, i) => {
    const x = pad.left + (cw / (months.length - 1)) * i;
    svg.innerHTML += `<text x="${x}" y="${h - 10}" text-anchor="middle" font-size="9" fill="rgba(255,255,255,0.3)">${m}</text>`;
  });
  
  // Legend
  const legend = [
    { label: 'Revenue 2024', color: '#6C63FF' },
    { label: 'Revenue 2025', color: '#4ecdc4' }
  ];
  legend.forEach((l, i) => {
    const lx = w - 200 + i * 120;
    svg.innerHTML += `<rect x="${lx}" y="10" width="12" height="12" rx="2" fill="${l.color}" />`;
    svg.innerHTML += `<text x="${lx + 18}" y="21" font-size="11" fill="rgba(255,255,255,0.6)">${l.label}</text>`;
  });
})();
</script>
</body>
</html>
```

## Bonus Challenges

1. **Export to PNG**: Add a button to export the SVG dashboard as a PNG image using canvas
2. **Animated Legend**: Make the legend interactive (click to toggle data series)
3. **Real-time Data**: Connect to a WebSocket for live data updates
4. **Drill-down**: Click on a chart segment to see detailed data
5. **Print Styles**: Add CSS for printing the dashboard
6. **Dark/Light Themes**: Add SVG theme switching

## Submission Checklist

- [ ] Bar chart renders with 12 animated bars and tooltips
- [ ] Donut chart shows 4 segments with click-to-explode interaction
- [ ] Line chart displays two data series with animated drawing
- [ ] Stat cards count up on load with trend indicators
- [ ] All SVGs are responsive (viewBox-based)
- [ ] Tooltips appear on hover
- [ ] Color scheme is consistent and accessible
- [ ] Code is organized with clear data structures
