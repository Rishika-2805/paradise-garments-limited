console.log("🔥 createInquiry API HIT");
// Import Inquiry Model
const Inquiry = require("../models/Inquiry");

// generate random tracking ID
const generateTrackingId = () => {
  return "TRK-" + Math.random().toString(36).substring(2, 10).toUpperCase();
};

const createInquiry = async (req, res) => {
  try {
    const newInquiry = new Inquiry({
      ...req.body,
      designFile: req.file ? req.file.filename : null,
      trackingId: generateTrackingId()
    });

    await newInquiry.save();

    res.status(201).json({
      message: "Inquiry submitted successfully",
      trackingId: newInquiry.trackingId
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createInquiry
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