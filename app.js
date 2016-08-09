var express = require('express'),
	app = express(),
	path = require('path');


var port = process.env.PORT || 3000;

app.get('/', function (req, res){
	res.sendFile(path.join(__dirname +'/index.html'));
});


var http = require('http').Server(app);

http.listen(port, function(){
	console.log('listening on ', port);
});
