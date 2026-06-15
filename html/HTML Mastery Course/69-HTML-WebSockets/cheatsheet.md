# WebSockets Cheatsheet

## Basic Usage

```javascript
// Create connection
const socket = new WebSocket('wss://example.com/ws')

// Connection states
WebSocket.CONNECTING // 0 - Connecting
WebSocket.OPEN       // 1 - Open, ready to communicate
WebSocket.CLOSING    // 2 - Closing
WebSocket.CLOSED     // 3 - Closed
```

## Events

| Event | Handler | Description |
|-------|---------|-------------|
| `open` | `socket.onopen` | Connection established |
| `message` | `socket.onmessage` | Data received from server |
| `close` | `socket.onclose` | Connection closed |
| `error` | `socket.onerror` | Error occurred |

## Methods

| Method | Description |
|--------|-------------|
| `socket.send(data)` | Send data (string, ArrayBuffer, Blob) |
| `socket.close(code, reason)` | Close connection |

## Close Codes

| Code | Meaning |
|:----:|---------|
| 1000 | Normal closure |
| 1001 | Going away |
| 1002 | Protocol error |
| 1003 | Unsupported data |
| 1006 | Abnormal close (no close frame) |
| 1008 | Policy violation |
| 1009 | Message too big |
| 1011 | Internal server error |
| 1015 | TLS handshake failure |

## Message Protocol Pattern

```javascript
// Structured message format
const msg = {
    type: 'chat',        // Message type
    payload: {           // Data
        text: 'Hello',
        sender: 'user1'
    },
    id: 'msg_001',       // Unique ID
    timestamp: 1700000000 // Unix timestamp
}

socket.send(JSON.stringify(msg))
```

## Reconnection Pattern

```javascript
function connect() {
    const socket = new WebSocket('wss://server.com')
    
    socket.onclose = (e) => {
        console.log(`Closed: ${e.code}. Reconnecting...`)
        setTimeout(connect, 3000)
    }
    
    socket.onopen = () => {
        console.log('Connected')
    }
}
```

## Exponential Backoff

```javascript
let attempts = 0
const maxAttempts = 10

function reconnect() {
    if (attempts >= maxAttempts) return
    const delay = Math.min(1000 * Math.pow(2, attempts), 30000)
    attempts++
    setTimeout(connect, delay + Math.random() * 1000)
}
```

## Heartbeat

```javascript
let heartbeatInterval

socket.onopen = () => {
    heartbeatInterval = setInterval(() => {
        socket.send(JSON.stringify({ type: 'ping' }))
    }, 30000)
}

socket.onclose = () => {
    clearInterval(heartbeatInterval)
}
```

## Binary Data

```javascript
// Set binary type
socket.binaryType = 'arraybuffer' // or 'blob' (default)

// Send binary
const buffer = new ArrayBuffer(4)
socket.send(buffer)

// Receive binary
socket.onmessage = (e) => {
    if (e.data instanceof ArrayBuffer) {
        const view = new DataView(e.data)
    }
}
```

## Security

```
✅ Always use wss:// in production
✅ Validate Origin header on server
✅ Implement authentication
✅ Use message validation
✅ Set message size limits
❌ Never trust client data
❌ Don't use ws:// in production
```

## URL Schemes

| Scheme | Protocol | Security |
|--------|----------|----------|
| `ws://` | WebSocket | Unencrypted |
| `wss://` | WebSocket Secure | TLS/SSL encrypted |

## Properties

| Property | Description |
|----------|-------------|
| `socket.url` | The URL of the WebSocket server |
| `socket.readyState` | Current connection state (0-3) |
| `socket.bufferedAmount` | Bytes queued but not yet sent |
| `socket.binaryType` | 'blob' or 'arraybuffer' |
| `socket.protocol` | Selected subprotocol |
| `socket.extensions` | Negotiated extensions |

## Browser Support

| Chrome | Firefox | Safari | Edge | IE |
|:------:|:-------:|:------:|:----:|:--:|
| 16+ | 11+ | 7+ | 12+ | 10+ |

## Common Patterns

```javascript
// Check state before sending
if (socket.readyState === WebSocket.OPEN) {
    socket.send(data)
}

// Graceful close
socket.close(1000, 'Goodbye')

// Parse JSON safely
socket.onmessage = (e) => {
    try {
        const data = JSON.parse(e.data)
    } catch (err) {
        console.error('Invalid JSON:', err)
    }
}
```

## WebSocket vs Alternatives

| Feature | WebSocket | SSE | Long-Polling |
|---------|:---------:|:---:|:------------:|
| Direction | Bidirectional | Server→Client | Bidirectional |
| Protocol | WS/WSS | HTTP | HTTP |
| Auto-reconnect | ❌ (manual) | ✅ | ✅ |
| Binary data | ✅ | ❌ (text only) | ✅ |
| Browser support | Excellent | Good | Universal |
| Latency | Low | Low | High |
