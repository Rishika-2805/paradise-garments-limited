// Import Express
const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// Import Controller Functions
const {
    createInquiry,
    getAllInquiries,
    getInquiryById,
    updateInquiry,
    trackInquiry
} = require("../controllers/inquiryController");


// Routes

router.post("/", upload.single("designFile"), createInquiry);

router.get("/",protect,getAllInquiries);

router.get("/track/:trackingId", trackInquiry);

router.get("/:id", protect , getInquiryById);

router.put("/:id", protect , updateInquiry);


// Export Router
module.exports = router;