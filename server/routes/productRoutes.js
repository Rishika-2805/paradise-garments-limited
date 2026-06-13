// Import Express
const express = require("express");

const router = express.Router();


// Import Controller Functions
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");


// Routes

router.get("/", getAllProducts);

router.post("/", createProduct);

router.get("/:id", getProductById);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

// Export Router
module.exports = router;