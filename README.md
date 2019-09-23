# Docker and Kubernetes: The Complete Guide

This repository contains my solutions to the exercises from the *Docker and Kubernetes: The Complete Guide* course.

Course available at [Udemy](https://www.udemy.com/docker-and-kubernetes-the-complete-guide)

## Projects

- [***redis-server***](p1-redis-server/): Use a *redis:latest* image as a base image, download and install a dependency and tell the image what to do when it starts as a container.

- [***nodejs-app***](p2-nodejs-app/): A simple *node.js/express.js* "Hello world" application. Use a *node:10-alpine* as a base image and change the image's working directory, copy/install dependencies and run a default command.

- [***visits-app***](p3-visits-app/): A *node.js/express.js* application that counts the number of page visits. It uses two containers, one for the Node.js server and the other for Redis to store the number of page visits value.
