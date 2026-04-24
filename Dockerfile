# Build Stage 1

FROM node:25-alpine AS build
LABEL authors="Minimata"
WORKDIR /app

# Copy package.json and lockfile
COPY package.json package-lock.json ./

# Install dependencies
RUN npm i

# Copy the entire project
COPY . ./

# Build the project
RUN npx nuxt generate

# Build Stage 2
FROM nginx
COPY --from=build /app/dist/ /usr/share/nginx/html
