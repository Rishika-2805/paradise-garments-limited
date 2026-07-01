require("dotenv").config();
// Import Express framework
const cors = require("cors");

const express = require("express");

const path = require("path");
// Create Express application
const app = express();
// Parse JSON Request Body
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());
app.use(
    "/uploads",
    express.static(
        path.join(__dirname, "uploads")
    )
);
// Import Product Routes
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

const connectDB = require("./config/db");
connectDB();

const inquiryRoutes = require("./routes/inquiryRoutes");

app.use("/api/inquiry", inquiryRoutes);

const adminRoutes = require("./routes/adminRoutes");
app.use("/api/admin", adminRoutes);

const uploadRoutes = require("./routes/uploadRoutes");
app.use("/upload", uploadRoutes);

const orderRoutes = require("./routes/orderRoutes");
app.use("/orders", orderRoutes);

// Home Route
app.get("/", (req, res) => {

    console.log("Home page visited");

    res.send("Welcome to PGL Backend");

});





// Start Server
app.listen(process.env.PORT, () => {

    console.log(`Server running on port ${process.env.PORT}`);

});