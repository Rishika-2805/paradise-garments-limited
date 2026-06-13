// Import Express framework
const express = require("express");

// Create Express application
const app = express();

// Import Product Routes
const productRoutes = require("./routes/productRoutes");


// Home Route
app.get("/", (req, res) => {

    console.log("Home page visited");

    res.send("Welcome to PGL Backend");

});


// Product Routes
app.use("/products", productRoutes);


// Start Server
app.listen(5000, () => {

    console.log("Server running on port 5000");

});