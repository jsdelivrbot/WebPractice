var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("Hi there");
});


app.get("/bye", function(req,res){
    res.send("Good Bye");
});

app.get("/dog", function(req,res){
    res.send("I am a dog");
});

app.get("*", function(req,res){
    res.send("this is common");
});

app.listen(8081,process.env.IP, function(){
    console.log("server started");
});