const express = require('express');
const redis = require('redis');

const app = express();
const redisClient = redis.createClient({
    host: "redis-server",
    port: 6379
});

// set the initial value of visits
redisClient.set('visits', 0);

app.get('/', function (req, res, next) {
    redisClient.get('visits', function (err, value) {
        res.send(`Number of visits is ${value}`);
        redisClient.set('visits', parseInt(value) + 1);
    });
});

app.listen(8030, function () {
    console.log('Server is running at: http://localhost:8080'); 
});