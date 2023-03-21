# Base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install --production

# Copy app files
COPY . .

# Expose the app on port 3001
EXPOSE 3001

# Start the app
CMD ["yarn", "start"]
