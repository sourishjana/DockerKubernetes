# FROM node:16 as builder → Uses Node.js 16 as the base image for building the Angular app.
FROM node:16 as builder

# WORKDIR /app → Sets the working directory inside the container to /app.
WORKDIR /app

# Copies package.json and package-lock.json (if available) to /app.
COPY package*.json .

# Installs Angular CLI globally.
RUN npm install -g @angular/cli

# Installs all the project dependencies usgin package.json
RUN npm install

# Copies all source files (except files listed in .dockerignore) into the container.
COPY . .

# Runs ng build --configuration=production to generate a production-ready build inside /app/dist/BookStoreWebApp/.
RUN npm run build

# Uses a lightweight Alpine Linux-based Nginx image for better performance and reduced size.
FROM nginx:1.19-alpine

# Copies the built Angular files from /app/dist/BookStoreWebApp/ (from the builder stage) to /usr/share/nginx/html/ where Nginx serves static files.
COPY --from=builder /app/dist/BookStoreWebApp /usr/share/nginx/html

# Replaces the default Nginx config with a custom nginx.conf file.
# The nginx.conf file will:
# Define how Nginx serves files.
# Configure reverse proxy rules.
# Specify the correct port (8070).
COPY conf/nginx.conf /etc/nginx/conf.d/default.conf

# Only for documentation purpose to tell that nginx will serve the application in port 8070
EXPOSE 8070

# Runs Nginx in the foreground to keep the container running.
CMD [ "nginx", "-g", "daemon off;" ]
