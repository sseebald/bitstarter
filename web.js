var express = require('express');

var app = express.createServer(express.logger());

var buffer = new Buffer(16);

fs.readFile('/etc/passwd', data);

buffer.write(fs.readFileSync('/etc/passwd', data),"utf-8");


//var buffer = new Buffer(fs.readFile('/home/ubuntu/bitstarter/index.html'),"utf-8");

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

