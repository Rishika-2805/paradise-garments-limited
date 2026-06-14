// Import Mongoose
const mongoose = require("mongoose");

// Create Admin Schema
const adminSchema = new mongoose.Schema({

    // Admin Name
    name: {
        type: String,
        required: true
    },

    // Admin Email
    email: {
        type: String,
        required: true,
        unique: true
    },

    // Admin Password
    password: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

// Create Model
const Admin = mongoose.model("Admin", adminSchema);

// Export Model
module.exports = Admin;