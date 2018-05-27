var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.status(200).sendFile("public/index.html");
});

app.get('*', function (req, res) {
    res.status(404).send("Doesn't exist");
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
