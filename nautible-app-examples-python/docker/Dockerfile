FROM python:3.10-slim AS builder

WORKDIR /python/app

RUN python -m venv /venv
ENV PATH="/venv/bin:$PATH"

COPY . .
RUN apt-get -y update && pip install --upgrade pip && pip install --no-cache-dir --use-pep517 .

FROM python:3.10-slim AS runner

WORKDIR /python/app

RUN apt-get -y update

COPY --from=builder /venv /venv
COPY ./logging_config.conf ./logging_config.conf
ENV PATH="/venv/bin:$PATH"

EXPOSE 8080

CMD ["uvicorn", "openapi_server.main:app", "--host", "0.0.0.0", "--port", "8080"]
