var sslRedirect = require('heroku-ssl-redirect');
var express = require('express');
var app = express();
// var timeout = require('connect-timeout');

// enable ssl redirect
app.use(sslRedirect());

var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the appliburgerion directory.
app.use(express.static("public"));

// Parse appliburgerion body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

app.use(function(req, res, next){
    res.header("Access-")
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*"); 
    next();
  });
  
  app.get('/', function(req, res, next) {
    // Handle the get for this route
  });
  
  app.post('/recipe-page', function(req, res, next) {
   // Handle the post for this route
  });