const multer = require("multer");

const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        cb(null, "uploads/");
    },

    filename: (req, file, cb) => {

        cb(
            null,
            Date.now() + "-" + file.originalname
        );

    }

});

const fileFilter = (req, file, cb) => {

    const allowedTypes = [
        "application/pdf",
        "image/png",
        "image/jpeg"
    ];

    if (allowedTypes.includes(file.mimetype)) {

        cb(null, true);

    } else {

        cb(
            new Error(
                "Only PDF, PNG and JPG files are allowed"
            ),
            false
        );

    }

};

const upload = multer({

    storage,

    limits: {
        fileSize: 5 * 1024 * 1024
    },

    fileFilter

});

module.exports = upload;