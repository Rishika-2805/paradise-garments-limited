// Import Inquiry Model
const Inquiry = require("../models/Inquiry");


// Create Inquiry
const createInquiry = async (req, res) => {

    try {

        // Count existing inquiries
        const count = await Inquiry.countDocuments();

        // Generate Tracking ID
        const trackingId = `PGL-${String(count + 1).padStart(4, "0")}`;

        // Create Inquiry
        const inquiry = await Inquiry.create({
            ...req.body,
            trackingId
        });

        res.status(201).json(inquiry);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get All Inquiries
const getAllInquiries = async (req, res) => {

    try {

        const inquiries = await Inquiry.find();

        res.json(inquiries);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// Get Single Inquiry
const getInquiryById = async (req, res) => {

    try {

        const inquiry = await Inquiry.findById(req.params.id);

        if (!inquiry) {

            return res.status(404).json({
                message: "Inquiry not found"
            });

        }

        res.json(inquiry);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Update Inquiry

const updateInquiry = async (req, res) => {

    try {

        const inquiry = await Inquiry.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!inquiry) {

            return res.status(404).json({
                message: "Inquiry not found"
            });

        }

        res.json(inquiry);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Track Inquiry By Tracking ID

const trackInquiry = async (req, res) => {

    try {

        const inquiry = await Inquiry.findOne({
            trackingId: req.params.trackingId
        });

        if (!inquiry) {

            return res.status(404).json({
                message: "Inquiry not found"
            });

        }

        res.json({
            trackingId: inquiry.trackingId,
            status: inquiry.status
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Export Functions
module.exports = {
    createInquiry,
    getAllInquiries,
    getInquiryById,
    updateInquiry,
    trackInquiry
};