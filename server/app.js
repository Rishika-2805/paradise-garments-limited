require("dotenv").config();
// Import Express framework
const express = require("express");

// Create Express application
const app = express();
// Parse JSON Request Body
app.use(express.json());

// Import Product Routes
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");
connectDB();
// Home Route
app.get("/", (req, res) => {

    console.log("Home page visited");

    res.send("Welcome to PGL Backend");

});


// Product Routes
app.use("/products", productRoutes);


// Start Server
app.listen(process.env.PORT, () => {

    console.log(`Server running on port ${process.env.PORT}`);

});