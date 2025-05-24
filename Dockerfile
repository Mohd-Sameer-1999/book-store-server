# Use an official Node.js runtime as the base image
FROM node:18-alpine  

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies (production-only for smaller image)
RUN npm install --only=production

# Copy the rest of the application code
COPY . .

# Expose port 3000 (same as your Express app)
EXPOSE 3000

# Command to run the app
CMD ["npm", "run", "dev"]