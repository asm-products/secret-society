var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.render('index.jade');
});

app.post('/email', function(req, res){
    if (typeof req.body.email !== 'undefined'){
        var info = req.body.email + ",";
        fs.appendFile('emails.csv', info, function(error){
            if (error){
                console.log(error);
            };
        });
        res.send(req.body.email);
    }
})

app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'));
});
