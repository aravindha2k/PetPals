const mongoose = require("mongoose")

const adoptionSchema = new mongoose.Schema({
    petId: String,
    petName: String,
    petSpecies: String,
    color: String,
    userId:String,
    username:String,
    email: String,
    phone: String,
    address: {type:String, required:true},
    landmark: String,
    pin: String,
    adoptionStatus: String,
    },{versionKey:false}
)

const adoptionModel = mongoose.model("adoption", adoptionSchema)

module.exports = {
    adoptionModel
}