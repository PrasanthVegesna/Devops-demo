# Base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install

# Copy app files
COPY . .

# Build the app
RUN yarn build

# Expose the app on port 3000
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]
