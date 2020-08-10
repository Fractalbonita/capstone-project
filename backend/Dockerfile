FROM node:14.7-alpine as builder
WORKDIR /app
CMD ["npx", "babel-node", "src/server.js"]
COPY . /app
RUN npm install