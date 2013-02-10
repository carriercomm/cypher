#!/usr/bin/env node

var http =          require('http');
var whiskers =      require('whiskers');
var express =       require('express');
var web =           express();
var server =        http.createServer(web);
var fs =        	require('fs');

web.set('views', 'views');
web.engine('html', whiskers.__express);
web.use('/', express.static('./public'));
server.listen(7000);
web.use(express.bodyParser());

fs.readdir('./controllers', function(error, files) {
	for (index in files) {
		if (files[index].split('.').pop() === 'js') {
			console.log("Loading Controller: " + files[index]);
			require('./controllers/' + files[index])({ web: web });
		}
	}
});
