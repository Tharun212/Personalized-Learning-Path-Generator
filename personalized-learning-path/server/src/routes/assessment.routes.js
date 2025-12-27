const express = require("express");
const router = express.Router();
const {
  createAssessment,
  getAssessments,
} = require("../controllers/assessment.controller");

router.post("/", createAssessment);
router.get("/", getAssessments);

module.exports = router;
