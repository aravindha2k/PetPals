const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    serviceName: String,
    serviceDescription: String,
    servicePrice: Number,
    serviceImg: String,
    serviceCategory: [String], // Categories like grooming, walking, training, etc.
    providerName: String,
    providerLocation: String,
    providerContact: String,
    availability: [{
        dayOfWeek: String, // e.g., "Monday", "Tuesday", etc.
        startTime: String, // e.g., "09:00 AM"
        endTime: String // e.g., "05:00 PM"
    }],
    reviews: [{
        username: String,
        rating: Number,
        comment: String,
        date: Date // Date of the review
    }]
});

const serviceModel = mongoose.model("Service", serviceSchema);

module.exports = { serviceModel };
