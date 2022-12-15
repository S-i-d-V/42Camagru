# Pull the minimal Ubuntu image
FROM ubuntu

# Install Nginx
RUN apt-get -y update && apt-get -y install nginx

# Copy the Nginx config
COPY default.conf /etc/nginx/sites-available/default

# Copy img
RUN mkdir -p /etc/camagru/img
COPY /img/* /etc/camagru/img

# Copy HTML files
RUN mkdir -p /etc/camagru/html
COPY html/*.html /etc/camagru/html

# Copy CSS files
RUN mkdir -p /etc/camagru/css
COPY css/*.css /etc/camagru/css

# Copy JS files
RUN mkdir -p /etc/camagru/js
COPY js/*.js /etc/camagru/js

# Expose the port for access
EXPOSE 80/tcp

# Run the Nginx server
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]