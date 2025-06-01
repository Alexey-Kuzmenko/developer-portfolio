# This Dockerfile is intended for development, not production
FROM node:slim AS builder
RUN corepack enable
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build
FROM node:slim
RUN corepack enable

WORKDIR /app
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app ./
COPY --from=builder /app/src ./src
CMD ["yarn", "run" ,"start"]