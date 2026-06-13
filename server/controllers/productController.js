// Get All Products

const getAllProducts = (req, res) => {

    const products = [
        {
            id: 1,
            name: "School Uniform",
            type: "Educational"
        },
        {
            id: 2,
            name: "Nurse Uniform",
            type: "Medical"
        },
        {
            id: 3,
            name: "Security Uniform",
            type: "Workers"
        }
    ];

    res.json(products);

};


// Get Single Product

const getProductById = (req, res) => {

    const productId = parseInt(req.params.id);

    const products = [
        {
            id: 1,
            name: "Schools/Colleges Uniform",
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

    const product = products.find((product) => {
        return product.id === productId;
    });

    if (!product) {

        return res.status(404).json({
            message: "Product not found"
        });

    }

    res.json(product);

};


// Export Functions

module.exports = {
    getAllProducts,
    getProductById
};