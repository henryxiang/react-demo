var express = require('express'),
    server = express(),
    port = '8000',
    documentRoot = __dirname;

server.use("/", express.static(documentRoot));

server.set('view engine', 'jade');

server.get('/', function(req, res) {
  res.render('index')
});

console.log("Starting server on port " + port);
server.listen(port);
