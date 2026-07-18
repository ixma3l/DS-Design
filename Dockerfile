# syntax=docker/dockerfile:1

FROM node:22-alpine AS builder

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build-storybook


FROM nginx:alpine AS production

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder \
  /app/storybook-static \
  /usr/share/nginx/html

EXPOSE 8080

HEALTHCHECK \
  --interval=30s \
  --timeout=5s \
  --start-period=10s \
  --retries=3 \
  CMD wget --quiet --tries=1 --spider \
  http://127.0.0.1:8080/health || exit 1