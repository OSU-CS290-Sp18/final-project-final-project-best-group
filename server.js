var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');

var mongoDBDatabase;

var app = express();
app.use(bodyParser.json());
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

app.get('/list', function(req, res, next) {
    var chars = db.collection('chars');
    var charList = chars.find({});
    charList.toArray(function (err, charDocs) {
        if (err)
            res.status(500).send("Error fetching people from DB.");
        else {
            res.status(200).render('char_list', {
                characters: charDocs
            });
        }
    });
});


app.get('/edit', function(req, res, next) {
    res.status(200).render('edit_sheet', {
        characters: [1]
    });
});

app.get('/chars/:charName/:charRace', function (req, res, next) {
    var chars = db.collection('chars');
    var charCursor = chars.find({
        name: req.params.charName,
        race: req.params.charRace 
    });
    charCursor.next(function (err, charDoc) {
        if (err)
            res.status(500).send("Error retrieving single char");
        else if (!charDoc)
            next();
        else { 
            res.status(200).render('char_sheet', {
                name: charDoc.name,
                race: charDoc.race,
                characters: [charDoc]
            });
        }
    });
});

app.get('/chars/:charName/:charRace/edit', function (req, res, next) {
    var chars = db.collection('chars');
    var charCursor = chars.find({
        name: req.params.charName,
        race: req.params.charRace 
    });
    charCursor.next(function (err, charDoc) {
        if (err)
            res.status(500).send("Error retrieving single char");
        else if (!charDoc)
            next();
        else { 
            res.status(200).render('edit_sheet', {
                characters: [charDoc]
            });
            chars.remove(charDoc);
        }
    });
});

app.post('/name/:charName/:charRace/submit', function (req, res, next) {
    var chars = db.collection('chars');
    chars.insertOne(req.body, function (err, result) {
        if (err) {
            res.status(500).send("Error inserting char in DB");
        } else {
            res.status(200).send("Success");
        } 
    });
});

app.get('*', function (req, res) {
    res.status(404).sendFile("public/404.html", { root: __dirname });
});

MongoClient.connect(mongoURL, function (err, client) {
	if (err) 
		throw err;
	
	db = mongoDBDatabase = client.db(mongoDBName);
	app.listen(port, function () {
		console.log(`== Server listening on port ${port}`);
	});
});
