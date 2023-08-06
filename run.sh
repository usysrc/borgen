#!/bin/sh

# Function to stop Docker Compose services gracefully
stop_docker_compose() {
  echo "Stopping Docker Compose services..."
  docker-compose down
}

# Register the exit trap function to be called when the script terminates
trap stop_docker_compose EXIT

# Step 1: Build the Docker Compose services
docker-compose build

# Step 2: Start the Docker Compose services in detached (background) mode
docker-compose up -d

# Step 3: Change directory to the "gui" folder where your Vue.js app resides
cd gui

# Step 4: Run the development server for your Vue.js app with hot reloading
npm run dev
