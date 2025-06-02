# Step 1: Use an official Node.js image as the base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the backend code
COPY . .

# Expose the backend port (5000)
EXPOSE 5000

# Set environment variables (You can use .env file or set them manually in the Docker Compose)
CMD ["node", "server.js"]
