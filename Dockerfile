# Use newer Node.js version that supports import.meta.dirname
FROM node:20-alpine

# Install build dependencies for native modules like bcrypt
RUN apk add --no-cache python3 make g++

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json from root
COPY package*.json ./

# Install all dependencies (including client and server deps)
RUN npm install

# Copy all source files
COPY . .

# Build the client (if needed)
RUN npm run build 2>/dev/null || echo "No build script found, skipping"

# Set environment variables that might be needed
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=5000
ENV EXPRESS_HOST=0.0.0.0

# Expose port (adjust based on your app - common ports are 3000, 5000, 8000)
EXPOSE 5000

# Start the application with host binding
CMD ["node", "-r", "dotenv/config", "dist/index.js"]