// Import Mongoose
const mongoose = require("mongoose");

// Create Order Schema
const orderSchema = new mongoose.Schema({

    // Order Number
    orderNumber: {
        type: String,
        unique: true
    },

    // Linked Inquiry
    inquiryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Inquiry",
        required: true
    },

    // Order Quantity
    quantity: {
        type: Number,
        required: true
    },

    // Delivery Country
    country: {
        type: String,
        required: true
    },

    // Admin Notes
    notes: {
        type: String
    },

    // Order Status
    status: {
        type: String,
        enum: [
            "Pending",
            "Production",
            "Ready",
            "Shipped",
            "Delivered"
        ],
        default: "Pending"
    }

}, {
    timestamps: true
});

// Create Model
const Order = mongoose.model("Order", orderSchema);

// Export Model
module.exports = Order;