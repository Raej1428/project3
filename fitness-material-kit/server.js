var sslRedirect = require('heroku-ssl-redirect');
var express = require('express');
var app = express();
// var timeout = require('connect-timeout');

// enable ssl redirect
app.use(sslRedirect());

var PORT = process.env.PORT || 8080;

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

// app.use(timeout(150000));
// app.use(haltOnTimedout);

// function haltOnTimedout(req, res, next) {
//     if (!req.timedout) next();
// }