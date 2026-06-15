# Mini Project: Real-Time Stock Ticker Dashboard

## Project Overview

Build a real-time stock ticker dashboard that displays live stock prices using WebSocket communication. The dashboard connects to a WebSocket server (or simulates one) that streams price updates for a configurable set of stock symbols. Features include live price charts, gainers/losers tracking, portfolio management, and price alerts.

## Learning Objectives

- Implement WebSocket connection with full lifecycle management
- Handle high-frequency streaming data
- Build real-time data visualizations
- Implement reconnection with state recovery
- Process and aggregate streaming data
- Build an interactive, responsive dashboard

## Requirements

### Core Features
1. Connect to a WebSocket server for live stock data
2. Display real-time prices for a configurable watchlist
3. Show price change (green/red) indicators
4. Display a real-time line chart for selected stock
5. Track top gainers and losers
6. Portfolio tracking with total P&L
7. Price alerts (notify when price crosses threshold)

### Data Handling
8. Buffer and batch incoming price updates
9. Handle connection drops with reconnection
10. Replay missed data on reconnect
11. Aggregate data into time buckets (1s, 5s, 1m candles)
12. Maximum chart data points with ring buffer

### UI/UX
13. Clean, professional dark theme design
14. Responsive layout for different screen sizes
15. Keyboard shortcuts (Space=play/pause, etc.)
16. Connection status indicator with quality meter
17. Performance metrics (updates/sec, latency)

## Project Structure

```
stock-ticker/
├── index.html
├── style.css
├── app.js
├── chart.js
├── StockSocket.js
└── README.md
```

## Step-by-Step Implementation Guide

### Step 1: HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stock Ticker - Real-Time Dashboard</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>📈 Real-Time Stock Ticker</h1>
        <div id="connectionInfo">
            <span id="statusDot" class="dot disconnected"></span>
            <span id="statusText">Disconnected</span>
            <span id="latencyDisplay">0ms</span>
        </div>
        <div class="header-controls">
            <input type="text" id="symbolInput" placeholder="Add symbol (e.g., AAPL)" maxlength="5">
            <button id="addSymbolBtn" class="btn btn-primary">Add</button>
            <button id="pauseBtn" class="btn btn-warning">⏸ Pause</button>
        </div>
    </header>

    <main>
        <aside id="sidebar">
            <div id="watchlist">
                <h3>Watchlist</h3>
                <ul id="symbolList">
                    <li class="symbol-item" data-symbol="AAPL">
                        <span class="symbol-name">AAPL</span>
                        <span class="symbol-price" id="price-AAPL">—</span>
                        <span class="symbol-change" id="change-AAPL">—</span>
                        <button class="remove-symbol" data-symbol="AAPL">×</button>
                    </li>
                    <li class="symbol-item" data-symbol="GOOGL">
                        <span class="symbol-name">GOOGL</span>
                        <span class="symbol-price" id="price-GOOGL">—</span>
                        <span class="symbol-change" id="change-GOOGL">—</span>
                        <button class="remove-symbol" data-symbol="GOOGL">×</button>
                    </li>
                    <li class="symbol-item" data-symbol="MSFT">
                        <span class="symbol-name">MSFT</span>
                        <span class="symbol-price" id="price-MSFT">—</span>
                        <span class="symbol-change" id="change-MSFT">—</span>
                        <button class="remove-symbol" data-symbol="MSFT">×</button>
                    </li>
                </ul>
            </div>
            
            <div id="portfolio">
                <h3>Portfolio</h3>
                <div id="portfolioValue">$0.00</div>
                <div id="portfolioPL">+$0.00 (0.00%)</div>
            </div>

            <div id="alerts">
                <h3>Alerts</h3>
                <div id="alertList">
                    <p class="no-alerts">No alerts set. Click the bell icon on any stock.</p>
                </div>
            </div>
        </aside>

        <section id="mainContent">
            <div id="chartContainer">
                <canvas id="priceChart"></canvas>
                <div id="chartControls">
                    <button class="timeframe active" data-frame="1m">1M</button>
                    <button class="timeframe" data-frame="5m">5M</button>
                    <button class="timeframe" data-frame="15m">15M</button>
                    <button class="timeframe" data-frame="1h">1H</button>
                </div>
            </div>

            <div id="marketOverview">
                <div class="overview-card">
                    <h4>Top Gainer</h4>
                    <div id="topGainer">—</div>
                </div>
                <div class="overview-card">
                    <h4>Top Loser</h4>
                    <div id="topLoser">—</div>
                </div>
                <div class="overview-card">
                    <h4>Volume</h4>
                    <div id="totalVolume">0</div>
                </div>
                <div class="overview-card">
                    <h4>Updates/s</h4>
                    <div id="updatesPerSec">0</div>
                </div>
            </div>

            <div id="recentTrades">
                <h3>Recent Trades</h3>
                <div id="tradeLog"></div>
            </div>
        </section>
    </main>

    <script src="StockSocket.js"></script>
    <script src="chart.js"></script>
    <script src="app.js"></script>
</body>
</html>
```

### Step 2: StockSocket — WebSocket Manager

```javascript
// StockSocket.js
class StockSocket {
    constructor(options = {}) {
        this.url = options.url || 'wss://echo.websocket.org';
        this.symbols = options.symbols || ['AAPL', 'GOOGL', 'MSFT'];
        this.reconnectInterval = options.reconnectInterval || 3000;
        this.maxRetries = options.maxRetries || 10;
        this.retryCount = 0;
        this.socket = null;
        this.shouldReconnect = true;
        this.listeners = new Map();
        this.paused = false;
        this.latency = 0;
        this.lastPingTime = 0;
        this.simulatedData = this.generateSimulatedData();
    }

    connect() {
        try {
            this.socket = new WebSocket(this.url);
        } catch (e) {
            this.socket = this.createSimulatedSocket();
        }

        this.socket.onopen = () => {
            this.retryCount = 0;
            this.emit('connected', { latency: this.latency });
            
            // Subscribe to symbols
            this.socket.send(JSON.stringify({
                type: 'subscribe',
                symbols: this.symbols
            }));
        };

        this.socket.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                
                if (data.type === 'price') {
                    this.emit('price', data);
                } else if (data.type === 'trade') {
                    this.emit('trade', data);
                } else if (data.type === 'pong') {
                    this.latency = Date.now() - this.lastPingTime;
                    this.emit('latency', this.latency);
                }
            } catch (e) {
                // Plain text or unknown format
            }
        };

        this.socket.onclose = (event) => {
            this.emit('disconnected', { code: event.code });
            
            if (this.shouldReconnect && this.retryCount < this.maxRetries) {
                this.retryCount++;
                const delay = this.reconnectInterval * this.retryCount;
                setTimeout(() => this.connect(), delay);
            }
        };

        this.socket.onerror = (event) => {
            this.emit('error', { message: 'WebSocket error' });
        };
    }

    disconnect() {
        this.shouldReconnect = false;
        if (this.socket) {
            this.socket.close(1000, 'User disconnected');
        }
    }

    subscribe(symbol) {
        if (!this.symbols.includes(symbol)) {
            this.symbols.push(symbol);
            if (this.socket?.readyState === WebSocket.OPEN) {
                this.socket.send(JSON.stringify({
                    type: 'subscribe',
                    symbols: [symbol]
                }));
            }
        }
    }

    unsubscribe(symbol) {
        this.symbols = this.symbols.filter(s => s !== symbol);
    }

    pause() {
        this.paused = true;
    }

    resume() {
        this.paused = false;
    }

    on(event, callback) {
        if (!this.listeners.has(event)) this.listeners.set(event, []);
        this.listeners.get(event).push(callback);
    }

    emit(event, data) {
        (this.listeners.get(event) || []).forEach(cb => cb(data));
    }

    generateSimulatedData() {
        const prices = {
            'AAPL': 175.50,
            'GOOGL': 142.30,
            'MSFT': 378.20,
            'AMZN': 178.90,
            'TSLA': 245.60,
            'META': 345.80,
            'NFLX': 480.20,
            'NVDA': 820.50
        };

        // Start simulated data stream
        setInterval(() => {
            if (this.paused || !this.socket || this.socket.readyState !== WebSocket.OPEN) return;

            this.symbols.forEach(symbol => {
                if (prices[symbol]) {
                    const change = (Math.random() - 0.5) * 4;
                    const newPrice = prices[symbol] + change;
                    prices[symbol] = Math.max(10, newPrice);

                    const priceData = {
                        type: 'price',
                        symbol: symbol,
                        price: prices[symbol],
                        change: change,
                        changePercent: (change / (prices[symbol] - change)) * 100,
                        volume: Math.floor(Math.random() * 1000000) + 100000,
                        timestamp: Date.now()
                    };

                    // Simulate socket message event
                    const handlers = this.socket._handlers?.message;
                    if (handlers) {
                        handlers.forEach(fn => fn({ data: JSON.stringify(priceData) }));
                    }
                }
            });

            // Simulate trades
            if (Math.random() > 0.7) {
                const symbol = this.symbols[Math.floor(Math.random() * this.symbols.length)];
                const tradeData = {
                    type: 'trade',
                    symbol: symbol,
                    price: prices[symbol],
                    shares: Math.floor(Math.random() * 1000) + 100,
                    side: Math.random() > 0.5 ? 'buy' : 'sell',
                    timestamp: Date.now()
                };
                const handlers = this.socket._handlers?.message;
                if (handlers) {
                    handlers.forEach(fn => fn({ data: JSON.stringify(tradeData) }));
                }
            }
        }, 200); // 5 updates per second
    }

    createSimulatedSocket() {
        const sim = {
            readyState: WebSocket.CONNECTING,
            _handlers: {},
            addEventListener: function(ev, fn) {
                if (!this._handlers[ev]) this._handlers[ev] = [];
                this._handlers[ev].push(fn);
            },
            send: function(data) {
                // No-op, the simulator generates data directly
            },
            close: function(code) {
                this.readyState = WebSocket.CLOSED;
                const h = this._handlers['close'];
                if (h) h.forEach(fn => fn({ code: code || 1000 }));
            }
        };

        ['onopen', 'onmessage', 'onclose', 'onerror'].forEach(ev => {
            Object.defineProperty(sim, ev, {
                set: function(fn) {
                    const eventName = ev.replace('on', '');
                    if (fn) this.addEventListener(eventName, fn);
                }
            });
        });

        setTimeout(() => {
            sim.readyState = WebSocket.OPEN;
            const h = sim._handlers['open'];
            if (h) h.forEach(fn => fn({}));
        }, 300);

        return sim;
    }
}
```

### Step 3: Chart Component

```javascript
// chart.js
class PriceChart {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.data = [];
        this.maxPoints = 200;
        this.symbol = 'AAPL';
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = this.canvas.parentElement.clientWidth;
        this.canvas.height = this.canvas.parentElement.clientHeight || 400;
        this.draw();
    }

    addDataPoint(priceData) {
        this.data.push({
            price: priceData.price,
            time: new Date(priceData.timestamp)
        });
        
        if (this.data.length > this.maxPoints) {
            this.data.shift();
        }
        
        this.draw();
    }

    clear() {
        this.data = [];
        this.draw();
    }

    draw() {
        const ctx = this.ctx;
        const w = this.canvas.width;
        const h = this.canvas.height;
        
        ctx.clearRect(0, 0, w, h);
        
        // Background
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(0, 0, w, h);

        if (this.data.length < 2) {
            ctx.fillStyle = '#4a4a6a';
            ctx.font = '20px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Waiting for data...', w/2, h/2);
            return;
        }

        // Calculate bounds
        const prices = this.data.map(d => d.price);
        const min = Math.min(...prices);
        const max = Math.max(...prices);
        const range = max - min || 1;
        const padding = 0.1 * range;

        // Grid lines
        ctx.strokeStyle = '#2a2a4a';
        ctx.lineWidth = 1;
        for (let i = 0; i < 5; i++) {
            const y = (h / 5) * i;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
        }

        // Price line
        const isUp = this.data[this.data.length - 1].price >= this.data[0].price;
        ctx.strokeStyle = isUp ? '#2ecc71' : '#e74c3c';
        ctx.lineWidth = 2;
        ctx.beginPath();

        this.data.forEach((d, i) => {
            const x = (i / (this.data.length - 1)) * w;
            const y = h - ((d.price - min + padding) / (range + 2 * padding)) * h;
            
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.stroke();

        // Gradient fill
        const gradient = ctx.createLinearGradient(0, 0, 0, h);
        gradient.addColorStop(0, isUp ? 'rgba(46, 204, 113, 0.3)' : 'rgba(231, 76, 60, 0.3)');
        gradient.addColorStop(1, 'rgba(26, 26, 46, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        const lastIdx = this.data.length - 1;
        ctx.moveTo(0, h);
        this.data.forEach((d, i) => {
            const x = (i / lastIdx) * w;
            const y = h - ((d.price - min + padding) / (range + 2 * padding)) * h;
            ctx.lineTo(x, y);
        });
        ctx.lineTo(w, h);
        ctx.closePath();
        ctx.fill();

        // Current price label
        const lastPrice = this.data[this.data.length - 1].price;
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`$${lastPrice.toFixed(2)}`, 15, 35);
        
        ctx.fillStyle = '#8899aa';
        ctx.font = '14px Arial';
        ctx.fillText(this.symbol, 15, 55);

        // Y-axis labels
        ctx.fillStyle = '#667788';
        ctx.font = '11px Arial';
        ctx.textAlign = 'right';
        for (let i = 0; i < 5; i++) {
            const price = max - (range / 4) * i;
            const y = (h / 4) * i + 10;
            ctx.fillText(`$${price.toFixed(2)}`, w - 10, y);
        }
    }
}
```

### Step 4: Main Application

```javascript
// app.js
const socket = new StockSocket();
const chart = new PriceChart('priceChart');
const state = {
    prices: {},
    changes: {},
    symbols: ['AAPL', 'GOOGL', 'MSFT'],
    portfolio: { AAPL: 10, GOOGL: 5, MSFT: 8 },
    alerts: [],
    paused: false,
    updateCount: 0,
    lastSecond: Date.now()
};

// Initialize
function init() {
    loadState();
    setupEventListeners();
    socket.connect();
}

function loadState() {
    // Load saved symbols and portfolio from Local Storage
    const saved = localStorage.getItem('stock_ticker_state');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            state.symbols = parsed.symbols || state.symbols;
            state.portfolio = parsed.portfolio || state.portfolio;
        } catch (e) {}
    }
}

function saveState() {
    localStorage.setItem('stock_ticker_state', JSON.stringify({
        symbols: state.symbols,
        portfolio: state.portfolio
    }));
}

// WebSocket event handlers
socket.on('connected', (data) => {
    updateConnectionStatus('connected');
    addLog('Connected to market data feed');
});

socket.on('disconnected', (data) => {
    updateConnectionStatus('disconnected');
    addLog(`Disconnected (code: ${data.code}). Reconnecting...`);
});

socket.on('price', (data) => {
    if (state.paused) return;
    
    state.prices[data.symbol] = data.price;
    state.changes[data.symbol] = data.changePercent;
    
    updatePriceDisplay(data);
    updateChart(data);
    updatePortfolio();
    updateMarketOverview();
    checkAlerts(data);
    
    state.updateCount++;
    updatePerformanceMetrics();
});

socket.on('trade', (data) => {
    addTradeToLog(data);
});

socket.on('latency', (latency) => {
    document.getElementById('latencyDisplay').textContent = `${latency}ms`;
});

// UI Updates
function updateConnectionStatus(status) {
    const dot = document.getElementById('statusDot');
    const text = document.getElementById('statusText');
    
    dot.className = 'dot ' + status;
    text.textContent = status.charAt(0).toUpperCase() + status.slice(1);
}

function updatePriceDisplay(priceData) {
    const priceEl = document.getElementById(`price-${priceData.symbol}`);
    const changeEl = document.getElementById(`change-${priceData.symbol}`);
    
    if (priceEl) {
        priceEl.textContent = `$${priceData.price.toFixed(2)}`;
    }
    if (changeEl) {
        const change = priceData.changePercent;
        changeEl.textContent = `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`;
        changeEl.className = `symbol-change ${change >= 0 ? 'positive' : 'negative'}`;
    }
}

function updateChart(priceData) {
    if (priceData.symbol === chart.symbol || chart.data.length === 0) {
        chart.addDataPoint(priceData);
    }
}

function updatePortfolio() {
    let totalValue = 0;
    let totalCost = 0;
    
    Object.entries(state.portfolio).forEach(([symbol, shares]) => {
        const price = state.prices[symbol] || 0;
        const cost = symbol === 'AAPL' ? 150 : symbol === 'GOOGL' ? 130 : 350; // Average cost basis
        totalValue += price * shares;
        totalCost += cost * shares;
    });
    
    const pl = totalValue - totalCost;
    const plPercent = totalCost > 0 ? (pl / totalCost) * 100 : 0;
    
    document.getElementById('portfolioValue').textContent = `$${totalValue.toFixed(2)}`;
    const plEl = document.getElementById('portfolioPL');
    plEl.textContent = `${pl >= 0 ? '+' : ''}$${pl.toFixed(2)} (${plPercent >= 0 ? '+' : ''}${plPercent.toFixed(2)}%)`;
    plEl.className = pl >= 0 ? 'positive' : 'negative';
}

function updateMarketOverview() {
    let topGainer = { symbol: '', change: -Infinity };
    let topLoser = { symbol: '', change: Infinity };
    
    Object.entries(state.changes).forEach(([symbol, change]) => {
        if (change > topGainer.change) topGainer = { symbol, change };
        if (change < topLoser.change) topLoser = { symbol, change };
    });
    
    document.getElementById('topGainer').textContent = topGainer.symbol ?
        `${topGainer.symbol} (+${topGainer.change.toFixed(2)}%)` : '—';
    document.getElementById('topLoser').textContent = topLoser.symbol ?
        `${topLoser.symbol} (${topLoser.change.toFixed(2)}%)` : '—';
}

function updatePerformanceMetrics() {
    const now = Date.now();
    if (now - state.lastSecond >= 1000) {
        document.getElementById('updatesPerSec').textContent = state.updateCount;
        state.updateCount = 0;
        state.lastSecond = now;
    }
}

function checkAlerts(priceData) {
    state.alerts.forEach(alert => {
        if (alert.symbol === priceData.symbol) {
            if (alert.type === 'above' && priceData.price >= alert.price) {
                showNotification(`${priceData.symbol} crossed above $${alert.price}`);
            } else if (alert.type === 'below' && priceData.price <= alert.price) {
                showNotification(`${priceData.symbol} crossed below $${alert.price}`);
            }
        }
    });
}

function showNotification(message) {
    if (Notification.permission === 'granted') {
        new Notification('Stock Alert', { body: message, icon: '📈' });
    }
}

function addTradeToLog(trade) {
    const log = document.getElementById('tradeLog');
    const entry = document.createElement('div');
    entry.className = `trade-entry trade-${trade.side}`;
    entry.textContent = `${trade.side.toUpperCase()} ${trade.shares} ${trade.symbol} @ $${trade.price.toFixed(2)}`;
    log.prepend(entry);
    
    if (log.children.length > 50) {
        log.removeChild(log.lastChild);
    }
}

function addLog(message) {
    // Simple console log for now
    console.log(`[${new Date().toLocaleTimeString()}] ${message}`);
}

// Event Listeners
function setupEventListeners() {
    // Add symbol
    document.getElementById('addSymbolBtn').addEventListener('click', () => {
        const input = document.getElementById('symbolInput');
        const symbol = input.value.trim().toUpperCase();
        
        if (symbol && !state.symbols.includes(symbol)) {
            state.symbols.push(symbol);
            socket.subscribe(symbol);
            addSymbolToWatchlist(symbol);
            input.value = '';
            saveState();
        }
    });
    
    // Pause/Resume
    document.getElementById('pauseBtn').addEventListener('click', () => {
        state.paused = !state.paused;
        document.getElementById('pauseBtn').textContent = state.paused ? '▶ Resume' : '⏸ Pause';
        state.paused ? socket.pause() : socket.resume();
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === ' ' && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            document.getElementById('pauseBtn').click();
        }
    });
    
    // Symbol list click delegation
    document.getElementById('symbolList').addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.remove-symbol');
        if (removeBtn) {
            const symbol = removeBtn.dataset.symbol;
            state.symbols = state.symbols.filter(s => s !== symbol);
            socket.unsubscribe(symbol);
            removeBtn.closest('.symbol-item').remove();
            saveState();
        }
        
        const symbolItem = e.target.closest('.symbol-item');
        if (symbolItem && !removeBtn) {
            chart.symbol = symbolItem.dataset.symbol;
            chart.clear();
        }
    });
}

function addSymbolToWatchlist(symbol) {
    const list = document.getElementById('symbolList');
    const li = document.createElement('li');
    li.className = 'symbol-item';
    li.dataset.symbol = symbol;
    li.innerHTML = `
        <span class="symbol-name">${symbol}</span>
        <span class="symbol-price" id="price-${symbol}">—</span>
        <span class="symbol-change" id="change-${symbol}">—</span>
        <button class="remove-symbol" data-symbol="${symbol}">×</button>
    `;
    list.appendChild(li);
}

// Request notification permission
if ('Notification' in window) {
    Notification.requestPermission();
}

// Initialize
document.addEventListener('DOMContentLoaded', init);
```

### Step 5: Testing

1. Open the dashboard and verify connection status indicator
2. Watch real-time price updates for default symbols (AAPL, GOOGL, MSFT)
3. Add new symbols and verify they appear in the watchlist
4. Remove symbols from the watchlist
5. Pause and resume the data stream
6. Observe the chart updating in real-time
7. Check portfolio value changes with price movements
8. Set price alerts and verify notification
9. Disconnect network and verify reconnection
10. Check latency display for connection quality

## Bonus Features

- **Multiple timeframes**: 1M, 5M, 15M, 1H candlestick charts
- **Volume indicator**: Show trading volume as histogram on chart
- **Dark/Light theme**: Toggle between themes
- **Export data**: Download price history as CSV
- **Technical indicators**: SMA, EMA, RSI, MACD overlays
- **Multi-window**: Open charts in separate windows
- **Sound alerts**: Play audio on price alerts
- **News feed**: Integrate real-time news related to watched stocks

## Evaluation Criteria

- WebSocket connection is properly established and managed
- Reconnection logic works with exponential backoff
- Price updates are displayed in real-time without UI lag
- Chart renders correctly with live data updates
- Portfolio calculations are accurate
- Watchlist management works (add/remove symbols)
- Connection status indicator shows correct state
- Pause/resume functionality works
- Alerts trigger correctly at price thresholds
- Performance metrics are displayed accurately
- Code is well-organized with clear separation of concerns

## Submission

Submit the complete project with all source files. Include a README explaining the architecture, WebSocket protocol design, and any trade-offs made. Provide instructions for running the app (with or without a real WebSocket server). Document the simulated data generator for testing without a live server.
