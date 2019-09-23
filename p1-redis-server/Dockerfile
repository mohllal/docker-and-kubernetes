# use an existing docker image as a base
FROM alpine

# download and install dependencies
RUN apk add redis

# specify the startup command  
CMD [ "redis-server" ]
