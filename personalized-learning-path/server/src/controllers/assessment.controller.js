const Assessment = require("../models/Assessment");

// POST: Create new assessment


exports.createAssessment = async (req, res) => {
  try {
    const { subject, score, total, percentage } = req.body;

    if (
      subject === undefined ||
      score === undefined ||
      total === undefined ||
      percentage === undefined
    ) {
      return res.status(400).json({ message: "All fields required" });
    }

    const assessment = await Assessment.create({
      subject,
      score,
      total,
      percentage, 
    });

    res.status(201).json(assessment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};



// GET: Fetch all assessments
exports.getAssessments = async (req, res) => {
  try {
    const assessments = await Assessment.find().sort({ createdAt: -1 });
    res.json(assessments);
  } catch (error) {
    console.error("Get Assessments Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
