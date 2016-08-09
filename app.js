var express = require('express'),
	app = express(),
	path = require('path'),
	http = require('http');

var port = process.env.PORT || 3000;

var server = http.createServer(app);

app.get('/', function (req, res){
	res.sendFile(path.join(__dirname +'/index.html'));
}).listen(port);


