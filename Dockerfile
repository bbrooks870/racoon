# Use the official Nginx image as the base image
FROM nginx:latest

# Copy your website files into the container
COPY . /usr/share/nginx/html

# Expose port 80 to listen for HTTP traffic
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]

