var express = require('express');

var app = express.createServer(express.logger());
var data = require('fs').readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(data.toString());
});
port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});
