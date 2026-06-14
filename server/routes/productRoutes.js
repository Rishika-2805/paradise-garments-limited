// Import Express
const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

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

router.post("/", protect, createProduct);

router.get("/:id", getProductById);

router.put("/:id", protect,  updateProduct);

router.delete("/:id", protect, deleteProduct);

// Export Router
module.exports = router;