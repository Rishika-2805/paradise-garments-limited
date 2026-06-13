// Import Express framework
const express = require("express");

// Create Express application
const app = express();


// Home Route
// URL: http://localhost:5000/
app.get("/", (req, res) => {

    console.log("Home page visited");

    res.send("Welcome to PGL Backend");

});


// Products Route
// URL: http://localhost:5000/products
app.get("/products", (req, res) => {

    // Temporary product data
    // Later this will come from MongoDB
    const products = [
        {
            id: 1,
            name: "School/Colleges Uniform",
            type: "Educational"
        },
        {
            id: 2,
            name: "Medical Uniform",
            type: "Medical"
        },
        {
            id: 3,
            name: "Workers Uniform",
            type: "Other Workers"
        }
    ];

    // Send products as JSON response
    res.json(products);

});


// Start server on port 5000
app.listen(5000, () => {

    console.log("Server running on port 5000");

});