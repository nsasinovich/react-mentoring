const express = require('express');
const path = require('path');

const history = require('connect-history-api-fallback');

const app = express();
app.use(history());

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});
