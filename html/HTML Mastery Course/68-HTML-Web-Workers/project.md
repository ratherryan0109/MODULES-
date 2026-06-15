# Mini Project: Parallel File Hash Calculator

## Project Overview

Build a file hash calculator that uses Web Workers to compute cryptographic hashes (SHA-256, SHA-512, MD5) of uploaded files without blocking the UI. Users can drag-and-drop or select multiple files, choose a hash algorithm, and see progress for each file. Large files are processed in chunks using workers for parallelism.

## Learning Objectives

- Implement dedicated Web Workers for CPU-intensive computation
- Use Transferable Objects for efficient data transfer
- Implement progress reporting from workers
- Handle multiple concurrent workers
- Process files using FileReader API with workers
- Build a responsive UI that remains interactive during processing

## Requirements

### Core Features
1. Drag-and-drop file upload area
2. Multiple file selection support
3. Choose from SHA-256, SHA-512, and MD5 algorithms
4. Compute hash for each file using a Web Worker
5. Show real-time progress for each file being processed
6. Display results with copy-to-clipboard functionality
7. Compare hashes with a user-provided value (verification mode)

### Performance
8. Process files in chunks (streaming) to handle large files
9. Use Transferable Objects for chunk data
10. Process multiple files concurrently using a worker pool
11. Cancel individual or all processing tasks

### UI/UX
12. Clean, modern interface with drag-drop visual feedback
13. Progress bars with percentage and speed estimate
14. File size formatting (KB, MB, GB)
15. Result history saved in session storage
16. Dark/light theme support

## Project Structure

```
hash-calculator/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── hash-worker.js
│   └── WorkerPool.js
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
    <title>Parallel File Hash Calculator</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <h1>🔐 File Hash Calculator</h1>
        <button id="themeToggle">🌙 Dark Mode</button>
    </header>

    <main>
        <!-- Drop Zone -->
        <div id="dropZone">
            <div class="drop-content">
                <div class="drop-icon">📁</div>
                <p>Drag & drop files here or click to browse</p>
                <input type="file" id="fileInput" multiple hidden>
                <button id="browseBtn">Browse Files</button>
            </div>
        </div>

        <!-- Algorithm Selection -->
        <div class="controls">
            <label>Algorithm:</label>
            <select id="algorithm">
                <option value="SHA-256">SHA-256</option>
                <option value="SHA-384">SHA-384</option>
                <option value="SHA-512">SHA-512</option>
            </select>
            <label>Workers: <span id="workerCount">4</span></label>
            <input type="range" id="workerSlider" min="1" max="8" value="4">
            <button id="cancelAllBtn" disabled>Cancel All</button>
            <button id="clearBtn">Clear All</button>
        </div>

        <!-- File List -->
        <div id="fileList"></div>

        <!-- Verification -->
        <div class="verify-section">
            <h3>Verify Hash</h3>
            <input type="text" id="verifyInput" placeholder="Paste a hash to compare...">
            <button id="verifyBtn">Verify</button>
            <div id="verifyResult"></div>
        </div>
    </main>

    <script src="js/WorkerPool.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
```

### Step 2: CSS Styling

```css
:root {
    --bg: #ffffff;
    --text: #1a1a2e;
    --card: #f8f9fa;
    --border: #dee2e6;
    --primary: #4a6cf7;
    --accent: #2ecc71;
    --danger: #e74c3c;
    --shadow: 0 2px 10px rgba(0,0,0,0.1);
}

[data-theme="dark"] {
    --bg: #0f0f23;
    --text: #e0e0e0;
    --card: #1a1a35;
    --border: #2a2a4a;
    --primary: #6d8cff;
    --shadow: 0 2px 10px rgba(0,0,0,0.3);
}

body {
    font-family: 'Segoe UI', system-ui, sans-serif;
    background: var(--bg);
    color: var(--text);
    margin: 0;
    min-height: 100vh;
    transition: background 0.3s, color 0.3s;
}

#dropZone {
    border: 2px dashed var(--primary);
    border-radius: 12px;
    padding: 40px;
    text-align: center;
    margin: 20px 0;
    transition: all 0.3s;
    cursor: pointer;
    background: var(--card);
}

#dropZone.drag-over {
    border-color: var(--accent);
    background: rgba(46, 204, 113, 0.1);
    transform: scale(1.02);
}

.file-item {
    background: var(--card);
    border-radius: 8px;
    padding: 15px;
    margin: 10px 0;
    box-shadow: var(--shadow);
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 10px;
}

.file-item .progress-bar {
    height: 6px;
    background: var(--border);
    border-radius: 3px;
    overflow: hidden;
    grid-column: 1 / -1;
}

.file-item .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    transition: width 0.3s;
    border-radius: 3px;
}

.hash-value {
    font-family: monospace;
    background: var(--bg);
    padding: 8px;
    border-radius: 4px;
    font-size: 12px;
    word-break: break-all;
}
```

### Step 3: Worker Pool Manager

```javascript
// js/WorkerPool.js
class WorkerPool {
    constructor(workerScript, poolSize) {
        this.workerScript = workerScript;
        this.poolSize = poolSize || (navigator.hardwareConcurrency || 4);
        this.workers = [];
        this.available = [];
        this.queue = [];
        this.results = new Map();
        this.activeFileCount = 0;
        this.init();
    }

    init() {
        for (let i = 0; i < this.poolSize; i++) {
            this.createWorker(i);
        }
    }

    createWorker(id) {
        const worker = new Worker(this.workerScript);
        const entry = { id, worker, busy: false };

        worker.onmessage = (e) => {
            const { type, fileId, ...data } = e.data;
            
            if (type === 'progress') {
                this.onFileProgress?.(fileId, data.percent);
            } else if (type === 'complete') {
                this.onFileComplete?.(fileId, data.hash, data.elapsed);
                this.activeFileCount--;
                entry.busy = false;
                this.available.push(entry);
                this.processQueue();
            } else if (type === 'error') {
                this.onFileError?.(fileId, data.message);
                this.activeFileCount--;
                entry.busy = false;
                this.available.push(entry);
                this.processQueue();
            }
        };

        worker.onerror = (e) => {
            console.error('Worker', id, 'error:', e);
            e.preventDefault();
            entry.busy = false;
            this.available.push(entry);
        };

        this.workers.push(entry);
        this.available.push(entry);
    }

    processFile(fileId, file, algorithm, chunkSize = 1024 * 1024) {
        this.queue.push({ fileId, file, algorithm, chunkSize });
        this.processQueue();
    }

    processQueue() {
        while (this.queue.length > 0 && this.available.length > 0) {
            const task = this.queue.shift();
            const entry = this.available.shift();
            entry.busy = true;
            this.activeFileCount++;
            this.startProcessing(entry.worker, task);
        }
    }

    startProcessing(worker, task) {
        // Read file in chunks and send to worker
        const reader = new FileReader();
        let offset = 0;
        const file = task.file;
        const chunkSize = task.chunkSize;

        reader.onload = (e) => {
            const arrayBuffer = e.target.result;
            
            // Send chunk to worker (transfer for zero-copy)
            worker.postMessage({
                type: 'chunk',
                fileId: task.fileId,
                algorithm: task.algorithm,
                data: arrayBuffer,
                isLast: offset >= file.size
            }, [arrayBuffer]);

            offset += chunkSize;
            if (offset < file.size) {
                readNextChunk();
            }
        };

        const readNextChunk = () => {
            const slice = file.slice(offset, Math.min(offset + chunkSize, file.size));
            reader.readAsArrayBuffer(slice);
        };

        // Initialize worker for this file
        worker.postMessage({
            type: 'init',
            fileId: task.fileId,
            algorithm: task.algorithm,
            fileName: file.name,
            fileSize: file.size
        });

        readNextChunk();
    }

    cancel(fileId) {
        // Tell all workers to cancel this file
        this.workers.forEach(entry => {
            entry.worker.postMessage({ type: 'cancel', fileId });
        });
        // Remove from queue
        this.queue = this.queue.filter(t => t.fileId !== fileId);
    }

    cancelAll() {
        this.workers.forEach(entry => {
            entry.worker.postMessage({ type: 'cancelAll' });
        });
        this.queue = [];
        this.activeFileCount = 0;
    }

    terminate() {
        this.workers.forEach(entry => entry.worker.terminate());
        this.workers = [];
        this.available = [];
    }
}
```

### Step 4: Hash Worker Script

```javascript
// js/hash-worker.js
let currentFileId = null;
let cancelled = false;
let hashAlgorithm = 'SHA-256';

self.onmessage = async function(e) {
    const { type, fileId, algorithm, data, isLast } = e.data;

    if (type === 'init') {
        currentFileId = fileId;
        hashAlgorithm = algorithm || 'SHA-256';
        cancelled = false;
        return;
    }

    if (type === 'cancel' || type === 'cancelAll') {
        cancelled = true;
        if (type === 'cancelAll') self.close();
        return;
    }

    if (type === 'chunk' && fileId === currentFileId && !cancelled) {
        try {
            const hashBuffer = await crypto.subtle.digest(hashAlgorithm, data);
            
            if (isLast) {
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
                
                self.postMessage({
                    type: 'complete',
                    fileId: currentFileId,
                    hash: hashHex.toUpperCase(),
                    algorithm: hashAlgorithm,
                    elapsed: 0
                });
            } else {
                self.postMessage({
                    type: 'progress',
                    fileId: currentFileId,
                    percent: 50 // Simplified
                });
            }
        } catch (error) {
            self.postMessage({
                type: 'error',
                fileId: currentFileId,
                message: error.message
            });
        }
    }
};
```

### Step 5: Main Application Logic

```javascript
// js/main.js
const pool = new WorkerPool('js/hash-worker.js');
const fileStates = new Map();
let fileCounter = 0;

// DOM elements
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const browseBtn = document.getElementById('browseBtn');
const fileList = document.getElementById('fileList');
const algorithm = document.getElementById('algorithm');
const workerSlider = document.getElementById('workerSlider');
const workerCount = document.getElementById('workerCount');
const cancelAllBtn = document.getElementById('cancelAllBtn');
const clearBtn = document.getElementById('clearBtn');
const themeToggle = document.getElementById('themeToggle');
const verifyInput = document.getElementById('verifyInput');
const verifyBtn = document.getElementById('verifyBtn');
const verifyResult = document.getElementById('verifyResult');

// Pool callbacks
pool.onFileProgress = (fileId, percent) => {
    const state = fileStates.get(fileId);
    if (state) {
        state.percent = percent;
        updateFileUI(fileId);
    }
};

pool.onFileComplete = (fileId, hash, elapsed) => {
    const state = fileStates.get(fileId);
    if (state) {
        state.hash = hash;
        state.status = 'complete';
        state.elapsed = elapsed;
        updateFileUI(fileId);
        updateCancelButton();
    }
};

pool.onFileError = (fileId, message) => {
    const state = fileStates.get(fileId);
    if (state) {
        state.status = 'error';
        state.errorMessage = message;
        updateFileUI(fileId);
        updateCancelButton();
    }
};

// Handle file selection
function handleFiles(files) {
    for (const file of files) {
        const fileId = 'file_' + (++fileCounter);
        const state = {
            id: fileId,
            file,
            status: 'queued',
            percent: 0,
            hash: null,
            algorithm: algorithm.value
        };
        fileStates.set(fileId, state);
        addFileUI(fileId);
        pool.processFile(fileId, file, algorithm.value);
    }
    updateCancelButton();
}

// UI functions
function addFileUI(fileId) {
    const state = fileStates.get(fileId);
    const item = document.createElement('div');
    item.className = 'file-item';
    item.id = 'item_' + fileId;
    item.innerHTML = `
        <div class="file-info">
            <span class="file-name">${state.file.name}</span>
            <span class="file-size">${formatSize(state.file.size)}</span>
        </div>
        <div class="file-status status-${state.status}">Queued</div>
        <div class="progress-bar">
            <div class="progress-fill" style="width: 0%"></div>
        </div>
        <div class="hash-value">—</div>
        <button class="cancel-file-btn" data-id="${fileId}">Cancel</button>
    `;
    fileList.appendChild(item);

    item.querySelector('.cancel-file-btn').addEventListener('click', () => {
        pool.cancel(fileId);
        state.status = 'cancelled';
        updateFileUI(fileId);
    });
}

function updateFileUI(fileId) {
    const state = fileStates.get(fileId);
    if (!state) return;

    const item = document.getElementById('item_' + fileId);
    if (!item) return;

    const statusEl = item.querySelector('.file-status');
    const progressEl = item.querySelector('.progress-fill');
    const hashEl = item.querySelector('.hash-value');

    statusEl.className = 'file-status status-' + state.status;
    progressEl.style.width = state.percent + '%';

    switch (state.status) {
        case 'queued':
            statusEl.textContent = '⏳ Queued';
            break;
        case 'processing':
            statusEl.textContent = '⚙️ Processing... ' + state.percent + '%';
            break;
        case 'complete':
            statusEl.textContent = '✅ Complete';
            hashEl.textContent = state.hash;
            hashEl.title = 'Click to copy';
            hashEl.style.cursor = 'pointer';
            hashEl.onclick = () => {
                navigator.clipboard.writeText(state.hash);
                showToast('Hash copied to clipboard!');
            };
            break;
        case 'error':
            statusEl.textContent = '❌ ' + state.errorMessage;
            break;
        case 'cancelled':
            statusEl.textContent = '⏹️ Cancelled';
            break;
    }
}

function updateCancelButton() {
    cancelAllBtn.disabled = pool.activeFileCount === 0;
}

function formatSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
}

function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

// Event listeners
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('drag-over');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('drag-over');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
    handleFiles(e.dataTransfer.files);
});

browseBtn.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', () => {
    handleFiles(fileInput.files);
    fileInput.value = '';
});

cancelAllBtn.addEventListener('click', () => {
    pool.cancelAll();
    fileStates.forEach((state, id) => {
        if (state.status === 'queued' || state.status === 'processing') {
            state.status = 'cancelled';
            updateFileUI(id);
        }
    });
    updateCancelButton();
});

clearBtn.addEventListener('click', () => {
    fileStates.clear();
    fileList.innerHTML = '';
    updateCancelButton();
});

workerSlider.addEventListener('input', () => {
    workerCount.textContent = workerSlider.value;
});

themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
    themeToggle.textContent = theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode';
});

verifyBtn.addEventListener('click', () => {
    const targetHash = verifyInput.value.trim().toUpperCase();
    if (!targetHash) {
        verifyResult.textContent = 'Please enter a hash to verify.';
        return;
    }

    // Check all completed files
    let found = false;
    fileStates.forEach((state) => {
        if (state.hash === targetHash) {
            verifyResult.textContent = '✅ Match found: ' + state.file.name;
            verifyResult.style.color = 'var(--accent)';
            found = true;
        }
    });

    if (!found) {
        verifyResult.textContent = '❌ No matching file found with this hash.';
        verifyResult.style.color = 'var(--danger)';
    }
});
```

### Step 6: Testing

1. Upload small files (text, images) and verify hashes appear
2. Upload a large file (100MB+) and observe UI responsiveness
3. Upload multiple files simultaneously and watch parallel processing
4. Cancel individual files mid-processing
5. Copy hash to clipboard by clicking on it
6. Verify a hash by pasting it in the verification field
7. Toggle dark/light theme and verify persistence
8. Test with different algorithms (SHA-256, SHA-512)
9. Compare with known tools (sha256sum, etc.)
10. Try uploading in incognito mode to test worker availability

## Bonus Features

- **Checksum file export**: Download all hashes as a .sha256 file
- **File comparison**: Compare two files to see if they match
- **Batch verification**: Verify multiple hashes at once
- **Context menu**: Right-click files for additional options
- **History**: Persist recent hashes to Local Storage
- **Drag reorder**: Reorder files in the processing queue
- **Estimated time remaining**: Show ETA for each file
- **Audio feedback**: Play sound when all files complete

## Evaluation Criteria

- Web Workers are correctly implemented with proper lifecycle management
- UI remains responsive during file processing
- Multiple files can be processed concurrently
- Progress bars update smoothly
- Hash results match known-good values
- Error handling works for invalid files or unsupported algorithms
- Cancel functionality stops processing immediately
- Transferable Objects are used for chunk data
- Code follows Web Worker best practices
- Dark/light theme works correctly
- Verification feature correctly matches hashes

## Submission

Submit the complete project as a folder with separate files. Include a README with setup instructions, screenshots, and a description of the worker pool architecture. The project should run by simply opening index.html in a browser (or with a local server for some browsers).
