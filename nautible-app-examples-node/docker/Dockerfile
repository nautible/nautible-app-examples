FROM node:18.12-slim as builder

WORKDIR /node/app

ENV NODE_ENV development

COPY . .
RUN apt-get -y update && npm ci && npm run build

FROM node:18.12-slim as runner

WORKDIR /node/app

ENV NODE_ENV production
ENV PORT 8080

COPY package*.json ./
RUN apt-get -y update && npm ci

COPY --from=builder /node/app/dist /node/app/dist

EXPOSE 8080

CMD ["dist/index.js"]
