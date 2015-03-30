var express = require('express');
var app = express();

var port = 3000;

app.get('/', function(req, res) {
    res.render('index.jade');
});

app.listen(port, function() {
    console.log('Server listening on localhost:' + port);
});