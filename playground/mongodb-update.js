var {MongoClient,ObjectID} = require("mongodb"); //Object destructuring
MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to Connnect to Database");
    }
    console.log("Connected to Database Successfully!!");
    // db.collection("Users").findOneAndUpdate(
    //     {
    //         _id:new ObjectID("598a19623e077f38dccac672")
    //     },
    //     {
    //         $set:{
    // location:"Blacktown,Sydney,Australia"
    //         }
    //     },
    //     {
    //     returnOriginal:false
    //     },
    // ).then((result)=>{
    //     console.log(result);
    // })

    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("598a19623e077f38dccac672")
    }, {
        $inc: {
            age: +1
        }
    }, {
        returnOriginal: false
    }, ).then((result) => {
        console.log(result);
    })
    // db.close();
});