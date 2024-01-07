# Use the official Node.js image as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the app (replace 'build-command' with the appropriate build command for each application)
RUN npm run build-command

# Expose the port the app runs on (replace 'port-number' with the appropriate port for each application)
EXPOSE 8080

# Start the app (replace 'start-command' with the appropriate start command for each application)
CMD ["npm", "start-command"]
