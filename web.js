// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

var pg = require('pg');


pg.connect(process.env.DATABASE_URL, function(err, client, done) {
  client.query('SELECT * FROM your_table', function(err, result) {
    done();
    if(err) return console.error(err);
    console.log(result.rows);
  });
});


app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/checkin',  function(req, res) {
  res.send('Checking in safe Awesome');
});

app.get('/missingfriends',  function(req, res) {
  res.send('Here are your friends');
});

app.get('/newevent',  function(req, res) {
  res.send('Checking in safe Awesome');
});

app.get('/about',  function(req, res) {
  res.send('About the app');
});

app.get('/tutorial',  function(req, res) {
  res.send('This is how you use this app');
});

app.get('/*',  function(req, res) {
  res.send('Redirect back to homepage');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});