# Node.js Application (Section 4)

A simple *node.js/express.js* "Hello world" application. Use a *node:10-alpine* as a base image and change the image's working directory, copy/install dependencies and run a default command.

## Docker

1. Build the Dockerfile and get the image id, as follows:

   ```shell
   docker build .
   ```

2. Run a container from the generated image with a port mapping flag, as follows:

   ```shell
   docker container run -p 8080:8080 <image_id>
   ```

   *Note*: Replace <image_id> with a real image id

3. Open your browser and navigate to [http://localhost:8080](http://localhost:8080) to see the application running.
