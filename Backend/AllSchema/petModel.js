const mongoose = require("mongoose")

const petSchema = new mongoose.Schema({
    name : String,
    species: String,
    breed: String,
    age: String,
    gender: String,
    personality: String,
    favorite_activities: Array,
    special_needs: String
},{versionKey:false}
)

const petModel = mongoose.model("pet", petSchema)

module.exports = {
    petModel
}