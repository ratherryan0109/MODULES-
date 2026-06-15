FROM python:3.13-slim AS builder
WORKDIR /build
RUN pip install --no-cache-dir numpy pandas matplotlib scipy requests
RUN python -c "import numpy, pandas, matplotlib, scipy, requests; print('Pre-installed packages OK')"

FROM python:3.13-slim
LABEL description="Python Execution Platform - App Server"
LABEL maintainer="course-platform"

RUN adduser --disabled-password --gecos '' appuser \
    && mkdir -p /app /data /tmp/python-exec \
    && chown -R appuser:appuser /app /data /tmp/python-exec

WORKDIR /app

COPY --from=builder /usr/local/lib/python3.13/site-packages /usr/local/lib/python3.13/site-packages

COPY platform/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY platform/ ./

USER appuser

EXPOSE 8080

ENV PORT=8080
ENV REDIS_URL=redis://redis:6379/0
ENV MAX_TIMEOUT=30
ENV MAX_MEMORY=256m
ENV CONTAINER_CPU=0.5
ENV MAX_CONCURRENT=4

CMD ["python", "-m", "platform.server"]
