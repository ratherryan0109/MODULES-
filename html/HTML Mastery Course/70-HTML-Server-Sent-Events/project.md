# Mini Project: Live Auction System with SSE

## Project Overview

Build a real-time auction platform where live bid updates are pushed from server to clients using Server-Sent Events. The system displays auction items, current bids, bid history, countdown timers, and notifies participants when they've been outbid. SSE ensures all connected clients see updates instantly without polling.

## Learning Objectives

- Implement SSE client with EventSource API
- Handle multiple event types (bid update, auction start/end, outbid notice)
- Manage connection lifecycle with reconnection
- Process high-frequency updates efficiently
- Build a real-time UI that reflects server state

## Requirements

### Core Features
1. Display auction items with current bid, time remaining, and bid count
2. Real-time bid updates via SSE when new bids arrive
3. Live countdown timer synced with server time
4. Bid history log with timestamps
5. Visual outbid notification (flash/alert when outbid)
6. Connection status indicator with auto-reconnect display
7. Place bid form (simulated)

### Data Handling
8. Server sends 'auction' events with item updates
9. Server sends 'bid' events for new bids
10. Server sends 'system' events (auction start, end, extension)
11. Track event IDs for reconnection
12. Buffer events and replay on reconnect

### UI/UX
13. Clean, modern auction-style interface
14. Green/red indicators for price changes
15. Bid increment suggestions
16. Mobile-responsive layout

## Project Structure

```
live-auction/
├── index.html
├── style.css
├── app.js
└── README.md
```

## Step-by-Step Implementation

### Step 1: HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Auction - SSE Platform</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>🏆 Live Auction House</h1>
        <div id="connectionInfo">
            <span id="statusDot">●</span>
            <span id="statusText">Connecting...</span>
            <span id="reconnectInfo"></span>
        </div>
    </header>

    <main>
        <div id="auctionItems">
            <div class="auction-card" data-item="vintage-watch">
                <div class="item-image">⌚</div>
                <h3>Vintage Rolex Submariner</h3>
                <div class="current-bid">
                    <span class="label">Current Bid:</span>
                    <span class="price" id="price-vintage-watch">$0</span>
                </div>
                <div class="bid-info">
                    <span>Bids: <span id="bids-vintage-watch">0</span></span>
                    <span>Time: <span class="timer" id="timer-vintage-watch">--:--</span></span>
                </div>
                <div class="bid-section">
                    <input type="number" id="bid-vintage-watch" placeholder="Your bid" step="10">
                    <button onclick="placeBid('vintage-watch')">Place Bid</button>
                </div>
            </div>
            
            <div class="auction-card" data-item="art-painting">
                <div class="item-image">🎨</div>
                <h3>Original Monet Print</h3>
                <div class="current-bid">
                    <span class="label">Current Bid:</span>
                    <span class="price" id="price-art-painting">$0</span>
                </div>
                <div class="bid-info">
                    <span>Bids: <span id="bids-art-painting">0</span></span>
                    <span>Time: <span class="timer" id="timer-art-painting">--:--</span></span>
                </div>
                <div class="bid-section">
                    <input type="number" id="bid-art-painting" placeholder="Your bid" step="50">
                    <button onclick="placeBid('art-painting')">Place Bid</button>
                </div>
            </div>
        </div>

        <aside id="sidePanel">
            <h3>Live Activity</h3>
            <div id="activityLog"></div>
        </aside>
    </main>

    <div id="outbidNotification" class="toast">You've been outbid!</div>
    
    <script src="app.js"></script>
</body>
</html>
```

### Step 2: Application Logic

```javascript
// app.js
const ITEMS = ['vintage-watch', 'art-painting'];
const eventSource = new EventSource('/api/auction');

// State
const auctionState = {
    'vintage-watch': { price: 1000, bids: 0, endTime: Date.now() + 300000 },
    'art-painting': { price: 5000, bids: 0, endTime: Date.now() + 600000 }
};

// Event handlers
eventSource.onopen = () => {
    document.getElementById('statusDot').style.color = '#2ecc71';
    document.getElementById('statusText').textContent = 'Connected';
};

eventSource.onerror = () => {
    document.getElementById('statusDot').style.color = '#e74c3c';
    document.getElementById('statusText').textContent = 'Disconnected. Reconnecting...';
};

// Auction updates
eventSource.addEventListener('auction', (e) => {
    const data = JSON.parse(e.data);
    updateAuctionCard(data);
    addActivity(`💰 ${data.item} updated to $${data.price}`, 'bid');
});

// Bid events
eventSource.addEventListener('bid', (e) => {
    const data = JSON.parse(e.data);
    const itemEl = document.querySelector(`[data-item="${data.item}"]`);
    if (itemEl) {
        // Flash animation
        itemEl.style.animation = 'flash 0.5s';
        setTimeout(() => itemEl.style.animation = '', 500);
        
        if (data.outbid) {
            showOutbidNotification(data.item);
        }
    }
});

// System events
eventSource.addEventListener('system', (e) => {
    const data = JSON.parse(e.data);
    if (data.type === 'auction-end') {
        addActivity(`🏁 Auction ended for ${data.item}! Final price: $${data.price}`, 'system');
        document.querySelector(`[data-item="${data.item}"] .bid-section`).style.display = 'none';
    } else if (data.type === 'timer-extend') {
        addActivity(`⏱ Timer extended for ${data.item} due to late bid`, 'system');
    }
});

function updateAuctionCard(data) {
    auctionState[data.item] = data;
    document.getElementById(`price-${data.item}`).textContent = `$${data.price}`;
    document.getElementById(`bids-${data.item}`).textContent = data.bids;
}

function placeBid(itemId) {
    const input = document.getElementById(`bid-${itemId}`);
    const amount = parseInt(input.value);
    if (!amount || amount <= auctionState[itemId].price) {
        alert('Bid must be higher than current price');
        return;
    }
    
    // Send bid via fetch (SSE is receive-only)
    fetch('/api/bid', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item: itemId, amount })
    }).then(r => r.json()).then(data => {
        if (data.success) {
            input.value = '';
            addActivity(`✅ You bid $${amount} on ${itemId}`, 'self');
        }
    });
}

function showOutbidNotification(item) {
    const toast = document.getElementById('outbidNotification');
    toast.textContent = `You've been outbid on ${item}!`;
    toast.className = 'toast show';
    setTimeout(() => toast.className = 'toast', 3000);
}

function addActivity(message, type) {
    const log = document.getElementById('activityLog');
    const entry = document.createElement('div');
    entry.className = `activity-entry activity-${type}`;
    const time = new Date().toLocaleTimeString();
    entry.innerHTML = `<span class="time">[${time}]</span> ${message}`;
    log.prepend(entry);
    if (log.children.length > 50) log.removeChild(log.lastChild);
}

// Countdown timer
setInterval(() => {
    ITEMS.forEach(item => {
        const state = auctionState[item];
        if (!state || !state.endTime) return;
        const remaining = Math.max(0, state.endTime - Date.now());
        const mins = Math.floor(remaining / 60000);
        const secs = Math.floor((remaining % 60000) / 1000);
        document.getElementById(`timer-${item}`).textContent = 
            `${mins}:${secs.toString().padStart(2, '0')}`;
    });
}, 1000);
```

## Testing

1. Open the auction page and verify SSE connection establishes
2. Watch live price updates for auction items
3. Place bids and verify they appear in activity log
4. Observe countdown timers counting down
5. Test reconnection by disconnecting network
6. Verify event IDs are tracked for missed events
7. Test multiple browser tabs receiving same updates

## Evaluation

- SSE connection is established and maintained
- Bid updates appear in real-time without page refresh
- Countdown timers are accurate and synced
- Outbid notifications work correctly
- Reconnection handles network drops gracefully
- Activity log shows all events with timestamps
- Connection status indicator is accurate
- Multiple tabs receive synchronized updates

## Submission

Submit the complete project as HTML/CSS/JS files. Include a Node.js server script that sends SSE events and handles bid POST requests. Document the SSE protocol format used for each event type.
