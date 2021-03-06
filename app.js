const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function() {
    console.log('Listening on port 3000...');
});