'use strict';

var PORT = 4000;

// dependencies and libraries
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');
var marked = require('marked');

var app = express();

// general middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// get index.html file for local server port 4000
app.get('/', function(req, res){
	fs.readFile('./index.html', function(err, data){
		console.log('in the get html file');
		var html = fs.readFileSync('./index.html').toString();
		res.send(html);
	});
});

app.use('/markdowns', require('./routes/markdowns'));

app.listen(PORT, function(){
	console.log('on local server port: ' + PORT);
})

