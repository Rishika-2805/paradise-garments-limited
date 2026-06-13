// Get All Products
const Product = require("../models/Product");
// Get All Products
const getAllProducts = async (req, res) => {

    try {

        const products = await Product.find();

        res.json(products);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// Get Single Product

// Get Single Product
const getProductById = async (req, res) => {

    try {

        const product = await Product.findById(req.params.id);

        if (!product) {

            return res.status(404).json({
                message: "Product not found"
            });

        }

        res.json(product);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// Export Functions

module.exports = {
    getAllProducts,
    getProductById
};