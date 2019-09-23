const express = require('express');

const app = express();

app.get('/', function (req, res, next) {
    res.send('Hello World!');
});

app.listen(8080, function () {
    console.log('Server is running at: http://localhost:8080'); 
});