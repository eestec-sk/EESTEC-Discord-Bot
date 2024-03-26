# Pass the token as a build argument
ARG token

# From baseline node:18-alpine
FROM node:18-alpine

# Make a new directory for node_modules
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Set the workdir to /app
WORKDIR /home/node/app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the required dependencies
RUN npm install

# Swap to the node user
USER node

# Copy the rest of the files
COPY --chown=node:node . .

# Set the token as environment variable
ENV TOKEN = token

# Run the node command on the entrypoint file
CMD ["node", "index.js"]