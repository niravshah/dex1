var express = require('express'),
    http = require('http'),
    mongoose = require('mongoose');


var app = express();
mongoose.connect('mongodb://mongo/myappdatabase');

app.get('/', function(req, res, next) {
    var evv = process.env.NODE_ENV || 'NONE'
    res.send('Hola! ' + evv);
});

http.createServer(app).listen(3000, function() {
    console.log('Listening on port ' + 3000);
});