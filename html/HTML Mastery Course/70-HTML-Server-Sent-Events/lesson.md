# Module 70: HTML Server-Sent Events

## Introduction

Server-Sent Events (SSE) is a standard that enables servers to push data to web clients over HTTP connections. Unlike WebSockets which provide bidirectional communication, SSE is unidirectional — data flows only from server to client. This makes SSE ideal for applications that need real-time updates from the server but don't require sending data from the client.

SSE leverages standard HTTP, making it easy to implement with existing server infrastructure. It includes built-in support for reconnection, event IDs, and custom event types, simplifying the development of live-updating features.

## Learning Objectives

By the end of this module, you will be able to:

- Understand the Server-Sent Events protocol and its EventStream format
- Create and consume SSE streams using the EventSource API
- Handle different event types and parse event data
- Implement reconnection logic and track event IDs
- Build real-world applications using SSE (notifications, live feeds, dashboards)
- Compare SSE with WebSockets and choose the right tool
- Understand SSE limitations and workarounds

## How SSE Works

```
┌──────────┐                    ┌──────────┐
│  Client   │   HTTP Request     │  Server   │
│  Browser  │ ──────────────────▶│           │
│           │   eventSource=     │           │
│           │   new EventSource(│           │
│           │    '/events')      │           │
│           │                    │           │
│           │◀───────────────── │           │
│           │   HTTP 200 OK     │           │
│           │   Content-Type:   │           │
│           │   text/event-stream│           │
│           │                    │           │
│           │◀─ data: {...} ────│           │
│           │◀─ data: {...} ────│           │
│           │◀─ data: {...} ────│           │
│           │  (stream stays     │           │
│           │   open)            │           │
└──────────┘                    └──────────┘
```

## The EventSource API

### Creating a Connection

```javascript
// Basic connection
const eventSource = new EventSource('/api/events');

// With credentials (cookies, auth)
const eventSource = new EventSource('/api/events', {
    withCredentials: true
});
```

### Handling Events

```javascript
// Default 'message' event
eventSource.onmessage = function(event) {
    console.log('Received:', event.data);
};

// Or using addEventListener
eventSource.addEventListener('message', function(event) {
    console.log('Data:', event.data);
});

// Custom event types
eventSource.addEventListener('user-update', function(event) {
    const userData = JSON.parse(event.data);
    console.log('User updated:', userData);
});

eventSource.addEventListener('notification', function(event) {
    const notification = JSON.parse(event.data);
    showNotification(notification);
});
```

### Connection States

```javascript
console.log(EventSource.CONNECTING); // 0 - Connecting
console.log(EventSource.OPEN);       // 1 - Connected
console.log(EventSource.CLOSED);     // 2 - Closed

eventSource.onopen = function() {
    console.log('Connection opened');
};

eventSource.onerror = function() {
    console.log('Connection error - will auto-reconnect');
};
```

### Closing a Connection

```javascript
// Close the connection
eventSource.close();
```

## The EventStream Protocol

SSE uses the `text/event-stream` content type. Each event is a block of text with specific fields:

```
event: notification
id: 42
data: {"message": "Hello!", "type": "info"}
retry: 5000

data: This is a simple message

event: custom
data: Line 1
data: Line 2
id: 43

```

### Field Types

| Field | Description | Required |
|-------|-------------|:--------:|
| `event` | Event type/name | No (defaults to 'message') |
| `data` | Event payload (text or JSON) | Yes |
| `id` | Event ID (used for reconnection tracking) | No |
| `retry` | Reconnection time in milliseconds | No |

### Rules

- Fields are separated by newlines
- Multiple `data:` lines are concatenated with newlines
- An empty line (`\n\n`) marks the end of an event
- Lines starting with `:` are comments (ignored)
- The connection stays open; the server sends events as they occur

## SSE vs WebSockets

| Feature | SSE | WebSocket |
|---------|:---:|:---------:|
| Direction | Server → Client | Bidirectional |
| Protocol | HTTP | WebSocket (ws://) |
| Auto-reconnect | ✅ Built-in | ❌ Manual |
| Event ID tracking | ✅ Built-in | ❌ Manual |
| Binary data | ❌ (text only) | ✅ |
| Max connections per domain | 6-10 | 6-10 |
| Server complexity | Low | Medium/High |
| Browser support | Good (IE excepted) | Excellent |

## Practical Patterns

### Auto-Reconnection

SSE automatically reconnects when the connection drops. The client sends the last received event ID:

```javascript
// Server sends event with ID
// id: 42

// On reconnect, browser automatically sends:
// Last-Event-ID: 42

// Server can then resume from that point
```

### Custom Retry Interval

The server can suggest a retry interval:

```javascript
// Server sends:
// retry: 10000
// (Wait 10 seconds before reconnecting)
```

## Common Mistakes

### Mistake 1: Using POST instead of GET

```javascript
// ❌ Wrong - EventSource only supports GET
EventSource cannot send POST requests

// ✅ Correct - Server must handle GET requests
const eventSource = new EventSource('/api/stream');
```

### Mistake 2: Not Parsing JSON Data

```javascript
// ❌ Wrong - data is always a string
eventSource.onmessage = (e) => {
    console.log(e.data.name); // undefined
};

// ✅ Correct
eventSource.onmessage = (e) => {
    const data = JSON.parse(e.data);
    console.log(data.name);
};
```

### Mistake 3: Exceeding Connection Limits

```javascript
// ❌ Wrong - opening too many connections
for (let i = 0; i < 20; i++) {
    new EventSource('/api/stream'); // Some will fail
}

// ✅ Correct - manage connections or use workers
```

### Mistake 4: Not Closing Connections

```javascript
// ❌ Wrong - connection stays open
const es = new EventSource('/api/events');
// Never closed, even when leaving page

// ✅ Correct - close when done
es.close();
```

## Best Practices

1. **Always parse JSON with try-catch**: Event data is always a string
2. **Use event types**: Define custom events for different data types
3. **Send event IDs**: Enable reliable reconnection
4. **Set appropriate retry intervals**: Don't overwhelm the server on reconnect
5. **Close unused connections**: Clean up when navigating away
6. **Monitor readyState**: Track connection status for UI indicators
7. **Use withCredentials for auth**: Include cookies for authenticated streams
8. **Fall back to polling**: Handle browsers that don't support SSE
9. **One connection per type**: Group related events into one stream
10. **Keep connections alive**: Servers must send heartbeats to prevent timeout

## Real-World Use Cases

- Live news feeds and social media streams
- Real-time notifications
- Live sports scores and data feeds
- Stock tickers (server → client only)
- Server monitoring dashboards
- Log streaming
- Progress updates for long-running tasks
- Live blog updates

## Summary Notes

- SSE provides unidirectional server-to-client streaming over HTTP
- Uses the EventSource API in the browser
- Built-in auto-reconnection with Last-Event-ID tracking
- Custom event types allow routing different data
- Data is always text (use JSON for structured data)
- Simpler than WebSockets for server-push-only scenarios
- No binary data support
- Limited to 6-10 connections per domain (like HTTP)
- Comments (lines starting with `:`) can be used for keepalive
- Retry field controls reconnection timing
- Available in all modern browsers except Internet Explorer
