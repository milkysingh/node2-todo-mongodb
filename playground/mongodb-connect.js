// const MongoClient = require("mongodb").MongoClient
var {MongoClient,ObjectID}=require("mongodb");//Object destructuring

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to Connnect to Database");
    }
    console.log("Connected to Database Successfully!!");
    // db.collection("Todo").insertOne({
    //     text: "Do Something",
    //     completed: true
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to insert data " + err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })
    db.collection("Users").insertOne({name:"Riya",age:20,location:"Jammu,India"},(err,result)=>{
        if(err){
            return console.log("Unable to insert data"+err);
        }
         console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    });
    db.close();
});