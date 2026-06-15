# Web Workers Cheatsheet

## Creating Workers

```javascript
// Dedicated Worker
const worker = new Worker('worker.js')

// Worker with ES Modules
const worker = new Worker('worker.js', { type: 'module' })

// Inline Worker from Blob
const blob = new Blob([code], { type: 'application/javascript' })
const worker = new Worker(URL.createObjectURL(blob))
```

## Communication

| Action | Main Thread | Worker |
|--------|-------------|--------|
| Send message | `worker.postMessage(data)` | `self.postMessage(data)` |
| Receive message | `worker.onmessage = (e) => {}` | `self.onmessage = (e) => {}` |
| Add listener | `worker.addEventListener('message', fn)` | `self.addEventListener('message', fn)` |
| Terminate | `worker.terminate()` | `self.close()` |

## Worker Restrictions

| ❌ Not Available | ✅ Available |
|-----------------|--------------|
| DOM / document / window | `fetch()` / `XMLHttpRequest` |
| Local / Session Storage | `setTimeout()` / `setInterval()` |
| `alert()` / `confirm()` / `prompt()` | `importScripts()` |
| Parent object | `IndexedDB` |
| Canvas (direct) | `WebSockets` |
| | `Navigator` (limited) |
| | `Location` (read-only) |

## Transferable Objects (Zero-Copy)

```javascript
// Main thread
const buffer = new ArrayBuffer(1024 * 1024) // 1MB
worker.postMessage(buffer, [buffer]) // Transfer ownership
// buffer is now neutered (byteLength === 0)

// Worker
self.onmessage = (e) => {
    const buf = e.data // Received without copying
}
```

## Error Handling

```javascript
// Main thread
worker.onerror = (error) => {
    console.error(error.message, error.filename, error.lineno)
    error.preventDefault() // Suppress error dialog
}

// Inside worker
try {
    // dangerous code
} catch (err) {
    self.postMessage({ status: 'error', message: err.message })
}
```

## Multiple Workers

```javascript
const numWorkers = navigator.hardwareConcurrency || 4
const workers = []

for (let i = 0; i < numWorkers; i++) {
    workers.push(new Worker('worker.js'))
}

// Distribute work
workers.forEach((w, i) => {
    w.postMessage({ chunk: data[i], id: i })
})
```

## Importing Scripts

```javascript
// worker.js
importScripts('lib.js')                         // Single
importScripts('lib1.js', 'lib2.js')             // Multiple
importScripts('https://cdn.example.com/sdk.js') // CDN (CORS)
```

## Worker Types

| Type | Scope | Use Case |
|------|-------|----------|
| **Dedicated** | Single script | Background tasks |
| **Shared** | Multiple tabs/windows | Cross-tab communication |
| **Service** | Network proxy | Offline, caching, push |

## Lifecycle

```
new Worker('script.js')
    ↓
Load & Execute script
    ↓
Listen for messages ←── postMessage()
    ↓
Process data
    ↓
postMessage() back ──→ onmessage
    ↓
worker.terminate() or self.close()
```

## Hardware Concurrency

```javascript
const cores = navigator.hardwareConcurrency
// Optimal pool size: cores - 1 (leave one for UI thread)
```

## Common Patterns

```javascript
// Progress reporting
self.postMessage({ type: 'progress', percent: 50 })

// Structured result
self.postMessage({ type: 'complete', data: result })

// Cancellation
let cancelled = false
self.onmessage = (e) => {
    if (e.data === 'cancel') cancelled = true
}
```
