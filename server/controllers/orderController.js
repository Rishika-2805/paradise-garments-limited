// Import Order Model
const Order = require("../models/Order");


// Create Order
const createOrder = async (req, res) => {

    try {

        const count = await Order.countDocuments();

        const orderNumber =
            `PGL-ORD-${String(count + 1).padStart(4, "0")}`;

        const order = await Order.create({
            ...req.body,
            orderNumber
        });

        res.status(201).json(order);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// Get All Orders
const getAllOrders = async (req, res) => {

    try {

        const orders = await Order.find()
            .populate("inquiryId");

        res.json(orders);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// Get Single Order
const getOrderById = async (req, res) => {

    try {

        const order = await Order.findById(
            req.params.id
        ).populate("inquiryId");

        if (!order) {

            return res.status(404).json({
                message: "Order not found"
            });

        }

        res.json(order);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// Update Order
const updateOrder = async (req, res) => {

    try {

        const order = await Order.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!order) {

            return res.status(404).json({
                message: "Order not found"
            });

        }

        res.json(order);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder
};