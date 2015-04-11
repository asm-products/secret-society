// Get dependencies
var express = require('express'),
    app = express();

// Config
var port = process.env.PORT || 8080;
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');

// Routes
app.get('*', function(req, res){
    res.render('index.jade');
});

// Listen
app.listen(port);
console.log("Listening on http://localhost:" + port);
