// Import Express
const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

// Import Controller Functions
const {
    createInquiry,
    getAllInquiries,
    getInquiryById,
    updateInquiry,
    trackInquiry
} = require("../controllers/inquiryController");


// Routes

router.post("/", createInquiry);

router.get("/", protect ,getAllInquiries);

router.get("/track/:trackingId", trackInquiry);

router.get("/:id", protect , getInquiryById);

router.put("/:id", protect , updateInquiry);


// Export Router
module.exports = router;