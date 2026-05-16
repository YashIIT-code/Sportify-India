# Multi-stage build for optimal image size
# Stage 1: Dependencies
FROM node:20-alpine AS dependencies
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* yarn.lock* ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* yarn.lock* ./

# Install all dependencies (including dev)
RUN npm ci && npm cache clean --force

# Copy source code
COPY . .

# Build Next.js app
RUN npm run build

# Stage 3: Runner (Production)
FROM node:20-alpine AS runner
WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copy production dependencies from dependencies stage
COPY --from=dependencies /app/node_modules ./node_modules

# Copy built app and public assets from builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json

# Switch to non-root user
USER nextjs

# Expose port 3000 for Next.js
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start Next.js app
CMD ["npm", "start"]
