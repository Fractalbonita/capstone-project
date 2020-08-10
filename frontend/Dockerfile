FROM node:14.7-alpine as builder
WORKDIR /app
COPY . /app
RUN npm install && npm run build

FROM nginx:1.19.0-alpine
ADD nginx-default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build/ /usr/share/nginx/html/