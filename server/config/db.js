// Import Mongoose
const mongoose = require("mongoose");


// Database Connection Function
const connectDB = async () => {

    try {

        console.log("Database connection function ready");

    } catch (error) {

        console.log(error);

    }

};


// Export Function
module.exports = connectDB;