FROM node:20-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app

RUN npm install -g pnpm

# Install dependencies - cached unless package files change
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/docs/package.json ./apps/docs/package.json
COPY packages/velocityui/package.json ./packages/velocityui/package.json
RUN pnpm install --frozen-lockfile

# Copy remaining source (workspace symlinks in node_modules already point here)
COPY tsconfig.base.json ./
COPY packages/velocityui/ ./packages/velocityui/
COPY apps/docs/ ./apps/docs/

ARG NEXT_PUBLIC_APP_URL
ARG NEXT_PUBLIC_APP_NAME

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN pnpm --filter velocityui build
RUN pnpm --filter docs build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/apps/docs/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/docs/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
