var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var buff = fs.readFileSync("index.html","utf-8");
var content = buff.toString('utf-8');
app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
