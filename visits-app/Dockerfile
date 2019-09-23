# specify the base image as node:10-alpine
FROM node:10-alpine

# change the working directory
WORKDIR /var/app

# copy both package.json and package-lock.json to minimize the cache busting
COPY ./package.json .
COPY ./package-lock.json .

# install dependencies
RUN npm install

# copy other project files in the build context folder to cwd in the image
COPY . .

# specify a startup command
CMD ["npm", "start"]