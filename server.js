var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');
var app = express();
var yaml = require('js-yaml');
var fs = require('fs');

try {
  var apiConfig = yaml.safeLoad(fs.readFileSync('server-config.yml', 'utf8'));
  var api = new ParseServer(apiConfig);
  var dashboardConfig = yaml.safeLoad(fs.readFileSync('dashboard-config.yml', 'utf8'));
  // Use this flag if you are under a load balancer or proxy using https
  // allowInsecureHTTP = 1
  // var dashboard = new ParseDashboard(dashboardConfig, allowInsecureHTTP);
  var dashboard = new ParseDashboard(dashboardConfig);
  
  // Serve the Parse API on the /parse URL prefix
  app.use('/parse', api);

  // make the Parse Dashboard available at /dashboard
  app.use('/dashboard', dashboard);

  app.listen(33033, function() {
    console.log('express-parse-server running.');
  });
} catch (e) {
  console.log(e);
}
