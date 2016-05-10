var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();
var yaml = require('js-yaml');
var fs = require('fs');

try {
  var config = yaml.safeLoad(fs.readFileSync('config.yml', 'utf8'));
  var api = new ParseServer(config);
  
  // Serve the Parse API on the /parse URL prefix
  app.use('/parse', api);

  app.listen(33033, function() {
    console.log('parse-server-example running.');
  });
} catch (e) {
  console.log(e);
}