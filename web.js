var express = require('express');

var app = express.createServer(express.logger());

var buffer = new Buffer(255);

buffer.write(fs.readFile('/home/sseebald/bitstarter/index.html'),"utf-8");

app.get('/', function(request, response) {
  response.send(buf.toString(buffer));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

