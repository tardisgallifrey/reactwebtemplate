//
//Remember to change ports below to 80 and 443 before starting on server
//
//Remember to do NPM INSTALL express when cloned to server
var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
const path = require('path');
var app = express();
const http_port = 8080;  //change to 80 for production server
const https_port = 4000;  //change to 443 for production server

//Remove this line once you have your certificate and key file ready
var options = {};

//These are commented as they'll result in app failure if they do not exist
//var options = {
  //key: fs.readFileSync('key.pem'),    //real key.pem file needed here
  //cert: fs.readFileSync('cert.pem'),  //real cert.pem file needed here
//};

http.createServer(app).listen(http_port,() => {console.log("HTTP server started at "+http_port+"\n")});
https.createServer(options, app).listen(https_port, ()=>{console.log("HTTPS server started at "+https_port+ "\n")});

// serve static files built by React
app.use(express.static(path.join(__dirname, "webtemplate/build")));
 
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "webtemplate/build", "index.html"));
});

app.get('*',function (req, res) {
  res.redirect('/');
});

app.use(function (req, res, next) {
  res.status(404).send("<h2>Sorry can't find that!</h2>")
})


 