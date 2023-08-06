# Use the official Node.js LTS (Long Term Support) image as the base image
FROM node:lts AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Copy all the source code to the container
COPY . .

# Install project dependencies
RUN npm install

# Start the Vue CLI development server for hot reloading
CMD ["npm", "run", "dev"]
