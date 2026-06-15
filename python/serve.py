import sys
import os

os.chdir(os.path.dirname(os.path.abspath(__file__)))

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from platform.server import start_server

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else None
    start_server(port)
