var express = require('express');

var app = express.createServer(express.logger());

//var buffer = new Buffer(fs.readFileSync('/home/ubuntu/bitstarter/index.html');

//fs.readFileSync('/etc/passwd');

//buffer.write(fs.readFileSync('/etc/passwd'),"utf-8");

//buffer.write("Test");

//var buffer = new Buffer(fs.readFile('/home/ubuntu/bitstarter/index.html'),"utf-8");

fs.readFileSync('/home/ubuntu/bitstarter/index.html')
console.log(data);


//app.get('/', function(request, response) {
//  response.send("Test");});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

