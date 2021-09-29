var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! Hello Siva! How are you!!! You are learning DevOps Course!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
