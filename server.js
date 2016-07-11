var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var balance = ('/balance');
// var router = require('./balance');
var moduleOne = require('./modules/moduleOne.js');
var moduleTwo = require('./modules/moduleTwo.js');
var moduleThree = require('./modules/moduleThree.js');

//joining the base to public
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/balance', router);

app.use(bodyParser.urlencoded({extended: false}));

//redirects to index.html
app.get('/', function(request, response){
  response.sendFile(path.join(__dirname, 'public'));
});

//requests the balance and sends it back to
app.put('/balanceRandom', function(request, response){
  var randomBalance = moduleThree.blah(request.body.min, request.body.max);
  // console.log(randomBalance);
  response.send(randomBalance);
  //response.send(balance);
});

app.put('/balance', function(request, response){
  console.log('request.body', request.body);
  // console.log(min, max);
  var submittedBalance = moduleThree.blah(request.body.min, request.body.max);
  response.send(submittedBalance);
});

var server = app.listen(3000, function(request, response){
  var port = server.address().port;
  console.log('Server is up.');
  console.log('Server is listening to port ', port);
  console.log('Ctrl-C to stop.');
});

//catch all
app.get('/*', function(request, response){
  response.send('An error occured. WTF MATE??');
});
