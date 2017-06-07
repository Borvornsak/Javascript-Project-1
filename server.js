var express = require('express');
var app = express();

//serving static file
app.use(express.static('public'));

//send index.htm
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

//send prefixfree.js
app.get('/prefixfree.js', function (req, res) {
   // Prepare output in JSON format
   res.sendFile( __dirname + "/" + "prefixfree.js" );
})

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})