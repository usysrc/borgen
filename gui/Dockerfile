# Use the official Node.js LTS (Long Term Support) image as the base image
FROM node:lts AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy all the source code to the container
COPY . .

# Build the Vue.js app
RUN npm run build

# Use a lightweight production image for the final image
FROM nginx:stable-alpine

# Copy the built Vue.js app from the previous stage to the Nginx public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80, which Nginx listens on by default
EXPOSE 80

# Start Nginx server in the foreground
CMD ["nginx", "-g", "daemon off;"]