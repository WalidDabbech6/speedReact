# Use the official Node.js 16.20.2 image as a base
FROM node:16.20.2-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose the port on which the React app runs
EXPOSE 5173

# Set the command to run the React app
CMD ["npm", "run", "dev"]
