const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/about.html');
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});
