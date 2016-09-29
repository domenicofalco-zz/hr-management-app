var express = require('express');
var opener = require('opener');
var app = express();
var serverUrl = 'http://localhost:3000/';

app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
  console.log('\r\n--------------------------------\r\n');
  console.log('\r\nRunning on ' + serverUrl + '\r\n');
  console.log('\r\n--------------------------------\r\n');
});

opener(serverUrl);
