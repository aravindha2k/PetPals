const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    serviceName: String,
    serviceDescription: String,
    servicePrice: Number,
    serviceImg: String,
    serviceCategory: [String], // Categories like grooming, walking, training, etc.
    reviews: [{
        username: String,
        rating: Number,
        comment: String
    }]
});

const serviceModel = mongoose.model("Service", serviceSchema);

module.exports = { serviceModel };
