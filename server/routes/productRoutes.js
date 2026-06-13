// Import Express
const express = require("express");

const router = express.Router();


// Import Controller Functions
const {
    getAllProducts,
    getProductById
} = require("../controllers/productController");


// Routes

router.get("/", getAllProducts);

router.get("/:id", getProductById);


// Export Router
module.exports = router;