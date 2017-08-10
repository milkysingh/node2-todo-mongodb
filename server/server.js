var express=require("express");
var bodyParser=require("body-parser"); 


var{Mongoose}=require("./db/mongoose");
var{Todo}=require("./models/todo");
var{User}=require("./models/user");

var app=express();

app.listen(3000,(msg)=>{
    console.log("Server started at 3000");
});

app.use(bodyParser.json());

app.post("/todo",(req,res)=>{
    var todo=new Todo({
        text:req.body.text,
        completed:req.body.completed
    });
    todo.save().then(
        (doc)=>{
            res.send(doc);
        },
        (e)=>{
            res.status(400).send(e);
        }
    )
})