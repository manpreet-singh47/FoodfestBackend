// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userCreate");
const productPurchased = require("./Routes/purchasedProductRoute");
const cors = require("cors");
require("dotenv").config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse JSON bodies
app.use(cors());

// Routes
app.use("/api", userRoute);
app.use("/api", productPurchased);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Database Connected");
  });
});
