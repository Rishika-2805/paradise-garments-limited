// Import Mongoose
const mongoose = require("mongoose");

// Create Inquiry Schema
const inquirySchema = new mongoose.Schema({

    // Company Name
    companyName: {
        type: String,
        required: true
    },

    // Contact Person Name
    contactPersonFirstName: {
        type: String,
        required: true
    },
    contactPersonMiddleName: {
        type: String,
        required: true
    },
    contactPersonLastName: {
        type: String,
        required: true
    },
    // Email Address
    email: {
        type: String,
        required: true
    },

    // Phone Number
    phone: {
        type: String,
        required: true
    },

    // Customer Country
    country: {
        type: String,
        required: true
    },

    // Product Interested In
    // Optional because customer may only want custom manufacturing
    productInterested: {
        type: String
    },

    // Custom Design Required
    customDesignRequired: {
        type: Boolean,
        default: false
    },

    // Design File URL / Path
    // Later this will store AWS S3 URL
    designFile: {
        type: String
    },

    // Customer Requirements
    requirements: {
        type: String,
        required: true
    },

    // Inquiry Status
    status: {
        type: String,
        enum: [
            "New",
            "In Discussion",
            "Quoted",
            "Converted To Order",
            "Closed"
        ],
        default: "New"
    },
    trackingId: {
    type: String,
    unique: true
}

}, {
    timestamps: true
});

// Create Model
const Inquiry = mongoose.model("Inquiry", inquirySchema);

// Export Model
module.exports = Inquiry;