const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const mongoose = require('mongoose');

const app = express();

const port = 27017;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url,  { useNewUrlParser: true }, (err, database) => {
	if (err) return console.log(err)
		
	dbase = database.db("practice")
	require('./app/routes')(app, db);

	app.listen(port, () => {
	console.log('We are live on ' + port);
	});
});