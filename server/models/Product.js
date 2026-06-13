// Import Mongoose
const mongoose = require("mongoose");

// Create Product Schema
const productSchema = new mongoose.Schema({

    // Product Name
    name: {
        type: String,
        required: true
    },

    // Educational | Medical | Workers
    type: {
        type: String,
        required: true
    },

    // Product Description
    description: {
        type: String,
        required: true
    },

    // Product Images
    images: [
        {
            type: String
        }
    ],

    // Country/Region Wise Sizes
    sizeOptions: [
        {
            region: {
                type: String,
                required: true
            },

            sizes: [
                {
                    type: String
                }
            ]
        }
    ]

}, {
    timestamps: true
});

// Create Product Model
const Product = mongoose.model("Product", productSchema);

// Export Product Model
module.exports = Product;