const Assessment = require("../models/Assessment");
const { generateLearningPath } = require("../services/ai.service");

exports.getRoadmap = (req, res) => {
  res.json({
    subject: "Backend Development",
    level: "Beginner → Advanced",
    topics: [
      { id: "db1", label: "Database Fundamentals", level: "Beginner", hours: 3 },
      { id: "sql", label: "SQL Essentials", level: "Beginner", hours: 6 },
      { id: "node", label: "Node.js Fundamentals", level: "Beginner", hours: 4 },

      { id: "db2", label: "Database Design", level: "Intermediate", hours: 5 },
      { id: "mongo", label: "MongoDB & NoSQL", level: "Intermediate", hours: 6 },
      { id: "express", label: "Express.js", level: "Intermediate", hours: 6 },

      { id: "advdb", label: "Advanced Databases", level: "Advanced", hours: 8 },
      { id: "advnode", label: "Advanced Node.js", level: "Advanced", hours: 7 },
    ],
    edges: [
      ["db1", "sql"],
      ["sql", "db2"],
      ["db2", "mongo"],
      ["node", "express"],
      ["express", "advnode"],
      ["mongo", "advdb"],
    ],
  });
};

