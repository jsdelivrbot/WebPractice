var express = require("express");
var app = express();

app.get("/",(req,res)=>{
    res.send("Hi there, welcome to my assignment");
});

app.get("/speak/:animal",(req,res)=>{
    var animal = req.params.animal;
    var response = "";
    if(animal === 'pig') {
        response = "The pig says 'Oink'";
    } else if (animal === 'cow') {
        response = "The cow says 'Moo'";
    } else {
        response = "Don't know";
    }
    res.send(response);
});

app.get("/repeat/:word/:count", (req,res)=>{

    var word = req.params.word;
    var count = req.params.count;
    var response = "";
    for(let i=0;i<count;i++) {
        response = response.concat(word+" ");
    }
    res.send(response);

});

app.get("*", (req,res)=>{res.send("Sorry Page Not Found");});

app.listen(8081,process.env.IP, ()=>{
    console.log("server started");
});