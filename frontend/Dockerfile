FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# finalny kontener
FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/server.js ./server.js
COPY package*.json ./
RUN npm install --production
ENV VITE_BACKEND_URL="https://backend-docker.a.run.app"
EXPOSE 8080
CMD ["node", "server.js"]



