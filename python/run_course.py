import http.server
import json
import os
import subprocess
import sys
import tempfile
import time
import socketserver

PORT = 8000
TIMEOUT = 10


class CourseHandler(http.server.SimpleHTTPRequestHandler):

    def do_GET(self):
        if self.path == '/health':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"status": "ok"}).encode())
            return
        if self.path == '/':
            self.path = '/index.html'
        return super().do_GET()

    def do_POST(self):
        if self.path != '/execute':
            self.send_response(404)
            self.end_headers()
            return

        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length)
        data = json.loads(body)
        code = data.get('code', '')
        time_limit = min(data.get('timeout', TIMEOUT), 30)

        result = self._execute(code, time_limit)
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(result).encode())

    def _execute(self, code, time_limit):
        with tempfile.NamedTemporaryFile(
            mode='w', suffix='.py', delete=False, encoding='utf-8'
        ) as f:
            f.write(code)
            tmp = f.name

        try:
            start = time.time()
            proc = subprocess.run(
                [sys.executable, tmp],
                capture_output=True, text=True, timeout=time_limit
            )
            elapsed = round(time.time() - start, 3)
            return {
                "output": proc.stdout,
                "error": proc.stderr if proc.returncode != 0 else None,
                "time": elapsed,
                "returncode": proc.returncode,
                "success": proc.returncode == 0
            }
        except subprocess.TimeoutExpired:
            return {
                "output": "",
                "error": f"Execution timed out after {time_limit}s (infinite loop?)",
                "time": time_limit,
                "returncode": -1,
                "success": False
            }
        except Exception as e:
            return {
                "output": "",
                "error": str(e),
                "time": 0,
                "returncode": -1,
                "success": False
            }
        finally:
            try:
                os.unlink(tmp)
            except OSError:
                pass

    def log_message(self, format, *args):
        if args[:2] in [
            ('GET', '/health'),
            ('GET', '/favicon.ico')
        ]:
            return
        super().log_message(format, *args)


def main():
    port = PORT
    while True:
        try:
            server = socketserver.TCPServer(("0.0.0.0", port), CourseHandler)
            break
        except OSError:
            port += 1

    url = f"http://127.0.0.1:{port}"
    print()
    print("  " + "=" * 50)
    print("     Python Mastery Course")
    print("  " + "=" * 50)
    print(f"     SPA + Playground: {url}")
    print(f"     All Python libraries available")
    print(f"     Press Ctrl+C to stop")
    print("  " + "=" * 50)
    print()

    try:
        import webbrowser
        webbrowser.open(url)
    except Exception:
        pass

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n  Shutting down...")
        server.shutdown()


if __name__ == '__main__':
    main()
