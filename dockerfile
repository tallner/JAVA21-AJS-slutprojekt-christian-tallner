# Use the official Node.js 14 image as the base image
FROM node:18 as builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the application source code to the container
COPY . .

# Build the frontend application
RUN npm run build

# Use a lightweight Nginx image as the base image for serving the static files
FROM nginx:1.21-alpine

# Copy the built application from the previous stage to the NGINX html directory
COPY --from=builder /app/docs /usr/share/nginx/html

# Expose port 80 to allow incoming traffic
EXPOSE 80

# Start NGINX server when the container starts
CMD ["nginx", "-g", "daemon off;"]
