# Module 69: HTML WebSockets

## Introduction

WebSockets represent a fundamental shift in how web applications communicate over the internet. Traditional HTTP communication follows a request-response pattern: the client sends a request, and the server sends back a response. This model works well for traditional web pages but falls short for real-time applications like chat apps, live dashboards, gaming, and collaborative tools.

WebSockets, standardized as part of HTML5, provide a full-duplex communication channel over a single TCP connection. This means both the client and server can send messages to each other at any time, without the overhead of repeated HTTP handshakes. The result is a persistent, low-latency connection ideal for real-time applications.

## Learning Objectives

By the end of this module, you will be able to:

- Understand the WebSocket protocol and how it differs from HTTP
- Establish WebSocket connections from the browser
- Send and receive messages (text and binary)
- Handle connection events (open, close, error)
- Implement reconnection strategies for reliability
- Build real-world real-time applications
- Understand WebSocket security considerations
- Implement chat applications and live data streams

## How WebSockets Work

```
┌──────────┐                    ┌──────────┐
│  Client   │    HTTP Upgrade    │  Server   │
│  Browser  │ ──────────────────▶│  wss://   │
│           │    Request         │           │
│           │                    │           │
│           │◀────────────────── │           │
│           │  101 Switching    │           │
│           │   Protocols        │           │
│           │                    │           │
│           │━━━━━━━━━━━━━━━━━━▶│           │
│           │  Bidirectional     │           │
│           │◀━━━━━━━━━━━━━━━━━━│           │
│           │  WebSocket         │           │
│           │  Messages          │           │
└──────────┘                    └──────────┘
```

### The WebSocket Handshake

1. Client sends an HTTP Upgrade request:
```
GET /chat HTTP/1.1
Host: example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
```

2. Server responds with 101 Switching Protocols:
```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
Sec-WebSocket-Protocol: chat
```

3. After handshake, the connection upgrades from HTTP to WebSocket protocol

## WebSocket API

### Creating a Connection

```javascript
// Create a WebSocket connection
const socket = new WebSocket('ws://localhost:8080');

// Secure WebSocket (WSS)
const secureSocket = new WebSocket('wss://example.com/ws');
```

### Connection States

```javascript
console.log(WebSocket.CONNECTING); // 0 - Connection not yet open
console.log(WebSocket.OPEN);       // 1 - Connection open and ready
console.log(WebSocket.CLOSING);    // 2 - Connection is closing
console.log(WebSocket.CLOSED);     // 3 - Connection is closed

// Check current state
if (socket.readyState === WebSocket.OPEN) {
    socket.send('Hello!');
}
```

### Events

```javascript
const socket = new WebSocket('wss://echo.example.com');

// Connection opened
socket.addEventListener('open', function(event) {
    console.log('Connected to server');
    socket.send('Hello Server!');
});

// Message received
socket.addEventListener('message', function(event) {
    console.log('Message from server:', event.data);
});

// Connection closed
socket.addEventListener('close', function(event) {
    console.log('Disconnected:', event.code, event.reason);
});

// Error occurred
socket.addEventListener('error', function(event) {
    console.error('WebSocket error:', event);
});
```

### Sending Data

```javascript
// Send text (UTF-8 string)
socket.send('Hello!');

// Send JSON
socket.send(JSON.stringify({ type: 'chat', message: 'Hello!' }));

// Send binary data (ArrayBuffer)
const buffer = new ArrayBuffer(4);
const view = new DataView(buffer);
view.setUint32(0, 123456);
socket.send(buffer);

// Send Blob
const blob = new Blob(['Hello'], { type: 'text/plain' });
socket.send(blob);
```

### Closing Connection

```javascript
// Graceful close
socket.close(1000, 'Client closing');

// Close with specific code
socket.close(1000);   // Normal closure
socket.close(1001);   // Going away
socket.close(1008);   // Policy violation
```

## WebSocket Close Codes

| Code | Name | Description |
|------|------|-------------|
| 1000 | Normal Closure | Normal connection close |
| 1001 | Going Away | Server/browser leaving |
| 1002 | Protocol Error | Protocol error occurred |
| 1003 | Unsupported Data | Received unsupported data |
| 1005 | No Status | No status code provided |
| 1006 | Abnormal Close | Connection lost without close frame |
| 1007 | Invalid Payload | Payload data is inconsistent |
| 1008 | Policy Violation | Message violates policy |
| 1009 | Message Too Big | Message exceeds size limit |
| 1011 | Internal Error | Server encountered error |
| 1015 | TLS Failure | TLS handshake failed |

## Binary Data Handling

```javascript
// Specify binary type
socket.binaryType = 'arraybuffer'; // default is 'blob'

// Receiving binary data
socket.addEventListener('message', function(event) {
    if (event.data instanceof ArrayBuffer) {
        const view = new Uint8Array(event.data);
        console.log('Received binary data:', view.length, 'bytes');
    } else {
        console.log('Received text:', event.data);
    }
});
```

## Practical Patterns

### Reconnection Strategy

```javascript
class ReconnectingWebSocket {
    constructor(url, options = {}) {
        this.url = url;
        this.reconnectInterval = options.reconnectInterval || 3000;
        this.maxRetries = options.maxRetries || 10;
        this.retryCount = 0;
        this.shouldReconnect = true;
        this.connect();
    }

    connect() {
        this.socket = new WebSocket(this.url);
        
        this.socket.onopen = (event) => {
            console.log('Connected');
            this.retryCount = 0;
            this.onopen?.(event);
        };

        this.socket.onclose = (event) => {
            console.log('Disconnected');
            if (this.shouldReconnect && this.retryCount < this.maxRetries) {
                this.retryCount++;
                console.log(`Reconnecting in ${this.reconnectInterval}ms (attempt ${this.retryCount})`);
                setTimeout(() => this.connect(), this.reconnectInterval * this.retryCount);
            }
            this.onclose?.(event);
        };

        this.socket.onerror = (event) => {
            console.error('WebSocket error');
            this.onerror?.(event);
        };

        this.socket.onmessage = (event) => {
            this.onmessage?.(event);
        };
    }

    send(data) {
        if (this.socket?.readyState === WebSocket.OPEN) {
            this.socket.send(data);
            return true;
        }
        return false;
    }

    close() {
        this.shouldReconnect = false;
        this.socket?.close();
    }
}
```

### Heartbeat / Ping-Pong

```javascript
class HeartbeatWebSocket {
    constructor(url, interval = 30000) {
        this.url = url;
        this.interval = interval;
        this.pingTimeout = null;
        this.connect();
    }

    connect() {
        this.socket = new WebSocket(this.url);
        
        this.socket.onopen = () => {
            this.startHeartbeat();
            this.onopen?.();
        };

        this.socket.onmessage = (event) => {
            // Reset heartbeat on any message
            this.resetHeartbeat();
            
            // Handle pong response
            if (event.data === 'pong') {
                console.log('Heartbeat received');
                return;
            }
            
            this.onmessage?.(event);
        };

        this.socket.onclose = () => {
            this.stopHeartbeat();
            this.onclose?.();
        };
    }

    startHeartbeat() {
        this.heartbeatInterval = setInterval(() => {
            if (this.socket.readyState === WebSocket.OPEN) {
                this.socket.send('ping');
                
                // Set timeout for pong response
                this.pingTimeout = setTimeout(() => {
                    console.log('No pong received, reconnecting...');
                    this.socket.close();
                    this.connect();
                }, 5000);
            }
        }, this.interval);
    }

    resetHeartbeat() {
        if (this.pingTimeout) {
            clearTimeout(this.pingTimeout);
            this.pingTimeout = null;
        }
    }

    stopHeartbeat() {
        clearInterval(this.heartbeatInterval);
        clearTimeout(this.pingTimeout);
    }
}
```

## Common Mistakes

### Mistake 1: Not Handling Reconnection

```javascript
// ❌ Wrong - no reconnection logic
const socket = new WebSocket('ws://server.com');
// If connection drops, it's gone forever

// ✅ Correct - implement reconnection
function connect() {
    const socket = new WebSocket('ws://server.com');
    socket.onclose = () => setTimeout(connect, 3000);
}
```

### Mistake 2: Sending Before Connection Opens

```javascript
// ❌ Wrong - may fail if connection not ready
socket.send('Hello');

// ✅ Correct - wait for open event
socket.addEventListener('open', () => {
    socket.send('Hello');
});
```

### Mistake 3: Not Validating Messages

```javascript
// ❌ Wrong
socket.onmessage = (event) => {
    const data = JSON.parse(event.data); // Can throw
};

// ✅ Correct
socket.onmessage = (event) => {
    try {
        const data = JSON.parse(event.data);
        // Process data
    } catch (e) {
        console.error('Invalid JSON received');
    }
};
```

## Best Practices

1. **Always use WSS**: Use `wss://` (WebSocket Secure) in production, never `ws://`
2. **Implement reconnection**: Connections drop; always have auto-reconnect logic
3. **Use heartbeat/ping-pong**: Detect dead connections proactively
4. **Handle backpressure**: Don't send messages faster than the server can process
5. **Validate all messages**: Always parse JSON in try-catch
6. **Close properly**: Always close connections when leaving a page
7. **Limit message size**: Set maximum message size on the server
8. **Use binary formats**: For high-performance apps, use Protocol Buffers or MessagePack
9. **Authenticate connections**: Validate tokens during handshake
10. **Monitor connection state**: Show connection status to users

## Real-World Use Cases

- Real-time chat applications
- Live streaming data (stock tickers, sports scores)
- Online gaming
- Collaborative editing (Google Docs-style)
- Real-time notifications
- Live dashboards and monitoring
- IoT device communication
- Multi-user whiteboarding

## Summary Notes

- WebSockets provide full-duplex communication over a single TCP connection
- Connection starts with an HTTP upgrade handshake
- The WebSocket API has four events: open, message, close, error
- Messages can be text (UTF-8) or binary (ArrayBuffer, Blob)
- Always implement reconnection logic for production apps
- Use WSS (WebSocket Secure) in production
- The readyState property indicates connection status
- Close codes provide information about why a connection closed
- WebSockets are supported in all modern browsers
- WebSockets are not RESTful — they're event-driven
- Servers can push data without the client requesting it
