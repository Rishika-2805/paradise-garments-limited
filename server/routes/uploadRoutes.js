const express = require("express");

const router = express.Router();

const upload = require("../middleware/uploadMiddleware");


// Upload Design File

router.post(
    "/",
    upload.single("designFile"),
    (req, res) => {

        res.status(200).json({

            message: "File uploaded successfully",

            filePath: req.file.path

        });

    }
);

module.exports = router;