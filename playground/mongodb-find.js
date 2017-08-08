var {
    MongoClient,
    ObjectID
} = require("mongodb"); //Object destructuring

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to Connnect to Database");
    }
    console.log("Connected to Database Successfully!!");
    // db.collection("Todo").find({
    //     _id: new ObjectID("598a0c58962dac5e1a8939fc")
    // }).toArray().then(
    //     (docs) => {
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     (err) => {
    //         console.log("Unable to find", err);
    //     }
    // );
    //  db.collection("Todo").find().count().then(
    //     (count) => {
    //         // console.log(JSON.stringify(docs, undefined, 2));
    //         console.log("Todos count :"+count);
    //     },
    //     (err) => {
    //         console.log("Unable to find", err);
    //     }
    // );

    db.collection("Users").find({name:"Aman"}).toArray().then(
        (docs)=>{
            console.log(JSON.stringify(docs,undefined,2));
        },
        (err)=>{
            console.log("Unable to fetch the data",err);
        }
    );
    db.close();
});