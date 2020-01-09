var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
 
console.log(__dirname);

app.use(express.static(__dirname+'/Views'));

/*
//Setup for first route
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+"/index"));
});
*/

app.use('/', router);


app.listen(3000, function(){
    console.log("Server is running on port 3000");
});