var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", function(req,res){
	console.log("hello");
	res.send("hello everyone");
});

var server = app.listen(8080 ,function(req,res){
console.log("server is starting");
});
