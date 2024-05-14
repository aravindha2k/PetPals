const mongoose = require("mongoose")

const petSchema = new mongoose.Schema({
    name: String,
    breed: String,
    gender: String,
    price: String,
    species: String,
    age: String,
    about: String,
    color: String,
    image: String,
    favorite_activities: [String]
},{versionKey:false}
)

const petModel = mongoose.model("pet", petSchema)

module.exports = {
    petModel
}