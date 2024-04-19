

# Base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Install webpack globally
RUN npm install -g webpack

# Copy the source code to the working directory
COPY . .


# Expose any necessary ports (if applicable)
 EXPOSE 1234
 EXPOSE 1235

# Default command to run the application (if applicable)
CMD [ "npm","start" ]