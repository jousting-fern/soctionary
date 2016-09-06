// requires
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// static routes
app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));

//routes
app.get('/', function(req, res) {
	console.log('endpoint responding...');
	res.end('Test');
});

// start server
app.listen(8080, function(data) {
	console.log('server starting...');
});