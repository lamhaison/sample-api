var express = require('express');
var app = express();
var config = require('./config');

var redis = require('redis'),
    client = redis.createClient(config.redis);

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/:key', function (req, res) {
  client.get(req.params.key, function(error, result) {
    if (error) return res.send(error).status(400);
    try {
      res.send(JSON.parse(result));
    } catch (e) {
      res.send(result);
    }
  });
});

app.post('/api/:key', function(req, res) {
  client.set(req.params.key, JSON.stringify(req.body), function(error) {
    if (error) return res.send(error).status(400);
    res.send('OK');
  });
});

app.listen(config.port, function () {
  console.log('Sample API listening on port ' + config.port);
});
