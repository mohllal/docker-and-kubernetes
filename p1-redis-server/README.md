# Redis Server (Section 3)

Use a *redis:latest* image as a base image, download and install a dependency and tell the image what to do when it starts as a container.

## Docker

1. Build the Dockerfile and get the image id, as follows:

   ```shell
   docker build .
   ```

2. Run a container from the generated image, as follows:

    ```shell
   docker container run <image_id>
   ```

*Note*: Replace <image_id> with a real image id
