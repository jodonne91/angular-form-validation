var express = require('express');
var path = require('path');

var less = require('less-middleware')
var app = express();

app.use(less(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'public/test.html'))
})

module.exports = app;
