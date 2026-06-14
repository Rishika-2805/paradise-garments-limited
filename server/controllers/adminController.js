// Import Modules
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");

// Register Admin
const registerAdmin = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        // Check Existing Admin
        const adminExists = await Admin.findOne({ email });

        if (adminExists) {

            return res.status(400).json({
                message: "Admin already exists"
            });

        }

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create Admin
        const admin = await Admin.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "Admin registered successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Login Admin

const loginAdmin = async (req, res) => {

    try {

        const { email, password } = req.body;

        // Find Admin
        const admin = await Admin.findOne({ email });

        if (!admin) {

            return res.status(400).json({
                message: "Invalid email or password"
            });

        }

        // Compare Password
        const isMatch = await bcrypt.compare(
            password,
            admin.password
        );

        if (!isMatch) {

            return res.status(400).json({
                message: "Invalid email or password"
            });

        }

        // Generate JWT Token
        const token = jwt.sign(
            {
                id: admin._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.json({
            message: "Login successful",
            token
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    registerAdmin,
    loginAdmin
};