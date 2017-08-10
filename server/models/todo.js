var mongoose=require("mongoose");
var Todo = mongoose.model("Todo", { //This comes back as contructor Function so u can create objects with that eg : New Todos
    text: {
        type: String,
        required: true,
        trim: true,
        minLength: 1
    },
    completed: {
        type: Boolean,
        default: false,
    },
    completedAt: {
        type: Number,
        default: null
    }
});
module.exports={Todo};