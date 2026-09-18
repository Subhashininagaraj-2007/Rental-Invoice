const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { connectDB } = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "Rental Invoicing API is running"
    });
});

// Connect to MySQL
connectDB();

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});