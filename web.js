var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var buffer = new Buffer(255);

var test = fs.readFileSync('/home/ubuntu/bitstarter/index.html');

//buffer.write(fs.readFileSync('/home/ubuntu/bitstarter/index.html'));

//console.log(buffer.toString());

//buffer.toString();

app.get('/', function(request, response) {
  response.send("Test");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

