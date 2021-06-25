const mongoose=require("mongoose");

mongoose.connect('mongodb://localhost:27017/todoapp',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const User=mongoose.model('User',{
    uid:Number,
    username:String,
    password:String,
    todos:[]
})
module.exports={
    User
}