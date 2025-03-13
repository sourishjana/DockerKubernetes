# FROM node:alpine

# WORKDIR /usr/src/app

# COPY . /usr/src/app

# RUN npm install -g @angular/cli

# RUN npm install

# CMD ["ng", "serve", "--host", "0.0.0.0"]

# Stage 1: Build the Angular application
FROM node:16 as builder
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json .

RUN npm install -g @angular/cli
RUN npm install

# Copy the rest of the application
COPY . .

RUN npm run build

FROM nginx:1.19-alpine

COPY --from=builder /app/dist/BookStoreWebApp /usr/share/nginx/html

COPY conf/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8070

CMD [ "nginx", "-g", "daemon off;" ]
