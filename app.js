const express = require('express');
const path = require('path');

const app = express();

app.use('/src', express.static(__dirname + '/src'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/src/index.html');
});

app.listen(3000, function() {
    console.log('Listening on port 3000...');
});