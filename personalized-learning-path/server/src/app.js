const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const assessmentRoutes = require("./routes/assessment.routes");
app.use("/assessment", assessmentRoutes);

const roadmapRoutes = require("./routes/roadmap.routes");
app.use("/roadmap", roadmapRoutes);



// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

module.exports = app;
