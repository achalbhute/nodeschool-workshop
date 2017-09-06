var express = require('express');
var path = require('path');
var pug = require ('pug');
var app = express();

app.set('view engine', 'pug');

app.get('/home',function(req, res){
    res.render(process.argv[3], {date :new Date().toDateString()})
})

//app.set('views', path.join(__dirname, process.argv[3]));


app.listen(process.argv[2]);
