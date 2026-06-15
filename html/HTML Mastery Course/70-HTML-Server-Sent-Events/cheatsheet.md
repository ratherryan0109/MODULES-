# Server-Sent Events Cheatsheet

## EventSource API

```javascript
// Create connection
const es = new EventSource('/api/events')
const es = new EventSource('/api/events', { withCredentials: true })

// Connection states
EventSource.CONNECTING // 0
EventSource.OPEN       // 1
EventSource.CLOSED     // 2
```

## Events

| Event | Handler | Description |
|-------|---------|-------------|
| `open` | `es.onopen` | Connection established |
| `message` | `es.onmessage` | Data received |
| `error` | `es.onerror` | Connection error |

## Methods & Properties

| Method/Property | Description |
|----------------|-------------|
| `es.close()` | Close the connection |
| `es.readyState` | Current state (0, 1, 2) |
| `es.url` | The source URL |

## Custom Event Types

```javascript
// Server sends:
// event: userupdate
// data: {"id": 1, "name": "Alice"}

// Client receives:
es.addEventListener('userupdate', (e) => {
    const data = JSON.parse(e.data)
})
```

## EventStream Protocol Format

```
event: notification       # Event type (optional, defaults to 'message')
id: 42                    # Event ID (for reconnection tracking)
data: {"message": "Hi"}   # Payload (can be multiple lines)
retry: 5000               # Reconnect delay in ms
                          # Blank line = end of event
```

## Fields

| Field | Required | Description |
|-------|:--------:|-------------|
| `event` | No | Event type name (default: 'message') |
| `data` | Yes | Event payload (string) |
| `id` | No | Event ID for Last-Event-ID tracking |
| `retry` | No | Reconnection delay in milliseconds |
| `:` (comment) | No | Ignored by EventSource |

## Server Response Headers

```
Content-Type: text/event-stream
Cache-Control: no-cache
Connection: keep-alive
Access-Control-Allow-Origin: *  (if CORS needed)
```

## Reconnection

```javascript
// Browser automatically reconnects
// Sends header: Last-Event-ID: <last received id>
// Server should resume from that ID

// Close permanently (no reconnect)
es.close()
```

## SSE vs WebSocket Quick Comparison

| Feature | SSE | WebSocket |
|---------|:---:|:---------:|
| Direction | Server → Client | Bidirectional |
| HTTP-based | ✅ | Upgrade only |
| Auto-reconnect | ✅ Built-in | ❌ Manual |
| Binary data | ❌ | ✅ |
| Event IDs | ✅ | ❌ |
| Protocol | HTTP | WS |
| Complexity | Low | Medium |

## Common Pattern

```javascript
// Client
const es = new EventSource('/api/stream')

es.onopen = () => console.log('Connected')
es.onerror = () => console.log('Error')

es.addEventListener('message', (e) => {
    try {
        const data = JSON.parse(e.data)
        updateUI(data)
    } catch (err) {
        console.error('Parse error:', err)
    }
})

// To stop:
// es.close()
```

## Server Example (Node.js)

```javascript
app.get('/api/stream', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    })

    // Send events
    setInterval(() => {
        res.write(`data: ${JSON.stringify({time: new Date()})}\n\n`)
    }, 1000)

    // Heartbeat comment
    setInterval(() => {
        res.write(': heartbeat\n\n')
    }, 30000)
})
```

## Browser Support

| Chrome | Firefox | Safari | Edge | IE |
|:------:|:-------:|:------:|:----:|:--:|
| 9+ | 6+ | 5+ | 79+ | ❌ |
