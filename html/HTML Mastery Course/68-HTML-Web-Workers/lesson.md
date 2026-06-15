# Module 68: HTML Web Workers

## Introduction

JavaScript is single-threaded by nature, meaning it can only execute one task at a time on the main thread. This becomes a significant limitation when performing CPU-intensive operations like image processing, large data calculations, or real-time analytics — the UI freezes, buttons become unresponsive, and the user experience degrades dramatically.

Web Workers provide a solution by allowing JavaScript to run in background threads separate from the main execution thread. Introduced as part of the HTML5 specification, Web Workers enable true parallelism in web applications, allowing computationally expensive tasks to run without blocking the user interface.

## Learning Objectives

By the end of this module, you will be able to:

- Understand the single-threaded nature of JavaScript and why Web Workers are needed
- Create and manage dedicated Web Workers
- Communicate between the main thread and workers using messages
- Handle errors and terminate workers properly
- Apply workers to real-world scenarios (data processing, image manipulation)
- Understand the limitations and restrictions of Web Workers
- Use Web Workers for performance optimization

## Understanding Web Workers

### The Problem: Single-Threaded JavaScript

```javascript
// This blocks the UI for several seconds
function calculatePrimes(limit) {
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(i);
    }
    return primes;
}

// Running this causes the page to freeze
const result = calculatePrimes(10000000); // UI frozen until complete
```

### How Web Workers Solve This

```
┌─────────────────────────────────────────────────────────┐
│                     Main Thread                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐ │
│  │  UI       │  │  Events  │  │  Web     │  │ Worker │ │
│  │  Rendering│  │  Handling│  │  Workers │  │ Msgs   │ │
│  └──────────┘  └──────────┘  └──────────┘  └────────┘ │
│        │             │             │             │       │
│        ▼             ▼             ▼             ▼       │
│  ┌─────────────────────────────────────────────────┐    │
│  │          Event Loop (single thread)               │    │
│  └─────────────────────────────────────────────────┘    │
│                         │                                 │
│                         ▼                                 │
│  ┌─────────────────────────────────────────────────┐    │
│  │            Web Worker Thread (separate)          │    │
│  │  ┌───────────────────────────────────────────┐  │    │
│  │  │  Heavy Computation (no UI access)         │  │    │
│  │  │  postMessage() to send results back       │  │    │
│  │  └───────────────────────────────────────────┘  │    │
│  └─────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

## Types of Web Workers

| Type | Description | Use Case |
|------|-------------|----------|
| **Dedicated Worker** | Single owner (one script) | Most common; general background tasks |
| **Shared Worker** | Multiple scripts/contexts can share | Cross-tab communication, shared state |
| **Service Worker** | Acts as proxy between app and network | Offline support, push notifications, caching |

This module focuses on **Dedicated Workers**.

## Creating a Web Worker

### Main Script (main.js)

```javascript
// Check if Workers are supported
if (typeof Worker !== 'undefined') {
    // Create a new worker
    const worker = new Worker('worker.js');
    
    // Send data to the worker
    worker.postMessage({ command: 'start', data: [1, 2, 3, 4, 5] });
    
    // Receive messages from the worker
    worker.onmessage = function(event) {
        console.log('Received from worker:', event.data);
    };
    
    // Handle errors
    worker.onerror = function(error) {
        console.error('Worker error:', error.message);
    };
    
    // Terminate the worker
    // worker.terminate();
} else {
    console.log('Web Workers are not supported in this browser.');
}
```

### Worker Script (worker.js)

```javascript
// Listen for messages from the main thread
self.onmessage = function(event) {
    const data = event.data;
    
    // Process the data
    const result = data.data.map(x => x * 2);
    
    // Send the result back
    self.postMessage({ status: 'complete', result: result });
};

// Self is the global scope in workers (equivalent to window in main thread)
// We can also use addEventListener
self.addEventListener('message', function(event) {
    // ... handle message
});
```

## Communication Protocol

### Sending Messages

```javascript
// Main → Worker
worker.postMessage('Hello Worker!');
worker.postMessage({ type: 'process', payload: largeArray });
worker.postMessage(new ArrayBuffer(1024)); // Transferable objects

// Worker → Main
self.postMessage('Hello Main!');
self.postMessage({ status: 'progress', percent: 50 });
```

### Transferable Objects

For large data (like ArrayBuffer), you can transfer ownership instead of copying:

```javascript
// Main script
const buffer = new ArrayBuffer(1024 * 1024 * 100); // 100MB
worker.postMessage(buffer, [buffer]); // Transfer ownership (zero-copy)
// buffer is now neutered (empty) in the main thread

// Worker
self.onmessage = function(e) {
    const myBuffer = e.data; // Received without copying
    // Process buffer...
};
```

## Worker Limitations

Web Workers cannot access:

| Feature | Available? | Notes |
|---------|:----------:|-------|
| DOM | ❌ | No document, window, parent |
| Local Storage | ❌ | Not available |
| Session Storage | ❌ | Not available |
| `alert()`, `confirm()` | ❌ | Not available |
| Parent object | ❌ | No window access |
| `XMLHttpRequest` | ✅ | Full AJAX support |
| `fetch()` | ✅ | Available |
| `setTimeout()` | ✅ | Available |
| `setInterval()` | ✅ | Available |
| `importScripts()` | ✅ | Load external scripts |
| `WebSockets` | ✅ | Available |
| `IndexedDB` | ✅ | Available |
| `Canvas` | ❌ | But can receive ImageData |
| `Navigator` | ✅ | Limited properties |
| `Location` | ✅ | Read-only |

## Importing Scripts in Workers

```javascript
// worker.js
importScripts('utils.js', 'math.js', 'https://cdn.example.com/lib.js');

// Now use functions from imported scripts
self.onmessage = function(e) {
    const result = heavyCalculation(e.data);
    self.postMessage(result);
};
```

## Error Handling

```javascript
// In main script
worker.onerror = function(error) {
    console.error('Worker error:', error.message, error.filename, error.lineno);
    // Prevent default error handling
    error.preventDefault();
};

// In worker
self.onerror = function(error) {
    console.error('Error in worker:', error.message);
    self.postMessage({ status: 'error', message: error.message });
};
```

## Multiple Workers

```javascript
// Create multiple workers for parallel processing
const workers = [];
const numWorkers = navigator.hardwareConcurrency || 4;

for (let i = 0; i < numWorkers; i++) {
    const worker = new Worker('processor.js');
    worker.onmessage = handleWorkerResult;
    workers.push(worker);
}

// Distribute work
const chunkSize = Math.ceil(largeArray.length / numWorkers);
workers.forEach((worker, index) => {
    const start = index * chunkSize;
    const chunk = largeArray.slice(start, start + chunkSize);
    worker.postMessage({ id: index, data: chunk });
});
```

## Inline Workers

You can create workers from inline code using Blob URLs:

```javascript
// Create worker code as a string
const workerCode = `
    self.onmessage = function(e) {
        const result = e.data * 2;
        self.postMessage(result);
    };
`;

// Create Blob and URL
const blob = new Blob([workerCode], { type: 'application/javascript' });
const workerUrl = URL.createObjectURL(blob);

// Create worker from blob URL
const worker = new Worker(workerUrl);

// Clean up URL after worker is created
URL.revokeObjectURL(workerUrl);
```

## Common Mistakes

### Mistake 1: Trying to Access DOM in Worker

```javascript
// ❌ Wrong
self.onmessage = function() {
    document.getElementById('result').textContent = 'Done'; // Error!
};

// ✅ Correct
self.onmessage = function() {
    const result = performHeavyCalculation();
    self.postMessage({ type: 'result', data: result });
};
```

### Mistake 2: Not Handling Worker Errors

```javascript
// ❌ Wrong
const worker = new Worker('worker.js');

// ✅ Correct
const worker = new Worker('worker.js');
worker.onerror = function(error) {
    console.error('Worker crashed:', error);
    // Show user-friendly message or retry
};
```

### Mistake 3: Using Same File for Main and Worker

```javascript
// ❌ Wrong - worker script will try to create another worker
const worker = new Worker('worker.js');
// If worker.js also has: const worker = new Worker('worker.js');
// This creates an infinite loop!

// ✅ Correct - check if running in worker
if (typeof Worker !== 'undefined' && typeof window !== 'undefined') {
    const worker = new Worker('worker.js');
}
```

### Mistake 4: Not Terminating Workers

```javascript
// ❌ Wrong - worker keeps running in background
const worker = new Worker('worker.js');
worker.postMessage({ task: 'longRunning' });
// Worker continues to run even if no longer needed

// ✅ Correct
worker.terminate(); // Stop worker when done
```

### Mistake 5: Assuming Workers Have Same Scope

```javascript
// ❌ Wrong - variables from main script not available
const globalVar = 'hello';
// worker.js cannot see globalVar

// ✅ Correct - pass data explicitly
worker.postMessage(globalVar);
```

## Best Practices

1. **Use Message-Based Architecture**: Design workers as message processors that receive input and return output
2. **Terminate Unused Workers**: Always terminate workers when they are no longer needed
3. **Handle Errors**: Always attach error handlers to workers
4. **Use Transferable Objects**: For large data transfers, use ArrayBuffer transfer to avoid copying
5. **Limit Worker Count**: Use `navigator.hardwareConcurrency` to determine optimal number of workers
6. **Graceful Degradation**: Provide fallback when workers are not supported
7. **Keep Workers Focused**: Each worker should do one thing well
8. **Avoid Race Conditions**: Workers are isolated, but shared data needs careful handling

## Real-World Applications

- Image processing and filtering
- Data compression/decompression
- Real-time data analysis
- Parsing large files (CSV, JSON)
- Cryptography and hashing
- Game physics calculations
- Code syntax highlighting
- PDF generation
- Machine learning inference

## Summary Notes

- Web Workers enable background thread execution in JavaScript
- Dedicated Workers are owned by a single script
- Communication uses `postMessage()` and `onmessage`
- Workers cannot access the DOM, window, or parent objects
- Workers can use `importScripts()` to load external libraries
- Transferable objects enable zero-copy data transfer
- Check browser support before using workers
- Always handle errors and terminate workers when done
- Use `navigator.hardwareConcurrency` for optimal parallelism
- Shared Workers and Service Workers are specialized alternatives
- Workers have access to `fetch()`, `setTimeout()`, `IndexedDB`, and `WebSockets`
