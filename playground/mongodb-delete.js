var {
    MongoClient,
    ObjectID
} = require("mongodb"); //Object destructuring

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to Connnect to Database");
    }
    console.log("Connected to Database Successfully!!");
 //Delete Many   
// db.collection("Users").deleteMany({name:"Malkeet"}).then(
//     (users)=>{
//     console.log(users);
// });
// findOneAndDelete

db.collection("Users").findOneAndDelete({name:"Riya"}).then(
    (res)=>{
        console.log(res);
    }
)
    // db.close();
});