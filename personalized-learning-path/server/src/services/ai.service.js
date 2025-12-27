exports.generateLearningPath = (subject, score) => {
  let level = "Beginner";
  let topics = [];

  if (score >= 70) {
    level = "Advanced";
    topics = [
      { id: "closures", title: "Closures", prerequisites: [] },
      { id: "async", title: "Async / Await", prerequisites: ["closures"] },
      {
        id: "performance",
        title: "Performance Optimization",
        prerequisites: ["async"],
      },
    ];
  } else if (score >= 40) {
    level = "Intermediate";
    topics = [
      { id: "functions", title: "Functions & Scope", prerequisites: [] },
      { id: "dom", title: "DOM Manipulation", prerequisites: ["functions"] },
      { id: "async", title: "Async JavaScript", prerequisites: ["dom"] },
    ];
  } else {
    level = "Beginner";
    topics = [
      { id: "basics", title: "JavaScript Basics", prerequisites: [] },
      {
        id: "variables",
        title: "Variables & Data Types",
        prerequisites: ["basics"],
      },
      {
        id: "loops",
        title: "Loops & Conditions",
        prerequisites: ["variables"],
      },
    ];
  }

  return { subject, level, topics };
};
