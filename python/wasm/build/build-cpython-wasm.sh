#!/usr/bin/env bash
set -e

EMSDK_DIR="/root/emsdk"
CPYTHON_VERSION="3.13.3"
CPYTHON_DIR="/root/Python-${CPYTHON_VERSION}"
OUTPUT_DIR="/mnt/c/Users/TestAccount/Desktop/MODULES/python/wasm/dist"

echo "[1/7] Installing build dependencies..."
apt-get update -qq && apt-get install -y -qq pkg-config zlib1g-dev libbz2-dev libffi-dev libsqlite3-dev 2>&1 | tail -3

echo "[2/7] Setting up Emscripten SDK..."
source "$EMSDK_DIR/emsdk_env.sh"
export EM_CONFIG="${EMSDK_DIR}/.emscripten"
export EMSDK="${EMSDK_DIR}"
echo "emcc: $(emcc --version | head -1)"
echo "EM_CONFIG: $EM_CONFIG"
ls -la "$EM_CONFIG"

echo "[3/7] Downloading CPython ${CPYTHON_VERSION}..."
cd /root
if [ ! -f "Python-${CPYTHON_VERSION}.tar.xz" ]; then
  curl -L -o "Python-${CPYTHON_VERSION}.tar.xz" \
    "https://www.python.org/ftp/python/${CPYTHON_VERSION}/Python-${CPYTHON_VERSION}.tar.xz"
fi
if [ ! -d "$CPYTHON_DIR" ]; then
  tar xf "Python-${CPYTHON_VERSION}.tar.xz"
fi

echo "[4/7] Building CPython for emscripten-browser via wasm_build.py..."
cd "$CPYTHON_DIR"
source "$EMSDK_DIR/emsdk_env.sh"
export EM_CONFIG="${EMSDK_DIR}/.emscripten"
export EMSDK="${EMSDK_DIR}"

./Tools/wasm/wasm_build.py emscripten-browser build --verbose 2>&1 | tail -80

echo "[5/7] Locating build output..."
BUILD_OUTPUT="$CPYTHON_DIR/builddir/emscripten-browser"
if [ -d "$BUILD_OUTPUT" ]; then
  echo "Build output directory: $BUILD_OUTPUT"
  ls -la "$BUILD_OUTPUT/"
else
  echo "Checking for wasm/js output..."
  find "$CPYTHON_DIR/builddir" -name "*.wasm" -o -name "*.js" -o -name "*.data" 2>/dev/null | head -20
fi

echo "[6/7] Copying output to ${OUTPUT_DIR}..."
mkdir -p "$OUTPUT_DIR"
if [ -d "$BUILD_OUTPUT" ]; then
  cp -v "$BUILD_OUTPUT"/*.wasm "$OUTPUT_DIR/" 2>/dev/null || true
  cp -v "$BUILD_OUTPUT"/*.js "$OUTPUT_DIR/" 2>/dev/null || true
  cp -v "$BUILD_OUTPUT"/*.data "$OUTPUT_DIR/" 2>/dev/null || true
  cp -v "$BUILD_OUTPUT"/*.mjs "$OUTPUT_DIR/" 2>/dev/null || true
fi
find "$CPYTHON_DIR" -maxdepth 4 -name "*.wasm" -exec cp -v {} "$OUTPUT_DIR/" \; 2>/dev/null || true

echo "[7/7] Copying support files..."
cp -v "$CPYTHON_DIR/Tools/wasm/python.worker.js" "$OUTPUT_DIR/" 2>/dev/null || true
cp -v "$CPYTHON_DIR/Tools/wasm/python.html" "$OUTPUT_DIR/" 2>/dev/null || true

echo "=== BUILD COMPLETE ==="
ls -la "$OUTPUT_DIR/"
