// Chris McKinlay
// Programming from A to Z, Fall 2014
// https://github.com/mckinlay/text

// Thanks Sam Lavigne and Shawn Van Every
// https://github.com/antiboredom/servi.js/wiki

// Use servi
// npm install servi
var servi = require('servi');
// Make an app
var app = new servi(true);
// Set the port
port(8080);

// Default route
route('/', requestHandler);

// A simple reply
function requestHandler(request) {
  request.respond("Hello World");
}

// Start the server
start();