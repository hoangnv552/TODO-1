var bodyParser = require('body-parser'),
    express = require('express'),
    fs = require('fs'),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo');

var app = express();

// use static files
app.use(express.static(__dirname + '/../bower_components'));
app.use(express.static(__dirname + '/../client'));

// use body parser
app.use(bodyParser.json());

// autoload all files in ./models
fs.readdirSync(__dirname + '/../server/models').forEach(function(file) {
    require('./models/' + file);
});

// define routes
// autoload all files in ./routes
fs.readdirSync(__dirname + '/../server/routes').forEach(function(file) {
    require('./routes/' + file)(app);
});

module.exports = app;