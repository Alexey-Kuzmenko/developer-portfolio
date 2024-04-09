FROM node:20-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package*.json ./
EXPOSE 8080

FROM base as builder
WORKDIR /app
COPY . .
RUN npm install --force
RUN npm run build


FROM base as production
WORKDIR /app

ENV NODE_ENV=production
RUN npm ci --force

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs


COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

ENV PORT 8080

CMD HOSTNAME="0.0.0.0" node server.js
# CMD ["npm", "start"]