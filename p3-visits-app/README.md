# Visits Application (Section 5)

A *node.js/express.js* application that counts the number of page visits. It uses two containers, one for the Node.js server and the other for Redis to store the number of page visits value.

## Docker

1. Run the `docker-compose.yaml` file in the detached mode, as follows:

   ```shell
   docker-compose up -d .
   ```

2. Open your browser and navigate to [http://localhost:8030](http://localhost:8030) to see the application running.

3. After finishing, shut down all the running containers, as follows:

   ```shell
   docker-compose down
   ```
