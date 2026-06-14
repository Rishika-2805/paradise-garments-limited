const express = require("express");

const router = express.Router();

const {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder
} = require("../controllers/orderController");

const {
    protect
} = require("../middleware/authMiddleware");


// All Order Routes Are Admin Only

router.post("/", protect, createOrder);

router.get("/", protect, getAllOrders);

router.get("/:id", protect, getOrderById);

router.put("/:id", protect, updateOrder);

module.exports = router;