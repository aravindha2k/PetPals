const { Schema, default: mongoose } = require("mongoose");


const userSchema=new Schema({
    username: String,
    email: String,
    password: String,
},{versionKey:false}
)
const userModel=mongoose.model('user',userSchema);
module.exports={userModel,userSchema}