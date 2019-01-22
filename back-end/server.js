const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(config.MONGO_URI,  { useNewUrlParser: true }, (err, database) => {
  if (err) return console.log(err)
    
  require('./app/routes')(app, database);

  app.listen(config.LISTEN_PORT, () => {
    console.log('The API is live on ' + config.LISTEN_PORT);
  });
});
