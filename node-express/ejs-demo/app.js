var express = require("express");
var app = express();

app.get("/",(req,res)=>{
    //res.send("<h1>Welcome to home page</h1>")
    res.render("home.ejs");
});

app.get("/fallenlovewith/:thing",(req,res)=>{
    var thing = req.params.thing;
    //res.send("You fell in love with "+thing);
    res.render("love.ejs", {thingVar: thing});
});

app.listen(8081,process.env.IP, ()=>{console.log("Server started");});