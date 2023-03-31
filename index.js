const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/', function(req, res) {
  console.log('Got a POST request');
  res.send('Received POST request');
});

app.use(express.static('public'));

// Serve the about.html file when /about is requested
app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname + '/about.html'));
});

// Serve the map.html file when /map is requested
app.get('/map', function(req, res) {
  res.sendFile(path.join(__dirname + '/map.html'));
});

app.get('/user/:id', function(req, res) {
  console.log('Got a request for user ID:', req.params.id);
  res.send('User ID: ' + req.params.id);
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});
