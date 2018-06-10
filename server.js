var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var MongoClient = require('mongodb').MongoClient;

var mongoDBDatabase;

var app = express();
var port = process.env.PORT || 3000;

var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;
var mongoURL =
	'mongodb://' + mongoUser + ':' + mongoPassword + '@' +
	mongoHost + ':' + mongoPort + '/' + mongoDBName;

console.log(mongoURL);

app.use(express.static('public'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.get('/', function (req, res) {
    res.status(200).sendFile("public/index.html");
});

app.get('*', function (req, res) {
    res.status(404).send("Doesn't exist");
});

MongoClient.connect(mongoURL, function (err, client) {
	if (err) 
		throw err;
	
	db = mongoDBDatabase = client.db(mongoDBName);
	app.listen(3000, function () {
		console.log("== Server listening on port 3000");
	});
});
