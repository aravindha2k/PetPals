const mongoose = require("mongoose")

const petSchema = new mongoose.Schema({
    name: {type:String, required:true},
    breed: {type:String, required:true},
    gender: {type:String, required:true},
    price: {type:String, required:true},
    species: {type:String, required:true},
    age: {type:String, required:true},
    about: {type:String, required:true},
    color: {type:String, required:true},
    image: {type:String, required:true},
    favorite_activities: {type:[String], required:true}
},{versionKey:false}
)

const petModel = mongoose.model("pet", petSchema)

module.exports = {
    petModel
}