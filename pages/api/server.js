const express = require("express");
const cors = require("cors");
const connectDB = require("./api/config/db");
const userRoutes = require("./api/routes/userRoutes");
require("dotenv").config();

// Initialize the express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Routes
app.use("/api/users", userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
