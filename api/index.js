"use strict";
//Get the express server and app
const express = require('express');
const port = 13000;
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());

var usersStore = {};

//Inserting dummy users to users story
for(var i = 0 ; i < 3000000 ; i ++) {
  usersStore["dummy"+i] = "123asdfadfao9dsf8asd6f7asdfasbdfas";
}
//Adding test user to authenticate
usersStore.admin = "admin";
//Any process related errors will be logged
process.on('uncaughtException', function(err) {
  console.log("uncaught exception : ", err);
});

app.post('/api/login', function(req, res) {
  setTimeout(function(){
    var username = req.body.username;
    var password = req.body.password;
    if(usersStore[username] === password) {
      res.send({success: true, message: null});
    } else {
      res.send({success:false, message: "Invalid username or password"});
    }
  }, Math.random()*3000);
    
});
//Run the express server and call the eureka client register
app.listen(port, function(){
  console.log("Listening on :"+port);
});