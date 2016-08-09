var express = require('express'),
	app = express(),
	path = require('path');

var port = process.env.PORT || 3000;

app.get('/', function (req, res){
	res.sendFile(path.join(__dirname +'/index.html'));
});

app.listen(port, function(){
	console.log('Our app is running on http://localhost' + port);
});


